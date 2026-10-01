import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function capturePreviews() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 960 },
    deviceScaleFactor: 2
  });

  const page = await context.newPage();
  const indexPath = 'file:///' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');

  console.log('Loading page:', indexPath);
  await page.goto(indexPath, { waitUntil: 'networkidle' });

  // 1. Capture Storefront with Deals Slider & Menu
  await page.screenshot({ path: path.join(__dirname, 'preview-storefront.png'), fullPage: false });
  console.log('Saved preview-storefront.png');

  // 2. Trigger Item Customization Modal (Deal 12) & Capture
  await page.evaluate(() => {
    window.openItemCustomizer('deal_12');
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(__dirname, 'preview-modal.png'), fullPage: false });
  console.log('Saved preview-modal.png');

  // 3. Add to Cart & Open Cart Drawer & Capture
  await page.evaluate(() => {
    document.getElementById('modalConfirmBtn').click();
    document.getElementById('cartToggleBtn').click();
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(__dirname, 'preview-cart.png'), fullPage: false });
  console.log('Saved preview-cart.png');

  // 4. Close Cart & Switch to Admin KDS ERP View & Capture
  await page.evaluate(() => {
    document.getElementById('cartCloseBtn').click();
    document.getElementById('adminToggleBtn').click();
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(__dirname, 'preview-admin.png'), fullPage: false });
  console.log('Saved preview-admin.png');

  await browser.close();
  console.log('All 4 high-resolution previews successfully captured!');
}

capturePreviews().catch(err => {
  console.error('Error generating previews:', err);
  process.exit(1);
});
