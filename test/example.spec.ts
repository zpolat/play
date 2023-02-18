import { test, expect } from '@playwright/test'

test('simple basic test', async ({ page }) => {
  await page.goto('https://www.example.com')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain')
})

test('clicking on elements', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com')
  await page.click('#signin_button')
  await page.click('text=Sign in')

  const errorMessage = page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})
