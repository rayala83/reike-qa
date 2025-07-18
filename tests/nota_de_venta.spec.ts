import { test, expect } from '@playwright/test';

test('Login y navegación inicial a Nota de Venta', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Correo Electrónico').fill('qa_junior@relke.cl');
  await page.getByPlaceholder('Contraseña').fill('Demo123456!');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  await page.click('.navbar-brand');
  await page.waitForLoadState('networkidle');
    
  await page.getByRole('link', { name: 'Ventas ' }).click();
  await page.getByRole('link', { name: 'Notas de venta' }).click();

  await expect(page.getByText('Mostrar:')).toBeVisible();
});
