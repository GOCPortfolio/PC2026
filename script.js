/* =====================================================================
   Pureheart & Chukwuemeka · #PC2026 — wedding invitation
   ---------------------------------------------------------------------
   1) EDIT EVERYTHING HERE  → the CONFIG object below.
   2) The app code underneath should not need changes.
   ===================================================================== */

const CONFIG = {
  hashtag: "#PC2026",
  tagline: "To Have And To Hold",

  couple: {
    bride: {
      title: "Miss",
      given: "Elizabeth Pureheart",       // shown in plum capitals
      surname: "Ukoha",                    // shown in gold script
      firstName: "Pureheart",
      parentsLabel: "Daughter of",
      parents: "Late Mr G. Ukoha Joshua & Nkechinyere Joshua"
    },
    groom: {
      title: "Mr",
      given: "Chukwuemeka Michael",
      surname: "John",
      firstName: "Chukwuemeka",
      parentsLabel: "Son of",
      parents: "Late Mr John Oliwo Uba & Evang Ogbeyialu Oliwo"
    }
  },

  event: {
    dateISO: "2026-11-22T10:00:00+01:00",  // Africa/Lagos (WAT, UTC+1) — drives countdown + calendar
    durationHours: 4,                        // length of the calendar entry
    title: "Wedding of Pureheart & Chukwuemeka (#PC2026)",
    dateLabel: "Sunday, 22nd November 2026",
    weekday: "Sunday",
    day: "22nd",
    monthYear: "November 2026",
    timeLabel: "10:00AM",
    city: "Surulere, Lagos"
  },

  venues: {
    ceremony: {
      role: "Ceremony",
      name: "Assemblies of God Church",
      sub: "(Favor Family)",
      address: ["3 Onikoyi Street, off Cele Aguda", "Surulere, Lagos"],
      mapQuery: "3 Onikoyi St, Surulere, Lagos 101241, Lagos",
      mapsUrl: "",         // optional: paste an exact Google Maps share link to override the search link
      directionsUrl: ""    // optional: override the directions link
    },
    reception: {
      role: "Reception",
      name: "Pulville Boulevard Hotel",
      sub: "",
      address: ["7 Irone Avenue, Cele Aguda", "off Sanya Road, Surulere, Lagos"],
      mapQuery: "Pulville Boulevard Hotel, 7 Irone Avenue, Cele Aguda, off Sanya Road, Surulere, Lagos",
      mapsUrl: "",
      directionsUrl: ""
    }
  },

  // "Colours of the Day" (also used in the dress-code FAQ)
  colours: [
    { name: "White",    hex: "#FFFFFF" },
    { name: "Burgundy", hex: "#6D1A36" },
    { name: "Gold",     hex: "#C9A24B", gold: true },
    { name: "Lilac",    hex: "#9B7CC4" },
    { name: "Onion",    hex: "#C98A9B" }
  ],

  story: {
    heading: "Our Story",
    intro: "Our story didn't start with anything magical. It started with a simple hello on Facebook.",
    items: [
      {
        title: "A simple hello",
        date: "Where it began",
        text: "Just a conversation between two people who had no idea where it would lead.",
        photo: { src: "assets/story-1.webp", w: 1000, h: 667, alt: "Pureheart and Chukwuemeka laughing together at a phone on the beach at dusk" }
      },
      {
        title: "Miles apart",
        date: "The distance",
        text: "We built something through calls, chats and little moments shared from far away. It wasn't perfect, but somehow it felt right. There was peace in it. I didn't have to chase it or wonder where I stood.",
        photo: { src: "assets/trad-5-sm.webp", w: 480, h: 640, alt: "Pureheart resting her hand on Chukwuemeka's shoulder as he smiles down at her, her ring showing" }
      },
      {
        title: "Here we are",
        date: "The engagement",
        text: "The hello became conversations. The conversations became friendship. The friendship became love. And the love brought us here, ready to become husband and wife.",
        photo: { src: "assets/engagement.webp", w: 640, h: 854, alt: "Pureheart and Chukwuemeka on the day of their engagement" }
      }
    ],
    closing: "I wasn't just starting a conversation. I was unknowingly saying hello to my future."
  },

  // Gallery: src = full size (lightbox), thumb = grid image. tw/th = thumb size, w/h = full size.
  gallery: [
    { src: "assets/p-heart.webp", thumb: "assets/p-heart-sm.webp", tw: 640, th: 427, w: 1400, h: 933, alt: "Pureheart and Chukwuemeka from behind, making a heart with their hands against a soft blue sky" },
    { src: "assets/trad-7.webp", thumb: "assets/trad-7-sm.webp", tw: 480, th: 640, w: 756, h: 1008, alt: "Chukwuemeka and Pureheart in a warm embrace in traditional attire, smiling at each other among green leaves" },
    { src: "assets/trad-2.webp", thumb: "assets/trad-2-sm.webp", tw: 480, th: 640, w: 756, h: 1008, alt: "Pureheart laughing with joy, in a burgundy off-shoulder dress with coral beads" },
    { src: "assets/p-touch.webp", thumb: "assets/p-touch-sm.webp", tw: 640, th: 427, w: 1400, h: 933, alt: "Chukwuemeka and Pureheart in white, foreheads close, her hand softly on his face" },
    { src: "assets/trad-5.webp", thumb: "assets/trad-5-sm.webp", tw: 480, th: 640, w: 756, h: 1008, alt: "Pureheart resting her hand on Chukwuemeka's shoulder as he smiles down at her, he in white with a red cap and coral beads" },
    { src: "assets/gallery-bride-1.webp", thumb: "assets/gallery-bride-1-sm.webp", tw: 560, th: 840, w: 1000, h: 1500, alt: "Pureheart smiling at the camera on the beach at sunset, in a white pleated dress" },
    { src: "assets/p-walk1.webp", thumb: "assets/p-walk1-sm.webp", tw: 600, th: 549, w: 1200, h: 1098, alt: "Pureheart and Chukwuemeka walking together in white on a bright day" },
    { src: "assets/trad-9.webp", thumb: "assets/trad-9-sm.webp", tw: 480, th: 640, w: 756, h: 1008, alt: "Pureheart and Chukwuemeka sharing a smile, she holding a black feather fan, he in white with coral beads" },
    { src: "assets/p-embrace.webp", thumb: "assets/p-embrace-sm.webp", tw: 480, th: 720, w: 900, h: 1350, alt: "Chukwuemeka and Pureheart in a tender embrace" },
    { src: "assets/trad-4.webp", thumb: "assets/trad-4-sm.webp", tw: 480, th: 640, w: 756, h: 1008, alt: "Chukwuemeka standing tall in white attire and a red cap, holding a gold-topped walking cane" },
    { src: "assets/gallery-couple-2.webp", thumb: "assets/gallery-couple-2-sm.webp", tw: 640, th: 427, w: 1400, h: 933, alt: "Pureheart and Chukwuemeka holding hands, silhouetted against a lilac sky" },
    { src: "assets/p-walk2.webp", thumb: "assets/p-walk2-sm.webp", tw: 640, th: 427, w: 1400, h: 933, alt: "Pureheart and Chukwuemeka walking side by side, laughing" },
    { src: "assets/trad-1.webp", thumb: "assets/trad-1-sm.webp", tw: 480, th: 640, w: 756, h: 1008, alt: "Pureheart glancing back over her shoulder in a black and gold embroidered gown and black head tie" },
    { src: "assets/trad-3.webp", thumb: "assets/trad-3-sm.webp", tw: 480, th: 640, w: 756, h: 1008, alt: "Pureheart and Chukwuemeka close together, she in burgundy with coral beads and he in white with a red cap" },
    { src: "assets/p-walk3.webp", thumb: "assets/p-walk3-sm.webp", tw: 480, th: 720, w: 900, h: 1350, alt: "Pureheart and Chukwuemeka walking hand in hand" },
    { src: "assets/gallery-couple-1.webp", thumb: "assets/gallery-couple-1-sm.webp", tw: 640, th: 427, w: 1400, h: 933, alt: "Pureheart and Chukwuemeka laughing together at a phone on the beach at dusk" },
    { src: "assets/trad-6.webp", thumb: "assets/trad-6-sm.webp", tw: 480, th: 640, w: 756, h: 1008, alt: "Pureheart smiling warmly in a black and gold gown with a black feather fan and a black head tie" },
    { src: "assets/p-piggy.webp", thumb: "assets/p-piggy-sm.webp", tw: 480, th: 714, w: 900, h: 1339, alt: "Chukwuemeka carrying Pureheart on his back, both smiling" },
    { src: "assets/trad-8.webp", thumb: "assets/trad-8-sm.webp", tw: 480, th: 640, w: 756, h: 1008, alt: "Pureheart and Chukwuemeka gazing at each other, her hand resting on his shoulder with her ring showing" },
    { src: "assets/gallery-bride-2.webp", thumb: "assets/gallery-bride-2-sm.webp", tw: 560, th: 840, w: 1000, h: 1500, alt: "Pureheart looking back over her shoulder at sunset, long waves of hair in the sea breeze" }
  ],

  toast: {
    title: "Wedding Toast",
    lines: [
      "May your union be a living testimony of Christ’s love for His Church.",
      "May your home be a sanctuary of peace, filled with faith, hope, and the joy of the Lord.",
      "As you walk hand-in-hand, may His word be a lamp to your feet and a light to your path.",
      "May He bless you with fruitfulness and keep you in His perfect peace.",
      "We raise a cup to your eternal union in Him.",
      "To Pureheart and Chukwuemeka, may God be your center always."
    ]
  },

  rsvp: {
    // Paste your Google Apps Script "Web app" URL here (see README + google-apps-script.gs).
    endpoint: "https://script.google.com/macros/s/AKfycbwdZa7V5sxmKcBKM5Ws37e6wrhkRS6QXw-wjt-ldOCQ3VnAZkiLM7nFS4u06XaeMJ-x/exec",
    phoneDisplay: "08165178188",
    tel: "08165178188",
    whatsappNumber: "2348137679556",   // WhatsApp chat number (08137679556), international format, no "+"
    maxGuests: 6
  },

  gifts: {
    heading: "With Love & Gratitude",
    message: "Your presence at our wedding is the greatest gift we could ask for. If you would like to bless us further, we would be truly grateful for a gift towards our new beginning.",
    accounts: [
      { bank: "Access Bank", accountName: "Chukwuemeka Michael", accountNumber: "0074689292" }
    ]
  },

  contact: { name: "Our wedding coordinator", phone: "08165178188", whatsapp: "08137679556" },

  // ---- Father of the Day ----
  fatherOfDay: { label: "Father of the Day", names: "Mr. & Mrs. Collins Ndubuisi Irodi", role: "CEO, Nicol Venture Ltd" },

  // ---- Vendors ----
  vendors: {
    heading: "Our Vendors",
    list: [
      { role: "Event Planner", name: "Heartycakes And Events" },
      { role: "Female Designer", name: "Twin Precious Apparel" },
      { role: "Male Designer", name: "Canice Apparel" },
      { role: "Decorator", name: "Ola Events" },
      { role: "Cake & Dessert", name: "Heartycakes And Events" },
      { role: "Make-up Artist", name: "Beautyluxe by Omoh" },
      { role: "Videographers & Photographer", name: "G4exploitconsultltd" },
      { role: "Website Developer", name: "G.O.C | BrandStrategist" }
    ]
  },

  // ---- FAQ (parking / accommodation are PLACEHOLDERS: confirm and edit) ----
  faq: [
    { q: "Dress code",       a: "We would love to see you in our colours of the day: white, burgundy, gold, lilac and onion.", swatches: true },
    { q: "Parking",          a: "Parking may be limited around the church and the reception hotel, so please plan to arrive early. Car-pooling or a ride-hailing service is encouraged." },
    { q: "Accommodation",    a: "Guests travelling from out of town are advised to book accommodation early. If you need help finding somewhere to stay near the venues in Surulere, please reach out to our contact person." },
    { q: "Contact person",   a: "For any questions before or on the day, please call {contact}, or send a WhatsApp message to 08137679556.", contact: true }
  ],

  footer: {
    thanks: "Thank you for being part of our story. Your love, prayers and presence mean the world to us. We cannot wait to celebrate with you!"
  },

  share: {
    message: "You are invited to the wedding of Pureheart & Chukwuemeka (#PC2026), Sunday, 22nd November 2026, Surulere, Lagos."
  },

  music: { src: "assets/music.mp3", volume: 0.45 }   // replace assets/music.mp3 with your own soft instrumental
};


/* =====================================================================
   APP — no need to edit below this line
   ===================================================================== */
(function () {
  'use strict';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var get = function (o, path) { return path.split('.').reduce(function (a, k) { return a == null ? a : a[k]; }, o); };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SVGNS = 'http://www.w3.org/2000/svg';
  var params = new URLSearchParams(location.search);

  function el(tag, props, kids) {
    var n = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      var v = props[k];
      if (v == null || v === false) return;
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else n.setAttribute(k, v === true ? '' : v);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  function icon(id, cls) {
    var s = document.createElementNS(SVGNS, 'svg');
    s.setAttribute('class', 'i' + (cls ? ' ' + cls : ''));
    s.setAttribute('aria-hidden', 'true');
    var u = document.createElementNS(SVGNS, 'use');
    u.setAttribute('href', '#' + id);
    s.appendChild(u);
    return s;
  }
  var enc = encodeURIComponent;

  /* ---------- toast notice ---------- */
  var toastEl = $('#toast'), toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 2400);
  }

  /* ---------- guest from ?guest=Name ---------- */
  var guest = (function () {
    var raw = params.get('guest');
    if (!raw) return '';
    return raw.replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 60);
  })();
  var greeting = guest ? 'Dear ' + guest : '';

  /* ---------- bind plain text from CONFIG ---------- */
  $$('[data-cfg]').forEach(function (n) {
    var v = get(CONFIG, n.getAttribute('data-cfg'));
    if (v != null && typeof v !== 'object') n.textContent = v;
  });
  if (greeting) {
    var ig = $('#introGuest'); ig.textContent = greeting; ig.hidden = false;
    var gg = $('#guestGreet'); gg.textContent = greeting + ',';  gg.hidden = false;
  }

  /* ---------- swatches ---------- */
  function swatchEl(c) {
    var s = el('span', { class: 'swatch' + (c.gold ? ' swatch--gold' : ''), title: c.name });
    if (!c.gold) s.style.background = c.hex;
    return s;
  }
  var swUl = $('#swatches');
  CONFIG.colours.forEach(function (c) {
    swUl.appendChild(el('li', {}, [swatchEl(c), el('span', { class: 'name', text: c.name })]));
  });

  /* ---------- venues ---------- */
  function mapsSearch(v)  { return v.mapsUrl || 'https://www.google.com/maps/search/?api=1&query=' + enc(v.mapQuery); }
  function mapsDirs(v)    { return v.directionsUrl || 'https://www.google.com/maps/dir/?api=1&destination=' + enc(v.mapQuery) + '&travelmode=driving'; }
  var vList = $('#venueList');
  ['ceremony', 'reception'].forEach(function (key, i) {
    var v = CONFIG.venues[key];
    var addr = el('address', { class: 'venue-card__addr' });
    v.address.forEach(function (line, idx) { if (idx) addr.appendChild(document.createElement('br')); addr.appendChild(document.createTextNode(line)); });
    var card = el('article', { class: 'venue-card reveal', style: '--d:' + (i * 0.1) + 's' }, [
      el('span', { class: 'venue-card__pin' }, [icon('i-pin')]),
      el('p', { class: 'venue-card__role', text: v.role }),
      el('h3', { class: 'venue-card__name', text: v.name }),
      v.sub ? el('p', { class: 'venue-card__sub', text: v.sub }) : null,
      addr,
      el('div', { class: 'venue-card__btns' }, [
        el('a', { class: 'btn btn--plum', href: mapsSearch(v), target: '_blank', rel: 'noopener' }, [icon('i-map'), 'Open in Google Maps']),
        el('a', { class: 'btn btn--outline', href: mapsDirs(v), target: '_blank', rel: 'noopener' }, [icon('i-directions'), 'Get directions'])
      ])
    ]);
    vList.appendChild(card);
  });

  /* ---------- story timeline ---------- */
  var tl = $('#timeline');
  CONFIG.story.items.forEach(function (it) {
    var li = el('li', { class: 'tl-item reveal' }, [
      el('p', { class: 'tl-date', text: it.date }),
      el('h3', { class: 'tl-title', text: it.title }),
      el('p', { class: 'tl-text', text: it.text }),
      it.photo ? el('figure', { class: 'tl-photo' }, [el('img', { src: it.photo.src, width: it.photo.w, height: it.photo.h, alt: it.photo.alt, loading: 'lazy', decoding: 'async' })]) : null
    ]);
    tl.appendChild(li);
  });
  var cl = $('#storyClosing'); if (cl && CONFIG.story.closing) cl.textContent = CONFIG.story.closing; else if (cl) cl.hidden = true;

  /* ---------- father of the day + vendors ---------- */
  var fo = CONFIG.fatherOfDay;
  $('#fatherLabel').textContent = fo.label; $('#fatherNames').textContent = fo.names; $('#fatherRole').textContent = fo.role;
  var vl = $('#vendorList');
  CONFIG.vendors.list.forEach(function (v, i) {
    vl.appendChild(el('li', { class: 'vendor reveal', style: '--d:' + ((i % 2) * 0.08) + 's' }, [el('span', { class: 'vendor__role', text: v.role }), el('span', { class: 'vendor__name', text: v.name })]));
  });

  /* ---------- gallery + lightbox ---------- */
  var gal = $('#gallery'), items = CONFIG.gallery, n = items.length;
  items.forEach(function (g, i) {
    var b = el('button', { class: 'shot', type: 'button', 'data-i': i, 'aria-label': 'Open photo ' + (i + 1) + ' of ' + n + ': ' + g.alt }, [
      el('img', { src: g.thumb, width: g.tw, height: g.th, alt: g.alt, loading: 'lazy', decoding: 'async' })
    ]);
    gal.appendChild(el('li', { class: 'reveal', style: '--d:' + ((i % 2) * 0.12) + 's' }, [b]));
  });

  var lb = $('#lightbox'), lbImg = $('#lbImg'), lbCap = $('#lbCap'), lbCount = $('#lbCount'), lbStage = $('#lbStage');
  var lbIdx = 0, lbOpener = null;
  function lbShow(i, instant) {
    lbIdx = (i + n) % n;
    var g = items[lbIdx];
    var apply = function () {
      lbImg.src = g.src; lbImg.alt = g.alt; lbCap.textContent = g.alt; lbCount.textContent = (lbIdx + 1) + ' / ' + n;
      requestAnimationFrame(function () { lbImg.classList.remove('is-out'); });
    };
    if (instant) { apply(); } else {
      lbImg.classList.add('is-out');
      var pre = new Image(); pre.onload = pre.onerror = apply; pre.src = g.src;
    }
    [1, -1].forEach(function (d) { var p = new Image(); p.src = items[(lbIdx + d + n) % n].src; });
  }
  function lbOpen(i, opener) {
    lbOpener = opener || null;
    lb.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    lbShow(i, true);
    $('#lbClose').focus();
  }
  function lbClose() {
    lb.hidden = true;
    document.documentElement.style.overflow = '';
    if (lbOpener) lbOpener.focus({ preventScroll: true });
  }
  gal.addEventListener('click', function (e) {
    var b = e.target.closest('.shot'); if (b) lbOpen(+b.getAttribute('data-i'), b);
  });
  $('#lbClose').addEventListener('click', lbClose);
  $('#lbPrev').addEventListener('click', function () { lbShow(lbIdx - 1); });
  $('#lbNext').addEventListener('click', function () { lbShow(lbIdx + 1); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') lbClose();
    else if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
    else if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
    else if (e.key === 'Tab') {
      var f = [$('#lbClose'), $('#lbPrev'), $('#lbNext')], a = document.activeElement, k = f.indexOf(a);
      e.preventDefault();
      f[(k + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  (function swipe() {
    var sx = 0, sy = 0, dx = 0, drag = false;
    lbStage.addEventListener('pointerdown', function (e) { drag = true; sx = e.clientX; sy = e.clientY; dx = 0; });
    lbStage.addEventListener('pointermove', function (e) {
      if (!drag) return;
      dx = e.clientX - sx;
      if (Math.abs(dx) > Math.abs(e.clientY - sy) && Math.abs(dx) > 6) {
        lbImg.style.transition = 'none';
        lbImg.style.transform = 'translateX(' + dx * 0.6 + 'px)';
        lbImg.style.opacity = String(1 - Math.min(0.5, Math.abs(dx) / 500));
      }
    });
    function end(e) {
      if (!drag) return; drag = false;
      lbImg.style.transition = ''; lbImg.style.transform = ''; lbImg.style.opacity = '';
      if (Math.abs(dx) > 50) { lbShow(lbIdx + (dx < 0 ? 1 : -1)); }
      else if (Math.abs(dx) < 6 && e.target === lbStage) lbClose();
      dx = 0;
    }
    lbStage.addEventListener('pointerup', end);
    lbStage.addEventListener('pointercancel', end);
  })();

  /* ---------- toast text ---------- */
  var tt = $('#toastText');
  CONFIG.toast.lines.forEach(function (line, i) {
    tt.appendChild(el('p', { class: 'reveal', style: '--d:' + (i * 0.12) + 's', text: line }));
  });

  /* ---------- gifts ---------- */
  var acl = $('#acctList');
  CONFIG.gifts.accounts.forEach(function (a, i) {
    var btn = el('button', { class: 'btn btn--plum btn--block', type: 'button' }, [icon('i-copy'), 'Copy account number']);
    btn.addEventListener('click', function () { copyText(a.accountNumber, 'Account number copied'); });
    acl.appendChild(el('div', { class: 'acct reveal', style: '--d:' + (i * 0.1) + 's' }, [
      el('p', { class: 'acct__bank', text: a.bank }),
      el('p', { class: 'acct__num', text: a.accountNumber }),
      el('p', { class: 'acct__name', text: a.accountName }),
      btn
    ]));
  });
  function copyText(text, msg) {
    var done = function () { toast(msg || 'Copied'); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else fallback();
    function fallback() {
      var t = el('textarea', { 'aria-hidden': 'true', readonly: true });
      t.value = text; t.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
      document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); done(); } catch (e) { toast('Press and hold to copy: ' + text); }
      t.remove();
    }
  }

  /* ---------- FAQ accordion ---------- */
  var fl = $('#faqList');
  CONFIG.faq.forEach(function (f, i) {
    var pid = 'faq-p' + i, qid = 'faq-q' + i;
    var a = el('div', { class: 'faq-a' });
    if (f.contact) {
      var c = CONFIG.contact, parts = f.a.split('{contact}');
      a.appendChild(document.createTextNode(parts[0]));
      a.appendChild(el('a', { href: 'tel:' + c.phone, text: c.name + ' (' + c.phone + ')' }));
      a.appendChild(document.createTextNode(parts[1] || ''));
    } else a.appendChild(document.createTextNode(f.a));
    if (f.swatches) {
      var row = el('div', { class: 'faq-sw', 'aria-hidden': 'true' });
      CONFIG.colours.forEach(function (c) { row.appendChild(swatchEl(c)); });
      a.appendChild(row);
    }
    var q = el('button', { class: 'faq-q', type: 'button', id: qid, 'aria-expanded': 'false', 'aria-controls': pid }, [el('span', { text: f.q }), icon('i-chevron')]);
    var panel = el('div', { class: 'faq-panel', id: pid, role: 'region', 'aria-labelledby': qid }, [el('div', {}, [a])]);
    var item = el('div', { class: 'faq-item' }, [q, panel]);
    q.addEventListener('click', function () {
      var open = !item.classList.contains('is-open');
      $$('.faq-item.is-open', fl).forEach(function (o) { o.classList.remove('is-open'); $('.faq-q', o).setAttribute('aria-expanded', 'false'); });
      if (open) { item.classList.add('is-open'); q.setAttribute('aria-expanded', 'true'); }
    });
    fl.appendChild(item);
  });

  /* ---------- countdown ---------- */
  var target = new Date(CONFIG.event.dateISO).getTime();
  var cd = { days: $('[data-cd=days]'), hours: $('[data-cd=hours]'), minutes: $('[data-cd=minutes]'), seconds: $('[data-cd=seconds]') };
  var pad = function (v, l) { v = String(v); while (v.length < l) v = '0' + v; return v; };
  function setCd(k, v) {
    if (cd[k].textContent !== v) {
      cd[k].textContent = v;
      if (k === 'seconds' && !reduceMotion) { cd[k].classList.remove('flip'); void cd[k].offsetWidth; cd[k].classList.add('flip'); }
    }
  }
  function tick() {
    var diff = target - Date.now();
    if (diff <= 0) {
      $('#cdGrid').hidden = true; $('#married').hidden = false; return false;
    }
    var s = Math.floor(diff / 1000);
    setCd('days', pad(Math.floor(s / 86400), 2));
    setCd('hours', pad(Math.floor(s % 86400 / 3600), 2));
    setCd('minutes', pad(Math.floor(s % 3600 / 60), 2));
    setCd('seconds', pad(s % 60, 2));
    return true;
  }
  if (tick()) {
    var cdTimer = setInterval(function () { if (!tick()) clearInterval(cdTimer); }, 1000);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) tick(); });
  }

  /* ---------- add to calendar ---------- */
  var ev = CONFIG.event, cer = CONFIG.venues.ceremony, rec = CONFIG.venues.reception;
  var evStart = new Date(ev.dateISO), evEnd = new Date(evStart.getTime() + ev.durationHours * 3600e3);
  var fmtUTC = function (d) { return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''); };
  var evLocation = cer.name + ' ' + cer.sub + ', ' + cer.address.join(', ');
  evLocation = evLocation.replace(/\s+,/g, ',').replace(/\s{2,}/g, ' ');
  var evDesc = 'Ceremony: ' + cer.name + ' ' + cer.sub + ', ' + cer.address.join(', ') + '.\n' +
               'Reception: ' + rec.name + ', ' + rec.address.join(', ') + '.\n' +
               'Colours of the day: ' + CONFIG.colours.map(function (c) { return c.name; }).join(', ') + '.\n' +
               'RSVP: ' + CONFIG.rsvp.phoneDisplay + '  ' + CONFIG.hashtag;
  $('#gcal').href = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=' + enc(ev.title) + '&dates=' + fmtUTC(evStart) + '/' + fmtUTC(evEnd) +
    '&details=' + enc(evDesc) + '&location=' + enc(evLocation) + '&ctz=Africa%2FLagos';
  function icsFold(line) {
    var out = [], s = line;
    while (s.length > 74) { out.push(s.slice(0, 74)); s = ' ' + s.slice(74); }
    out.push(s); return out.join('\r\n');
  }
  function buildICS() {
    var esc = function (s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n'); };
    var lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//PC2026//Wedding Invitation//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'BEGIN:VEVENT', 'UID:pc2026-wedding@' + (location.hostname || 'pc2026'), 'DTSTAMP:' + fmtUTC(new Date()),
      'DTSTART:' + fmtUTC(evStart), 'DTEND:' + fmtUTC(evEnd),
      'SUMMARY:' + esc(ev.title), 'LOCATION:' + esc(evLocation), 'DESCRIPTION:' + esc(evDesc),
      'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:The wedding is tomorrow!', 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR'
    ];
    return lines.map(icsFold).join('\r\n');
  }
  $('#icsBtn').addEventListener('click', function () {
    var blob = new Blob([buildICS()], { type: 'text/calendar;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = el('a', { href: url, download: 'Pureheart-and-Chukwuemeka-wedding.ics' });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    toast('Calendar file ready');
  });

  /* ---------- RSVP ---------- */
  var form = $('#rsvpForm'), fName = $('#rsvpName'), fPhone = $('#rsvpPhone'), fGuests = $('#rsvpGuests');
  for (var gi = 1; gi <= CONFIG.rsvp.maxGuests; gi++) fGuests.appendChild(el('option', { value: gi, text: gi === 1 ? '1 guest (just me)' : gi + ' guests' }));
  if (guest) fName.value = guest;
  $('#callRsvp').href = 'tel:' + CONFIG.rsvp.tel;
  $('#callRsvp').lastChild.textContent = 'Call to RSVP';

  var attendRadios = $$('input[name=attending]', form);
  function attendVal() { var r = attendRadios.filter(function (x) { return x.checked; })[0]; return r ? r.value : ''; }
  function syncGuests() { $('#guestsField').hidden = attendVal() === 'No'; }
  attendRadios.forEach(function (r) { r.addEventListener('change', function () { syncGuests(); updateWa(); clearErr('Attend'); }); });
  syncGuests();

  function setErr(key, msg) {
    var p = $('#err' + key), f = p.closest('.field');
    p.textContent = msg || ''; if (f) f.classList.toggle('has-error', !!msg);
    var input = { Name: fName, Phone: fPhone }[key]; if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }
  function clearErr(k) { setErr(k, ''); }
  fName.addEventListener('input', function () { clearErr('Name'); updateWa(); });
  fPhone.addEventListener('input', function () { clearErr('Phone'); });
  fGuests.addEventListener('change', updateWa);

  function validPhone(v) { var d = v.replace(/[^\d+]/g, ''); var digits = d.replace(/\D/g, ''); return digits.length >= 10 && digits.length <= 15 && /^\+?\d+$/.test(d); }
  function validate() {
    var ok = true, firstBad = null;
    var name = fName.value.trim();
    if (name.length < 2) { setErr('Name', 'Please enter your full name.'); ok = false; firstBad = firstBad || fName; } else clearErr('Name');
    if (!validPhone(fPhone.value.trim())) { setErr('Phone', 'Please enter a valid phone number (at least 10 digits).'); ok = false; firstBad = firstBad || fPhone; } else clearErr('Phone');
    if (!attendVal()) { setErr('Attend', 'Please let us know if you will be attending.'); ok = false; firstBad = firstBad || attendRadios[0]; } else clearErr('Attend');
    if (firstBad) firstBad.focus();
    return ok;
  }
  var statusEl = $('#rsvpStatus');
  function setStatus(msg, isErr) { statusEl.textContent = msg || ''; statusEl.classList.toggle('is-error', !!isErr); }

  function showSuccess(data) {
    var first = data.name.split(' ').filter(function (w) { return !/^(mr|mrs|miss|ms|dr|pastor|evang|chief|engr|prof)\.?$/i.test(w) && w !== '&'; })[0] || data.name;
    var yes = data.attending === 'Yes';
    $('#successTitle').textContent = yes ? 'Thank you, ' + first + '!' : 'We will miss you, ' + first;
    $('#successText').textContent = yes
      ? 'Your RSVP has been received. We cannot wait to celebrate with you on ' + ev.dateLabel.replace(/^\w+,\s*/, '') + '.'
      : 'Thank you for letting us know. You will be in our hearts and prayers on the day.';
    form.hidden = true;
    var box = $('#rsvpSuccess'); box.hidden = false; box.focus({ preventScroll: true });
    box.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    if (yes && !reduceMotion) setTimeout(function () { var r = $('.check', box).getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 22); }, 500);
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;
    var data = {
      timestamp: new Date().toISOString(),
      name: fName.value.trim(), phone: fPhone.value.trim(), attending: attendVal(),
      guests: attendVal() === 'Yes' ? +fGuests.value : 0,
      message: $('#rsvpMsg').value.trim(), invitedAs: guest
    };
    if (form.elements.company.value) { showSuccess(data); return; }   // honeypot: bots get a fake success
    if (!CONFIG.rsvp.endpoint) {
      setStatus('The online RSVP is not connected yet. Please RSVP on WhatsApp or by phone below.', true);
      return;
    }
    var btn = $('#rsvpSubmit'), label = $('.btn__label', btn);
    btn.disabled = true; label.textContent = 'Sending…'; setStatus('');
    fetch(CONFIG.rsvp.endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data), keepalive: true })
      .then(function () { showSuccess(data); })
      .catch(function () { setStatus('We could not send your RSVP. Please check your connection and try again, or RSVP on WhatsApp below.', true); })
      .then(function () { btn.disabled = false; label.textContent = 'Send RSVP'; });
  });

  /* WhatsApp links */
  function updateWa() {
    var who = fName.value.trim() || guest || '[your name]';
    var msg = 'Hello! This is ' + who + '. I would like to RSVP for Pureheart & Chukwuemeka\'s wedding (' + CONFIG.hashtag + ') on ' + ev.dateLabel + '.';
    var a = attendVal();
    if (a === 'Yes') msg += ' I will be attending with ' + fGuests.value + ' guest' + (+fGuests.value === 1 ? '' : 's') + ' in total.';
    if (a === 'No') msg += ' Sadly, I will not be able to attend.';
    $('#waRsvp').href = 'https://wa.me/' + CONFIG.rsvp.whatsappNumber + '?text=' + enc(msg);
  }
  updateWa();
  var shareUrl = location.origin && location.origin !== 'null' ? location.origin + location.pathname : location.href.split('?')[0];
  $('#shareWa').href = 'https://wa.me/?text=' + enc(CONFIG.share.message + ' ' + shareUrl);

  /* ---------- sparkles ---------- */
  var SPARK = ['#E8D08A', '#F6E7B0', '#C9A24B', '#FFF4BF'];
  function burst(x, y, count) {
    for (var i = 0; i < count; i++) {
      var s = document.createElement('i');
      s.className = 'spark';
      s.style.left = x + 'px'; s.style.top = y + 'px'; s.style.setProperty('--c', SPARK[i % SPARK.length]);
      document.body.appendChild(s);
      var ang = Math.random() * Math.PI * 2, dist = 50 + Math.random() * 100;
      var dx = Math.cos(ang) * dist, dy = Math.sin(ang) * dist;
      var sc = 0.6 + Math.random() * 1.1;
      var a = s.animate([
        { transform: 'translate(-50%,-50%) scale(.2) rotate(0deg)', opacity: 1 },
        { transform: 'translate(calc(-50% + ' + dx + 'px),calc(-50% + ' + (dy + 26) + 'px)) scale(' + sc + ') rotate(' + (Math.random() * 200) + 'deg)', opacity: 0 }
      ], { duration: 750 + Math.random() * 500, delay: Math.random() * 120, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'forwards' });
      a.onfinish = (function (node) { return function () { node.remove(); }; })(s);
    }
  }

  /* ---------- scroll reveals ---------- */
  var revealsOn = false;
  function startReveals() {
    if (revealsOn) return; revealsOn = true;
    var els = $$('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function (x) { x.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (x) { io.observe(x); });
  }

  /* ---------- music ---------- */
  var KEY = 'pc2026:muted';
  var soundBtn = $('#sound');
  var music = { a: null, started: false, muted: false, raf: 0 };
  try { music.muted = localStorage.getItem(KEY) === '1'; } catch (e) {}
  function soundUI() {
    soundBtn.setAttribute('data-muted', String(music.muted));
    soundBtn.setAttribute('aria-label', music.muted ? 'Turn music on' : 'Turn music off');
  }
  soundBtn.removeAttribute('aria-pressed'); soundUI();
  function fadeTo(v, ms, done) {
    var a = music.a; if (!a) return;
    cancelAnimationFrame(music.raf);
    var from = a.volume, t0 = performance.now();
    (function step(now) {
      var k = Math.min(1, (now - t0) / ms);
      try { a.volume = Math.max(0, Math.min(1, from + (v - from) * k)); } catch (e) {}
      if (k < 1) music.raf = requestAnimationFrame(step); else if (done) done();
    })(t0);
  }
  function startMusic() {
    if (music.muted || !CONFIG.music.src) return;
    var a = music.a;
    if (!a) {
      a = music.a = new Audio(CONFIG.music.src);
      a.loop = true; a.preload = 'auto';
      a.addEventListener('error', function () { soundBtn.hidden = true; });
    }
    try { a.volume = 0; } catch (e) {}
    var p = a.play();
    if (p && p.then) p.then(function () { music.started = true; fadeTo(CONFIG.music.volume, 2200); }, function () { /* blocked: the speaker button lets the guest start it */ });
  }
  var opened = false;
  soundBtn.addEventListener('click', function () {
    music.muted = !music.muted;
    try { localStorage.setItem(KEY, music.muted ? '1' : '0'); } catch (e) {}
    soundUI();
    if (music.muted) fadeTo(0, 350, function () { if (music.a) music.a.pause(); });
    else if (opened) startMusic();
  });
  document.addEventListener('visibilitychange', function () {
    if (!music.a) return;
    if (document.hidden) music.a.pause();
    else if (music.started && !music.muted) music.a.play().catch(function () {});
  });

  /* =====================================================================
     ENVELOPE INTRO
     ===================================================================== */
  var intro = $('#intro'), stage = $('#stage'), seal = $('#seal'), sealInner = $('#sealInner');
  var flap = $('#flap'), card = $('#card'), label = $('#label'), hint = $('#hint'), shadow = $('#flapShadow'), ivory = $('#introIvory');
  var page = $('#page');
  var opening = false, finished = false, timers = [], anims = [];
  page.setAttribute('inert', '');

  function later(ms, fn) { timers.push(setTimeout(fn, ms)); }
  function anim(elm, kf, opt) {
    var a = elm.animate(kf, Object.assign({ fill: 'forwards' }, opt));
    anims.push(a); return a;
  }
  function finishIntro() {
    if (finished) return; finished = true;
    timers.forEach(clearTimeout);
    intro.remove();
    document.body.classList.remove('is-locked');
    page.removeAttribute('inert');
    window.scrollTo(0, 0);
    document.documentElement.classList.add('page-ready');
    startReveals();
    $('#main').focus({ preventScroll: true });
  }
  function fadeOutIntro(ms) {
    anims.forEach(function (a) { try { a.cancel(); } catch (e) {} });
    var a = intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: ms, easing: 'ease', fill: 'forwards' });
    a.onfinish = finishIntro; later(ms + 200, finishIntro);
  }

  function crackSeal() {
    $('.seal__whole', sealInner).style.opacity = '0';
    $('#halfL').style.opacity = '1'; $('#halfR').style.opacity = '1';
    anim($('#halfL'), [{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: 'translate(-26px,20px) rotate(-18deg)', opacity: 0 }], { duration: 850, easing: 'cubic-bezier(.3,.6,.4,1)' });
    anim($('#halfR'), [{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: 'translate(26px,28px) rotate(16deg)', opacity: 0 }], { duration: 850, easing: 'cubic-bezier(.3,.6,.4,1)' });
  }

  function flyCard(shiftPx) {
    var vh = window.innerHeight;
    var r = card.getBoundingClientRect(), ir = intro.getBoundingClientRect();
    card.style.cssText = 'position:fixed;left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height + 'px;margin:0;transform:none;transform-origin:0 0;z-index:20;box-shadow:0 20px 60px rgba(0,0,0,.45)';
    intro.appendChild(card);
    var s = Math.min(ir.width * 0.94 / r.width, vh * 0.8 / r.height), w = r.width * s;
    var tx = ir.left + (ir.width - w) / 2 - r.left, ty = (vh - r.height * s) / 2 - r.top;
    anim(card, [{ transform: 'translate(0,0) scale(1)' }, { transform: 'translate(' + tx + 'px,' + ty + 'px) scale(' + s + ')' }], { duration: 1250, easing: 'cubic-bezier(.3,.7,.2,1)' });
    anim(stage, [{ transform: 'translateY(' + shiftPx + 'px)', opacity: 1 }, { transform: 'translateY(' + (vh * 1.25) + 'px)', opacity: 0.2 }], { duration: 1150, easing: 'cubic-bezier(.55,0,.8,.35)' });
    anim(ivory, [{ opacity: 0 }, { opacity: 1 }], { duration: 1100, delay: 150, easing: 'ease' });
  }

  function openInvitation() {
    if (opening || finished) return;
    opening = true; opened = true;
    startMusic();                                   // inside the user's tap, so browsers allow audio
    intro.classList.add('is-opening');
    $('#skip').hidden = true;
    if (reduceMotion) { $('.seal__whole', sealInner).style.opacity = '0.0'; fadeOutIntro(600); return; }

    var vh = window.innerHeight, shift = vh * 0.22;
    var r = seal.getBoundingClientRect();
    // a) seal presses in, cracks and fades, sparkles
    anim(sealInner, [{ transform: 'scale(1)' }, { transform: 'scale(.86)' }], { duration: 190, easing: 'ease-out' });
    anim(hint, [{ opacity: 1 }, { opacity: 0 }], { duration: 250 });
    anim(label, [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(12px)' }], { duration: 550 });
    later(180, function () { crackSeal(); burst(r.left + r.width / 2, r.top + r.height / 2, 20); });
    later(280, function () { anim(shadow, [{ opacity: .55 }, { opacity: 0 }], { duration: 600 }); });
    // b) flap opens in 3D, lining revealed; the envelope eases down to make room
    later(380, function () {
      anim(stage, [{ transform: 'translateY(0)' }, { transform: 'translateY(' + shift + 'px)' }], { duration: 1250, easing: 'cubic-bezier(.45,0,.2,1)' });
      anim(flap, [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-180deg)' }], { duration: 1250, easing: 'cubic-bezier(.5,.02,.25,1)' });
    });
    later(380 + 600, function () { flap.style.zIndex = '2'; });          // flap passes 90°: tuck it behind the card
    // c) card slides up out of the envelope
    later(1400, function () {
      var h = card.offsetHeight;
      anim(card, [{ transform: 'translateX(-50%) translateY(0)' }, { transform: 'translateX(-50%) translateY(' + (-h * 0.6) + 'px)' }], { duration: 1000, easing: 'cubic-bezier(.25,.8,.3,1)' });
    });
    // d) card scales to fill the screen, envelope drops away, then it cross-fades into the page
    later(2350, function () { flyCard(shift); });
    later(3300, function () { fadeOutIntro(600); });
  }
  seal.addEventListener('click', openInvitation);
  $('#skip').addEventListener('click', function () {
    if (finished) return;
    opened = true; startMusic();
    timers.forEach(clearTimeout);
    opening = true; $('#skip').hidden = true;
    fadeOutIntro(350);
  });

  /* ---------- fonts + preload behind the envelope ---------- */
  function fontsReady() {
    var link = $('link[href*="fonts.googleapis.com"]');
    var css = new Promise(function (res) {
      if (!link || link.media !== 'print') return res();
      link.addEventListener('load', function () { setTimeout(res, 0); });
      link.addEventListener('error', res);
      setTimeout(res, 2200);
    });
    return css.then(function () {
      if (!(document.fonts && document.fonts.load)) return;
      return Promise.race([
        Promise.all([
          document.fonts.load('600 20px Cinzel'), document.fonts.load('700 20px Cinzel'),
          document.fonts.load('400 40px "Great Vibes"'), document.fonts.load('500 14px Montserrat'),
          document.fonts.load('500 20px "Cormorant Garamond"'), document.fonts.load('italic 500 20px "Cormorant Garamond"')
        ]),
        new Promise(function (r) { setTimeout(r, 2000); })
      ]);
    }).catch(function () {});
  }
  fontsReady().then(function () { document.documentElement.classList.add('fonts-ready'); });
  setTimeout(function () { document.documentElement.classList.add('fonts-ready'); }, 4500);

  window.addEventListener('load', function () {
    var idle = window.requestIdleCallback || function (f) { return setTimeout(f, 600); };
    idle(function () {
      // warm the cache while the guest is looking at the envelope (thumbnails are lazy-loaded later)
      ['assets/hero.webp', 'assets/envelope-card.webp'].forEach(function (u) { var i = new Image(); i.src = u; });
    });
  });

  /* dev shortcut: add ?nointro to the URL to jump straight to the page */
  if (params.has('nointro')) { opened = true; fadeOutIntro(1); }
})();
