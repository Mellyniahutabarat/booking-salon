import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab5Page {
  layanan = [
    { nama: 'Hair Cut', deskripsi: 'Model potongan rambut', gambar: 'assets/images/salon4.jpg', kategori: 'haircut' },
    { nama: 'Eyelash', deskripsi: 'Model eyelash cantik', gambar: 'assets/images/single8.jpg', kategori: 'eyelash' },
    { nama: 'Nail Art', deskripsi: 'Model kuku kreatif', gambar: 'assets/images/nail6.jpg', kategori: 'nailart' },
    { nama: 'Hair Spa', deskripsi: 'Perawatan spa rambut', gambar: 'assets/images/spa3.jpg', kategori: 'hairspa' },
  ];

  selectedKategori: string | null = null;

  modelGambar: { [key: string]: string[] } = {
    haircut: [
      'assets/images/cut1.jpg',
      'assets/images/cut2.jpg',
      'assets/images/cut4.jpg',
      'assets/images/cut5.jpg',
      'assets/images/cut6.jpg',
      'assets/images/cut7.jpg',
      'assets/images/cut8.jpg',
      'assets/images/cut9.jpg',
      'assets/images/cut10.jpg',
      
      
    ],
    eyelash: [
      'assets/images/single1.jpg',
      'assets/images/single2.jpg',
      'assets/images/single3.jpg',
      'assets/images/single4.jpg',
      'assets/images/single5.jpg',
      'assets/images/single6.jpg',
      'assets/images/single7.jpg',
      'assets/images/single8.jpg',
      'assets/images/single9.jpg',
      'assets/images/single10.jpg',
      'assets/images/single11.jpg',
    ],
    nailart: [
      'assets/images/nail1.jpg',
      'assets/images/nail2.jpg',
      'assets/images/nail3.jpg',
      'assets/images/nail4.jpg',
      'assets/images/nail5.jpg',
      'assets/images/nail7.jpg',
      'assets/images/nail8.jpg',
      'assets/images/nail9.jpg',
      'assets/images/nail10.jpg',
      'assets/images/nail11.jpg',
      'assets/images/nail12.jpg',
      'assets/images/nail3.jpg',
      'assets/images/nail4.jpg',
      'assets/images/nail5.jpg',
      'assets/images/nail6.jpg',
    ],
    hairspa: [
      'assets/images/spa1.jpg',
      'assets/images/spa2.jpg',
      'assets/images/spa3.jpg',
       'assets/images/spa4.jpg',
        'assets/images/spa5.jpg',
       'assets/images/spa6.jpg',
    ]
  };

  pilihKategori(kategori: string) {
    this.selectedKategori = kategori;
  }

  kembali() {
    this.selectedKategori = null;
  }
}
