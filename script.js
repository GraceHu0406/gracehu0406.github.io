const i18n = {
  zh: {
    'nav.home': '首页',
    'nav.poetry': '诗歌',
    'nav.fiction': '小说',
    'nav.photo': '摄影',
    'nav.project': '万物生',
    'nav.about': '关于',
    'nav.contact': '联系',
    'logo': 'Grace Q. Hu',
    'hero.role': 'Writer · Poet · Environmental Storyteller',
    'hero.name': 'Grace Q. Hu',
    'hero.cn': '胡青青',
    'hero.intro': '写自然，也写身体、时间、离开与归途。<br>在加拿大，以诗歌、小说与影像记录人与活着的世界。',
    'hero.btn1': '阅读诗歌',
    'hero.btn2': '关于作者',
    'featured': '精选作品',
    'project.label': '重点项目',
    'project.title': '万物生 / All Things Alive',
    'project.desc': '一部关于自然、生命与存在的长期创作计划。以诗歌、影像与文字，记录加拿大土地上的万物生长与消逝。',
    'project.btn': '进入项目',
    'footer': '© 2026 Grace Q. Hu · 稼禾三笙',
    'lang': 'EN'
  },
  en: {
    'nav.home': 'Home',
    'nav.poetry': 'Poetry',
    'nav.fiction': 'Fiction',
    'nav.photo': 'Photography',
    'nav.project': 'All Things Alive',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'logo': 'Grace Q. Hu',
    'hero.role': 'Writer · Poet · Environmental Storyteller',
    'hero.name': 'Grace Q. Hu',
    'hero.cn': '胡青青',
    'hero.intro': 'I write about nature, the body, time, departure and return.<br>Based in Canada, I record the living world through poetry, fiction and image.',
    'hero.btn1': 'Read Poetry',
    'hero.btn2': 'About the Author',
    'featured': 'Selected Works',
    'project.label': 'Featured Project',
    'project.title': '万物生 / All Things Alive',
    'project.desc': 'A long-term project on nature, life and existence. Through poetry, image and prose, it records the growth and fading of all things on Canadian land.',
    'project.btn': 'Enter Project',
    'footer': '© 2026 Grace Q. Hu · Jiahe Sansheng',
    'lang': '中文'
  }
};

let lang = localStorage.getItem('site-lang') || 'zh';

function applyLang(l) {
  lang = l;
  localStorage.setItem('site-lang', l);
  document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[l][key]) el.innerHTML = i18n[l][key];
  });
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = i18n[l]['lang'];
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(lang);

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => applyLang(lang === 'zh' ? 'en' : 'zh'));
  }

  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  if (lb && lbImg) {
    document.querySelectorAll('.gallery-item img').forEach(img => {
      img.addEventListener('click', () => {
        lbImg.src = img.src;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
    const close = () => { lb.classList.remove('active'); document.body.style.overflow = ''; };
    document.querySelector('.lightbox-close')?.addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }
});
