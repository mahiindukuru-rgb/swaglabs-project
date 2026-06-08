import { test, expect } from '@playwright/test';
import { loginpage } from '../pages/loginpage';
import { product } from '../pages/selectproduct';
import { checkout } from '../pages/checkout';
import { logout } from '../pages/logout';
import { cart } from '../pages/cart';

test('Verify that the user can add  product and place an order', async ({ page }) => {
    page.on('dialog', async dialog => { await dialog.dismiss(); });


    const login = new loginpage(page);
    const productselect = new product(page);
    const checkoutpage = new checkout(page);
    const logoutpage = new logout(page);
    const cartpage = new cart(page);


    
    await login.goto();
    await login.loginmethod('standard_user', 'secret_sauce');
    await productselect.selectproduct();
    await productselect.gotocart();
    await productselect.opencart();
    await checkoutpage.checkoutmethod('mahi', 'kosi', '560037');
    await checkoutpage.placeorder();
    await logoutpage.logoutmethod();
});