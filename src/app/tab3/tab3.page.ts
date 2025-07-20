import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  salon = {
    name: 'Menail Salon Medan',
    subtitle: 'Salon Kecantikan & Perawatan Tubuh',
    address: 'Jln Skip No.15d, Medan',
    hours: 'Senin - Sabtu, 10.00 - 19.00 WIB',
    phone: '+62 812-3456-7890',
    whatsappLink: 'https://wa.me/6281234567890',
    instagram: '@menail.medan',
    instagramLink: 'https://instagram.com/menail.medan',
    description: 'Menail Salon Medan menyediakan layanan perawatan kuku, rambut, dan tubuh dengan standar kebersihan tinggi dan staf profesional .',
    image: 'assets/images/menail1.jpg'
  };

  layanan = [
  { nama: 'Nail Art', deskripsi: 'Desain kuku unik dan menarik sesuai keinginan.', icon: 'color-palette' },
  { nama: 'Hair Spa', deskripsi: 'Perawatan rambut untuk mengembalikan kilau alami.', icon: 'cut' },
  { nama: 'Eyelash', deskripsi: 'Perawatan kecantikan Mata yang Elegan.', icon: 'happy' },
  { nama: 'Waxing', deskripsi: 'Perawatan tubuh untuk kulit yang lebih mulus dan halus.', icon: 'leaf' }
];
  testimoni = [
  { nama: 'Rina', komentar: 'Pelayanan sangat ramah dan hasil kuku aku cantik banget!', rating: 5 },
  { nama: 'Dewi', komentar: 'Tempatnya nyaman, staf profesional, recommended deh!', rating: 4 },
  { nama: 'Lina', komentar: 'Facialnya bikin wajah segar dan glowing!', rating: 5 }
];

nama = '';
komentar = '';
rating = 5;

submitTestimoni() {
  if (!this.nama || !this.komentar) {
    alert('Mohon isi nama dan komentar');
    return;
  }

  const newTestimoni = {
    nama: this.nama,
    komentar: this.komentar,
    rating: this.rating,
    foto: 'https://i.pravatar.cc/150?u=' + this.nama
  };

  this.testimoni.push(newTestimoni);

  // Reset form
  this.nama = '';
  this.komentar = '';
  this.rating = 5;
}

  constructor() {}
}