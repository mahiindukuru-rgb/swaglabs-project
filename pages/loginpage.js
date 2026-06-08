import {expect} from '@playwright/test';
export class loginpage
{
constructor (page)
{
this.page=page
this.username=page.locator('#user-name')
this.password=page.locator('#password')
this.loginbutton=page.locator('#login-button')
}
async goto()
{
 await  this.page.goto('https://www.saucedemo.com/')
}
async loginmethod(username,password)

{
   await this.username.fill(username)
   await this.password.fill(password)
   await this.loginbutton.click()
}
}