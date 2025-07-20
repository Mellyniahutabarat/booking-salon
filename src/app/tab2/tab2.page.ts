import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProviders } from '../../providers/post-providers';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule
  ]
})
export class Tab2Page implements OnInit {

  nama: string = '';
  nohp: string = '';
  alamat: string = '';
  jeniskelamin: string = '';
  treatment: string = '';
  jumlahbookingan: string = '';
  waktu: string = '';
  handleby: string = '';

  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProviders,
  ) {

  }

  ngOnInit() {
  }

  async addAppoitment() {
    if (this.nama == '') {
      const toast = await this.toastController.create({
        message: 'Nama lengkap harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.nohp == '') {
      const toast = await this.toastController.create({
        message: 'No HP/WA harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.alamat == '') {
      const toast = await this.toastController.create({
        message: 'alamat harus di isi',
        duration: 2000
      });
      toast.present();

    } else if (this.jeniskelamin == '') {
      const toast = await this.toastController.create({
        message: 'jeniskelamin harus di isi',
        duration: 2000
      });
      toast.present();

    } else if (this.treatment == '') {
      const toast = await this.toastController.create({
        message: 'treatment  harus di isi',
        duration: 2000
      });
      toast.present();

         } else if (this.waktu == '') {
      const toast = await this.toastController.create({
        message: 'waktu  harus di isi',
        duration: 2000
      });
      toast.present();

         } else if (this.jumlahbookingan == '') {
      const toast = await this.toastController.create({
        message: 'jumlahbookigan  harus di isi',
        duration: 2000
      });
      toast.present();

      } else if (this.handleby == '') {
      const toast = await this.toastController.create({
        message: 'handleby  harus di isi',
        duration: 2000
      });
      toast.present();
    } else {
      let body = {
        nama: this.nama,
        nohp: this.nohp,
        alamat: this.alamat,
        jeniskelamin: this.jeniskelamin,
        treatment: this.treatment,
        waktu: this.waktu,
        jumlahbookingan: this.jumlahbookingan,
        handleby: this.handleby,
        aksi: 'add_appoitment',
      };
      this.postPvdr.postData(body, 'action.php').subscribe(async data => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/tabs/tab4']);
          const toast = await this.toastController.create({
            message: 'Selamat! layanan menail salon.',
            duration: 2000
          });
          toast.present();
        } else {
          const toast = await this.toastController.create({
            message: alertpesan,
            duration: 2000
          });
          // YANG KURANG:
          toast.present(); // <-- ini harus ditambahkan
        }

      });

    }
  }
}