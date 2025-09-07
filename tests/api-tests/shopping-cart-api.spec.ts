import { expect, test } from '@playwright/test';

test.describe('Shopping cart API', () => {
  test('POST API request - add product to cart', async ({ request }) => {
    const addProductUrl = '/ui/index.php?route=checkout/cart/add';

    const response = await request.post(addProductUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        product_id: '29',
        quantity: '1',
      },
    });
    const responseText = await response.text();
    expect(response.status()).toBe(200);
    expect(responseText).toContain('Success: You have added');
    expect(responseText).toContain('Palm Treo Pro');
  });

  test('POST API request - remove product from cart', async ({ request }) => {
    const removeProductUrl = '/ui/index.php?route=checkout/cart/remove';

    const response = await request.post(removeProductUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        key: '29',
      },
    });
    const responseText = await response.text();
    expect(response.status()).toBe(200);
    expect(responseText).toContain(
      'Success: You have modified your shopping cart!',
    );
    expect(responseText).toContain('0 item(s) - $0.00');
  });
});
