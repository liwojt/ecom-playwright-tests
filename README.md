# E-Commerce Test Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-1.52.0-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-darkgreen.svg)

## 🎯 Project Overview

A practical end-to-end test automation project for an e-commerce website: https://awesomeqa.com/ui using Playwright and TypeScript. This project was created to practice real-world test automation skills, including page object modeling, cross-browser testing, and CI integration with GitHub Actions. 

## 🚀 Key Features

- **Page Object Pattern**: Maintainable and reusable test components
- **Cross-browser Testing**: Chrome, Firefox, and Webkit support
- **CI/CD Pipeline**: Automated test execution via GitHub Actions
- **Reporting**: Detailed HTML test reports
- **Type Safety**: Full TypeScript implementation
- **Code Quality**: ESLint and Prettier integration
- **Environment Management**: Configurable test environments

## 🛠️ Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- ESLint
- Prettier
- dotenv

## 🏗️ Architecture

```
ecom-playwright-tests/
├── src/
│   ├── pages/        # Page Object Models
│   │   ├── base.page.ts
|   |   ├── home.page.ts
│   │   └── ..
│   └── utils/        # Helper Functions
├── tests/         # Test Suites
├── .github/
│   └── workflows/    # CI/CD Configuration
└── playwright.config.ts
```




## 📋 Prerequisites

- Node.js 18 or higher
- npm (Node Package Manager)
- Git

## 🚦 Getting Started

1. **Clone and Install**:

   ```bash
   git clone <repository-url>
   cd ecom-playwright-tests
   npm install
   npx playwright install
   ```

2. **Configure Environment**:

   ```bash
   cp .example.env .env
   ```

3. **Run Tests**:

   ```bash
   npm run test        # Run all tests
   npm run test:ui     # Run with UI mode
   npm run test:debug  # Run with debug mode
   npm run report      # View test report
   ```

## 📊 Test Reports

- **Local Report**: Generated in `playwright-report/`
- **CI Reports**: Available as GitHub Actions artifacts
- **View Report**: Use the command to open the HTML report locally:

  ```bash
  npm run report
  ```




