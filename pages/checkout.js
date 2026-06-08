import { expect } from "playwright/test";

export class checkout
{
    constructor(page)
    {
        this.page=page;
        this.firstname=page.locator('#first-name');
        this.lastname=page.locator('#last-name');
        this.postalcode=page.locator('#postal-code');
        this.continuebutton=page.locator('#continue');
    }
    async checkoutmethod(firstname,lastname,postalcode)
    {
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.postalcode.fill(postalcode);
        await this.continuebutton.click();
    }
    async placeorder()
    {
        await this.page.locator('#finish').click();
    }
}

