-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Jul 2025 pada 08.15
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `layanan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `appoitment`
--

CREATE TABLE `appoitment` (
  `id` int(5) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `nohp` varchar(13) NOT NULL,
  `alamat` text NOT NULL,
  `jeniskelamin` varchar(35) NOT NULL,
  `treatment` varchar(35) NOT NULL,
  `waktu` time NOT NULL,
  `jumlahbookingan` int(10) NOT NULL,
  `handleby` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `appoitment`
--

INSERT INTO `appoitment` (`id`, `nama`, `nohp`, `alamat`, `jeniskelamin`, `treatment`, `waktu`, `jumlahbookingan`, `handleby`) VALUES
(38, 'lisa ', '0853654231', 'jln.gatot subroto', 'perempuan', 'Cat eye', '09:00:00', 1, 'caca'),
(39, 'keke', '08654321', 'jln dumai medan', 'perempuan', 'Cat eye', '11:00:00', 1, 'andayani'),
(40, 'dumaris', '08654321', 'jln dumai medan', 'perempuan', 'Cat eye', '11:00:00', 1, 'andayani'),
(41, 'riris', '08654321', 'jln dumai medan', 'perempuan', 'Cat eye', '11:00:00', 1, 'andayani');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `appoitment`
--
ALTER TABLE `appoitment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `appoitment`
--
ALTER TABLE `appoitment`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
