import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular'; // ✅ NavController sudah di sini
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {

  produk = [
    { nama: 'Hair Spa', harga: 75000, gambar: 'assets/images/salon4.jpg' },
    { nama: 'Eyelash Single', harga: 150000, gambar: 'assets/images/salon5.jpg' },
    { nama: 'Eyelash Volume', harga: 250000, gambar: 'assets/images/salon6.jpg' },
    { nama: 'Nail Art', harga: 100000, gambar: 'assets/images/salon2.jpg' },
    { nama: 'Hair Cut', harga: 50000, gambar: 'assets/images/salon7.jpg' },
    { nama: 'Makeup', harga: 200000, gambar: 'assets/images/salon10.jpg' },
    { nama: 'Cat Warna', harga: 400000, gambar: 'assets/images/salon9.jpg' },
    { nama: 'Sanggul Wisuda dan Makeup', harga: 250000, gambar: 'assets/images/salon1.jpg' },
  ];

  groupedProduk: any[][] = [];

  slideOpts = {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
  };

  constructor(
    private http: HttpClient,
    private navCtrl: NavController // 👉 Tambahan untuk navigasi ke Tab2
  ) {
    this.groupProduk();
    this.getSummary();
  }

  groupProduk() {
    const size = 3;
    for (let i = 0; i < this.produk.length; i += size) {
      this.groupedProduk.push(this.produk.slice(i, i + size));
    }
  }

  getSummary() {
    const url = 'http://localhost/htdogt/api.php'; // Ganti ke IP server jika perlu
    const requestData = {
      aksi: 'getdata',
      start: 0,
      limit: 100
    };
  }

  // ✅ Fungsi navigasi ke tab2
  goToTab2() {
    this.navCtrl.navigateForward('/tabs/tab2');
  }
  goToTab4() {
    this.navCtrl.navigateForward('/tabs/tab4');

    
}
}