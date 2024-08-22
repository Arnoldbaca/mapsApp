import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';
import { NEVER } from 'rxjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{



  @ViewChild('map') divMap?: ElementRef

  public zoom:number = 13
  public map?:Map
  public currentCenter:LngLat= new LngLat(-109.9509845,27.499758)

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento HTML no fue encontrado'

    // const map = new Map({
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListener()
  }

  ngOnDestroy(): void {
    this.map?.remove()
  }

  mapListener(){

    if (!this.map) throw 'El mapa no ha sido inicializado'

    this.map.on('zoom',(ev) => {
      this.zoom=this.map!.getZoom()
    })

    this.map.on('zoomend',(ev) => {
      if (this.map!.getZoom()<18) return
      this.map!.zoomTo(18)
    })

    this.map.on('move',(ev)=>{
      this.currentCenter=this.map!.getCenter()
      // const {lng, lat} = this.currentCenter
    })

  }


  zoomIn(){
    this.map?.zoomIn()
  }

  zoomOut(){
    this.map?.zoomOut()
  }

  zoomChanged(value:string){
    this.zoom= Number(value)
    this.map?.zoomTo(this.zoom)
  }

}
