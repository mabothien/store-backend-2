import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);
describe('Test Routes User', () => {
  it('Route get all ', async () => {
    const res = await request
      .get('/api/user/')
      .set('Accept', 'application/json');
    expect(res.status).toEqual(200);
  });

  it('Route create User ', async () => {
    const res = await request
      .post('/api/user')
      .send({
        firstName: 'long',
        lastname: 'tran',
        username: 'longtran',
        password: 'yourpassword',
      })
      .set('Accept', 'application/json');
    expect(res.status).toEqual(200);
  });

  it('Route get user by id', async () => {
    const res = await request
      .get(`/api/user/1`)
      .set('Accept', 'application/json');
    expect(res.status).toEqual(200);
  });

  it('Route update user', async () => {
    const res = await request.put(`/api/user/1`).send({
      firstName: 'long',
      lastname: 'tran',
      username: 'longtran',
      password: 'yourpassword',
      id:1
    })
    .set('Accept', 'application/json');;
    expect(res.status).toBe(200);
  });

  it('Route delete user', async () => {
    const res = await request.delete(`/api/user/1`);
    expect(res.status).toBe(200);
  });
});
