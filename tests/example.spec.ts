import { test, expect } from '@playwright/test';

/*test('/ test', async ({ request }) => {
  const res = await request.get('http://localhost:8000/');
  expect(res.ok()).toBeTruthy();
  const body = await res.body();
  expect(body.toString()).toBe('Hello world');
});

test.skip('/:name test', async ({ request }) => {
  [
    'Naveen', 'Vishal', 'Ajith'
  ].forEach(async (name) => {
    const res = await request.get(`http://localhost:8000/${name}`);
    expect(res.ok()).toBeTruthy();
    const body = await res.body();
    expect(body.toString()).toBe(`Hello ${name}`);
  })
});

test('/login test', async ({ request }) => {
  const res = await request.post('http://localhost:8000/login', {
    data: {
      username: 'Naveen',
      pass: 123
    }
  });
  expect(res.ok()).toBeTruthy();
  const body = await res.body();
  expect(body.toString()).toBe('Login success');
});*/