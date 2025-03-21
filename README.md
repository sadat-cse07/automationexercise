📌 Overview
This repository contains Cypress automation tests that run on multiple browsers (Chrome & Firefox) with group testing, parallel execution, and detailed reporting using GitHub Actions.

🚀 Features
✅ Cypress E2E Testing
✅ Multi-Browser Support (Chrome & Firefox)
✅ Group Testing (Smoke, Sanity, Regression)
✅ Parallel Test Execution
✅ Mochawesome Report Generation
✅ CI/CD Integration with GitHub Actions
✅ Screenshots for Failed Tests

📂 Project Structure
bash
Copy
Edit
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
🔧 Setup & Installation
1️⃣ Clone the Repository

git clone https://github.com/sadat-cse07/automationexercise.git
cd assesment-automation
2️⃣ Install Dependencies

npm install
3️⃣ Run Tests Locally
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
