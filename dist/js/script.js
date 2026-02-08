import { settings, select } from './settings.js';
import Product from './components/Product.js';
import TabManager from './components/TabManager.js';

const app = {
  initData: function() {
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};

    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        for (const item in thisApp.data.products){
          new Product(thisApp.data.products[item]);
        }
      });
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
    Handlebars.registerHelper('isOdd', index => index % 2);
    thisApp.initPages();
  },
  initPages: function(){
    const thisApp = this;
    thisApp.tabManager = new TabManager(document.querySelectorAll(select.nav.links));
  },
};

app.init();