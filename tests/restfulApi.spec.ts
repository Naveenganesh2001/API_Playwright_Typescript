import { test, expect } from '@playwright/test';


test.skip('List Of All Objects', async ({ request }) => {
 
  const res = await request.get('https://api.restful-api.dev/objects');

  expect(res.status()).toBe(200);

  const body = await res.json();
  console.log('Response body:', body);

});


test('Get Object By ID', async ({ request }) => {
 
  const res = await request.get('https://api.restful-api.dev/objects/1');

  expect(res.status()).toBe(200);

  const body = await res.json();
  console.log('Response body:', body);

});

let id:string;

test('Create Object', async ({ request }) => {
     
    const res = await request.post('https://api.restful-api.dev/objects', {
        data: {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2025,
               "price": 2244.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }
    });
    
    expect(res.status()).toBe(200);
    
    const body = await res.json();
    console.log('Response body:', body);
    id=body.id;

});

test('Get Object By ID Created', async ({ request }) => {  
     
    const res = await request.get(`https://api.restful-api.dev/objects/${id}`);
    
    expect(res.status()).toBe(200);
    
    const body = await res.json();
    console.log('Response body:', body);
});


test('Update Object', async ({ request }) => {

    const res = await request.put(`https://api.restful-api.dev/objects/${id}`, {
        data: {
            "name": "Apple iPad 10th Gen",
            "data": {
               "year": 2025,
               "price": 5000.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }
    });
    
    expect(res.status()).toBe(200);
    
    const body = await res.json();
    console.log('Response body:', body);
});


test('Get Object After Update', async ({ request }) => {
         
         
    const res = await request.get(`https://api.restful-api.dev/objects/${id}`);
    
    expect(res.status()).toBe(200);
    
    const body = await res.json();
    console.log('Response body:', body);
});


test('Partially Update Object', async ({ request }) => {
    
    const res = await request.patch(`https://api.restful-api.dev/objects/${id}`, {
        data: {
            "name": "Apple Mac Book(partially updated)",
            "data": {
            "year": 2025,
            "price": 5000.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
            }
        }
    });
    
    expect(res.status()).toBe(200);
    
    const body = await res.json();
    console.log('Response body:', body);
});


test('Get Object After Partially Update', async ({ request }) => {
    
    const res = await request.get(`https://api.restful-api.dev/objects/${id}`);
    
    expect(res.status()).toBe(200);
    
    const body = await res.json();
    console.log('Response body:', body);
});


test('Delete Object', async ({ request }) => {
    
    const res = await request.delete(`https://api.restful-api.dev/objects/${id}`);
    
    expect(res.status()).toBe(200);
    
    const body = await res.json();
    console.log('Response body:', body);
});