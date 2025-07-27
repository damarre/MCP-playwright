import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/authentication/LoginPage';
import { DashboardPage } from '../pages/dashboard/DashboardPage';

// Declare the types of our fixtures
type Pages = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
};

// Extend base test with our fixtures
export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
});
