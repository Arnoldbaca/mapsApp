import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface markerAndColor {
  color:string;
  marker:Marker;
}

interface PlainMarker {
  color:string;
  lngLat:number[]
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef

  public markers:markerAndColor[]= []
  public map?:Map
  public currentCenter:LngLat= new LngLat(-109.9509845,27.499758)
  public houseLngLat:LngLat = new LngLat(-109.93164765281745, 27.584363634461084)

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento HTML no fue encontrado'

    // const map = new Map({
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });


    this.readFromLocalStorage()
    // const markerHtml = document.createElement('div')
    // markerHtml.innerHTML='Arnold Baca'

    // const marker = new Marker({
    //   // color:'red  '
    // }).setLngLat(this.currentCenter)
    // .addTo(this.map)

    // // const markerHouse = new Marker({element:markerHtml}).setLngLat(this.houseLngLat)
    // // .addTo(this.map)
    // const markerHouse = new Marker().setLngLat(this.houseLngLat)
    // .addTo(this.map)

  }

  createMarker(){

    if (!this.map) return

    const lgnLat=this.map.getCenter()
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.addMarker(lgnLat, color )
  }

  addMarker(lngLat:LngLat, color:string){
    if (!this.map) return

    const marker = new Marker({
      color:color,
      draggable:true
    })
    .setLngLat(lngLat)
    .addTo( this.map )

    this.markers.push({
      color:color,
      marker:marker})

    this.saveToLocalStorage()

    marker.on('dragend',(env)=>{
      this.saveToLocalStorage()
    })

  }

  deleteMarker(index:number){
    this.markers[index].marker.remove()
    this.markers.splice(index,1)
  }

  // flyTo(index:number){
  //   this.map?.flyTo({
  //     zoom:14,
  //     center:this.markers[index].marker.getLngLat()
  //   })
  // }

  flyTo(marker:Marker){
    this.map?.flyTo({
      zoom:14,
      center:marker.getLngLat()
    })
  }

  saveToLocalStorage(){
    const plainMarkers: PlainMarker[] = this.markers.map(({color,marker}) =>{

      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }

    })
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers))
  }

  readFromLocalStorage(){
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]'
    const plainMarkers:PlainMarker[] = JSON.parse(plainMarkersString) //! Ojo! sabemos que tiene datos

    plainMarkers.forEach(({color,lngLat})=>{
      const [lng, lat]= lngLat
      const coords = new LngLat(lng,lat)


      this.addMarker(coords,color)
    })

  }


}
