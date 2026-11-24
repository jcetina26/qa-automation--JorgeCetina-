import { test, expect } from '@playwright/test';

const TODO_URL = 'https://demo.playwright.dev/todomvc';

test('verificar titulo de TodoMVC', async ({ page }) => {
  await page.goto(TODO_URL);

  await expect(page).toHaveTitle(/TodoMVC/);
});
test('agregar una tarea nueva', async ({ page }) => {
  await page.goto(TODO_URL);

  const input = page.getByPlaceholder('What needs to be done?');

  await input.fill('Completar tarea de Playwright');
  await input.press('Enter');

  await expect(page.getByText('Completar tarea de Playwright')).toBeVisible();
});
test('marcar una tarea como completada', async ({ page }) => {
  await page.goto(TODO_URL);

  const input = page.getByPlaceholder('What needs to be done?');

  await input.fill('Aprender Playwright');
  await input.press('Enter');

  const tarea = page.getByText('Aprender Playwright');
  await expect(tarea).toBeVisible();

  const checkbox = page.getByRole('checkbox', { name: 'Toggle Todo' });
  await checkbox.check();

  await expect(checkbox).toBeChecked();
});