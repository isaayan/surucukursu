import { NavLink, ServiceItem, LicenseClassItem, FAQItemData, StatItemData, BlogPostData } from './types';

export const NAV_LINKS: NavLink[] = [
    { name: "ANASAYFA", href: "#home" },
    { name: "EHLİYETLER", href: "#listing" },
    { name: "HAKKIMIZDA", href: "#about" }, 
    { name: "SSS", href: "#faq" },
    { name: "BLOG", href: "#blog" }, // Now points to blog-list in App.tsx
    { name: "İLETİŞİM", href: "#iletisim" },
];

export const SERVICES: ServiceItem[] = [
    {
        id: 'theory',
        icon: 'quiz',
        title: 'Teorik Hazırlık',
        description: 'Güncel sorularla sınava tam hazırlık.',
        colorClass: 'text-primary',
        iconBgClass: 'bg-orange-50 group-hover:bg-primary',
    },
    {
        id: 'steering',
        icon: 'sports_motorsports',
        title: 'Direksiyon Eğitimi',
        description: 'Birebir özel derslerle usta şoför olun.',
        colorClass: 'text-secondary',
        iconBgClass: 'bg-blue-50 group-hover:bg-secondary',
    },
    {
        id: 'track',
        icon: 'route',
        title: 'Sınav Parkuru',
        description: 'Sınav güzergahında detaylı provalar.',
        colorClass: 'text-primary',
        iconBgClass: 'bg-orange-50 group-hover:bg-primary',
    },
    {
        id: 'vehicle',
        icon: 'tune',
        title: 'Esnek Araç Seçimi',
        description: 'Otomatik veya manuel vites seçeneği.',
        colorClass: 'text-secondary',
        iconBgClass: 'bg-blue-50 group-hover:bg-secondary',
    },
];

export const LICENSE_CLASSES: LicenseClassItem[] = [
    {
        id: 'a1-class',
        title: 'A1 Sınıfı Ehliyet',
        shortDescription: '125cc\'ye kadar olan motosikletler için başlangıç seviyesi ehliyet sınıfıdır.',
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        badge: '125cc - Başlangıç',
        badgeColorClass: 'bg-blue-50 border-blue-200',
        badgeTextClass: 'text-blue-600',
        seoTitle: 'A1 Sınıfı Ehliyet: 125cc Motosiklet Eğitimi ve Şartları',
        seoDescription: '16 yaşını dolduranlar için A1 sınıfı ehliyet eğitimi. 125cc ve 11kw altı motosikletleri kullanmak için hemen başvurun.',
        fullDescription: 'A1 sınıfı sürücü belgesi, iki tekerlekli dünyaya adım atmak isteyen gençler için ideal bir başlangıç noktasıdır. Şehir içi ulaşımda pratiklik sağlayan, motor hacmi 125cc\'yi ve gücü 11 kilovatı geçmeyen motosikletleri kullanma yetkisi verir. Hem ekonomik hem de çevik bir ulaşım aracı arayanlar için mükemmel bir tercihtir.',
        requirements: [
            '16 yaşını doldurmuş olmak.',
            'En az ilkokul mezunu olmak.',
            'Sürücü olur sağlık raporu almak.',
            'Adli sicil kaydının temiz olması.'
        ],
        educationProcess: 'Adaylarımız öncelikle trafik, araç tekniği ve ilkyardım konularını içeren teorik eğitimden geçerler. Teorik sınavı başarıyla tamamlayan adaylar, uzman eğitmenlerimiz eşliğinde trafiğe kapalı alanda ve akan trafikte direksiyon eğitimine başlarlar. Denge, frenleme ve viraj alma teknikleri üzerinde durulur.',
        keywords: ['a1 ehliyet yaşı', '125cc motor ehliyeti', 'a1 ehliyet fiyatları', 'motosiklet ehliyeti', 'başlangıç motoru']
    },
    {
        id: 'a2-class',
        title: 'A2 Sınıfı Ehliyet',
        shortDescription: '35kw güce kadar olan motosikletleri kullanmak için gereken orta seviye sınıftır.',
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        badge: '35kw - Orta Seviye',
        badgeColorClass: 'bg-indigo-50 border-indigo-200',
        badgeTextClass: 'text-indigo-600',
        seoTitle: 'A2 Sınıfı Motosiklet Ehliyeti ve Eğitim Süreci',
        seoDescription: '35kw (47 beygir) güce kadar motosiklet kullanmak için A2 ehliyeti alın. 18 yaş ve üzeri için profesyonel eğitim.',
        fullDescription: 'A2 sınıfı ehliyet, motosiklet tutkusunu bir üst seviyeye taşımak isteyenler içindir. Gücü 35 kilovatı (yaklaşık 47 beygir) geçmeyen motosikletleri kapsar. Şehir içi ve şehirlerarası yolculuklar için yeterli performansa sahip birçok popüler motosiklet modelini bu ehliyetle kullanabilirsiniz.',
        requirements: [
            '18 yaşını doldurmuş olmak.',
            'En az ilkokul mezunu olmak.',
            'Gerekli sağlık şartlarını taşımak.',
            'Adli sicil kaydı bulunmamak.'
        ],
        educationProcess: 'Eğitim sürecinde, daha güçlü motosikletlerin kontrolü, güvenli sürüş dinamikleri, kontra tekniği ve defansif sürüş üzerine yoğunlaşılır. Sınav parkurunda slalom, sekiz çizme ve ani frenleme gibi manevralar detaylıca çalışılır.',
        keywords: ['a2 ehliyet şartları', '35kw motor ehliyeti', 'orta sınıf motosiklet', 'a2 direksiyon sınavı', 'motosiklet eğitimi']
    },
    {
        id: 'a-class',
        title: 'A Sınıfı Ehliyet',
        shortDescription: 'Tüm motosiklet türlerini güç sınırı olmaksızın kullanma yetkisi verir.',
        image: 'https://images.unsplash.com/photo-1547872387-441aa2886e24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80',
        badge: 'Sınırsız Güç',
        badgeColorClass: 'bg-primary/10 border-primary/20',
        badgeTextClass: 'text-primary',
        seoTitle: 'A Sınıfı Ehliyet: Yüksek CC Motosiklet Kullanımı',
        seoDescription: 'Yüksek performanslı motosikletler için A sınıfı ehliyet. Güç sınırı olmadan özgürce sürün. Tecrübeli sürücüler için ileri seviye eğitim.',
        fullDescription: 'A sınıfı ehliyet, motosiklet dünyasının zirvesidir. Motor hacmi veya gücü ne olursa olsun, piyasadaki tüm motosikletleri kullanma yetkisi verir. Racing, Touring, Enduro veya Chopper tarzı yüksek cc\'li makineleri hayal ediyorsanız, hedefiniz A sınıfı olmalıdır.',
        requirements: [
            '24 yaşını doldurmuş olmak VEYA',
            'En az 2 yıllık A2 ehliyetine sahip olup 20 yaşını doldurmuş olmak.',
            'En az ilkokul mezunu olmak.',
            'Sağlık raporu ve temiz sicil kaydı.'
        ],
        educationProcess: 'A sınıfı eğitimlerinde, yüksek güçlü makinelerin gaz tepkileri, ağırlık merkezi yönetimi ve yüksek hızlarda stabilite konuları işlenir. Bu eğitim, sadece ehliyet almak için değil, hayatta kalmak ve keyifli sürüş için kritik öneme sahiptir.',
        keywords: ['a sınıfı ehliyet', 'büyük motor ehliyeti', 'racing motor ehliyeti', 'a ehliyet yaşı', 'ileri sürüş teknikleri']
    },
    {
        id: 'b-manuel',
        title: 'B Sınıfı (Manuel)',
        shortDescription: 'Hem manuel hem otomatik vitesli otomobilleri kullanabilmenizi sağlayan en kapsamlı seçim.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMI8mqcM_HtwYUYsYJSNXzPCzStT3nyFBkgHyqWa_pQ2kV9IX2ZdC3QGP5Eomhb2D_j-uZCEVIg5gKntcM270vtmwBTjdttkj8OmTwTXNMHpPyIcM98Zbn9ckhPsMH7fXAPzrLKnSCXulbBFy2a3ytOMuoBjMe6halMljnI-3_aY2HvtQvCJishWzvcGEH71HGDCat9KcSjdx-gBUD6QmjvMlCumOhuvK-ndpEHIlzwqY2ZjG21AHiHvo0raImPyu4By-XxIsm-_M8',
        badge: 'Manuel & Otomatik',
        badgeColorClass: 'bg-secondary/10 border-secondary/20',
        badgeTextClass: 'text-secondary',
        seoTitle: 'B Sınıfı Manuel Ehliyet: Kapsamlı Otomobil Eğitimi',
        seoDescription: 'Manuel vites B ehliyeti ile tüm otomobilleri kullanma özgürlüğü. Debriyaj hakimiyeti, yokuş kalkış ve vites geçişlerinde uzmanlaşın.',
        fullDescription: 'Manuel vites B sınıfı ehliyet, size tam anlamıyla bir "sürücü" olma yetkinliği kazandırır. Bu ehliyeti aldığınızda, hem manuel hem de otomatik vitesli tüm otomobil ve kamyonetleri (4250 kg\'a kadar) kullanma hakkına sahip olursunuz. Araç üzerinde tam kontrol sağlamak ve her türlü aracı kullanabilme özgürlüğü için en doğru tercihtir.',
        requirements: [
            '18 yaşını doldurmuş olmak.',
            'En az ilkokul mezunu olmak.',
            'Sürücü sağlık raporu.',
            'Adli sicil kaydının uygun olması.'
        ],
        educationProcess: 'Eğitimlerimiz, aracın mekaniğini anlamakla başlar. Debriyaj kavrama noktası, sarsıntısız kalkış, yokuşta geri kaçırmadan kalkış (hill holder\'sız araçlarda bile), doğru devirde vites değişimi ve motor freni kullanımı gibi konular, manuel eğitimin temel taşlarıdır. Simülatör ve araç başı eğitimlerle refleksleriniz geliştirilir.',
        keywords: ['manuel ehliyet', 'b sınıfı ehliyet', 'vitesli araba kullanma', 'ehliyet kursu fiyatları', 'direksiyon dersi']
    },
    {
        id: 'b-auto',
        title: 'B Sınıfı (Otomatik)',
        shortDescription: 'Sadece otomatik vites araç kullanmak isteyenler için daha kolay ve pratik bir seçenek.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdBZz6Y93VkiqZTG5vBiHkGHVtpxQnXQ_pEMFIytawelaUaOiyyQhJVSZ-DD-C9qPlfzOfI9F7q_UCaDfyv1sMcGBAF6Eu_4fi2umzpxtvXMr0DTHBAwsjU4frK5OWTHWxEE1r3X_A1GQUS7B8TjQPLRFUyssKOwLA-vcljYy6HoXZ6HdDiaTxpdhNvgzZhtc8Jkneop7ab7QYWY3_eu1_-d2Le-Mrlm2q6O5C2YAepF91jlGLB7KbDA2Nlfj2C2vb7tG7wJkcYc7G',
        badge: 'Sadece Otomatik',
        badgeColorClass: 'bg-green-50 border-green-200',
        badgeTextClass: 'text-green-600',
        seoTitle: 'Otomatik Vites Ehliyeti: Kolay ve Konforlu Sürüş',
        seoDescription: 'Vites derdi olmadan, stresten uzak sürüş deneyimi. B sınıfı otomatik ehliyet ile trafiğe odaklanın, sınavı kolayca geçin.',
        fullDescription: 'Trafiğin yoğun olduğu şehir hayatında konforu ön planda tutanlar için B sınıfı otomatik ehliyet mükemmel bir çözümdür. Debriyaj ve vites değiştirme stresi yaşamadan, sadece yola ve trafik kurallarına odaklanmanızı sağlar. Sınavda stop ettirme riski çok daha düşüktür. Dikkat: Bu ehliyet ile sadece otomatik vitesli araçları kullanabilirsiniz.',
        requirements: [
            '18 yaşını doldurmuş olmak.',
            'En az ilkokul mezunu olmak.',
            'Sürücü sağlık raporu.',
            'Adli sicil kaydının uygun olması.'
        ],
        educationProcess: 'Eğitim süreci, manuel ehliyete göre daha hızlı ilerleyebilir çünkü vites mekaniği eğitimi yerine doğrudan trafik adaptasyonuna odaklanılır. Şerit takibi, ayna kontrolü, park etme teknikleri (L park ve paralel park) ve trafik işaretleri okuma konularına ağırlık verilir.',
        keywords: ['otomatik ehliyet', 'b otomatik', 'otomatik vites direksiyon', 'kolay ehliyet', 'bayan sürücü kursu']
    }
];

export const FAQS: FAQItemData[] = [
    {
        question: "Sürücü Kursu ve Ehliyet Fiyatları Ne Kadar?",
        answer: "Sürücü kursu fiyatları, bulunduğunuz şehre ve Valilik tarafından belirlenen taban fiyat komisyonu kararlarına göre dönemsel olarak güncellenmektedir. Sınav harçları (teorik ve direksiyon) ve nüfus müdürlüğü masrafları da her yıl değişebilmektedir. En doğru, güncel fiyat tablosunu öğrenmek ve dönemsel kampanyalarımızdan haberdar olmak için lütfen ofisimizle iletişime geçiniz."
    },
    {
        question: "Ehliyet Alma Süreci Toplamda Ne Kadar Sürer?",
        answer: "Kayıt tarihinizden itibaren ehliyetinizi elinize almanız ortalama 45-60 gün sürer. Bu süreç; teorik eğitim (2 hafta), e-sınav randevusu (yoğunluğa göre 1-2 hafta), direksiyon eğitimleri (2-3 hafta) ve direksiyon sınavını kapsar. Tek seferde tüm sınavlardan geçen adaylarımız yaklaşık 1.5 ayda ehliyetlerine kavuşabilir."
    },
    {
        question: "Kayıt İçin Gerekli Evraklar Nelerdir?",
        answer: "Sürücü kursuna kayıt için; 1 adet biyometrik fotoğraf, öğrenim belgesi (diploma veya öğrenci belgesi), adli sicil kaydı (e-devletten alınabilir) ve aile hekiminden veya yetkili hastanelerden alınmış 'Sürücü Olur' sağlık raporu gereklidir. Bu evrakları tamamladığınızda dönem kaydınız resmileşir."
    },
    {
        question: "Direksiyon Sınavından Kalırsam Ne Olur?",
        answer: "Direksiyon sınavında başarısız olursanız, üzülmeyin! Toplamda 4 sınav hakkınız bulunmaktadır. Kaldığınız takdirde, eksiklerinizi gidermek için zorunlu olarak 2 saatlik ek direksiyon dersi almanız ve bir sonraki sınav harcını yatırmanız gerekmektedir. Uzman eğitmenlerimizle eksiklerinizi tamamlayıp bir sonraki sınavda başarıya ulaşabilirsiniz."
    },
    {
        question: "Direksiyon Dersleri Ne Zaman ve Nerede Yapılıyor?",
        answer: "Direksiyon eğitimlerimiz, Milli Eğitim Bakanlığı tarafından onaylanmış resmi sınav güzergahında yapılmaktadır. Ders programları tamamen sizin (öğrenci veya çalışan) müsaitlik durumunuza göre hafta içi veya hafta sonu olarak kişiye özel planlanır. Akan trafikte tecrübe kazanmanız önceliğimizdir."
    },
    {
        question: "Otomatik Vites Ehliyeti Alan Manuel Araç Kullanabilir mi?",
        answer: "Hayır. B Sınıfı (Otomatik) ehliyet alan sürücüler, ehliyetlerinde belirtilen kod gereği sadece otomatik şanzımanlı araçları kullanabilirler. Manuel araç kullanmak isterseniz, daha sonra fark sınavına girerek ehliyetinizi manuel sınıfına yükseltmeniz gerekir. Manuel ehliyet sahipleri ise her iki aracı da kullanabilir."
    },
    {
        question: "Teorik Sınav (E-Sınav) Nasıl Yapılıyor?",
        answer: "Teorik sınavlar, belirlenen e-sınav merkezlerinde bilgisayar ortamında yapılır. Sınavda İlkyardım, Trafik ve Çevre, Araç Tekniği ve Trafik Adabı konularından toplam 50 soru sorulur. Yanlış doğruyu götürmez ve geçme notu 70 puandır (35 doğru). Sınav sonucunuzu, sınav biter bitmez kapıdaki kiosk cihazından öğrenebilirsiniz."
    },
    {
        question: "Yazılı Sınavdan Geçtim, Direksiyon Sınavına Ne Zaman Girerim?",
        answer: "Teorik sınavı başarıyla geçtikten sonra direksiyon dersi planlamanız yapılır. Yasal olarak zorunlu olan ders saatlerinizi tamamladıktan sonra, İlçe Milli Eğitim Müdürlüğü tarafından belirlenen en yakın tarihli sınava (genellikle hafta sonları) kaydınız yapılır."
    },
    {
        question: "Dosyamı Yaktım (Süre Aşımı) Ne Yapmalıyım?",
        answer: "Sertifika almaya hak kazandığınız tarihten itibaren 2 yıl içerisinde ehliyetinizi Nüfus Müdürlüğü'nden işletip kartınızı almazsanız dosyanız iptal olur (yanar). Bu durumda maalesef tüm sürece (kayıt, eğitim, sınavlar) en baştan başlamanız gerekir. Bu nedenle sertifikanızı aldıktan sonra vakit kaybetmeden ehliyetleştirmelisiniz."
    },
    {
        question: "İlkokul Mezunları Ehliyet Alabilir mi?",
        answer: "Evet, Karayolları Trafik Kanunu'na göre en az ilkokul mezunu olan (2. kademe okuryazarlık belgesi olanlar dahil) herkes sürücü belgesi almak için başvuru yapabilir. Eğitim durumu şartı, eskiden olduğu gibi ortaokul veya lise mezuniyeti gerektirmemektedir."
    },
    {
        question: "Farklı Şehirde Sınava Girebilir miyim?",
        answer: "Hayır, sürücü kursu mevzuatı gereği, kursa hangi ilçede kayıt olduysanız, teorik ve direksiyon sınavlarına o ilçenin bağlı olduğu sınav merkezlerinde ve güzergahlarında girmek zorundasınız."
    },
    {
        question: "Yabancı Uyruklular Ehliyet Alabilir mi?",
        answer: "Evet, Türkiye'de geçerli ikamet izni veya öğrenim vizesi bulunan, öğrenim belgesini noter onaylı Türkçe tercümesiyle ibraz edebilen yabancı uyruklu vatandaşlar da kursumuza kayıt olup ehliyet alabilirler."
    }
];

export const STATS: StatItemData[] = [
    { value: "15+", label: "Yıllık Tecrübe" },
    { value: "5000+", label: "Mezun Sürücü" },
    { value: "%95", label: "Sınav Başarısı" },
    { value: "20+", label: "Eğitim Aracı" },
];

export const BLOG_POSTS: BlogPostData[] = [
    // --- STAR 3 POSTS (HOMEPAGE MAGNETS) ---
    {
        id: "1",
        title: "Tek Hamlede Paralel Parkın Sırları",
        description: "Direksiyon sınavının en korkulan aşaması olan paralel parkı, basit referans noktalarıyla hatasız yapmanın yollarını öğrenin.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPIwYsjOG8b86-mD5OdqpII45xLwnR-klJcpVvXlqLnqqVv7wJsWzZjLOYm0gc3sUJSJOU5xvNZK-cAQkDguHDxMm1dzX2soywWp8age8wa3GYED20O4bZKvL66FtxBrRhkdWR1GYK8qoMG-E5iGI0f4houlOaYoMHVpijElBR7DPoi69JAI-sbSH8OSvJuS8c4WWOp4ch9X2DT4_xkUiMO4-PERh9vcYPi58fqs3W8docowXxQaJc57_W2-cgdwwO469cQ1UnTUmY",
        category: "Sürüş Teknikleri",
        categoryColorClass: "bg-primary",
        date: "Sınav Tüyoları",
        slug: "tek-hamlede-paralel-park",
        author: "Baş Eğitmen Ali Yılmaz",
        tags: ["direksiyon sınavı", "paralel park", "l park", "ehliyet sınavı"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Paralel Park Kabusunuz Olmasın</h2>
            <p class="mb-4">Sürücü adaylarının direksiyon sınavında en çok zorlandığı ve heyecanlandığı aşama kuşkusuz paralel parktır. Ancak doğru referans noktalarını bildiğinizde, bu işlem matematiksel bir kesinlikle her seferinde başarılı olur. İşte size "tek hamlede" parkın sırları.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">1. Başlangıç Konumu: Paralellik Esastır</h3>
            <p class="mb-4">Park alanına yaklaşırken dubalara olan mesafeniz çok önemlidir. Aracı, dubalara yaklaşık 50-60 cm uzaklıkta ve onlara tam paralel olacak şekilde durdurmalısınız. Yamuk durursanız, tüm açılar değişecektir.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">2. Kelebek Camı Taktik</h3>
            <p class="mb-4">Arka kelebek camınızda (veya arka kapı kolu hizasında) park edeceğiniz alanın ön dubasını gördüğünüz an durun. Bu sizin ilk ve en kritik referans noktanızdır.</p>
            
            <ul class="list-disc pl-6 mb-6 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <li><strong>Adım 1:</strong> Direksiyonu tam sağ yapın.</li>
                <li><strong>Adım 2:</strong> Sol dikiz aynasına bakın ve geriye doğru yavaşça gelin.</li>
                <li><strong>Adım 3:</strong> Sol aynada, arkadaki dubanın tamamını gördüğünüz an durun.</li>
                <li><strong>Adım 4:</strong> Direksiyonu 1.5 tur toplayarak (lastikleri düzleyerek) geriye gelmeye devam edin.</li>
            </ul>

            <h3 class="text-xl font-bold mb-3 mt-6">3. Son Hamle: İçeri Giriş</h3>
            <p class="mb-4">Ön sağ kapı kolunuz veya aynanız, öndeki duba ile hizalandığında direksiyonu tam sol yapın. Artık aracınızın burnu içeri girecek ve araç kaldırıma paralel hale gelecektir.</p>
            
            <div class="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 mb-6">
                <strong>İpucu:</strong> Sınavda acele etmeyin. Debriyajı yarım kavrama pozisyonunda tutarak aracın hızını kontrol altında tutun. Gerekirse durup derin bir nefes alın.
            </div>

            <p>Unutmayın, iyi bir sürücü sadece aracı park eden değil, çevre güvenliğini de sağlayan kişidir. Park ederken sinyallerinizi ve aynalarınızı kontrol etmeyi asla ihmal etmeyin.</p>
        `
    },
    {
        id: "2",
        title: "Direksiyon Sınavında Heyecanı Yenmenin 5 Altın Kuralı",
        description: "Elleriniz titriyor, kalbiniz küt küt mü atıyor? Sınav stresini yönetmek ve komisyona güven vermek için psikolojik hazırlık rehberi.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASj0y8K-yxeHUPgPeh1z9jrFqA9bblYxDhPJZRZa8MUPGVo5c6ZfSxaoxYLrwUp_h-uBA9hk1QbviV388v33B4oSWzRqJLK2Us4yR2gOJY5N0H-JAt7PXDDqekl1400sbE4tPtJR0FTzvHOtbteNsbgic6jPkv2uYPEMGdRbnERLh0MDIF4VPpprhXqy9SKcSyG-nVpocRqXW0Y7Tf_ZqrckWt4k6T85MkEb7aMsTf9jFROPAAob79nQh3yYLcCHOgXFrd8K2CBsPf",
        category: "Psikoloji",
        categoryColorClass: "bg-secondary",
        date: "Sınav Rehberi",
        slug: "direksiyon-sinavi-heyecan",
        author: "Eğitim Danışmanı",
        tags: ["sınav stresi", "direksiyon sınavı", "sürücü psikolojisi"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Sınavı Bilgi Değil, Heyecan Kaybettirir</h2>
            <p class="mb-4">Direksiyon sınavından kalan adayların %70'i araç kullanmayı bilmediği için değil, heyecanını kontrol edemediği için hata yapar. Sinyal vermeyi unutmak, aracı stop ettirmek veya aynaları kontrol etmemek genellikle stres kaynaklıdır.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">1. Komisyon Üyeleri Düşmanınız Değil</h3>
            <p class="mb-4">Arka koltukta oturan müfettişler sizi bırakmak için orada değiller. Onların tek amacı, trafiğe çıktığınızda hem kendinizin hem de başkalarının can güvenliğini tehlikeye atmayacağınızdan emin olmaktır. Onlara "Ben güvenli bir sürücüyüm" mesajını verin.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">2. İlk 5 Dakika Çok Önemli</h3>
            <p class="mb-4">Sınavın başladığı ilk anlarda heyecan doruktadır. Koltuk, ayna ve kemer ayarlarını yaparken acele etmeyin. Bu hazırlık süreci, hem araca alışmanızı hem de nefesinizi düzenlemenizi sağlar. Derin bir nefes alın ve "Hazırım" deyin.</p>

            <h3 class="text-xl font-bold mb-3 mt-6">3. Hata Yapmaktan Korkmayın</h3>
            <p class="mb-4">Sınavda stop ettirmek dünyanın sonu değildir (tabii ki tekrar etmemek kaydıyla). Eğer stop ederseniz, paniğe kapılıp hemen kontağı çevirmeyin. Sakince vitesi boşa alın, aracı çalıştırın, sinyalinizi verin ve yola devam edin. Soğukkanlılığınız size artı puan kazandıracaktır.</p>

            <ul class="list-disc pl-6 mb-6 space-y-2 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                <li>Sınavdan önceki gece iyi uyuyun.</li>
                <li>Kafeinli içeceklerden uzak durun, çarpıntıyı artırabilir.</li>
                <li>Rahat kıyafetler ve spor ayakkabı tercih edin.</li>
            </ul>

            <div class="bg-gray-100 p-4 rounded-xl mb-6 italic border-l-4 border-gray-500">
                "Araba kullanmak bir refleks işidir. Düşüncelerinizle değil, eğitimde kazandığınız kas hafızanızla hareket edin."
            </div>
        `
    },
    {
        id: "3",
        title: "L Park Yaparken En Sık Yapılan Hatalar",
        description: "Direksiyon sınavının kritik virajı: L park. Dubalara çarpmadan, tek seferde giriş ve çıkış yapmanın geometrik formülü.",
        image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
        category: "Sürüş Teknikleri",
        categoryColorClass: "bg-primary",
        date: "Sınav Tüyoları",
        slug: "l-park-hatalari",
        author: "Baş Eğitmen Ali Yılmaz",
        tags: ["l park", "direksiyon sınavı", "park teknikleri"],
        content: `
            <h2 class="text-2xl font-bold mb-4">L Parkın Matematiği</h2>
            <p class="mb-4">L park, aracınızı 90 derecelik bir açıyla geri geri park etme işlemidir. Sınavda en çok hata yapılan yerlerden biridir çünkü referans noktası kaçırıldığında düzeltme hakkı kısıtlıdır. İşte hatasız L park için bilmeniz gerekenler.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Hata 1: Yanlış Konumlanma</h3>
            <p class="mb-4">Park alanına yaklaşırken sağdaki dubalara çok yakın veya çok uzak durmak. İdeal mesafe araç genişliğine göre değişse de genellikle dubalara <strong>bir kol boyu (50-60 cm)</strong> mesafede ve paralel durmalısınız.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Hata 2: Erken veya Geç Direksiyon Kırma</h3>
            <p class="mb-4">Geri gelirken direksiyonu tam sağa kırmak için doğru anı beklemelisiniz. Genellikle eğitim araçlarında arka camın köşesinde dubayı gördüğünüz an referans alınır. Erken kırarsanız içteki dubaya, geç kırarsanız dıştaki dubaya veya kaldırıma çarparsınız.</p>
            
            <div class="bg-red-50 p-4 rounded-xl border-l-4 border-red-500 mb-6">
                <strong>Dikkat:</strong> L parktan çıkarken acele etmeyin! Çıkışta sağ sinyali unutmak "Kırmızı Hata" (kalma sebebi) sayılır. Ayrıca çıkarken de dubalara çarpmamak için ayna hizasına kadar düz çıkıp sonra direksiyonu kırmalısınız.
            </div>

            <h3 class="text-xl font-bold mb-3 mt-6">Altın Kural: Aynaları Kullanın</h3>
            <p>Geri gelirken her iki yan aynayı da aktif olarak kullanın. Sadece tek bir tarafa odaklanmak, diğer taraftaki tehlikeyi görmenizi engeller. Araç düzeldiğinde direksiyonu 1.5 tur toplayıp durmayı unutmayın.</p>
        `
    },
    // --- THE REMAINING 15 POSTS ---
    {
        id: "4",
        title: "Debriyaj Kavrama Noktası Nasıl Bulunur?",
        description: "Aracı stop ettirmekten korkuyor musunuz? Debriyajın mantığını ve kavrama noktasını hissetmeyi öğrenerek bu sorunu tarihe gömün.",
        image: "https://images.unsplash.com/photo-1597006859346-6c84c703b603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
        category: "Teknik Bilgi",
        categoryColorClass: "bg-blue-600",
        date: "Sürüş Temelleri",
        slug: "debriyaj-kavrama-noktasi",
        author: "Teknik Eğitmen",
        tags: ["debriyaj", "manuel vites", "kalkış"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Debriyaj ile Dost Olun</h2>
            <p class="mb-4">Manuel vitesli araç kullanmanın en zor kısmı gibi görünse de, mantığını anladığınızda debriyaj sizin en iyi yardımcınızdır. Debriyaj, motorun gücünü tekerleklere ileten köprüdür.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Kavrama Noktası Nedir?</h3>
            <p class="mb-4">Debriyaj pedalını yavaşça kaldırdığınızda, motor sesinin değiştiği ve aracın <strong>hafifçe titremeye başladığı</strong> o an, kavrama noktasıdır. Bu noktada motor gücü tekerleklere iletilmeye başlanmıştır ama araç henüz tam hareket etmemiştir.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Stop Ettirmemek İçin Ne Yapmalı?</h3>
            <ul class="list-disc pl-6 mb-6 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <li><strong>Adım 1:</strong> Debriyaja tam basın ve vitesi 1'e alın.</li>
                <li><strong>Adım 2:</strong> Ayağınızı milim milim kaldırın. Titremeyi (kavramayı) hissettiğinizde <strong>AYAĞINIZI ORADA DONDURUN.</strong></li>
                <li><strong>Adım 3:</strong> Araç 2-3 metre hareket edene kadar ayağınızı o noktada tutun (buna yarım debriyaj denir).</li>
                <li><strong>Adım 4:</strong> Araç hızlanınca ayağınızı tamamen çekebilirsiniz.</li>
            </ul>

            <div class="bg-blue-50 p-4 rounded-xl mb-6">
                <strong>İpucu:</strong> Topuğunuz yerde sabit kalsın, sadece parmak ucunuzu kaldırın. Bu size daha hassas bir kontrol sağlar. Topuğunuz havadaysa bacağınız yorulur ve titreme yapar, bu da stop ettirmenize neden olur.
            </div>
        `
    },
    {
        id: "5",
        title: "Yokuş Kalkış Desteği Olmadan Yokuşta Nasıl Kalkılır?",
        description: "Teknolojisiz sürüş becerisi: Rampada aracı geri kaçırmadan kaldırmanın mekanik yöntemleri ve el freni taktiği.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
        category: "Sürüş Teknikleri",
        categoryColorClass: "bg-primary",
        date: "İleri Sürüş",
        slug: "yokus-kalkis-teknikleri",
        author: "Baş Eğitmen Ali Yılmaz",
        tags: ["yokuş kalkış", "rampa", "el freni"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Rampaların Efendisi Olun</h2>
            <p class="mb-4">Yeni nesil araçlarda "Hill Holder" (Yokuş Kalkış Desteği) olsa da, gerçek bir sürücü bu destek olmadan da aracı kaldırmayı bilmelidir. Sınavda veya eski bir araçta bu yeteneğe ihtiyacınız olacak.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Yöntem 1: Yarım Debriyaj Tekniği</h3>
            <p class="mb-2">En yaygın kullanılan ve pratik yöntemdir.</p>
            <ol class="list-decimal pl-6 mb-6 space-y-2">
                <li>Sağ ayağınız fren pedalında basılı olsun.</li>
                <li>Sol ayağınızla debriyajı kavrama noktasına (titreme noktasına) getirin.</li>
                <li>Araç ileri gitmek isteyip frenle tutulduğu için motor sesi değişecek ve devir saati biraz düşecektir.</li>
                <li>Bu titremeyi yakaladığınızda, sağ ayağınızı frenden çekip gaza basın. Araç bir milim bile geri kaymadan kalkacaktır.</li>
            </ol>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Yöntem 2: El Freni Tekniği</h3>
            <p class="mb-2">Çok dik yokuşlarda veya acemi sürücüler için en güvenli yöntemdir.</p>
            <ol class="list-decimal pl-6 mb-6 space-y-2">
                <li>Yokuşta durduğunuzda el frenini çekin.</li>
                <li>Gaza basarak motor devrini yükseltin (2000-2500 devir).</li>
                <li>Debriyajı kavrama noktasına getirin, aracın arkası hafifçe yere çökecektir (kalkmaya hazır).</li>
                <li>Bu noktada el frenini indirirken gaza basmaya devam edin.</li>
            </ol>

            <div class="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-500">
                <strong>Önemli:</strong> Yokuşta kalkarken stop ettirirseniz panik yapmayın. Hemen frene basın, el frenini çekin ve işlemi baştan sakince yapın.
            </div>
        `
    },
    {
        id: "6",
        title: "Ayna Ayarı Nasıl Yapılır? Kör Noktaları Yok Edin",
        description: "Sadece arkanızı görmek yetmez. Kör noktaları minimize eden doğru ayna ayarı ile şerit değiştirmek artık daha güvenli.",
        image: "https://images.unsplash.com/photo-1552176625-e47ff529b595?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
        category: "Güvenlik",
        categoryColorClass: "bg-green-600",
        date: "Güvenli Sürüş",
        slug: "ayna-ayari-nasil-yapilir",
        author: "Trafik Eğitmeni",
        tags: ["ayna ayarı", "kör nokta", "güvenlik"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Görmediğiniz Tehlike En Büyük Tehlikedir</h2>
            <p class="mb-4">Birçok sürücü aynalarını yanlış ayarlayarak aracın kaportasını seyreder. Oysa aynaların amacı yolu ve trafiği göstermektir. İşte %90 Yol, %10 Araç kuralı.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">1. İç Dikiz Aynası</h3>
            <p class="mb-4">Başınızı oynatmadan sadece göz hareketleriyle arka camın tamamını görebilecek şekilde ayarlayın. Arka camın dört köşesi de aynanın içinde olmalıdır.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">2. Yan Aynalar (Kapı Kolu Taktiği)</h3>
            <p class="mb-4">Yan aynalarda kendi aracınızı ne kadar az görürseniz, kör noktanız o kadar azalır.</p>
            <ul class="list-disc pl-6 mb-6 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <li>Sürücü koltuğuna normal pozisyonda oturun.</li>
                <li>Sol aynayı ayarlarken, ön kapı kolunu aynanın sağ alt köşesinde minik bir nokta olarak görene kadar aynayı dışa açın.</li>
                <li>Sağ aynayı ayarlarken, ön kapı kolunu aynanın sol alt köşesinde görene kadar dışa açın.</li>
                <li>Ufuk çizgisi (yolun bittiği yer) aynanın tam ortasına gelmelidir.</li>
            </ul>

            <h3 class="text-xl font-bold mb-3 mt-6">Kör Nokta Kontrolü</h3>
            <p>Ne kadar iyi ayarlarsanız ayarlayın, her zaman bir kör nokta vardır. Şerit değiştirirken sadece aynaya güvenmeyin; başınızı hafifçe çevirerek (omuz üstü bakış) yanınızdaki şeridi saniyelik kontrol edin.</p>
        `
    },
    {
        id: "7",
        title: "Direksiyon Sınavında Kalma Sebepleri: 'Kırmızı Hata' Nedir?",
        description: "Sınavda tek seferde kalmanıza neden olan 'Kırmızı Hatalar' nelerdir? Emniyet kemerinden sinyale kadar kritik kontrol listesi.",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        category: "Sınav Rehberi",
        categoryColorClass: "bg-red-600",
        date: "Sınav Kuralları",
        slug: "direksiyon-sinavi-kirmizi-hatalar",
        author: "Sınav Komisyon Üyesi",
        tags: ["sınav puanlama", "kırmızı hata", "direksiyon sınavı"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Tek Hatada Sınav Biter</h2>
            <p class="mb-4">Direksiyon sınavında hatalar renklerle kodlanmıştır. Sarı hatalar (örneğin stop ettirmek) size bir hak daha tanır, ancak <strong>Kırmızı Hata</strong> yaptığınız anda sınav o saniye sonlandırılır.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">En Yaygın Kırmızı Hatalar</h3>
            <div class="space-y-4">
                <div class="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
                    <h4 class="font-bold text-red-700">1. Emniyet Kemeri</h4>
                    <p class="text-sm">Araca bindiğinizde kemeri takmadan aynaları düzeltmeye veya aracı çalıştırmaya başlarsanız sınav başlamadan biter.</p>
                </div>
                <div class="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
                    <h4 class="font-bold text-red-700">2. Sinyal Vermemek</h4>
                    <p class="text-sm">Kalkışlarda, şerit değiştirmelerde, dönüşlerde ve park alanına giriş-çıkışlarda sinyal vermemek kesin kalma sebebidir. "Unuttum" bahanesi kabul edilmez.</p>
                </div>
                <div class="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
                    <h4 class="font-bold text-red-700">3. Trafik Işıkları ve Levhalar</h4>
                    <p class="text-sm">Kırmızı ışıkta geçmek veya "DUR" levhasında tam duruş yapmamak (yavaşlayıp geçmek yetmez, tekerlekler durmalı).</p>
                </div>
                <div class="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
                    <h4 class="font-bold text-red-700">4. Yaya Önceliği</h4>
                    <p class="text-sm">Yaya geçidinde bekleyen veya geçmekte olan yayaya yol vermemek.</p>
                </div>
            </div>

            <p class="mt-6 font-semibold">Bu kurallar sizi zorlamak için değil, hayatta tutmak için vardır. Sınavda değil, trafikteymiş gibi düşünün ve kurallara uyun.</p>
        `
    },
    {
        id: "8",
        title: "Manuel mi Otomatik mi? Hangi Ehliyet Sınıfı Size Uygun?",
        description: "B Manuel mi yoksa B Otomatik mi almalısınız? İhtiyaçlarınıza, bütçenize ve sürüş hedeflerinize göre doğru tercihi yapın.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        category: "Rehber",
        categoryColorClass: "bg-purple-600",
        date: "Ehliyet Seçimi",
        slug: "manuel-mi-otomatik-mi",
        author: "Eğitim Danışmanı",
        tags: ["ehliyet sınıfı", "otomatik vites", "manuel vites"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Karar Anı: Sol Ayak Kullanılacak mı?</h2>
            <p class="mb-4">Ehliyet kursuna kaydolurken en sık sorulan sorulardan biri budur. Karar vermeden önce iki sınıfın avantajlarını ve dezavantajlarını iyi analiz etmelisiniz.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Manuel Ehliyetin Avantajları</h3>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Her Aracı Kullanır:</strong> Manuel ehliyet alanlar, hem manuel hem de otomatik vitesli araçları yasal olarak kullanabilir.</li>
                <li><strong>Daha Ucuz Araçlar:</strong> İkinci el piyasasında manuel araçlar genellikle daha uygundur.</li>
                <li><strong>Tam Hakimiyet:</strong> Aracı devirli kullanmak ve motor freni yapmak manuelde daha etkilidir.</li>
            </ul>

            <h3 class="text-xl font-bold mb-3 mt-6">Otomatik Ehliyetin Avantajları</h3>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Sınavda Kolaylık:</strong> Stop ettirme riski olmadığı ve yokuşta geri kaçırmadığı için sınavı geçmek çok daha kolaydır.</li>
                <li><strong>Şehir İçi Konfor:</strong> Yoğun trafikte sürekli debriyaj-vites yapmamak büyük bir konfor sağlar.</li>
                <li><strong>Hızlı Öğrenme:</strong> Vitesle uğraşmadığınız için trafiğe ve yola odaklanmanız hızlanır.</li>
            </ul>

            <div class="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-6">
                <strong>Kritik Uyarı:</strong> Otomatik ehliyet alırsanız, ehliyetinizde özel bir kod bulunur ve polis kontrolünde manuel araç kullandığınız tespit edilirse ceza alırsınız ve aracınız bağlanabilir. Manuel kullanmak için tekrar sınava girmeniz gerekir.
            </div>

            <p class="font-bold">Özetle: Gelecekte şirket aracı veya farklı araçlar kullanma ihtimaliniz varsa Manuel; sadece kendi aracımı kullanırım, konfor benim için önemli diyorsanız Otomatik tercih edebilirsiniz.</p>
        `
    },
    {
        id: "9",
        title: "Araç Gösterge Panelindeki İkaz Işıkları ve Anlamları",
        description: "Motor arıza lambası neden yanar? Kırmızı ve sarı ışıklar arasındaki fark nedir? Bilinçli bir sürücü olmak için bilmeniz gerekenler.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJcb-apx0sNBk-LE8ayPO1cl3nbRsn6Uu-SXjUFo0ST1x0ottxF1RvubZ9HqLRZDuU_3gfiC-_0Kvum3xvqulpb_fQWomQF3qX-aUGOa1rM5rMBCsSTRZaK1pn6NFWkxTbpu3NBpdQTziMuDu-YSvtMjOjGWN3kkuId3_1ceGjbxrlh2ZLkEtx2LB4MPm2xLTMkfSFfJn96iiC-XlVti4abqo7rmZX1qYitOqjVvWRhzbvp1vYOf7tyAb05KZo_DPiDK0uRKcDGE7Q",
        category: "Teknik Bilgi",
        categoryColorClass: "bg-red-500",
        date: "Araç Bakımı",
        slug: "gosterge-ikaz-isiklari",
        author: "Teknik Eğitmen",
        tags: ["araç bakımı", "ikaz lambaları", "motor arıza", "güvenli sürüş"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Aracınız Sizinle Konuşuyor, Onu Dinleyin</h2>
            <p class="mb-4">Modern otomobiller, bir sorun olduğunda sürücüyü uyaracak gelişmiş sensörlerle donatılmıştır. Gösterge panelindeki ışıkların rengi, sorunun aciliyetini belirtir.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Renklerin Dili</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                    <strong class="text-red-600 block mb-1">Kırmızı Işıklar: DUR!</strong>
                    Hayayi bir tehlike veya ciddi bir arıza var demektir. Aracı güvenli bir yere çekip motoru durdurmalısınız. Örnek: Yağ lambası, Hararet göstergesi.
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <strong class="text-yellow-600 block mb-1">Sarı Işıklar: DİKKAT!</strong>
                    Bir sorun var ama yola devam edebilirsiniz. Ancak en kısa sürede servise gitmelisiniz. Örnek: Motor arıza lambası, Lastik basınç uyarısı.
                </div>
            </div>

            <h3 class="text-xl font-bold mb-3 mt-6">En Önemli 3 İkaz Lambası</h3>
            
            <h4 class="font-bold text-lg mt-4">1. Yağ Basıncı İkazı (Çaydanlık Benzeri Simge)</h4>
            <p class="mb-2">Motorun yağlamayı yapamadığını gösterir. <strong>Hemen durun!</strong> Yağsız çalışan motor saniyeler içinde kilitlenir ve binlerce liralık masraf açar.</p>

            <h4 class="font-bold text-lg mt-4">2. Akü Şarj İkazı (Pil Simgesi)</h4>
            <p class="mb-2">Alternatörün aküyü şarj etmediğini gösterir. Araç bir süre daha aküdeki enerjiyle gider ancak stop ederseniz tekrar çalışmayabilir.</p>

            <h4 class="font-bold text-lg mt-4">3. Hararet Göstergesi</h4>
            <p class="mb-4">Motor soğutma suyunun aşırı ısındığını gösterir. Aracı durdurun ancak motoru hemen kapatmayın (rolantide çalışsın) ve kaputu açıp soğumasını bekleyin. Radyatör kapağını asla sıcakken açmayın!</p>

            <p class="mt-6">Sınavda da komisyon üyeleri size "Aracı kullanırken hangi lamba yanarsa aracı durdurursun?" diye sorabilir. Cevap: Yağ lambası, Hararet ve Akü lambasıdır.</p>
        `
    },
    {
        id: "10",
        title: "Doğru Direksiyon Tutuşu: 9.15 Kuralı Nedir?",
        description: "Direksiyonu tek elle mi, alttan mı tutuyorsunuz? Güvenli manevra ve airbag güvenliği için uluslararası standart olan 9.15 tutuşunu öğrenin.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        category: "Sürüş Teknikleri",
        categoryColorClass: "bg-primary",
        date: "Sürüş Temelleri",
        slug: "dogru-direksiyon-tutusu",
        author: "Baş Eğitmen Ali Yılmaz",
        tags: ["direksiyon tutuşu", "güvenli sürüş", "sürüş tekniği"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Direksiyonu Nasıl Tutmalısınız?</h2>
            <p class="mb-4">Direksiyon tutuşu sadece bir stil meselesi değil, hayati bir güvenlik konusudur. Yanlış tutuş, ani bir manevrada kontrolü kaybetmenize veya kaza anında açılan hava yastığının kolunuzu kırmasına neden olabilir.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Eski Kural (10:10) vs Yeni Kural (9:15)</h3>
            <p class="mb-4">Eskiden direksiyonun 10 ve 2 yönünde tutulması öğretilirdi. Ancak modern araçlardaki hava yastığı teknolojisi ve direksiyon ergonomisi nedeniyle artık geçerli olan kural <strong>9:15 (veya 3:45)</strong> tutuşudur.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Neden 9:15?</h3>
            <ul class="list-disc pl-6 mb-6 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <li><strong>Maksimum Manevra:</strong> Kollarınızı çaprazlamadan direksiyonu en geniş açıyla çevirebilmenizi sağlar.</li>
                <li><strong>Airbag Güvenliği:</strong> Kaza anında direksiyon göbeğinden patlayan hava yastığı, kollarınızı yüzünüze çarpmaz, aradan geçer.</li>
                <li><strong>Yorgunluk Önleyici:</strong> Kollarınız vücudunuza daha yakın durduğu için omuzlarınız daha az yorulur.</li>
            </ul>

            <div class="bg-red-50 p-4 rounded-xl border-l-4 border-red-500 mb-6">
                <strong>Asla Yapmayın:</strong> Direksiyonu tek elle tepe noktasından (saat 12) tutmayın veya elinizi direksiyon simidinin içinden geçirmeyin.
            </div>
        `
    },
    {
        id: "11",
        title: "Lastik Basıncı ve Diş Derinliği Kontrolü",
        description: "Yola tutunan tek şey lastiklerinizdir. İdeal basınç ne olmalı ve lastiğin ömrünün bittiğini nasıl anlarsınız?",
        image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
        category: "Araç Bakımı",
        categoryColorClass: "bg-orange-600",
        date: "Lastik Bakımı",
        slug: "lastik-basinci-kontrolu",
        author: "Teknik Servis Uzmanı",
        tags: ["lastik basıncı", "araç bakımı", "güvenlik"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Hayatınız 4 Avuç Lastiğe Bağlı</h2>
            <p class="mb-4">Aracınız ne kadar teknolojik olursa olsun, yerle temas eden tek nokta lastiklerinizdir. Bakımsız lastik, fren mesafesini uzatır ve virajda savrulmanıza neden olur.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">1. Doğru Basınç Nerede Yazar?</h3>
            <p class="mb-4">Her aracın ideal lastik basıncı farklıdır. Bu bilgi genellikle şoför kapısının içindeki etikette veya benzin depo kapağının içinde yazar. "Göz kararı" veya "her lastiğe 32 bas" mantığı yanlıştır.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">2. Diş Derinliği Testi (Madeni Para Yöntemi)</h3>
            <p class="mb-4">Yasal sınır 1.6 mm olsa da, güvenlik için 3 mm'nin altına düşmemelidir. Basit bir test yapabilirsiniz:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>1 TL madeni parayı lastik dişinin arasına sokun.</li>
                <li>Atatürk'ün yüzü tamamen görünüyorsa (dış halka kapanmıyorsa), lastiğiniz aşınmıştır ve değişmesi gerekir.</li>
            </ul>

            <h3 class="text-xl font-bold mb-3 mt-6">Lastik Ömrü</h3>
            <p>Lastikler hiç kullanılmasa bile kauçuk yapısı zamanla sertleşir. Üretim tarihinden itibaren 5 yılı geçen lastikler, dişleri sağlam görünse bile yol tutuş özelliğini kaybeder.</p>
        `
    },
    {
        id: "12",
        title: "Gece Sürüşü: Karanlıkta Güvenli Yolculuk",
        description: "Gece sürüşünde far kullanımı, yorgunluk belirtileri ve karşıdan gelen ışıkla başa çıkma yöntemleri.",
        image: "https://images.unsplash.com/photo-1519280376657-37b58832c324?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        category: "Güvenlik",
        categoryColorClass: "bg-indigo-900",
        date: "İleri Sürüş",
        slug: "gece-surusu-teknikleri",
        author: "İleri Sürüş Uzmanı",
        tags: ["gece sürüşü", "far kullanımı", "trafik güvenliği"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Karanlıkta Görünür ve Güvende Olun</h2>
            <p class="mb-4">Trafik kazalarının büyük bir kısmı gece saatlerinde gerçekleşir. Görüş mesafesinin azalması ve biyolojik saatin getirdiği yorgunluk, riski artırır.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Uzun ve Kısa Far Kullanımı</h3>
            <ul class="list-disc pl-6 mb-6 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <li><strong>Şehir İçi:</strong> Aydınlatmanın yeterli olduğu yerlerde sadece kısa farlar (yakını gösteren) kullanılır.</li>
                <li><strong>Şehir Dışı:</strong> Aydınlatmasız yollarda uzun farları yakın. Ancak karşıdan araç gelirken veya bir aracı yakından takip ederken mutlaka kısaya dönün.</li>
            </ul>

            <h3 class="text-xl font-bold mb-3 mt-6">Karşıdan Gelen Işık Gözümü Alıyor?</h3>
            <p class="mb-4">Karşı şeritten gelen araç uzunlarını söndürmüyorsa, selektör yaparak uyarın. Hala söndürmüyorsa, gözlerinizi o ışığa odaklamayın. Bakışlarınızı kendi şeridinizin sağ çizgisine (banket çizgisine) odaklayarak yolu takip edin.</p>

            <div class="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500 mb-6">
                <strong>Yorgunluk Uyarısı:</strong> Gece sürüşünde göz kapaklarınız ağırlaşırsa, camı açmak veya müzik dinlemek kalıcı çözüm değildir. En güvenli yöntem, aracı güvenli bir yere çekip 15-20 dakika uyumaktır.
            </div>
        `
    },
    {
        id: "13",
        title: "Yağmurlu ve Karlı Havada Sürüş Teknikleri",
        description: "Aquaplaning (su yastığı) nedir? Kaygan zeminde fren nasıl yapılır? Kış aylarında hayat kurtaran sürüş tüyoları.",
        image: "https://images.unsplash.com/photo-1511246985062-87ff3f0b07a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        category: "Sürüş Teknikleri",
        categoryColorClass: "bg-blue-400",
        date: "Kış Sürüşü",
        slug: "yagmurlu-karli-surus",
        author: "İleri Sürüş Uzmanı",
        tags: ["kış lastiği", "yağmurlu hava", "kaygan zemin"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Zorlu Hava Şartlarında Panik Yapmayın</h2>
            <p class="mb-4">Yağmurun ilk başladığı an, yolların en kaygan olduğu andır. Yol üzerindeki toz ve yağ kalıntıları suyla birleşerek sabunsu bir tabaka oluşturur.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Aquaplaning (Su Yastığı) Nedir?</h3>
            <p class="mb-4">Lastik kanalları suyu tahliye edemediğinde, araç suyun üzerine çıkar ve direksiyon hakimiyeti tamamen kaybolur. Buna aquaplaning denir.</p>
            <p><strong>Ne Yapmalısınız?</strong></p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>Ayağınızı gazdan yavaşça çekin.</li>
                <li>Asla ani fren yapmayın.</li>
                <li>Direksiyonu ani kırmayın, düz tutmaya çalışın.</li>
            </ul>

            <h3 class="text-xl font-bold mb-3 mt-6">Takip Mesafesi</h3>
            <p class="mb-4">Kuru havada 2 saniye olan takip mesafesini, yağmurlu havada 4 saniyeye, karlı havada ise 6 saniyeye çıkarın. ABS olsa bile durma mesafeniz ciddi oranda artacaktır.</p>

            <div class="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 mb-6">
                <strong>Buharlaşma Sorunu:</strong> Kışın camlar içeriden buğulanırsa, klimayı çalıştırın (sıcak modda olsa bile A/C açık olsun). Klima nemi alır ve buğuyu en hızlı şekilde çözer.
            </div>
        `
    },
    {
        id: "14",
        title: "Güvenli Şerit Değiştirme: SMS Kuralı",
        description: "Şerit değiştirirken yapılan hatalar kazaların baş sebebidir. Sinyal, Ayna ve Omuz Bakışı (Kör Nokta) üçlemesini alışkanlık haline getirin.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1421&q=80",
        category: "Güvenlik",
        categoryColorClass: "bg-green-600",
        date: "Trafik Kuralları",
        slug: "serit-degistirme-kurallari",
        author: "Trafik Eğitmeni",
        tags: ["şerit değiştirme", "trafik güvenliği", "kör nokta"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Şerit Değiştirmek Bir Sanattır</h2>
            <p class="mb-4">Trafikte en tehlikeli manevralardan biri şerit değiştirmektir. "Sinyal verdim, geçebilirim" düşüncesi yanlıştır. Sinyal bir izin isteme değil, niyet belirtme aracıdır.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">SMS Kuralı (Sinyal - Ayna - Omuz)</h3>
            <ol class="list-decimal pl-6 mb-6 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <li><strong>Sinyal (S):</strong> Niyetinizi önceden belli edin. Manevraya başlamadan en az 3-5 saniye önce sinyalinizi verin.</li>
                <li><strong>Ayna (M):</strong> Dikiz ve yan aynaları kontrol edin. Arkadaki aracın hızı ve mesafesi uygun mu?</li>
                <li><strong>Shoulder / Omuz (S):</strong> Aynaların gösteremediği kör noktayı kontrol etmek için başınızı hafifçe omuz hizasından çevirip yan şeride bakın.</li>
            </ol>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Hız Ayarlaması</h3>
            <p class="mb-4">Geçeceğiniz şeridin hızına uyum sağlamalısınız. Yavaşlayarak şerit değiştirmek, arkadan gelen trafiği tehlikeye atar. Mümkünse hızlanarak geçiş yapın.</p>

            <p><strong>Unutmayın:</strong> Kesik çizgilerde şerit değiştirebilirsiniz, düz çizgilerde şerit değiştirmek yasaktır.</p>
        `
    },
    {
        id: "15",
        title: "Takip Mesafesi: 88-89 Kuralı Nedir?",
        description: "Öndeki araca ne kadar yaklaşmalısınız? Bilimsel takip mesafesi hesaplama yöntemi ve 2 saniye kuralının önemi.",
        image: "https://images.unsplash.com/photo-1506469717960-433cebe3f181?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        category: "Güvenlik",
        categoryColorClass: "bg-red-500",
        date: "Trafik Kuralları",
        slug: "takip-mesafesi-kurali",
        author: "Trafik Eğitmeni",
        tags: ["takip mesafesi", "trafik güvenliği", "fren mesafesi"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Tampon Tampona Gitmek Ustalık Değildir</h2>
            <p class="mb-4">Zincirleme kazaların en büyük sebebi yetersiz takip mesafesidir. Hızınız ne olursa olsun, güvenli bir duruş için mesafe bırakmalısınız.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Yarı Yarıya Kuralı (Metre Cinsinden)</h3>
            <p class="mb-4">Pratik olarak, hızınızın yarısı kadar metre mesafe bırakmalısınız. <br>Örn: 90 km/s ile gidiyorsanız, en az 45 metre mesafe olmalı.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">2 Saniye (88-89) Kuralı</h3>
            <p class="mb-4">Mesafeyi metre olarak tahmin etmek zordur. Bunun yerine zamanı kullanın:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <li>Öndeki araç bir levhayı veya ağacı geçtiğinde saymaya başlayın: "Seksen sekiz, seksen dokuz".</li>
                <li>Bu iki kelimeyi normal hızda söylemek yaklaşık 2 saniye sürer.</li>
                <li>Sözünüz bittiğinde siz de o levhaya yeni geldiyseniz mesafeniz doğrudur. Daha önce geçtiyseniz çok yakınsınız demektir.</li>
            </ul>

            <div class="bg-red-50 p-4 rounded-xl border-l-4 border-red-500 mb-6">
                <strong>İstisna:</strong> Yağmurlu, karlı veya sisli havalarda bu süreyi 3-4 saniyeye çıkarın.
            </div>
        `
    },
    {
        id: "16",
        title: "Motor Yağı ve Suyu Kontrolü: Haftalık Rutin",
        description: "Sürücünün kaputu açtığında bilmesi gerekenler. Motor yağı nasıl ölçülür? Silecek suyu ve antifriz nereye konur?",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        category: "Araç Bakımı",
        categoryColorClass: "bg-orange-600",
        date: "Araç Bakımı",
        slug: "motor-yagi-suyu-kontrol",
        author: "Teknik Servis Uzmanı",
        tags: ["motor yağı", "araç bakımı", "antifriz"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Aracınıza İyi Bakın, O da Sizi Yolda Bırakmasın</h2>
            <p class="mb-4">Ehliyet sınavında da sorulan motor kaputu altındaki bileşenleri tanımak, basit arızaları önlemenizi sağlar.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Motor Yağı Kontrolü</h3>
            <p class="mb-2">Araç düz bir zeminde olmalı ve motor soğuk (veya stop ettikten sonra 10 dk beklemiş) olmalıdır.</p>
            <ol class="list-decimal pl-6 mb-6 space-y-2">
                <li>Yağ çubuğunu çekin ve temiz bir bezle silin.</li>
                <li>Çubuğu tekrar yerine takıp çekin.</li>
                <li>Yağ seviyesi çubuktaki iki çizgi (Min ve Max) arasında olmalıdır.</li>
            </ol>

            <h3 class="text-xl font-bold mb-3 mt-6">Motor Soğutma Suyu (Antifriz)</h3>
            <p class="mb-4">Şeffaf yedek su deposuna bakın. Su seviyesi işaretli çizgiler arasında olmalıdır. Eksilmişse kireçsiz saf su ve antifriz karışımı ekleyin. <strong>Dikkat: Motor sıcakken kapağı asla açmayın!</strong></p>

            <h3 class="text-xl font-bold mb-3 mt-6">Silecek Suyu</h3>
            <p>Mavi kapaklı haznedir. Kışın donmaması için mutlaka cam suyu antifrizi ekleyin. Aksi takdirde hem su donar hem de silecek motorunu yakabilir.</p>
        `
    },
    {
        id: "17",
        title: "Dönel Kavşaklarda Geçiş Hakkı Kimindir?",
        description: "Ada etrafında dönerken yol kimin? Trafikte en çok kafa karışıklığı yaratan dönel kavşak kuralları.",
        image: "https://images.unsplash.com/photo-1605218427306-635443a1f9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1488&q=80",
        category: "Trafik Kuralları",
        categoryColorClass: "bg-purple-600",
        date: "Trafik Kuralları",
        slug: "donel-kavsak-kurallari",
        author: "Trafik Eğitmeni",
        tags: ["kavşak kuralları", "geçiş üstünlüğü", "trafik"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Ada İçindeki Kraldır</h2>
            <p class="mb-4">Ülkemizde en çok ihlal edilen kurallardan biri kavşak öncelikleridir. Kural aslında çok basittir: Kavşağa giren değil, kavşak içinde dönen araç önceliklidir.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Temel Kural</h3>
            <p class="mb-4">Dönel kavşağa (göbeğe) yaklaşırken yavaşlayın. Eğer kavşak içinde (adanın etrafında) dönen bir araç varsa, durup ona yol vermelisiniz. O araç geçtikten sonra kavşağa girebilirsiniz.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Kavşak İçinde Şerit Takibi</h3>
            <ul class="list-disc pl-6 mb-6 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <li><strong>Sola dönecekseniz:</strong> Kavşağa sol şeritten girin ve iç şeridi (göbeğe yakın olanı) kullanın.</li>
                <li><strong>Düz gidecekseniz:</strong> Orta veya sağ şeridi kullanabilirsiniz.</li>
                <li><strong>Sağa dönecekseniz:</strong> Kavşağa sağ şeritten girin ve sağdan çıkın.</li>
            </ul>

            <div class="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-6">
                <strong>Sinyal Kullanımı:</strong> Kavşağa girerken değil, kavşaktan ÇIKARKEN sağ sinyal vermelisiniz. Bu, arkanızdaki ve kavşağa girmek için bekleyen araçlara "Ben çıkıyorum, girebilirsiniz" mesajı verir.
            </div>
        `
    },
    {
        id: "18",
        title: "Yakıt Tasarrufu Sağlayan Sürüş Teknikleri",
        description: "Benzin istasyonuna daha az uğramak ister misiniz? Agresif kullanımdan kaçınarak ve doğru vitesle %20'ye varan tasarruf sağlayın.",
        image: "https://images.unsplash.com/photo-1606103920295-9a091573f160?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        category: "Sürüş Teknikleri",
        categoryColorClass: "bg-green-500",
        date: "Ekonomik Sürüş",
        slug: "yakit-tasarrufu-teknikleri",
        author: "Teknik Eğitmen",
        tags: ["yakıt tasarrufu", "ekonomik sürüş", "araç kullanımı"],
        content: `
            <h2 class="text-2xl font-bold mb-4">Cebinizi ve Çevreyi Koruyun</h2>
            <p class="mb-4">Yakıt tüketimi sadece araca değil, sürücünün kullanım tarzına da bağlıdır. Aynı araçla iki farklı sürücü arasında %20'ye varan tüketim farkı oluşabilir.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">1. Agresif Sürüşten Kaçının</h3>
            <p class="mb-4">Ani hızlanmak ve ani fren yapmak yakıtı kelimenin tam anlamıyla "içer". Kalkışlarda gaza yumuşak basın ve hızınızı sabit tutmaya çalışın.</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">2. Doğru Vites Kullanımı</h3>
            <p class="mb-4">Motoru bağırtmayın. Devir saati 2000-2500 arasına geldiğinde vites yükseltin. Düşük viteste yüksek hız yapmak yakıt tüketimini artırır.</p>

            <h3 class="text-xl font-bold mb-3 mt-6">3. Motor Freni (Cut-Off)</h3>
            <p class="mb-4">Yokuş aşağı inerken vitesi boşa ATMAYIN. Vites boşta araç rölanti yakıtı harcar. Oysa viteste ayağınızı gazdan çekerseniz (motor freni), yeni nesil araçlar yakıt akışını tamamen keser ve tüketim 0.0 litre olur.</p>

            <ul class="list-disc pl-6 mb-6 space-y-2 bg-green-50 p-4 rounded-xl border border-green-200">
                <li>Lastik basınçlarını düzenli kontrol edin (Düşük basınç tüketimi artırır).</li>
                <li>Gereksiz yükleri bagajdan çıkarın.</li>
                <li>Uzun süreli beklemelerde (1 dk üzeri) kontağı kapatın.</li>
            </ul>
        `
    }
];