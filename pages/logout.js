import { expect } from "playwright/test";
export class logout
{
    constructor(page)
    {
        this.page=page;
        this.menu=page.locator('#react-burger-menu-btn');
        this.logout=page.locator('#logout_sidebar_link');
    }
async logoutmethod()
{
    await this.menu.click();
    await this.logout.click();
}
}
