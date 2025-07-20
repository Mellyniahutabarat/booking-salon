import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProviders } from '../../providers/post-providers';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule
  ]
})
export class Tab4Page implements OnInit {

  appoitment: any[] = [];
  limit: number = 10;
  start: number = 0;

  constructor(
   public toastController: ToastController,
   private postPvdr: PostProviders 
  ) {}

  ngOnInit() {
    // Bisa tambahkan this.loadAppoitment(); jika ingin langsung load saat dibuka
  }

  ionViewWillEnter() {
    this.appoitment = [];
    this.start = 0;
    this.loadAppoitment();
  }

  doRefresh(event: any) {
    setTimeout(() => {
      this.ionViewWillEnter(); // reload dari awal
      event.target.complete();
    }, 500);
  }

  loadData(event: any) {
    this.start += this.limit;
    setTimeout(() => {
      this.loadAppoitment().then(() => {
        event.target.complete();
      });
    }, 500);
  }

  async loadAppoitment(): Promise<void> {
    let body = {
        aksi: 'getdata',//pastikan cocok dengan di action.php
        limit: this.limit,
        start: this.start,
      
      };

      this.postPvdr.postData(body, 'action.php').subscribe(async data => {
        if (data.success) {
          this.appoitment = this.appoitment.concat(data.result);
        }else {
          const toast = await this.toastController.create({
            message: 'gagal memuat data.',
            duration: 2000
      });
        toast.present();
        }
    });
  }
  }