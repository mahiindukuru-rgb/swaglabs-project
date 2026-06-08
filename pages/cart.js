import { expect } from "playwright/test";
export class cart
{
    constructor(page)
    {
        this.page=page;
        this.cartitem=page.locator('.shopping_cart_link');
    }
    async gotocart()
    {
        await this.cartitem.click();
    }   
}