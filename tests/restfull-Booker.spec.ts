/*import { test, expect } from '@playwright/test';

let token : string;

test.beforeAll('Create Token', async ({ request }) => {
 
    const res = await request.post('https://restful-booker.herokuapp.com/auth', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: 'admin',
      password: 'password123',
    },
    
  });

  expect(res.ok()).toBeTruthy();

  expect(res.status()).toBe(200);

  const body = await res.json();
  console.log('Response body:', body);
  token = body.token;

  expect(body).toHaveProperty('token');
});

let bookingId: number;

test('Create Booking', async ({ request }) => {

    const res = await request.post('https://restful-booker.herokuapp.com/booking', {

        headers: {
            'Content-Type': 'application/json',
        },

        data: {
            firstname: 'Naveen',
            lastname: 'Ganesh',
            totalprice: 143,
            depositpaid: true,
            bookingdates: {
                checkin: '2025-05-05',
                checkout: '2023-05-06',
            },
            additionalneeds: 'Breakfast',
        },
    });

    expect(res.status()).toBe(200);

    const body = await res.json();
    console.log('Response body:', body);

    bookingId = body.bookingid;
    console.log('Booking ID:', bookingId);
});


test('Get Booking', async ({ request }) => {

    const res = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);

    expect(res.status()).toBe(200);

    const body = await res.json();
    console.log('Response body:', body);

});

test('Update Booking', async ({ request }) => {

    const res = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`,
        },
        data: {
            firstname: 'Keerthiii',
            lastname: 'Naveen',
            totalprice: 143,
            depositpaid: true,
            bookingdates: {
                checkin: '2025-05-05',
                checkout: '2023-05-06',
            },
            additionalneeds: 'lunch',
        },
    });

    expect(res.status()).toBe(200);

    const body = await res.json();
    console.log('Response body:', body);
});


test('Get Booking After Update', async ({ request }) => {

    const res = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);

    expect(res.status()).toBe(200);

    const body = await res.json();
    console.log('Response body:', body);

});


test('Delete Booking', async ({ request }) => {
    
    const res = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `token=${token}`,
        },
    });

    expect(res.status()).toBe(201);

});
*/

