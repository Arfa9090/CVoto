/* ==========================================================================
   CVOTO - PLATFORM PEMBUAT CV SISWA SMK OTOMATIS
   File: script.js (Logika Interaktif, Live Preview, & Download PDF)
   ========================================================================== */

// --- 1. DATA PRESET LENGKAP UNTUK 3 JURUSAN SMK: RPL, MPLB, DAN AKL ---
const PRESETS = {
  rpl: {
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    fullName: 'Muhammad Rizky Pratama',
    major: 'Rekayasa Perangkat Lunak (PPLG)',
    school: 'SMK Negeri 4 Bandung',
    email: 'rizky.smk4@email.com',
    phone: '+62 812-3456-7890',
    location: 'Bandung, Jawa Barat',
    linkedin: 'linkedin.com/in/rizky-smk',
    github: 'github.com/rizky-smk',
    
    // Riwayat Pendidikan SD hingga SMK
    education: {
      smkName: 'SMK Negeri 4 Bandung',
      smkMajor: 'Rekayasa Perangkat Lunak',
      smkYear: '2024 – 2027',
      smpName: 'SMP Negeri 2 Bandung',
      smpYear: '2021 – 2024',
      sdName: 'SD Negeri 1 Pajajaran Bandung',
      sdYear: '2015 – 2021'
    },

    bio: 'Siswa tingkat akhir kejuruan Rekayasa Perangkat Lunak dengan spesialisasi pengembangan web responsif dan integrasi database modern. Terbiasa menyelesaikan proyek kolaboratif berbasis standar industri menggunakan Git dan metodologi Agile mini. Siap mendedikasikan kedisiplinan dan keterampilan teknis untuk memberikan kontribusi nyata dalam program Praktek Kerja Lapangan (PKL).',
    
    experiences: [
      {
        role: 'Lead Web Developer',
        org: 'Teaching Factory (TEFA) SMKN 4 Bandung',
        desc: 'Memimpin tim pengembang beranggotakan 4 siswa dalam merancang sistem portal perpustakaan digital sekolah berbasis web.',
        bullets: 'Membangun modul katalog pencarian buku real-time; Menerapkan sistem autentikasi login terenkripsi untuk 1.200+ siswa; Mengkoordinasikan repositori GitHub tim dengan Git Workflow.'
      },
      {
        role: 'Koordinator Publikasi & IT',
        org: 'OSIS SMK Negeri 4 Bandung',
        desc: 'Mengelola portal web kegiatan OSIS serta publikasi pendaftaran digital acara pekan kreasi siswa.',
        bullets: 'Merancang landing page registrasi peserta Porseni SMK; Mengelola basis data 1.000+ formulir daring; Melatih anggota baru dalam pengelolaan konten web.'
      },
      {
        role: 'Peserta Bootcamp Frontend Web Track',
        org: 'Program Beasiswa Vokasi Juara Tech',
        desc: 'Menuntaskan kurikulum intensif 120 jam mencakup Tailwind CSS, JavaScript asynchronous, dan konsumsi REST API publik.',
        bullets: 'Menyelesaikan capstone project dengan predikat "Sangat Baik"; Terpilih dalam Top 10 Finalis Showcase Siswa SMK.'
      }
    ],

    hardSkills: [
      'HTML5, Semantic & Web Accessibility',
      'CSS3, Tailwind CSS & Responsive Layout',
      'JavaScript ES6+, DOM & Fetch API',
      'PHP & MySQL Database Design',
      'Git & Kolaborasi Repositori GitHub',
      'Figma UI/UX Wireframing & Prototyping',
      'RESTful API Basics & Postman',
      'Web Deployment (Vercel & Shared Hosting)'
    ],

    softSkills: [
      'Problem Solving & Debugging Terstruktur',
      'Kerja Sama Tim & Komunikasi Aktif',
      'Manajemen Waktu & Ketepatan Deadline',
      'Disiplin, Santun & Etika Kerja Industri',
      'Kemauan Belajar Cepat (Fast Learner)',
      'Ketelitian & Kerapian Dokumentasi Kode'
    ],

    achievements: [
      {
        title: 'Junior Web Developer (BNSP Terlisensi)',
        issuer: 'LSP SMK Terakreditasi',
        year: '2025',
        link: 'https://drive.google.com/file/d/sertifikat-bnsp-rizky/view'
      },
      {
        title: 'Belajar Dasar Pemrograman Web',
        issuer: 'Dicoding Academy & AWS Indonesia',
        year: '2025',
        link: 'https://www.dicoding.com/certificates/DICODING-WEB-492'
      },
      {
        title: 'Juara 2 LKS Web Technologies Tingkat Kota',
        issuer: 'Dinas Pendidikan Kota Bandung',
        year: '2025',
        link: 'https://drive.google.com/file/d/piagam-lks-rizky/view'
      }
    ]
  },

  mplb: {
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    fullName: 'Siti Sarah Nurhaliza',
    major: 'Manajemen Perkantoran & Layanan Bisnis (MPLB)',
    school: 'SMK Negeri 1 Bandung',
    email: 'sarah.mplb@email.com',
    phone: '+62 813-2345-6789',
    location: 'Bandung, Jawa Barat',
    linkedin: 'linkedin.com/in/siti-sarah-mplb',
    github: 'notion.so/sarah-portofolio-mplb',

    // Riwayat Pendidikan SD hingga SMK
    education: {
      smkName: 'SMK Negeri 1 Bandung',
      smkMajor: 'Manajemen Perkantoran & Layanan Bisnis',
      smkYear: '2024 – 2027',
      smpName: 'SMP Negeri 5 Bandung',
      smpYear: '2021 – 2024',
      sdName: 'SD Negeri Banjarsari Bandung',
      sdYear: '2015 – 2021'
    },

    bio: 'Siswa tingkat akhir kejuruan Manajemen Perkantoran dan Layanan Bisnis dengan ketelitian tinggi dalam tata kelola kearsipan digital, administrasi korespondensi resmi, dan pelayanan prima (service excellence). Terbiasa mengoperasikan software perkantoran modern, pengelolaan kas kecil, dan penyusunan agenda rapat pimpinan. Siap berkontribusi secara profesional dan disiplin dalam divisi administrasi umum atau kesekretariatan selama program PKL.',

    experiences: [
      {
        role: 'Staff Administrasi & Kearsipan Digital',
        org: 'Teaching Factory (TEFA) Perkantoran SMKN 1 Bandung',
        desc: 'Mengelola tata persuratan masuk dan keluar serta digitalisasi 500+ arsip dokumen kerja sama sekolah.',
        bullets: 'Menerapkan sistem pengarsipan digital berbasis Google Workspace & Spreadsheet; Mengatur tata letak berkas fisik sesuai standar filling system; Menyusun laporan rekapitulasi surat bulanan.'
      },
      {
        role: 'Sekretaris Umum',
        org: 'OSIS SMK Negeri 1 Bandung',
        desc: 'Bertanggung jawab penuh atas notulensi rapat pleno, penyusunan proposal kegiatan sekolah, dan komunikasi antar divisi.',
        bullets: 'Menyusun 25+ surat dinas dan proposal sponsor kegiatan; Mengkoordinir presensi dan dokumentasi resmi rapat; Mengelola jadwal audiensi dengan kepala sekolah.'
      },
      {
        role: 'Petugas Front Office & Layanan Tamu',
        org: 'Pekan Penerimaan Peserta Didik Baru (PPDB) SMK',
        desc: 'Memberikan pelayanan informasi pendaftaran secara ramah, sigap, dan solutif kepada 800+ orang tua calon siswa.',
        bullets: 'Melayani registrasi verifikasi berkas persyaratan; Meraih predikat Petugas Layanan Teramah dan Paling Cekatan.'
      }
    ],

    hardSkills: [
      'Kearsipan Digital & Sistem Filing (Filling System)',
      'Korespondensi & Tata Naskah Surat Dinas Resmi',
      'Microsoft Office (Word, Excel, PowerPoint Lanjut)',
      'Pengelolaan Kas Kecil (Petty Cash & Vouchering)',
      'Manajemen Agenda Pimpinan & Notulensi Rapat',
      'Pelayanan Prima (Service Excellence) & Komunikasi Tamu',
      'Google Workspace (Docs, Sheets, Drive, Forms)',
      'Kecepatan Mengetik 10 Jari (Typing Speed 65 WPM)'
    ],

    softSkills: [
      'Komunikasi Interpersonal Ramah & Santun',
      'Ketelitian Ekstrem pada Redaksi Dokumen',
      'Manajemen Waktu & Kemampuan Multitasking',
      'Disiplin Tinggi & Etika Protokoler Kerja',
      'Penyimpanan Rahasia Data Dokumen Kantor',
      'Kesiapan Bekerja Sama dalam Tim'
    ],

    achievements: [
      {
        title: 'Sertifikasi Operator Komputer Madya (BNSP)',
        issuer: 'Lembaga Sertifikasi Profesi (LSP) Perkantoran',
        year: '2025',
        link: 'https://drive.google.com/file/d/sertifikat-bnsp-sarah/view'
      },
      {
        title: 'Juara 1 Lomba Administrasi Perkantoran & Typing Speed',
        issuer: 'Olimpiade Vokasi Administrasi Bisnis Jabar',
        year: '2025',
        link: 'https://drive.google.com/file/d/juara-typing-sarah/view'
      },
      {
        title: 'Sertifikat Pelatihan Digital Office Administration',
        issuer: 'Kementerian Ketenagakerjaan (Kemnaker RI)',
        year: '2024',
        link: 'https://kemnaker.go.id/sertifikat/OFFICE-2024-998'
      }
    ]
  },

  akl: {
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    fullName: 'Ahmad Fauzan Ramadhan',
    major: 'Akuntansi & Keuangan Lembaga (AKL)',
    school: 'SMK Negeri 3 Bandung',
    email: 'fauzan.akl@email.com',
    phone: '+62 821-3456-7890',
    location: 'Bandung, Jawa Barat',
    linkedin: 'linkedin.com/in/ahmad-fauzan-akl',
    github: 'drive.google.com/drive/folders/fauzan-portofolio-akuntansi',

    // Riwayat Pendidikan SD hingga SMK
    education: {
      smkName: 'SMK Negeri 3 Bandung',
      smkMajor: 'Akuntansi & Keuangan Lembaga',
      smkYear: '2024 – 2027',
      smpName: 'SMP Negeri 7 Bandung',
      smpYear: '2021 – 2024',
      sdName: 'SD Negeri Merdeka Bandung',
      sdYear: '2015 – 2021'
    },

    bio: 'Siswa kejuruan Akuntansi dan Keuangan Lembaga yang berfokus pada penyusunan siklus akuntansi perusahaan jasa dan dagang, rekonsiliasi kas bank, serta perhitungan perpajakan dasar. Terampil mengoperasikan spreadsheet Excel finansial tingkat lanjut dan software akuntansi komputer (Accurate / MYOB). Memiliki integritas tinggi, teliti terhadap data numerik, dan siap membantu kelancaran operasional divisi keuangan/akuntansi selama masa PKL.',

    experiences: [
      {
        role: 'Junior Accountant & Kasir',
        org: 'Teaching Factory (TEFA) Koperasi Siswa & Bank Mini SMK',
        desc: 'Bertanggung jawab atas pencatatan transaksi harian, pembukuan kas kecil, dan verifikasi nota bukti belanja.',
        bullets: 'Mencatat rata-rata 60+ transaksi harian dengan tingkat akurasi 100%; Melakukan rekonsiliasi saldo fisik kas dengan jurnal kas harian; Membantu penyusunan laporan laba rugi bulanan koperasi.'
      },
      {
        role: 'Bendahara Umum',
        org: 'OSIS SMK Negeri 3 Bandung',
        desc: 'Mengelola arus kas masuk dan keluar untuk 12 program kerja organisasi dengan transparansi laporan berkala.',
        bullets: 'Menyusun Rencana Anggaran Biaya (RAB) kegiatan tahunan senilai puluhan juta rupiah; Membuat laporan pertanggungjawaban (LPJ) keuangan yang disetujui pembina OSIS.'
      },
      {
        role: 'Peserta Simulasi Audit Laporan Keuangan UKK',
        org: 'Uji Kompetensi Keahlian Akuntansi SMK',
        desc: 'Menyelesaikan siklus penuh pencatatan bukti transaksi hingga neraca lajur dan jurnal penutup perusahaan dagang.',
        bullets: 'Meraih skor uji kompetensi 95/100 dalam kecepatan dan ketepatan perhitungan akuntansi manual dan komputer.'
      }
    ],

    hardSkills: [
      'Penyusunan Siklus Akuntansi Perusahaan Jasa & Dagang',
      'Pengoperasian Spreadsheet / Excel Finansial (VLOOKUP, IF, Pivot)',
      'Software Komputer Akuntansi (Accurate & MYOB Accounting)',
      'Pengelolaan Kas Bank, Kas Kecil & Rekonsiliasi Bank',
      'Perhitungan Dasar Perpajakan (PPh Pasal 21 & PPN)',
      'Pemeriksaan & Validasi Bukti Transaksi Keuangan',
      'Pembuatan Jurnal Penyesuaian, Neraca Lajur & Laporan Keuangan',
      'Penyusunan Laporan Laba Rugi & Arus Kas'
    ],

    softSkills: [
      'Integritas Tinggi, Kejujuran & Tanggung Jawab',
      'Ketelitian Ekstrem pada Angka & Detail Finansial',
      'Kemampuan Analisis Logis & Problem Solving',
      'Disiplin Kerja Mematuhi Standar Operasional (SOP)',
      'Kemampuan Bekerja di Bawah Tekanan Periode Tutup Buku',
      'Kerja Sama Tim & Kerapian Arsip Keuangan'
    ],

    achievements: [
      {
        title: 'Sertifikasi Teknisi Akuntansi Yunior (BNSP)',
        issuer: 'Lembaga Sertifikasi Profesi (LSP) Teknisi Akuntansi',
        year: '2025',
        link: 'https://drive.google.com/file/d/sertifikat-bnsp-fauzan/view'
      },
      {
        title: 'Juara 2 Accounting Skill Competition Tingkat Provinsi',
        issuer: 'Ikatan Akuntan Indonesia (IAI) Muda Wilayah Jabar',
        year: '2025',
        link: 'https://drive.google.com/file/d/juara2-accounting-fauzan/view'
      },
      {
        title: 'Sertifikat Excel for Financial Modeling & Accounting',
        issuer: 'Badan Pengembangan SDM Keuangan',
        year: '2024',
        link: 'https://drive.google.com/file/d/excel-financial-fauzan/view'
      }
    ]
  }
};

// --- 2. ACTIVE STATE DATA ---
let cvState = JSON.parse(JSON.stringify(PRESETS.rpl));

// --- 3. INISIALISASI SAAT HALAMAN DIMUAT ---
document.addEventListener('DOMContentLoaded', () => {
  // Cek apakah ada data tersimpan di LocalStorage
  const savedData = localStorage.getItem('cvoto_saved_state_v4');
  if (savedData) {
    try {
      cvState = JSON.parse(savedData);
    } catch (e) {
      console.warn('Gagal memuat local storage, memakai preset RPL:', e);
      cvState = JSON.parse(JSON.stringify(PRESETS.rpl));
    }
  }

  // Sinkronisasi form dan render preview
  syncFormFromState();
  renderPreview();
  bindStaticFormEvents();
});

// --- 4. SINKRONISASI STATE KE FORMULIR INPUT ---
function syncFormFromState() {
  document.getElementById('inputFullName').value = cvState.fullName || '';
  document.getElementById('inputMajor').value = cvState.major || '';
  document.getElementById('inputSchool').value = cvState.school || '';
  document.getElementById('inputEmail').value = cvState.email || '';
  document.getElementById('inputPhone').value = cvState.phone || '';
  document.getElementById('inputLocation').value = cvState.location || '';
  document.getElementById('inputLinkedin').value = cvState.linkedin || '';
  document.getElementById('inputGithub').value = cvState.github || '';
  document.getElementById('inputBio').value = cvState.bio || '';
  document.getElementById('inputPhotoUrl').value = cvState.photo || '';
  
  // Riwayat Pendidikan (SD hingga SMK)
  const edu = cvState.education || {};
  document.getElementById('inputSmkName').value = edu.smkName || cvState.school || '';
  document.getElementById('inputSmkYear').value = edu.smkYear || '2024 – 2027';
  document.getElementById('inputSmkMajor').value = edu.smkMajor || cvState.major || '';
  document.getElementById('inputSmpName').value = edu.smpName || '';
  document.getElementById('inputSmpYear').value = edu.smpYear || '2021 – 2024';
  document.getElementById('inputSdName').value = edu.sdName || '';
  document.getElementById('inputSdYear').value = edu.sdYear || '2015 – 2021';

  // Update Thumbnail
  document.getElementById('formPhotoImg').src = cvState.photo || '';

  // Render Dynamic Form Cards
  renderDynamicExperienceForms();
  renderDynamicHardSkillForms();
  renderDynamicSoftSkillForms();
  renderDynamicAchievementForms();
}

// --- 5. BINDING EVENT LISTENER FORM STATIS (REAL-TIME TWO-WAY DATA BINDING) ---
function bindStaticFormEvents() {
  const mapping = [
    { id: 'inputFullName', key: 'fullName' },
    { id: 'inputMajor', key: 'major' },
    { id: 'inputSchool', key: 'school' },
    { id: 'inputEmail', key: 'email' },
    { id: 'inputPhone', key: 'phone' },
    { id: 'inputLocation', key: 'location' },
    { id: 'inputLinkedin', key: 'linkedin' },
    { id: 'inputGithub', key: 'github' },
    { id: 'inputBio', key: 'bio' }
  ];

  mapping.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.addEventListener('input', (e) => {
        cvState[item.key] = e.target.value;
        saveState();
        renderPreview();
      });
    }
  });

  // Binding Khusus Riwayat Pendidikan (SD hingga SMK)
  const eduFields = [
    { id: 'inputSmkName', key: 'smkName' },
    { id: 'inputSmkYear', key: 'smkYear' },
    { id: 'inputSmkMajor', key: 'smkMajor' },
    { id: 'inputSmpName', key: 'smpName' },
    { id: 'inputSmpYear', key: 'smpYear' },
    { id: 'inputSdName', key: 'sdName' },
    { id: 'inputSdYear', key: 'sdYear' }
  ];

  eduFields.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.addEventListener('input', (e) => {
        if (!cvState.education) cvState.education = {};
        cvState.education[item.key] = e.target.value;
        saveState();
        renderPreview();
      });
    }
  });
}

// --- 6. PENANGANAN UPLOAD & URL FOTO PROFIL ---
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Harap pilih file gambar (JPG, PNG, atau WEBP)!');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    cvState.photo = dataUrl;
    document.getElementById('formPhotoImg').src = dataUrl;
    document.getElementById('cvPhoto').src = dataUrl;
    document.getElementById('inputPhotoUrl').value = '';
    saveState();
    showToast('Foto profil berhasil diunggah!');
  };
  reader.readAsDataURL(file);
}

function handlePhotoUrl(url) {
  if (url && url.trim().length > 0) {
    cvState.photo = url.trim();
    document.getElementById('formPhotoImg').src = url.trim();
    document.getElementById('cvPhoto').src = url.trim();
    saveState();
  }
}

// --- 7. LOGIKA DINAMIS: PENGALAMAN (EXPERIENCE TANPA PERIODE WAKTU) ---
function renderDynamicExperienceForms() {
  const container = document.getElementById('dynamicExperienceContainer');
  container.innerHTML = '';

  cvState.experiences.forEach((exp, index) => {
    const card = document.createElement('div');
    card.className = 'dynamic-card';
    card.innerHTML = `
      <div class="dynamic-card-header">
        <span class="dynamic-card-title">Pengalaman #${index + 1}</span>
        <button type="button" class="btn-card-del" onclick="deleteExperience(${index})" title="Hapus Pengalaman">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Posisi / Peran:</label>
          <input type="text" class="form-control" value="${escapeHtml(exp.role)}" oninput="updateExperience(${index}, 'role', this.value)" placeholder="Contoh: Lead Staff Administrasi">
        </div>
        <div class="form-group">
          <label>Instansi / Tim / Proyek:</label>
          <input type="text" class="form-control" value="${escapeHtml(exp.org)}" oninput="updateExperience(${index}, 'org', this.value)" placeholder="Contoh: TEFA Perkantoran SMK">
        </div>
      </div>
      <div class="form-group">
        <label>Deskripsi Singkat:</label>
        <input type="text" class="form-control" value="${escapeHtml(exp.desc)}" oninput="updateExperience(${index}, 'desc', this.value)" placeholder="Ringkasan tugas utama">
      </div>
      <div class="form-group">
        <label>Poin Capaian (Pisahkan dengan titik koma ';'):</label>
        <textarea rows="2" class="form-control" oninput="updateExperience(${index}, 'bullets', this.value)" placeholder="Capaian 1; Capaian 2; Capaian 3">${escapeHtml(exp.bullets)}</textarea>
      </div>
    `;
    container.appendChild(card);
  });
}

function addExperienceField() {
  cvState.experiences.push({
    role: 'Peran / Tanggung Jawab Baru',
    org: 'Nama Tim / Organisasi',
    desc: 'Deskripsi singkat tanggung jawab dan kontribusi Anda.',
    bullets: 'Menyelesaikan target tepat waktu; Berkoordinasi dengan tim kerja'
  });
  renderDynamicExperienceForms();
  renderPreview();
  saveState();
  showToast('Pengalaman baru ditambahkan');
}

function updateExperience(index, field, value) {
  if (cvState.experiences[index]) {
    cvState.experiences[index][field] = value;
    renderPreview();
    saveState();
  }
}

function deleteExperience(index) {
  cvState.experiences.splice(index, 1);
  renderDynamicExperienceForms();
  renderPreview();
  saveState();
  showToast('Pengalaman dihapus');
}

// --- 8. LOGIKA DINAMIS: KEAHLIAN TEKNIS (HARD SKILLS TANPA PERSENTASE) ---
function renderDynamicHardSkillForms() {
  const container = document.getElementById('dynamicHardSkillContainer');
  container.innerHTML = '';

  cvState.hardSkills.forEach((skill, index) => {
    const card = document.createElement('div');
    card.className = 'dynamic-card';
    card.style.padding = '10px 14px';
    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary);"><i class="fa-solid fa-code"></i></span>
        <input type="text" class="form-control" value="${escapeHtml(typeof skill === 'string' ? skill : skill.name)}" oninput="updateHardSkill(${index}, this.value)" placeholder="Contoh: Kearsipan Digital / Spreadsheet">
        <button type="button" class="btn-card-del" onclick="deleteHardSkill(${index})" title="Hapus Keahlian">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function addHardSkillField() {
  cvState.hardSkills.push('Keahlian Teknis Baru');
  renderDynamicHardSkillForms();
  renderPreview();
  saveState();
  showToast('Keahlian teknis baru ditambahkan');
}

function updateHardSkill(index, value) {
  cvState.hardSkills[index] = value;
  renderPreview();
  saveState();
}

function deleteHardSkill(index) {
  cvState.hardSkills.splice(index, 1);
  renderDynamicHardSkillForms();
  renderPreview();
  saveState();
  showToast('Keahlian teknis dihapus');
}

// --- 9. LOGIKA DINAMIS: SOFT SKILLS (TANPA PERSENTASE) ---
function renderDynamicSoftSkillForms() {
  const container = document.getElementById('dynamicSoftSkillContainer');
  container.innerHTML = '';

  cvState.softSkills.forEach((skill, index) => {
    const card = document.createElement('div');
    card.className = 'dynamic-card';
    card.style.padding = '10px 14px';
    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--success);"><i class="fa-solid fa-heart-pulse"></i></span>
        <input type="text" class="form-control" value="${escapeHtml(skill)}" oninput="updateSoftSkill(${index}, this.value)" placeholder="Contoh: Ketelitian Ekstrem, Komunikasi Ramah">
        <button type="button" class="btn-card-del" onclick="deleteSoftSkill(${index})" title="Hapus">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function addSoftSkillField() {
  cvState.softSkills.push('Soft Skill Baru');
  renderDynamicSoftSkillForms();
  renderPreview();
  saveState();
  showToast('Soft skill baru ditambahkan');
}

function updateSoftSkill(index, value) {
  cvState.softSkills[index] = value;
  renderPreview();
  saveState();
}

function deleteSoftSkill(index) {
  cvState.softSkills.splice(index, 1);
  renderDynamicSoftSkillForms();
  renderPreview();
  saveState();
  showToast('Soft skill dihapus');
}

// --- 10. LOGIKA DINAMIS: ACHIEVEMENTS / SERTIFIKAT DENGAN LINK URL & UPLOAD ---
function renderDynamicAchievementForms() {
  const container = document.getElementById('dynamicAchievementContainer');
  container.innerHTML = '';

  cvState.achievements.forEach((ach, index) => {
    const card = document.createElement('div');
    card.className = 'dynamic-card';
    
    // Status apakah file / url sudah ada
    const hasLink = ach.link && ach.link.trim().length > 0;
    const isUploaded = hasLink && ach.link.startsWith('data:');

    card.innerHTML = `
      <div class="dynamic-card-header">
        <span class="dynamic-card-title">Sertifikat #${index + 1}</span>
        <button type="button" class="btn-card-del" onclick="deleteAchievement(${index})" title="Hapus Sertifikat">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
      
      <div class="form-group">
        <label>Nama Prestasi / Sertifikat:</label>
        <input type="text" class="form-control" value="${escapeHtml(ach.title)}" oninput="updateAchievement(${index}, 'title', this.value)" placeholder="Contoh: Sertifikasi Operator Komputer (BNSP)">
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Penerbit / Penyelenggara:</label>
          <input type="text" class="form-control" value="${escapeHtml(ach.issuer)}" oninput="updateAchievement(${index}, 'issuer', this.value)" placeholder="Contoh: BNSP / Kemnaker">
        </div>
        <div class="form-group">
          <label>Tahun Terbit:</label>
          <input type="text" class="form-control" value="${escapeHtml(ach.year)}" oninput="updateAchievement(${index}, 'year', this.value)" placeholder="Contoh: 2025">
        </div>
      </div>

      <div class="form-group">
        <label><i class="fa-solid fa-link"></i> Link URL / Berkas Sertifikat (Bisa di-upload):</label>
        <div class="cert-link-box">
          <div style="display: flex; gap: 8px; align-items: center;">
            <label class="cert-upload-btn">
              <i class="fa-solid fa-cloud-arrow-up"></i> ${isUploaded ? 'Ganti File Upload' : 'Upload Berkas (PDF/Gambar)'}
              <input type="file" accept="image/*,application/pdf" onchange="handleCertUpload(event, ${index})">
            </label>
            ${isUploaded ? '<span style="font-size: 0.72rem; color: var(--success); font-weight: 600;"><i class="fa-solid fa-circle-check"></i> File Terunggah</span>' : ''}
          </div>
          <input type="text" class="form-control" value="${escapeHtml(isUploaded ? '[Berkas Unggahan Lokal]' : (ach.link || ''))}" oninput="if(!this.value.includes('[Berkas')) updateAchievement(${index}, 'link', this.value)" placeholder="https://drive.google.com/... atau URL sertifikat daring">
        </div>
        <span class="hint-text">💡 Masukkan link Google Drive, tautan sertifikat online, atau unggah berkas langsung dari perangkat Anda.</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function addAchievementField() {
  cvState.achievements.push({
    title: 'Nama Sertifikat / Penghargaan Baru',
    issuer: 'Lembaga Penerbit Resmi',
    year: '2025',
    link: 'https://drive.google.com/'
  });
  renderDynamicAchievementForms();
  renderPreview();
  saveState();
  showToast('Sertifikat baru ditambahkan');
}

function updateAchievement(index, field, value) {
  if (cvState.achievements[index]) {
    cvState.achievements[index][field] = value;
    renderPreview();
    saveState();
  }
}

function handleCertUpload(event, index) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    cvState.achievements[index].link = dataUrl;
    renderDynamicAchievementForms();
    renderPreview();
    saveState();
    showToast(`Berkas sertifikat #${index + 1} berhasil diunggah!`);
  };
  reader.readAsDataURL(file);
}

function deleteAchievement(index) {
  cvState.achievements.splice(index, 1);
  renderDynamicAchievementForms();
  renderPreview();
  saveState();
  showToast('Sertifikat dihapus');
}

// --- 11. RENDER LIVE PREVIEW DOKUMEN CV (OUTPUT KERTAS CETAK) ---
function renderPreview() {
  const d = cvState;

  // Header Identitas: Foto di Kiri, Identitas & Kontak di Kanan Foto
  document.getElementById('cvPhoto').src = d.photo || '';
  document.getElementById('cvFullName').textContent = d.fullName || 'Nama Lengkap Siswa';
  document.getElementById('cvMajor').textContent = d.major ? `Siswa ${d.major}` : 'Jurusan Kejuruan';
  document.getElementById('cvSchool').textContent = d.school || 'Nama SMK';

  // Kontak Cepat (Berada di Kanan Foto)
  document.getElementById('cvPhone').textContent = d.phone || '+62 8...';
  document.getElementById('cvEmail').textContent = d.email || 'email@contoh.com';
  document.getElementById('cvLocation').textContent = d.location || 'Indonesia';

  const linkedinWrap = document.getElementById('cvLinkedinWrap');
  if (d.linkedin && d.linkedin.trim().length > 0) {
    linkedinWrap.style.display = 'flex';
    document.getElementById('cvLinkedin').textContent = d.linkedin;
  } else {
    linkedinWrap.style.display = 'none';
  }

  const githubWrap = document.getElementById('cvGithubWrap');
  if (d.github && d.github.trim().length > 0) {
    githubWrap.style.display = 'flex';
    document.getElementById('cvGithub').textContent = d.github;
  } else {
    githubWrap.style.display = 'none';
  }

  // Riwayat Pendidikan (SD hingga SMK)
  const edu = d.education || {};
  document.getElementById('cvSmkName').textContent = edu.smkName || d.school || 'SMK';
  document.getElementById('cvSmkYear').textContent = edu.smkYear || '2024 – 2027';
  document.getElementById('cvSmkMajor').textContent = edu.smkMajor || d.major || '';
  document.getElementById('cvSmpName').textContent = edu.smpName || 'SMP';
  document.getElementById('cvSmpYear').textContent = edu.smpYear || '2021 – 2024';
  document.getElementById('cvSdName').textContent = edu.sdName || 'SD';
  document.getElementById('cvSdYear').textContent = edu.sdYear || '2015 – 2021';

  // Tentang Saya (Bio)
  const bioSection = document.getElementById('cvSectionBio');
  if (d.bio && d.bio.trim().length > 0) {
    bioSection.style.display = 'flex';
    document.getElementById('cvBio').textContent = d.bio;
  } else {
    bioSection.style.display = 'none';
  }

  // Keahlian Teknis (Hard Skills) - TANPA PERSENTASE
  const hardListEl = document.getElementById('cvHardSkillsList');
  hardListEl.innerHTML = '';
  if (d.hardSkills && d.hardSkills.length > 0) {
    document.getElementById('cvSectionHardSkills').style.display = 'flex';
    d.hardSkills.forEach(h => {
      const skillName = typeof h === 'string' ? h : (h.name || '');
      if (skillName && skillName.trim().length > 0) {
        const badge = document.createElement('span');
        badge.className = 'cv-skill-badge';
        badge.innerHTML = `<i class="fa-solid fa-code"></i> ${escapeHtml(skillName)}`;
        hardListEl.appendChild(badge);
      }
    });
  } else {
    document.getElementById('cvSectionHardSkills').style.display = 'none';
  }

  // Soft Skills - TANPA PERSENTASE
  const softListEl = document.getElementById('cvSoftSkillsList');
  softListEl.innerHTML = '';
  if (d.softSkills && d.softSkills.length > 0) {
    document.getElementById('cvSectionSoftSkills').style.display = 'flex';
    d.softSkills.forEach(s => {
      if (s && s.trim().length > 0) {
        const chip = document.createElement('span');
        chip.className = 'cv-softskill-chip';
        chip.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${escapeHtml(s)}`;
        softListEl.appendChild(chip);
      }
    });
  } else {
    document.getElementById('cvSectionSoftSkills').style.display = 'none';
  }

  // Experiences Preview (TANPA PERIODE WAKTU)
  const expListEl = document.getElementById('cvExperiencesList');
  expListEl.innerHTML = '';
  if (d.experiences && d.experiences.length > 0) {
    document.getElementById('cvSectionExperiences').style.display = 'flex';
    d.experiences.forEach(e => {
      const item = document.createElement('div');
      item.className = 'cv-timeline-item';

      let bulletsHtml = '';
      if (e.bullets && e.bullets.trim().length > 0) {
        const parts = e.bullets.split(';').map(p => p.trim()).filter(p => p.length > 0);
        if (parts.length > 0) {
          bulletsHtml = `<ul class="cv-timeline-bullets">${parts.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>`;
        }
      }

      item.innerHTML = `
        <div class="cv-timeline-header">
          <span class="cv-timeline-role">${escapeHtml(e.role)}</span>
        </div>
        <div class="cv-timeline-org">${escapeHtml(e.org)}</div>
        <div class="cv-timeline-desc">${escapeHtml(e.desc)}</div>
        ${bulletsHtml}
      `;
      expListEl.appendChild(item);
    });
  } else {
    document.getElementById('cvSectionExperiences').style.display = 'none';
  }

  // Achievements Preview DENGAN LINK SERTIFIKAT
  const achListEl = document.getElementById('cvAchievementsList');
  achListEl.innerHTML = '';
  if (d.achievements && d.achievements.length > 0) {
    document.getElementById('cvSectionAchievements').style.display = 'flex';
    d.achievements.forEach(a => {
      const item = document.createElement('div');
      item.className = 'cv-achievement-item';
      
      let linkHtml = '';
      if (a.link && a.link.trim().length > 0) {
        linkHtml = `
          <div>
            <a href="${a.link}" target="_blank" rel="noopener noreferrer" class="cv-cert-link" title="Buka Bukti Sertifikat">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Lihat Bukti Sertifikat
            </a>
          </div>
        `;
      }

      item.innerHTML = `
        <div class="cv-achieve-title">${escapeHtml(a.title)}</div>
        <div class="cv-achieve-meta">${escapeHtml(a.issuer)} (${escapeHtml(a.year)})</div>
        ${linkHtml}
      `;
      achListEl.appendChild(item);
    });
  } else {
    document.getElementById('cvSectionAchievements').style.display = 'none';
  }
}

// --- 12. FITUR UTAMA: DOWNLOAD CV FORMAT PDF (ATS-FRIENDLY & SIAP CETAK) ---
function downloadCVPdf() {
  showToast('Membuka dialog cetak... Pilih opsi "Save as PDF"!');

  // Berikan jeda sejenak agar toast sempat muncul dan rendering layout selesai
  setTimeout(() => {
    window.print();
  }, 400);
}

// --- 13. FITUR GANTI PRESET & RESET FORM ---
function loadPreset(presetKey) {
  if (!PRESETS[presetKey]) return;
  cvState = JSON.parse(JSON.stringify(PRESETS[presetKey]));
  syncFormFromState();
  renderPreview();
  saveState();
  showToast(`Berhasil memuat contoh data: ${PRESETS[presetKey].major}`);
}

function resetForm() {
  if (confirm('Apakah Anda yakin ingin mereset formulir ke template kosong?')) {
    cvState = {
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      fullName: '',
      major: '',
      school: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: '',
      education: {
        smkName: '',
        smkMajor: '',
        smkYear: '',
        smpName: '',
        smpYear: '',
        sdName: '',
        sdYear: ''
      },
      bio: '',
      experiences: [],
      hardSkills: [],
      softSkills: [],
      achievements: []
    };
    syncFormFromState();
    renderPreview();
    saveState();
    showToast('Formulir berhasil direset');
  }
}

// --- 14. PERSISTENSI KE LOCALSTORAGE ---
function saveState() {
  try {
    localStorage.setItem('cvoto_saved_state_v4', JSON.stringify(cvState));
  } catch (e) {
    console.warn('Gagal menyimpan ke LocalStorage:', e);
  }
}

// --- 15. TOAST NOTIFIKASI & HELPER ESCAPE HTML ---
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');

  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
