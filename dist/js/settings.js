export const select = {
  templateOf: {
    products: '#template-product',
  },
  containerOf: {
    products: '.products__list',
  },
  nav: {
    links: '.header__menu a',
    tabs: ['#home', '#products', '#about_us', '#contact'],
    products: '#products',
    contact: '#contact',
    home: '#home',
  },
};

export const classNames = {
  page: {
    active: 'active',
  },
  nav: {
    active: 'active',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};