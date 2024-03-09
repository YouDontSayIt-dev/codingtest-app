import { test, expect, type Page } from '@playwright/test';

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
];

test.beforeEach(async ({ page }) => {
  await page.goto('https://codesect-app.netlify.app/');
});

test('Counter Functionality', async ({ page }) => {
  // Click on the 'Counter' link
  await page.getByRole('link', { name: 'Counter' }).click();

  // Perform button clicks to increment and decrement the counter
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '-' }).click();

  // Click on the 'Reset' button
  await page.getByRole('button', { name: 'Reset' }).click();
});

test('Calculator Functionality', async ({ page }) => {
  // Click on the 'Calculator' link
  await page.getByRole('link', { name: 'Calculator' }).click();

  // Fill in the first input field with '100'
  await page.getByPlaceholder('First Input').click();
  await page.getByPlaceholder('First Input').fill('100');
  await page.getByPlaceholder('First Input').press('Tab');

  // Fill in the second input field with '22' and press Enter
  await page.getByPlaceholder('Second Input').fill('22');
  await page.getByPlaceholder('Second Input').press('Enter');

  // Click on the 'Reset' button
  await page.getByRole('button', { name: 'Reset' }).click();
});

test('Grow Functionality', async ({ page }) => {
  // Click on the 'Grow' link
  await page.getByRole('link', { name: 'Grow' }).click();

  // Click on the heading to trigger the button growth
  await page.getByRole('heading', { name: 'Grow the button' }).click();

  // Perform button clicks to grow the button
  await page.getByRole('button', { name: 'Grow' }).click();
  await page.getByRole('button', { name: 'Grow' }).click();
  await page.getByRole('button', { name: 'Grow' }).click();
  await page.getByRole('button', { name: 'Grow' }).click();
});

test('Checklist Functionality', async ({ page }) => {
  // Click on the 'Check' link
  await page.getByRole('link', { name: 'Check' }).click();

  // Fill in the first input field with 'get milk' and click 'Add'
  await page.getByPlaceholder('Add a new todo...').click();
  await page.getByPlaceholder('Add a new todo...').fill('get milk');
  await page.getByRole('button', { name: 'Add' }).click();

  // Fill in the second input field with 'add milk' and click 'Add'
  await page.getByPlaceholder('Add a new todo...').click();
  await page.getByPlaceholder('Add a new todo...').fill('add milk');
  await page.getByRole('button', { name: 'Add' }).click();

  // Click on the 'Remove' button for the 'get milk' todo item
  await page.locator('li').filter({ hasText: 'get milk Remove' }).getByRole('button').click();

  // Click on the 'Remove' button for the 'add milk' todo item
  await page.getByRole('button', { name: 'Remove' }).click();
});

test('Cardlist Functionality', async ({ page }) => {
  // Click on the 'Cardlist' link
  await page.getByRole('link', { name: 'Cardlist' }).click();

  // Wait for the API request to complete
  await page.waitForResponse('https://random-data-api.com/api/users/random_user?size=10');
  // Wait for the cards to load
  await page.waitForSelector('.card');

  // Get all the cards on the page
  const cards = await page.$$('.card');
  // Assert that there are 10 cards
  expect(cards.length).toBe(10);
});