import { test, expect } from '@playwright/test';

//import{LoginPage} from '../pageobjects/LoginPage';  
//import{LoginPage} from  'tests\\pages\\Login.js';

import { LoginPage } from './pages/Login';
import { AddToCart } from './pages/Addtocard';


// login page object model pattern
test("Page Object Model Pattern",  async({page})=>{
    console.log("Page Object Model Pattern is running");
   const login= new LoginPage(page);
   await login.gotoLoginPage();
   await login.login('ovy@gmail.com','test@123');


   // Add to Cart item 

   const productcart=new AddToCart(page);

   await productcart.AddProductToCart('14.1-inch Laptop')
   await page.waitForTimeout(3000);
   await productcart.clickCartButton();
  // await productcart.verifyProductInCart('14.1-inch Laptop');



})