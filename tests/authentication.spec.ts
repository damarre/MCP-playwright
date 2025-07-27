import { test } from './fixtures';
import { expect } from '@playwright/test';

test.describe('Authentication', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
    });

    test('should login successfully with valid credentials', async ({ loginPage, dashboardPage }) => {
        // Login with valid credentials
        await loginPage.login(
            'qa+prodregcompany2@hubble.build',
            'CAC@ady.kak3bfd8zcz'
        );

        // Verify successful login
        await loginPage.verifySuccessfulLogin();
        
        // Additional dashboard verification
        await dashboardPage.verifyDashboardLoaded();
        expect(await dashboardPage.getTotalProjects()).toBeDefined();
    });

    test('should show error with invalid credentials', async ({ loginPage }) => {
        // Try to login with invalid credentials
        await loginPage.login('invalid@email.com', 'wrongpassword');

        // Verify failed login
        await loginPage.verifyFailedLogin();
    });
});
