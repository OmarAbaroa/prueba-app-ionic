import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    
    {
      title: 'Noticias',
      url: '/noticias',
      icon: 'notifications'
    },
    {
      title: 'Calendario',
      url: '/calendario',
      icon: 'calendar'
    },
    {
      title: 'Filtro',
      url: '/filtro',
      icon: 'options'
    },
    {
      title: 'Facebook',
      url: '/facebook',
      icon: 'logo-facebook'
    }
  ];

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
