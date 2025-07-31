exports.AddToCart=
class AddToCart {

    constructor(page){
        this.page = page;
        this.tile="//div[@class='details']/h2/a"
        this.addtocardbtn='#add-to-cart-button-31'
        this.clickcartbtn="//span[normalize-space()='Shopping cart']"
    }

async AddProductToCart(productName){

 const productlist=await this.page.$$(this.tile);
 for(const product of productlist){
    if(productName== await product.textContent()){
        await product.click();
        break;
    }
}
await this.page.locator(this.addtocardbtn).click();
 await this.page.waitForTimeout(3000);
 
}

async clickCartButton(){
    await this.page.locator(this.clickcartbtn).click();
    await this.page.waitForTimeout(3000);


}
}
