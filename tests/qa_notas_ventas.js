const {firefox} = require ("playwright");

(async () => {

    const browser = await firefox.launch({ headless: false});
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://demo.relbase.cl")
    await page.locator("id=user_email").fill("qa_junior@relke.cl")
    await page.locator("id=user_password").fill("Demo123456!")
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
        
    await page.getByRole('link', { name: 'Ventas ' }).click();
    await page.locator('[data-title="Nueva nota de venta"]').click();

    await page.selectOption('#sales_note_branch_id', '4');
    await page.selectOption('#sales_note_type_document_sii', '39');
    await page.selectOption('#sales_note_ware_house_id', '13');

    await page.click('#select2-sales_note_customer_id-container');
    await page.fill('.select2-search__field', 'fa');
    await page.click('.select2-results__option >> text=falabella');

    await page.selectOption('#sales_note_currency', 'pesos');    

    await page.click('#select2-sales_note_e_document_products_attributes_0_product_id-container');
    await page.fill('.select2-search__field', 'cama');
    await page.click('.select2-results__option', { hasText: 'Cama matrimonial' });

    await page.pause()
    await browser.close()

})();