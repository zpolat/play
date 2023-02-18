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

// test('Selectors', async ({ page }) => {
//   //text
//   await page.click('text=some text')

//   //css selectors
//   await page.click('button')
//   await page.click('#id')
//   await page.click('.class')

//   //visible css selector
//   await page.click('submit-button:visible')

//   //combinations
//   await page.click('#username .first')
  
//   //xpath 
//   await page.click('//button')
// })
