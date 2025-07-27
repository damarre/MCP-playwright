import { Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class DashboardPage extends BasePage {
    // Page elements
    private readonly projectDirectoryHeading: Locator;
    private readonly projectsTab: Locator;
    private readonly totalProjects: Locator;

    constructor(page) {
        super(page);
        this.projectDirectoryHeading = page.getByText('Project Directory');
        this.projectsTab = page.getByText('Projects').first();
        this.totalProjects = page.locator('text="Total Projects"');
    }

    /**
     * Verify dashboard is loaded
     */
    async verifyDashboardLoaded() {
        await expect(this.projectDirectoryHeading).toBeVisible();
        await expect(this.projectsTab).toBeVisible();
    }

    /**
     * Get total number of projects
     */
    async getTotalProjects(): Promise<string> {
        return await this.totalProjects.textContent() || '0';
    }
}
