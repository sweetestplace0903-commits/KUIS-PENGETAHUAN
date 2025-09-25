document.addEventListener('DOMContentLoaded', () => {

    const quizData = {
        '1': [
            {
    question: "Nama bilangan dari angka 17 adalah...",
    options: ["Tujuh belas", "Tujuh satu", "Satu tujuh"],
    answer: "Tujuh belas",
    explanation: "Angka 1 puluhan dan 7 satuan dibaca sebagai 'tujuh belas'."
},
{
    question: "Huruf setelah huruf 'g' adalah...",
    options: ["f", "h", "i"],
    answer: "h",
    explanation: "Dalam urutan alfabet, setelah huruf 'g' adalah huruf 'h'."
},
{
    question: "Alat tubuh yang digunakan untuk mendengar adalah...",
    options: ["Mata", "Hidung", "Telinga"],
    answer: "Telinga",
    explanation: "Telinga adalah panca indera yang berfungsi untuk mendengar suara."
},
{
    question: "Ibu membeli 5 buah apel. Ayah membeli lagi 4 buah apel. Berapa jumlah apel sekarang?",
    options: ["8 buah", "9 buah", "10 buah"],
    answer: "9 buah",
    explanation: "Ini adalah soal penjumlahan: 5 apel + 4 apel = 9 buah."
},
{
    question: "Suku kata 'ma' jika digabung dengan 'kan' menjadi...",
    options: ["makan", "kama", "naka"],
    answer: "makan",
    explanation: "Penggabungan suku kata 'ma' dan 'kan' membentuk kata 'makan'."
},
{
    question: "Fungsi dari kaki adalah untuk...",
    options: ["Memegang", "Mendengar", "Berjalan"],
    answer: "Berjalan",
    explanation: "Fungsi utama kaki pada manusia adalah untuk berjalan, berlari, dan menopang tubuh."
},
{
    question: "Angka 19 dibaca...",
    options: ["Sembilan belas", "Satu sembilan", "Sembilan satu"],
    answer: "Sembilan belas",
    explanation: "Angka 1 puluhan dan 9 satuan dibaca sebagai 'sembilan belas'."
},
{
    question: "Sebutkan huruf vokal yang ada pada kata 'meja'!",
    options: ["m, j", "e, a", "m, e, j, a"],
    answer: "e, a",
    explanation: "Huruf vokal adalah a, i, u, e, o. Pada kata 'meja', huruf vokalnya adalah 'e' dan 'a'."
},
{
    question: "Kita mencium bau bunga menggunakan...",
    options: ["Mata", "Hidung", "Kulit"],
    answer: "Hidung",
    explanation: "Hidung adalah panca indera yang berfungsi untuk mencium berbagai macam bau."
},
{
    question: "Hitunglah: 12 - 5 = ...",
    options: ["6", "7", "8"],
    answer: "7",
    explanation: "Hasil dari pengurangan 12 dengan 5 adalah 7."
},
{
    question: "Lengkapi kalimat ini: Saya suka membaca...",
    options: ["bola", "buku", "batu"],
    answer: "buku",
    explanation: "Kegiatan membaca berhubungan dengan buku."
},
{
    question: "Jari tangan kita berjumlah...",
    options: ["5", "8", "10"],
    answer: "10",
    explanation: "Manusia memiliki 5 jari di setiap tangan, sehingga totalnya adalah 10 jari tangan."
},
            { question: "Lambang sila pertama Pancasila adalah...", options: ["Rantai", "Bintang", "Pohon Beringin"], answer: "Bintang", explanation: "Sila pertama, Ketuhanan Yang Maha Esa, dilambangkan dengan bintang." },
            { question: "Sebelum makan, sebaiknya kita ... terlebih dahulu.", options: ["Bermain", "Berdoa", "Tidur"], answer: "Berdoa", explanation: "Berdoa sebelum makan adalah bentuk rasa syukur." },
            { question: "Datang ke sekolah harus ... waktu.", options: ["Terlambat", "Tepat", "Sesukanya"], answer: "Tepat", explanation: "Datang tepat waktu adalah salah satu aturan di sekolah." },
            { question: "Jika berbuat salah, kita harus segera meminta ...", options: ["Hadiah", "Uang", "Maaf"], answer: "Maaf", explanation: "Meminta maaf adalah sikap yang baik jika kita berbuat salah." },
            // BAHASA INGGRIS
            { question: "Saat bertemu teman di pagi hari, kita mengucapkan...", options: ["Good bye", "Good night", "Good morning"], answer: "Good morning", explanation: "'Good morning' berarti 'selamat pagi'." },
            { question: "'Buku' in English is...", options: ["Bag", "Book", "Pencil"], answer: "Book", explanation: "Bahasa Inggris dari 'buku' adalah 'book'." },
            { question: "One, two, three, ..., five.", options: ["Four", "Six", "Ten"], answer: "Four", explanation: "Urutan angka setelah tiga (three) adalah empat (four)." },
            { question: "The color of the sky is ... (biru)", options: ["Red", "Green", "Blue"], answer: "Blue", explanation: "Warna langit (sky) adalah biru (blue)." },
            // BAHASA JAWA
            { question: "Perangan awak sing gunane kanggo mlaku yaiku...", options: ["Tangan", "Sikil", "Mripat"], answer: "Sikil", explanation: "Bagian tubuh yang gunanya untuk berjalan adalah kaki (sikil)." },
            { question: "Yen arep mangkat sekolah, pamit marang bapak lan...", options: ["Kanca", "Guru", "Ibu"], answer: "Ibu", explanation: "Saat akan berangkat sekolah, kita berpamitan kepada Bapak dan Ibu." },
            { question: "Mripat gunane kanggo...", options: ["Mambu", "Ndeleng", "Rungokake"], answer: "Ndeleng", explanation: "Mata (mripat) gunanya untuk melihat (ndeleng)." },
            { question: "Kuping gunane kanggo...", options: ["Mlaku", "Mangan", "Rungokake"], answer: "Rungokake", explanation: "Telinga (kuping) gunanya untuk mendengar (rungokake)." }
        ],
        '2': [
{
    question: "Nama bilangan dari 245 adalah...",
    options: ["Dua ratus empat lima", "Dua empat lima", "Dua ratus empat puluh lima"],
    answer: "Dua ratus empat puluh lima",
    explanation: "Angka 2 menempati ratusan, 4 puluhan, dan 5 satuan."
},
{
    question: "Tanda baca yang digunakan untuk mengakhiri kalimat berita adalah...",
    options: ["Tanda tanya (?)", "Tanda seru (!)", "Tanda titik (.)"],
    answer: "Tanda titik (.)",
    explanation: "Setiap kalimat berita atau pernyataan diakhiri dengan tanda titik."
},
{
    question: "Batu dan kursi termasuk contoh benda...",
    options: ["Padat", "Cair", "Gas"],
    answer: "Padat",
    explanation: "Benda padat memiliki bentuk dan volume yang tetap, seperti batu dan kursi."
},
{
    question: "Bentuk perkalian dari 6 + 6 + 6 + 6 adalah...",
    options: ["6 x 4", "4 x 6", "6 + 4"],
    answer: "4 x 6",
    explanation: "Penjumlahan berulang angka 6 sebanyak 4 kali dapat ditulis sebagai perkalian 4 x 6."
},
{
    question: "Dongeng yang tokohnya adalah binatang disebut...",
    options: ["Legenda", "Mitos", "Fabel"],
    answer: "Fabel",
    explanation: "Fabel adalah dongeng yang tokohnya adalah binatang yang bisa berbicara dan berperilaku seperti manusia."
},
{
    question: "Air jika dimasukkan ke dalam botol, bentuknya akan seperti...",
    options: ["Botol", "Kotak", "Tetap seperti semula"],
    answer: "Botol",
    explanation: "Salah satu sifat benda cair adalah bentuknya berubah mengikuti wadahnya."
},
{
    question: "3 x 8 = ...",
    options: ["11", "24", "38"],
    answer: "24",
    explanation: "Hasil dari perkalian 3 dikali 8 adalah 24."
},
{
    question: "Pesan moral yang bisa diambil dari sebuah dongeng disebut...",
    options: ["Judul", "Tema", "Amanat"],
    answer: "Amanat",
    explanation: "Amanat adalah pesan atau nasihat yang ingin disampaikan pengarang melalui ceritanya."
},
{
    question: "Udara yang kita hirup adalah contoh benda...",
    options: ["Padat", "Cair", "Gas"],
    answer: "Gas",
    explanation: "Udara merupakan campuran berbagai gas yang tidak terlihat namun menempati seluruh ruang."
},
{
    question: "Sebuah bus berisi 45 penumpang. Di terminal, turun 15 penumpang. Berapa sisa penumpang di bus?",
    options: ["30", "60", "45"],
    answer: "30",
    explanation: "Karena turun, jumlah penumpang berkurang. Sisa penumpang adalah 45 - 15 = 30."
},
{
    question: "Susunlah kata-kata berikut: menyiram - bunga - ibu - di - taman.",
    options: ["Ibu menyiram bunga di taman", "Taman di bunga menyiram ibu", "Bunga menyiram ibu di taman"],
    answer: "Ibu menyiram bunga di taman",
    explanation: "Susunan kata yang benar dan membentuk kalimat yang padu adalah 'Ibu menyiram bunga di taman'."
},
{
    question: "Kupu-kupu berasal dari ... sebelum menjadi kepompong.",
    options: ["Telur", "Ulat", "Lalat"],
    answer: "Ulat",
    explanation: "Siklus hidup kupu-kupu adalah: Telur -> Ulat (larva) -> Kepompong (pupa) -> Kupu-kupu dewasa."
},
            { question: "Membantu teman yang sedang kesusahan sesuai dengan pengamalan sila ke...", options: ["Satu", "Dua", "Tiga"], answer: "Dua", explanation: "Sila kedua, 'Kemanusiaan yang adil dan beradab', mengajarkan kita untuk saling tolong-menolong." },
            { question: "Simbol rantai emas pada Pancasila melambangkan sila ke...", options: ["2", "3", "4"], answer: "2", explanation: "Rantai emas adalah lambang sila kedua Pancasila." },
            { question: "Kepala banteng adalah simbol sila ke...", options: ["Tiga", "Empat", "Lima"], answer: "Empat", explanation: "Kepala banteng adalah lambang sila keempat Pancasila." },
            { question: "Saat berdiskusi, kita harus menghargai ... orang lain.", options: ["Hinaan", "Pendapat", "Kekurangan"], answer: "Pendapat", explanation: "Menghargai pendapat orang lain adalah kunci dari musyawarah." },
            { question: "A cow is a big animal. 'Cow' means...", options: ["Kucing", "Sapi", "Ayam"], answer: "Sapi", explanation: "Arti dari kata 'cow' dalam bahasa Inggris adalah sapi." },
            { question: "A bird can...", options: ["Swim", "Fly", "Run"], answer: "Fly", explanation: "Seekor burung bisa terbang (fly)." },
            { question: "There are ... days in a week.", options: ["Five", "Six", "Seven"], answer: "Seven", explanation: "Ada tujuh (seven) hari dalam seminggu." },
            { question: "The opposite of 'big' is...", options: ["Long", "Small", "Tall"], answer: "Small", explanation: "Lawan kata dari 'big' (besar) adalah 'small' (kecil)." },
            { question: "Pandhawa iku cacahe ana...", options: ["Papat", "Lima", "Enem"], answer: "Lima", explanation: "Jumlah (cacahe) Pandawa ada lima (lima)." },
            { question: "Piranti ing omah sing gunane kanggo turu yaiku...", options: ["Meja", "Kursi", "Kasur"], answer: "Kasur", explanation: "Peralatan di rumah yang gunanya untuk tidur adalah kasur." },
            { question: "Kewan sing sikile loro lan bisa kluruk yaiku...", options: ["Pitik", "Kucing", "Sapi"], answer: "Pitik", explanation: "Hewan yang kakinya dua dan bisa berkokok adalah ayam (pitik)." },
            { question: "Bapake bapak diarani...", options: ["Pakdhe", "Paklik", "Eyang Kakung"], answer: "Eyang Kakung", explanation: "Ayahnya ayah kita disebut kakek (Eyang Kakung)." }
        ],
        '3': [
{
    question: "Hasil dari 345 + 218 adalah...",
    options: ["553", "563", "573"],
    answer: "563",
    explanation: "Penjumlahan bersusun: 345 + 218 = 563."
},
{
    question: "'Meskipun hujan, Rina tetap berangkat ke sekolah.' Kata hubung dalam kalimat tersebut adalah...",
    options: ["hujan", "tetap", "Meskipun"],
    answer: "Meskipun",
    explanation: "Kata 'meskipun' adalah konjungsi (kata hubung) yang menyatakan pertentangan."
},
{
    question: "Urutan siklus hidup katak yang benar adalah...",
    options: ["Telur - Berudu - Katak Berekor - Katak Dewasa", "Berudu - Telur - Katak Berekor - Katak Dewasa", "Telur - Katak Berekor - Berudu - Katak Dewasa"],
    answer: "Telur - Berudu - Katak Berekor - Katak Dewasa",
    explanation: "Siklus hidup katak dimulai dari telur, menetas menjadi berudu (kecebong), tumbuh kaki menjadi katak berekor, dan akhirnya menjadi katak dewasa."
},
{
    question: "Ibu membeli 3 kg gula pasir. Berapa gram berat gula pasir yang dibeli ibu?",
    options: ["30 gram", "300 gram", "3000 gram"],
    answer: "3000 gram",
    explanation: "Konversi satuan berat: 1 kg sama dengan 1000 gram. Jadi, 3 kg = 3 x 1000 = 3000 gram."
},
{
    question: "Ide utama yang dibahas dalam sebuah paragraf disebut...",
    options: ["Kalimat penjelas", "Judul", "Gagasan pokok"],
    answer: "Gagasan pokok",
    explanation: "Gagasan pokok atau ide pokok adalah inti dari informasi yang menjadi dasar pengembangan sebuah paragraf."
},
{
    question: "Air yang dipanaskan terus-menerus akan berubah wujud menjadi uap. Proses ini disebut...",
    options: ["Mencair", "Membeku", "Menguap"],
    answer: "Menguap",
    explanation: "Menguap adalah proses perubahan wujud benda dari cair menjadi gas (uap) karena adanya pemanasan."
},
{
    question: "Ayah membeli 4 kantong apel. Setiap kantong berisi 12 apel. Berapa jumlah semua apel yang dibeli Ayah?",
    options: ["16 apel", "48 apel", "42 apel"],
    answer: "48 apel",
    explanation: "Ini adalah soal perkalian. Jumlah total apel adalah 4 kantong × 12 apel = 48 apel."
},
{
    question: "Buatlah kalimat dengan kata hubung 'tetapi'!",
    options: ["Saya suka apel dan jeruk", "Adik menangis tetapi kakak tertawa", "Dia tidak masuk karena sakit"],
    answer: "Adik menangis tetapi kakak tertawa",
    explanation: "Kata hubung 'tetapi' digunakan untuk menunjukkan pertentangan."
},
{
    question: "Makanan yang kita makan memberikan energi ... bagi tubuh kita.",
    options: ["Listrik", "Kimia", "Panas"],
    answer: "Kimia",
    explanation: "Makanan diubah menjadi energi kimia di dalam tubuh melalui proses metabolisme."
},
{
    question: "4500 gram sama dengan ... kg.",
    options: ["450 kg", "45 kg", "4,5 kg"],
    answer: "4,5 kg",
    explanation: "Konversi satuan: 1000 gram = 1 kg. Maka, 4500 gram = 4500 / 1000 = 4,5 kg."
},
{
    question: "Apa fungsi utama panel surya?",
    options: ["Menghasilkan angin", "Mengubah energi cahaya matahari menjadi listrik", "Mendinginkan ruangan"],
    answer: "Mengubah energi cahaya matahari menjadi listrik",
    explanation: "Panel surya bekerja dengan menangkap energi foton dari cahaya matahari dan mengubahnya menjadi energi listrik."
},
{
    question: "15 x 7 = ...",
    options: ["95", "105", "115"],
    answer: "105",
    explanation: "Hasil dari perkalian 15 dikali 7 adalah 105."
},
            { question: "Mengerjakan tugas piket di kelas adalah salah satu bentuk... siswa.", options: ["Hak", "Keinginan", "Kewajiban"], answer: "Kewajiban", explanation: "Piket kelas adalah kewajiban atau tanggung jawab setiap siswa." },
            { question: "Saat ada teman yang berbeda pendapat, sikap kita sebaiknya...", options: ["Memaksa teman setuju", "Menghargai pendapatnya", "Meninggalkannya"], answer: "Menghargai pendapatnya", explanation: "Menghargai perbedaan pendapat adalah sikap yang baik." },
            { question: "Kerja sama membersihkan lingkungan sekolah akan membuat pekerjaan menjadi...", options: ["Lebih berat", "Lebih ringan", "Lebih lama"], answer: "Lebih ringan", explanation: "Dengan kerja sama, pekerjaan yang berat akan terasa lebih ringan." },
            { question: "Kewajiban harus dilaksanakan dengan penuh rasa tanggung...", options: ["Paksa", "Malas", "Jawab"], answer: "Jawab", explanation: "Kewajiban selalu diikuti dengan tanggung jawab." },
            { question: "We eat breakfast in the...", options: ["Morning", "Afternoon", "Night"], answer: "Morning", explanation: "Sarapan (breakfast) dilakukan di pagi hari (morning)." },
            { question: "My father's sister is my...", options: ["Uncle", "Aunt", "Cousin"], answer: "Aunt", explanation: "Saudara perempuan ayah (father's sister) adalah bibi (aunt)." },
            { question: "A pilot works in an...", options: ["Hospital", "School", "Airport"], answer: "Airport", explanation: "Seorang pilot bekerja di bandara (airport)." },
            { question: "The day between Tuesday and Thursday is...", options: ["Monday", "Wednesday", "Friday"], answer: "Wednesday", explanation: "Hari di antara Selasa (Tuesday) dan Kamis (Thursday) adalah Rabu (Wednesday)." },
            { question: "Dongeng sing paragane kewan diarani...", options: ["Mite", "Legenda", "Fabel"], answer: "Fabel", explanation: "Dongeng yang tokohnya (paragane) hewan disebut fabel." },
            { question: "Becak, montor, lan sepur iku arane piranti...", options: ["Pawon", "Tetanen", "Transportasi"], answer: "Transportasi", explanation: "Becak, motor, dan kereta api adalah contoh alat transportasi." },
            { question: "Supaya pinter, bocah-bocah kudu sregep...", options: ["Turu", "Dolanan", "Sinau"], answer: "Sinau", explanation: "Agar pintar, anak-anak harus rajin belajar (sinau)." },
            { question: "Bapak maca koran. Jejer (subjek) ing ukara kasebut yaiku...", options: ["Maca", "Koran", "Bapak"], answer: "Bapak", explanation: "Subjek (jejer) atau pelaku dalam kalimat tersebut adalah 'Bapak'." }
        ],
        '4': [
{
    question: "Bentuk paling sederhana dari pecahan 12/18 adalah...",
    options: ["6/9", "4/6", "2/3"],
    answer: "2/3",
    explanation: "Pecahan disederhanakan dengan membagi pembilang dan penyebut dengan FPB-nya, yaitu 6. (12 ÷ 6) / (18 ÷ 6) = 2/3."
},
{
    question: "Informasi yang tidak sesuai dengan paragraf tentang manfaat tumbuhan adalah...",
    options: ["Tumbuhan adalah sumber makanan", "Tumbuhan menghasilkan karbon dioksida", "Kita harus menjaga kelestarian tumbuhan"],
    answer: "Tumbuhan menghasilkan karbon dioksida",
    explanation: "Paragraf tersebut menyatakan tumbuhan menghasilkan oksigen, bukan karbon dioksida."
},
{
    question: "Aktivitas mendorong meja menunjukkan bahwa gaya dapat mengubah ... benda.",
    options: ["Warna", "Wujud", "Posisi"],
    answer: "Posisi",
    explanation: "Gaya dorong menyebabkan meja yang semula diam menjadi bergerak, artinya posisinya berubah."
},
{
    question: "Kelipatan persekutuan terkecil (KPK) dari 8 dan 12 adalah...",
    options: ["16", "24", "36"],
    answer: "24",
    explanation: "Kelipatan 8: {8, 16, 24,...}. Kelipatan 12: {12, 24,...}. Kelipatan terkecil yang sama adalah 24."
},
{
    question: "Sinonim (persamaan kata) dari kata 'manfaat' adalah...",
    options: ["Kerugian", "Kegunaan", "Kesulitan"],
    answer: "Kegunaan",
    explanation: "Sinonim atau persamaan kata dari 'manfaat' adalah 'kegunaan' atau 'faedah'."
},
{
    question: "Bagian tumbuhan yang berfungsi sebagai alat perkembangbiakan adalah...",
    options: ["Akar", "Daun", "Bunga"],
    answer: "Bunga",
    explanation: "Bunga memiliki putik dan benang sari yang merupakan organ reproduksi pada tumbuhan."
},
{
    question: "Lampu A menyala setiap 6 menit, lampu B setiap 9 menit. Kapan keduanya menyala bersamaan lagi?",
    options: ["Menit ke-12", "Menit ke-18", "Menit ke-27"],
    answer: "Menit ke-18",
    explanation: "Ini adalah soal mencari KPK (Kelipatan Persekutuan Terkecil) dari 6 dan 9, yaitu 18."
},
{
    question: "Informasi penting dalam suatu teks biasanya menjawab pertanyaan apa, di mana, kapan, siapa, mengapa, dan...",
    options: ["berapa", "bagaimana", "akankah"],
    answer: "bagaimana",
    explanation: "Unsur informasi lengkap dikenal dengan 5W + 1H (What, Where, When, Who, Why + How/Bagaimana)."
},
{
    question: "Benda-benda yang tidak dapat ditembus cahaya disebut benda...",
    options: ["Bening", "Tembus pandang", "Gelap"],
    answer: "Gelap",
    explanation: "Benda gelap atau tidak tembus cahaya adalah benda yang tidak dapat meneruskan cahaya yang mengenainya."
},
{
    question: "Ani memiliki 20 kue donat dan 25 kue bolu untuk dimasukkan ke kotak. Berapa kotak paling banyak yang dibutuhkan?",
    options: ["4", "5", "10"],
    answer: "5",
    explanation: "Ini adalah soal mencari FPB (Faktor Persekutuan Terbesar) dari 20 dan 25, yaitu 5."
},
{
    question: "Cabang-cabang dalam peta pikiran biasanya berisi...",
    options: ["Judul", "Topik utama", "Kata kunci"],
    answer: "Kata kunci",
    explanation: "Cabang-cabang dalam peta pikiran diisi dengan kata kunci atau ide turunan dari topik utama."
},
{
    question: "Gaya gesek antara ban mobil dengan aspal berfungsi untuk...",
    options: ["Mempercepat laju mobil", "Membuat mobil tergelincir", "Menghentikan laju mobil"],
    answer: "Menghentikan laju mobil",
    explanation: "Gaya gesek pada sistem pengereman mobil berfungsi untuk memperlambat atau menghentikan laju kendaraan."
},
            { question: "Menyelesaikan masalah dengan cara berdiskusi untuk mencapai kesepakatan bersama disebut...", options: ["Musyawarah", "Debat", "Pemaksaan"], answer: "Musyawarah", explanation: "Musyawarah adalah ciri khas demokrasi Pancasila, sesuai sila keempat." },
            { question: "Indonesia memiliki banyak suku, agama, dan budaya. Sikap yang harus kita kembangkan adalah...", options: ["Egois", "Toleransi", "Acuh tak acuh"], answer: "Toleransi", explanation: "Toleransi adalah sikap saling menghargai di tengah perbedaan." },
            { question: "Jumlah bulu pada masing-masing sayap Garuda Pancasila melambangkan...", options: ["Tanggal kemerdekaan", "Bulan kemerdekaan", "Tahun kemerdekaan"], answer: "Tanggal kemerdekaan", explanation: "Jumlah bulu pada sayap (17 helai) melambangkan tanggal 17, hari kemerdekaan Indonesia." },
            { question: "Kewajiban utama seorang pelajar adalah...", options: ["Bermain", "Jajan", "Belajar"], answer: "Belajar", explanation: "Tugas dan kewajiban paling utama dari seorang pelajar adalah belajar." },
            { question: "A giraffe has a long...", options: ["Leg", "Tail", "Neck"], answer: "Neck", explanation: "Jerapah (giraffe) memiliki leher (neck) yang panjang." },
            { question: "The book is ... the table. (di atas)", options: ["In", "On", "Under"], answer: "On", explanation: "Kata depan untuk menyatakan posisi 'di atas' permukaan adalah 'on'." },
            { question: "A ... works in the library.", options: ["Librarian", "Teacher", "Doctor"], answer: "Librarian", explanation: "Orang yang bekerja di perpustakaan (library) disebut pustakawan (librarian)." },
            { question: "My classroom is clean and tidy. The opposite of 'clean' is...", options: ["Beautiful", "Dirty", "Large"], answer: "Dirty", explanation: "Lawan kata dari 'clean' (bersih) adalah 'dirty' (kotor)." },
            { question: "Ing ngisor iki sing kelebu tembang macapat yaiku...", options: ["Gundhul Pacul", "Jaranan", "Pocung"], answer: "Pocung", explanation: "Pocung adalah salah satu contoh dari tembang macapat, sedangkan yang lain adalah tembang dolanan." },
            { question: "Bapak nembe sare. 'Sare' iku basa kramane...", options: ["Mangan", "Turu", "Lunga"], answer: "Turu", explanation: "'Sare' adalah bahasa krama (halus) dari 'turu' (tidur)." },
            { question: "Ukara 'Adhikku mangan sega' yen dikramakake dadi...", options: ["Adhik kula nedha sekul", "Rayi kula nedha sekul", "Rayi kula dhahar sekul"], answer: "Rayi kula nedha sekul", explanation: "Bentuk krama yang tepat adalah 'Rayi kula nedha sekul'." },
            { question: "Crita rakyat saka Jawa Tengah sing misuwur yaiku crita...", options: ["Malin Kundang", "Sangkuriang", "Rawa Pening"], answer: "Rawa Pening", explanation: "Rawa Pening adalah legenda terkenal yang berasal dari Jawa Tengah." }
        ],
        '5': [
{
    question: "Hasil dari 2 1/2 - 3/4 adalah...",
    options: ["1 3/4", "1 1/4", "2 1/4"],
    answer: "1 3/4",
    explanation: "Ubah menjadi pecahan biasa: 5/2 - 3/4. Samakan penyebut: 10/4 - 3/4 = 7/4 atau 1 3/4."
},
{
    question: "Siapa yang menjadi lawan Pangeran Diponegoro dalam perang tersebut?",
    options: ["Pasukan Inggris", "Pasukan Jepang", "Pasukan kolonial Belanda"],
    answer: "Pasukan kolonial Belanda",
    explanation: "Berdasarkan teks, Perang Diponegoro adalah perang melawan pasukan kolonial Belanda."
},
{
    question: "Contoh simbiosis mutualisme adalah...",
    options: ["Benalu dan pohon mangga", "Ikan hiu dan ikan remora", "Kupu-kupu dan bunga"],
    answer: "Kupu-kupu dan bunga",
    explanation: "Mutualisme adalah hubungan yang saling menguntungkan. Kupu-kupu mendapat nektar, bunga dibantu penyerbukannya."
},
{
    question: "Sebuah keran air dapat mengisi bak bervolume 100 liter dalam waktu 20 menit. Debit air keran tersebut adalah...",
    options: ["5 liter/menit", "20 liter/menit", "80 liter/menit"],
    answer: "5 liter/menit",
    explanation: "Rumus Debit = Volume / Waktu. Maka, Debit = 100 liter / 20 menit = 5 liter/menit."
},
{
    question: "Unsur penting yang harus ada dalam iklan agar menarik perhatian adalah...",
    options: ["Harga yang mahal", "Gambar dan kalimat ajakan", "Penjelasan yang panjang"],
    answer: "Gambar dan kalimat ajakan",
    explanation: "Visual yang menarik dan kalimat persuasif (ajakan) adalah unsur penting dalam sebuah iklan."
},
{
    question: "Darah terdiri dari beberapa komponen, salah satunya adalah sel darah merah yang disebut juga...",
    options: ["Leukosit", "Trombosit", "Eritrosit"],
    answer: "Eritrosit",
    explanation: "Sel darah merah disebut eritrosit, sel darah putih disebut leukosit, dan keping darah disebut trombosit."
},
{
    question: "Hasil dari 0,5 × 1,2 adalah...",
    options: ["0,6", "6,0", "0,17"],
    answer: "0,6",
    explanation: "Hasil perkalian 0,5 dengan 1,2 adalah 0,60 atau 0,6."
},
{
    question: "Apa yang dimaksud dengan unsur 'di mana' (where) dalam sebuah berita?",
    options: ["Menjelaskan waktu kejadian", "Menjelaskan lokasi kejadian", "Menjelaskan orang yang terlibat"],
    answer: "Menjelaskan lokasi kejadian",
    explanation: "Unsur 'di mana' (where) dalam berita berfungsi untuk memberitahukan tempat atau lokasi terjadinya peristiwa."
},
{
    question: "Proses pertukaran oksigen dan karbon dioksida di dalam paru-paru terjadi di bagian...",
    options: ["Bronkus", "Trakea", "Alveolus"],
    answer: "Alveolus",
    explanation: "Alveolus adalah gelembung-gelembung kecil di ujung saluran paru-paru tempat pertukaran gas terjadi."
},
{
    question: "Hasil dari 5/6 : 1/3 adalah...",
    options: ["5/18", "1/6", "2 1/2"],
    answer: "2 1/2",
    explanation: "Pembagian pecahan sama dengan perkalian dengan kebalikannya: 5/6 x 3/1 = 15/6 = 2 3/6 atau 2 1/2."
},
{
    question: "Ular yang memakan tikus di sawah dalam rantai makanan berperan sebagai...",
    options: ["Produsen", "Konsumen tingkat I", "Konsumen tingkat II"],
    answer: "Konsumen tingkat II",
    explanation: "Padi (produsen) dimakan tikus (konsumen I), kemudian tikus dimakan ular (konsumen II)."
},
{
    question: "'Ayo, jaga kebersihan lingkungan kita!' Kalimat tersebut termasuk jenis kalimat...",
    options: ["Tanya", "Perintah", "Ajakan"],
    answer: "Ajakan",
    explanation: "Penggunaan kata 'Ayo' menunjukkan bahwa kalimat tersebut adalah kalimat ajakan."
},
            { question: "Kegiatan membersihkan selokan bersama-sama di lingkungan masyarakat merupakan wujud nyata dari semangat...", options: ["Individualisme", "Gotong royong", "Persaingan"], answer: "Gotong royong", explanation: "Gotong royong adalah nilai luhur bangsa Indonesia yang berarti bekerja bersama-sama." },
            { question: "Lembaga negara yang bertugas membuat undang-undang bersama Presiden adalah...", options: ["Mahkamah Agung (MA)", "Dewan Perwakilan Rakyat (DPR)", "Komisi Yudisial (KY)"], answer: "Dewan Perwakilan Rakyat (DPR)", explanation: "Fungsi legislasi (membuat UU) dipegang oleh DPR bersama dengan Presiden." },
            { question: "Menghormati teman yang sedang menjalankan ibadah puasa adalah contoh perilaku...", options: ["Toleransi beragama", "Kebebasan berpendapat", "Kewajiban belajar"], answer: "Toleransi beragama", explanation: "Sikap tersebut menunjukkan rasa hormat dan toleransi terhadap keyakinan orang lain." },
            { question: "Setiap warga negara memiliki hak dan ... yang sama di mata hukum.", options: ["Kekayaan", "Kewajiban", "Kekuasaan"], answer: "Kewajiban", explanation: "Prinsipnya adalah kesetaraan di mata hukum, mencakup hak dan kewajiban yang seimbang." },
            { question: "Tomorrow, I... visit my grandmother.", options: ["am", "will", "was"], answer: "will", explanation: "'Tomorrow' (besok) menunjukkan masa depan, sehingga menggunakan 'will'." },
            { question: "A place where we can save money is a...", options: ["Library", "Bank", "Post office"], answer: "Bank", explanation: "Bank adalah tempat kita bisa menabung atau menyimpan uang (save money)." },
            { question: "We can travel to another island by...", options: ["Car", "Bicycle", "Ship"], answer: "Ship", explanation: "Untuk bepergian ke pulau lain (another island), alat transportasi yang paling umum adalah kapal (ship)." },
            { question: "The opposite of 'expensive' (mahal) is ... (murah)", options: ["Beautiful", "Large", "Cheap"], answer: "Cheap", explanation: "Lawan kata dari 'expensive' (mahal) adalah 'cheap' (murah)." },
            { question: "Becik ketitik, ala ketara. Paribasan kasebut nduweni teges...", options: ["Sing apik lan sing ala bakal ketara ing tembe mburine", "Wong ala bakal cilaka, wong apik bakal slamet", "Kabeh tumindak ana akibate"], answer: "Sing apik lan sing ala bakal ketara ing tembe mburine", explanation: "Peribahasa ini berarti perbuatan baik dan buruk pada akhirnya akan terlihat juga." },
            { question: "Bapak lagi maos koran. Tembung 'maos' iku basa kramane...", options: ["Nulis", "Turu", "Maca"], answer: "Maca", explanation: "'Maos' adalah bahasa krama (halus) dari 'maca' (membaca)." },
            { question: "Ukara ing ngisor iki sing nggunakake basa krama alus yaiku...", options: ["Bapak mangan sega pecel.", "Bapak nedha sekul pecel.", "Bapak dhahar sekul pecel."], answer: "Bapak dhahar sekul pecel.", explanation: "Penggunaan 'dhahar' untuk orang yang lebih tua atau dihormati adalah tingkatan krama yang paling halus." },
            { question: "Wong sing pagaweyane nambani wong lara arane...", options: ["Guru", "Polisi", "Dhokter"], answer: "Dhokter", explanation: "Orang yang pekerjaannya mengobati orang sakit adalah dokter (dhokter)." }
        ],
        '6': [
{
    question: "Hasil dari -7 - (-10) adalah...",
    options: ["-17", "-3", "3"],
    answer: "3",
    explanation: "Mengurangi dengan bilangan negatif sama dengan menjumlahkan: -7 + 10 = 3."
},
{
    question: "Apa masalah utama yang dibahas dalam teks tentang sampah plastik?",
    options: ["Cara membuat plastik", "Daur ulang botol", "Sampah plastik sebagai masalah lingkungan"],
    answer: "Sampah plastik sebagai masalah lingkungan",
    explanation: "Teks tersebut secara jelas membahas sampah plastik sebagai masalah serius bagi lingkungan."
},
{
    question: "Ayam, burung, dan ikan adalah contoh hewan yang berkembang biak secara...",
    options: ["Vivipar", "Ovipar", "Ovovivipar"],
    answer: "Ovipar",
    explanation: "Ovipar adalah cara berkembang biak dengan bertelur, yang dilakukan oleh ayam, burung, dan ikan."
},
{
    question: "Seekor ikan berada di kedalaman 12 meter di bawah permukaan laut. Penulisan posisi ikan menggunakan bilangan bulat adalah...",
    options: ["12 meter", "-12 meter", "+12 meter"],
    answer: "-12 meter",
    explanation: "Posisi 'di bawah permukaan laut' dinyatakan dengan bilangan bulat negatif."
},
{
    question: "Bagian pidato yang berisi ucapan salam, sapaan, dan puji syukur disebut bagian...",
    options: ["Isi", "Penutup", "Pembukaan"],
    answer: "Pembukaan",
    explanation: "Pembukaan pidato berfungsi untuk menyapa audiens dan memberikan pengantar sebelum masuk ke isi."
},
{
    question: "Bebek memiliki kaki berselaput yang berfungsi untuk membantunya...",
    options: ["Mencengkeram dahan", "Berlari kencang", "Berenang di air"],
    answer: "Berenang di air",
    explanation: "Kaki berselaput pada bebek merupakan bentuk adaptasi untuk memudahkannya bergerak (berenang) di air."
},
{
    question: "Hasil dari 12 x (-4) + 100 adalah...",
    options: ["-48", "52", "68"],
    answer: "52",
    explanation: "Kerjakan perkalian terlebih dahulu: 12 x (-4) = -48. Kemudian -48 + 100 = 52."
},
{
    question: "Menemukan inti sari atau informasi pokok dari sebuah bacaan disebut kegiatan...",
    options: ["Menulis", "Menyunting", "Menyimpulkan"],
    answer: "Menyimpulkan",
    explanation: "Menyimpulkan adalah proses mengambil inti sari atau informasi penting dari suatu teks."
},
{
    question: "Perkembangbiakan yang terjadi tanpa melalui proses penyerbukan atau pembuahan disebut perkembangbiakan...",
    options: ["Generatif", "Vegetatif", "Seksual"],
    answer: "Vegetatif",
    explanation: "Perkembangbiakan vegetatif adalah perkembangbiakan aseksual (tanpa perkawinan)."
},
{
    question: "Jari-jari sebuah lingkaran adalah setengah dari...",
    options: ["Keliling", "Luas", "Diameter"],
    answer: "Diameter",
    explanation: "Diameter adalah garis tengah lingkaran, dan panjangnya adalah dua kali panjang jari-jari."
},
{
    question: "Menstruasi atau haid adalah salah satu ciri pubertas yang dialami oleh...",
    options: ["Anak laki-laki", "Anak perempuan", "Semua anak"],
    answer: "Anak perempuan",
    explanation: "Menstruasi adalah tanda bahwa sistem reproduksi pada anak perempuan sudah mulai aktif."
},
{
    question: "Mengapa data dalam sebuah laporan harus akurat?",
    options: ["Agar terlihat panjang", "Agar dapat dipercaya", "Agar mudah dibaca"],
    answer: "Agar dapat dipercaya",
    explanation: "Keakuratan data adalah kunci agar sebuah laporan dapat dipercaya dan dipertanggungjawabkan."
},
            { question: "Alinea pertama Pembukaan UUD 1945 menyatakan bahwa kemerdekaan adalah hak...", options: ["Para penjajah", "Segala bangsa", "Bangsa Indonesia saja"], answer: "Segala bangsa", explanation: "Bunyi alinea pertama adalah 'Bahwa sesungguhnya Kemerdekaan itu ialah hak segala bangsa'." },
            { question: "Salah satu dampak positif globalisasi adalah...", options: ["Budaya asing masuk tanpa filter", "Mudahnya mendapatkan informasi dan ilmu pengetahuan", "Sifat individualisme meningkat"], answer: "Mudahnya mendapatkan informasi dan ilmu pengetahuan", explanation: "Globalisasi, terutama melalui internet, memudahkan akses terhadap informasi dan pengetahuan dari seluruh dunia." },
            { question: "Cinta terhadap produk dalam negeri merupakan salah satu wujud...", options: ["Bela negara", "Chauvinisme", "Ekstrimisme"], answer: "Bela negara", explanation: "Mendukung produk dalam negeri membantu perekonomian negara dan merupakan wujud dari sikap bela negara." },
            { question: "Pahlawan tanpa tanda jasa adalah sebutan untuk...", options: ["Dokter", "Polisi", "Guru"], answer: "Guru", explanation: "Guru disebut pahlawan tanpa tanda jasa karena pengabdiannya dalam mencerdaskan bangsa." },
            { question: "Yesterday, my family ... to the zoo.", options: ["go", "goes", "went"], answer: "went", explanation: "'Yesterday' (kemarin) menunjukkan masa lampau, sehingga menggunakan Verb 2 dari 'go', yaitu 'went'." },
            { question: "I wanted to buy an ice cream, ... I didn't have enough money.", options: ["so", "but", "and"], answer: "but", explanation: "Kata hubung 'but' (tetapi) digunakan untuk menunjukkan pertentangan antara dua kalimat." },
            { question: "A person who is not afraid of anything is ... (berani)", options: ["Shy", "Brave", "Scared"], answer: "Brave", explanation: "Orang yang berani dalam bahasa Inggris disebut 'brave'." },
            { question: "My father bought a new car last .... (minggu lalu)", options: ["Day", "Month", "Week"], answer: "Week", explanation: "Minggu lalu dalam bahasa Inggris adalah 'last week'." },
            { question: "Struktur sesorah (pidhato) sing isine atur panuwun lan njaluk pangapura yaiku...", options: ["Pambuka", "Surasa basa (isi)", "Panutup"], answer: "Panutup", explanation: "Bagian penutup pidato berisi kesimpulan, ucapan terima kasih (atur panuwun), dan permohonan maaf." },
            { question: "Raden Werkudara utawa Bima iku satriya ing...", options: ["Jodhipati", "Amarta", "Madukara"], answer: "Jodhipati", explanation: "Dalam pewayangan, Raden Werkudara adalah kesatria dari Jodhipati." },
            { question: "Pusakane Raden Werkudara sing wujude kuku yaiku Kuku...", options: ["Bimapaksa", "Pancanaka", "Wijayakusuma"], answer: "Pancanaka", explanation: "Senjata pusaka Werkudara yang berupa kuku sakti adalah Kuku Pancanaka." },
            { question: "Eyang lagi nonton wayang. Basa kramane 'nonton' yaiku...", options: ["Nyawang", "Ndeleng", "Mirsani"], answer: "Mirsani", explanation: "Bahasa krama (halus) dari 'nonton' adalah 'mirsani'." }
        ],
        '7': [
{
    question: "Suhu di kota A adalah −5°C dan suhu di kota B adalah 27°C. Selisih suhu kedua kota tersebut adalah...",
    options: ["22°C", "32°C", "-32°C"],
    answer: "32°C",
    explanation: "Selisih suhu dihitung dengan mengurangi suhu yang lebih tinggi dengan yang lebih rendah: 27°C - (-5°C) = 27 + 5 = 32°C."
},
{
    question: "Bagian dari teks deskripsi yang berisi gambaran rinci dari objek disebut...",
    options: ["Identifikasi", "Klasifikasi", "Deskripsi bagian"],
    answer: "Deskripsi bagian",
    explanation: "Setelah identifikasi umum, teks deskripsi akan merinci objek pada bagian yang disebut 'deskripsi bagian'."
},
{
    question: "Nama ilmiah untuk padi adalah Oryza sativa. Kata 'Oryza' menunjukkan tingkatan takson...",
    options: ["Spesies", "Genus", "Famili"],
    answer: "Genus",
    explanation: "Dalam sistem binomial nomenclature, kata pertama (Oryza) menunjukkan Genus dan kata kedua (sativa) menunjukkan penunjuk spesies."
},
{
    question: "Hasil dari (2p+3q)−(p−4q) adalah...",
    options: ["p - q", "p + 7q", "3p - q"],
    answer: "p + 7q",
    explanation: "Buka kurung: 2p + 3q - p + 4q. Kelompokkan suku sejenis: (2p-p) + (3q+4q) = p + 7q."
},
{
    question: "Tokoh yang menjadi lawan dari tokoh utama (protagonis) dalam sebuah cerita disebut...",
    options: ["Tritagonis", "Figuran", "Antagonis"],
    answer: "Antagonis",
    explanation: "Antagonis adalah tokoh yang memiliki konflik dengan dan menjadi penentang dari tokoh protagonis."
},
{
    question: "Tumbuhan lumut dan paku diklasifikasikan ke dalam kelompok tumbuhan tidak berbiji. Apa perbedaan utama antara keduanya?",
    options: ["Lumut punya akar, paku tidak", "Paku punya pembuluh angkut, lumut tidak", "Lumut berfotosintesis, paku tidak"],
    answer: "Paku punya pembuluh angkut, lumut tidak",
    explanation: "Tumbuhan paku sudah memiliki jaringan pembuluh (xilem dan floem), sedangkan lumut belum."
},
{
    question: "Seorang pedagang rugi Rp15.000 setelah menjual barang seharga Rp135.000. Berapa harga beli barang tersebut?",
    options: ["Rp120.000", "Rp135.000", "Rp150.000"],
    answer: "Rp150.000",
    explanation: "Harga Beli = Harga Jual + Rugi. Maka, Harga Beli = Rp135.000 + Rp15.000 = Rp150.000."
},
{
    question: "'Matikan kompor jika air sudah mendidih.' Kalimat tersebut termasuk jenis kalimat...",
    options: ["Saran", "Perintah", "Tanya"],
    answer: "Perintah",
    explanation: "Kalimat tersebut memberikan instruksi atau perintah yang jelas untuk melakukan sesuatu."
},
{
    question: "Contoh perpindahan panas secara radiasi dalam kehidupan sehari-hari adalah...",
    options: ["Ujung sendok panas saat mengaduk teh", "Gerakan air saat direbus", "Panas api unggun terasa di wajah kita"],
    answer: "Panas api unggun terasa di wajah kita",
    explanation: "Radiasi adalah perpindahan panas tanpa memerlukan medium, seperti panas api yang sampai ke kita."
},
{
    question: "KPK dari 12a²b dan 18ab³ adalah...",
    options: ["36a²b³", "6ab", "36a³b³"],
    answer: "36a²b³",
    explanation: "KPK dari 12 dan 18 adalah 36. Untuk variabel, ambil pangkat tertinggi dari masing-masing, yaitu a² dan b³. Jadi KPK-nya 36a²b³."
},
{
    question: "Mikroskop adalah alat yang digunakan dalam pengamatan IPA untuk...",
    options: ["Melihat benda jauh", "Melihat benda yang sangat kecil", "Mengukur berat benda"],
    answer: "Melihat benda yang sangat kecil",
    explanation: "Mikroskop berfungsi untuk memperbesar bayangan objek yang sangat kecil sehingga dapat diamati."
},
{
    question: "Diketahui H={x | 1<x≤10, x ∈ bilangan prima}. Anggota dari himpunan H adalah...",
    options: ["{2, 3, 5, 7}", "{3, 5, 7}", "{1, 2, 3, 5, 7}"],
    answer: "{2, 3, 5, 7}",
    explanation: "Bilangan prima antara 1 dan 10 (inklusif) adalah 2, 3, 5, dan 7. Angka 1 bukan bilangan prima."
},
            { question: "Badan yang dibentuk Jepang untuk mempersiapkan kemerdekaan Indonesia adalah...", options: ["PPKI", "BPUPKI", "PETA"], answer: "BPUPKI", explanation: "BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan) dibentuk untuk merumuskan dasar negara." },
            { question: "Norma yang memiliki sanksi paling tegas dan memaksa yang diatur oleh negara adalah norma...", options: ["Agama", "Kesusilaan", "Kesopanan", "Hukum"], answer: "Hukum", explanation: "Norma hukum memiliki sanksi yang nyata, tegas, dan memaksa yang ditegakkan oleh aparat negara." },
            { question: "Ketua dari BPUPKI adalah...", options: ["Ir. Soekarno", "Moh. Hatta", "Dr. K.R.T. Radjiman Wedyodiningrat", "Mr. Soepomo"], answer: "Dr. K.R.T. Radjiman Wedyodiningrat", explanation: "BPUPKI diketuai oleh Dr. K.R.T. Radjiman Wedyodiningrat." },
            { question: "Rumusan Pancasila yang sah dan resmi tercantum dalam ... UUD NRI Tahun 1945.", options: ["Pasal 1", "Pembukaan", "Batang Tubuh", "Penjelasan"], answer: "Pembukaan", explanation: "Rumusan Pancasila yang final dan sah tercantum dalam alinea keempat Pembukaan UUD 1945." },
            { question: "What is Anita's hobby?", options: ["Studying", "Reading books", "Going to the library"], answer: "Reading books", explanation: "Teks menyatakan 'I have a hobby, it is reading books'." },
            { question: "My father is a doctor. He ... in a hospital.", options: ["work", "works", "is working"], answer: "works", explanation: "Untuk subjek tunggal (He, She, It) dalam simple present tense, kata kerjanya ditambah -s atau -es." },
            { question: "A: ... you have any pets? B: Yes, I do.", options: ["Do", "Does", "Is", "Are"], answer: "Do", explanation: "Untuk subjek I, You, We, They, kalimat tanya menggunakan 'Do'." },
            { question: "The opposite of 'diligent' (rajin) is...", options: ["Smart", "Lazy", "Kind"], answer: "Lazy", explanation: "Lawan kata dari 'diligent' (rajin) adalah 'lazy' (malas)." },
            { question: "Pawongan sing ahli nggurit (ngarang geguritan) diarani...", options: ["Dhalang", "Panggurit", "Niyaga"], answer: "Panggurit", explanation: "Orang yang ahli membuat geguritan (puisi Jawa) disebut panggurit." },
            { question: "Tulisan Jawa iki diwaca... (ꦩꦔꦤ꧀ꦤꦱꦶ)", options: ["Mangan nasi", "Mangan sega", "Mangan roti"], answer: "Mangan nasi", explanation: "Rangkaian aksara tersebut dibaca 'mangan nasi'." },
            { question: "Geguritan yaiku salah siji karya sastra Jawa gagrag ... (lawas/anyar).", options: ["Anyar", "Lawas", "Campuran"], answer: "Anyar", explanation: "Geguritan adalah puisi Jawa gaya baru (gagrag anyar) yang tidak terikat aturan seperti tembang macapat." },
            { question: "Simbah nembe sare. Basa ngokone 'sare' yaiku...", options: ["Mangan", "Lunga", "Turu"], answer: "Turu", explanation: "'Sare' adalah bahasa krama dari 'turu' (tidur)." }
        ],
        '8': [
{
    question: "Rumus suku ke-n dari barisan bilangan 3, 7, 11, 15, ... adalah...",
    options: ["3n", "n + 4", "4n - 1"],
    answer: "4n - 1",
    explanation: "Barisan ini memiliki beda 4. Rumus Un = a + (n-1)b = 3 + (n-1)4 = 3 + 4n - 4 = 4n - 1."
},
{
    question: "Bagian teks berita yang merupakan inti dari keseluruhan berita disebut...",
    options: ["Judul (headline)", "Teras berita (lead)", "Tubuh berita (body)"],
    answer: "Teras berita (lead)",
    explanation: "Teras berita (lead) biasanya terletak di paragraf pertama dan merangkum unsur-unsur terpenting dari berita (5W+1H)."
},
{
    question: "Sebuah mobil bergerak dengan kecepatan tetap 20 m/s. Jarak yang ditempuh mobil selama 10 detik adalah...",
    options: ["2 meter", "200 meter", "30 meter"],
    answer: "200 meter",
    explanation: "Jarak = kecepatan × waktu. Jarak = 20 m/s × 10 s = 200 meter."
},
{
    question: "Relasi dari himpunan A={1,2,3} ke B={2,4,6} yang menyatakan 'setengah dari' adalah...",
    options: ["{(1,2), (2,4), (3,6)}", "{(1,2), (2,3), (3,4)}", "{(2,1), (4,2), (6,3)}"],
    answer: "{(1,2), (2,4), (3,6)}",
    explanation: "Pasangan yang sesuai dengan relasi 'setengah dari' adalah 1 setengah dari 2, 2 setengah dari 4, dan 3 setengah dari 6."
},
{
    question: "Bagian penegasan ulang dalam teks eksposisi berisi...",
    options: ["Pengenalan isu", "Argumen penulis", "Simpulan atau rangkuman"],
    answer: "Simpulan atau rangkuman",
    explanation: "Bagian penegasan ulang berfungsi untuk menyimpulkan dan menegaskan kembali pendapat yang telah disampaikan."
},
{
    question: "Sebuah benda bermassa 5 kg ditarik dengan gaya 15 N. Percepatan yang dialami benda tersebut adalah... m/s².",
    options: ["3", "10", "75"],
    answer: "3",
    explanation: "Gunakan rumus F = m × a. Maka a = F / m = 15 N / 5 kg = 3 m/s²."
},
{
    question: "Garis yang sejajar dengan sumbu-X memiliki posisi...",
    options: ["Vertikal", "Miring", "Horizontal"],
    answer: "Horizontal",
    explanation: "Sumbu-X adalah garis horizontal, maka garis yang sejajar dengannya juga horizontal."
},
{
    question: "Unsur-unsur yang harus ada dalam sebuah iklan komersial meliputi nama produk dan...",
    options: ["Tanggal produksi", "Kelebihan produk", "Nama direktur perusahaan"],
    answer: "Kelebihan produk",
    explanation: "Iklan harus menonjolkan kelebihan atau keunggulan produk untuk menarik minat konsumen."
},
{
    question: "Bidang miring digunakan untuk mempermudah pekerjaan dengan cara...",
    options: ["Memperbesar gaya", "Mengubah arah gaya", "Memperkecil gaya"],
    answer: "Memperkecil gaya",
    explanation: "Bidang miring memungkinkan kita memindahkan benda dengan gaya yang lebih kecil meskipun menempuh jarak yang lebih jauh."
},
{
    question: "Persamaan garis lurus yang melalui titik (0,3) dan bergradien 2 adalah...",
    options: ["y = 3x + 2", "y = 2x + 3", "y = 2x - 3"],
    answer: "y = 2x + 3",
    explanation: "Gunakan rumus y = mx + c. Gradien (m)=2. Titik (0,3) menunjukkan c=3. Jadi, persamaannya y = 2x + 3."
},
{
    question: "Batang pada tumbuhan dikotil memiliki kambium yang berfungsi untuk...",
    options: ["Mengangkut air", "Menyimpan makanan", "Pertumbuhan sekunder (membesar)"],
    answer: "Pertumbuhan sekunder (membesar)",
    explanation: "Aktivitas kambium menyebabkan pertumbuhan sekunder, yaitu pertambahan diameter (membesarnya) batang."
},
{
    question: "Dari himpunan pasangan berurutan berikut, manakah yang merupakan fungsi?",
    options: ["{(1,a),(2,b),(1,c)}", "{(1,a),(2,a),(3,a)}", "{(a,1),(b,1),(c,2)}"],
    answer: "{(1,a),(2,a),(3,a)}",
    explanation: "Syarat fungsi adalah setiap anggota domain (daerah asal) harus memiliki tepat satu pasangan di kodomain. Pilihan A tidak memenuhi karena 1 memiliki dua pasangan (a dan c)."
},
            { question: "Kedudukan Pancasila sebagai sumber dari segala sumber hukum berarti...", options: ["Pancasila adalah satu-satunya hukum", "Semua peraturan tidak boleh bertentangan dengan Pancasila", "Pancasila dapat diubah oleh hukum"], answer: "Semua peraturan tidak boleh bertentangan dengan Pancasila", explanation: "Artinya, semua hukum dan peraturan yang dibuat di Indonesia harus bersumber dan tidak boleh menyimpang dari nilai-nilai Pancasila." },
            { question: "Peraturan yang kedudukannya paling tinggi di Indonesia adalah...", options: ["Undang-Undang (UU)", "TAP MPR", "UUD NRI Tahun 1945", "Perda"], answer: "UUD NRI Tahun 1945", explanation: "Berdasarkan tata urutan perundang-undangan, UUD NRI Tahun 1945 menempati posisi tertinggi." },
            { question: "Proses mengubah atau melakukan penyesuaian terhadap UUD NRI Tahun 1945 disebut...", options: ["Amandemen", "Yudikatif", "Legislatif", "Konstitusi"], answer: "Amandemen", explanation: "Amandemen adalah proses perubahan resmi terhadap dokumen, khususnya konstitusi atau UUD." },
            { question: "Lembaga negara yang berwenang melakukan perubahan terhadap UUD NRI Tahun 1945 adalah...", options: ["Presiden", "DPR", "MPR", "MA"], answer: "MPR", explanation: "Majelis Permusyawaratan Rakyat (MPR) adalah satu-satunya lembaga yang memiliki wewenang untuk mengubah dan menetapkan UUD." },
            { question: "What is the purpose of the text about going to the beach?", options: ["To describe the beach", "To tell how to go to the beach", "To retell the writer's past experience"], answer: "To retell the writer's past experience", explanation: "Teks tersebut menggunakan kata kerja lampau (went, swam) untuk menceritakan kembali pengalaman (recount text)." },
            { question: "My little brother fell from the bicycle yesterday. He ... his leg.", options: ["break", "broke", "breaks"], answer: "broke", explanation: "'Yesterday' (kemarin) menunjukkan kejadian lampau, sehingga menggunakan Verb 2 dari 'break', yaitu 'broke'." },
            { question: "The simple past tense of the verb 'eat' is...", options: ["eats", "eaten", "ate"], answer: "ate", explanation: "Bentuk lampau (simple past) dari kata kerja 'eat' adalah 'ate'." },
            { question: "A text that retells events or experiences in the past is called a ... text.", options: ["Descriptive", "Procedure", "Recount"], answer: "Recount", explanation: "Recount text adalah jenis teks yang bertujuan untuk menceritakan kembali kejadian atau pengalaman di masa lalu." },
            { question: "Iklan kang isine ngajak-ajak masyarakat nindakake babagan kang becik diarani iklan...", options: ["Komersial", "Panjaluk", "Layanan masyarakat"], answer: "Layanan masyarakat", explanation: "Iklan layanan masyarakat bertujuan untuk memberikan edukasi atau ajakan positif kepada publik." },
            { question: "Cacahe wanda (suku kata) ing saben gatra (baris) tembang macapat diarani guru...", options: ["Gatra", "Lagu", "Wilangan"], answer: "Wilangan", explanation: "Guru wilangan adalah aturan jumlah suku kata dalam setiap baris tembang macapat." },
            { question: "Guru lagu yaiku tibaning swara ... ing pungkasaning gatra.", options: ["Konsonan", "Vokal", "Suku kata"], answer: "Vokal", explanation: "Guru lagu adalah aturan persamaan bunyi vokal di akhir setiap baris tembang macapat." },
            { question: "Tembang Pangkur nduweni watak...", options: ["Sedhih", "Tresna", "Sereng/semangat"], answer: "Sereng/semangat", explanation: "Tembang Pangkur biasanya memiliki karakter (watak) yang bersemangat, kuat, atau terkadang marah." }
        ],
        '9': [
{
    question: "Hasil dari 4√3 + 2√12 - √27 adalah...",
    options: ["5√3", "4√3", "6√3"],
    answer: "5√3",
    explanation: "Sederhanakan akar: 4√3 + 2(2√3) - 3√3 = 4√3 + 4√3 - 3√3 = 5√3."
},
{
    question: "Kalimat yang tidak mengandung unsur subjektivitas atau pendapat pribadi disebut kalimat...",
    options: ["Opini", "Fakta", "Persuasif"],
    answer: "Fakta",
    explanation: "Kalimat fakta adalah kalimat yang menyajikan informasi secara objektif dan dapat dibuktikan kebenarannya."
},
{
    question: "Bagian dari sel yang berfungsi sebagai pusat pengendali seluruh aktivitas sel dan mengandung materi genetik adalah...",
    options: ["Sitoplasma", "Membran sel", "Inti sel (Nukleus)"],
    answer: "Inti sel (Nukleus)",
    explanation: "Inti sel atau nukleus adalah organel utama yang mengontrol semua kegiatan sel."
},
{
    question: "Sebuah persegi panjang memiliki panjang (x+5) cm dan lebar (x-2) cm. Jika luasnya 50 cm², maka persamaan kuadrat yang sesuai adalah...",
    options: ["x² + 3x - 60 = 0", "x² + 3x + 10 = 0", "x² + 7x - 50 = 0"],
    answer: "x² + 3x - 60 = 0",
    explanation: "Luas = p × l. (x+5)(x-2) = 50. x² - 2x + 5x - 10 = 50. Maka, x² + 3x - 60 = 0."
},
{
    question: "Ciri kebahasaan teks laporan percobaan adalah banyak menggunakan istilah...",
    options: ["Daerah", "Populer", "Teknis/Ilmiah"],
    answer: "Teknis/Ilmiah",
    explanation: "Laporan percobaan menggunakan istilah teknis atau ilmiah yang spesifik sesuai bidang yang diuji."
},
{
    question: "Gaya tarik atau tolak antara dua muatan listrik dipengaruhi oleh besar muatan dan...",
    options: ["Suhu", "Jarak", "Massa"],
    answer: "Jarak",
    explanation: "Menurut Hukum Coulomb, gaya listrik berbanding terbalik dengan kuadrat jarak antara dua muatan."
},
{
    question: "Titik puncak dari grafik fungsi f(x)=(x−2)²+3 adalah...",
    options: ["(-2, 3)", "(2, 3)", "(2, -3)"],
    answer: "(2, 3)",
    explanation: "Dari bentuk f(x)=a(x-p)²+q, titik puncaknya adalah (p, q). Maka, titik puncaknya adalah (2, 3)."
},
{
    question: "Tujuan utama dari pidato persuasif adalah untuk...",
    options: ["Menghibur", "Memberi informasi", "Meyakinkan atau membujuk"],
    answer: "Meyakinkan atau membujuk",
    explanation: "Pidato persuasif dirancang untuk memengaruhi sikap dan tindakan audiens agar setuju dengan gagasan pembicara."
},
{
    question: "Jika seorang pria bergenotipe homozigot dominan (TT) disilangkan dengan wanita bergenotipe resesif (tt), maka kemungkinan fenotipe keturunannya adalah...",
    options: ["Semua pendek", "Semua tinggi", "Setengah tinggi, setengah pendek"],
    answer: "Semua tinggi",
    explanation: "Semua keturunan (F1) akan memiliki genotipe heterozigot (Tt) dan menunjukkan sifat dominan, yaitu tinggi."
},
{
    question: "Bentuk rasional dari penyebut pecahan 6/√3 adalah...",
    options: ["2√3", "3√2", "6√3"],
    answer: "2√3",
    explanation: "Kalikan dengan √3/√3. (6√3) / (√3 x √3) = 6√3 / 3 = 2√3."
},
{
    question: "Perbedaan mendasar antara cerpen dan novel terletak pada...",
    options: ["Jumlah tokoh", "Adanya konflik", "Panjang cerita dan kompleksitas alur"],
    answer: "Panjang cerita dan kompleksitas alur",
    explanation: "Novel memiliki alur cerita yang lebih panjang dan kompleks, dengan lebih banyak tokoh dan konflik dibandingkan cerpen."
},
{
    question: "Sebuah penggaris plastik yang digosokkan ke rambut kering dapat menarik kertas kecil karena penggaris menjadi bermuatan listrik...",
    options: ["Positif", "Negatif", "Netral"],
    answer: "Negatif",
    explanation: "Saat digosokkan ke rambut, elektron dari rambut pindah ke penggaris, sehingga penggaris kelebihan elektron dan bermuatan negatif."
},
            { question: "Upaya pemberontakan DI/TII bertujuan untuk mengganti ideologi Pancasila dengan ideologi...", options: ["Komunisme", "Liberalisme", "Syariat Islam (Negara Islam)"], answer: "Syariat Islam (Negara Islam)", explanation: "Pemberontakan DI/TII (Darul Islam/Tentara Islam Indonesia) bertujuan untuk mendirikan Negara Islam Indonesia." },
            { question: "Teori kedaulatan yang menyatakan bahwa kekuasaan tertinggi dalam negara berada di tangan rakyat disebut...", options: ["Kedaulatan Tuhan", "Kedaulatan Raja", "Kedaulatan Hukum", "Kedaulatan Rakyat"], answer: "Kedaulatan Rakyat", explanation: "Kedaulatan rakyat (demokrasi) adalah teori di mana rakyat memegang kekuasaan tertinggi." },
            { question: "Ciri utama dari demokrasi Pancasila dalam mengambil keputusan adalah mengutamakan...", options: ["Suara terbanyak (voting)", "Keputusan pemimpin", "Musyawarah untuk mufakat"], answer: "Musyawarah untuk mufakat", explanation: "Musyawarah untuk mufakat adalah prinsip utama dalam demokrasi Pancasila, sesuai sila keempat." },
            { question: "Pemberontakan G30S/PKI pada tahun 1965 merupakan upaya mengganti Pancasila dengan ideologi...", options: ["Liberal", "Kapitalis", "Komunis"], answer: "Komunis", explanation: "Gerakan 30 September oleh PKI bertujuan untuk mengganti ideologi Pancasila dengan ideologi komunis." },
            { question: "What is the goal of the text 'How to Make Fried Rice'?", options: ["To describe fried rice", "To tell how to make fried rice", "To persuade people to eat fried rice"], answer: "To tell how to make fried rice", explanation: "Teks tersebut berisi langkah-langkah (procedure text) yang tujuannya adalah memberitahu cara membuat sesuatu." },
            { question: "You will likely find 'take this medicine 3 times a day' on a...", options: ["Food label", "Drink label", "Medicine label"], answer: "Medicine label", explanation: "Informasi cara pemakaian obat ditemukan pada label obat (medicine label)." },
            { question: "A product that is good to be consumed before a certain date. This refers to the...", options: ["Ingredients", "Brand name", "Expiration date"], answer: "Expiration date", explanation: "Tanggal kedaluwarsa (expiration date) menunjukkan batas waktu produk baik untuk dikonsumsi." },
            { question: "The verbs used in a procedure text are usually in the... form (e.g., cut, mix, add).", options: ["Past", "Continuous", "Imperative"], answer: "Imperative", explanation: "Teks prosedur menggunakan kalimat perintah (imperative), di mana kata kerjanya dalam bentuk dasar." },
            { question: "Perang gedhe antarane Pandhawa lan Kurawa diarani perang...", options: ["Ramayana", "Kresna Duta", "Bharatayudha"], answer: "Bharatayudha", explanation: "Perang besar antara keluarga Pandhawa dan Kurawa di padang Kurusetra disebut Perang Bharatayudha." },
            { question: "Ing crita wayang, Kurawa cacahe ana...", options: ["Sepuluh", "Selawe", "Satus"], answer: "Satus", explanation: "Jumlah Kurawa dalam kisah Mahabharata adalah seratus orang." },
            { question: "Aksara Jawa sing gunane kanggo nulis tembung saka basa manca yaiku aksara...", options: ["Murda", "Swara", "Rekan"], answer: "Rekan", explanation: "Aksara Rekan (contohnya kh, f, dz, gh, z) digunakan untuk menulis kata-kata serapan dari bahasa asing." },
            { question: "Pidhato sing ditindakake kanthi dadakan tanpa persiapan diarani metode...", options: ["Naskah", "Hapalan", "Impromptu"], answer: "Impromptu", explanation: "Metode pidato yang dilakukan secara spontan dan mendadak disebut impromptu." }
        ],
        '10': [
{
    question: "Bentuk sederhana dari (a⁵b²c⁻¹)/(a³b⁻³c²) adalah...",
    options: ["a²b⁵c⁻³", "a⁻²b⁻¹c⁻¹", "a⁸b⁻¹c¹"],
    answer: "a²b⁵c⁻³",
    explanation: "Gunakan sifat pangkat: xᵐ/xⁿ = xᵐ⁻ⁿ. a⁵⁻³ = a²; b²⁻⁽⁻³⁾ = b⁵; c⁻¹⁻² = c⁻³."
},
{
    question: "Teks yang bertujuan untuk mengklarifikasi atau menyampaikan gagasan berdasarkan sudut pandang tertentu dengan argumen yang kuat disebut teks...",
    options: ["LHO", "Anekdot", "Eksposisi"],
    answer: "Eksposisi",
    explanation: "Teks eksposisi bertujuan untuk meyakinkan pembaca tentang suatu isu dengan menyajikan argumen yang didukung fakta."
},
{
    question: "(Fisika) Sebuah mobil bergerak ke timur sejauh 80 km, kemudian berbalik ke barat sejauh 20 km. Perpindahan mobil tersebut adalah...",
    options: ["100 km ke timur", "60 km ke timur", "60 km ke barat"],
    answer: "60 km ke timur",
    explanation: "Perpindahan adalah perubahan posisi dari titik awal ke akhir. 80 km (timur) - 20 km (barat) = 60 km dari titik awal ke arah timur."
},
{
    question: "Jika ²log3=a dan ³log5=b, maka nilai dari ²log5 adalah...",
    options: ["a + b", "a / b", "ab"],
    answer: "ab",
    explanation: "Gunakan sifat logaritma: ˣlogy × ʸlogz = ˣlogz. Maka ²log3 × ³log5 = ²log5. Jadi, nilainya adalah a × b = ab."
},
{
    question: "Bagian dalam struktur anekdot yang berisi puncak kelucuan atau kritikan disebut...",
    options: ["Abstraksi", "Orientasi", "Krisis"],
    answer: "Krisis",
    explanation: "Krisis adalah tahap di mana masalah utama atau kelucuan puncak dalam anekdot muncul."
},
{
    question: "(Kimia) Cabang biologi yang khusus mempelajari tentang virus adalah...",
    options: ["Sitologi", "Bakteriologi", "Virologi"],
    answer: "Virologi",
    explanation: "Virologi berasal dari kata 'virus' dan 'logos' (ilmu), sehingga merupakan ilmu yang mempelajari tentang virus."
},
{
    question: "Sebuah modal Rp1.000.000 dibungakan dengan bunga majemuk 10% per tahun. Besar modal setelah 2 tahun adalah...",
    options: ["Rp1.200.000", "Rp1.210.000", "Rp1.100.000"],
    answer: "Rp1.210.000",
    explanation: "Tahun 1: 1.000.000 + (10% x 1.000.000) = 1.100.000. Tahun 2: 1.100.000 + (10% x 1.100.000) = 1.100.000 + 110.000 = Rp1.210.000."
},
{
    question: "Tingkatan organisasi kehidupan setelah sel adalah...",
    options: ["Organ", "Jaringan", "Sistem organ"],
    answer: "Jaringan",
    explanation: "Urutan tingkatan organisasi kehidupan adalah Sel -> Jaringan -> Organ -> Sistem Organ -> Organisme."
},
{
    question: "Seutas tali dipotong menjadi 5 bagian membentuk barisan geometri. Jika potongan terpendek 4 cm dan terpanjang 324 cm, panjang tali semula adalah...",
    options: ["484 cm", "480 cm", "496 cm"],
    answer: "484 cm",
    explanation: "a=4, U5=324. ar⁴=324 -> 4r⁴=324 -> r⁴=81 -> r=3. Sn = a(rⁿ-1)/(r-1). S5 = 4(3⁵-1)/(3-1) = 4(242)/2 = 484 cm."
},
{
    question: "Jenis argumen yang digunakan dalam teks eksposisi harus didukung oleh...",
    options: ["Perasaan", "Opini populer", "Fakta dan data"],
    answer: "Fakta dan data",
    explanation: "Argumen dalam teks eksposisi harus kuat dan meyakinkan, oleh karena itu perlu didukung oleh fakta dan data yang valid."
},
{
    question: "'Paus adalah salah satu mamalia laut.' Kalimat ini merupakan contoh kalimat definisi yang sering ditemukan pada bagian... Teks LHO.",
    options: ["Deskripsi bagian", "Deskripsi manfaat", "Pernyataan umum/klasifikasi"],
    answer: "Pernyataan umum/klasifikasi",
    explanation: "Bagian awal Teks LHO biasanya berisi pernyataan umum atau klasifikasi yang mendefinisikan objek yang diamati."
},
{
    question: "Makna tersirat atau sindiran yang ingin disampaikan dalam sebuah anekdot disebut...",
    options: ["Humor", "Kritik sosial", "Amanat"],
    answer: "Kritik sosial",
    explanation: "Salah satu fungsi utama anekdot adalah untuk menyampaikan kritik sosial melalui cerita lucu yang memiliki makna tersirat."
},
            { question: "Menurut teori Montesquieu, kekuasaan untuk melaksanakan undang-undang disebut kekuasaan...", options: ["Legislatif", "Eksekutif", "Yudikatif"], answer: "Eksekutif", explanation: "Menurut Trias Politica, Eksekutif adalah kekuasaan untuk menjalankan UU, Legislatif membuat UU, dan Yudikatif mengadili pelanggaran UU." },
            { question: "Pancasila sebagai dasar negara (philosophische grondslag) memiliki arti bahwa Pancasila adalah...", options: ["Pandangan hidup bangsa", "Fondasi dalam penyelenggaraan negara", "Cita-cita dan tujuan bangsa"], answer: "Fondasi dalam penyelenggaraan negara", explanation: "Sebagai dasar negara, Pancasila menjadi fondasi atau landasan bagi seluruh aktivitas penyelenggaraan negara." },
            { question: "Di Indonesia, kekuasaan yudikatif atau kehakiman dipegang oleh...", options: ["DPR dan MPR", "Presiden dan Wakil Presiden", "Mahkamah Agung dan Mahkamah Konstitusi"], answer: "Mahkamah Agung dan Mahkamah Konstitusi", explanation: "Kekuasaan yudikatif sebagai lembaga peradilan dipegang oleh MA dan MK." },
            { question: "Kekuasaan untuk membuat atau membentuk undang-undang di Indonesia dipegang oleh...", options: ["Presiden", "DPR (bersama Presiden)", "MPR"], answer: "DPR (bersama Presiden)", explanation: "Fungsi legislasi (pembentukan UU) di Indonesia dijalankan oleh DPR dengan persetujuan bersama Presiden." },
            { question: "What is the main idea of the text about R.A. Kartini?", options: ["The history of Jepara", "The biography of R.A. Kartini", "The education system in the past"], answer: "The biography of R.A. Kartini", explanation: "Teks tersebut menceritakan riwayat hidup dan perjuangan R.A. Kartini." },
            { question: "'She founded the first school...' The word 'founded' means...", options: ["built", "destroyed", "established"], answer: "established", explanation: "Kata 'founded' berarti mendirikan atau membangun (established/built)." },
            { question: "The social function of a narrative text, such as a legend or a fable, is to...", options: ["Inform about an event", "Describe how to do something", "Amuse or entertain the readers"], answer: "Amuse or entertain the readers", explanation: "Tujuan utama teks naratif adalah untuk menghibur (amuse/entertain) pembaca dengan sebuah cerita." },
            { question: "The generic structure of a narrative text is Orientation, ..., and Resolution.", options: ["Steps", "Arguments", "Complication"], answer: "Complication", explanation: "Struktur umum teks naratif adalah Orientasi (pengenalan), Komplikasi (munculnya masalah), dan Resolusi (penyelesaian)." },
            { question: "Serat Wedhatama iku anggitane (karya)...", options: ["R.Ng. Ranggawarsita", "KGPAA Mangkunegara IV", "Pakubuwana IV"], answer: "KGPAA Mangkunegara IV", explanation: "Serat Wedhatama adalah karya sastra terkenal dari KGPAA Mangkunegara IV." },
            { question: "'Lila lamun kelangan nora gegetun.' Tembung 'gegetun' nduweni teges...", options: ["Seneng banget", "Nesu banget", "Getun banget (sangat menyesal)"], answer: "Getun banget (sangat menyesal)", explanation: "Kalimat itu berarti 'Ikhlas jika kehilangan, tidak akan sangat menyesal'. Jadi 'gegetun' artinya sangat menyesal." },
            { question: "Guru gatra, guru wilangan, lan guru lagu ing tembang macapat diarani...", options: ["Purwakanthi", "Gancaran", "Paugeran"], answer: "Paugeran", explanation: "Ketiga aturan (jumlah baris, suku kata, dan vokal akhir) dalam tembang macapat secara kolektif disebut paugeran." },
            { question: "Paugeran tembang macapat Pocung yaiku...", options: ["8a, 11i, 8u, 7a, 12u, 8a, 8i", "12u, 6a, 8i, 12a", "7u, 10u, 12i, 8u, 8o"], answer: "12u, 6a, 8i, 12a", explanation: "Aturan (paugeran) tembang Pocung adalah 12u, 6a, 8i, 12a." }
        ]
    };
    
    // =========================================================================================
    // BAGIAN DI BAWAH INI ADALAH LOGIKA KUIS, TIDAK PERLU DIUBAH
    // =========================================================================================

    const classSelectionScreen = document.getElementById('class-selection-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const questionModal = document.getElementById('question-modal');
    const classButtons = document.querySelectorAll('.class-btn');
    const questionGrid = document.getElementById('question-grid');
    const quizHeader = document.getElementById('quiz-header');
    const backButton = document.getElementById('back-to-classes');
    const modalQuestion = document.getElementById('modal-question');
    const modalOptions = document.getElementById('modal-options');
    const modalFeedback = document.getElementById('modal-feedback');
    const feedbackText = document.getElementById('feedback-text');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    let currentClass = null;
    let currentQuestions = [];
    let answeredState = {};

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- FUNGSI BARU UNTUK MENGGAMBAR GRID SOAL ---
    function renderGrid() {
        questionGrid.innerHTML = '';
        currentQuestions.forEach((_, index) => {
            const questionBox = document.createElement('div');
            questionBox.classList.add('question-box');
            questionBox.textContent = index + 1;
            questionBox.dataset.index = index;

            const colorIndex = (index % 5) + 1;
            questionBox.classList.add(`qb-color-${colorIndex}`);
            
            if (answeredState[currentClass].includes(index)) {
                questionBox.classList.add('answered');
            }
            
            questionGrid.appendChild(questionBox);
        });
    }

    // --- FUNGSI showQuiz KINI HANYA MENGACAK SOAL SEKALI ---
    function showQuiz(classNumber) {
        currentClass = classNumber;
        if (!answeredState[currentClass]) {
            answeredState[currentClass] = [];
        }
        
        // Soal hanya diacak saat memilih kelas
        currentQuestions = shuffleArray([...quizData[classNumber]]);
        quizHeader.textContent = `Soal Kelas ${classNumber}`;
        
        renderGrid(); // Panggil fungsi baru untuk menampilkan grid

        classSelectionScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
    }

    function openQuestion(index) {
        const questionData = currentQuestions[index];
        modalQuestion.textContent = questionData.question;
        modalOptions.innerHTML = '';
        
        questionData.options.forEach(optionText => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.textContent = optionText;
            button.onclick = () => checkAnswer(button, questionData.answer, questionData.explanation, index);
            modalOptions.appendChild(button);
        });

        modalFeedback.classList.add('hidden');
        closeModalBtn.classList.add('hidden');
        questionModal.classList.remove('hidden');
    }

    function checkAnswer(selectedButton, correctAnswer, explanation, questionIndex) {
        const options = modalOptions.querySelectorAll('.option-btn');
        options.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });

        if (selectedButton.textContent === correctAnswer) {
            selectedButton.classList.add('correct');
            feedbackText.textContent = "Jawaban Benar! 🎉";
            modalFeedback.className = 'correct';
        } else {
            selectedButton.classList.add('incorrect');
            feedbackText.textContent = "Jawaban Kurang Tepat.";
            modalFeedback.className = 'incorrect';
        }
        
        feedbackExplanation.textContent = explanation;
        modalFeedback.classList.remove('hidden');
        closeModalBtn.classList.remove('hidden');
        
        if (!answeredState[currentClass].includes(questionIndex)) {
            answeredState[currentClass].push(questionIndex);
        }
    }
    
    // --- FUNGSI closeModal KINI HANYA MENGUPDATE TAMPILAN, TIDAK MENGACAK ULANG ---
    function closeModal() {
        questionModal.classList.add('hidden');
        renderGrid(); // Panggil renderGrid, bukan showQuiz
    }
    
    classButtons.forEach(button => {
        button.addEventListener('click', () => {
            showQuiz(button.dataset.class);
        });
    });

    backButton.addEventListener('click', () => {
        quizScreen.classList.add('hidden');
        classSelectionScreen.classList.remove('hidden');
    });

    questionGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('question-box')) {
            openQuestion(parseInt(e.target.dataset.index));
        }
    });
    
    closeModalBtn.addEventListener('click', closeModal);
});