import { useEffect, useState } from "react";
import amberDress from "./assets/products/amber-khaja-balek.jpg";
import ivoryAbaya from "./assets/products/ivory-cotton.jpg";
import lilacKaftan from "./assets/products/lilac-maroko.jpg";
import navyDress from "./assets/products/navy-khaja-balek.jpg";
import silverAbaya from "./assets/products/silver-super-coba.jpg";
import storefront from "./assets/storefront.jpg";

const whatsappNumber = "97450607921";

const products = [
  {
    name: "Noor",
    type: "Embroidered Jalabiya",
    fabric: "Khaja Balek",
    price: 550,
    image: navyDress,
    position: "center",
  },
  {
    name: "Layali",
    type: "Floral Abaya",
    fabric: "Cotton",
    price: 750,
    image: ivoryAbaya,
    position: "center",
  },
  {
    name: "Shams",
    type: "Embroidered Jalabiya",
    fabric: "Khaja Balek",
    price: 600,
    image: amberDress,
    position: "center",
  },
  {
    name: "Ward",
    type: "Embroidered Kaftan",
    fabric: "Maroko",
    price: 650,
    image: lilacKaftan,
    position: "center 42%",
  },
  {
    name: "Sahar",
    type: "Floral Abaya",
    fabric: "Super Coba",
    price: 600,
    image: silverAbaya,
    position: "center",
  },
];

function Icon({
  name,
  size = 20,
}: {
  name: "arrow" | "menu" | "close" | "measure" | "needle" | "sparkle";
  size?: number;
}) {
  const paths = {
    arrow: <path d="M5 12h14M14 6l6 6-6 6" />,
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
        <span>D</span>
        <i />
      </div>
      <div>
        <strong>Dar Al Zahra</strong>
        <small>Tailor</small>
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

  const orderLink = (product?: (typeof products)[number]) => {
    const message = product
      ? `Hello Dar Al Zahra, I am interested in the ${product.name} ${product.type} (${product.fabric}, QR ${product.price}).`
      : "Hello Dar Al Zahra, I would like to book a tailoring consultation.";
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand-link" href="#top" aria-label="Dar Al Zahra home">
          <Brand />
        </a>
        <span className="header-cr">CR No. 168943</span>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#collection">Collection</a>
          <a href="#craft">Our craft</a>
          <a href="#atelier">Atelier</a>
        </nav>
        <a className="header-cta" href={orderLink()} target="_blank" rel="noreferrer">
          Book a fitting <Icon name="arrow" size={17} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={23} />
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
            <a href="#craft" onClick={() => setMenuOpen(false)}>Our craft</a>
            <a href="#atelier" onClick={() => setMenuOpen(false)}>Atelier</a>
            <a href={orderLink()} target="_blank" rel="noreferrer">Book a fitting</a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Made to measure · Doha</p>
          <h1>Elegance,<br /><em>tailored to you.</em></h1>
          <p className="hero-intro">
            Timeless silhouettes, intricate embroidery, and an impeccable fit—crafted
            exclusively for the woman who wears them.
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href="#collection">
              Explore the collection <Icon name="arrow" size={18} />
            </a>
            <a className="text-link" href="#craft">Discover our craft</a>
          </div>
          <div className="hero-note">
            <span>01</span>
            <div />
            <p>Distinctly yours,<br />down to the final stitch.</p>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={navyDress} alt="Navy embroidered jalabiya by Dar Al Zahra" />
          <span className="image-tag">The Noor · QR 550</span>
        </div>
      </section>

      <section className="collection" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The signature edit</p>
            <h2>Designed with intention</h2>
          </div>
          <p>
            A considered collection of jalabiyas, kaftans, and abayas,
            made beautiful by hand.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card product-card--${index + 1}`} key={product.name}>
              <div className="product-image">
                <img
                  src={product.image}
                  alt={`${product.name} ${product.type} in ${product.fabric} fabric`}
                  style={{ objectPosition: product.position }}
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <a href={orderLink(product)} target="_blank" rel="noreferrer">
                  Enquire <Icon name="arrow" size={16} />
                </a>
              </div>
              <div className="product-info">
                <div>
                  <p>{product.type}</p>
                  <h3>{product.name}</h3>
                </div>
                <div className="product-meta">
                  <span>{product.fabric}</span>
                  <strong>QR {product.price}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="craft" id="craft">
        <div className="craft-photo">
          <img src={amberDress} alt="Embroidered amber dress on a seaside terrace" />
          <div className="craft-quote">
            <Icon name="sparkle" size={25} />
            <p>“Every stitch has a purpose.”</p>
          </div>
        </div>
        <div className="craft-copy">
          <p className="eyebrow">The Dar Al Zahra difference</p>
          <h2>The art of<br /><em>fine tailoring</em></h2>
          <p className="craft-intro">
            From the first measurement to the final fitting, each garment is shaped
            around you. Our tailors pair traditional skill with a modern eye for pieces
            that feel as exceptional as they look.
          </p>
          <div className="services">
            <div>
              <Icon name="measure" size={29} />
              <span>01</span>
              <h3>Perfect measurements</h3>
              <p>Precision fittings for ease, movement, and a silhouette that belongs to you.</p>
            </div>
            <div>
              <Icon name="needle" size={29} />
              <span>02</span>
              <h3>Fine craftsmanship</h3>
              <p>Considered cuts, refined details, and immaculate hand-finished embroidery.</p>
            </div>
          </div>
          <a className="button button--light" href={orderLink()} target="_blank" rel="noreferrer">
            Begin your piece <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>

      <section className="atelier" id="atelier">
        <div className="atelier-copy">
          <p className="eyebrow">Visit the atelier</p>
          <h2>Your perfect fit<br /><em>begins here.</em></h2>
          <p>
            Meet with our tailoring team, explore the fabrics, and bring your vision
            to life in our Doha atelier.
          </p>
          <div className="contact-list">
            <a href={`tel:+${whatsappNumber}`}>+974 5060 7921</a>
            <span>CR No. 168943</span>
          </div>
          <a className="button button--dark" href={orderLink()} target="_blank" rel="noreferrer">
            Chat on WhatsApp <Icon name="arrow" size={18} />
          </a>
        </div>
        <div className="atelier-image">
          <img src={storefront} alt="Dar Al Zahra Tailor storefront in Doha" />
          <div className="atelier-card">
            <span>Dar Al Zahra Tailor</span>
            <strong>Doha, Qatar</strong>
            <small>Open for fittings and consultations</small>
          </div>
        </div>
      </section>

      <footer>
        <Brand light />
        <p>Exceptional cuts. Refined details. Flawless finishing.</p>
        <div className="footer-links">
          <a href="#collection">Collection</a>
          <a href={orderLink()} target="_blank" rel="noreferrer">WhatsApp</a>
          <span>© {new Date().getFullYear()} Dar Al Zahra</span>
        </div>
        <div className="creator-credit">
          <span>Made by</span>
          <a href="https://www.xenosysweb.com/" target="_blank" rel="noreferrer">
            @Xenosys Qatar
          </a>
          <a href="tel:+97470643918">+974 7064 3918</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
