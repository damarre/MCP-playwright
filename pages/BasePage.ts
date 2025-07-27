import { Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(path: string) {
        try {
            await this.page.goto(path, {
                waitUntil: 'networkidle',
                timeout: 90000
            });
            // Wait for any dynamic content to load
            await this.page.waitForLoadState('domcontentloaded');
        } catch (error) {
            console.error(`Navigation failed to ${path}: ${error.message}`);
            throw error;
        }
    }
}
