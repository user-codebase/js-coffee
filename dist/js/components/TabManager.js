import { select, classNames } from '../settings.js';

class TabManager {
  constructor(navLinks){
    const thisTabManager = this;
    thisTabManager.navLinks = navLinks;
    thisTabManager.idFromHash = window.location.hash.replace('#/', '');
    thisTabManager.getTabs();
    thisTabManager.addEventListenerToTabs();
    thisTabManager.initHomePage();
  }

  getTabs(){
    const thisTabManager = this;
    thisTabManager.sectionTabs = [];
    for (const tab of select.nav.tabs){
      const domTab = document.querySelector(tab);
      if (domTab){
        thisTabManager.sectionTabs.push(domTab);
      }
    }
  }

  initHomePage(){
    const thisTabManager = this;
    thisTabManager.activatePage('home');
  }

  activatePage(pageId) {
    const thisTabManager = this;

    for (const page of thisTabManager.sectionTabs) {
      if (pageId === 'home') {
        page.classList.toggle(classNames.page.active, page.id != 'contact');
      } else {
        page.classList.toggle(classNames.page.active, page.id == pageId);
      }
    }
  }
  
  addEventListenerToTabs(){
    const thisTabManager = this;
    for (const link of thisTabManager.navLinks){ 
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisTabManager.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  }
}

export default TabManager;