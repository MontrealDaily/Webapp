import { Component } from '@angular/core';
import { TabsPage } from './tabs/tabs.page';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  rootPage:any = TabsPage
  
  constructor(platform: Platform) {
    platform.ready().then(() => {});
  }
}
