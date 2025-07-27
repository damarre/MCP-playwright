import { Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class LoginPage extends BasePage {
    // Page elements
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signInButton: Locator;
    private readonly loginHeading: Locator;

    constructor(page) {
        super(page);
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.loginHeading = page.getByText('Sign in Hubble');
    }

    /**
     * Navigate to login page
     */
    async goto() {
        await this.navigate('/login');
    }

    /**
     * Perform login with given credentials
     */
    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    /**
     * Verify successful login
     */
    async verifySuccessfulLogin() {
        await expect(this.page).toHaveURL('https://platform.hubble.build/');
        await expect(this.page.getByText('Project Directory')).toBeVisible();
    }

    /**
     * Verify failed login
     */
    async verifyFailedLogin() {
        await expect(this.page).toHaveURL('https://platform.hubble.build/login');
        await expect(this.loginHeading).toBeVisible();
    }
}
