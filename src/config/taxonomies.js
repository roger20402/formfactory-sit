// The single source of truth for Discipline, Category, and Media Tab options.
// Add new entries here and they'll flow through the whole site automatically.

export const disciplines = [
  { id: "vfx",          zh: "視覺特效",  en: "VFX" },
  { id: "3d-animation", zh: "3D 動畫",   en: "3D Animation" },
  { id: "compositing",  zh: "合成",      en: "Compositing" },
  { id: "di",           zh: "DI 後期",   en: "Digital Intermediate" },
  { id: "2d-animation", zh: "2D 動畫",   en: "2D Animation" },
];

export const categories = [
  { id: "music-video",       zh: "MV",        en: "Music Video" },
  { id: "product-animation", zh: "產品動畫",  en: "Product Animation" },
  { id: "launch-event",      zh: "發表會",    en: "Launch Event" },
  { id: "commercial",        zh: "廣告",      en: "Commercial" },
  { id: "branding",          zh: "品牌設計",  en: "Branding" },
];

// Media tabs shown inside the project modal — first item is the default tab
export const mediaTabs = [
  { id: "stills",     zh: "作品畫面",  en: "Stills" },
  { id: "showreel",   zh: "作品片段",  en: "Showreel" },
  { id: "finalWork",  zh: "完整作品",  en: "Final" },
  { id: "rnd",        zh: "R&D",      en: "R&D" },
];