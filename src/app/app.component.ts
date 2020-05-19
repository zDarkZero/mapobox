import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  mapa: Mapboxgl.Map;

  ngOnInit(){

    Mapboxgl.accessToken = environment.mapboxKey;

   this.mapa = new Mapboxgl.Map({
    container: 'mapa-mapbox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-100.310 , 25.72483], // starting position
    zoom: 15 // starting zoom
    });
    this.crearMarcador(-100.310 , 25.72483);
  }

  crearMarcador(lng: number, lat: number){
    const marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}




