import { expect } from "playwright/test";
export class product
{
    constructor(page)
    {
        this.page=page;
        this.sauselabspack=page.locator('#add-to-cart-sauce-labs-backpack');
        this.sauselabstshirt=page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    }
    async selectproduct()
    {
        await this.sauselabspack.click();
        await this.sauselabstshirt.click();
    }
    async gotocart()
    {
        await this.page.locator('.shopping_cart_link').click();
    }
    async opencart()
    {
        await this.page.locator('#checkout').click();
    }

}
