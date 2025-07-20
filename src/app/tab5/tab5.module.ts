import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // ✅ Penting!
import { RouterModule } from '@angular/router';
import { Tab5Page } from './tab5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // ✅ Modul komponen-komponen <ion-...>
    RouterModule.forChild([{ path: '', component: Tab5Page }])
  ],

})
export class Tab5PageModule {}
