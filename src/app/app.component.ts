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

  facultades = [
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-fcfm-emblema.png',
      nombre: 'Facultad de Ciencias Físico Matemáticas',
      lon: -100.315189,
      lat: 25.725811
    },
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-fcb-emblema.png',
      nombre: 'Facultad de Ciencias Biológicas',
      lon: -100.316357,
      lat: 25.724407
    },
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-ffyl-emblema.png',
      nombre: 'Facultad de Filosofía y Letras',
      lon: -100.310445,
      lat: 25.727173
    },
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-fcq-emblema.png',
      nombre: 'Facultad de Ciencias Químicas',
      lon: -100.315443,
      lat: 25.724359
    },
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-fic-emblema.png',
      nombre: 'Facultad de Ingeniería Civil',
      lon: -100.314080,
      lat: 25.724638
    },
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-fime-emblema.png',
      nombre: 'Facultad de Ingeniería Mecánica y Eléctrica ',
      lon: -100.313421,
      lat: 25.725043
    },
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-farq-emblema.png',
      nombre: 'Facultad de Arquitectura ',
      lon: -100.312045,
      lat: 25.725223
    },
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-facdyc-emblema.png',
      nombre: 'Facultad de Derecho y Criminología',
      lon:  -100.310601,
      lat: 25.726505
    },
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-facpya-emblema.png',
      nombre: 'Facultad de Contaduría Pública y Administración',
      lon: -100.309187,
      lat: 25.727366
    },
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-ftsydh-emblema.png',
      nombre: 'Facultad de Trabajo Social y Desarrollo Humano',
      lon: -100.310075,
      lat: 25.727857
    },
    {
      logo: 'https://www.uanl.mx/wp-content/uploads/2019/05/logo-fod-emblema.png',
      nombre: 'Facultad de Organización Deportiva',
      lon: -100.312214,
      lat: 25.728625
    }
  ];
  
  mapa: Mapboxgl.Map;

  marker2;

  ngOnInit(){

    Mapboxgl.accessToken = environment.mapboxKey;

   this.mapa = new Mapboxgl.Map({
    container: 'mapa-mapbox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-100.310 , 25.72483], // starting position
    zoom: 15, // starting zoom
    });
    
    //this.mapa.addControl(new Mapboxgl.FullscreenControl());
    this.facultades.forEach(facultad => this.crearMarcador(facultad));
  }

  crearMarcador(parm){

    var el = document.createElement('img');
    el.src=parm.logo;
    el.style.width = '50px';
    el.style.height = '50px';

    const marker = new Mapboxgl.Marker(el).setLngLat([parm.lon, parm.lat]).addTo(this.mapa);
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




