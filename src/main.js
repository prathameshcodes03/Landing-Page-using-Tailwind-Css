import './style.css'

const accessories = [
  {
    img: "src/assets/img4/hear.jpeg",
    isNew: true,
    name: "iPhone 17 Pro Silicone Case with MagSafe – Bright Guava",
    price: "₹4900.00",
    dots: ["#f4603a", "#f0e6b0", "#c8d4a0", "#2b3a52", "#6b3a2a", "#3a3a5a"]
  },
  {
    img: "src/assets/img4/siliconcase.jpeg",
    isNew: true,
    name: "Crossbody Strap – Bright Guava",
    price: "₹5900.00",
    dots: ["#f9c0c0", "#f4603a", "#c8d4a0", "#2b3a52", "#a0b4c8", "#c8b49a"]
  },
  {
    img: "src/assets/img4/crossbodystrap.jpeg",
    isNew: false,
    name: "MagSafe Charger (1m)",
    price: "₹4500.00",
    dots: ["#f4603a", "#f0e6b0", "#2b3a52", "#c8b49a"]
  },
  {
    img: "src/assets/img4/magsafecharger.jpeg",
    isNew: true,
    name: "iPhone 17 Clear Case with MagSafe",
    price: "₹3900.00",
    dots: ["#f4603a", "#c8d4a0", "#2b3a52"]
  },
  {
    img: "src/assets/img4/clearcase.jpeg",
    isNew: true,
    name: "Apple Watch Clementine Sport Band",
    price: "₹4900.00",
    dots: ["#f4603a", "#f0e6b0", "#2b3a52"]
  },
  {
    img: "src/assets/img4/brightguava.jpeg",
    isNew: true,
    name: "Magic Keyboard with Touch ID",
    price: "₹9900.00",
    dots: ["#f4603a", "#c8d4a0", "#2b3a52"]
  },
  {
    img: "src/assets/img4/clementineband.jpeg",
    isNew: false,
    name: "MagSafe Charger 2m",
    price: "₹6900.00",
    dots: ["#f4603a", "#2b3a52"]
  },
  {
    img: "src/assets/img4/magickeyboard.jpeg",
    isNew: true,
    name: "AirTag 4 Pack",
    price: "₹11900.00",
    dots: ["#f0f0f0"]
  },
  {
    img: "src/assets/img4/iphoneairmagsafe.jpeg",
    isNew: true,
    name: "iPhone Air MagSafe Case",
    price: "₹4200.00",
    dots: ["#f4603a", "#c8d4a0", "#2b3a52", "#f0e6b0"]
  },
  {
    img: "src/assets/img4/bumpertan.jpeg",
    isNew: false,
    name: "iPhone Bumper Case – Tan",
    price: "₹3500.00",
    dots: ["#c8b49a", "#2b3a52", "#f4603a"]
  },
  {
    img: "src/assets/img4/airtag.jpeg",
    isNew: false,
    name: "AirTag",
    price: "₹3190.00",
    dots: ["#f0f0f0"]
  },
  {
    img: "src/assets/img4/adapter.jpeg",
    isNew: false,
    name: "USB-C to MagSafe 3 Cable (2m)",
    price: "₹3900.00",
    dots: []
  },
  {
    img: "src/assets/img4/explore.jpeg",
    isNew: false,
    name: "Here and wow. The accessories you love. In a fresh mix of colours.",
    price: null,
    dots: []
  }
];

const container = document.getElementById("accessoryCards");

accessories.forEach(item => {
  const dots = item.dots.map(c => `<span class="dot" style="background:${c}"></span>`).join("");
  const dotsHtml = item.dots.length ? `<div class="acc-dots">${dots}<span class="plus">+</span></div>` : "";
  const newTag = item.isNew ? `<span class="acc-new">New</span>` : "";
  const priceHtml = item.price ? `<p class="acc-price">MRP ${item.price} (Incl. of all taxes)</p>` : "";

  container.innerHTML += `
    <div class="acc-card">
      <div class="acc-img" style="background-image:url('${item.img}')"></div>
      ${dotsHtml}
      <div class="acc-info">
        ${newTag}
        <p class="acc-name">${item.name}</p>
        ${priceHtml}
      </div>
    </div>
  `;
});




const audioProducts = [
  {
    img: null,
    isIntro: true,
    label: null,
    name: "Get 3 months of Apple Music free.",
    subtitle: "Included with the purchase of selected Apple devices.‡",
    price: null,
    dots: [],
    introImg: "src/assets/img5/applemusic.jpeg"
  },
  {
    img: "src/assets/img5/airpodspro3.jpeg",
    isIntro: false,
    label: "Free Engraving",
    name: "AirPods Pro 3",
    subtitle: null,
    price: "₹25900.00",
    dots: []
  },
  {
    img: "src/assets/img5/airpods4.jpeg",
    isIntro: false,
    label: "Free Engraving",
    name: "AirPods 4",
    subtitle: null,
    price: "₹12900.00",
    dots: []
  },
  {
    img: "src/assets/img5/powerbeats.jpeg",
    isIntro: false,
    label: "Free Engraving",
    name: "Powerbeats Pro 2 – High-Performance Earbuds",
    subtitle: null,
    price: "₹29900.00",
    dots: ["#1a1a1a", "#d1d1d1", "#b0b0d0", "#f4603a"]
  },
  {
    img: "src/assets/img5/beatspill.jpeg",
    isIntro: false,
    label: null,
    name: "Beats Pill Speaker",
    subtitle: null,
    price: "₹11900.00",
    dots: ["#1a1a1a", "#d1d1d1", "#f4603a"]
  },
  {
    img: "src/assets/img5/beatssolo.jpeg",
    isIntro: false,
    label: null,
    name: "Beats Solo 4 Wireless Headphones",
    subtitle: null,
    price: "₹19900.00",
    dots: ["#1a1a1a", "#d1d1d1", "#8b6914"]
  },
  {
    img: "src/assets/img5/homepod.jpeg",
    isIntro: false,
    label: null,
    name: "HomePod",
    subtitle: null,
    price: "₹32900.00",
    dots: ["#1a1a1a", "#d1d1d1"]
  },
  {
    img: "src/assets/img5/homepodmini.jpeg",
    isIntro: false,
    label: null,
    name: "HomePod mini",
    subtitle: null,
    price: "₹10900.00",
    dots: ["#1a1a1a", "#d1d1d1", "#f4603a", "#c8d4a0", "#f0e6b0"]
  }
];


const audioContainer = document.getElementById("audioCards");

audioProducts.forEach(item => {
  const dots = item.dots.map(c => `<span class="dot" style="background:${c}"></span>`).join("");
  const dotsHtml = item.dots.length ? `<div class="acc-dots">${dots}<span class="plus">+</span></div>` : "";
  const labelHtml = item.label ? `<span class="acc-new">${item.label}</span>` : "";
  const priceHtml = item.price ? `<p class="acc-price">MRP ${item.price} (Incl. of all taxes)</p>` : "";

  if (item.isIntro) {
    audioContainer.innerHTML += `
      <div class="acc-card">
        <div class="acc-info" style="padding: 1.5rem;">
          <p class="acc-name" style="font-size:1.2rem; line-height:1.4;">${item.name}</p>
          <p class="acc-price" style="margin-bottom: 1rem;">${item.subtitle}</p>
        </div>
        <div class="acc-img" style="background-image:url('${item.introImg}'); height: 180px;"></div>
      </div>
    `;
  } else {
    audioContainer.innerHTML += `
      <div class="acc-card">
        <div class="acc-img" style="background-image:url('${item.img}')"></div>
        ${dotsHtml}
        <div class="acc-info">
          ${labelHtml}
          <p class="acc-name">${item.name}</p>
          ${priceHtml}
        </div>
      </div>
    `;
  }
});


const featuredProducts = [
  {
    img: "src/assets/img6/appleintelligence.jpeg",
    isIntro: false,
    tag: null,
    tagColor: null,
    name: null,
    title: "Apple Intelligence.",
    titleColor: "linear-gradient(to right, #a855f7, #ec4899, #f97316)",
    subtitle: "Create, communicate and get things done effortlessly.²",
    price: null,
    dots: []
  },
  {
    img: "src/assets/img6/bow.jpeg",
    isIntro: false,
    tag: "APPLE STORE APP",
    tagColor: "#6b7280",
    name: null,
    title: "Put your bow on it.",
    titleColor: null,
    subtitle: "Make the gift unmistakably theirs with a personalised message created especially for them.",
    price: null,
    dots: []
  },
  {
    img: "src/assets/img6/appletv.jpeg",
    isIntro: false,
    tag: "APPLE TV",
    tagColor: "#6b7280",
    name: null,
    title: "Get 3 months of Apple TV free when you buy an Apple device.※",
    titleColor: null,
    subtitle: null,
    price: null,
    dots: []
  },
  {
    img: "src/assets/img6/appleservices.jpeg",
    isIntro: false,
    tag: "APPLE SERVICES",
    tagColor: "#6b7280",
    name: null,
    title: "One subscription. Six people. Endless fun.",
    titleColor: null,
    subtitle: "Apple One bundles your favourite Apple services.",
    price: null,
    dots: []
  },
  {
    img: "src/assets/img6/applecare.jpeg",
    isIntro: false,
    tag: "APPLECARE+",
    tagColor: "#6b7280",
    name: null,
    title: "Worry-free. Always.",
    titleColor: null,
    subtitle: "AppleCare+ gives you expert support and hardware coverage.",
    price: null,
    dots: []
  },
  {
    img: "src/assets/img6/home.jpeg",
    isIntro: false,
    tag: "APPLE HOME",
    tagColor: "#6b7280",
    name: null,
    title: "A smarter home starts here.",
    titleColor: null,
    subtitle: "Control your home with Apple devices.",
    price: null,
    dots: []
  }
];

const featuredContainer = document.getElementById("featuredCards");

featuredProducts.forEach(item => {
  const tagHtml = item.tag
    ? `<p style="font-size:0.65rem; font-weight:600; color:${item.tagColor}; letter-spacing:0.05em; margin-bottom:0.4rem;">${item.tag}</p>`
    : "";

  const titleHtml = item.title
    ? item.titleColor
      ? `<p style="font-size:1rem; font-weight:700; background:${item.titleColor}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; margin-bottom:0.3rem;">${item.title}</p>`
      : `<p style="font-size:1rem; font-weight:700; color:#1d1d1f; margin-bottom:0.3rem;">${item.title}</p>`
    : "";

  const subtitleHtml = item.subtitle
    ? `<p style="font-size:0.78rem; color:#6b7280; line-height:1.4;">${item.subtitle}</p>`
    : "";

  featuredContainer.innerHTML += `
    <div class="acc-card" style="width:280px; min-width:280px; height:420px; justify-content:space-between;">
      <div style="padding:1.2rem 1.2rem 0;">
        ${tagHtml}
        ${titleHtml}
        ${subtitleHtml}
      </div>
      <div class="acc-img" style="background-image:url('${item.img}'); height:260px; background-size:cover; background-position:center; border-radius:0 0 18px 18px;"></div>
    </div>
  `;
});