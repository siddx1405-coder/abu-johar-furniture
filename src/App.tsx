import type { ReactNode } from "react";

const phoneNumber = "+97455101742";
const whatsappUrl =
  "https://wa.me/97455101742?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Salwa+Road%2C+Doha%2C+Qatar";

type IconName =
  | "arrow"
  | "check"
  | "location"
  | "mail"
  | "phone"
  | "ruler"
  | "whatsapp";

function Icon({ name, size = 21 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="m15 18-6-6 6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-4-1.5-6.5-4-8-8l2-2-2-4Z" />
    ),
    ruler: (
      <>
        <path d="m4 18 14-14 2 2L6 20H4v-2Z" />
        <path d="m14 8 2 2M11 11l2 2M8 14l2 2" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
        <path d="M8 7.8c.4 4.1 3.8 7.3 8 7.7M8 7.8l2 3-1 1M16 15.5l-3-1.8-1 1" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

const services = [
  {
    title: "الستائر",
    description: "تفصيل وتركيب ستائر منزلية بتشكيلة أقمشة وألوان واسعة.",
    image: "/abu-johar/curtains-room.jpg",
    className: "service-large",
  },
  {
    title: "الكنب والمجالس",
    description: "تصميم وتنجيد يناسب مساحتك ويجمع الراحة مع الأناقة.",
    image: "/abu-johar/white-sofa.jpg",
    className: "",
  },
  {
    title: "السجاد",
    description: "خيارات مختارة من السجاد العصري والكلاسيكي.",
    image: "/abu-johar/carpet-samples.jpg",
    className: "",
  },
  {
    title: "ورق الجدران",
    description: "نقوش وخامات تحول جدرانك إلى تفاصيل مميزة.",
    image: "/abu-johar/wallpaper-rolls.jpg",
    className: "",
  },
  {
    title: "أرضيات فينيل وبي في سي",
    description: "أرضيات عملية، متينة، وسهلة العناية.",
    image: "/abu-johar/flooring-samples.jpg",
    className: "service-wide",
  },
  {
    title: "أرضيات إس بي سي",
    description: "مظهر الخشب الطبيعي بأداء يناسب الاستخدام اليومي.",
    image: "/abu-johar/living-room.jpg",
    className: "",
  },
];

const features = [
  "قياس دقيق في موقعك",
  "خيارات تناسب كل المساحات",
  "تركيب وتشطيب باهتمام",
  "حلول للمنازل والمكاتب",
];

function App() {
  return (
    <main dir="rtl">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="أبو جوهر للأثاث">
            <span className="brand-mark">أ</span>
            <span>
              <strong>أبو جوهر</strong>
              <small>للأثاث والديكور</small>
            </span>
          </a>

          <nav aria-label="التنقل الرئيسي">
            <a href="#services">خدماتنا</a>
            <a href="#about">لماذا نحن</a>
            <a href="#contact">تواصل معنا</a>
          </nav>

          <a className="header-call" href={`tel:${phoneNumber}`}>
            <Icon name="phone" size={18} />
            <span dir="ltr">5510 1742</span>
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="غرفة معيشة أنيقة" />
        <div className="hero-copy">
          <div className="cr-badge">
            <span>سجل تجاري</span>
            <strong>١٤٢٦٨</strong>
          </div>
          <p className="eyebrow">أناقة تبدأ من التفاصيل</p>
          <h1>
            نصنع للمكان
            <br />
            <em>طابعاً يليق بك</em>
          </h1>
          <p className="hero-lead">
            نوفر الستائر، الكنب، السجاد، ورق الجدران والأرضيات مع خدمات
            القياس والتركيب في قطر.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${phoneNumber}`}>
              اتصل بنا الآن
              <Icon name="phone" size={19} />
            </a>
            <a
              className="button button-secondary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              راسلنا عبر واتساب
              <Icon name="whatsapp" size={20} />
            </a>
          </div>
          <div className="hero-note">
            <Icon name="location" size={18} />
            <span>طريق سلوى، الدوحة</span>
          </div>
        </div>
        <a className="scroll-hint" href="#services" aria-label="انتقل إلى خدماتنا">
          <span>اكتشف خدماتنا</span>
          <Icon name="arrow" size={17} />
        </a>
      </section>

      <section className="intro section" id="services">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark">كل ما يحتاجه منزلك</p>
              <h2>حلول متكاملة<br />لمساحتك</h2>
            </div>
            <p>
              من اختيار الخامة المناسبة إلى القياس والتركيب، نساعدك في صناعة
              مساحة متناسقة وعملية تعكس ذوقك.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className={`service-card ${service.className}`} key={service.title}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-overlay" />
                <div className="service-content">
                  <span className="service-line" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="office-strip">
            <div className="office-icon">
              <Icon name="ruler" size={28} />
            </div>
            <div>
              <span>للمساحات المهنية</span>
              <h3>ستائر المكاتب والتجهيزات</h3>
            </div>
            <p>
              حلول عملية للمكاتب والمحلات، من المعاينة والقياس حتى التركيب
              النهائي.
            </p>
            <a href={`tel:${phoneNumber}`}>
              اطلب معاينة
              <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="shell about-grid">
          <div className="about-visual">
            <img
              src="/abu-johar/curtains-detail.jpg"
              alt="تفاصيل أثاث وديكور منزلي"
              loading="lazy"
            />
            <div className="about-stamp">
              <strong>اختيار</strong>
              <span>قياس</span>
              <span>تركيب</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow dark">أبو جوهر للأثاث</p>
            <h2>جودة تُرى،<br />وعناية تُلمس</h2>
            <p className="about-lead">
              نؤمن أن جمال المكان لا يكتمل دون تنفيذ متقن. لذلك نهتم بكل خطوة،
              من فهم احتياجك إلى تسليم العمل بأفضل صورة.
            </p>
            <div className="features">
              {features.map((feature) => (
                <div key={feature}>
                  <span><Icon name="check" size={17} /></span>
                  {feature}
                </div>
              ))}
            </div>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              تحدث معنا عن مشروعك
              <Icon name="arrow" size={19} />
            </a>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contact-inner">
          <div className="contact-title">
            <p className="eyebrow">نحن بالقرب منك</p>
            <h2>دعنا نكمل<br />مساحتك معاً</h2>
            <p>تواصل معنا للاستفسار، طلب معاينة، أو معرفة الخيارات المتوفرة.</p>
          </div>
          <div className="contact-list">
            <a href={`tel:${phoneNumber}`}>
              <span className="contact-icon"><Icon name="phone" /></span>
              <span>
                <small>اتصل بنا</small>
                <strong dir="ltr">+974 5510 1742</strong>
              </span>
              <Icon name="arrow" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Icon name="whatsapp" /></span>
              <span>
                <small>واتساب</small>
                <strong dir="ltr">+974 5510 1742</strong>
              </span>
              <Icon name="arrow" />
            </a>
            <a href="mailto:ml3594347@gmail.com">
              <span className="contact-icon"><Icon name="mail" /></span>
              <span>
                <small>البريد الإلكتروني</small>
                <strong dir="ltr">ml3594347@gmail.com</strong>
              </span>
              <Icon name="arrow" />
            </a>
            <a href={mapUrl} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Icon name="location" /></span>
              <span>
                <small>زورونا</small>
                <strong>طريق سلوى، الدوحة</strong>
              </span>
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <a className="brand brand-light" href="#top">
            <span className="brand-mark">أ</span>
            <span>
              <strong>أبو جوهر</strong>
              <small>للأثاث والديكور</small>
            </span>
          </a>
          <p>الستائر، الكنب، السجاد، ورق الجدران والأرضيات في مكان واحد.</p>
          <div className="footer-meta">
            <span>السجل التجاري: ١٤٢٦٨</span>
            <span>طريق سلوى، قطر</span>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>جميع الحقوق محفوظة — أبو جوهر للأثاث</span>
          <span className="developer">
            تصميم وتطوير بواسطة{" "}
            <a href="https://www.xenosysweb.com/" target="_blank" rel="noreferrer">
              @Xenosys Qatar
            </a>
            <a href="tel:+97470643918" dir="ltr">+974 7064 3918</a>
          </span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل عبر واتساب"
      >
        <Icon name="whatsapp" size={25} />
        <span>واتساب</span>
      </a>
    </main>
  );
}

export default App;
