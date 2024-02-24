class Product{
    constructor(tittle,imgeUrl,prize,about){
        this.tittle=tittle;
        this.imgeUrl=imgeUrl;
        this.prize=prize;
        this.about=about;
    }

}
class Shoping{
  item=[];
  Output;
  addMethod(product){
    this.item.push(product);
    this.Output.innerHTML = `<h2>Total: \$${this.item.length}</h2>`;
  }
  render(){
    const shopcart=document.createElement("section");
    shopcart.innerHTML=`
    <h2>Total:\$${0}</h2>
    <button>"Order Now!</button>
    `;
    shopcart.className='cart';
    return shopcart;
  }
}
class ProductItem{
    constructor(Product){
        this.Product=Product;
       
    }
    addCart(){
        console.log(this.Product);
         }
         render(){
            const prodEl=document.createElement("li");
            prodEl.className="product-item";
            prodEl.innerHTML=`
            <div>
            <img src="${this.Product.imgeUrl}" alt="${this.Product.tittle}">
            <div class="product-item-content">
            <h3>${this.Product.tittle}</h3>
            <h2>$${this.Product.prize}</h2>
            <p>${this.Product.about}</p>
            <button>Add to cart</button>
            </div>
            </div>
            `;
            const addToCart=prodEl.querySelector("button");
            addToCart.addEventListener('click',()=>this.addCart());
            return prodEl;
        }
}
class ProductList{
    
    products=[
        new Product("Black Rose","img/Black Rose.jpg",12,"The dark color may evoke a sense of mystery and the unknown"),
        new Product("Lily","img/Lily.jpg",25,"White lilies are often associated with purity, virtue, and innocence."),
        new Product("Rose","img/Rose.jpg",19,"Red roses are the ultimate symbol of love and passion. They are often associated with romantic love and deep emotions")
    ];
    render(){
   
    const productElementList=document.createElement("ul");
    productElementList.className="product-list";
       for(let prod of this.products){
         let productItem=new ProductItem(prod);
         const prodEl=productItem.render();
         productElementList.append(prodEl);
       }
          return productElementList;
    }
}
class Shop{
    render(){
        const renderHook=document.getElementById("app");
        const cart=new Shoping();
        const careEl=cart.render();
    const productElementLists=new ProductList();
      const productEl=productElementLists.render();
      renderHook.append(careEl);
      renderHook.append(productEl);
    }
}
class App{
    static intit(){
    let shops=new Shop();
    shops.render();
    }
}
App.intit();


