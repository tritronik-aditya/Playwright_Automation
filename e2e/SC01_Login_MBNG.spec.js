import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('html').click();
  await page.goto('http://zeromus.tritronik.com:8080/#/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('aditya.ahmad');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('Aditya@123~');
  await page.getByRole('button', { name: 'Login' }).click();
  //await page1.goto('https://192.168.9.192:8443/login');
  await page.goto('http://zeromus.tritronik.com:8080/#/pages/dashboard');
  //await page.getByRole('button', { name: 'menu' }).click();
  await page.getByRole('button', { name: 'shuffle Rule Management' }).click();
  await page.getByRole('link', { name: 'shuffle Rule Category' }).click();
  //await page.getByText('Melody - Message Relay & Distribution System').click();
  //await page.getByText('Melody - Message Relay & Distribution System').click({
   // button: 'right'
  //});
  //await page.getByText('Melody - Message Relay & Distribution System').click();
}
);