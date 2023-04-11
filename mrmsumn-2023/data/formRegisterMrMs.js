let array = [
  {
    Pertanyaan: "Nama Lengkap",
    Name: "name",
    PropertyName: "text",
    Required: "Input ini wajib diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Email Student UMN",
    Name: "email_student",
    PropertyName: "text",
    Required: "Input ini wajib diisi",
    PatternValue: /^(\w+(.\w+)*)(@student.umn.ac.id)$/gm,
    PatternMessage: "Email yang dipakai harus menggunakan email student",
  },
  {
    Pertanyaan: "NIM",
    Name: "nim",
    PropertyName: "text",
    Required: "Input ini wajib diisi",
    PatternValue: /^\d+$/,
    PatternMessage: "Input ini harus diisi dengan angka",
  },
  {
    Pertanyaan: "Tempat Lahir",
    Name: "birth_place",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Tanggal Lahir",
    Name: "birth_date",
    PropertyName: "date",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Jenis Kelamin",
    Name: "gender",
    PropertyName: "DropDown",
    Required: "Input ini harus diisi",
    ArrayDrop: ["Laki - Laki", "Perempuan"],
    ArrayDropValue: ["m", "f"],
    PatternValue: /m|f/,
    PatternMessage: "",
  },
  {
    Pertanyaan: "Alamat Domisili",
    Name: "address",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Nomor Telepon",
    Name: "phone_number",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: /\d+/,
    PatternMessage: "Input nomor telephone tidak valid",
  },
  {
    Pertanyaan: "Id Line",
    Name: "line_id",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Username Instagram",
    Name: "instagram_username",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Username Tiktok (opsional)",
    Name: "tiktok_username",
    PropertyName: "text",
    Required: "",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Jurusan",
    Name: "major",
    PropertyName: "DropDown",
    ArrayDrop: [
      "Informatika",
      "Teknik Komputer",
      "Teknik Elektro",
      "Teknik Fisika",
      "Sistem Informasi",
      "Perhotelan",
      "Akuntansi",
      "Managemen",
      "Komunikasi Strategis",
      "Jurnalistik",
      "Desain Komunikasi Visual",
      "Arsitektur",
      "Film & Animasi",
    ],
    ArrayDropValue: [
      "Informatika",
      "Sistem Informasi",
      "Strategic Comunication",
    ],
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Angkatan",
    Name: "year",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "IPK",
    Name: "gpa",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: /(^(4)$|^(4.0)$)|(^[0-3]([.]+[0-9]+)*$)/gm,
    PatternMessage: "Format IPK tidak valid",
  },
  {
    Pertanyaan: "Tinggi Badan",
    Name: "height",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: /^\d+$/,
    PatternMessage: "Input harus angka",
  },
  {
    Pertanyaan: "Berat Badan",
    Name: "weight",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: /^\d+$/,
    PatternMessage: "Input harus angka",
  },
  {
    Pertanyaan: "Ukuran Baju",
    Name: "clothes_size",
    PropertyName: "DropDown",
    ArrayDrop: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    ArrayDropValue: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Ukuran sepatu",
    Name: "shoe_size",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: /^\d+$/,
    PatternMessage: "Input harus angka",
  },
  {
    Pertanyaan: "Ukuran Celana",
    Name: "pants_size",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: /^\d+$/,
    PatternMessage: "Input harus angka",
  },
  {
    Pertanyaan: "Tentang Saya",
    Name: "about_me",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Motivasi Anda",
    Name: "motivation",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Hasil Personality Type",
    Name: "personality",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Deskripsikan talenta anda",
    Name: "talents",
    PropertyName: "text",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Prestasi (opsional)",
    Name: "achievements",
    PropertyName: "text",
    Required: "",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Foto",
    Name: "picture",
    PropertyName: "file",
    Required: "Input ini wajib diisi",
    PatternValue: "",
    PatternMessage: "",
    Formats: ["image/png", "image/jpg", "image/jpeg", "image/webp"],
    FormatMessage: "Input ini hanya menerima gambar",
  },
  {
    Pertanyaan: "Hasil Screenshot Personality Type",
    Name: "personality_screenshot",
    PropertyName: "file",
    Required: "Input ini harus diisi",
    PatternValue: "",
    PatternMessage: "",
    Formats: ["image/png", "image/jpg", "image/jpeg", "image/webp"],
    FormatMessage: "Input hanya menerima gambar",
  },
  {
    Pertanyaan: "Screenshot Nilai IPK",
    Name: "grades_screenshot",
    PropertyName: "file",
    Required: "Input ini wajib diisi",
    PatternValue: "",
    PatternMessage: "",
    Formats: [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "image/webp",
      "application/pdf",
      "application/zip",
      "application/x-zip-compressed",
    ],
    FormatMessage: "Input hanya menerima gambar, pdf, atau zip",
  },
  {
    Pertanyaan: "Screenshot KTM",
    Name: "student_card_screenshot",
    PropertyName: "file",
    Required: "Input ini wajib diisi",
    PatternValue: "",
    PatternMessage: "",
    Formats: ["image/png", "image/jpg", "image/jpeg", "image/webp"],
    FormatMessage: "Input ini hanya menerima gambar",
  },
];

export { array };
