// --- STUB DATA FOR TASKS ---
const TASKS = [
 // INFORMATIKA
 {
 id: 'info-1',
 subject: 'Informatika',
 title: 'Pembuatan Website Portofolio Statis',
 date: '10 Juli 2026',
 status: 'Selesai',
 teacher: 'Bp. Budi Cahyono, S.Kom.',
 grade: '95/100',
 desc: 'Tugas merancang dan membuat halaman portofolio personal menggunakan HTML5, CSS kustom, JavaScript, dan framework CSS Tailwind. Website dikemas agar responsif, modern, dan interaktif.',
 tags: ['HTML5', 'Tailwind CSS', 'UI/UX', 'Responsive'],
 link: '#'
 },
 {
 id: 'info-2',
 subject: 'Informatika',
 title: 'Program Logika Kalkulator Python',
 date: '28 Juni 2026',
 status: 'Selesai',
 teacher: 'Bp. Budi Cahyono, S.Kom.',
 grade: '92/100',
 desc: 'Implementasi program kalkulator CLI interaktif menggunakan pemrograman modular Python. Mencakup penanganan error pembagian dengan nol, operasi aritmatika dasar, dan loop berkelanjutan.',
 tags: ['Python', 'Algoritma', 'OOP', 'CLI'],
 link: 'https://github.com/'
 },
 {
 id: 'info-3',
 subject: 'Informatika',
 title: 'Desain Relasi Database Toko Buku',
 date: '15 Mei 2026',
 status: 'Selesai',
 teacher: 'Bp. Budi Cahyono, S.Kom.',
 grade: '88/100',
 desc: 'Tugas merancang Entity Relationship Diagram (ERD) untuk sistem transaksi toko buku online. Disertai skrip SQL DDL (Create Table, Foreign Keys) dan normalisasi database 1NF hingga 3NF.',
 tags: ['SQL', 'ERD', 'Database', 'Normalisasi'],
 link: '#'
 },
 {
 id: 'info-4',
 subject: 'Informatika',
 title: 'Analisis Jaringan Komputer Subnetting',
 date: '20 April 2026',
 status: 'Selesai',
 teacher: 'Bp. Budi Cahyono, S.Kom.',
 grade: '90/100',
 desc: 'Menghitung alokasi alamat IP menggunakan teknik VLSM (Variable Length Subnet Masking) untuk 4 departemen berbeda dalam satu instansi sekolah demi meminimalkan pemborosan IP.',
 tags: ['Subnetting', 'IP Address', 'Jaringan', 'VLSM'],
 link: '#'
 },
 {
 id: 'info-5',
 subject: 'Informatika',
 title: 'Integrasi API Cuaca Sederhana',
 date: '02 Agustus 2026',
 status: 'Dalam Pengerjaan',
 teacher: 'Bp. Budi Cahyono, S.Kom.',
 grade: 'Belum Dinilai',
 desc: 'Proyek akhir semester berupa aplikasi web sederhana yang dapat memanggil data cuaca real-time berdasarkan lokasi kota menggunakan OpenWeatherMap API dengan Fetch API Javascript.',
 tags: ['Fetch API', 'JSON', 'Javascript', 'API Integration'],
 link: '#'
 },

 // BAHASA INDONESIA
 {
 id: 'indo-1',
 subject: 'Bahasa Indonesia',
 title: 'Resensi Novel Laskar Pelangi',
 date: '05 Juli 2026',
 status: 'Selesai',
 teacher: 'Ibu Siti Aminah, M.Pd.',
 grade: '96/100',
 desc: 'Analisis mendalam mengenai novel Laskar Pelangi karya Andrea Hirata. Mengkaji struktur kebahasaan, unsur intrinsik (tema, alur, perwatakan), serta mengkritisi kelebihan dan kelemahan novel.',
 tags: ['Resensi', 'Karya Sastra', 'Novel', 'Analisis'],
 link: '#'
 },
 {
 id: 'indo-2',
 subject: 'Bahasa Indonesia',
 title: 'Teks Eksplanasi Fenomena El Nino',
 date: '18 Juni 2026',
 status: 'Selesai',
 teacher: 'Ibu Siti Aminah, M.Pd.',
 grade: '90/100',
 desc: 'Tugas menulis teks eksplanasi ilmiah yang menjelaskan proses terjadinya fenomena iklim El Nino, dampak beruntun pada pertanian di Indonesia, beserta konjungsi kausalitas yang tepat.',
 tags: ['Teks Eksplanasi', 'Kausalitas', 'Fenomena Alam'],
 link: '#'
 },
 {
 id: 'indo-3',
 subject: 'Bahasa Indonesia',
 title: 'Pidato Persuasif Menghadapi Hoaks',
 date: '02 Juni 2026',
 status: 'Selesai',
 teacher: 'Ibu Siti Aminah, M.Pd.',
 grade: '94/100',
 desc: 'Naskah pidato bertema pentingnya literasi digital di kalangan remaja untuk memfilter informasi bohong (hoaks). Dinilai berdasarkan kejelasan argumen dan penggunaan kalimat persuasif.',
 tags: ['Pidato', 'Persuasif', 'Literasi', 'Digital'],
 link: '#'
 },
 {
 id: 'indo-4',
 subject: 'Bahasa Indonesia',
 title: 'Analisis Struktur Cerpen Kehidupan',
 date: '12 Mei 2026',
 status: 'Selesai',
 teacher: 'Ibu Siti Aminah, M.Pd.',
 grade: '85/100',
 desc: 'Membedah unsur pembangun cerpen (abstrak, orientasi, komplikasi, evaluasi, resolusi, koda) pada salah satu cerpen pilihan di majalah sastra nasional.',
 tags: ['Cerpen', 'Struktur Kebahasaan', 'Sastra'],
 link: '#'
 },
 {
 id: 'indo-5',
 subject: 'Bahasa Indonesia',
 title: 'Menulis Karya Ilmiah Remaja (KIR)',
 date: '15 Agustus 2026',
 status: 'Dalam Pengerjaan',
 teacher: 'Ibu Siti Aminah, M.Pd.',
 grade: 'Belum Dinilai',
 desc: 'Merancang proposal karya ilmiah remaja mengenai pengaruh durasi penggunaan gadget terhadap konsentrasi belajar siswa SMA, lengkap dengan kuesioner dan hipotesis awal.',
 tags: ['KIR', 'Metode Penelitian', 'Proposal'],
 link: '#'
 },

 // ARTIKEL (Informatika)
 {
 id: 'artikel-1',
 subject: 'Artikel',
 title: 'Artikel : Topologi',
 date: '10 September 2026',
 status: 'Selesai',
 teacher: 'Bpk Yahya Yanuar',
 grade: 'Terbit',
 desc: 'Topologi jaringan komputer merupakan landasan utama dalam merancang sebuah sistem komunikasi data yang efisien dan handal di era digital saat ini. Secara umum, topologi mendefinisikan bagaimana berbagai perangkat keras seperti komputer, server, dan perangkat jaringan lainnya saling terhubung satu sama lain. Pemilihan jenis topologi yang tepat sangat krusial karena akan berdampak langsung pada kecepatan transfer data, tingkat keamanan, dan biaya operasional. Selain itu, pemahaman yang baik tentang topologi memungkinkan administrator jaringan untuk meminimalisir gangguan dan mengoptimalkan kinerja sistem secara keseluruhan. Oleh karena itu, mempelajari dasar-dasar topologi menjadi langkah awal yang wajib dikuasai oleh setiap siswa yang mendalami ilmu informatika.\n\nSalah satu jenis topologi yang paling umum digunakan di lingkungan sekolah maupun perkantoran adalah topologi Star. Pada topologi ini, semua komputer klien dihubungkan ke sebuah perangkat pusat, seperti switch atau hub, yang bertugas mengatur arus lalu lintas data. Keuntungan utama dari desain ini adalah kemudahan dalam pengelolaan jaringan dan proses deteksi kesalahan, karena kerusakan pada satu kabel klien tidak akan memengaruhi keseluruhan sistem. Meskipun membutuhkan lebih banyak kabel dibandingkan desain lainnya, topologi Star menawarkan tingkat stabilitas yang tinggi dan sangat mudah untuk diperluas. Kinerja jaringan juga bergantung sepenuhnya pada keandalan perangkat pusat pengatur data tersebut.\n\nSelain topologi Star, terdapat pula topologi Bus dan Ring yang memiliki karakteristik serta skenario penggunaan yang berbeda. Topologi Bus menggunakan satu kabel utama sebagai tulang punggung (backbone) tempat semua perangkat terhubung secara langsung. Meskipun sangat hemat kabel dan mudah diimplementasikan untuk jaringan berskala kecil, topologi ini rentan terhadap gangguan jika kabel utama mengalami kerusakan total. Sementara itu, topologi Ring menghubungkan setiap komputer dengan dua komputer lainnya sehingga membentuk jalur melingkar layaknya sebuah cincin. Data dalam topologi Ring mengalir dalam satu arah secara bergiliran, sehingga mencegah terjadinya tabrakan data (collision), namun kelemahannya adalah jika satu titik mati, maka seluruh jaringan dapat terputus.\n\nSeiring dengan perkembangan teknologi jaringan yang semakin kompleks, topologi Mesh kini semakin sering diterapkan pada infrastruktur skala besar. Dalam topologi Mesh, setiap perangkat terhubung secara langsung ke setiap perangkat lainnya, menciptakan jalur komunikasi majemuk yang sangat tangguh. Tingkat keandalan topologi ini sangat tinggi karena apabila ada satu jalur komunikasi yang putus, data masih dapat mencari rute alternatif untuk mencapai tujuan akhir. Walaupun biaya instalasi dan kerumitan pengaturannya sangat tinggi, topologi Mesh menjadi standar mutlak bagi organisasi yang menuntut ketersediaan data secara terus-menerus tanpa toleransi kegagalan. Pada akhirnya, setiap jenis topologi memiliki kelebihan dan kekurangannya masing-masing, sehingga penerapannya harus disesuaikan dengan kebutuhan, skala, dan anggaran yang tersedia.',
 tags: ['Topologi', 'Jaringan', 'Tutorial'],
 conclusion: 'Secara singkat, pemahaman terhadap berbagai topologi seperti Star, Bus, Ring, dan Mesh sangatlah krusial bagi administrator jaringan dalam membangun sistem komunikasi yang efisien, handal, dan sesuai dengan kebutuhan infrastruktur.',
 link: '#',
 image: 'topologi.png' // <-- GANTI URL GAMBAR DI SINI
 },
 {
 id: 'artikel-2',
 subject: 'Artikel',
 title: 'Kriptografi',
 date: '25 Agustus 2026',
 status: 'Selesai',
 teacher: 'Bpk Yahya Yanuar',
 grade: 'Terbit',
 desc: 'Kriptografi merupakan cabang ilmu sains yang memfokuskan diri pada teknik pengamanan pesan atau data melalui proses enkripsi dan dekripsi yang kompleks. Dalam era digital di mana pertukaran informasi terjadi dengan kecepatan cahaya melintasi berbagai benua, peran kriptografi menjadi sangat sentral dan tidak tergantikan. Ilmu ini memastikan bahwa data sensitif seperti kata sandi, transaksi perbankan, hingga percakapan pribadi tidak dapat dibaca oleh pihak ketiga yang tidak memiliki otoritas. Tanpa adanya lapisan perlindungan kriptografi yang kuat, ekosistem internet akan berubah menjadi tempat yang sangat rentan dan penuh dengan kejahatan siber (cybercrime). Oleh karena itu, penguasaan terhadap konsep dasar kriptografi menjadi fondasi penting bagi siapa saja yang ingin mendalami bidang keamanan sistem informasi.\n\nSecara konseptual, sistem kriptografi modern umumnya dibagi menjadi dua kategori utama, yakni kriptografi simetris dan kriptografi asimetris. Pada kriptografi simetris, pengirim dan penerima pesan menggunakan satu kunci rahasia yang sama untuk melakukan enkripsi dan dekripsi data. Metode ini sangat efisien dan cepat, namun memiliki kelemahan mendasar dalam proses distribusi kunci yang rentan dicegat oleh pihak peretas. Sebaliknya, kriptografi asimetris mengatasi masalah ini dengan menggunakan sepasang kunci yang berbeda, yaitu kunci publik untuk mengenkripsi dan kunci privat untuk mendekripsi informasi. Meskipun membutuhkan daya komputasi yang jauh lebih besar, metode asimetris menawarkan tingkat keamanan yang jauh superior dan menjadi standar untuk transaksi daring saat ini.\n\nSeiring dengan pesatnya inovasi di bidang komputasi, tantangan yang dihadapi oleh para pakar kriptografi pun semakin meningkat tajam. Kemunculan komputer kuantum di masa depan diprediksi mampu memecahkan algoritma enkripsi asimetris terkuat saat ini hanya dalam waktu hitungan menit. Ancaman ini memicu perlombaan global di antara para peneliti untuk menciptakan algoritma kriptografi pasca-kuantum (post-quantum cryptography) yang kebal terhadap serangan komputasi tingkat tinggi tersebut. Hal ini membuktikan bahwa ilmu kriptografi bersifat dinamis dan harus terus berevolusi untuk merespons ancaman baru yang terus bermunculan. Perlindungan data bukanlah sebuah tujuan akhir yang statis, melainkan sebuah proses adaptasi yang berkelanjutan demi menjaga kerahasiaan informasi umat manusia.\n\nSelain aspek matematis dan teknis, penerapan kriptografi juga memunculkan diskusi hangat di ranah hukum, kebijakan publik, dan kebebasan sipil. Beberapa pemerintahan di dunia berpendapat bahwa penggunaan enkripsi ujung-ke-ujung (end-to-end encryption) secara penuh dapat menghambat aparat penegak hukum dalam melacak aktivitas terorisme maupun kejahatan terorganisir. Mereka sering kali menuntut penyediaan pintu belakang (backdoor) pada sistem perangkat lunak agar dapat mengakses data yang dienkripsi dalam kondisi darurat. Namun, para pakar keamanan siber berargumen bahwa keberadaan pintu belakang justru akan menciptakan celah fatal yang dapat dieksploitasi oleh peretas jahat kapan saja. Tarik-ulur antara kebutuhan akan privasi individu dan tuntutan keamanan nasional ini menjadikan isu kriptografi sebagai salah satu topik yang paling banyak diperdebatkan di era modern.',
 tags: ['Kriptografi', 'Keamanan', 'Siber'],
 conclusion: 'Penguasaan teknik kriptografi modern, baik simetris maupun asimetris, menjadi landasan utama yang tidak tergantikan dalam melindungi kerahasiaan data serta memastikan integritas transaksi digital di tengah ancaman siber yang terus berevolusi.',
 link: '#',
 image: 'kripto.jpg' // <-- GANTI URL GAMBAR DI SINI
 },
 {
 id: 'artikel-3',
 subject: 'Artikel',
 title: 'Artikel Panduan Cisco Packet Tracker',
 date: '15 Agustus 2026',
 status: 'Selesai',
 teacher: 'Bpk Yahya Yanuar',
 grade: 'Terbit',
 desc: 'Cisco Packet Tracer adalah perangkat lunak simulator jaringan komprehensif yang dikembangkan oleh Cisco Systems untuk membantu siswa memahami arsitektur jaringan secara mendalam. Perangkat lunak ini menyediakan lingkungan virtual yang sangat realistis di mana pengguna dapat merancang, mengonfigurasi, dan memecahkan masalah jaringan komputer tanpa memerlukan perangkat keras fisik yang mahal. Dengan antarmuka yang interaktif, siswa dapat melakukan simulasi pengiriman paket data secara visual, sehingga mempermudah pemahaman mengenai cara kerja berbagai protokol jaringan. Kemampuan untuk menguji skenario jaringan dari yang paling sederhana hingga sistem perusahaan berskala besar menjadikan Packet Tracer sebagai alat bantu pembelajaran yang tidak tergantikan. Bagi para siswa sekolah menengah kejuruan dan mahasiswa, menguasai perangkat ini adalah batu loncatan penting menuju sertifikasi profesional di bidang jaringan.\n\nPada tahap awal penggunaan, siswa akan diperkenalkan dengan berbagai perangkat infrastruktur jaringan dasar seperti router, switch, hub, serta berbagai jenis kabel koneksi. Melalui fitur drag-and-drop, pengguna dapat merangkai topologi jaringan yang diinginkan dan melakukan konfigurasi alamat IP (Internet Protocol) untuk setiap perangkat. Praktik dasar ini sangat krusial untuk melatih logika pengaturan subjaringan (subnetting) serta pemahaman tentang bagaimana perangkat dapat saling berkomunikasi dalam satu area lokal (LAN). Selain itu, Packet Tracer juga memungkinkan pengguna untuk masuk ke dalam Command Line Interface (CLI) pada perangkat router secara virtual. Hal ini memberikan pengalaman yang sangat mendekati kondisi nyata saat mengonfigurasi perangkat keras Cisco di dunia industri sebenarnya.\n\nSetelah menguasai dasar-dasar penyambungan, pengguna dapat mulai bereksperimen dengan fitur konfigurasi tingkat menengah hingga lanjutan yang lebih kompleks. Beberapa konfigurasi esensial yang sering dipraktikkan meliputi pengaturan Virtual LAN (VLAN), penerapan protokol perutean dinamis seperti OSPF dan EIGRP, serta konfigurasi keamanan jaringan menggunakan Access Control Lists (ACL). Simulator ini secara cerdas akan memberikan indikator visual yang menunjukkan apakah koneksi antarperangkat berhasil terhubung dengan benar atau justru mengalami kegagalan (failure). Jika terjadi masalah (troubleshoot), fitur mode simulasi yang disertakan memungkinkan pengguna untuk melacak rute perjalanan paket data langkah demi langkah dari titik asal ke titik tujuan. Proses analisis kegagalan jaringan ini secara efektif akan mengasah kemampuan penalaran logis dan pemecahan masalah (problem-solving) teknis yang kuat.\n\nSecara keseluruhan, Cisco Packet Tracer tidak hanya berfungsi sebagai media latihan teknis, tetapi juga menumbuhkan rasa percaya diri siswa sebelum berhadapan dengan infrastruktur jaringan sungguhan. Kesalahan fatal yang terjadi selama simulasi, seperti terbentuknya routing loop atau kesalahan pemberian IP, tidak akan menyebabkan kerusakan pada sistem nyata. Oleh karena itu, siswa diberikan kebebasan seluas-luasnya untuk bereksplorasi dan melakukan eksperimen secara mandiri tanpa dihantui oleh rasa takut akan merusak peralatan laboratoriun. Pengalaman interaktif ini menjembatani kesenjangan antara teori yang dipelajari di kelas dengan praktik implementasi di lapangan. Dengan panduan yang tepat, Cisco Packet Tracer menjadi kunci pembuka gerbang karier bagi para calon administrator jaringan masa depan yang kompeten.',
 tags: ['Cisco', 'Simulator', 'Tutorial'],
 conclusion: 'Cisco Packet Tracer terbukti menjadi simulator komprehensif yang sangat berharga bagi para pelajar, memfasilitasi eksperimen dan pemahaman logis mengenai arsitektur jaringan tanpa batasan risiko perangkat keras fisik.',
 link: '#',
 image: 'cisco.png' // <-- GANTI URL GAMBAR DI SINI
 },
 {
 id: 'artikel-4',
 subject: 'Artikel',
 title: 'Vibe Coding',
 date: '12 September 2026',
 status: 'Selesai',
 teacher: 'Bpk Yahya Yanuar',
 grade: 'Terbit',
 desc: 'Vibe coding adalah pendekatan pengembangan perangkat lunak modern di mana pengembang menggunakan alat kecerdasan buatan (AI) untuk menulis sebagian besar kode, memungkinkan mereka untuk lebih berfokus pada arsitektur, desain, dan "vibe" atau nuansa dari aplikasi. Istilah ini merujuk pada gaya pemrograman di mana pengetikan sintaks secara manual digantikan oleh instruksi dalam bahasa alami. Pengembang lebih berperan sebagai sutradara atau desainer, memberikan arahan kepada AI agent yang bertindak sebagai pemrogram pelaksana.\n\nDengan vibe coding, alur kerja menjadi jauh lebih efisien. Alih-alih menghabiskan waktu berjam-jam untuk men-debug error ketikan atau mencari sintaks yang tepat di dokumentasi, pengembang dapat mendeskripsikan apa yang ingin mereka capai, dan AI akan menghasilkan kode yang berfungsi penuh. Kecepatan ini memungkinkan tim kecil untuk meluncurkan produk perangkat lunak kompleks dalam waktu yang sangat singkat. Namun, pendekatan ini juga menuntut keterampilan baru: kemampuan untuk memberikan prompt (instruksi) yang jelas dan spesifik kepada AI, serta kemampuan membaca kode yang dihasilkan mesin untuk memverifikasi fungsionalitas dan keamanannya.',
 tags: ['Vibe Coding', 'AI', 'Modern'],
 conclusion: 'Vibe coding merevolusi cara kita membuat perangkat lunak dengan mengutamakan visi dan desain, serta mendelegasikan penulisan sintaks repetitif kepada kecerdasan buatan.',
 link: '#',
 image: 'vibe.jpg' // <-- GANTI URL GAMBAR DI SINI
 },

 // ARTIKEL BAHASA INDONESIA
 {
 id: 'artikel-bahasa-1',
 subject: 'Artikel Bahasa',
 title: 'Teks Anekdot',
 date: '12 September 2026',
 status: 'Selesai',
 teacher: 'Ibu Ruly Mediana Manurung',
 grade: 'Terbit',
 desc: 'Teks anekdot merupakan salah satu bentuk karya sastra yang bertujuan untuk menyampaikan kritik sosial melalui balutan cerita yang singkat, menarik, dan penuh dengan unsur humor. Dalam kehidupan sehari-hari, masyarakat sering kali menggunakan anekdot sebagai sarana untuk menyuarakan ketidakpuasan terhadap fenomena sosial atau kebijakan publik tanpa harus menggunakan bahasa yang kasar. Oleh karena itu, anekdot tidak hanya berfungsi sebagai media hiburan semata, tetapi juga sebagai alat komunikasi yang efektif untuk menyadarkan pembaca atau pendengar tentang suatu permasalahan penting. Ciri khas utama dari teks ini adalah adanya sindiran halus yang dikemas dalam bentuk cerita tokoh terkenal atau kejadian yang sangat tidak terduga. Dengan demikian, pembaca akan diajak untuk tertawa sekaligus merenungkan makna mendalam di balik cerita tersebut.\n\nUntuk memahami teks anekdot secara utuh, siswa perlu mengidentifikasi struktur dasar yang membangun keseluruhan isi cerita. Struktur tersebut umumnya diawali dengan bagian abstraksi yang berfungsi memberikan gambaran awal mengenai latar atau situasi cerita. Selanjutnya, terdapat bagian orientasi yang memperkenalkan para tokoh serta konflik awal yang akan menjadi inti dari peristiwa lucu tersebut. Bagian yang paling penting adalah krisis atau komplikasi, di mana kejanggalan atau masalah utama terjadi dan memicu respons dari para tokoh yang terlibat. Setelah krisis, akan muncul bagian reaksi yang menampilkan cara tokoh menyelesaikan atau menanggapi kejanggalan tersebut dengan cara yang menggelitik. Terakhir, teks anekdot ditutup dengan koda yang memberikan simpulan atau penegasan kembali mengenai pesan moral yang ingin disampaikan.\n\nSelain struktur yang sistematis, teks anekdot juga memiliki kaidah kebahasaan yang khas dan membedakannya dari jenis teks lainnya. Penggunaan kalimat retoris, yaitu pertanyaan yang tidak memerlukan jawaban, sering kali ditemukan untuk memancing pemikiran kritis dari pembaca. Selain itu, teks ini juga banyak menggunakan konjungsi yang menyatakan hubungan waktu, seperti "kemudian", "lalu", dan "setelah itu", untuk menjaga kelancaran alur cerita. Gaya bahasa yang digunakan cenderung santai namun tetap mematuhi norma kesopanan agar kritik yang disampaikan tidak menyinggung perasaan pihak tertentu secara langsung. Pemilihan kata (diksi) yang tepat dan penggunaan majas sindiran juga menjadi elemen krusial dalam menciptakan efek humor yang berkelas.\n\nMelalui pembelajaran teks anekdot, siswa diharapkan mampu mengembangkan kemampuan berpikir kritis sekaligus melatih kreativitas dalam menulis karya sastra. Proses merancang sebuah anekdot mengharuskan siswa untuk peka terhadap berbagai isu yang terjadi di lingkungan sekitar dan mengolahnya menjadi sebuah cerita yang menarik. Selain itu, siswa juga dilatih untuk menyusun argumen yang logis namun disajikan secara implisit melalui dialog antartokoh. Kemampuan ini sangat bermanfaat tidak hanya dalam konteks akademis, tetapi juga dalam kehidupan bersosial di mana komunikasi yang diplomatis sangat dibutuhkan. Pada akhirnya, teks anekdot menjadi bukti nyata bahwa kritik dan masukan dapat disampaikan dengan cara yang elegan, damai, dan menyenangkan.',
 tags: ['Anekdot', 'Sastra', 'Opini'],
 conclusion: 'Teks anekdot berfungsi sebagai media komunikasi elegan yang memadukan humor dan kritik sosial, melatih kepekaan serta keterampilan siswa dalam merumuskan argumen secara diplomatis dan menghibur.',
 link: '#',
 image: 'Anekdot.jpg' // <-- GANTI URL GAMBAR DI SINI
 },
 {
 id: 'artikel-bahasa-2',
 subject: 'Artikel Bahasa',
 title: 'Teks Laporan Hasil Observasi',
 date: '05 September 2026',
 status: 'Selesai',
 teacher: 'Ibu Ruly Mediana Manurung',
 grade: 'Terbit',
 desc: 'Teks Laporan Hasil Observasi (LHO) merupakan sebuah dokumen faktual yang disusun berdasarkan hasil pengamatan langsung, cermat, dan sistematis terhadap suatu objek atau fenomena tertentu di lingkungan sekitar. Tujuan utama dari penulisan teks ini adalah untuk memberikan informasi yang akurat, objektif, dan dapat dipertanggungjawabkan kebenarannya kepada para pembaca. Objek pengamatan yang dapat diangkat sangatlah luas, mulai dari keanekaragaman flora dan fauna, kondisi sosial masyarakat, hingga peristiwa alam maupun budaya. Berbeda dengan teks deskripsi yang lebih menonjolkan sudut pandang personal dari sang penulis, teks LHO harus disusun menggunakan data empiris tanpa adanya opini atau rekayasa. Oleh karena itu, kemampuan mengumpulkan data secara detail dan merangkumnya menjadi informasi terstruktur menjadi kompetensi utama yang harus dikuasai oleh siswa.\n\nSecara struktural, teks Laporan Hasil Observasi terdiri dari tiga bagian utama yang harus disusun secara runut agar informasi dapat tersampaikan dengan baik. Bagian pertama adalah pernyataan umum atau klasifikasi, yang berfungsi sebagai pembuka untuk mendefinisikan objek pengamatan secara garis besar beserta pengelompokannya berdasarkan kriteria tertentu. Bagian kedua adalah deskripsi bagian, di mana penulis akan memaparkan rincian khusus dan karakteristik spesifik dari setiap bagian objek yang telah diklasifikasikan sebelumnya. Pada tahap inilah ketelitian penulis diuji untuk menyajikan informasi berupa angka, ukuran, ciri fisik, atau data kuantitatif lainnya yang mendukung fakta. Bagian terakhir adalah deskripsi manfaat, yang menjelaskan kegunaan atau nilai positif dari objek pengamatan tersebut bagi kehidupan manusia maupun keseimbangan lingkungan.\n\nSelain struktur yang baku, penulisan teks LHO juga terikat oleh kaidah kebahasaan khusus yang mencerminkan objektivitas dan gaya bahasa ilmiah populer. Penggunaan frasa nomina (kelompok kata benda) sangat mendominasi teks ini untuk mendeskripsikan objek secara padat dan jelas. Selain itu, verba relasional seperti "adalah", "merupakan", dan "yaitu" sering digunakan untuk menjabarkan definisi, sementara verba aktif digunakan untuk menjelaskan perilaku atau fungsi objek. Kalimat yang digunakan haruslah efektif, ringkas, serta menghindari penggunaan kata-kata bermakna kias (konotatif) agar tidak menimbulkan ambiguitas di kalangan pembaca. Penggunaan istilah teknis (terminologi) yang sesuai dengan bidang keilmuan objek pengamatan juga sangat dianjurkan untuk menambah kredibilitas tulisan tersebut.\n\nMempelajari teks Laporan Hasil Observasi tidak sekadar melatih keterampilan merangkai kata, melainkan juga menajamkan nalar kritis dan sikap ilmiah dalam memandang fenomena di sekitar kita. Melalui kegiatan observasi, siswa diajak untuk keluar dari rutinitas ruang kelas, mengasah kepekaan panca indra, dan berinteraksi langsung dengan lingkungan secara nyata. Proses dokumentasi, pencatatan data, dan validasi fakta akan melatih ketekunan serta integritas intelektual sejak usia dini. Kemampuan menyusun laporan yang komunikatif dan terstruktur ini akan menjadi fondasi yang sangat berguna bagi siswa ketika melanjutkan studi ke jenjang yang lebih tinggi atau saat memasuki dunia kerja profesional. Pada akhirnya, kebiasaan mengamati dan melaporkan dengan jujur akan menumbuhkan rasa kepedulian yang mendalam terhadap kelestarian alam semesta dan dinamika sosial masyarakat.',
 tags: ['Laporan', 'Observasi', 'Faktual'],
 conclusion: 'Penguasaan teks Laporan Hasil Observasi melatih siswa untuk berpikir secara empiris dan objektif, membekali mereka dengan kemampuan mendokumentasikan fenomena nyata secara terstruktur dan dapat dipertanggungjawabkan.',
 link: '#',
 image: 'LHO.jpg' // <-- GANTI URL GAMBAR DI SINI
 },
 {
 id: 'artikel-bahasa-3',
 subject: 'Artikel Bahasa',
 title: 'Teks Hikayat',
 date: '28 Agustus 2026',
 status: 'Selesai',
 teacher: 'Ibu Ruly Mediana Manurung',
 grade: 'Terbit',
 desc: 'Teks hikayat merupakan salah satu karya sastra Melayu klasik yang kaya akan nilai-nilai historis, budaya, dan kearifan lokal masa lampau. Karya sastra ini biasanya berbentuk prosa panjang yang menceritakan kehebatan, kepahlawanan, serta kesaktian seorang tokoh sentral, yang sering kali digambarkan sebagai keturunan raja atau dewa. Salah satu fungsi utama dari hikayat pada masa lalu adalah sebagai sarana hiburan sekaligus media untuk membangkitkan semangat juang masyarakat atau bala tentara sebelum maju ke medan perang. Selain itu, hikayat juga banyak digunakan untuk mewariskan ajaran moral, budi pekerti, dan nilai-nilai religius dari satu generasi ke generasi berikutnya. Oleh sebab itu, mempelajari teks hikayat bukan hanya sekadar mengkaji keindahan bahasa, melainkan juga menelusuri akar identitas dan karakter bangsa yang luhur.\n\nCiri khas yang paling menonjol dari teks hikayat adalah penggunaan bahasa Melayu arkais, yakni kosa kata kuno yang saat ini sudah jarang atau bahkan tidak pernah lagi digunakan dalam percakapan sehari-hari. Pemilihan kata seperti "syahdan", "hatta", "sebermula", dan "alkisah" sering kali menjadi pembuka paragraf atau penanda pergantian peristiwa di dalam cerita. Selain itu, alur cerita dalam hikayat kerap kali bersifat istanasentris, yaitu berpusat pada kehidupan kaum bangsawan atau lingkungan kerajaan dengan segala intrik dan kemegahannya. Keberadaan unsur kemustahilan (imposibilitas) dan kesaktian tokoh yang berada di luar batas nalar manusia juga menjadi elemen penggerak utama yang menambah daya tarik magis dari cerita tersebut. Kombinasi unsur-unsur ini menjadikan hikayat sebagai karya sastra yang sangat unik dan berbeda dengan karya sastra fiksi modern.\n\nUntuk dapat memahami hikayat secara mendalam, para pembaca dituntut untuk mampu menganalisis berbagai unsur intrinsik yang menyusun cerita secara keseluruhan. Unsur intrinsik ini meliputi tema, tokoh dan penokohan, latar (baik latar tempat, waktu, maupun suasana), alur cerita, serta amanat atau pesan moral. Meskipun hikayat sering kali menggunakan alur maju yang menceritakan perjalanan hidup tokoh dari lahir hingga meraih kejayaan, tidak jarang pula ditemukan kisah yang memiliki alur berbingkai (cerita di dalam cerita). Menganalisis karakter para tokoh dalam hikayat akan memberikan pemahaman yang mendalam mengenai sifat kepahlawanan, kesetiaan, dan pengorbanan yang dijunjung tinggi oleh masyarakat pada masa itu. Amanat yang terkandung di dalamnya pun selalu relevan untuk dijadikan renungan, meskipun zaman terus mengalami perubahan yang pesat.\n\nDalam konteks pembelajaran sastra di sekolah, mengkaji teks hikayat memiliki peranan yang sangat penting untuk melestarikan warisan budaya nusantara yang perlahan mulai terlupakan. Para siswa tidak hanya dilatih untuk memahami struktur bahasa klasik, tetapi juga didorong untuk mampu mentransformasikan cerita hikayat ke dalam bentuk prosa modern atau karya kreatif lainnya, seperti cerpen. Proses adaptasi ini bertujuan untuk membuat nilai-nilai yang terkandung dalam hikayat menjadi lebih mudah diterima oleh generasi muda tanpa menghilangkan esensi aslinya. Melalui pendekatan yang inovatif dan relevan dengan kehidupan masa kini, teks hikayat diharapkan dapat terus hidup dan menjadi sumber inspirasi yang tidak pernah kering bagi pembentukan karakter bangsa. Pada akhirnya, menjaga kelestarian sastra klasik adalah tanggung jawab bersama demi merawat keutuhan sejarah peradaban kita.',
 tags: ['Sastra', 'Klasik', 'Budaya'],
 conclusion: 'Mempelajari teks hikayat tidak hanya mengenalkan kekayaan sastra Melayu klasik dengan bahasa arkaisnya, tetapi juga merawat nilai-nilai moral dan karakter kepahlawanan yang tetap relevan bagi pembentukan jati diri generasi muda.',
 link: '#',
 image: 'Hikayat.jpg' // <-- GANTI URL GAMBAR DI SINI
 },
 {
 id: 'artikel-bahasa-4',
 subject: 'Artikel Bahasa',
 title: 'Teks Negosiasi',
 date: '20 Agustus 2026',
 status: 'Selesai',
 teacher: 'Ibu Ruly Mediana Manurung',
 grade: 'Terbit',
 desc: 'Teks negosiasi merupakan bentuk interaksi sosial yang direkam secara tertulis atau lisan dengan tujuan utama mencapai kesepakatan antara dua pihak atau lebih yang memiliki kepentingan berbeda. Dalam dinamika kehidupan sehari-hari, negosiasi menjadi sebuah keniscayaan karena setiap individu pasti pernah menghadapi situasi tawar-menawar, baik dalam konteks jual beli, resolusi konflik, maupun perumusan kebijakan. Esensi dari sebuah negosiasi yang sukses bukanlah untuk mencari pihak yang menang telak atau kalah total, melainkan untuk menemukan jalan keluar yang saling menguntungkan (win-win solution). Oleh karena itu, mempelajari teks negosiasi sangat penting bagi para siswa agar mereka memiliki keterampilan berkomunikasi yang taktis, logis, dan persuasif. Kompetensi ini akan membekali mereka untuk menghadapi berbagai kompleksitas permasalahan sosial di masa depan dengan sikap yang elegan dan rasional.\n\nUntuk mencapai kesepakatan yang optimal, sebuah teks negosiasi harus dibangun dengan struktur percakapan yang jelas dan terarah. Secara umum, teks ini diawali dengan bagian orientasi, berupa sapaan ramah atau basa-basi pembuka yang bertujuan untuk mencairkan suasana dan membangun niat baik antarpelaku negosiasi. Setelah itu, masuklah pada tahap pengajuan dan penawaran, di mana masing-masing pihak akan menyampaikan tuntutan, argumen, serta batasan konsesi yang dapat mereka toleransi. Tahapan inilah yang menjadi inti perdebatan, karena setiap pihak harus menggunakan argumen logis untuk mempertahankan posisi mereka sembari tetap terbuka terhadap kompromi. Proses tarik ulur ini kemudian akan berujung pada bagian persetujuan, di mana kesepakatan bersama tercapai, dan diakhiri dengan penutup sebagai bentuk konfirmasi formal.\n\nDari segi kaidah kebahasaan, teks negosiasi memiliki karakteristik yang sangat khas karena mengandalkan kekuatan tuturan dialogis dan persuasif. Kalimat yang digunakan umumnya berbentuk deklaratif untuk menyampaikan fakta, interogatif untuk menanyakan penawaran, serta imperatif halus untuk memberikan saran atau arahan. Penggunaan bahasa yang santun namun tegas (asertif) sangat ditekankan agar proses tawar-menawar tidak memicu konflik emosional yang berlebihan. Konjungsi yang menyatakan syarat, seperti "jika", "apabila", dan "asalkan", sangat mendominasi percakapan karena setiap persetujuan biasanya disertai dengan kondisi tertentu yang mengikat. Selain itu, keterampilan memilih diksi (pilihan kata) yang empatik sangat diperlukan untuk menunjukkan bahwa negosiator menghargai posisi dan kebutuhan mitra bicaranya.\n\nPada akhirnya, kemampuan menyusun dan mempraktikkan teks negosiasi akan membawa dampak positif yang sangat luas bagi perkembangan kecerdasan sosial dan emosional siswa. Melalui simulasi tawar-menawar, siswa diajak untuk melatih kesabaran, mengendalikan ego, serta meningkatkan kapasitas mendengarkan secara aktif (active listening). Mereka belajar bahwa perbedaan pendapat bukanlah sebuah ancaman yang harus diperangi, melainkan realitas sosial yang dapat dijembatani melalui komunikasi yang beradab. Kemahiran dalam bernegosiasi akan membuka banyak pintu peluang kerja sama lintas sektoral, memperkuat relasi personal, dan menghindarkan generasi muda dari budaya pemaksaan kehendak. Dengan demikian, teks negosiasi bukan sekadar materi hafalan bahasa, melainkan kunci pembuka harmoni dalam kehidupan masyarakat modern yang majemuk.',
 tags: ['Negosiasi', 'Komunikasi', 'Sosial'],
 conclusion: 'Teks negosiasi mengajarkan pentingnya komunikasi persuasif dan taktis untuk mencapai kesepakatan yang menguntungkan semua pihak, membekali siswa dengan kecerdasan emosional yang vital dalam menghadapi dinamika sosial sehari-hari.',
 link: '#',
 image: 'Negosiasi.png' // <-- GANTI URL GAMBAR DI SINI
  },
  {
    id: 'artikel-bahasa-5',
    subject: 'Artikel Bahasa',
    title: 'Musikalisasi Puisi',
    date: '10 Agustus 2026',
    status: 'Selesai',
    teacher: 'Ibu Ruly Mediana Manurung',
    grade: 'Terbit',
    desc: 'Musikalisasi puisi merupakan sebuah bentuk inovasi karya seni yang memadukan keindahan bait-bait puisi dengan harmonisasi melodi musik, sehingga menciptakan ruang ekspresi emosional yang jauh lebih kaya. Jika pembacaan puisi konvensional hanya mengandalkan intonasi dan artikulasi vokal semata, musikalisasi hadir untuk mengamplifikasi makna tersirat melalui nada, ritme, dan aransemen bunyi instrumen. Kolaborasi dua medium seni yang berbeda ini bertujuan untuk menyentuh relung hati pendengar dengan cara yang lebih mendalam, syahdu, sekaligus meruntuhkan batas-batas kekakuan sastra teks. Melalui musikalisasi, sebuah puisi yang mungkin terasa berat dan sulit dipahami di atas kertas dapat bertransformasi menjadi sebuah lagu naratif yang sangat mudah dinikmati oleh khalayak luas. Oleh karena itu, seni ini menjadi salah satu metode paling ampuh untuk mempopulerkan kembali sastra di kalangan generasi muda yang gandrung akan musik.\n\nDalam proses menciptakan musikalisasi puisi yang berkualitas, terdapat beberapa tahapan krusial yang menuntut kepekaan rasa dan ketajaman interpretasi dari para seniman. Langkah pertama dan paling fundamental adalah proses pembedahan teks (interpretasi makna) untuk menemukan jiwa atau esensi dari puisi yang akan digubah. Penata musik harus memahami secara utuh apakah puisi tersebut bernuansa romantis, tragis, patriotik, atau penuh dengan renungan filosofis yang gelap. Setelah makna berhasil diidentifikasi, barulah proses penciptaan melodi dasar dan pemilihan instrumen musik yang relevan dapat dilakukan agar tidak terjadi tabrakan antara pesan kata dan suasana nada. Misalnya, puisi dengan tema kesedihan akan lebih cocok diiringi oleh petikan gitar akustik yang lambat dan minor, alih-alih menggunakan tabuhan drum yang bersemangat.\n\nHarmonisasi antara penyanyi (vokalis) dan aransemen musik juga menjadi faktor penentu keberhasilan sebuah penampilan musikalisasi puisi. Berbeda dengan penyanyi lagu pop pada umumnya, seorang pembawa musikalisasi puisi harus mampu menjaga artikulasi dan pelafalan setiap suku kata dengan sangat jelas, tanpa menghilangkan gaya teatrikal khas deklamasi. Penjedaan (pause) dan penekanan (stressing) pada bait-bait tertentu harus diselaraskan secara matematis dengan ketukan nada agar tidak merusak metrum asli dari puisi tersebut. Selain itu, musik tidak boleh mendominasi atau menenggelamkan vokal; ia harus bertindak sebagai latar belakang (backsound) yang setia membingkai dan mengiringi perjalanan emosi dari setiap diksi yang diucapkan. Keseimbangan inilah yang menjadi tantangan terberat sekaligus pencapaian tertinggi dari perpaduan seni ini.\n\nDi lingkungan sekolah, praktik musikalisasi puisi telah terbukti menjadi salah satu kegiatan yang paling dinantikan dan efektif dalam menumbuhkan minat siswa terhadap pelajaran Bahasa Indonesia. Melalui kegiatan apresiasi dan kreasi ini, siswa tidak hanya belajar menghafal karya sastra sastrawan legendaris, tetapi juga diberikan ruang kebebasan untuk berekspresi menggunakan instrumen musik favorit mereka. Kerja sama kelompok dalam mengaransemen musik, membagi peran vokal, dan merancang pertunjukan panggung akan melatih kreativitas, rasa percaya diri, serta solidaritas antar teman sebaya. Pada tingkat yang lebih tinggi, musikalisasi puisi mengajarkan generasi muda bahwa kesusastraan bukanlah peninggalan masa lalu yang usang, melainkan sebuah pusaka budaya yang selalu bisa diperbarui dan disesuaikan dengan ritme denyut kehidupan zaman yang terus berputar.',
    tags: ['Puisi', 'Musik', 'Seni'],
    conclusion: 'Musikalisasi puisi merupakan jembatan kreatif yang memadukan keindahan sastra dengan harmonisasi nada, menjadikannya medium pembelajaran yang efektif untuk mendekatkan puisi kepada generasi muda.',
    link: '#',
    image: 'Musikaliasi.jpg'
  }
];

// --- STATE MANAGEMENT ---
let filterStatusInfoVal = 'semua';
let filterStatusIndoVal = 'semua';
let currentInfoSubTab = 'tugas';
let currentBahasaSubTab = 'tugas';

// --- GREETING LOGIC ---
function setGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greeting = 'Datang';

  if (hours >= 5 && hours < 11) {
    greeting = 'Pagi';
  } else if (hours >= 11 && hours < 15) {
    greeting = 'Siang';
  } else if (hours >= 15 && hours < 18) {
    greeting = 'Sore';
  } else {
    greeting = 'Malam';
  }

  const element = document.getElementById('greeting-time');
  if (element) {
    element.textContent = greeting;
  }
}

// --- MOBILE MENU TOGGLE ---
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btnIcon = document.querySelector('#btn-mobile-menu i');
  if (menu) {
    if (!menu.classList.contains('menu-open')) {
      menu.classList.add('menu-open');
      if (btnIcon) btnIcon.className = "fa-solid fa-xmark text-xs";
    } else {
      menu.classList.remove('menu-open');
      if (btnIcon) btnIcon.className = "fa-solid fa-bars-staggered text-xs";
    }
  }
}

// --- INFORMATIKA SUB-TAB SWITCHER ---
function switchInfoSubTab(subTabId) {
  currentInfoSubTab = subTabId;
  const tugasSubview = document.getElementById('info-subview-tugas');
  const artikelSubview = document.getElementById('info-subview-artikel');
  const algoritmaSubview = document.getElementById('info-subview-algoritma');
  const btnTugas = document.getElementById('info-subtab-tugas');
  const btnArtikel = document.getElementById('info-subtab-artikel');
  const btnAlgoritma = document.getElementById('info-subtab-algoritma');

  const inactiveClass = "px-2 py-2 text-sm font-bold text-textMuted hover:text-textPrimary border-b-2 border-transparent transition-all";
  const activeClass = "px-2 py-2 text-sm font-bold text-themeAccent border-b-2 border-themeAccent transition-all";

  if (tugasSubview) { tugasSubview.classList.add('hidden'); tugasSubview.classList.remove('block'); }
  if (artikelSubview) { artikelSubview.classList.add('hidden'); artikelSubview.classList.remove('block'); }
  if (algoritmaSubview) { algoritmaSubview.classList.add('hidden'); algoritmaSubview.classList.remove('block'); }
  if (btnTugas) btnTugas.className = inactiveClass;
  if (btnArtikel) btnArtikel.className = inactiveClass;
  if (btnAlgoritma) btnAlgoritma.className = inactiveClass;

  if (subTabId === 'tugas' && tugasSubview) {
    tugasSubview.classList.remove('hidden');
    tugasSubview.classList.add('block');
    if (btnTugas) btnTugas.className = activeClass;
  } else if (subTabId === 'artikel' && artikelSubview) {
    artikelSubview.classList.remove('hidden');
    artikelSubview.classList.add('block');
    if (btnArtikel) btnArtikel.className = activeClass;
    renderArtikel();
  } else if (subTabId === 'algoritma' && algoritmaSubview) {
    algoritmaSubview.classList.remove('hidden');
    algoritmaSubview.classList.add('block');
    if (btnAlgoritma) btnAlgoritma.className = activeClass;
  }
}

// --- SKELETON LOADER SIMULATOR ---
function showSkeletons(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const skeleton = document.createElement('div');
    skeleton.className = 'premium-card rounded-xl p-5 flex flex-col justify-between h-[190px] border border-themeBorder';
    skeleton.innerHTML = `
      <div class="space-y-3.5">
        <div class="flex items-center justify-between">
          <div class="h-2 w-16 shimmer-bg rounded"></div>
          <div class="h-4 w-14 shimmer-bg rounded-full"></div>
        </div>
        <div class="space-y-2">
          <div class="h-3.5 w-5/6 shimmer-bg rounded"></div>
          <div class="h-3.5 w-1/2 shimmer-bg rounded"></div>
        </div>
        <div class="space-y-1.5 pt-1">
          <div class="h-2 w-full shimmer-bg rounded"></div>
          <div class="h-2 w-4/5 shimmer-bg rounded"></div>
        </div>
      </div>
      <div class="pt-3 border-t border-themeBorder flex items-center justify-between">
        <div class="h-5 w-16 shimmer-bg rounded"></div>
        <div class="h-3.5 w-12 shimmer-bg rounded"></div>
      </div>
    `;
    grid.appendChild(skeleton);
  }
}

// --- RENDER TASKS CARD FUNCTION ---
function renderTasks() {
  // 1. Render Dashboard Recent Tasks (Limit to 3) on index.html
  const recentListEl = document.getElementById('recent-tasks-list');
  if (recentListEl) {
    recentListEl.innerHTML = '';
    const finishedTasks = TASKS.filter(t => t.status === 'Selesai');
    const recent = finishedTasks.slice(0, 3);

    if (recent.length === 0) {
      recentListEl.innerHTML = `
      <div class="flex flex-col items-center justify-center py-10 text-center space-y-3.5 bg-surface/30 rounded-xl border border-dashed border-themeBorder p-6 animate-fade-in">
        <div class="w-12 h-12 rounded-full bg-themeAccent/10 border border-themeAccent/15 flex items-center justify-center text-themeAccent">
          <i class="fa-solid fa-clipboard-list text-lg"></i>
        </div>
        <div class="space-y-1 max-w-xs">
          <p class="text-xs font-bold text-textPrimary">Belum ada tugas selesai</p>
          <p class="text-[11px] text-textSecondary leading-normal">Selesaikan tugas di panel subjek untuk melihat aktivitas terbaru Anda di sini.</p>
        </div>
        <a href="informatika.html" class="px-3.5 py-1.5 text-[10px] font-bold text-white bg-themeAccent hover:bg-themeAccentHover rounded-lg shadow-md hover:shadow-themeAccent/20 active:scale-[0.98] transition-all duration-200">
          Mulai Tugas
        </a>
      </div>
      `;
    } else {
      recent.forEach(task => {
        const item = document.createElement('div');

        let subjIcon = 'fa-solid fa-book-open';
        let iconTheme = 'bg-blue-500/10 text-blue-500 dark:text-blue-450 border-blue-500/20';

        if (task.subject === 'Informatika') {
          subjIcon = 'fa-solid fa-code';
          iconTheme = 'bg-themeAccent/10 text-themeAccent border-themeAccent/20';
        } else if (task.subject === 'Artikel') {
          subjIcon = 'fa-solid fa-newspaper';
          iconTheme = 'bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/20';
        }

        // Determine Grade Badge styling dynamically
        let gradeStr = String(task.grade);
        let gradeBg = 'bg-themeAccent/10';
        let gradeText = 'text-themeAccent';
        let gradeBorder = 'border-themeAccent/20';

        if (gradeStr.includes('A') || (parseInt(gradeStr) >= 85)) {
          if (gradeStr.includes('-')) {
            gradeBg = 'bg-amber-500/10';
            gradeText = 'text-amber-500';
            gradeBorder = 'border-amber-500/20';
          } else {
            gradeBg = 'bg-emerald-500/10';
            gradeText = 'text-emerald-500';
            gradeBorder = 'border-emerald-500/20';
          }
        }

        item.className = 'flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-[14px] bg-card border border-themeBorder/60 hover:border-themeAccent/40 shadow-sm hover:shadow-md transition-all duration-300 gap-4 group animate-fade-in relative overflow-hidden';

        item.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-r from-white/[0.01] to-transparent pointer-events-none"></div>
        <div class="flex items-center gap-4 z-10 w-full sm:w-auto">
          <div class="w-10 h-10 rounded-xl bg-brand-red-500/10 border border-brand-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-inner">
            <i class="${subjIcon} text-[14px] text-brand-red-500"></i>
          </div>
          <div class="flex-1 min-w-0">
            <h5 class="text-xs font-bold text-textPrimary group-hover:text-themeAccent transition-colors duration-250 truncate">${task.title}</h5>
            <div class="flex items-center gap-1.5 mt-1 text-[10px] text-textMuted font-medium truncate">
              <span>${task.subject}</span>
              <span class="text-themeBorder">&bull;</span>
              <span>${task.date}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between w-full sm:w-auto gap-3 shrink-0 z-10 mt-2 sm:mt-0">
          <span class="text-[10px] font-bold px-3 py-1 rounded-lg border ${gradeBg} ${gradeText} ${gradeBorder}">Grade: ${task.grade}</span>
          <button onclick="openModal('${task.id}')" class="px-3.5 py-1.5 text-[10px] font-semibold text-textSecondary hover:text-textPrimary bg-surface border border-themeBorder hover:border-themeBorder rounded-lg transition-colors flex items-center gap-1.5 shadow-sm">
            Detail <i class="fa-solid fa-chevron-right text-[8px]"></i>
          </button>
        </div>
        `;
        recentListEl.appendChild(item);
      });
    }
  }

  // 2. Render statistics on dashboard index.html
  updateDashboardStats();
}

function updateDashboardStats() {
  const totalEl = document.getElementById('stat-total');
  if (!totalEl) return; // Not on dashboard page
 const completedEl = document.getElementById('stat-completed');
 const progressEl = document.getElementById('stat-progress');
 const avgGradeEl = document.getElementById('stat-avg-grade');

 const circle = document.getElementById('progress-circle');
 const percentageText = document.getElementById('progress-percentage-text');
 const tasksText = document.getElementById('progress-tasks-text');

 // Filter tasks out of articles
 const realTasks = TASKS.filter(t => t.subject !== 'Artikel');
 const completedTasks = realTasks.filter(t => t.status === 'Selesai');
 const inProgressTasks = realTasks.filter(t => t.status === 'Dalam Pengerjaan');

 const total = realTasks.length;
 const completed = completedTasks.length;
 const progress = inProgressTasks.length;

 totalEl.textContent = total;
 completedEl.textContent = completed;
 progressEl.textContent = progress;

 // Calculate average grade
 let sum = 0;
 let count = 0;
 completedTasks.forEach(t => {
 if (t.grade && t.grade.includes('/')) {
 const val = parseFloat(t.grade.split('/')[0]);
 if (!isNaN(val)) {
 sum += val;
 count++;
 }
 }
 });
 const avg = count > 0 ? (sum / count).toFixed(1) : '0.0';
 avgGradeEl.textContent = avg;

 // Update Progress Ring
 const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
 if (percentageText) percentageText.textContent = `${percentage}%`;
 if (tasksText) tasksText.textContent = `${completed} dari ${total} tugas selesai`;

 if (circle) {
 const radius = circle.r.baseVal.value;
 const circumference = 2 * Math.PI * radius;
 const offset = circumference - (percentage / 100) * circumference;
 circle.style.strokeDasharray = `${circumference} ${circumference}`;
 circle.style.strokeDashoffset = offset;
 }

 // Update Category Breakdown (Subject Bars)
 const infoCountEl = document.getElementById('subject-info-count');
 const infoBar = document.getElementById('subject-info-bar');
 const indoCountEl = document.getElementById('subject-indo-count');
 const indoBar = document.getElementById('subject-indo-bar');

 const infoTotal = TASKS.filter(t => t.subject === 'Informatika').length;
 const indoTotal = TASKS.filter(t => t.subject === 'Bahasa Indonesia').length;

 if (infoCountEl) infoCountEl.textContent = `${infoTotal} Tugas`;
 if (indoCountEl) indoCountEl.textContent = `${indoTotal} Tugas`;

 const maxTasks = Math.max(infoTotal, indoTotal, 1);
 if (infoBar) infoBar.style.width = `${(infoTotal / maxTasks) * 100}%`;
 if (indoBar) indoBar.style.width = `${(indoTotal / maxTasks) * 100}%`;
}

// --- RENDER ARTICLES FOR INFORMATIKA ---
function renderArtikel() {
 const gridEl = document.getElementById('grid-artikel');
 if (!gridEl) return;
 gridEl.innerHTML = '';

 const articles = TASKS.filter(t => t.subject === 'Artikel');

 if (articles.length === 0) {
 gridEl.innerHTML = `
 <div class="col-span-full text-center py-8 text-xs text-textMuted">
 Belum ada artikel dipublikasikan.
 </div>
 `;
 return;
 }

 articles.forEach(art => {
 const imgSrc = art.image || `https://picsum.photos/seed/${art.id}/600/300`;
 const imageHtml = `
 <div class="-mx-5 -mt-5 sm:-mx-6 sm:-mt-6 mb-4 h-36 overflow-hidden relative border-b border-themeBorder">
 <img src="${imgSrc}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="${art.title}">
 </div>
 `;

 const card = document.createElement('div');
 card.className = 'premium-card rounded-xl p-5 flex flex-col justify-between hover:border-themeAccent/30 hover:shadow-lg hover:shadow-themeAccent/5 dark:hover:shadow-themeAccent/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group animate-fade-in ';
 card.innerHTML = `
 <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-600 to-amber-500 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
 <div class="flex flex-col h-full z-0 relative">
 ${imageHtml}
 <div class="space-y-3.5 flex-1">
 <div class="flex items-center justify-between">
 <div class="flex items-center gap-1.5 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
 <i class="fa-solid fa-newspaper text-[9px]"></i>
 <span>Artikel</span>
 </div>
 <span class="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-blue-500/10 text-blue-650 dark:text-blue-400 border border-blue-500/20">Publik</span>
 </div>
 <div>
 <h4 class="font-display font-extrabold text-sm sm:text-base text-textPrimary group-hover:text-themeAccent transition-colors duration-250 mt-1 line-clamp-2 leading-snug cursor-pointer" onclick="openModal('${art.id}')">
 ${art.title}
 </h4>
 <span class="inline-flex items-center gap-1 text-[9px] text-textMuted font-semibold mt-1">
 <i class="fa-regular fa-calendar text-[8px]"></i>
 Rilis: ${art.date}
 </span>
 <p class="text-xs text-textSecondary mt-2 line-clamp-3 leading-relaxed font-light">
 ${art.desc}
 </p>
 </div>
 <div class="flex flex-wrap gap-1.5 pt-1">
 ${art.tags.map(tag => `<span class="px-1.5 py-0.5 text-[9px] font-medium bg-surface text-textSecondary border border-themeBorder rounded">${tag}</span>`).join('')}
 </div>
 </div>
 </div>

 <div class="mt-4 pt-3 border-t border-themeBorder flex items-center justify-between">
 <div class="flex flex-col">
 <span class="text-[8px] uppercase tracking-wider font-bold text-textMuted">Status</span>
 <span class="text-xs font-black text-amber-500">${art.grade}</span>
 </div>
 <button onclick="openModal('${art.id}')" class="px-2.5 py-1.5 text-[10px] font-bold text-textSecondary hover:text-white hover:bg-themeAccent bg-surface border border-themeBorder hover:border-themeAccent rounded-lg transition-all duration-200 flex items-center gap-1">
 Baca <i class="fa-solid fa-chevron-right text-[8px]"></i>
 </button>
 </div>
 `;
 gridEl.appendChild(card);
 });
}

// --- BAHASA INDONESIA SUB-TAB SWITCHER ---
function switchBahasaSubTab(subTabId) {
 currentBahasaSubTab = subTabId;
 const tugasSubview = document.getElementById('bahasa-subview-tugas');
 const artikelSubview = document.getElementById('bahasa-subview-artikel');
 const btnTugas = document.getElementById('bahasa-subtab-tugas');
 const btnArtikel = document.getElementById('bahasa-subtab-artikel');

 if (tugasSubview && artikelSubview && btnTugas && btnArtikel) {
 tugasSubview.classList.add('hidden');
 tugasSubview.classList.remove('block');
 artikelSubview.classList.add('hidden');
 artikelSubview.classList.remove('block');

 btnTugas.className = "px-2 py-2 text-sm font-bold text-textMuted hover:text-textPrimary border-b-2 border-transparent transition-all";
 btnArtikel.className = "px-2 py-2 text-sm font-bold text-textMuted hover:text-textPrimary border-b-2 border-transparent transition-all";

 if (subTabId === 'tugas') {
 tugasSubview.classList.remove('hidden');
 tugasSubview.classList.add('block');
 btnTugas.className = "px-2 py-2 text-sm font-bold text-themeAccent border-b-2 border-themeAccent transition-all";
 } else if (subTabId === 'artikel') {
 artikelSubview.classList.remove('hidden');
 artikelSubview.classList.add('block');
 btnArtikel.className = "px-2 py-2 text-sm font-bold text-themeAccent border-b-2 border-themeAccent transition-all";
 renderArtikelBahasa();
 }
 }
}

// --- RENDER ARTICLES FOR BAHASA INDONESIA ---
function renderArtikelBahasa() {
 const gridEl = document.getElementById('grid-artikel-bahasa');
 if (!gridEl) return;
 gridEl.innerHTML = '';

 const articles = TASKS.filter(t => t.subject === 'Artikel Bahasa');

 if (articles.length === 0) {
 gridEl.innerHTML = `
 <div class="col-span-full text-center py-8 text-xs text-textMuted">
 Belum ada artikel dipublikasikan.
 </div>
 `;
 return;
 }

 articles.forEach(art => {
 const imgSrc = art.image || `https://picsum.photos/seed/${art.id}/600/300`;
 const imageHtml = `
 <div class="-mx-5 -mt-5 sm:-mx-6 sm:-mt-6 mb-4 h-36 overflow-hidden relative border-b border-themeBorder">
 <img src="${imgSrc}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="${art.title}">
 </div>
 `;

 const card = document.createElement('div');
 card.className = 'premium-card rounded-xl p-5 flex flex-col justify-between hover:border-themeAccent/30 hover:shadow-lg hover:shadow-themeAccent/5 dark:hover:shadow-themeAccent/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group animate-fade-in ';
 card.innerHTML = `
 <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-blue-500 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
 <div class="flex flex-col h-full z-0 relative">
 ${imageHtml}
 <div class="space-y-3.5 flex-1">
 <div class="flex items-center justify-between">
 <div class="flex items-center gap-1.5 text-blue-500 text-[10px] font-bold uppercase tracking-wider">
 <i class="fa-solid fa-newspaper text-[9px]"></i>
 <span>Artikel</span>
 </div>
 <span class="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">Publik</span>
 </div>
 <div>
 <h4 class="font-display font-extrabold text-sm sm:text-base text-textPrimary group-hover:text-themeAccent transition-colors duration-250 mt-1 line-clamp-2 leading-snug cursor-pointer" onclick="openModal('${art.id}')">
 ${art.title}
 </h4>
 <span class="inline-flex items-center gap-1 text-[9px] text-textMuted font-semibold mt-1">
 <i class="fa-regular fa-calendar text-[8px]"></i>
 Rilis: ${art.date}
 </span>
 <p class="text-xs text-textSecondary mt-2 line-clamp-3 leading-relaxed font-light">
 ${art.desc}
 </p>
 </div>
 <div class="flex flex-wrap gap-1.5 pt-1">
 ${art.tags.map(tag => `<span class="px-1.5 py-0.5 text-[9px] font-medium bg-surface text-textSecondary border border-themeBorder rounded">${tag}</span>`).join('')}
 </div>
 </div>
 </div>
 <div class="mt-4 pt-3 border-t border-themeBorder flex items-center justify-between">
 <div class="flex flex-col">
 <span class="text-[8px] uppercase tracking-wider font-bold text-textMuted">Status</span>
 <span class="text-xs font-black text-blue-500">${art.grade}</span>
 </div>
 <button onclick="openModal('${art.id}')" class="px-2.5 py-1.5 text-[10px] font-bold text-textSecondary hover:text-white hover:bg-themeAccent bg-surface border border-themeBorder hover:border-themeAccent rounded-lg transition-all duration-200 flex items-center gap-1">
 Baca <i class="fa-solid fa-chevron-right text-[8px]"></i>
 </button>
 </div>
 `;
 gridEl.appendChild(card);
 });
}

// --- FILTER INFORMATIKA TASKS ---
function filterInformatika() {
 const searchInput = document.getElementById('search-info');
 if (!searchInput) return;

 const query = searchInput.value.toLowerCase();
 const gridEl = document.getElementById('grid-informatika');
 if (!gridEl) return;

 

 gridEl.innerHTML = '';

 const filtered = TASKS.filter(t => {
 if (t.subject !== 'Informatika') return false;
 if (filterStatusInfoVal !== 'semua' && t.status !== filterStatusInfoVal) return false;
 return t.title.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query) || t.tags.some(tag => tag.toLowerCase().includes(query));
 });

 if (filtered.length === 0) {
 gridEl.innerHTML = `
 <div class="col-span-full flex flex-col items-center justify-center py-12 text-center space-y-4 bg-surface rounded-xl border border-dashed border-themeBorder p-6 animate-fade-in">
 <div class="w-12 h-12 rounded-full bg-themeAccent/10 border border-themeAccent/15 flex items-center justify-center text-themeAccent">
 <i class="fa-solid fa-folder-open text-lg"></i>
 </div>
 <div class="space-y-1 max-w-xs">
 <p class="text-xs font-bold text-textPrimary">Tugas Tidak Ditemukan</p>
 <p class="text-[11px] text-textSecondary leading-normal">Kami tidak dapat menemukan tugas yang cocok dengan filter atau kata kunci pencarian Anda.</p>
 </div>
 <button onclick="resetInformatikaFilters()" class="px-3.5 py-1.5 text-[10px] font-bold text-textSecondary bg-surface border border-themeBorder text-textSecondary hover:border-themeAccent hover:text-themeAccent rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98]">
 Reset Filter & Pencarian
 </button>
 </div>
 `;
 return;
 }

 filtered.forEach(task => {
 gridEl.appendChild(createTaskCard(task));
 });
}

// --- FILTER BAHASA INDONESIA TASKS ---
function filterIndo() {
 const searchInput = document.getElementById('search-indo');
 if (!searchInput) return;

 const query = searchInput.value.toLowerCase();
 const gridEl = document.getElementById('grid-indo');
 if (!gridEl) return;

 

 gridEl.innerHTML = '';

 const filtered = TASKS.filter(t => {
 if (t.subject !== 'Bahasa Indonesia') return false;
 if (filterStatusIndoVal !== 'semua' && t.status !== filterStatusIndoVal) return false;
 return t.title.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query) || t.tags.some(tag => tag.toLowerCase().includes(query));
 });

 if (filtered.length === 0) {
 gridEl.innerHTML = `
 <div class="col-span-full flex flex-col items-center justify-center py-12 text-center space-y-4 bg-surface rounded-xl border border-dashed border-themeBorder p-6 animate-fade-in">
 <div class="w-12 h-12 rounded-full bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-500 dark:text-blue-400">
 <i class="fa-solid fa-folder-open text-lg"></i>
 </div>
 <div class="space-y-1 max-w-xs">
 <p class="text-xs font-bold text-textPrimary">Tugas Tidak Ditemukan</p>
 <p class="text-[11px] text-textSecondary leading-normal">Kami tidak dapat menemukan tugas yang cocok dengan filter atau kata kunci pencarian Anda.</p>
 </div>
 <button onclick="resetIndoFilters()" class="px-3.5 py-1.5 text-[10px] font-bold text-textSecondary bg-surface border border-themeBorder text-textSecondary hover:border-themeAccent hover:text-themeAccent rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98]">
 Reset Filter & Pencarian
 </button>
 </div>
 `;
 return;
 }

 filtered.forEach(task => {
 gridEl.appendChild(createTaskCard(task));
 });
}

// --- RESET FILTERS ---
function resetInformatikaFilters() {
 const searchInput = document.getElementById('search-info');
 if (searchInput) searchInput.value = '';
 filterStatusInfo('semua');
}

function resetIndoFilters() {
 const searchInput = document.getElementById('search-indo');
 if (searchInput) searchInput.value = '';
 filterStatusIndo('semua');
}

// --- HELPER: CREATE TASK CARD ELEMENT ---
function createTaskCard(task) {
 const card = document.createElement('div');
 card.className = 'premium-card task-card rounded-xl p-5 flex flex-col justify-between hover:border-themeAccent/30 hover:shadow-lg hover:shadow-themeAccent/5 dark:hover:shadow-themeAccent/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group animate-fade-in';

 let accentBarColor = 'from-blue-600 to-blue-500';
 let subjIcon = 'fa-solid fa-book';
 let textSubj = 'B. Indonesia';
 let subjColor = 'text-blue-500 dark:text-blue-400';

 if (task.subject === 'Informatika') {
 accentBarColor = 'from-themeAccent to-themeAccentHover';
 subjIcon = 'fa-solid fa-code';
 textSubj = 'Informatika';
 subjColor = 'text-themeAccent';
 } else if (task.subject === 'Artikel') {
 accentBarColor = 'from-amber-600 to-amber-500';
 subjIcon = 'fa-solid fa-newspaper';
 textSubj = 'Artikel';
 subjColor = 'text-amber-500';
 }

 const statusBadge = task.status === 'Selesai'
 ? `<span class="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>Selesai</span>`
 : `<span class="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></span>Proses</span>`;

 const tagsHtml = task.tags.slice(0, 3).map(tag => `<span class="px-1.5 py-0.5 text-[9px] font-medium bg-surface text-textSecondary border border-themeBorder rounded transition-colors group-hover:border-themeAccent/10">${tag}</span>`).join('');

 let gradeHtml = task.status === 'Selesai'
 ? `<div class="flex flex-col"><span class="text-[8px] uppercase tracking-wider font-bold text-textSecondary">Nilai Akhir</span><span class="text-xs font-bold text-themeAccent">${task.grade}</span></div>`
 : `<div class="flex flex-col"><span class="text-[8px] uppercase tracking-wider font-bold text-textSecondary">Nilai Akhir</span><span class="text-xs font-semibold text-textSecondary italic">Belum Ada</span></div>`;

 const isArtikel = task.subject.includes('Artikel') || task.title.includes('Artikel');
 let imageHtml = '';
 if (isArtikel) {
 const imgSrc = task.image || `https://picsum.photos/seed/${task.id}/600/300`;
 imageHtml = `
 <div class="-mx-5 -mt-5 sm:-mx-6 sm:-mt-6 mb-4 h-36 overflow-hidden relative border-b border-themeBorder">
 <img src="${imgSrc}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="${task.title}">
 </div>
 `;
 }

 card.innerHTML = `
 <!-- Subtle hover accent top bar -->
 <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accentBarColor} z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

 <div class="flex flex-col h-full z-0 relative">
 ${imageHtml}
 <div class="space-y-3.5 flex-1">
 <div class="flex items-center justify-between">
 <div class="flex items-center gap-1.5 ${subjColor} text-[10px] font-bold uppercase tracking-wider">
 <i class="${subjIcon} text-[9px]"></i>
 <span>${textSubj}</span>
 </div>
 ${statusBadge}
 </div>
 <div>
 <h4 class="font-display font-extrabold text-sm sm:text-base text-textPrimary group-hover:text-themeAccent dark:group-hover:text-themeAccent transition-colors duration-250 mt-1 line-clamp-2 leading-snug cursor-pointer" onclick="openModal('${task.id}')">
 ${task.title}
 </h4>
 <span class="inline-flex items-center gap-1 text-[9px] text-textMuted font-semibold mt-1">
 <i class="fa-regular fa-calendar text-[8px]"></i>
 Batas: ${task.date}
 </span>
 <p class="text-xs text-textSecondary mt-2 line-clamp-3 leading-relaxed font-light">
 ${task.desc}
 </p>
 </div>
 <!-- Tags list -->
 <div class="flex flex-wrap gap-1.5 pt-1">
 ${tagsHtml}
 </div>
 </div>

 <div class="mt-4 pt-3 border-t border-themeBorder flex items-center justify-between">
 ${gradeHtml}
 <button onclick="openModal('${task.id}')" class="px-2.5 py-1.5 text-[10px] font-bold text-textSecondary hover:text-white hover:bg-themeAccent bg-surface border border-themeBorder hover:border-themeAccent rounded-lg transition-all duration-200 flex items-center gap-1">
 Detail <i class="fa-solid fa-chevron-right text-[8px]"></i>
 </button>
 </div>
 </div>
 `;
 return card;
}

// --- TAB FILTER BUTTON TOGGLES ---
function filterStatusInfo(status) {
 filterStatusInfoVal = status;

 document.querySelectorAll('[id^="btn-info-"]').forEach(btn => {
 btn.className = "px-3 py-1.5 text-xs font-semibold rounded-lg bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all shrink-0";
 });

 const activeMap = {
 'semua': 'btn-info-all',
 'Selesai': 'btn-info-selesai',
 'Dalam Pengerjaan': 'btn-info-progress'
 };

 const activeBtn = document.getElementById(activeMap[status]);
 if (activeBtn) {
 activeBtn.className = "px-3 py-1.5 text-xs font-semibold rounded-lg bg-themeAccent text-white border border-themeAccent transition-all shrink-0";
 }

 showSkeletons('grid-informatika');
 setTimeout(() => {
 filterInformatika();
 }, 350);
}

// --- TAB FILTER BUTTON TOGGLES FOR INDONESIAN ---
function filterStatusIndo(status) {
 filterStatusIndoVal = status;

 document.querySelectorAll('[id^="btn-indo-"]').forEach(btn => {
 btn.className = "px-3 py-1.5 text-xs font-semibold rounded-lg bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all shrink-0";
 });

 const activeMap = {
 'semua': 'btn-indo-all',
 'Selesai': 'btn-indo-selesai',
 'Dalam Pengerjaan': 'btn-indo-progress'
 };

 const activeBtn = document.getElementById(activeMap[status]);
 if (activeBtn) {
 activeBtn.className = "px-3 py-1.5 text-xs font-semibold rounded-lg bg-themeAccent text-white border border-themeAccent transition-all shrink-0";
 }

 showSkeletons('grid-indo');
 setTimeout(() => {
 filterIndo();
 }, 350);
}

// --- DETAIL MODAL CONTROLS ---
function openModal(id) {
 const task = TASKS.find(t => t.id === id);
 if (!task) return;

 const modalSubj = document.getElementById('modal-subject');
 if (modalSubj) {
 modalSubj.textContent = task.subject;
 if (task.subject === 'Informatika') {
 modalSubj.className = "text-[10px] font-bold text-themeAccent uppercase tracking-widest px-2.5 py-1 rounded-md bg-themeAccent/10 border border-themeAccent/20";
 } else {
 modalSubj.className = "text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20";
 }
 }

 const modalTitle = document.getElementById('modal-title');
 if (modalTitle) modalTitle.textContent = task.title;

 const statusEl = document.getElementById('modal-status');
 if (statusEl) {
 statusEl.textContent = task.status;
 if (task.status === 'Selesai') {
 statusEl.className = "inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20";
 } else {
 statusEl.className = "inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20";
 }
 }

 const modalDate = document.getElementById('modal-date');
 if (modalDate) modalDate.textContent = task.date;

 const modalTeacher = document.getElementById('modal-teacher');
 if (modalTeacher) modalTeacher.textContent = task.teacher;

 const gradeEl = document.getElementById('modal-grade');
 if (gradeEl) {
 gradeEl.textContent = task.grade;
 if (task.status === 'Selesai') {
 gradeEl.className = "mt-2 text-sm text-themeAccent font-bold";
 } else {
 gradeEl.className = "mt-2 text-sm text-textSecondary font-medium italic";
 }
 }

 const isArtikel = task.subject.includes('Artikel') || task.title.includes('Artikel');

 const imgContainer = document.getElementById('modal-image-container');
 const imgElement = document.getElementById('modal-image');
 if (imgContainer && imgElement) {
 if (isArtikel) {
 // Use picsum photos placeholder with seed based on task id for consistent images
 imgElement.src = task.image || `https://picsum.photos/seed/${task.id}/800/400`;
 imgContainer.classList.remove('hidden');
 } else {
 imgContainer.classList.add('hidden');
 }
 }

 const modalDescTitle = document.getElementById('modal-desc-title');
 if (modalDescTitle) {
 modalDescTitle.textContent = isArtikel ? 'Isi Artikel' : 'Deskripsi Tugas';
 }

 const modalDesc = document.getElementById('modal-desc');
 if (modalDesc) {
 if (isArtikel) {
 modalDesc.innerHTML = task.desc.split('\n\n').map(p => `<p>${p}</p>`).join('');
 } else {
 modalDesc.innerHTML = `<p>${task.desc}</p>`;
 }
 }

 const conclusionSection = document.getElementById('modal-conclusion-section');
 const conclusionEl = document.getElementById('modal-conclusion');
 if (conclusionSection && conclusionEl) {
 if (task.conclusion) {
 conclusionEl.textContent = task.conclusion;
 conclusionSection.classList.remove('hidden');
 } else {
 conclusionSection.classList.add('hidden');
 }
 }

 // Tags rendering
 const tagsEl = document.getElementById('modal-tags');
 const tagsSection = document.getElementById('modal-tags-section');
 if (tagsEl && tagsSection) {
 tagsEl.innerHTML = '';
 if (task.tags && task.tags.length > 0) {
 tagsSection.style.display = 'block';
 task.tags.forEach(tag => {
 const badge = document.createElement('span');
 badge.className = "text-[9px] bg-surface border border-themeBorder text-textSecondary px-2 py-0.5 rounded-md";
 badge.textContent = tag;
 tagsEl.appendChild(badge);
 });
 } else {
 tagsSection.style.display = 'none';
 }
 }

 // External link button
 const linkBtn = document.getElementById('modal-link');
 if (linkBtn) {
 if (task.link && task.link !== '#') {
 linkBtn.href = task.link;
 linkBtn.style.display = 'inline-flex';
 } else {
 linkBtn.style.display = 'none';
 }
 }

 // Toggle modal visibility animations
 const modal = document.getElementById('task-modal');
 if (modal) {
 modal.classList.remove('hidden');
 setTimeout(() => {
 modal.classList.remove('opacity-0');
 modal.querySelector('.modal-container').classList.remove('scale-95');
 modal.querySelector('.modal-container').classList.add('scale-100');
 }, 50);
 }
}

// --- CLOSE MODAL ---
function closeModal() {
 const modal = document.getElementById('task-modal');
 if (modal) {
 modal.classList.add('opacity-0');
 modal.querySelector('.modal-container').classList.remove('scale-100');
 modal.querySelector('.modal-container').classList.add('scale-95');

 setTimeout(() => {
 modal.classList.add('hidden');
 }, 300);
 }
}

// --- THEME TOGGLE LOGIC ---
function toggleTheme() {
 const doc = document.documentElement;
 if (doc.classList.contains('dark')) {
 doc.classList.remove('dark');
 localStorage.setItem('theme', 'light');
 } else {
 doc.classList.add('dark');
 localStorage.setItem('theme', 'dark');
 }
}

// --- MAPEL CATEGORY CONFIG ---
const CATEGORIES = {
 Matematika: { name: 'Matematika', bg: 'bg-red-500/10', text: 'text-red-500', darkBg: 'dark:bg-red-500/15', darkText: 'dark:text-red-400', rowBg: 'bg-red-500/5 dark:bg-red-500/10', catBg: 'bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400', catDot: 'bg-red-500' },
 Teknologi: { name: 'Teknologi', bg: 'bg-blue-500/10', text: 'text-blue-500', darkBg: 'dark:bg-blue-500/15', darkText: 'dark:text-blue-400', rowBg: 'bg-blue-500/5 dark:bg-blue-500/10', catBg: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400', catDot: 'bg-blue-500' },
 Bahasa: { name: 'Bahasa', bg: 'bg-emerald-500/10', text: 'text-emerald-500', darkBg: 'dark:bg-emerald-500/15', darkText: 'dark:text-emerald-400', rowBg: 'bg-emerald-500/5 dark:bg-emerald-500/10', catBg: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400', catDot: 'bg-emerald-500' },
 Sains: { name: 'Sains', bg: 'bg-purple-500/10', text: 'text-purple-500', darkBg: 'dark:bg-purple-500/15', darkText: 'dark:text-purple-400', rowBg: 'bg-purple-500/5 dark:bg-purple-500/10', catBg: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400', catDot: 'bg-purple-500' },
 IPS: { name: 'IPS', bg: 'bg-orange-500/10', text: 'text-orange-500', darkBg: 'dark:bg-orange-500/15', darkText: 'dark:text-orange-400', rowBg: 'bg-orange-500/5 dark:bg-orange-500/10', catBg: 'bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400', catDot: 'bg-orange-500' },
 Agama: { name: 'Agama', bg: 'bg-pink-500/10', text: 'text-pink-500', darkBg: 'dark:bg-pink-500/15', darkText: 'dark:text-pink-400', rowBg: 'bg-pink-500/5 dark:bg-pink-500/10', catBg: 'bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400', catDot: 'bg-pink-500' },
 Olahraga: { name: 'Olahraga', bg: 'bg-cyan-500/10', text: 'text-cyan-500', darkBg: 'dark:bg-cyan-500/15', darkText: 'dark:text-cyan-400', rowBg: 'bg-cyan-500/5 dark:bg-cyan-500/10', catBg: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400', catDot: 'bg-cyan-500' },
 Seni: { name: 'Seni', bg: 'bg-yellow-500/10', text: 'text-yellow-500', darkBg: 'dark:bg-yellow-500/15', darkText: 'dark:text-yellow-400', rowBg: 'bg-yellow-500/5 dark:bg-yellow-500/10', catBg: 'bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400', catDot: 'bg-yellow-500' },
 Lainnya: { name: 'Lainnya', bg: 'bg-slate-500/10', text: 'text-slate-500', darkBg: 'dark:bg-slate-500/15', darkText: 'dark:text-slate-400', rowBg: 'bg-slate-500/5 dark:bg-slate-500/10', catBg: 'bg-slate-500/10 text-slate-600 dark:bg-slate-500/20 dark:text-slate-400', catDot: 'bg-slate-500' }
};

const MAPEL_ICONS = {
 'Matematika': { icon: 'fa-solid fa-calculator', cat: 'Matematika' },
 'MAT Wajib': { icon: 'fa-solid fa-calculator', cat: 'Matematika' },
 'MAT WAJIB': { icon: 'fa-solid fa-calculator', cat: 'Matematika' },
 'Informatika': { icon: 'fa-solid fa-laptop-code', cat: 'Teknologi' },
 'FORMATIK': { icon: 'fa-solid fa-laptop-code', cat: 'Teknologi' },
 'Bahasa Indonesia': { icon: 'fa-solid fa-book-open', cat: 'Bahasa' },
 'MANDARIN': { icon: 'fa-solid fa-language', cat: 'Bahasa' },
 'Mandarin': { icon: 'fa-solid fa-language', cat: 'Bahasa' },
 'INGGRIS': { icon: 'fa-solid fa-comment-dots', cat: 'Bahasa' },
 'Inggris': { icon: 'fa-solid fa-comment-dots', cat: 'Bahasa' },
 'KIMIA': { icon: 'fa-solid fa-flask', cat: 'Sains' },
 'Kimia': { icon: 'fa-solid fa-flask', cat: 'Sains' },
 'Fisika': { icon: 'fa-solid fa-atom', cat: 'Sains' },
 'FISIKA': { icon: 'fa-solid fa-atom', cat: 'Sains' },
 'Biologi': { icon: 'fa-solid fa-leaf', cat: 'Sains' },
 'BIOLOGI': { icon: 'fa-solid fa-leaf', cat: 'Sains' },
 'Sosiologi': { icon: 'fa-solid fa-globe', cat: 'IPS' },
 'SOSIOLOGI': { icon: 'fa-solid fa-globe', cat: 'IPS' },
 'PKN': { icon: 'fa-solid fa-landmark', cat: 'IPS' },
 'Pancasila': { icon: 'fa-solid fa-landmark', cat: 'IPS' },
 'Geografi': { icon: 'fa-solid fa-earth-americas', cat: 'IPS' },
 'GEOGRAFI': { icon: 'fa-solid fa-earth-americas', cat: 'IPS' },
 'SEJARAH': { icon: 'fa-solid fa-scroll', cat: 'IPS' },
 'Sejarah': { icon: 'fa-solid fa-scroll', cat: 'IPS' },
 'Ekonomi': { icon: 'fa-solid fa-wallet', cat: 'IPS' },
 'EKONOMI': { icon: 'fa-solid fa-wallet', cat: 'IPS' },
 'AGAMA': { icon: 'fa-solid fa-hands-praying', cat: 'Agama' },
 'Budi Pekerti': { icon: 'fa-solid fa-heart', cat: 'Agama' },
 'Budaya Humanis': { icon: 'fa-solid fa-heart', cat: 'Agama' },
 'HUMANIORA': { icon: 'fa-solid fa-heart', cat: 'Agama' },
 'PJOK': { icon: 'fa-solid fa-dumbbell', cat: 'Olahraga' },
 'ENI BUDAY': { icon: 'fa-solid fa-palette', cat: 'Seni' },
 'Seni Budaya': { icon: 'fa-solid fa-palette', cat: 'Seni' },
 'Perwalian/Upacara': { icon: 'fa-solid fa-users', cat: 'Lainnya' },
 'Perwalian': { icon: 'fa-solid fa-users', cat: 'Lainnya' },
 'KONSELIN': { icon: 'fa-solid fa-comments', cat: 'Lainnya' },
   'Kokurikuler': { icon: 'fa-solid fa-layer-group', cat: 'Lainnya' },
  'Pembiasaan': { icon: 'fa-solid fa-sun', cat: 'Lainnya' },
  'PEMBIASAAN': { icon: 'fa-solid fa-sun', cat: 'Lainnya' },
  'PEMBIASAAN AWAL': { icon: 'fa-solid fa-sun', cat: 'Lainnya' },
  'Pembiasaan Jumat': { icon: 'fa-solid fa-sun', cat: 'Lainnya' },
  'PEMBIASAAN JUMAT': { icon: 'fa-solid fa-sun', cat: 'Lainnya' },
  'PKWU': { icon: 'fa-solid fa-lightbulb', cat: 'Teknologi' },
};

function getMapelIcon(mapel) {
 const item = MAPEL_ICONS[mapel] || { icon: 'fa-solid fa-book', cat: 'Lainnya' };
 const catConfig = CATEGORIES[item.cat] || CATEGORIES.Lainnya;
 return {
 icon: item.icon,
 ...catConfig
 };
}

// --- GURU COLOR PALETTE (unique colors per guru kode) ---
const GURU_COLORS = [
 { bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.25)', text: '#10b981', dot: '#10b981' }, // emerald
 { bg: 'rgba(59, 130, 246, 0.08)', border: 'rgba(59, 130, 246, 0.25)', text: '#3b82f6', dot: '#3b82f6' }, // blue
 { bg: 'rgba(168, 85, 247, 0.08)', border: 'rgba(168, 85, 247, 0.25)', text: '#a855f7', dot: '#a855f7' }, // purple
 { bg: 'rgba(245, 158, 11, 0.08)', border: 'rgba(245, 158, 11, 0.25)', text: '#f59e0b', dot: '#f59e0b' }, // amber
 { bg: 'rgba(236, 72, 153, 0.08)', border: 'rgba(236, 72, 153, 0.25)', text: '#ec4899', dot: '#ec4899' }, // pink
 { bg: 'rgba(6, 182, 212, 0.08)', border: 'rgba(6, 182, 212, 0.25)', text: '#06b6d4', dot: '#06b6d4' }, // cyan
 { bg: 'rgba(249, 115, 22, 0.08)', border: 'rgba(249, 115, 22, 0.25)', text: '#f97316', dot: '#f97316' }, // orange
 { bg: 'rgba(99, 102, 241, 0.08)', border: 'rgba(99, 102, 241, 0.25)', text: '#6366f1', dot: '#6366f1' }, // indigo
 { bg: 'rgba(34, 197, 94, 0.08)', border: 'rgba(34, 197, 94, 0.25)', text: '#22c55e', dot: '#22c55e' }, // green
 { bg: 'rgba(244, 63, 94, 0.08)', border: 'rgba(244, 63, 94, 0.25)', text: '#f43f5e', dot: '#f43f5e' }, // rose
 { bg: 'rgba(14, 165, 233, 0.08)', border: 'rgba(14, 165, 233, 0.25)', text: '#0ea5e9', dot: '#0ea5e9' }, // sky
 { bg: 'rgba(132, 204, 22, 0.08)', border: 'rgba(132, 204, 22, 0.25)', text: '#84cc16', dot: '#84cc16' }, // lime
 { bg: 'rgba(217, 70, 239, 0.08)', border: 'rgba(217, 70, 239, 0.25)', text: '#d946ef', dot: '#d946ef' }, // fuchsia
 { bg: 'rgba(20, 184, 166, 0.08)', border: 'rgba(20, 184, 166, 0.25)', text: '#14b8a6', dot: '#14b8a6' }, // teal
 { bg: 'rgba(251, 146, 60, 0.08)', border: 'rgba(251, 146, 60, 0.25)', text: '#fb923c', dot: '#fb923c' }, // orange-light
];

function getGuruColor(kode) {
 if (!kode && kode !== 0) return GURU_COLORS[0];
 const idx = (typeof kode === 'number' ? kode : parseInt(kode, 10) || 0) % GURU_COLORS.length;
 return GURU_COLORS[idx];
}

const GURU_DATA = [
  { kode: 1, nama: 'Adi Kristanto' },
  { kode: 2, nama: 'Agus Salim' },
  { kode: 3, nama: 'Cornel Kaban' },
  { kode: 4, nama: 'Debie Lola' },
  { kode: 5, nama: 'Diyana' },
  { kode: 6, nama: 'Feby Unggul' },
  { kode: 7, nama: 'Ihsan Arif P' },
  { kode: 8, nama: 'Intan Dwi Apriliani' },
  { kode: 9, nama: 'Iriwaty Japutra' },
  { kode: 10, nama: 'Jeffry Copryy YH' },
  { kode: 11, nama: 'Katarina' },
  { kode: 12, nama: 'Mardji' },
  { kode: 13, nama: 'Mulyawan' },
  { kode: 14, nama: 'Nur Fajar Sidik' },
  { kode: 15, nama: 'Purwanto' },
  { kode: 16, nama: 'Rina M. Yoniton' },
  { kode: 17, nama: 'Ruly Mediana' },
  { kode: 18, nama: 'Sartika' },
  { kode: 19, nama: 'Satibi' },
  { kode: 20, nama: 'Sopyan' },
  { kode: 21, nama: 'Toto Sunoto' },
  { kode: 22, nama: 'Yahya Yanuardi' },
  { kode: 23, nama: 'Edoardus Laot' },
  { kode: 24, nama: 'Siti Lola Y.' },
  { kode: 25, nama: 'Junaidi' },
  { kode: 26, nama: 'Suwarni' },
  { kode: 27, nama: 'Yuli Hastutti' },
  { kode: 28, nama: 'Aprodita Raditia' },
];

function getGuruName(kode) {
  if (!kode && kode !== 0) return null;
  const numKode = typeof kode === 'number' ? kode : parseInt(kode, 10);
  const guru = GURU_DATA.find(g => g.kode === numKode);
  return guru ? guru.nama : null;
}

function buildGuruBadge(kode) {
  const guruName = getGuruName(kode);
  if (!guruName) return '';
  const color = getGuruColor(kode);
  return `<span class="guru-badge" style="background:${color.bg};border-color:${color.border};color:${color.text}"><span class="guru-dot" style="background:${color.dot}"></span>${guruName}</span>`;
}

// --- JADWAL PELAJARAN DATA & RENDERER ---
const JADWAL_DATA = [
  {
    hari: 'senin',
    label: 'Senin',
    slots: [
      { waktu: '06.30-07.30', mapel: 'Perwalian/Upacara', kode: 4 },
      { waktu: '07.30-08.15', mapel: 'Sosiologi', kode: 3 },
      { waktu: '08.15-09.00', mapel: 'Sosiologi', kode: 3 },
      { waktu: '09.00-09.30', mapel: '', isBreak: true },
      { waktu: '09.30-10.10', mapel: 'MANDARIN', kode: 13 },
      { waktu: '10.10-10.50', mapel: 'MANDARIN', kode: 13 },
      { waktu: '10.50-11.30', mapel: 'Budi Pekerti', kode: 26 },
      { waktu: '11.30-12.10', mapel: 'Budaya Humanis', kode: 9 },
      { waktu: '12.10-12.40', mapel: '', isBreak: true },
      { waktu: '12.40-13.20', mapel: 'MAT Wajib', kode: '10' },
      { waktu: '13.20-14.00', mapel: 'Ekonomi', kode: '4' },
      { waktu: '14.00-14.40', mapel: 'Ekonomi', kode: '4' },
    ]
  },
  {
    hari: 'selasa',
    label: 'Selasa',
    slots: [
      { waktu: '06.30-06.45', mapel: 'PEMBIASAAN AWAL', kode: 26 },
      { waktu: '06.45-07.30', mapel: 'AGAMA', kode: '26' },
      { waktu: '07.30-08.15', mapel: 'AGAMA', kode: '26' },
      { waktu: '08.15-09.00', mapel: 'Bahasa Indonesia', kode: '17' },
      { waktu: '09.00-09.45', mapel: 'Bahasa Indonesia', kode: '17' },
      { waktu: '09.45-10.05', mapel: '', isBreak: true },
      { waktu: '10.05-10.50', mapel: 'Geografi', kode: '14' },
      { waktu: '10.50-11.35', mapel: 'Geografi', kode: '14' },
      { waktu: '11.35-12.00', mapel: '', isBreak: true },
      { waktu: '12.00-12.40', mapel: 'Ekonomi', kode: '4' },
      { waktu: '12.40-13.20', mapel: 'Ekonomi', kode: '4' },
      { waktu: '13.20-14.00', mapel: 'Sosiologi', kode: 3 },
      { waktu: '14.00-14.40', mapel: 'Sosiologi', kode: 3 },
    ]
  },
  {
    hari: 'rabu',
    label: 'Rabu',
    slots: [
      { waktu: '06.30-06.45', mapel: 'PEMBIASAAN AWAL', kode: 22 },
      { waktu: '06.45-07.30', mapel: 'Informatika', kode: 22 },
      { waktu: '07.30-08.15', mapel: 'Informatika', kode: 22 },
      { waktu: '08.15-09.00', mapel: 'Mandarin', kode: 13 },
      { waktu: '09.00-09.30', mapel: 'ISTIRAHAT', isBreak: true },
      { waktu: '09.30-10.10', mapel: 'Mandarin', kode: 13 },
      { waktu: '10.10-10.50', mapel: 'Sosiologi', kode: '3' },
      { waktu: '10.50-11.30', mapel: 'Bahasa Indonesia', kode: '17' },
      { waktu: '11.30-12.10', mapel: 'Kokurikuler', kode: '4' },
      { waktu: '12.10-12.40', mapel: 'ISTIRAHAT', isBreak: true },
      { waktu: '12.40-13.20', mapel: 'Sejarah', kode: '3' },
      { waktu: '13.20-14.00', mapel: 'Sejarah', kode: '3' },
      { waktu: '14.00-14.40', mapel: 'Seni Budaya', kode: '5' },
      { waktu: '14.40-15.20', mapel: 'Seni Budaya', kode: '5' },
    ]
  },
  {
    hari: 'kamis',
    label: 'Kamis',
    slots: [
      { waktu: '06.30-06.45', mapel: 'PEMBIASAAN AWAL', kode: 22 },
      { waktu: '06.45-07.30', mapel: 'Informatika', kode: '22' },
      { waktu: '07.30-08.15', mapel: 'Informatika', kode: 22 },
      { waktu: '08.15-09.00', mapel: 'MAT WAJIB', kode: '10' },
      { waktu: '09.00-09.30', mapel: 'ISTIRAHAT', isBreak: true },
      { waktu: '09.30-10.15', mapel: 'MAT WAJIB', kode: 10 },
      { waktu: '10.15-11.00', mapel: 'Pancasila', kode: 2 },
      { waktu: '11.00-11.45', mapel: 'Pancasila', kode: '2' },
      { waktu: '11.45-12.30', mapel: 'ISTIRAHAT', isBreak: true },
      { waktu: '12.30-13.20', mapel: 'Inggris', kode: '8' },
      { waktu: '13.20-14.00', mapel: 'Inggris', kode: '8' },
      { waktu: '14.00-14.40', mapel: 'Ekonomi', kode: '4' },
    ]
  },
  {
    hari: 'jumat',
    label: 'Jumat',
    slots: [
      { waktu: '06.30-07.15', mapel: 'PEMBIASAAN JUMAT', kode: 4 },
      { waktu: '07.15-08.00', mapel: 'PKWU', kode: 4 },
      { waktu: '08.00-08.45', mapel: 'PKWU', kode: 4 },
      { waktu: '09.30-10.00', mapel: 'ISTIRAHAT', isBreak: true },
      { waktu: '10.00-10.45', mapel: 'PJOK', kode: 20 },
      { waktu: '10.45-11.30', mapel: 'PJOK', kode: '20' },
      { waktu: '10.45-11.30', mapel: 'EKONOMI', kode: '4' },
      { waktu: '11.30-12.30', mapel: 'JUMAT IBADAH', isIbadah: true },
      { waktu: '12.30-13.20', mapel: 'ISTIRAHAT', isBreak: true },
      { waktu: '13.20-14.00', mapel: 'GEOGRAFI', kode: '14' },
      { waktu: '14.00-14.45', mapel: 'GEOGRAFI', kode: '14' },
    ]
  }
];

let jadwalDayFilter = 'semua';

function filterJadwalDay(day) {
  jadwalDayFilter = day;

  document.querySelectorAll('.jadwal-day-btn').forEach(btn => {
    btn.className = 'jadwal-day-btn px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all shrink-0';
  });

  const activeBtn = document.getElementById(`btn-jadwal-${day}`);
  if (activeBtn) {
    activeBtn.className = 'jadwal-day-btn px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-themeAccent text-white border border-themeAccent transition-all shrink-0';
  }

  renderJadwal();
}

function renderJadwal() {
  const container = document.getElementById('jadwal-container');
  if (!container) return;
  container.innerHTML = '';

  const filteredDays = jadwalDayFilter === 'semua'
    ? JADWAL_DATA
    : JADWAL_DATA.filter(d => d.hari === jadwalDayFilter);

  if (filteredDays.length === 0) {
    container.innerHTML = '<div class="text-center py-8 text-sm text-textMuted">Tidak ada jadwal ditemukan.</div>';
    return;
  }

  const now = new Date();
  const dayNames = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
  const todayName = dayNames[now.getDay()];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  filteredDays.forEach(day => {
    const isToday = day.hari === todayName;

    const card = document.createElement('div');
    card.className = 'premium-card rounded-xl overflow-hidden animate-fade-in';

    const headerClass = isToday
      ? 'bg-gradient-to-r from-themeAccent to-themeAccentHover text-white'
      : 'bg-gradient-to-r from-surface to-page text-textPrimary';

    let headerHtml = `
    <div class="px-5 py-3.5 flex items-center justify-between ${headerClass} border-b border-themeBorder">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-lg ${isToday ? 'bg-white/20' : 'bg-themeAccent/10'} flex items-center justify-center">
          <i class="fa-solid fa-calendar-day text-xs ${isToday ? 'text-white' : 'text-themeAccent'}"></i>
        </div>
        <div>
          <h4 class="font-display font-bold text-sm tracking-wide">${day.label}</h4>
          <p class="text-[10px] ${isToday ? 'text-white/70' : 'text-textMuted'}">${day.slots.filter(s => !s.isBreak && !s.isIbadah).length} jam pelajaran</p>
        </div>
      </div>
      ${isToday ? '<span class="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/20 text-white/90">Hari Ini</span>' : ''}
    </div>
    `;

    let rowsHtml = '';
    day.slots.forEach((slot, idx) => {
 let isActive = false;
 if (isToday && !slot.isBreak && !slot.isIbadah) {
 const timeParts = slot.waktu.split('-');
 const startParts = timeParts[0].split('.');
 const endParts = timeParts[1].split('.');
 const startMin = parseInt(startParts[0]) * 60 + parseInt(startParts[1]);
 const endMin = parseInt(endParts[0]) * 60 + parseInt(endParts[1]);
 isActive = currentMinutes >= startMin && currentMinutes < endMin;
 }

 if (slot.isBreak) {
 rowsHtml += `
 <tr>
 <td class="jadwal-time-cell">${slot.waktu}</td>
 <td colspan="1" class="jadwal-break">
 <i class="fa-solid fa-mug-hot mr-1"></i>PEMBAGIAN/ISTIRAHAT
 </td>
 </tr>
 `;
 } else if (slot.isIbadah) {
 rowsHtml += `
 <tr>
 <td class="jadwal-time-cell">${slot.waktu}</td>
 <td colspan="1" class="jadwal-jumat-ibadah">
 <i class="fa-solid fa-hands-praying mr-1"></i>JUMAT IBADAH
 </td>
 </tr>
 `;
 } else {
 const iconData = getMapelIcon(slot.mapel);
 const activeClass = isActive
 ? 'bg-themeAccent/10 dark:bg-themeAccent/20 font-bold border-l-2 border-themeAccent'
 : `${iconData.rowBg || (idx % 2 === 0 ? 'bg-card' : 'bg-surface/50')}`;
 const activeDot = isActive ? '<span class="inline-block w-1.5 h-1.5 rounded-full bg-themeAccent animate-pulse mr-1"></span>' : '';
 const guruName = getGuruName(slot.kode) || 'Tidak Ada Guru';

 rowsHtml += `
 <tr class="${activeClass}">
 <td class="jadwal-time-cell">${activeDot}${slot.waktu}</td>
 <td class="p-2">
 <div class="group/mapel flex flex-col gap-2 p-3 rounded-[10px] bg-card border border-themeBorder/40 shadow-sm hover:shadow-md hover:border-borderHover hover:-translate-y-0.5 transition-all duration-300">
 <!-- Subject Header -->
 <div class="flex items-center gap-2">
 <div class="mapel-icon w-7 h-7 rounded-lg flex items-center justify-center ${iconData.bg} ${iconData.darkBg} group-hover/mapel:scale-110 transition-transform duration-200">
 <i class="${iconData.icon} ${iconData.text} ${iconData.darkText}" style="font-size:11px"></i>
 </div>
 <span class="font-display font-bold text-xs text-textPrimary tracking-wide">${slot.mapel}</span>
 </div>
 
 <!-- Teacher Name -->
 <div class="text-[10px] text-textSecondary font-medium pl-1 flex items-center gap-1.5">
 <i class="fa-solid fa-chalkboard-user text-textMuted text-[9px]"></i>
 <span>${guruName}</span>
 </div>

 <!-- Category Badge -->
 <div class="pl-1">
 <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase ${iconData.catBg}">
 <span class="w-1 h-1 rounded-full ${iconData.catDot}"></span>
 ${iconData.name}
 </span>
 </div>
 </div>
 </td>
 </tr>
 `;
 }
 });

 card.innerHTML = `
 ${headerHtml}
 <div class="jadwal-table-wrapper" style="border: none; border-radius: 0;">
 <table class="jadwal-table">
 <thead>
 <tr>
 <th style="width: 110px;">WAKTU</th>
 <th style="text-align:left;padding-left:16px;">MATA PELAJARAN & GURU</th>
 </tr>
 </thead>
 <tbody>
 ${rowsHtml}
 </tbody>
 </table>
 </div>
 `;

 container.appendChild(card);
 });

 // Also render guru list
 renderGuruList();
}

function renderGuruList() {
 const guruContainer = document.getElementById('guru-list');
 if (!guruContainer) return;
 guruContainer.innerHTML = '';

 GURU_DATA.forEach(guru => {
 const color = getGuruColor(guru.kode);
 const tag = document.createElement('div');
 tag.className = 'guru-tag';
 tag.innerHTML = `
 <span class="flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-black" style="background:${color.bg};color:${color.text};border:1px solid ${color.border}">${guru.kode}</span>
 <span class="font-semibold text-textPrimary" style="font-size:11px">${guru.nama}</span>
 `;
 guruContainer.appendChild(tag);
 });
}

// --- CENTRALIZED PAGE INITIALIZER (Works for initial load and SPA navigation) ---
window.initPageScripts = function(pageName) {
  if (typeof setGreeting === 'function') setGreeting();
  if (typeof renderTasks === 'function') renderTasks();
  if (typeof updateDashboardStats === 'function') updateDashboardStats();
  if (typeof filterInformatika === 'function') filterInformatika();
  if (typeof renderArtikel === 'function') renderArtikel();
  if (typeof filterIndo === 'function') filterIndo();
  if (typeof renderArtikelBahasa === 'function') renderArtikelBahasa();
  if (typeof renderJadwal === 'function') renderJadwal();
  if (typeof renderGuruList === 'function') renderGuruList();
  if (typeof initScrollFadeIn === 'function') initScrollFadeIn();
  if (typeof runNumberConversion === 'function') runNumberConversion();
  if (typeof updateStdCalcDisplay === 'function') updateStdCalcDisplay();
};

// Scroll Fade-in function
function initScrollFadeIn() {
  const elements = document.querySelectorAll('.premium-card, .glass-card, .view-panel > div');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });

  elements.forEach(el => {
    el.classList.add('fade-in-scroll');
    observer.observe(el);
  });
}

// Global Event Listeners initialized once
window.addEventListener('DOMContentLoaded', () => {
  window.initPageScripts();

  // Keyboard support for Modal (Escape Key)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (typeof closeModal === 'function') closeModal();
    }
  });

  // Mouse Ripple Effect
  document.addEventListener('mousedown', function (e) {
    const btn = e.target.closest('button, .nav-item, [role="button"], a');
    if (!btn) return;

    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
    ripple.className = 'ripple-span';

    const existing = btn.querySelector('.ripple-span');
    if (existing) existing.remove();

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// --- INFORMATIKA ALGORITHMS & TOOLS SUITE ---

// ==========================================
// 1. TOOL SWITCHER LOGIC
// ==========================================
let currentAlgoTool = 'number-system';

function switchAlgoTool(toolId) {
  currentAlgoTool = toolId;
  const panelNumber = document.getElementById('algo-panel-number');
  const panelAscii = document.getElementById('algo-panel-ascii');
  const panelBitwise = document.getElementById('algo-panel-bitwise');
  const panelStandard = document.getElementById('algo-panel-standard');

  const btnNumber = document.getElementById('btn-algo-tool-number');
  const btnAscii = document.getElementById('btn-algo-tool-ascii');
  const btnBitwise = document.getElementById('btn-algo-tool-bitwise');
  const btnStandard = document.getElementById('btn-algo-tool-standard');

  const activeClass = "px-4 py-2 text-xs font-bold rounded-lg bg-themeAccent text-white border border-themeAccent transition-all shrink-0 flex items-center gap-2 shadow-sm";
  const inactiveClass = "px-4 py-2 text-xs font-bold rounded-lg bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all shrink-0 flex items-center gap-2";

  if (panelNumber) { panelNumber.classList.add('hidden'); panelNumber.classList.remove('block'); }
  if (panelAscii) { panelAscii.classList.add('hidden'); panelAscii.classList.remove('block'); }
  if (panelBitwise) { panelBitwise.classList.add('hidden'); panelBitwise.classList.remove('block'); }
  if (panelStandard) { panelStandard.classList.add('hidden'); panelStandard.classList.remove('block'); }

  if (btnNumber) btnNumber.className = inactiveClass;
  if (btnAscii) btnAscii.className = inactiveClass;
  if (btnBitwise) btnBitwise.className = inactiveClass;
  if (btnStandard) btnStandard.className = inactiveClass;

  if (toolId === 'number-system') {
    if (panelNumber) { panelNumber.classList.remove('hidden'); panelNumber.classList.add('block'); }
    if (btnNumber) btnNumber.className = activeClass;
    runNumberConversion();
  } else if (toolId === 'ascii') {
    if (panelAscii) { panelAscii.classList.remove('hidden'); panelAscii.classList.add('block'); }
    if (btnAscii) btnAscii.className = activeClass;
    runAsciiConversion();
  } else if (toolId === 'bitwise') {
    if (panelBitwise) { panelBitwise.classList.remove('hidden'); panelBitwise.classList.add('block'); }
    if (btnBitwise) btnBitwise.className = activeClass;
    runBitwiseCalculation();
  } else if (toolId === 'standard-calc') {
    if (panelStandard) { panelStandard.classList.remove('hidden'); panelStandard.classList.add('block'); }
    if (btnStandard) btnStandard.className = activeClass;
    updateStdCalcDisplay();
  }
}

// ==========================================
// 2. NUMBER SYSTEM CONVERTER LOGIC
// ==========================================
function runNumberConversion() {
  const inputEl = document.getElementById('calc-input');
  const baseEl = document.getElementById('calc-base');
  if (!inputEl || !baseEl) return;

  const raw = inputEl.value.trim();
  const fromBase = parseInt(baseEl.value, 10);

  const resBin = document.getElementById('res-binary');
  const resOct = document.getElementById('res-octal');
  const resDec = document.getElementById('res-decimal');
  const resHex = document.getElementById('res-hex');
  const errBox = document.getElementById('calc-error-msg');
  const errText = document.getElementById('calc-error-text');

  // Handle empty input
  if (raw === '') {
    if (errBox) errBox.classList.add('hidden');
    if (resBin) resBin.textContent = '-';
    if (resOct) resOct.textContent = '-';
    if (resDec) resDec.textContent = '-';
    if (resHex) resHex.textContent = '-';
    return;
  }

  // Validate characters based on radix
  let isValid = false;
  if (fromBase === 2) isValid = /^[01]+$/.test(raw);
  else if (fromBase === 8) isValid = /^[0-7]+$/.test(raw);
  else if (fromBase === 10) isValid = /^[0-9]+$/.test(raw);
  else if (fromBase === 16) isValid = /^[0-9a-fA-F]+$/.test(raw);

  if (!isValid) {
    if (errBox) {
      errBox.classList.remove('hidden');
      if (errText) errText.textContent = 'Nilai tidak valid untuk sistem bilangan ini.';
    }
    if (resBin) resBin.textContent = '-';
    if (resOct) resOct.textContent = '-';
    if (resDec) resDec.textContent = '-';
    if (resHex) resHex.textContent = '-';
    return;
  }

  // Hide error box if valid
  if (errBox) errBox.classList.add('hidden');

  // Convert to BigInt
  let decVal;
  try {
    if (fromBase === 2) decVal = BigInt('0b' + raw);
    else if (fromBase === 8) decVal = BigInt('0o' + raw);
    else if (fromBase === 10) decVal = BigInt(raw);
    else if (fromBase === 16) decVal = BigInt('0x' + raw);
  } catch (e) {
    if (errBox) {
      errBox.classList.remove('hidden');
      if (errText) errText.textContent = 'Nilai angka terlalu besar atau tidak valid.';
    }
    return;
  }

  // Calculate representations
  if (resBin) resBin.textContent = decVal.toString(2);
  if (resOct) resOct.textContent = decVal.toString(8);
  if (resDec) resDec.textContent = decVal.toString(10);
  if (resHex) resHex.textContent = decVal.toString(16).toUpperCase();
}

function clearCalculator() {
  const inputEl = document.getElementById('calc-input');
  if (inputEl) {
    inputEl.value = '';
    inputEl.focus();
    runNumberConversion();
  }
}

function resetCalculator() {
  const inputEl = document.getElementById('calc-input');
  const baseEl = document.getElementById('calc-base');
  if (inputEl) inputEl.value = '101101';
  if (baseEl) baseEl.value = '2';
  runNumberConversion();
}

function setQuickConversion(val, base) {
  const inputEl = document.getElementById('calc-input');
  const baseEl = document.getElementById('calc-base');
  if (inputEl) inputEl.value = val;
  if (baseEl) baseEl.value = String(base);
  runNumberConversion();
}

// ==========================================
// 3. ASCII CONVERTER LOGIC
// ==========================================
let currentAsciiMode = 'text-to-ascii';

function switchAsciiMode(mode) {
  currentAsciiMode = mode;
  const m1 = document.getElementById('ascii-mode-text-to-ascii');
  const m2 = document.getElementById('ascii-mode-ascii-to-text');
  const m3 = document.getElementById('ascii-mode-binary-to-text');

  const b1 = document.getElementById('btn-ascii-m1');
  const b2 = document.getElementById('btn-ascii-m2');
  const b3 = document.getElementById('btn-ascii-m3');

  const active = "px-3 py-1.5 text-xs font-bold rounded-lg bg-themeAccent text-white transition-all shadow-sm";
  const inactive = "px-3 py-1.5 text-xs font-bold rounded-lg text-textSecondary hover:text-textPrimary transition-all";

  if (m1) { m1.classList.add('hidden'); m1.classList.remove('block'); }
  if (m2) { m2.classList.add('hidden'); m2.classList.remove('block'); }
  if (m3) { m3.classList.add('hidden'); m3.classList.remove('block'); }

  if (b1) b1.className = inactive;
  if (b2) b2.className = inactive;
  if (b3) b3.className = inactive;

  if (mode === 'text-to-ascii') {
    if (m1) { m1.classList.remove('hidden'); m1.classList.add('block'); }
    if (b1) b1.className = active;
    runAsciiConversion();
  } else if (mode === 'ascii-to-text') {
    if (m2) { m2.classList.remove('hidden'); m2.classList.add('block'); }
    if (b2) b2.className = active;
    runAsciiDecToText();
  } else if (mode === 'binary-to-text') {
    if (m3) { m3.classList.remove('hidden'); m3.classList.add('block'); }
    if (b3) b3.className = active;
    runAsciiBinToText();
  }
}

// Mode A: Text -> ASCII Table
function runAsciiConversion() {
  const textInput = document.getElementById('ascii-text-input');
  const tableBody = document.getElementById('ascii-table-body');
  if (!textInput || !tableBody) return;

  const text = textInput.value;
  if (text.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="4" class="py-6 text-center text-textMuted text-xs font-sans">
          Silakan masukkan teks pada input di atas untuk melihat tabel ASCII.
        </td>
      </tr>
    `;
    return;
  }

  let rowsHtml = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const code = char.charCodeAt(0);
    const bin = code.toString(2).padStart(8, '0');
    const hex = code.toString(16).toUpperCase().padStart(2, '0');
    const displayChar = char === ' ' ? '<span class="text-textMuted italic font-sans">(space)</span>' : char;

    rowsHtml += `
      <tr class="hover:bg-card transition-colors">
        <td class="py-2.5 px-4 font-bold text-textPrimary text-sm">${displayChar}</td>
        <td class="py-2.5 px-4 text-emerald-500 font-bold">${code}</td>
        <td class="py-2.5 px-4 text-themeAccent font-bold">${bin}</td>
        <td class="py-2.5 px-4 text-blue-500 dark:text-blue-400 font-bold">${hex}</td>
      </tr>
    `;
  }

  tableBody.innerHTML = rowsHtml;
}

function copyAsciiTableSummary() {
  const textInput = document.getElementById('ascii-text-input');
  const btn = document.getElementById('btn-copy-ascii-all');
  if (!textInput) return;
  const text = textInput.value;
  if (!text) return;

  let summary = `Character | ASCII Decimal | Binary (8-bit) | Hex\n`;
  summary += `-------------------------------------------------\n`;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const code = c.charCodeAt(0);
    const bin = code.toString(2).padStart(8, '0');
    const hex = code.toString(16).toUpperCase().padStart(2, '0');
    summary += `${c === ' ' ? '(space)' : c} | ${code} | ${bin} | ${hex}\n`;
  }

  copyTextToClipboard(summary, btn);
}

// Mode B: ASCII Decimal -> Text
function runAsciiDecToText() {
  const inputEl = document.getElementById('ascii-dec-input');
  const outEl = document.getElementById('ascii-dec-output-text');
  const errEl = document.getElementById('ascii-dec-error');
  if (!inputEl || !outEl) return;

  const raw = inputEl.value.trim();
  if (raw === '') {
    if (errEl) errEl.classList.add('hidden');
    outEl.textContent = '-';
    return;
  }

  const parts = raw.split(/[\s,]+/);
  let decoded = '';
  let hasError = false;

  for (const part of parts) {
    if (part === '') continue;
    const num = parseInt(part, 10);
    if (isNaN(num) || num < 0 || num > 65535) {
      hasError = true;
      break;
    }
    decoded += String.fromCharCode(num);
  }

  if (hasError) {
    if (errEl) errEl.classList.remove('hidden');
    outEl.textContent = '-';
  } else {
    if (errEl) errEl.classList.add('hidden');
    outEl.textContent = decoded || '-';
  }
}

// Mode C: Binary 8-bit -> Text
function runAsciiBinToText() {
  const inputEl = document.getElementById('ascii-bin-input');
  const outEl = document.getElementById('ascii-bin-output-text');
  const errEl = document.getElementById('ascii-bin-error');
  if (!inputEl || !outEl) return;

  let raw = inputEl.value.trim();
  if (raw === '') {
    if (errEl) errEl.classList.add('hidden');
    outEl.textContent = '-';
    return;
  }

  const cleanRaw = raw.replace(/\s+/g, '');
  if (!/^[01]+$/.test(cleanRaw)) {
    if (errEl) {
      errEl.classList.remove('hidden');
      errEl.textContent = 'Format Biner tidak valid. Gunakan hanya angka 0 dan 1.';
    }
    outEl.textContent = '-';
    return;
  }

  let decoded = '';
  for (let i = 0; i < cleanRaw.length; i += 8) {
    const chunk = cleanRaw.slice(i, i + 8);
    const code = parseInt(chunk, 2);
    decoded += String.fromCharCode(code);
  }

  if (errEl) errEl.classList.add('hidden');
  outEl.textContent = decoded || '-';
}

// ==========================================
// 4. BITWISE CALCULATOR LOGIC
// ==========================================
let currentBitwiseOp = 'AND';

function setBitwiseOp(op) {
  currentBitwiseOp = op;
  const opButtons = {
    'AND': 'btn-bw-and',
    'OR': 'btn-bw-or',
    'XOR': 'btn-bw-xor',
    'NOT': 'btn-bw-not',
    'SHL': 'btn-bw-shl',
    'SHR': 'btn-bw-shr'
  };

  const active = "px-3 py-2 text-xs font-bold font-mono rounded-xl bg-themeAccent text-white border border-themeAccent transition-all shadow-sm";
  const inactive = "px-3 py-2 text-xs font-bold font-mono rounded-xl bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all";

  for (const [key, btnId] of Object.entries(opButtons)) {
    const btn = document.getElementById(btnId);
    if (btn) btn.className = (key === op) ? active : inactive;
  }

  const bContainer = document.getElementById('bw-input-b-container');
  if (bContainer) {
    if (op === 'NOT') {
      bContainer.classList.add('opacity-40', 'pointer-events-none');
    } else {
      bContainer.classList.remove('opacity-40', 'pointer-events-none');
    }
  }

  runBitwiseCalculation();
}

function runBitwiseCalculation() {
  const inA = document.getElementById('bw-input-a');
  const inB = document.getElementById('bw-input-b');
  const baseEl = document.getElementById('bw-input-base');
  const errEl = document.getElementById('bw-error-msg');
  const resDec = document.getElementById('bw-res-dec');
  const resBin = document.getElementById('bw-res-bin');
  const resHex = document.getElementById('bw-res-hex');
  const visualBox = document.getElementById('bw-visualizer-box');
  const badgeOp = document.getElementById('bw-op-badge');

  if (!inA || !baseEl) return;

  const base = parseInt(baseEl.value, 10);
  const rawA = inA.value.trim();
  const rawB = inB ? inB.value.trim() : '0';

  const baseName = base === 2 ? 'Binary (Base 2)' : (base === 16 ? 'Hexadecimal (Base 16)' : 'Decimal (Base 10)');
  const labelA = document.getElementById('bw-base-label-a');
  const labelB = document.getElementById('bw-base-label-b');
  if (labelA) labelA.textContent = baseName;
  if (labelB) labelB.textContent = baseName;

  const isValidA = base === 2 ? /^[01]+$/.test(rawA) : (base === 16 ? /^[0-9a-fA-F]+$/.test(rawA) : /^-?[0-9]+$/.test(rawA));
  const isValidB = base === 2 ? /^[01]+$/.test(rawB) : (base === 16 ? /^[0-9a-fA-F]+$/.test(rawB) : /^-?[0-9]+$/.test(rawB));

  if (!rawA || !isValidA || (currentBitwiseOp !== 'NOT' && (!rawB || !isValidB))) {
    if (errEl) errEl.classList.remove('hidden');
    if (resDec) resDec.textContent = '-';
    if (resBin) resBin.textContent = '-';
    if (resHex) resHex.textContent = '-';
    if (visualBox) visualBox.innerHTML = '<span class="text-textMuted text-xs">Masukkan nilai input yang valid untuk melihat visualisasi bitwise.</span>';
    return;
  }

  if (errEl) errEl.classList.add('hidden');

  const numA = parseInt(rawA, base);
  const numB = parseInt(rawB, base);

  let result = 0;
  let opSymbol = '&';
  let opLabel = 'AND (&)';

  switch (currentBitwiseOp) {
    case 'AND':
      result = numA & numB;
      opSymbol = '&';
      opLabel = 'AND (&)';
      break;
    case 'OR':
      result = numA | numB;
      opSymbol = '|';
      opLabel = 'OR (|)';
      break;
    case 'XOR':
      result = numA ^ numB;
      opSymbol = '^';
      opLabel = 'XOR (^)';
      break;
    case 'NOT':
      result = ~numA;
      opSymbol = '~';
      opLabel = 'NOT (~)';
      break;
    case 'SHL':
      result = numA << numB;
      opSymbol = '<<';
      opLabel = `A << ${numB}`;
      break;
    case 'SHR':
      result = numA >> numB;
      opSymbol = '>>';
      opLabel = `A >> ${numB}`;
      break;
  }

  if (badgeOp) badgeOp.textContent = opLabel;

  const decStr = result.toString(10);
  const binStr = (result >>> 0).toString(2).padStart(8, '0');
  const hexStr = (result >>> 0).toString(16).toUpperCase().padStart(2, '0');

  if (resDec) resDec.textContent = decStr;
  if (resBin) resBin.textContent = binStr;
  if (resHex) resHex.textContent = hexStr;

  if (visualBox) {
    const padLen = Math.max(8, (numA >>> 0).toString(2).length, (numB >>> 0).toString(2).length, binStr.length);
    const binA = (numA >>> 0).toString(2).padStart(padLen, '0');
    const binB = (numB >>> 0).toString(2).padStart(padLen, '0');
    const binRes = (result >>> 0).toString(2).padStart(padLen, '0');
    const divider = '-'.repeat(padLen + 10);

    if (currentBitwiseOp === 'NOT') {
      visualBox.innerHTML = `
        <div class="text-textSecondary">A:    <span class="text-textPrimary font-bold">${binA}</span> <span class="text-textMuted">(${numA})</span></div>
        <div class="text-themeAccent">${opSymbol}     ${divider}</div>
        <div class="text-emerald-500 font-bold">RES:  <span>${binRes}</span> <span class="text-textMuted font-normal">(${decStr})</span></div>
      `;
    } else {
      visualBox.innerHTML = `
        <div class="text-textSecondary">A:    <span class="text-textPrimary font-bold">${binA}</span> <span class="text-textMuted">(${numA})</span></div>
        <div class="text-textSecondary">B:    <span class="text-textPrimary font-bold">${binB}</span> <span class="text-textMuted">(${numB})</span></div>
        <div class="text-themeAccent">${opSymbol.padEnd(5, ' ')}${divider}</div>
        <div class="text-emerald-500 font-bold">RES:  <span>${binRes}</span> <span class="text-textMuted font-normal">(${decStr})</span></div>
      `;
    }
  }
}

// ==========================================
// 5. STANDARD CALCULATOR LOGIC
// ==========================================
let stdCalcState = {
  current: '0',
  prev: '',
  op: null,
  expression: '',
  isCalculated: false
};

function updateStdCalcDisplay() {
  const displayEl = document.getElementById('std-calc-display');
  const expEl = document.getElementById('std-calc-expression');
  if (displayEl) displayEl.textContent = stdCalcState.current;
  if (expEl) expEl.textContent = stdCalcState.expression || '\u00A0';
}

function stdCalcInput(char) {
  // Normalize characters from diverse encodings / symbols
  if (char === 'Ã·' || char === '÷') char = '/';
  if (char === 'Ã—' || char === '×') char = '*';
  if (char === 'âˆ’' || char === '−') char = '-';

  if (['+', '-', '*', '/'].includes(char)) {
    if (stdCalcState.isCalculated) {
      stdCalcState.expression = stdCalcState.current + ' ' + (char === '*' ? '×' : char === '/' ? '÷' : char === '-' ? '−' : '+');
      stdCalcState.prev = stdCalcState.current;
      stdCalcState.op = char;
      stdCalcState.current = '0';
      stdCalcState.isCalculated = false;
    } else if (stdCalcState.prev && stdCalcState.op && stdCalcState.current !== '0') {
      stdCalcCalculate(false);
      stdCalcState.expression = stdCalcState.current + ' ' + (char === '*' ? '×' : char === '/' ? '÷' : char === '-' ? '−' : '+');
      stdCalcState.prev = stdCalcState.current;
      stdCalcState.op = char;
      stdCalcState.current = '0';
    } else {
      stdCalcState.op = char;
      stdCalcState.prev = stdCalcState.current;
      stdCalcState.expression = stdCalcState.current + ' ' + (char === '*' ? '×' : char === '/' ? '÷' : char === '-' ? '−' : '+');
      stdCalcState.current = '0';
    }
  } else if (char === '%') {
    const num = parseFloat(stdCalcState.current);
    if (!isNaN(num)) {
      stdCalcState.current = String(num / 100);
    }
  } else if (char === '(' || char === ')') {
    if (stdCalcState.current === '0' || stdCalcState.isCalculated) {
      stdCalcState.current = char;
      stdCalcState.isCalculated = false;
    } else {
      stdCalcState.current += char;
    }
  } else if (char === '.') {
    if (stdCalcState.isCalculated) {
      stdCalcState.current = '0.';
      stdCalcState.expression = '';
      stdCalcState.isCalculated = false;
    } else if (!stdCalcState.current.includes('.')) {
      stdCalcState.current += '.';
    }
  } else {
    // Digits 0-9
    if (stdCalcState.isCalculated || stdCalcState.current === '0') {
      stdCalcState.current = char;
      if (stdCalcState.isCalculated) stdCalcState.expression = '';
      stdCalcState.isCalculated = false;
    } else {
      stdCalcState.current += char;
    }
  }

  updateStdCalcDisplay();
}

function stdCalcClear() {
  stdCalcState = {
    current: '0',
    prev: '',
    op: null,
    expression: '',
    isCalculated: false
  };
  updateStdCalcDisplay();
}

function stdCalcBackspace() {
  if (stdCalcState.isCalculated) {
    stdCalcClear();
    return;
  }
  if (stdCalcState.current.length > 1) {
    stdCalcState.current = stdCalcState.current.slice(0, -1);
  } else {
    stdCalcState.current = '0';
  }
  updateStdCalcDisplay();
}

function stdCalcToggleSign() {
  if (stdCalcState.current === '0' || stdCalcState.current === '') return;
  if (stdCalcState.current.startsWith('-')) {
    stdCalcState.current = stdCalcState.current.slice(1);
  } else {
    stdCalcState.current = '-' + stdCalcState.current;
  }
  updateStdCalcDisplay();
}

function stdCalcCalculate(isFinal = true) {
  let expr = '';
  if (stdCalcState.prev && stdCalcState.op) {
    const symbol = stdCalcState.op === '*' ? '×' : stdCalcState.op === '/' ? '÷' : stdCalcState.op === '-' ? '−' : '+';
    expr = `${stdCalcState.prev} ${symbol} ${stdCalcState.current}`;
    
    const a = parseFloat(stdCalcState.prev);
    const b = parseFloat(stdCalcState.current);
    let res = 0;
    if (stdCalcState.op === '+') res = a + b;
    else if (stdCalcState.op === '-') res = a - b;
    else if (stdCalcState.op === '*') res = a * b;
    else if (stdCalcState.op === '/') res = b === 0 ? 'Error' : a / b;

    if (typeof res === 'number') {
      res = parseFloat(res.toFixed(10));
    }

    if (isFinal) {
      stdCalcState.expression = expr + ' =';
      stdCalcState.current = String(res);
      stdCalcState.prev = '';
      stdCalcState.op = null;
      stdCalcState.isCalculated = true;
    } else {
      stdCalcState.current = String(res);
    }
  } else {
    try {
      const sanitized = stdCalcState.current.replace(/[^0-9+\-*/.()]/g, '');
      if (sanitized) {
        const res = Function(`'use strict'; return (${sanitized})`)();
        if (isFinal) {
          stdCalcState.expression = stdCalcState.current + ' =';
          stdCalcState.current = String(parseFloat(res.toFixed(10)));
          stdCalcState.isCalculated = true;
        }
      }
    } catch (e) {
      stdCalcState.current = 'Error';
      stdCalcState.isCalculated = true;
    }
  }

  updateStdCalcDisplay();
}

// Keyboard shortcuts for calculator when active
window.addEventListener('keydown', (e) => {
  const panelStandard = document.getElementById('algo-panel-standard');
  if (!panelStandard || panelStandard.classList.contains('hidden')) return;

  if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;

  if ((e.key >= '0' && e.key <= '9') || e.key === '.' || e.key === '(' || e.key === ')' || e.key === '%') {
    e.preventDefault();
    stdCalcInput(e.key);
  } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    e.preventDefault();
    stdCalcInput(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    e.preventDefault();
    stdCalcCalculate();
  } else if (e.key === 'Backspace') {
    e.preventDefault();
    stdCalcBackspace();
  } else if (e.key === 'Escape') {
    e.preventDefault();
    stdCalcClear();
  }
});

// ==========================================
// 6. UNIVERSAL COPY & CLIPBOARD HELPERS
// ==========================================
function copyResultValue(elementId, btn) {
  copyElementText(elementId, btn);
}

function copyElementText(elementId, btn) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.textContent.trim();
  if (!text || text === '-') return;
  copyTextToClipboard(text, btn);
}

function copyTextToClipboard(text, btn) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopySuccess(btn);
    }).catch(() => {
      fallbackCopyText(text, btn);
    });
  } else {
    fallbackCopyText(text, btn);
  }
}

function showCopySuccess(btn) {
  if (!btn) return;
  const origHtml = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-check text-emerald-500 text-[10px]"></i> <span class="text-emerald-500">Copied!</span>';
  btn.classList.add('border-emerald-500/50');
  setTimeout(() => {
    btn.innerHTML = origHtml;
    btn.classList.remove('border-emerald-500/50');
  }, 1500);
}

function fallbackCopyText(text, btn) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showCopySuccess(btn);
  } catch (err) {
    console.error('Copy failed', err);
  }
  document.body.removeChild(tempInput);
}

// Explicit window assignments for HTML inline events
window.switchAlgoTool = switchAlgoTool;
window.runNumberConversion = runNumberConversion;
window.clearCalculator = clearCalculator;
window.resetCalculator = resetCalculator;
window.setQuickConversion = setQuickConversion;
window.switchAsciiMode = switchAsciiMode;
window.runAsciiConversion = runAsciiConversion;
window.copyAsciiTableSummary = copyAsciiTableSummary;
window.runAsciiDecToText = runAsciiDecToText;
window.runAsciiBinToText = runAsciiBinToText;
window.setBitwiseOp = setBitwiseOp;
window.runBitwiseCalculation = runBitwiseCalculation;
window.stdCalcInput = stdCalcInput;
window.stdCalcClear = stdCalcClear;
window.stdCalcBackspace = stdCalcBackspace;
window.stdCalcToggleSign = stdCalcToggleSign;
window.stdCalcCalculate = stdCalcCalculate;
window.updateStdCalcDisplay = updateStdCalcDisplay;
window.copyResultValue = copyResultValue;
window.copyElementText = copyElementText;
window.copyTextToClipboard = copyTextToClipboard;