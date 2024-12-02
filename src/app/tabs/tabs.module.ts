import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs-routing.module';

@NgModule({
  declarations: [TabsPage],
  imports: [IonicModule, CommonModule, TabsPageRoutingModule],
})
export class TabsPageModule {}