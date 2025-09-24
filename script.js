document.addEventListener('DOMContentLoaded', () => {

    const quizData = {
        '1': [
            // MATEMATIKA
            { question: "Angka sebelum 15 adalah...", options: ["13", "14", "16", "17"], answer: "14", explanation: "Dalam urutan hitungan, angka yang berada tepat sebelum 15 adalah 14." },
            { question: "Urutkan bilangan berikut dari yang terkecil: 11, 8, 14, 9, 12", options: ["8, 9, 11, 12, 14", "14, 12, 11, 9, 8", "8, 11, 9, 12, 14", "9, 8, 11, 12, 14"], answer: "8, 9, 11, 12, 14", explanation: "Urutan bilangan dari yang nilainya paling kecil ke paling besar adalah 8, 9, 11, 12, 14." },
            { question: "Ibu membeli 5 buah apel. Ayah membeli lagi 4 buah apel. Berapa jumlah apel sekarang?", options: ["1 buah", "8 buah", "9 buah", "10 buah"], answer: "9 buah", explanation: "Ini adalah soal penjumlahan. Jumlah apel adalah 5 + 4 = 9 buah." },
            { question: "Hitunglah: 12 - 5 = ...", options: ["6", "7", "8", "9"], answer: "7", explanation: "Hasil dari pengurangan 12 dengan 5 adalah 7." },
            // BAHASA INDONESIA
            { question: "Huruf setelah huruf 'g' adalah...", options: ["f", "h", "i", "j"], answer: "h", explanation: "Dalam urutan alfabet, setelah huruf 'g' adalah huruf 'h'." },
            { question: "Suku kata 'ma' jika digabung dengan 'kan' menjadi...", options: ["makan", "kama", "naka", "mak"], answer: "makan", explanation: "Penggabungan suku kata 'ma' dan 'kan' membentuk kata 'makan'." },
            { question: "Kata 'sekolah' diawali dengan huruf...", options: ["s", "e", "k", "a"], answer: "s", explanation: "Huruf pertama atau awalan dari kata 'sekolah' adalah 's'." },
            { question: "'Ibu pergi ke pasar'. Ada berapa kata dalam kalimat tersebut?", options: ["3", "4", "5", "6"], answer: "4", explanation: "Kalimat tersebut terdiri dari 4 kata, yaitu 'Ibu', 'pergi', 'ke', dan 'pasar'." },
            // IPAS
            { question: "Kita melihat menggunakan...", options: ["Telinga", "Hidung", "Mata", "Mulut"], answer: "Mata", explanation: "Mata adalah panca indera yang berfungsi untuk melihat objek di sekitar kita." },
            { question: "Alat tubuh yang digunakan untuk mendengar adalah...", options: ["Mata", "Hidung", "Lidah", "Telinga"], answer: "Telinga", explanation: "Telinga adalah panca indera yang berfungsi untuk mendengar suara." },
            { question: "Jari tangan kita berjumlah...", options: ["5", "8", "10", "12"], answer: "10", explanation: "Manusia memiliki 5 jari di setiap tangan, sehingga totalnya adalah 10 jari tangan." },
            { question: "Fungsi dari kaki adalah untuk...", options: ["Memegang", "Mendengar", "Berjalan", "Makan"], answer: "Berjalan", explanation: "Fungsi utama kaki pada manusia adalah untuk berjalan, berlari, dan menopang tubuh." },
//_PASTE KODE INI DI DALAM TANDA [ ] UNTUK KELAS 1_
            { question: "Angka 19 dibaca...", options: ["Sembilan belas", "Satu sembilan", "Sembilan satu", "Banyak"], answer: "Sembilan belas", explanation: "Angka 1 puluhan dan 9 satuan dibaca sebagai 'sembilan belas'." },
            { question: "Lengkapi urutan bilangan ini: 10, 11, ..., 13, 14", options: ["10", "15", "12", "9"], answer: "12", explanation: "Urutan bilangan setelah 11 dan sebelum 13 adalah 12." },
            { question: "Rina memiliki 9 pensil. Diberikan kepada temannya 4 pensil. Berapa sisa pensil Rina?", options: ["13 pensil", "5 pensil", "4 pensil", "9 pensil"], answer: "5 pensil", explanation: "Karena diberikan, jumlahnya berkurang. Sisa pensil adalah 9 - 4 = 5 pensil." },
            { question: "Hitunglah: 6 + 7 = ...", options: ["11", "12", "13", "14"], answer: "13", explanation: "Hasil dari penjumlahan 6 ditambah 7 adalah 13." },
            { question: "Lengkapi huruf yang hilang: b - c - ... - e - f", options: ["a", "d", "g", "h"], answer: "d", explanation: "Urutan alfabet yang benar adalah b, c, d, e, f." },
            { question: "Pisahkan kata 'buku' menjadi suku kata!", options: ["b-u-k-u", "bu-ku", "buk-u", "b-uku"], answer: "bu-ku", explanation: "Kata 'buku' terdiri dari dua suku kata, yaitu 'bu' dan 'ku'." },
            { question: "Sebutkan huruf vokal yang ada pada kata 'meja'!", options: ["m, j", "e, a", "m, e, j, a", "e, j"], answer: "e, a", explanation: "Huruf vokal adalah a, i, u, e, o. Pada kata 'meja', huruf vokalnya adalah 'e' dan 'a'." },
            { question: "Huruf terakhir dari kata 'pensil' adalah...", options: ["p", "e", "s", "l"], answer: "l", explanation: "Huruf yang berada di posisi paling akhir dari kata 'pensil' adalah 'l'." },
            { question: "Rambut tumbuh di bagian tubuh mana?", options: ["Kaki", "Tangan", "Kepala", "Perut"], answer: "Kepala", explanation: "Rambut secara alami tumbuh di kulit kepala." },
            { question: "Agar gigi sehat, kita harus rajin...", options: ["Makan permen", "Menyikat gigi", "Minum soda", "Tidur"], answer: "Menyikat gigi", explanation: "Menyikat gigi secara teratur adalah cara utama untuk menjaga kebersihan dan kesehatan gigi." },
            { question: "Kita mencium bau bunga menggunakan...", options: ["Mata", "Hidung", "Kulit", "Telinga"], answer: "Hidung", explanation: "Hidung adalah panca indera yang berfungsi untuk mencium berbagai macam bau." },
            { question: "Mata kita ada berapa?", options: ["Satu", "Dua", "Tiga", "Empat"], answer: "Dua", explanation: "Manusia normalnya memiliki dua mata untuk melihat." }
        ],
        '2': [
            // MATEMATIKA
            { question: "Nama bilangan dari 245 adalah...", options: ["Dua ratus empat lima", "Dua empat lima", "Dua ratus empat puluh lima", "Dua puluh empat lima"], answer: "Dua ratus empat puluh lima", explanation: "Angka 2 menempati ratusan, 4 puluhan, dan 5 satuan." },
            { question: "Angka 7 pada bilangan 175 menempati nilai tempat...", options: ["Satuan", "Puluhan", "Ratusan", "Ribuan"], answer: "Puluhan", explanation: "Pada bilangan 175, angka 1 adalah ratusan, 7 adalah puluhan (bernilai 70), dan 5 adalah satuan." },
            { question: "Bentuk perkalian dari 6 + 6 + 6 + 6 adalah...", options: ["6 x 4", "4 x 6", "6 + 4", "24"], answer: "4 x 6", explanation: "Penjumlahan berulang angka 6 sebanyak 4 kali dapat ditulis sebagai perkalian 4 x 6." },
            { question: "3 x 8 = ...", options: ["11", "21", "24", "38"], answer: "24", explanation: "Hasil dari perkalian 3 dikali 8 adalah 24." },
            // BAHASA INDONESIA
            { question: "Tanda baca yang digunakan untuk mengakhiri kalimat berita adalah...", options: ["Tanda tanya (?)", "Tanda seru (!)", "Tanda koma (,)", "Tanda titik (.)"], answer: "Tanda titik (.)", explanation: "Setiap kalimat berita atau pernyataan diakhiri dengan tanda titik." },
            { question: "Dongeng yang tokohnya adalah binatang disebut...", options: ["Legenda", "Mitos", "Fabel", "Sage"], answer: "Fabel", explanation: "Fabel adalah dongeng yang tokohnya adalah binatang yang bisa berbicara dan berperilaku seperti manusia." },
            { question: "Tokoh yang memiliki sifat baik dalam cerita disebut tokoh...", options: ["Antagonis", "Figuran", "Tritagonis", "Protagonis"], answer: "Protagonis", explanation: "Protagonis adalah tokoh utama yang biasanya memiliki sifat baik dan menjadi pusat cerita." },
            { question: "Pesan moral yang bisa diambil dari sebuah dongeng disebut...", options: ["Judul", "Tema", "Amanat", "Latar"], answer: "Amanat", explanation: "Amanat adalah pesan atau nasihat yang ingin disampaikan pengarang melalui ceritanya." },
            // IPAS
            { question: "Batu dan kursi termasuk contoh benda...", options: ["Padat", "Cair", "Gas", "Hidup"], answer: "Padat", explanation: "Benda padat memiliki bentuk dan volume yang tetap, seperti batu dan kursi." },
            { question: "Air jika dimasukkan ke dalam botol, bentuknya akan seperti...", options: ["Botol", "Kotak", "Tetap seperti semula", "Bulat"], answer: "Botol", explanation: "Salah satu sifat benda cair adalah bentuknya berubah mengikuti wadahnya." },
            { question: "Proses pertumbuhan pada ayam dimulai dari...", options: ["Anak ayam", "Ayam dewasa", "Telur", "Induk ayam"], answer: "Telur", explanation: "Siklus hidup ayam dimulai dari telur, kemudian menetas menjadi anak ayam, lalu tumbuh menjadi ayam dewasa." },
            { question: "Kupu-kupu berasal dari ... sebelum menjadi kepompong.", options: ["Telur", "Ulat", "Lalat", "Nyamuk"], answer: "Ulat", explanation: "Siklus hidup kupu-kupu adalah: Telur -> Ulat (larva) -> Kepompong (pupa) -> Kupu-kupu dewasa." },
//_PASTE KODE INI DI DALAM TANDA [ ] UNTUK KELAS 2_
            { question: "Hitunglah: 258 - 123 = ...", options: ["125", "135", "381", "371"], answer: "135", explanation: "Hasil dari pengurangan 258 dengan 123 adalah 135." },
            { question: "Urutkan bilangan berikut dari yang terbesar: 321, 123, 213, 312", options: ["123, 213, 312, 321", "321, 312, 213, 123", "321, 123, 213, 312", "123, 321, 312, 213"], answer: "321, 312, 213, 123", explanation: "Urutan dari nilai yang paling besar adalah 321, 312, 213, dan terakhir 123." },
            { question: "Kakak memiliki 189 kelereng. Adik memiliki 125 kelereng. Berapa selisih kelereng mereka?", options: ["314", "64", "74", "100"], answer: "64", explanation: "Selisih adalah hasil pengurangan jumlah yang lebih banyak dengan yang lebih sedikit: 189 - 125 = 64." },
            { question: "Angka 3 pada bilangan 309 menempati nilai tempat...", options: ["Satuan", "Puluhan", "Ratusan", "Ribuan"], answer: "Ratusan", explanation: "Pada bilangan 309, angka 3 adalah ratusan, 0 adalah puluhan, dan 9 adalah satuan." },
            { question: "Kata 'rajin' memiliki arti...", options: ["Malas", "Suka bekerja", "Suka tidur", "Pandai"], answer: "Suka bekerja", explanation: "Rajin berarti giat, tekun, atau suka bekerja." },
            { question: "Setiap pagi, ayam jantan...", options: ["Mengeong", "Menggonggong", "Berkokok", "Mengaum"], answer: "Berkokok", explanation: "Suara khas yang dikeluarkan ayam jantan di pagi hari adalah berkokok." },
            { question: "Tuliskan satu contoh kalimat tanya!", options: ["Ayo bermain!", "Wah, indah sekali!", "Di mana rumahmu?", "Tolong ambilkan buku itu."], answer: "Di mana rumahmu?", explanation: "Kalimat tanya selalu berisi pertanyaan dan diakhiri dengan tanda tanya (?)." },
            { question: "'Ayah membaca koran di teras.' Siapa yang membaca koran?", options: ["Ibu", "Adik", "Ayah", "Teras"], answer: "Ayah", explanation: "Berdasarkan kalimat tersebut, subjek atau pelaku yang melakukan kegiatan membaca koran adalah Ayah." },
            { question: "Tumbuhan memerlukan ... untuk melakukan fotosintesis.", options: ["Oksigen", "Tanah", "Bulan", "Cahaya matahari"], answer: "Cahaya matahari", explanation: "Fotosintesis adalah proses memasak makanan pada tumbuhan yang memerlukan energi dari cahaya matahari." },
            { question: "Sebutkan satu contoh benda cair selain air!", options: ["Batu", "Asap", "Sirup", "Kursi"], answer: "Sirup", explanation: "Sirup, minyak, dan kecap adalah contoh benda cair selain air." },
            { question: "Sirup, kecap, dan minyak goreng adalah contoh benda...", options: ["Padat", "Gas", "Cair", "Hidup"], answer: "Cair", explanation: "Ketiga benda tersebut memiliki sifat benda cair, yaitu bentuknya mengikuti wadah dan volumenya tetap." },
            { question: "Benda gas memiliki sifat mengisi seluruh...", options: ["Wadah", "Permukaan", "Ruangan", "Botol"], answer: "Ruangan", explanation: "Salah satu sifat utama benda gas adalah akan menyebar dan mengisi seluruh ruangan yang ditempatinya." }
        ],
        '3': [
            // MATEMATIKA
            { question: "Hasil dari 521 - 135 adalah...", options: ["386", "396", "486", "496"], answer: "386", explanation: "Hasil dari pengurangan 521 - 135 adalah 386." },
            { question: "2 meter sama dengan ... sentimeter.", options: ["20 cm", "200 cm", "2000 cm", "2 cm"], answer: "200 cm", explanation: "Konversi satuan: 1 meter = 100 sentimeter. Jadi, 2 meter = 2 x 100 = 200 cm." },
            { question: "Ibu membeli 3 kg gula pasir. Berapa gram berat gula pasir yang dibeli ibu?", options: ["30 gram", "300 gram", "3000 gram", "30000 gram"], answer: "3000 gram", explanation: "Konversi satuan: 1 kg = 1000 gram. Jadi, 3 kg = 3 x 1000 = 3000 gram." },
            { question: "Panjang sebuah pensil 15 cm. Panjang sebuah buku 25 cm. Berapa selisih panjang keduanya?", options: ["40 cm", "15 cm", "25 cm", "10 cm"], answer: "10 cm", explanation: "Selisih adalah hasil pengurangan nilai yang lebih besar dengan yang lebih kecil: 25 cm - 15 cm = 10 cm." },
            // BAHASA INDONESIA
            { question: "Kata hubung yang tepat untuk kalimat ini: 'Adi tidak masuk sekolah ... ia sakit.'", options: ["dan", "tetapi", "karena", "atau"], answer: "karena", explanation: "Kata hubung 'karena' digunakan untuk menyatakan alasan atau sebab-akibat." },
            { question: "Karangan yang menceritakan urutan kejadian disebut karangan...", options: ["Deskripsi", "Narasi", "Argumentasi", "Persuasi"], answer: "Narasi", explanation: "Teks narasi adalah jenis teks yang menceritakan suatu peristiwa atau kejadian secara kronologis." },
            { question: "Ide utama yang dibahas dalam sebuah paragraf disebut...", options: ["Kalimat penjelas", "Judul", "Gagasan pokok", "Kesimpulan"], answer: "Gagasan pokok", explanation: "Gagasan pokok atau ide pokok adalah inti dari informasi yang menjadi dasar pengembangan sebuah paragraf." },
            { question: "Kata 'dan' berfungsi untuk menghubungkan dua hal yang...", options: ["berlawanan", "setara", "menjadi pilihan", "menjadi sebab"], answer: "setara", explanation: "Kata hubung 'dan' digunakan untuk menggabungkan dua unsur yang setara atau sejajar." },
            // IPAS
            { question: "Perubahan wujud dari cair menjadi padat disebut...", options: ["Mencair", "Menguap", "Membeku", "Menyublim"], answer: "Membeku", explanation: "Membeku adalah proses perubahan wujud benda dari cair menjadi padat, contohnya air menjadi es." },
            { question: "Sumber energi terbesar di bumi adalah...", options: ["Baterai", "Listrik", "Matahari", "Minyak bumi"], answer: "Matahari", explanation: "Matahari adalah sumber energi panas dan cahaya terbesar yang menjadi asal dari hampir semua energi di Bumi." },
            { question: "Saat kita menyalakan kipas angin, terjadi perubahan energi dari ... menjadi energi gerak.", options: ["listrik", "panas", "kimia", "cahaya"], answer: "listrik", explanation: "Kipas angin adalah alat elektronik yang mengubah energi listrik menjadi energi gerak untuk memutar baling-baling." },
            { question: "Tahapan setelah telur dalam siklus hidup kupu-kupu adalah...", options: ["Kupu-kupu", "Kepompong", "Ulat", "Kumbang"], answer: "Ulat", explanation: "Siklus hidup kupu-kupu adalah Telur -> Ulat -> Kepompong -> Kupu-kupu." },
//_PASTE KODE INI DI DALAM TANDA [ ] UNTUK KELAS 3_
            { question: "15 x 7 = ...", options: ["95", "105", "115", "125"], answer: "105", explanation: "Hasil dari perkalian 15 dikali 7 adalah 105." },
            { question: "Seorang pedagang memiliki 240 telur. Telur itu dimasukkan ke dalam 8 kantong plastik dengan isi sama banyak. Berapa isi setiap kantong?", options: ["20 telur", "30 telur", "40 telur", "50 telur"], answer: "30 telur", explanation: "Ini adalah soal pembagian: 240 telur dibagi 8 kantong = 30 telur per kantong." },
            { question: "4500 gram sama dengan ... kg.", options: ["450 kg", "45 kg", "4,5 kg", "0,45 kg"], answer: "4,5 kg", explanation: "Konversi satuan: 1000 gram = 1 kg. Maka, 4500 gram = 4500 / 1000 = 4,5 kg." },
            { question: "Hitunglah: (50 x 2) + 125 = ...", options: ["177", "200", "225", "275"], answer: "225", explanation: "Kerjakan operasi dalam kurung terlebih dahulu: (100) + 125 = 225." },
            { question: "Sebutkan satu contoh kata hubung!", options: ["Makan", "Sekolah", "Dan", "Cantik"], answer: "Dan", explanation: "'Dan', 'atau', 'tetapi', 'karena' adalah beberapa contoh kata hubung (konjungsi)." },
            { question: "Apa langkah pertama yang harus dilakukan sebelum menulis sebuah karangan?", options: ["Menulis isi", "Menentukan judul", "Membuat kesimpulan", "Menentukan tema"], answer: "Menentukan tema", explanation: "Langkah paling awal dalam mengarang adalah menentukan tema atau topik utama yang akan dibahas." },
            { question: "'Meskipun hujan, Rina tetap berangkat ke sekolah.' Kata hubung dalam kalimat tersebut adalah...", options: ["hujan", "tetap", "berangkat", "Meskipun"], answer: "Meskipun", explanation: "Kata 'meskipun' adalah konjungsi (kata hubung) yang menyatakan pertentangan." },
            { question: "Jelaskan secara singkat apa yang dimaksud dengan teks laporan!", options: ["Teks berisi khayalan", "Teks berisi langkah-langkah", "Teks berisi hasil pengamatan", "Teks berisi ajakan"], answer: "Teks berisi hasil pengamatan", explanation: "Teks laporan menyajikan informasi mengenai suatu hal secara apa adanya berdasarkan hasil pengamatan atau penelitian." },
            { question: "Contoh proses mencair adalah...", options: ["Air menjadi es", "Es menjadi air", "Air menjadi uap", "Kapur barus menghilang"], answer: "Es menjadi air", explanation: "Mencair adalah perubahan wujud dari padat menjadi cair, contohnya es yang dipanaskan menjadi air." },
            { question: "Sebutkan dua contoh sumber energi alternatif!", options: ["Bensin dan solar", "Angin dan air", "Batu bara dan minyak tanah", "Listrik dan baterai"], answer: "Angin dan air", explanation: "Energi alternatif adalah energi yang berasal dari sumber terbarukan, seperti angin, air, dan matahari." },
            { question: "Proses perubahan wujud dari gas menjadi cair disebut...", options: ["Menguap", "Membeku", "Menyublim", "Mengembun"], answer: "Mengembun", explanation: "Mengembun adalah kebalikan dari menguap, contohnya titik-titik air di bagian luar gelas berisi es." },
            { question: "Apa fungsi utama panel surya?", options: ["Menghasilkan angin", "Menyimpan air hujan", "Mengubah energi cahaya matahari menjadi listrik", "Mendinginkan ruangan"], answer: "Mengubah energi cahaya matahari menjadi listrik", explanation: "Panel surya bekerja dengan menangkap energi foton dari cahaya matahari dan mengubahnya menjadi energi listrik." }
        ],
        '4': [
            // MATEMATIKA
            { question: "Bentuk paling sederhana dari pecahan 12/18 adalah...", options: ["6/9", "4/6", "2/3", "1/2"], answer: "2/3", explanation: "Pecahan disederhanakan dengan membagi pembilang dan penyebut dengan FPB-nya, yaitu 6. (12 ÷ 6) / (18 ÷ 6) = 2/3." },
            { question: "Kelipatan persekutuan terkecil (KPK) dari 8 dan 12 adalah...", options: ["16", "24", "36", "48"], answer: "24", explanation: "Kelipatan 8: {8, 16, 24,...}. Kelipatan 12: {12, 24,...}. Kelipatan terkecil yang sama adalah 24." },
            { question: "Faktor persekutuan terbesar (FPB) dari 18 dan 24 adalah...", options: ["4", "6", "8", "12"], answer: "6", explanation: "Faktor 18: {1,2,3,6,9,18}. Faktor 24: {1,2,3,4,6,8,12,24}. Faktor terbesar yang sama adalah 6." },
            { question: "Urutkan pecahan berikut dari yang terbesar: 1/2, 3/4, 1/3", options: ["1/2, 3/4, 1/3", "3/4, 1/2, 1/3", "1/3, 1/2, 3/4", "3/4, 1/3, 1/2"], answer: "3/4, 1/2, 1/3", explanation: "Jika diubah ke desimal: 3/4 = 0.75, 1/2 = 0.5, 1/3 = 0.33. Jadi urutan terbesar adalah 3/4, 1/2, 1/3." },
            // BAHASA INDONESIA
            { question: "Antonim (lawan kata) dari kata 'menjaga' adalah...", options: ["Merawat", "Memelihara", "Melindungi", "Merusak"], answer: "Merusak", explanation: "Antonim atau lawan kata dari 'menjaga' adalah 'merusak'." },
            { question: "Sinonim (persamaan kata) dari kata 'manfaat' adalah...", options: ["Kerugian", "Kegunaan", "Kesulitan", "Kekuatan"], answer: "Kegunaan", explanation: "Sinonim atau persamaan kata dari 'manfaat' adalah 'kegunaan' atau 'faedah'." },
            { question: "Gagasan yang menjelaskan gagasan utama disebut...", options: ["Gagasan pokok", "Gagasan utama", "Gagasan pendukung", "Gagasan baru"], answer: "Gagasan pendukung", explanation: "Gagasan pendukung atau gagasan penjelas berfungsi untuk menguraikan dan memperkuat gagasan utama." },
            { question: "Menuliskan kembali isi bacaan dengan bahasa sendiri secara singkat disebut...", options: ["Membaca", "Meringkas", "Menyalin", "Mengarang"], answer: "Meringkas", explanation: "Meringkas adalah kegiatan menyajikan kembali isi bacaan secara singkat dengan bahasa sendiri." },
            // IPAS
            { question: "Bunyi tidak dapat merambat di ruang...", options: ["Padat", "Cair", "Gas", "Hampa"], answer: "Hampa", explanation: "Bunyi memerlukan medium (partikel) untuk merambat. Ruang hampa tidak memiliki partikel." },
            { question: "Bagian tumbuhan yang berfungsi untuk menyerap air dan mineral dari dalam tanah adalah...", options: ["Daun", "Batang", "Bunga", "Akar"], answer: "Akar", explanation: "Fungsi utama akar adalah menancapkan tumbuhan ke tanah serta menyerap air dan mineral dari dalam tanah." },
            { question: "Proses memasak makanan pada tumbuhan yang terjadi di daun disebut...", options: ["Respirasi", "Fotosintesis", "Evaporasi", "Transpirasi"], answer: "Fotosintesis", explanation: "Fotosintesis adalah proses di mana tumbuhan hijau menggunakan sinar matahari untuk mengubah air dan karbon dioksida menjadi makanan." },
            { question: "Gaya yang menyebabkan buah jatuh dari pohon ke bawah adalah gaya...", options: ["Gesek", "Magnet", "Pegas", "Gravitasi"], answer: "Gravitasi", explanation: "Gaya gravitasi bumi adalah gaya tarik yang menyebabkan semua benda jatuh ke bawah menuju pusat bumi." },
//_PASTE KODE INI DI DALAM TANDA [ ] UNTUK KELAS 4_
            { question: "Pecahan senilai dari 2/3 adalah...", options: ["3/4", "4/6", "5/7", "1/2"], answer: "4/6", explanation: "Pecahan senilai didapat dengan mengalikan pembilang dan penyebut dengan angka yang sama. 2/3 x 2/2 = 4/6." },
            { question: "Faktor dari bilangan 24 adalah...", options: ["1, 2, 3, 4, 6, 8, 12, 24", "2, 4, 6, 8, 12, 24", "1, 2, 3, 4, 5, 6, 24", "24, 12, 8, 6, 4, 2"], answer: "1, 2, 3, 4, 6, 8, 12, 24", explanation: "Faktor adalah semua bilangan yang dapat membagi habis bilangan tersebut." },
            { question: "Ibu memotong kue menjadi 8 bagian sama besar. Adi memakan 3 bagian. Berapa bagian kue yang dimakan Adi?", options: ["8/3", "3/8", "5/8", "1/8"], answer: "3/8", explanation: "Adi memakan 3 bagian dari total 8 bagian, sehingga dapat ditulis dalam bentuk pecahan 3/8." },
            { question: "Hitunglah: 4/9 + 2/9 = ...", options: ["6/18", "2/9", "6/9", "8/81"], answer: "6/9", explanation: "Jika penyebut sudah sama, cukup jumlahkan pembilangnya: 4 + 2 = 6. Hasilnya adalah 6/9." },
            { question: "Kalimat utama paragraf tentang manfaat tumbuhan terletak di...", options: ["Awal paragraf", "Tengah paragraf", "Akhir paragraf", "Setiap kalimat"], answer: "Awal paragraf", explanation: "Kalimat utama 'Tumbuhan sangat bermanfaat bagi kehidupan manusia' berada di awal paragraf, lalu dijelaskan oleh kalimat berikutnya." },
            { question: "Tujuan dibuatnya peta pikiran adalah untuk...", options: ["Memperpanjang tulisan", "Memudahkan pemahaman dan penataan informasi", "Membuat cerita baru", "Menghias buku catatan"], answer: "Memudahkan pemahaman dan penataan informasi", explanation: "Peta pikiran membantu mengorganisir informasi secara visual sehingga lebih mudah dipahami dan diingat." },
            { question: "'Keragaman budaya Indonesia menjadi daya tarik wisatawan.' Kalimat tanya yang tepat adalah...", options: ["Di mana keragaman budaya Indonesia?", "Kapan keragaman itu muncul?", "Siapa yang memiliki keragaman budaya?", "Mengapa keragaman budaya Indonesia menarik wisatawan?"], answer: "Mengapa keragaman budaya Indonesia menarik wisatawan?", explanation: "Jawaban 'menjadi daya tarik' menjelaskan alasan (mengapa)." },
            { question: "Informasi penting dalam suatu teks biasanya menjawab pertanyaan apa, di mana, kapan, siapa, mengapa, dan...", options: ["berapa", "bagaimana", "akankah", "bolehkah"], answer: "bagaimana", explanation: "Unsur informasi lengkap dikenal dengan 5W + 1H (What, Where, When, Who, Why + How/Bagaimana)." },
            { question: "Pemantulan bunyi yang terdengar setelah bunyi asli disebut...", options: ["Gaung", "Nada", "Desah", "Suara"], answer: "Gaung", explanation: "Gaung atau gema adalah bunyi pantul yang terdengar beberapa saat setelah bunyi asli." },
            { question: "Contoh peristiwa yang membuktikan cahaya dapat dipantulkan adalah...", options: ["Pelangi", "Dasar kolam terlihat dangkal", "Bayangan tubuh", "Kita bisa bercermin"], answer: "Kita bisa bercermin", explanation: "Cermin memantulkan cahaya dari objek ke mata kita, sehingga kita bisa melihat bayangan." },
            { question: "Bagian tumbuhan yang berfungsi sebagai alat perkembangbiakan adalah...", options: ["Akar", "Daun", "Batang", "Bunga"], answer: "Bunga", explanation: "Bunga memiliki putik dan benang sari yang merupakan organ reproduksi pada tumbuhan." },
            { question: "Aktivitas mendorong meja menunjukkan bahwa gaya dapat mengubah ... benda.", options: ["Warna", "Wujud", "Posisi", "Ukuran"], answer: "Posisi", explanation: "Gaya dorong menyebabkan meja yang semula diam menjadi bergerak, artinya posisinya berubah." }
        ],
        '5': [
            // MATEMATIKA
            { question: "Hasil dari 3/4 + 1/5 adalah...", options: ["4/9", "19/20", "4/20", "15/20"], answer: "19/20", explanation: "Samakan penyebutnya menjadi 20. (15/20) + (4/20) = 19/20." },
            { question: "Hasil dari 2/5 × 3/4 adalah...", options: ["5/9", "8/15", "6/20", "5/20"], answer: "6/20", explanation: "Perkalian pecahan dilakukan dengan mengalikan pembilang dengan pembilang dan penyebut dengan penyebut. (2×3)/(5×4) = 6/20." },
            { question: "Ayah mengendarai mobil dengan kecepatan 60 km/jam. Jika ayah berkendara selama 2 jam, jarak yang ditempuh adalah...", options: ["30 km", "62 km", "120 km", "260 km"], answer: "120 km", explanation: "Rumus Jarak = Kecepatan × Waktu. Maka, Jarak = 60 km/jam × 2 jam = 120 km." },
            { question: "Sebuah keran air dapat mengisi bak bervolume 100 liter dalam waktu 20 menit. Debit air keran tersebut adalah...", options: ["5 liter/menit", "20 liter/menit", "80 liter/menit", "2000 liter/menit"], answer: "5 liter/menit", explanation: "Rumus Debit = Volume / Waktu. Maka, Debit = 100 liter / 20 menit = 5 liter/menit." },
            // BAHASA INDONESIA
            { question: "Kalimat yang bertujuan untuk mengajak atau membujuk pembaca disebut kalimat...", options: ["Deskriptif", "Naratif", "Tanya", "Persuasif"], answer: "Persuasif", explanation: "Kalimat persuasif berisi ajakan atau bujukan untuk meyakinkan pembaca." },
            { question: "Bahasa yang digunakan dalam iklan sebaiknya...", options: ["Rumit dan panjang", "Singkat, padat, dan menarik", "Baku dan formal", "Menggunakan istilah ilmiah"], answer: "Singkat, padat, dan menarik", explanation: "Bahasa iklan harus mudah dipahami dan menarik perhatian agar pesan yang disampaikan efektif." },
            { question: "Kapan Perang Diponegoro terjadi?", options: ["1800-1805", "1825-1830", "1850-1855", "1900-1905"], answer: "1825-1830", explanation: "Berdasarkan teks, Perang Diponegoro adalah perang besar yang terjadi di Jawa dari tahun 1825 hingga 1830." },
            { question: "Tokoh utama dalam teks sejarah tentang Perang Diponegoro adalah...", options: ["Pasukan Belanda", "Pangeran Diponegoro", "Rakyat Jawa", "Leluhur Pangeran"], answer: "Pangeran Diponegoro", explanation: "Teks tersebut berpusat pada perjuangan yang dipimpin oleh Pangeran Diponegoro." },
            // IPAS
            { question: "Organ pernapasan utama pada manusia adalah...", options: ["Jantung", "Hidung", "Paru-paru", "Insang"], answer: "Paru-paru", explanation: "Paru-paru adalah organ utama dalam sistem pernapasan manusia tempat terjadinya pertukaran oksigen dan karbon dioksida." },
            { question: "Organ tubuh yang berfungsi memompa darah ke seluruh tubuh adalah...", options: ["Paru-paru", "Ginjal", "Hati", "Jantung"], answer: "Jantung", explanation: "Jantung adalah organ vital dalam sistem peredaran darah yang bertugas memompa darah." },
            { question: "Dalam sebuah rantai makanan, tumbuhan berkedudukan sebagai...", options: ["Konsumen", "Produsen", "Pengurai", "Predator"], answer: "Produsen", explanation: "Tumbuhan dapat membuat makanannya sendiri (fotosintesis), sehingga berperan sebagai produsen." },
            { question: "Hubungan timbal balik antara makhluk hidup dengan lingkungannya disebut...", options: ["Simbiosis", "Rantai makanan", "Ekosistem", "Komunitas"], answer: "Ekosistem", explanation: "Ekosistem adalah sistem ekologi yang terbentuk oleh hubungan timbal balik antara makhluk hidup dengan lingkungannya." },
//_PASTE KODE INI DI DALAM TANDA [ ] UNTUK KELAS 5_
            { question: "Hasil dari 2 1/2 - 3/4 adalah...", options: ["1 3/4", "1 1/4", "2 1/4", "1 1/2"], answer: "1 3/4", explanation: "Ubah menjadi pecahan biasa: 5/2 - 3/4. Samakan penyebut: 10/4 - 3/4 = 7/4 atau 1 3/4." },
            { question: "Hasil dari 5/6 : 1/3 adalah...", options: ["5/18", "1/6", "2 1/2", "3/5"], answer: "2 1/2", explanation: "Pembagian pecahan sama dengan perkalian dengan kebalikannya: 5/6 x 3/1 = 15/6 = 2 3/6 = 2 1/2." },
            { question: "Ibu memiliki persediaan tepung 3 1/2 kg. Ibu menggunakan 1 1/4 kg. Sisa tepung ibu adalah...", options: ["2 1/4 kg", "2 3/4 kg", "4 3/4 kg", "1 1/2 kg"], answer: "2 1/4 kg", explanation: "3 1/2 - 1 1/4 = 7/2 - 5/4 = 14/4 - 5/4 = 9/4 = 2 1/4 kg." },
            { question: "Paman membeli 5 kg jeruk. 2/5 bagian diberikan kepada tetangga. Berapa kg jeruk yang diberikan?", options: ["1 kg", "2 kg", "3 kg", "2.5 kg"], answer: "2 kg", explanation: "Jeruk yang diberikan = 2/5 dari 5 kg = (2/5) x 5 = 2 kg." },
            { question: "Siapa yang menjadi lawan Pangeran Diponegoro dalam perang tersebut?", options: ["Pasukan Inggris", "Pasukan Jepang", "Pasukan kolonial Belanda", "Kerajaan lain"], answer: "Pasukan kolonial Belanda", explanation: "Berdasarkan teks, Perang Diponegoro adalah perang melawan pasukan kolonial Belanda." },
            { question: "Kata tanya yang digunakan untuk menanyakan sebab suatu peristiwa adalah...", options: ["Apa", "Kapan", "Siapa", "Mengapa"], answer: "Mengapa", explanation: "Kata tanya 'mengapa' digunakan untuk menanyakan alasan atau sebab terjadinya sesuatu." },
            { question: "Merangkai pokok-pokok informasi menjadi sebuah tulisan singkat adalah kegiatan...", options: ["Mengarang", "Membaca", "Meringkas", "Menyunting"], answer: "Meringkas", explanation: "Meringkas adalah kegiatan menyajikan kembali informasi penting dari sebuah teks secara singkat." },
            { question: "Tujuan dari sebuah iklan komersial adalah...", options: ["Memberi informasi sosial", "Menawarkan produk atau jasa", "Mendidik masyarakat", "Menghibur pembaca"], answer: "Menawarkan produk atau jasa", explanation: "Iklan komersial dibuat dengan tujuan utama untuk mempromosikan dan menjual suatu produk atau jasa." },
            { question: "Pembuluh darah yang membawa darah kaya oksigen dari jantung ke seluruh tubuh adalah pembuluh...", options: ["Vena", "Arteri", "Kapiler", "Nadi"], answer: "Arteri", explanation: "Arteri (pembuluh nadi) berfungsi membawa darah bersih yang kaya oksigen dari jantung, kecuali arteri pulmonalis." },
            { question: "Contoh simbiosis mutualisme adalah...", options: ["Benalu dan pohon mangga", "Ikan hiu dan ikan remora", "Kupu-kupu dan bunga", "Tali putri dan inangnya"], answer: "Kupu-kupu dan bunga", explanation: "Mutualisme adalah hubungan yang saling menguntungkan. Kupu-kupu mendapat nektar, bunga dibantu penyerbukannya." },
            { question: "Penyakit yang disebabkan oleh penyempitan saluran pernapasan disebut...", options: ["Anemia", "Asma", "TBC", "Hipertensi"], answer: "Asma", explanation: "Asma adalah penyakit kronis pada saluran pernapasan yang ditandai dengan peradangan dan penyempitan saluran napas." },
            { question: "Kumpulan dari beberapa rantai makanan dalam sebuah ekosistem disebut...", options: ["Jaring-jaring makanan", "Simbiosis", "Komunitas", "Populasi"], answer: "Jaring-jaring makanan", explanation: "Jaring-jaring makanan adalah gabungan dari rantai-rantai makanan yang saling berhubungan dan tumpang tindih dalam suatu ekosistem." }
        ],
        '6': [
            // MATEMATIKA
            { question: "Hasil dari -15 + 8 adalah...", options: ["-23", "-7", "7", "23"], answer: "-7", explanation: "Memiliki utang 15 dan membayar 8, sisa utangnya adalah 7 (-7)." },
            { question: "Hasil dari -7 - (-10) adalah...", options: ["-17", "-3", "3", "17"], answer: "3", explanation: "Mengurangi dengan bilangan negatif sama dengan menjumlahkan: -7 + 10 = 3." },
            { question: "Hasil dari 25 + (50 : 2) - 5 x 3 adalah...", options: ["35", "45", "60", "90"], answer: "35", explanation: "Kerjakan pembagian dan perkalian dulu: 25 + 25 - 15. Hasilnya adalah 35." },
            { question: "Sebuah lingkaran memiliki jari-jari 7 cm. Keliling lingkaran tersebut adalah... (π = 22/7)", options: ["22 cm", "44 cm", "154 cm", "49 cm"], answer: "44 cm", explanation: "Rumus keliling lingkaran adalah K = 2 × π × r. Maka, K = 2 × (22/7) × 7 cm = 44 cm." },
            // BAHASA INDONESIA
            { question: "Tujuan utama dari pidato persuasif adalah untuk...", options: ["Memberi informasi", "Menghibur pendengar", "Mengajak atau membujuk", "Menceritakan pengalaman"], answer: "Mengajak atau membujuk", explanation: "Pidato persuasif dirancang untuk meyakinkan dan memengaruhi audiens agar setuju dengan gagasan pembicara." },
            { question: "Orang yang ahli berpidato disebut...", options: ["Narator", "Proklamator", "Orator", "Aktor"], answer: "Orator", explanation: "Orator adalah sebutan untuk seseorang yang memiliki keahlian dalam berpidato di depan umum." },
            { question: "Informasi yang disajikan dalam sebuah laporan harus berdasarkan...", options: ["Opini penulis", "Imajinasi", "Kabar burung", "Fakta"], answer: "Fakta", explanation: "Sebuah laporan harus objektif dan menyajikan informasi sesuai dengan data atau fakta yang ada." },
            { question: "Bagian penutup dalam sebuah pidato biasanya berisi...", options: ["Pembukaan", "Salam pembuka", "Isi pidato", "Kesimpulan dan permohonan maaf"], answer: "Kesimpulan dan permohonan maaf", explanation: "Bagian penutup pidato umumnya berisi rangkuman, kesimpulan, harapan, serta permohonan maaf dan salam penutup." },
            // IPAS
            { question: "Cicak memutuskan ekornya untuk melindungi diri dari musuh. Kemampuan ini disebut...", options: ["Mimikri", "Hibernasi", "Autotomi", "Ekolokasi"], answer: "Autotomi", explanation: "Autotomi adalah perilaku hewan memutuskan bagian tubuhnya untuk melarikan diri dari pemangsa." },
            { question: "Perubahan fisik yang terjadi pada anak laki-laki saat masa pubertas adalah...", options: ["Pinggul melebar", "Mengalami menstruasi", "Tumbuh jakun", "Suara melengking"], answer: "Tumbuh jakun", explanation: "Tumbuh jakun dan suara menjadi lebih berat adalah ciri-ciri pubertas primer pada anak laki-laki." },
            { question: "Hewan yang berkembang biak dengan cara bertelur disebut...", options: ["Vivipar", "Ovipar", "Ovovivipar", "Fragmentasi"], answer: "Ovipar", explanation: "Ovipar berasal dari kata 'ovum' yang berarti telur. Contoh hewan ovipar adalah ayam dan burung." },
            { question: "Tujuan utama makhluk hidup beradaptasi dengan lingkungannya adalah untuk...", options: ["Mencari teman", "Berpindah tempat", "Bertahan hidup", "Mengubah lingkungan"], answer: "Bertahan hidup", explanation: "Adaptasi adalah cara makhluk hidup menyesuaikan diri agar dapat bertahan hidup, mencari makan, dan berkembang biak." },
//_PASTE KODE INI DI DALAM TANDA [ ] UNTUK KELAS 6_
            { question: "Suhu udara di puncak gunung pagi hari -4°C. Siang hari, suhunya naik 10°C. Suhu udara siang hari adalah...", options: ["-14°C", "-6°C", "6°C", "14°C"], answer: "6°C", explanation: "Suhu awal -4°C, naik 10°C artinya ditambah 10. -4 + 10 = 6°C." },
            { question: "Hasil dari 12 x (-4) + 100 adalah...", options: ["-48", "52", "148", "68"], answer: "52", explanation: "Kerjakan perkalian terlebih dahulu: 12 x (-4) = -48. Kemudian -48 + 100 = 52." },
            { question: "Jari-jari sebuah lingkaran adalah setengah dari...", options: ["Keliling", "Luas", "Diameter", "Busur"], answer: "Diameter", explanation: "Diameter adalah garis tengah lingkaran, dan panjangnya adalah dua kali panjang jari-jari." },
            { question: "Hitunglah: (120 - 20) : 5 + 8 = ...", options: ["28", "20", "30", "15"], answer: "28", explanation: "Kerjakan dalam kurung: 100 : 5 + 8. Kerjakan pembagian: 20 + 8 = 28." },
            { question: "Apa masalah utama yang dibahas dalam teks tentang sampah plastik?", options: ["Cara membuat plastik", "Daur ulang botol", "Sampah plastik sebagai masalah lingkungan", "Jenis-jenis plastik"], answer: "Sampah plastik sebagai masalah lingkungan", explanation: "Teks tersebut secara jelas membahas sampah plastik sebagai masalah serius bagi lingkungan." },
            { question: "Menurut teks, apa saja yang termasuk dalam prinsip 3R?", options: ["Reduce, Reuse, Recycle", "Read, Write, Remember", "Right, Rotate, Roll", "Run, Rest, Repeat"], answer: "Reduce, Reuse, Recycle", explanation: "Teks tersebut menyebutkan prinsip 3R adalah Reduce (mengurangi), Reuse (menggunakan kembali), dan Recycle (mendaur ulang)." },
            { question: "Bagian pidato yang berisi ucapan salam, sapaan, dan puji syukur disebut bagian...", options: ["Isi", "Penutup", "Pembukaan", "Judul"], answer: "Pembukaan", explanation: "Pembukaan pidato berfungsi untuk menyapa audiens dan memberikan pengantar sebelum masuk ke isi." },
            { question: "Kata-kata seperti 'ayo', 'marilah', 'hendaknya' sering digunakan dalam pidato yang bertujuan untuk...", options: ["Melarang", "Mengajak", "Menjelaskan", "Bercerita"], answer: "Mengajak", explanation: "Kata-kata tersebut adalah kata ajakan yang merupakan ciri khas dari pidato persuasif." },
            { question: "Perkembangbiakan tumbuhan dengan cara menanam batangnya disebut...", options: ["Cangkok", "Okulasi", "Stek", "Merunduk"], answer: "Stek", explanation: "Stek adalah metode perbanyakan tanaman dengan menggunakan potongan tubuh tanaman (batang, akar, atau daun)." },
            { question: "Bebek memiliki kaki berselaput yang berfungsi untuk membantunya...", options: ["Mencengkeram dahan", "Berlari kencang", "Berenang di air", "Menggali tanah"], answer: "Berenang di air", explanation: "Kaki berselaput pada bebek merupakan bentuk adaptasi untuk memudahkannya bergerak (berenang) di air." },
            { question: "Mimpi basah adalah salah satu ciri pubertas yang dialami oleh...", options: ["Anak perempuan", "Anak laki-laki", "Bayi", "Orang tua"], answer: "Anak laki-laki", explanation: "Mimpi basah adalah tanda bahwa sistem reproduksi pada anak laki-laki sudah mulai berfungsi." },
            { question: "Unta menyimpan cadangan makanan di punuknya dalam bentuk...", options: ["Air", "Otot", "Tulang", "Lemak"], answer: "Lemak", explanation: "Punuk unta berisi cadangan lemak yang dapat diubah menjadi air dan energi saat dibutuhkan." }
        ],
        '7': [
            // MATEMATIKA
            { question: "Hasil dari (−18) + 30 − (−12) adalah...", options: ["0", "24", "36", "-6"], answer: "24", explanation: "(-18 + 30) = 12. Kemudian 12 - (-12) sama dengan 12 + 12 = 24." },
            { question: "Bentuk sederhana dari ekspresi aljabar 5x − 3y + 7x + 5y adalah...", options: ["12x + 2y", "12x - 2y", "2x + 8y", "-2x - 8y"], answer: "12x + 2y", explanation: "Kelompokkan suku sejenis: (5x + 7x) + (-3y + 5y) = 12x + 2y." },
            { question: "Jika A={huruf vokal} dan B={a,b,c,d,e}, maka A∩B adalah...", options: ["{a, e, i, o, u}", "{a, b, c, d, e}", "{a, e}", "{b, c, d}"], answer: "{a, e}", explanation: "Himpunan A = {a,e,i,o,u}. Irisan (∩) adalah anggota yang ada di kedua himpunan, yaitu {a, e}." },
            { question: "KPK dari 12a²b dan 18ab³ adalah...", options: ["36a²b³", "6ab", "36a³b³", "6a²b³"], answer: "36a²b³", explanation: "KPK dari 12 dan 18 adalah 36. Untuk variabel, ambil pangkat tertinggi dari masing-masing, yaitu a² dan b³. Jadi KPK-nya 36a²b³." },
            // BAHASA INDONESIA
            { question: "Tujuan dari teks prosedur adalah...", options: ["Menceritakan pengalaman", "Menggambarkan objek", "Memberikan petunjuk atau langkah-langkah", "Mengkritik"], answer: "Memberikan petunjuk atau langkah-langkah", explanation: "Teks prosedur dibuat untuk memandu pembaca dalam melakukan sesuatu secara urut." },
            { question: "Teks yang bertujuan menggambarkan suatu objek sehingga pembaca seolah-olah melihatnya langsung disebut teks...", options: ["Narasi", "Prosedur", "Deskripsi", "Fantasi"], answer: "Deskripsi", explanation: "Teks deskripsi berfokus pada penggambaran detail suatu objek menggunakan panca indera." },
            { question: "Ciri utama yang membedakan teks cerita fantasi dengan teks narasi lainnya adalah...", options: ["Adanya tokoh dan alur", "Adanya unsur keajaiban atau fiksi", "Menggunakan bahasa baku", "Berdasarkan kisah nyata"], answer: "Adanya unsur keajaiban atau fiksi", explanation: "Cerita fantasi memiliki unsur magis, supranatural, atau futuristik yang tidak ada dalam realitas." },
            { question: "Tokoh yang menjadi lawan dari tokoh utama (protagonis) dalam sebuah cerita disebut...", options: ["Tritagonis", "Figuran", "Antagonis", "Narator"], answer: "Antagonis", explanation: "Antagonis adalah tokoh yang memiliki konflik dengan dan menjadi penentang dari tokoh protagonis." },
            // IPA
            { question: "Kelompok hewan yang tidak memiliki tulang belakang disebut...", options: ["Vertebrata", "Avertebrata", "Mamalia", "Reptilia"], answer: "Avertebrata", explanation: "Avertebrata (Invertebrata) adalah klasifikasi untuk hewan tanpa tulang belakang." },
            { question: "Perpindahan panas melalui zat perantara tanpa disertai perpindahan partikel zat tersebut disebut...", options: ["Konduksi", "Konveksi", "Radiasi", "Isolasi"], answer: "Konduksi", explanation: "Konduksi adalah perpindahan panas melalui getaran antar partikel, biasanya pada benda padat." },
            { question: "Besaran pokok yang memiliki satuan internasional (SI) Ampere adalah...", options: ["Suhu", "Panjang", "Massa", "Kuat arus listrik"], answer: "Kuat arus listrik", explanation: "Dalam 7 besaran pokok SI, Ampere (A) adalah satuan untuk kuat arus listrik." },
            { question: "Perubahan suhu dari 25°C ke dalam skala Kelvin (K) adalah...", options: ["25 K", "273 K", "298 K", "-248 K"], answer: "298 K", explanation: "Rumus konversi Celcius ke Kelvin adalah K = °C + 273. Jadi, K = 25 + 273 = 298 K." },
//_PASTE KODE INI DI DALAM TANDA [ ] UNTUK KELAS 7_
            { question: "Urutkan pecahan berikut dari yang terkecil: 3/4, 70%, 0.8, 5/7", options: ["3/4, 70%, 0.8, 5/7", "70%, 5/7, 3/4, 0.8", "5/7, 70%, 3/4, 0.8", "0.8, 3/4, 5/7, 70%"], answer: "70%, 5/7, 3/4, 0.8", explanation: "Ubah semua ke desimal: 3/4=0.75; 70%=0.7; 0.8; 5/7≈0.71. Urutan terkecil: 0.7, 0.71, 0.75, 0.8." },
            { question: "Ibu membeli 2 1/2 kg gula dan 3 1/4 kg tepung. Total berat belanjaan ibu adalah...", options: ["5 1/4 kg", "5 2/6 kg", "5 3/4 kg", "6 kg"], answer: "5 3/4 kg", explanation: "2 1/2 + 3 1/4 = 2 2/4 + 3 1/4 = 5 3/4 kg." },
            { question: "Dari 40 siswa, 25 suka pop, 20 suka rock, 10 suka keduanya. Berapa siswa yang tidak suka keduanya?", options: ["5", "10", "15", "20"], answer: "5", explanation: "Total = (Suka Pop + Suka Rock - Suka Keduanya) + Tidak Suka Keduanya. 40 = (25+20-10) + x. 40 = 35 + x. Jadi x = 5." },
            { question: "Jika x=4 dan y=−2, maka nilai dari 3x − 5y adalah...", options: ["2", "12", "22", "32"], answer: "22", explanation: "Substitusi nilai: 3(4) - 5(-2) = 12 - (-10) = 12 + 10 = 22." },
            { question: "Latar tempat, waktu, dan suasana dalam sebuah cerita disebut...", options: ["Alur", "Penokohan", "Sudut pandang", "Setting"], answer: "Setting", explanation: "Setting atau latar adalah unsur intrinsik cerita yang meliputi tempat, waktu, dan suasana terjadinya peristiwa." },
            { question: "'Tambahkan garam secukupnya, lalu aduk hingga rata.' Kalimat tersebut merupakan contoh kalimat...", options: ["Perintah", "Tanya", "Berita", "Seru"], answer: "Perintah", explanation: "Kalimat tersebut memberikan instruksi atau perintah untuk melakukan sesuatu, ciri khas teks prosedur." },
            { question: "Dalam cerita fantasi 'Harry Potter', tokoh utama dapat menggunakan sihir. Hal ini menunjukkan ciri...", options: ["Logis", "Berdasarkan fakta", "Adanya keajaiban (anomali)", "Alur yang lambat"], answer: "Adanya keajaiban (anomali)", explanation: "Kemampuan sihir yang tidak ada di dunia nyata merupakan unsur keajaiban atau anomali yang menjadi ciri utama cerita fantasi." },
            { question: "Kata penghubung seperti 'kemudian', 'selanjutnya', 'setelah itu' sering ditemukan dalam teks...", options: ["Deskripsi", "Eksposisi", "Prosedur", "Laporan"], answer: "Prosedur", explanation: "Kata-kata tersebut adalah konjungsi temporal yang menunjukkan urutan waktu atau langkah-langkah, yang merupakan ciri teks prosedur." },
            { question: "Sebuah balok memiliki panjang 10 cm, lebar 5 cm, dan tinggi 2 cm. Volume balok tersebut adalah...", options: ["17 cm³", "50 cm³", "100 cm³", "200 cm³"], answer: "100 cm³", explanation: "Rumus volume balok adalah V = panjang × lebar × tinggi. V = 10 × 5 × 2 = 100 cm³." },
            { question: "Pegangan setrika dibuat dari bahan plastik karena plastik merupakan bahan yang bersifat...", options: ["Konduktor", "Isolator", "Semikonduktor", "Radiator"], answer: "Isolator", explanation: "Isolator adalah bahan yang sulit menghantarkan panas. Plastik digunakan agar panas dari setrika tidak sampai ke tangan." },
            { question: "Contoh perpindahan panas secara radiasi dalam kehidupan sehari-hari adalah...", options: ["Ujung sendok panas", "Gerakan air mendidih", "Panas matahari sampai ke bumi", "Asap membumbung tinggi"], answer: "Panas matahari sampai ke bumi", explanation: "Radiasi adalah perpindahan panas tanpa memerlukan medium, seperti panas matahari yang melewati ruang hampa." },
            { question: "Mikroskop adalah alat yang digunakan dalam pengamatan IPA untuk...", options: ["Melihat benda jauh", "Melihat benda yang sangat kecil", "Mengukur berat benda", "Mengukur suhu"], answer: "Melihat benda yang sangat kecil", explanation: "Mikroskop berfungsi untuk memperbesar bayangan objek yang sangat kecil sehingga dapat diamati." }
        ],
        '8': [
            // MATEMATIKA
            { question: "Dua suku berikutnya dari barisan bilangan 2, 5, 8, 11, ... adalah...", options: ["14, 17", "13, 15", "14, 18", "15, 19"], answer: "14, 17", explanation: "Ini adalah barisan aritmetika dengan beda +3. Suku berikutnya adalah 11+3=14, dan 14+3=17." },
            { question: "Gradien dari garis yang melalui titik (2,1) dan (4,5) adalah...", options: ["-2", "1/2", "2", "4"], answer: "2", explanation: "Rumus gradien (m) = (y₂ - y₁) / (x₂ - x₁). Maka m = (5 - 1) / (4 - 2) = 4 / 2 = 2." },
            { question: "Sebuah fungsi didefinisikan dengan rumus f(x) = 3x − 5. Nilai dari f(4) adalah...", options: ["7", "12", "17", "2"], answer: "7", explanation: "Substitusikan nilai x=4 ke dalam rumus fungsi: f(4) = 3(4) - 5 = 12 - 5 = 7." },
            { question: "Rumus suku ke-n dari barisan bilangan 3, 7, 11, 15, ... adalah...", options: ["3n", "n + 4", "4n - 1", "3n + 1"], answer: "4n - 1", explanation: "Barisan ini memiliki beda 4. Rumus Un = a + (n-1)b = 3 + (n-1)4 = 3 + 4n - 4 = 4n - 1." },
            // BAHASA INDONESIA
            { question: "'Membaca adalah membuka jendela dunia.' Kalimat ini merupakan contoh dari sebuah...", options: ["Iklan", "Slogan", "Poster", "Berita"], answer: "Slogan", explanation: "Slogan adalah kalimat singkat dan menarik yang digunakan untuk menyampaikan suatu gagasan." },
            { question: "Teks yang berisi pendapat (argumen) yang diperkuat dengan fakta untuk meyakinkan pembaca disebut teks...", options: ["Narasi", "Deskripsi", "Eksposisi", "Berita"], answer: "Eksposisi", explanation: "Teks eksposisi bertujuan untuk memaparkan suatu gagasan yang disertai argumen logis dan fakta." },
            { question: "Unsur berita yang menjawab pertanyaan 'siapa' disebut...", options: ["What (Apa)", "When (Kapan)", "Who (Siapa)", "Why (Mengapa)"], answer: "Who (Siapa)", explanation: "Dalam unsur berita 5W+1H, unsur 'Who' menjelaskan tentang orang-orang yang terlibat dalam peristiwa." },
            { question: "Bagian dari struktur teks eksposisi yang berisi pengenalan isu atau masalah adalah...", options: ["Argumen", "Tesis", "Penegasan ulang", "Judul"], answer: "Tesis", explanation: "Tesis adalah bagian pembuka dari teks eksposisi yang berisi pernyataan pendapat atau pengenalan isu." },
            // IPA
            { question: "Jaringan pada tumbuhan yang berfungsi untuk mengangkut air dan mineral dari akar ke daun adalah...", options: ["Floem", "Xilem", "Epidermis", "Kambium"], answer: "Xilem", explanation: "Xilem (pembuluh kayu) bertugas mengangkut air dan unsur hara dari akar ke seluruh bagian tumbuhan." },
            { question: "Proses fotosintesis pada tumbuhan terjadi di organel sel yang disebut...", options: ["Mitokondria", "Ribosom", "Inti sel", "Kloroplas"], answer: "Kloroplas", explanation: "Kloroplas adalah organel yang mengandung klorofil dan menjadi tempat berlangsungnya fotosintesis." },
            { question: "Sebuah gaya sebesar 50 N digunakan untuk mendorong meja sejauh 2 meter. Usaha yang dilakukan adalah...", options: ["25 Joule", "52 Joule", "100 Joule", "200 Joule"], answer: "100 Joule", explanation: "Rumus Usaha (W) = Gaya (F) × Perpindahan (s). Maka, W = 50 N × 2 m = 100 Joule." },
            { question: "Gunting, pinset, dan pembuka botol adalah contoh dari pesawat sederhana jenis...", options: ["Katrol", "Bidang miring", "Roda berporos", "Tuas (Pengungkit)"], answer: "Tuas (Pengungkit)", explanation: "Ketiga alat tersebut bekerja berdasarkan prinsip tuas, yang memiliki titik tumpu, kuasa, dan beban." },
//_PASTE KODE INI DI DALAM TANDA [ ] UNTUK KELAS 8_
            { question: "Sebuah titik berada di Kuadran III. Koordinat yang mungkin untuk titik tersebut adalah...", options: ["(2, 3)", "(-2, 3)", "(-2, -3)", "(2, -3)"], answer: "(-2, -3)", explanation: "Kuadran III adalah area di mana nilai koordinat x dan y keduanya negatif." },
            { question: "Diketahui P={1,2,3} dan Q={a,b}. Banyaknya fungsi yang mungkin dari P ke Q adalah...", options: ["6", "8", "9", "5"], answer: "8", explanation: "Banyak fungsi dari P ke Q adalah n(Q)^n(P) = 2³ = 8." },
            { question: "Jika g(a)=13 untuk fungsi g(x)=2x+7, maka nilai a adalah...", options: ["3", "4", "5", "10"], answer: "3", explanation: "g(a) = 2a+7 = 13. Maka 2a = 13-7 = 6. Jadi, a = 6/2 = 3." },
            { question: "Persamaan garis lurus yang melalui titik (0,3) dan bergradien 2 adalah...", options: ["y = 3x + 2", "y = 2x + 3", "y = 2x - 3", "y = 3x - 2"], answer: "y = 2x + 3", explanation: "Gunakan rumus y = mx + c. Gradien (m)=2. Titik (0,3) menunjukkan c=3. Jadi, persamaannya y = 2x + 3." },
            { question: "Bagian teks berita yang merupakan inti dari keseluruhan berita disebut...", options: ["Judul (headline)", "Teras berita (lead)", "Tubuh berita (body)", "Ekor berita (tail)"], answer: "Teras berita (lead)", explanation: "Teras berita (lead) biasanya terletak di paragraf pertama dan merangkum unsur-unsur terpenting dari berita." },
            { question: "Perbedaan utama antara iklan dan slogan adalah...", options: ["Warnanya", "Ukurannya", "Tujuannya", "Bentuknya (iklan bisa berupa gambar/teks, slogan hanya tulisan singkat)"], answer: "Bentuknya (iklan bisa berupa gambar/teks, slogan hanya tulisan singkat)", explanation: "Iklan adalah presentasi yang lebih lengkap (bisa ada gambar, video, teks), sedangkan slogan adalah frasa pendek yang menjadi bagian dari iklan." },
            { question: "Fakta dalam teks eksposisi berfungsi untuk...", options: ["Menghibur pembaca", "Memperkuat argumen", "Membuat cerita", "Menjadi hiasan"], answer: "Memperkuat argumen", explanation: "Fakta dan data digunakan untuk mendukung dan memperkuat argumen penulis sehingga lebih meyakinkan." },
            { question: "Ciri kebahasaan teks berita yang utama adalah menggunakan bahasa yang...", options: ["Puitis dan indah", "Baku, sederhana, dan komunikatif", "Rumit dan ilmiah", "Penuh singkatan"], answer: "Baku, sederhana, dan komunikatif", explanation: "Bahasa berita harus formal (baku) namun mudah dipahami (sederhana dan komunikatif) oleh masyarakat luas." },
            { question: "Contoh penerapan Hukum I Newton dalam kehidupan sehari-hari adalah...", options: ["Benda jatuh ke bawah", "Saat mobil direm, tubuh terdorong ke depan", "Mendayung perahu", "Bermain ketapel"], answer: "Saat mobil direm, tubuh terdorong ke depan", explanation: "Hukum I Newton (Inersia) menyatakan benda cenderung mempertahankan keadaannya. Saat mobil berhenti, tubuh kita cenderung tetap bergerak maju." },
            { question: "Keuntungan mekanis sebuah tuas dapat diperbesar dengan cara...", options: ["Memperpendek lengan kuasa", "Memperpanjang lengan kuasa", "Memindahkan beban ke dekat kuasa", "Memperberat beban"], answer: "Memperpanjang lengan kuasa", explanation: "Keuntungan mekanis (KM = Lengan Kuasa / Lengan Beban) akan semakin besar jika lengan kuasa diperpanjang." },
            { question: "Gerak menutupnya daun putri malu saat disentuh merupakan contoh gerak...", options: ["Nasti", "Tropisme", "Taksis", "Pasif"], answer: "Nasti", explanation: "Gerak nasti adalah gerak bagian tumbuhan yang arahnya tidak dipengaruhi oleh arah datangnya rangsang, seperti sentuhan." },
            { question: "Batang pada tumbuhan dikotil memiliki kambium yang berfungsi untuk...", options: ["Mengangkut air", "Menyimpan makanan", "Pertumbuhan sekunder (membesar)", "Fotosintesis"], answer: "Pertumbuhan sekunder (membesar)", explanation: "Aktivitas kambium menyebabkan pertumbuhan sekunder, yaitu pertambahan diameter (membesarnya) batang." }
        ],
        '9': [
            // MATEMATIKA
            { question: "Hasil dari (2³)² × 2⁻⁴ adalah...", options: ["2", "4", "8", "16"], answer: "4", explanation: "(2³)² = 2⁶. Lalu 2⁶ × 2⁻⁴ = 2⁶⁻⁴ = 2² = 4." },
            { question: "Bentuk sederhana dari √75 adalah...", options: ["3√5", "5√3", "25√3", "15√5"], answer: "5√3", explanation: "√75 = √(25 × 3) = √25 × √3 = 5√3." },
            { question: "Akar-akar dari persamaan kuadrat x² − 5x + 6 = 0 adalah...", options: ["2 dan 3", "-2 dan -3", "1 dan 6", "-1 dan -6"], answer: "2 dan 3", explanation: "Faktorkan persamaan menjadi (x-2)(x-3)=0. Maka, akar-akarnya adalah x=2 dan x=3." },
            { question: "Jika x₁ dan x₂ adalah akar-akar dari persamaan x²+2x−8=0, maka nilai dari x₁+x₂ adalah...", options: ["-8", "-2", "2", "8"], answer: "-2", explanation: "Rumus jumlah akar-akar persamaan kuadrat (x₁+x₂) adalah -b/a. Dari persamaan, a=1 dan b=2. Maka, x₁+x₂ = -2/1 = -2." },
            // BAHASA INDONESIA
            { question: "Sudut pandang orang pertama dalam cerpen ditandai dengan penggunaan kata ganti...", options: ["Dia, ia", "Mereka", "Kamu, Anda", "Aku, saya"], answer: "Aku, saya", explanation: "Sudut pandang orang pertama menggunakan kata ganti 'aku' atau 'saya', seolah-olah penulis adalah tokoh utama." },
            { question: "Pesan atau pelajaran yang ingin disampaikan pengarang melalui cerpennya disebut...", options: ["Tema", "Alur", "Amanat", "Latar"], answer: "Amanat", explanation: "Amanat adalah pesan moral atau pelajaran berharga yang dapat dipetik oleh pembaca dari sebuah cerita." },
            { question: "Teks yang menyajikan informasi hasil pengamatan secara objektif disebut teks...", options: ["Laporan Percobaan", "Cerpen", "Pidato", "Eksposisi"], answer: "Laporan Percobaan", explanation: "Teks laporan percobaan berisi paparan data dan hasil pengamatan secara sistematis dan apa adanya." },
            { question: "Tahapan alur dalam cerpen di mana masalah mulai memuncak disebut...", options: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"], answer: "Klimaks", explanation: "Klimaks adalah titik puncak ketegangan atau konflik dalam sebuah alur cerita." },
            // IPA
            { question: "Proses peleburan antara sel sperma dan sel telur disebut...", options: ["Ovulasi", "Polinasi", "Fertilisasi", "Menstruasi"], answer: "Fertilisasi", explanation: "Fertilisasi (pembuahan) adalah proses bersatunya sel sperma dengan sel telur." },
            { question: "Molekul yang membawa informasi genetik dan diwariskan dari induk kepada keturunannya adalah...", options: ["RNA", "Protein", "Kromosom", "DNA"], answer: "DNA", explanation: "DNA (Deoxyribonucleic acid) adalah materi genetik yang berisi instruksi untuk semua organisme." },
            { question: "Dua benda bermuatan listrik sejenis jika didekatkan akan saling...", options: ["Tarik-menarik", "Tolak-menolak", "Diam", "Menempel"], answer: "Tolak-menolak", explanation: "Sifat dasar muatan listrik adalah muatan sejenis akan saling tolak-menolak." },
            { question: "Penyakit pada sistem reproduksi yang disebabkan oleh virus HIV adalah...", options: ["Sifilis", "Gonore", "Herpes", "AIDS"], answer: "AIDS", explanation: "AIDS (Acquired Immuno Deficiency Syndrome) adalah stadium akhir dari infeksi virus HIV yang menyerang sistem kekebalan tubuh." },
//_PASTE KODE INI DI DALAM TANDA [ ] UNTUK KELAS 9_
            { question: "Bentuk baku dari 2.340.000.000 adalah...", options: ["2,34 x 10⁹", "2,34 x 10⁻⁹", "23,4 x 10⁸", "0,234 x 10¹⁰"], answer: "2,34 x 10⁹", explanation: "Bentuk baku ditulis sebagai a x 10ⁿ dengan 1 ≤ a < 10. Koma digeser 9 kali ke kiri." },
            { question: "Persamaan kuadrat yang akar-akarnya 3 dan -5 adalah...", options: ["x² - 2x - 15 = 0", "x² + 2x - 15 = 0", "x² - 2x + 15 = 0", "x² + 2x + 15 = 0"], answer: "x² + 2x - 15 = 0", explanation: "Gunakan rumus: x² - (x₁+x₂)x + (x₁x₂) = 0. x² - (3-5)x + (3)(-5) = 0. Menjadi x² + 2x - 15 = 0." },
            { question: "Nilai diskriminan (D) dari 2x²−3x−5=0 adalah...", options: ["-31", "49", "31", "-49"], answer: "49", explanation: "Rumus D = b² - 4ac. D = (-3)² - 4(2)(-5) = 9 - (-40) = 9 + 40 = 49." },
            { question: "Bentuk rasional dari penyebut pecahan 6/√3 adalah...", options: ["2√3", "3√2", "6√3", "√18"], answer: "2√3", explanation: "Kalikan dengan √3/√3. (6√3) / (√3 x √3) = 6√3 / 3 = 2√3." },
            { question: "Urutan struktur teks laporan percobaan yang benar adalah...", options: ["Tujuan - Hasil - Langkah - Simpulan", "Judul - Tujuan - Bahan & Alat - Langkah - Hasil - Simpulan", "Langkah - Hasil - Tujuan - Simpulan", "Judul - Simpulan - Hasil - Langkah"], answer: "Judul - Tujuan - Bahan & Alat - Langkah - Hasil - Simpulan", explanation: "Struktur teks laporan percobaan yang sistematis adalah Judul, Tujuan, Kajian Teori, Alat & Bahan, Prosedur/Langkah, Hasil, Pembahasan, dan Simpulan." },
            { question: "'Hadirin yang saya hormati, marilah kita senantiasa menjaga kebersihan.' Kalimat tersebut merupakan contoh kalimat...", options: ["Deskriptif", "Naratif", "Argumentatif", "Persuasif"], answer: "Persuasif", explanation: "Kata 'marilah' adalah kata ajakan, yang merupakan ciri utama dari kalimat persuasif (mengajak)." },
            { question: "Bagian awal sebuah pidato yang berfungsi untuk menarik perhatian audiens disebut...", options: ["Isi", "Salam pembuka", "Pendahuluan (pengantar)", "Penutup"], answer: "Pendahuluan (pengantar)", explanation: "Setelah salam, bagian pendahuluan berfungsi untuk membangun koneksi dan menarik perhatian audiens terhadap topik yang akan dibahas." },
            { question: "Perbedaan mendasar antara cerpen dan novel terletak pada...", options: ["Jumlah tokoh", "Adanya konflik", "Panjang cerita dan kompleksitas alur", "Adanya amanat"], answer: "Panjang cerita dan kompleksitas alur", explanation: "Novel memiliki alur cerita yang lebih panjang dan kompleks, dengan lebih banyak tokoh dan konflik dibandingkan cerpen." },
            { question: "Organ reproduksi pada pria yang berfungsi sebagai tempat produksi sperma adalah...", options: ["Penis", "Skrotum", "Testis", "Vas deferens"], answer: "Testis", explanation: "Testis adalah organ gonad jantan yang berfungsi utama untuk memproduksi sel sperma dan hormon testosteron." },
            { question: "Hukum Mendel I dikenal juga dengan sebutan Hukum...", options: ["Dominansi", "Pewarisan", "Asortasi (Pemisahan)", "Segregasi (Pemisahan)"], answer: "Segregasi (Pemisahan)", explanation: "Hukum I Mendel atau Hukum Segregasi menyatakan bahwa pada pembentukan gamet, alel akan berpisah secara bebas." },
            { question: "Alat yang digunakan untuk mendeteksi adanya muatan listrik pada suatu benda adalah...", options: ["Termometer", "Barometer", "Elektroskop", "Amperemeter"], answer: "Elektroskop", explanation: "Elektroskop adalah alat sederhana yang bekerja berdasarkan prinsip induksi listrik untuk mendeteksi muatan." },
            { question: "Menstruasi pada wanita terjadi karena...", options: ["Terjadinya pembuahan", "Tidak terjadinya pembuahan", "Aktivitas berat", "Masa subur"], answer: "Tidak terjadinya pembuahan", explanation: "Menstruasi adalah proses luruhnya dinding rahim (endometrium) yang telah menebal karena sel telur tidak dibuahi oleh sperma." }
        ],
        '10': [
            // MATEMATIKA
            { question: "Nilai dari 81^(3/4) adalah...", options: ["9", "18", "27", "36"], answer: "27", explanation: "81^(3/4) = (⁴√81)³ = (3)³ = 27." },
            { question: "Jika ²log8 = x, maka nilai x adalah...", options: ["2", "3", "4", "8"], answer: "3", explanation: "Bentuk logaritma ²log8 = x sama artinya dengan 2ˣ = 8. Nilai x yang memenuhi adalah 3." },
            { question: "Nilai dari ³log18 − ³log2 adalah...", options: ["2", "3", "9", "16"], answer: "2", explanation: "Menggunakan sifat logaritma, ³log(18/2) = ³log9. Karena 3² = 9, maka hasilnya adalah 2." },
            { question: "Suku ke-6 dari barisan geometri 3, 6, 12, ... adalah...", options: ["36", "48", "72", "96"], answer: "96", explanation: "Barisan ini memiliki suku pertama (a) = 3 dan rasio (r) = 2. Un = ar^(n-1). U6 = 3 × 2⁵ = 3 × 32 = 96." },
            // BAHASA INDONESIA
            { question: "Perbedaan utama antara teks anekdot dengan teks humor biasa adalah...", options: ["Kelucuannya", "Adanya kritikan atau sindiran", "Jumlah paragrafnya", "Tokohnya"], answer: "Adanya kritikan atau sindiran", explanation: "Anekdot tidak hanya lucu, tetapi juga mengandung kritikan atau sindiran terhadap isu sosial atau tokoh publik." },
            { question: "Sifat utama dari informasi yang disajikan dalam Teks Laporan Hasil Observasi (LHO) adalah...", options: ["Subjektif dan imajinatif", "Persuasif dan mengajak", "Objektif dan faktual", "Naratif dan kronologis"], answer: "Objektif dan faktual", explanation: "Teks LHO harus menyajikan informasi apa adanya sesuai hasil pengamatan (faktual) dan tidak dipengaruhi pendapat pribadi (objektif)." },
            { question: "Struktur teks eksposisi adalah tesis, ..., dan penegasan ulang.", options: ["Argumentasi", "Orientasi", "Koda", "Deskripsi Bagian"], answer: "Argumentasi", explanation: "Struktur lengkap teks eksposisi adalah Tesis (pembukaan), Rangkaian Argumen (isi), dan Penegasan Ulang (penutup)." },
            { question: "Tokoh yang sering menjadi sasaran kritik dalam teks anekdot adalah...", options: ["Hewan", "Orang biasa", "Tokoh publik atau pejabat", "Tokoh fiksi"], answer: "Tokoh publik atau pejabat", explanation: "Anekdot seringkali digunakan sebagai media untuk menyampaikan kritik sosial secara halus kepada figur publik atau pejabat." },
            // IPA (FISIKA, KIMIA, BIOLOGI)
            { question: "(Fisika) Di antara besaran berikut: kecepatan, massa, gaya, dan perpindahan, yang termasuk besaran skalar adalah...", options: ["Kecepatan", "Massa", "Gaya", "Perpindahan"], answer: "Massa", explanation: "Besaran skalar hanya memiliki nilai (contoh: massa), sedangkan besaran vektor memiliki nilai dan arah (contoh: kecepatan)." },
            { question: "(Kimia) Partikel dasar penyusun atom yang bermuatan negatif adalah...", options: ["Proton", "Neutron", "Elektron", "Nukleon"], answer: "Elektron", explanation: "Proton bermuatan positif, Neutron netral, dan Elektron bermuatan negatif." },
            { question: "(Kimia) Unsur dengan konfigurasi elektron 2, 8, 7 dalam sistem periodik terletak pada golongan ... dan periode ...", options: ["VIIA dan Periode 3", "IIIA dan Periode 7", "VIIA dan Periode 2", "IIA dan Periode 3"], answer: "VIIA dan Periode 3", explanation: "Elektron valensi (kulit terluar) 7 menunjukkan Golongan VIIA. Jumlah kulit (3) menunjukkan Periode 3." },
            { question: "(Biologi) Sistem penamaan ganda pada makhluk hidup (binomial nomenclature) diperkenalkan oleh...", options: ["Charles Darwin", "Gregor Mendel", "Aristoteles", "Carolus Linnaeus"], answer: "Carolus Linnaeus", explanation: "Carolus Linnaeus dikenal sebagai Bapak Taksonomi Modern yang memperkenalkan sistem penamaan binomial nomenclature." },
//_PASTE KODE INI DI DALAM TANDA [ ] UNTUK KELAS 10_
            { question: "Bentuk sederhana dari (a⁵b²c⁻¹)/(a³b⁻³c²) adalah...", options: ["a²b⁵c⁻³", "a⁻²b⁻¹c⁻¹", "a⁸b⁻¹c¹", "a²b⁻¹c³"], answer: "a²b⁵c⁻³", explanation: "Gunakan sifat pangkat: xᵐ/xⁿ = xᵐ⁻ⁿ. a⁵⁻³ = a²; b²⁻⁽⁻³⁾ = b⁵; c⁻¹⁻² = c⁻³." },
            { question: "Suku ke-15 dari barisan aritmetika 2, 5, 8, 11, ... adalah", options: ["41", "44", "47", "50"], answer: "44", explanation: "a=2, b=3. Un = a + (n-1)b. U15 = 2 + (15-1)3 = 2 + 14*3 = 2 + 42 = 44." },
            { question: "Jumlah tak hingga dari deret geometri 16+8+4+... adalah...", options: ["24", "30", "32", "Tidak terhingga"], answer: "32", explanation: "a=16, r=1/2. Rumus S∞ = a / (1-r) = 16 / (1 - 1/2) = 16 / (1/2) = 32." },
            { question: "Penyelesaian dari persamaan eksponen 3²ˣ⁻¹ = 27 adalah...", options: ["1", "2", "3", "4"], answer: "2", explanation: "3²ˣ⁻¹ = 3³. Samakan pangkatnya: 2x-1 = 3. Maka 2x=4, dan x=2." },
            { question: "Bagian dalam struktur anekdot yang berisi puncak kelucuan atau kritikan disebut...", options: ["Abstraksi", "Orientasi", "Krisis", "Reaksi"], answer: "Krisis", explanation: "Krisis adalah tahap di mana masalah utama atau kelucuan puncak dalam anekdot muncul." },
            { question: "Makna tersirat atau sindiran yang ingin disampaikan dalam sebuah anekdot disebut...", options: ["Humor", "Kritik sosial", "Tema", "Amanat"], answer: "Kritik sosial", explanation: "Salah satu fungsi utama anekdot adalah untuk menyampaikan kritik sosial melalui cerita lucu yang memiliki makna tersirat." },
            { question: "Penggunaan konjungsi kausalitas (sebab-akibat) seperti 'karena' banyak ditemukan dalam teks...", options: ["LHO", "Anekdot", "Eksposisi", "Prosedur"], answer: "Eksposisi", explanation: "Teks eksposisi sering menggunakan konjungsi kausalitas untuk menghubungkan argumen dengan fakta atau alasan pendukungnya." },
            { question: "Aspek yang dilaporkan dalam Teks LHO dapat berupa benda, fenomena alam, atau fenomena...", options: ["Khayalan", "Masa lalu", "Sosial", "Misterius"], answer: "Sosial", explanation: "Objek observasi dalam LHO bisa berupa benda mati, fenomena alam, atau fenomena sosial (perilaku, budaya, dll)." },
            { question: "(Fisika) Notasi ilmiah dari hasil pengukuran 0,00025 kg adalah...", options: ["2,5 x 10⁴ kg", "2,5 x 10⁻⁴ kg", "25 x 10⁻⁵ kg", "0,25 x 10⁻³ kg"], answer: "2,5 x 10⁻⁴ kg", explanation: "Bentuk notasi ilmiah adalah a x 10ⁿ dengan 1 ≤ a < 10. Koma digeser ke kanan 4 kali." },
            { question: "(Kimia) Suatu atom memiliki nomor atom 11 dan nomor massa 23. Jumlah proton, elektron, dan neutron adalah...", options: ["11, 11, 12", "11, 12, 11", "12, 11, 11", "11, 11, 23"], answer: "11, 11, 12", explanation: "Proton = Nomor Atom = 11. Elektron = Proton = 11. Neutron = Nomor Massa - Nomor Atom = 23 - 11 = 12." },
            { question: "(Kimia) Unsur-unsur yang terletak dalam satu golongan pada sistem periodik memiliki kesamaan dalam hal...", options: ["Jumlah kulit atom", "Jumlah elektron valensi", "Nomor atom", "Nomor massa"], answer: "Jumlah elektron valensi", explanation: "Golongan dalam sistem periodik ditentukan oleh jumlah elektron di kulit terluar (elektron valensi)." },
            { question: "(Biologi) Keanekaragaman hayati tingkat gen ditunjukkan oleh adanya variasi pada...", options: ["Berbagai jenis ikan di laut", "Ekosistem gurun dan hutan hujan", "Perbedaan warna pada bunga mawar", "Berbagai jenis burung di taman"], answer: "Perbedaan warna pada bunga mawar", explanation: "Keanekaragaman gen adalah variasi dalam satu spesies, seperti warna yang berbeda pada bunga mawar (mawar merah, putih, kuning)." }
        ]
    };

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

    function showQuiz(classNumber) {
        currentClass = classNumber;
        if (!answeredState[currentClass]) {
            answeredState[currentClass] = [];
        }
        
        currentQuestions = shuffleArray([...quizData[classNumber]]);
        quizHeader.textContent = `Soal Kelas ${classNumber}`;
        
        questionGrid.innerHTML = '';
        currentQuestions.forEach((_, index) => {
            const questionBox = document.createElement('div');
            questionBox.classList.add('question-box');
            questionBox.textContent = index + 1;
            questionBox.dataset.index = index;
            
            if (answeredState[currentClass].includes(index)) {
                questionBox.classList.add('answered');
            }
            
            questionGrid.appendChild(questionBox);
        });

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
    
    function closeModal() {
        questionModal.classList.add('hidden');
        showQuiz(currentClass);
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