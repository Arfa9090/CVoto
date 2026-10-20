# CVoto - Platform Pembuat CV Siswa SMK Otomatis untuk PKL

Platform website interaktif pembuat CV khusus siswa SMK yang siap terjun ke dunia kerja melalui program **Praktek Kerja Lapangan (PKL)**. Dilengkapi dengan formulir input otomatis, *live preview* real-time, dan fitur unduh dokumen CV format PDF standar HRD (*ATS-friendly*).

---

## 📁 Struktur Berkas (File Separation)

Sesuai spesifikasi proyek, seluruh kode dipisahkan secara modular dan bersih:

| Berkas | Deskripsi |
|---|---|
| [`index.html`](file:///c:/Users/ASUS/OneDrive/Attachments/CODING%20TES/CVoto/index.html) | Struktur HTML semantik, formulir input dinamis, dan canvas pratinjau lembar CV. |
| [`Halaman.html`](file:///c:/Users/ASUS/OneDrive/Attachments/CODING%20TES/CVoto/Halaman.html) | Berkas HTML identik yang langsung dapat dibuka melalui browser lokal. |
| [`style.css`](file:///c:/Users/ASUS/OneDrive/Attachments/CODING%20TES/CVoto/style.css) | Desain antarmuka modern, sistem split-view responsif, dan aturan `@media print` ukuran A4. |
| [`script.js`](file:///c:/Users/ASUS/OneDrive/Attachments/CODING%20TES/CVoto/script.js) | Logika *two-way data binding*, unggah foto lokal, upload sertifikat/URL, preset jurusan, dan mesin download PDF. |

---

## 🌟 Fitur & Tata Letak CV Terbaru

1. **Header Identitas & Kontak Sejajar Foto**:
   - **Foto Formal**: Berada di posisi paling kiri dengan border tegas dan sudut membulat.
   - **Blok Identitas & Kontak**: Berada tepat di sebelah kanan foto, memuat Nama Lengkap, Jurusan, Asal SMK, serta daftar kontak lengkap (Nomor Telepon/WA, Email, Alamat/Domisili, LinkedIn, dan GitHub/Portofolio).
2. **Riwayat Pendidikan Lengkap (SD hingga SMK)**:
   - Mencakup jenjang **SMK** (Nama SMK, Jurusan, Periode), **SMP** (Nama SMP, Periode), dan **SD** (Nama SD, Periode).
   - Ditampilkan dalam format *timeline* pendidikan yang rapi di kolom kiri CV.
3. **Preset Jurusan Vokasi**:
   - **RPL**: Rekayasa Perangkat Lunak (Web & Software Developer)
   - **MPLB**: Manajemen Perkantoran & Layanan Bisnis (Administrasi & Kearsipan Digital)
   - **AKL**: Akuntansi & Keuangan Lembaga (Siklus Akuntansi, Excel Finansial & Pajak)
4. **Tentang Saya (*About Me*)**:
   - Ringkasan profil *elevator pitch* (3-4 kalimat berbobot) yang menonjolkan fokus keahlian, minat industri, dan etos kerja.
5. **Pengalaman Proyek & Organisasi**:
   - Pencatatan proyek *Teaching Factory* (TEFA), kepengurusan OSIS, dan pengalaman teknis tanpa kolom periode waktu.
6. **Keahlian (Skills) — Tanpa Persentase**:
   - **Keahlian Teknis (Hard Skills)**: Ditampilkan sebagai *badges* profesional yang bersih tanpa bar/angka persentase sesuai standar CV industri terkini.
   - **Soft Skills**: Tampilan *badges / chips* sikap kerja industri (*problem solving*, kerja sama tim, disiplin waktu).
7. **Prestasi & Sertifikat — Link URL & Upload Berkas**:
   - Dilengkapi **Tautan URL Bukti Sertifikat** (Google Drive, Dicoding, dll.) serta tombol **Upload Berkas Langsung** dari perangkat.
   - Pada lembar CV, tampil sebagai tautan aktif (*clickable link*) `"Lihat Bukti Sertifikat ↗"` sehingga dapat langsung diklik oleh HRD/perekrut.
8. **Tempat Unduh Hasil CV (PDF)**:
   - Tombol **"Download CV (PDF)"** tersedia di bagian *header*, toolbar pratinjau, dan bagian bawah formulir.
   - Menghasilkan dokumen A4 bersih, proporsional, dan *ATS-friendly* siap cetak atau simpan ke PDF.

---

## 🛠️ Cara Menjalankan

1. Buka folder proyek di File Explorer.
2. Klik ganda pada berkas [`index.html`](file:///c:/Users/ASUS/OneDrive/Attachments/CODING%20TES/CVoto/index.html) atau [`Halaman.html`](file:///c:/Users/ASUS/OneDrive/Attachments/CODING%20TES/CVoto/Halaman.html).
3. Halaman akan langsung terbuka di browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari) tanpa memerlukan instalasi aplikasi tambahan atau server lokal.
