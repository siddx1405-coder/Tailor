import { useEffect, useState } from "react";
import amberDress from "./assets/products/amber-khaja-balek.jpg";
import ivoryAbaya from "./assets/products/ivory-cotton.jpg";
import lilacKaftan from "./assets/products/lilac-maroko.jpg";
import navyDress from "./assets/products/navy-khaja-balek.jpg";
import silverAbaya from "./assets/products/silver-super-coba.jpg";
import storefront from "./assets/storefront.jpg";

const whatsappNumber = "97450607921";
const mapLink = "https://maps.google.com/?q=25.272409,51.407940";
const formatArabicNumber = (value: number, minimumIntegerDigits = 1) =>
  new Intl.NumberFormat("ar-QA", { minimumIntegerDigits }).format(value);

const products = [
  {
    name: "نور",
    type: "جلابية مطرزة",
    fabric: "خاجة بالك",
    price: 550,
    image: navyDress,
    position: "center",
  },
  {
    name: "ليالي",
    type: "عباءة مزينة بالورود",
    fabric: "قطن",
    price: 750,
    image: ivoryAbaya,
    position: "center",
  },
  {
    name: "شمس",
    type: "جلابية مطرزة",
    fabric: "خاجة بالك",
    price: 600,
    image: amberDress,
    position: "center",
  },
  {
    name: "ورد",
    type: "قفطان مطرز",
    fabric: "ماروكو",
    price: 650,
    image: lilacKaftan,
    position: "center 42%",
  },
  {
    name: "سحر",
    type: "عباءة مزينة بالورود",
    fabric: "سوبر كوبا",
    price: 600,
    image: silverAbaya,
    position: "center",
  },
];

function Icon({
  name,
  size = 20,
}: {
  name: "arrow" | "menu" | "close" | "measure" | "needle" | "sparkle" | "home";
  size?: number;
}) {
  const paths = {
    arrow: <path d="M19 12H5m6 6-6-6 6-6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    measure: (
      <>
        <path d="M4 8h16v8H4z" />
        <path d="M8 8v4M12 8v2M16 8v4" />
      </>
    ),
    needle: (
      <>
        <path d="M18 3 8 13M15 3h3v3M8 13l-4 7 7-4" />
        <path d="M9 15c3 2 6 2 9-1" />
      </>
    ),
    sparkle: (
      <>
        <path d="M12 2c.5 5 2.5 7 7 7-4.5.5-6.5 2.5-7 7-.5-4.5-2.5-6.5-7-7 4.5 0 6.5-2 7-7Z" />
        <path d="M19 15c.2 2 1 2.8 3 3-2 .2-2.8 1-3 3-.2-2-1-2.8-3-3 2-.2 2.8-1 3-3Z" />
      </>
    ),
    home: (
      <>
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand ${light ? "brand--light" : ""}`}>
      <div className="brand-mark" aria-hidden="true">
        <span>ز</span>
        <i />
      </div>
      <div>
        <strong>دار الزهراء</strong>
        <small>للخياطة</small>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const orderLink = (
    product?: (typeof products)[number],
    customMessage?: string,
  ) => {
    const message = product
      ? `مرحباً دار الزهراء، أرغب بالاستفسار عن ${product.type} ${product.name} من قماش ${product.fabric} بسعر ${formatArabicNumber(product.price)} ريالاً قطرياً.`
      : customMessage ?? "مرحباً دار الزهراء، أرغب في حجز موعد للاستشارة والخياطة.";
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main dir="rtl" lang="ar">
      <header className="site-header">
        <a className="brand-link" href="#top" aria-label="الصفحة الرئيسية لدار الزهراء">
          <Brand />
        </a>
        <span className="header-cr">سجل تجاري رقم ١٦٨٩٤٣</span>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <a href="#collection">التشكيلة</a>
          <a href="#craft">حرفتنا</a>
          <a href="#atelier">المشغل</a>
        </nav>
        <a className="header-cta" href={orderLink()} target="_blank" rel="noreferrer">
          احجزي موعداً <Icon name="arrow" size={17} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={23} />
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="التنقل">
            <a href="#collection" onClick={() => setMenuOpen(false)}>التشكيلة</a>
            <a href="#craft" onClick={() => setMenuOpen(false)}>حرفتنا</a>
            <a href="#atelier" onClick={() => setMenuOpen(false)}>المشغل</a>
            <a href={orderLink()} target="_blank" rel="noreferrer">احجزي موعداً</a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">تفصيل حسب المقاس · الدوحة</p>
          <h1>أناقةٌ<br /><em>صُمّمت لأجلكِ</em></h1>
          <p className="hero-intro">
            تصاميم خالدة وتطريز متقن ومقاس مثالي، نصنعها خصيصاً للمرأة التي ترتديها.
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href="#collection">
              اكتشفي التشكيلة <Icon name="arrow" size={18} />
            </a>
            <a className="text-link" href="#craft">اكتشفي حرفتنا</a>
          </div>
          <div className="hero-note">
            <span>٠١</span>
            <div />
            <p>أناقتكِ وحدكِ،<br />حتى آخر غرزة.</p>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={navyDress} alt="جلابية كحلية مطرزة من دار الزهراء" />
          <span className="image-tag">نور · ٥٥٠ ريالاً قطرياً</span>
        </div>
      </section>

      <section className="delivery-banner" aria-labelledby="delivery-title">
        <div className="delivery-icon">
          <Icon name="home" size={30} />
        </div>
        <div className="delivery-copy">
          <p className="eyebrow">هدية من دار الزهراء</p>
          <h2 id="delivery-title">توصيل منزلي مجاني</h2>
          <p>قطعتكِ المفضلة تصل إلى بابكِ بكل عناية. تواصلي معنا لتنسيق التوصيل.</p>
        </div>
        <a
          className="button button--light delivery-cta"
          href={orderLink(undefined, "مرحباً دار الزهراء، أرغب في الاستفسار عن التوصيل المنزلي المجاني وتنسيق موعد الاستلام.")}
          target="_blank"
          rel="noreferrer"
        >
          نسّقي التوصيل <Icon name="arrow" size={18} />
        </a>
      </section>

      <section className="collection" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">اختياراتنا المميزة</p>
            <h2>تصاميم بكل عناية</h2>
          </div>
          <p>
            تشكيلة مختارة من الجلابيات والقفاطين والعباءات، صُنعت لتتألق بتفاصيلها اليدوية.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card product-card--${index + 1}`} key={product.name}>
              <div className="product-image">
                <img
                  src={product.image}
                  alt={`${product.type} ${product.name} من قماش ${product.fabric}`}
                  style={{ objectPosition: product.position }}
                />
                <span>{formatArabicNumber(index + 1, 2)}</span>
                <a href={orderLink(product)} target="_blank" rel="noreferrer">
                  استفسري <Icon name="arrow" size={16} />
                </a>
              </div>
              <div className="product-info">
                <div>
                  <p>{product.type}</p>
                  <h3>{product.name}</h3>
                </div>
                <div className="product-meta">
                  <span>{product.fabric}</span>
                  <strong>{formatArabicNumber(product.price)} ر.ق</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="craft" id="craft">
        <div className="craft-photo">
          <img src={amberDress} alt="فستان كهرماني مطرز على شرفة مطلة على البحر" />
          <div className="craft-quote">
            <Icon name="sparkle" size={25} />
            <p>«لكل غرزة حكاية.»</p>
          </div>
        </div>
        <div className="craft-copy">
          <p className="eyebrow">ما يميز دار الزهراء</p>
          <h2>فنّ<br /><em>الخياطة الراقية</em></h2>
          <p className="craft-intro">
            من أول قياس إلى آخر تجربة، نصوغ كل قطعة لتناسبكِ. يجمع خياطونا بين الحرفة
            الأصيلة والرؤية العصرية ليقدموا أزياءً استثنائية في مظهرها وراحتها.
          </p>
          <div className="services">
            <div>
              <Icon name="measure" size={29} />
              <span>٠١</span>
              <h3>قياسات مثالية</h3>
              <p>قياسات دقيقة لراحة تامة وحركة سهلة وقصة تليق بكِ.</p>
            </div>
            <div>
              <Icon name="needle" size={29} />
              <span>٠٢</span>
              <h3>حرفية متقنة</h3>
              <p>قصّات مدروسة وتفاصيل راقية وتطريز يدوي بلمسات نهائية متقنة.</p>
            </div>
          </div>
          <a className="button button--light" href={orderLink()} target="_blank" rel="noreferrer">
            ابدئي تصميم قطعتكِ <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>

      <section className="atelier" id="atelier">
        <div className="atelier-copy">
          <p className="eyebrow">زورينا في مشغلنا</p>
          <h2>مقاسكِ المثالي<br /><em>يبدأ من هنا</em></h2>
          <p>
            تعرّفي على فريق الخياطة، واكتشفي الأقمشة، وحوّلي فكرتكِ إلى قطعة تنبض بالحياة
            في مشغلنا بمنطقة السد في الدوحة.
          </p>
          <div className="contact-list">
            <a href={`tel:+${whatsappNumber}`} dir="ltr">+974 5060 7921</a>
            <a href={mapLink} target="_blank" rel="noreferrer">السد، الدوحة · موقعنا على الخريطة</a>
            <span>سجل تجاري رقم ١٦٨٩٤٣</span>
          </div>
          <a className="button button--dark" href={orderLink()} target="_blank" rel="noreferrer">
            تواصلي معنا عبر واتساب <Icon name="arrow" size={18} />
          </a>
        </div>
        <div className="atelier-image">
          <img src={storefront} alt="واجهة مشغل دار الزهراء للخياطة في السد، الدوحة" />
          <div className="atelier-card">
            <span>دار الزهراء للخياطة</span>
            <strong>السد، الدوحة</strong>
            <small>نستقبلكم للمواعيد والاستشارات</small>
          </div>
        </div>
      </section>

      <footer>
        <Brand light />
        <p>قصّات استثنائية، تفاصيل راقية، وإتقان في كل لمسة.</p>
        <div className="footer-links">
          <a href="#collection">التشكيلة</a>
          <a href={orderLink()} target="_blank" rel="noreferrer">واتساب</a>
          <span>© {formatArabicNumber(new Date().getFullYear())} دار الزهراء</span>
        </div>
        <div className="creator-credit">
          <span>تنفيذ</span>
          <a href="https://www.xenosysweb.com/" target="_blank" rel="noreferrer">
            زينوسيس قطر
          </a>
          <a href="tel:+97470643918">+974 7064 3918</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
