# Hubble Platform Tests

Automated tests for the Hubble platform using Playwright.

## Project Structure

```
├── pages/                  # Page Object Models
│   ├── BasePage.ts
│   ├── authentication/
│   │   └── LoginPage.ts
│   └── dashboard/
│       └── DashboardPage.ts
├── tests/                  # Test files
│   ├── fixtures.ts
│   └── authentication.spec.ts
├── playwright.config.ts    # Playwright configuration
└── package.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install chromium
```

## Running Tests

Run tests in headed mode:
```bash
npm test
```

Run tests in headless mode:
```bash
npm test -- --headed false
```

## Continuous Integration

Tests are automatically run in GitHub Actions:
- On every push to any branch
- Manually via workflow dispatch in GitHub Actions tab

### CI Pipeline Features:
- Runs on Ubuntu latest
- Uses Node.js 18
- Caches npm dependencies for faster runs
- Uploads test reports as artifacts
- Report retention for 30 days

### View Test Reports
1. Go to the Actions tab in GitHub
2. Click on the workflow run
3. Download the playwright-report artifact
4. Open `index.html` in your browser
