exports.LoginPage= 
class LoginPage{

    constructor(page){
        this.page = page;
        this .loginclick="//a[normalize-space()='Log in']"
        this. email="#Email"
        this.password="#Password"
        this.loginsubmit="//input[@value='Log in']"

    }

    async gotoLoginPage(){
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async login(email, password){
        await this.page.locator(this.loginclick).click();
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginsubmit).click();
    }

}