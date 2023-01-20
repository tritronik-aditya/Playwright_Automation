import {test, expect} from '@playwright/test'

test('selector demo', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    //await page.pause()
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard_user')
    await page.click('id=password')
    //await page.pause()
    await page.locator('xpath=//*[@id="password"]').fill('sundae')
    await page.locator('#login-button').click()
    await page.pause()
});