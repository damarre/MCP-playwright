import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Hubble Platform Login', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('successful login with valid credentials', async () => {
        await loginPage.login(
            'qa+prodregcompany2@hubble.build',
            'CAC@ady.kak3bfd8zcz'
        );
        await loginPage.expectSuccessfulLogin();
    });

    test('failed login with invalid credentials', async () => {
        await loginPage.login('invalid@email.com', 'wrongpassword');
        await loginPage.expectErrorMessage();
    });
});
