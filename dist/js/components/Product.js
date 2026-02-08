import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class Product{
  constructor(data){
    const thisProduct = this;
    thisProduct.data = data;
    thisProduct.render();
  }

  render(){
    const thisProduct = this;
    const generatedHTML = templates.products(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const productContainer = document.querySelector(select.containerOf.products);
    productContainer.appendChild(thisProduct.element);
  }
}


export default Product;