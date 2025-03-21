# 🚀 Assessment Test

## 📌 Overview
This repository contains **Automation tests** that run on **multiple browsers (Chrome & Firefox)** with **group testing, parallel execution, and detailed reporting** using **GitHub Actions**.

🛠️ Technology Used
    {
  "devDependencies": {
    "@faker-js/faker": "^9.6.0",
    "cypress": "^14.2.0",
    "cypress-mochawesome-reporter": "^3.8.2",
    "mochawesome": "^7.1.3",
    "mochawesome-merge": "^5.0.0",
    "mochawesome-report-generator": "^6.2.0",
    "npm-run-all": "^4.1.5"
  }
}


## 🚀 Features
✅ Assessment Test E2E Testing  
✅ Multi-Browser Support (Chrome & Firefox)  
✅ Group Testing (Smoke, Regression)  
✅ Parallel Test Execution  
✅ Mochawesome Report Generation  
✅ CI/CD Integration with GitHub Actions  
✅ Screenshots for Failed Tests  

---

## 📂 Project Structure
```
📆 assessment-automation
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e              # Test cases
 ┃   ┣ 📂 TestCase1
         📂 pages
         📂 tests           # Page Object Model files
      ┣ 📂 TestCase2
         📂 pages
         📂 tests
 ┃ ┣ 📂 reports          # Test reports (Mochawesome)
 ┃ ┣ 📂 screenshots      # Screenshots for failed tests
 ┣ 📄 cypress.config.js  # Cypress configuration
 ┣ 📄 package.json       # Dependencies
 ┣ 📄 mochawesome.json   # Mochawesome report config
 ┣ 📄 README.md          # Project documentation
```

---

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/sadat-cse07/automationexercise.git
cd assessment-automation
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run Tests Locally
```json
"scripts": {
    "cypress:run": "cypress run",
    "cypress:open": "cypress open",
    "test:smoke": "cypress run --env grep='smoke' --headless",
    "test:regression": "cypress run --env grep='regression' --headless",
    "test:parallel": "npm-run-all --parallel test:smoke test:regression",
    "test:chrome": "cypress run --browser chrome --headless",
    "test:firefox": "cypress run --browser firefox --headless",
    "cypress:merge": "mochawesome-merge --reportDir cypress/reports/mocha > cypress/reports/mocha/report.json",
    "cypress:report": "marge cypress/reports/mocha/report.json -f report -o cypress/reports/mocha",
    "cypress:ci": "npm run cypress:run && npm run cypress:merge && npm run cypress:report"
  }
```

---

## 📊 Test Reporting
This project uses **Mochawesome** for detailed test reports.

### 📌 Generate Report Locally
```sh
npm run cypress:merge && npm run cypress:report
```

### 📌 View Reports
1️⃣ Navigate to the **reports** folder:  
📂 `cypress/reports`  

2️⃣ Open the **Mochawesome HTML Report** in a browser.
```sh
npm run cypress:report:open
```

---

## 🤖 GitHub Actions CI/CD
This project is integrated with **GitHub Actions** to run Cypress tests on multiple browsers with parallel execution.

### 📌 GitHub Actions Workflow - Multi-Browser Testing
```yaml
name: Multiple Browser Test
on: push

jobs:
  cypress-run:
    runs-on: ubuntu-24.04
    strategy:
      matrix:
        browser: [chrome, firefox] # Run tests on both Chrome and Firefox

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests on ${{ matrix.browser }}
        uses: cypress-io/github-action@v6
        with:
          browser: ${{ matrix.browser }}
        env:
          CYPRESS_BROWSER: ${{ matrix.browser }}
          CYPRESS_HEADLESS: 1 # Enable headless mode

      - name: Test Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: Mochawesome HTML Report
          path: cypress/reports
```

### 📌 GitHub Actions Workflow - Parallel Execution
```yaml
name: Parallel Test
on: push
jobs:
  test-search:
    runs-on: ubuntu-24.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Search Test
        uses: cypress-io/github-action@v6
        with:
          command: npm run test:search
      - name: Test Report - Search Page
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: Mochawesome HTML Report - Search Page
          path: cypress/reports

  test-cart:
    runs-on: ubuntu-24.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Cart Test
        uses: cypress-io/github-action@v6
        with:
          command: npm run test:cart
      - name: Test Report - Cart Page
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: Mochawesome HTML Report - Cart Page
          path: cypress/reports
```

### 📌 GitHub Actions Workflow - Smoke & Regression Tests
```yaml
name: Smoke Test
on: push
jobs:
  test-smoke:
    runs-on: ubuntu-24.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Smoke Test
        uses: cypress-io/github-action@v6
        with:
          command: npm run test:smoke
      - name: Test Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: Mochawesome HTML Report
          path: cypress/reports
```

```yaml
name: Regression Test
on: push
jobs:
  test-regression:
    runs-on: ubuntu-24.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Regression Test
        uses: cypress-io/github-action@v6
        with:
          command: npm run test:regression
      - name: Test Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: Mochawesome HTML Report
          path: cypress/reports
```


