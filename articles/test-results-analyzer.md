---
title: Setting Up Jenkins Test Results Analyzer with Playwright
date: "May 28, 2024"
description: The Jenkins Test Results Analyzer is a plugin that provides a detailed view of test execution results across multiple builds.
---

The Jenkins Test Results Analyzer is a plugin that provides a detailed view of test execution results across multiple builds. My motivation for researching a tool to analyze results over several builds was to find and identify flaky tests — those tests that intermittently pass or fail. While there are various reports available, such as Playwright built-in reports, Allure, and Surefire, which offer detailed overviews of test results, they lack a mechanism to quickly identify flaky tests across multiple builds.

The Test Results Analyzer displays results in a tabular format, allowing users to drill down into individual test cases, track trends over time, and identify flaky tests effectively.

## Benefits of Using Test Results Analyzer

- **Historical Trends:** Track test results across multiple builds to identify patterns and trends.
- **Flaky Test Detection:** Easily spot tests that fail intermittently, helping to improve test reliability.
- **Detailed Drill-Down:** Drill down into test results to see individual test case outcomes.
- **Improved Debugging:** Quickly identify and diagnose test failures with enhanced visualization.

## Configuration

Assuming Jenkins is already configured and you have set up a pipeline or freestyle project for execution, configuring the Test Results Analyzer is straightforward. If not, there are numerous articles available that can guide you through the initial setup.

Configuring the Test Results Analyzer involves just two simple steps.

## Generating JUnit Reports with Playwright

### Update `playwright.config.ts` to Include Reporter

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['junit', { outputFile: 'results.xml' }]],
});