# 🚀 Cypress Multi-Browser Automation

## 📌 Overview
This repository contains **Cypress automation tests** that run on **multiple browsers (Chrome & Firefox)** with **group testing, parallel execution, and detailed reporting** using **GitHub Actions**.

## 🚀 Features
✅ Cypress E2E Testing  
✅ Multi-Browser Support (Chrome & Firefox)  
✅ Group Testing (Smoke, Sanity, Regression)  
✅ Parallel Test Execution  
✅ Mochawesome Report Generation  
✅ CI/CD Integration with GitHub Actions  
✅ Screenshots for Failed Tests  

---

## 📂 Project Structure
```
📦 assesment-automation
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e              # Test cases
 ┃ ┣ 📂 pages            # Page Object Model files
 ┃ ┣ 📂 reports          # Test reports (Mochawesome)
 ┃ ┣ 📂 screenshots      # Screenshots for failed tests
 ┣ 📜 cypress.config.js  # Cypress configuration
 ┣ 📜 package.json       # Dependencies
 ┣ 📜 mochawesome.json   # Mochawesome report config
 ┣ 📜 README.md          # Project documentation
```

---

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/sadat-cse07/automationexercise.git
cd assesment-automation
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
    "test:parallelsr": "npm-run-all --parallel test:smoke test:regression",
    "test:search": "cypress run --spec 'cypress/e2e/TestCase1/tests/productSearch.cy.js' --headless",
    "test:cart": "cypress run --spec 'cypress/e2e/TestCase2/tests/cartTest.cy.js' --headless",
    "test:parallel-search-cart": "npm-run-all --parallel test:search test:cart",
    "test:chrome": "cypress run --browser chrome --headless",
    "test:firefox": "cypress run --browser firefox --headless",
    "test:edge": "cypress run --browser edge --headless",
    "test:parallel": "npm-run-all --parallel test:chrome test:firefox test:edge",
    "cypress:merge": "mochawesome-merge --reportDir cypress/reports/mocha > cypress/reports/mocha/report.json",
    "cypress:report": "marge cypress/reports/mocha/report.json -f report -o cypress/reports/mocha",
    "cypress:report:open": "open cypress/reports/mocha/report.html",
    "cypress:ci": "npm run cypress:run && npm run cypress:merge && npm run cypress:report"
  }
```

### 4️⃣ Running Tests in Different Modes
#### Run Smoke Tests
```sh
npm run test:smoke
```
#### Run Regression Tests
```sh
npm run test:regression
```
#### Run Tests in Parallel (Smoke + Regression)
```sh
npm run test:parallelsr
```
#### Run Product Search Test
```sh
npm run test:search
```
#### Run Cart Test
```sh
npm run test:cart
```
#### Run Parallel Search & Cart Tests
```sh
npm run test:parallel-search-cart
```
#### Run Tests on Chrome
```sh
npm run test:chrome
```
#### Run Tests on Firefox
```sh
npm run test:firefox
```
#### Run Tests on Edge
```sh
npm run test:edge
```
#### Run Tests on All Browsers in Parallel
```sh
npm run test:parallel
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

### 📌 GitHub Actions Workflow
```yaml
name: Cypress Multi-Browser Test
on: push

jobs:
  cypress-run:
    runs-on: ubuntu-24.04
    strategy:
      matrix:
        browser: [chrome, firefox]
        group: [smoke, regression]
        shard: [1, 2]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests on ${{ matrix.browser }} for ${{ matrix.group }} group
        uses: cypress-io/github-action@v6
        with:
          browser: ${{ matrix.browser }}
          headless: true
          env: group=${{ matrix.group }}
          shard: ${{ matrix.shard }}


