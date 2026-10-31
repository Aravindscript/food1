
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bike,
  Check,
  Clock,
 Camera,
  MapPin,
  Menu,
  Play,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Star,
  Utensils,
  X,
  Zap
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import "./style.css";



const foods = [
  {
    name: "Smash Burger",
    category: "BURGERS",
    price: "₹249",
    rating: "4.9",
    time: "20–25 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=85",
    tag: "BESTSELLER",
  },
  {
    name: "Italian Pizza",
    category: "PIZZA",
    price: "₹329",
    rating: "4.8",
    time: "25–30 min",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=85",
    tag: "POPULAR",
  },
  {
    name: "Creamy Pasta",
    category: "ITALIAN",
    price: "₹219",
    rating: "4.7",
    time: "20–25 min",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=85",
    tag: "CHEF'S PICK",
  },
  {
    name: "Fresh Poke Bowl",
    category: "HEALTHY",
    price: "₹279",
    rating: "4.8",
    time: "15–20 min",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=85",
    tag: "FRESH PICK",
  },
];

const APP_URL = "https://example.com/cravio";

const categories = [
  {
    name: "Burgers",
    emoji: "🍔",
    description: "Juicy & delicious",
  },
  {
    name: "Pizza",
    emoji: "🍕",
    description: "Straight from the oven",
  },
  {
    name: "Asian",
    emoji: "🍜",
    description: "Big on flavour",
  },
  {
    name: "Desserts",
    emoji: "🍰",
    description: "A little happiness",
  },
  {
    name: "Healthy",
    emoji: "🥗",
    description: "Feel-good food",
  },
  {
    name: "Drinks",
    emoji: "🥤",
    description: "Sip something good",
  },
];

export default function App() {
  const [intro, setIntro] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = intro ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [intro]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2600);
  };

  const addToCart = (food) => {
    setCart((previous) => [...previous, food]);
    showToast(`${food.name} added to your bag`);
  };

  const visibleFoods =
    selectedCategory === "ALL"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  const scrollTo = (id) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* INTRO SCREEN — 5 SECONDS */}

     <video
  className="intro-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src={`${import.meta.env.BASE_URL}videos/intro.mp4`}
    type="video/mp4"
  />
</video>

      {/* MAIN WEBSITE */}

      <div className={`site-shell ${intro ? "site-hidden" : ""}`}>
        {/* NAVBAR */}

        <header className="navbar">
          <a
            className="brand"
            href="#home"
            onClick={() => setMobileMenu(false)}
          >
            <span className="brand-symbol">
              <Utensils size={21} />
            </span>

            <span className="brand-name">
              cravio<span>.</span>
            </span>
          </a>

          <nav className={`nav-links ${mobileMenu ? "nav-open" : ""}`}>
            <a href="#home" onClick={() => setMobileMenu(false)}>
              Home
            </a>
            <a href="#categories" onClick={() => setMobileMenu(false)}>
              Explore
            </a>
            <a href="#menu" onClick={() => setMobileMenu(false)}>
              Our menu
            </a>
            <a href="#about" onClick={() => setMobileMenu(false)}>
              Why Cravio
            </a>
            <a href="#download" onClick={() => setMobileMenu(false)}>
              Get the app
            </a>
          </nav>

          <div className="nav-actions">
            <button
              className="cart-button"
              onClick={() =>
                scrollTo("menu")
              }
              aria-label="View food menu"
            >
              <ShoppingBag size={19} />
              <span>Order now</span>
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>
        </header>

        <main>
          {/* HERO */}

          <section className="hero" id="home">
            <div className="hero-copy">
              <div className="hero-pill">
                <span className="live-dot" />
                YOUR CITY. YOUR CRAVINGS.
              </div>

              <h1>
                Good food.
                <br />
                <span>Great mood.</span>
                <br />
                <span className="outline-text">On your door.</span>
              </h1>

              <p className="hero-description">
                Your favourite meals, your favourite restaurants,
                delivered fresh to your doorstep. Life tastes better
                with Cravio.
              </p>

              <div className="hero-buttons">
                <button
                  className="button-primary"
                  onClick={() => scrollTo("menu")}
                >
                  Explore food <ArrowRight size={18} />
                </button>

                <button
                  className="button-text"
                  onClick={() => scrollTo("download")}
                >
                  Get the app <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="hero-trust">
                <div className="avatar-stack">
                  <img
                    src="https://i.pravatar.cc/80?img=12"
                    alt=""
                  />
                  <img
                    src="https://i.pravatar.cc/80?img=47"
                    alt=""
                  />
                  <img
                    src="https://i.pravatar.cc/80?img=33"
                    alt=""
                  />
                  <span>+</span>
                </div>

                <div>
                  <div className="trust-stars">
                    ★★★★★
                  </div>
                  <p>Loved by food lovers everywhere</p>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />

              <div className="hero-image-wrap">
                <img
                  className="hero-food-image"
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=90"
                  alt="A delicious spread of freshly prepared food"
                />

                <div className="image-gradient" />

                <div className="floating-label delivery-label">
                  <span className="floating-icon orange-icon">
                    <Zap size={20} />
                  </span>
                  <span>
                    <strong>Fast delivery</strong>
                    <small>Good food, right on time</small>
                  </span>
                </div>

                <div className="floating-label rating-label">
                  <span className="rating-star">
                    <Star size={17} fill="currentColor" />
                  </span>
                  <span>
                    <strong>4.9 / 5</strong>
                    <small>Food worth loving</small>
                  </span>
                </div>

                <div className="hero-image-caption">
                  <span>MADE FOR YOUR CRAVINGS</span>
                  <span className="caption-line" />
                </div>
              </div>

              <div className="hero-number">
                <span>01</span>
                <span className="number-line" />
                <span>GOOD TASTE STARTS HERE</span>
              </div>
            </div>

            <button
              className="scroll-cue"
              onClick={() => scrollTo("categories")}
              aria-label="Scroll down"
            >
              <ArrowDown size={17} />
              SCROLL TO DISCOVER
            </button>
          </section>

          {/* BENEFITS BAR */}

          <section className="benefit-strip">
            <div>
              <Zap size={21} />
              <span>Quick & easy ordering</span>
            </div>
            <div>
              <ShieldCheck size={21} />
              <span>Quality-first food</span>
            </div>
            <div>
              <Bike size={22} />
              <span>Doorstep delivery</span>
            </div>
            <div>
              <Clock size={21} />
              <span>More time for you</span>
            </div>
          </section>

          {/* FOOD CATEGORIES */}

          <section className="section categories-section" id="categories">
            <div className="section-heading">
              <div>
                <p className="eyebrow">A WORLD OF FLAVOUR</p>
                <h2>
                  What's your <span>craving?</span>
                </h2>
                <p className="section-subtitle">
                  From quick bites to full-on feasts, find your thing.
                </p>
              </div>

              <button
                className="button-text desktop-link"
                onClick={() => scrollTo("menu")}
              >
                Explore all <ArrowRight size={17} />
              </button>
            </div>

            <div className="category-grid">
              {categories.map((category, index) => (
                <button
                  className="category-card"
                  key={category.name}
                  onClick={() => {
                    const mapping = {
                      Burgers: "BURGERS",
                      Pizza: "PIZZA",
                      Asian: "ALL",
                      Desserts: "ALL",
                      Healthy: "HEALTHY",
                      Drinks: "ALL",
                    };

                    setSelectedCategory(mapping[category.name]);
                    scrollTo("menu");
                  }}
                >
                  <span className={`category-emoji emoji-${index}`}>
                    {category.emoji}
                  </span>
                  <strong>{category.name}</strong>
                  <span className="category-description">
                    {category.description}
                  </span>
                  <span className="category-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* FEATURE VIDEO */}

          <section className="feature-section" id="about">
  <video
    className="feature-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source
      src={'${import.meta.env.BASE_URL}videos/hero.mp4'}
      type="video/mp4"
    />
  </video>

            <div className="feature-overlay" />

            <div className="feature-content">
              <span className="feature-kicker">
                <span className="live-dot" />
                THE CRAVIO EXPERIENCE
              </span>

              <h2>
                Fresh flavours.
                <br />
                <span>Zero compromises.</span>
              </h2>

              <p>
                Great meals begin with great ingredients. Discover
                food made with care and delivered with love.
              </p>

              <button
                className="feature-play"
                onClick={() => {
                  setVideoPlaying(!videoPlaying);
                  showToast(
                    videoPlaying
                      ? "Experience paused"
                      : "Experience selected"
                  );
                }}
              >
                {videoPlaying ? (
                  <Check size={18} />
                ) : (
                  <Play size={18} fill="currentColor" />
                )}
                {videoPlaying ? "You're all set" : "Discover our story"}
              </button>
            </div>

            <span className="feature-index">CRAFTED FOR THE CURIOUS · 001</span>
          </section>

          {/* MENU */}

          <section className="section menu-section" id="menu">
            <div className="section-heading">
              <div>
                <p className="eyebrow">GOOD FOOD, GOOD CHOICES</p>
                <h2>
                  The crowd <span>favourites.</span>
                </h2>
                <p className="section-subtitle">
                  A few delicious reasons to skip cooking tonight.
                </p>
              </div>

              <div className="menu-mark">
                <Utensils size={20} />
                <span>OUR PICKS</span>
              </div>
            </div>

            <div className="filter-list">
              {["ALL", "BURGERS", "PIZZA", "ITALIAN", "HEALTHY"].map(
                (category) => (
                  <button
                    key={category}
                    className={
                      selectedCategory === category ? "filter-active" : ""
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "ALL" ? "Everything" : category}
                  </button>
                )
              )}
            </div>

            <div className="food-grid">
              {visibleFoods.map((food) => (
                <article className="food-card" key={food.name}>
                  <div className="food-image-wrap">
                    <img src={food.image} alt={food.name} loading="lazy" />
                    <span className="food-tag">{food.tag}</span>

                    <button
                      className="quick-add"
                      aria-label={`Add ${food.name} to bag`}
                      onClick={() => addToCart(food)}
                    >
                      <ShoppingBag size={19} />
                    </button>
                  </div>

                  <div className="food-info">
                    <div className="food-category">{food.category}</div>

                    <div className="food-name-row">
                      <h3>{food.name}</h3>
                      <span className="food-rating">
                        <Star size={14} fill="currentColor" />
                        {food.rating}
                      </span>
                    </div>

                    <div className="food-bottom">
                      <strong>{food.price}</strong>
                      <span>
                        <Clock size={14} />
                        {food.time}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="menu-disclaimer">
              Sample menu for the CRAVIO website concept. Items, prices,
              ratings and delivery times are illustrative.
            </p>
          </section>

          {/* APP DOWNLOAD */}

          <section className="download-section" id="download">
            <div className="download-decoration decoration-one" />
            <div className="download-decoration decoration-two" />

            <div className="download-copy">
              <p className="eyebrow download-eyebrow">
                YOUR CRAVINGS, ONE TAP AWAY
              </p>

              <h2>
                Great food.
                <br />
                <span>Goes wherever</span>
                <br />
                you go.
              </h2>

              <p className="download-description">
                Make your everyday delicious. Explore local favourites,
                discover new tastes and order with ease.
              </p>

              <div className="download-features">
                <div>
                  <span><Check size={15} /></span>
                  Discover food near you
                </div>
                <div>
                  <span><Check size={15} /></span>
                  Easy ordering experience
                </div>
                <div>
                  <span><Check size={15} /></span>
                  Your favourites in one place
                </div>
              </div>

              <div className="store-buttons">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="store-button"
                >
                  <span className="store-icon">▶</span>
                  <span>
                    <small>GET IT ON</small>
                    <strong>Google Play</strong>
                  </span>
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="store-button"
                >
                  <span className="store-icon">◈</span>
                  <span>
                    <small>DOWNLOAD ON THE</small>
                    <strong>App Store</strong>
                  </span>
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <p className="download-note">
                <Smartphone size={15} />
                Your next favourite meal starts here.
              </p>
            </div>

            <div className="download-visual">
              <div className="phone-glow" />

              <div className="phone-mockup">
                <div className="phone-speaker" />

                <div className="phone-screen">
                  <div className="phone-status">
                    <span>9:41</span>
                    <span>●●● ▰</span>
                  </div>

                  <div className="phone-brand">
                    <span className="mini-brand-icon">
                      <Utensils size={16} />
                    </span>
                    cravio<span>.</span>
                  </div>

                  <div className="phone-location">
                    <MapPin size={13} />
                    DELIVERING TO YOU
                  </div>

                  <h3>
                    Hungry?
                    <br />
                    <span>We've got you.</span>
                  </h3>

                  <div className="phone-food-image">
                    <img
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80"
                      alt="Burger featured in the Cravio app"
                    />
                  </div>

                  <div className="phone-food-detail">
                    <div>
                      <strong>Smash Burger</strong>
                      <span>Juicy. Fresh. Delicious.</span>
                    </div>
                    <strong>₹249</strong>
                  </div>

                  <div className="phone-order-button">
                    Explore delicious food <ArrowRight size={15} />
                  </div>

                  <div className="phone-bottom-nav">
                    <span>⌂<small>Home</small></span>
                    <span>⌕<small>Explore</small></span>
                    <span>♡<small>Favourites</small></span>
                    <span>♙<small>Profile</small></span>
                  </div>
                </div>
              </div>

              <div className="qr-card">
                <div className="qr-heading">
                  <strong>SCAN. CRAVE. ORDER.</strong>
                  <span>YOUR FOOD JOURNEY STARTS HERE</span>
                </div>

                <div className="qr-code">
                  <QRCodeSVG
                    value={APP_URL}
                    size={112}
                    level="H"
                    includeMargin
                    bgColor="#ffffff"
                    fgColor="#171717"
                  />
                </div>

                <p>Scan to explore CRAVIO</p>
                <span className="qr-footnote">
                  Replace with your official app link
                </span>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}

          <section className="final-cta">
            <div className="cta-icon">
              <Utensils size={25} />
            </div>

            <p className="eyebrow">LIFE IS TOO SHORT FOR BAD FOOD</p>

            <h2>
              Follow your <span>cravings.</span>
            </h2>

            <p>
              Discover something delicious. Make today taste better.
            </p>

            <button
              className="button-primary"
              onClick={() => scrollTo("menu")}
            >
              Find your next favourite <ArrowRight size={18} />
            </button>
          </section>
        </main>
        {/* FOOTER */}

        <footer className="footer">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="brand footer-logo" href="#home">
                <span className="brand-symbol">
                  <Utensils size={20} />
                </span>
                <span className="brand-name">
                  cravio<span>.</span>
                </span>
              </a>

              <p>
                Good food connects us.
                <br />
                We just bring it closer.
              </p>

              <div className="social-links">
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Camera size={18} />
                </a>
                <a
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-letter">f</span>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4>DISCOVER</h4>
              <a href="#categories">Food categories</a>
              <a href="#menu">Popular dishes</a>
              <a href="#about">Our story</a>
              <a href="#download">Get the app</a>
            </div>

            <div className="footer-column">
              <h4>PARTNER WITH US</h4>
              <a href="mailto:partners@example.com">
                Restaurant partners
              </a>
              <a href="mailto:careers@example.com">
                Delivery partners
              </a>
              <a href="mailto:careers@example.com">Careers</a>
            </div>

            <div className="footer-column">
              <h4>NEED HELP?</h4>
              <a href="mailto:hello@example.com">Contact us</a>
              <a href="mailto:hello@example.com">Help centre</a>
              <a href="mailto:hello@example.com">FAQs</a>
              <a href="mailto:hello@example.com">Feedback</a>
            </div>

            <div className="footer-newsletter">
              <h4>STAY IN THE LOOP</h4>
              <p>Good things are cooking. Stay connected.</p>

              <form
                className="newsletter-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  showToast(
                    "Thanks for your interest in CRAVIO!"
                  );
                  event.currentTarget.reset();
                }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} CRAVIO. All rights reserved.</p>

            <div>
              <a href="#footer-privacy">Privacy</a>
              <a href="#footer-terms">Terms</a>
              <a href="#home">Back to top ↑</a>
            </div>

            <p>MADE FOR THE LOVE OF FOOD.</p>
          </div>

          <div className="sr-only" id="footer-privacy">
            Privacy policy placeholder
          </div>
          <div className="sr-only" id="footer-terms">
            Terms and conditions placeholder
          </div>
        </footer>
      </div>

      {/* TOAST MESSAGE */}

      {toast && (
        <div className="toast-message" role="status">
          <span><Check size={17} /></span>
          {toast}
        </div>
      )}
    </>
  );
}