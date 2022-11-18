import supertest from 'supertest';
import app from '../../index';
import jwt from 'jsonwebtoken';

const request = supertest(app);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let token: any;
describe('Test Routes User', () => {
  beforeAll(async () => {
    token = await request.post('/api/user/auth').send({
      username: 'longtran',
      password: 'long123',
    });
  });

  it('Route create User ', async () => {
    const res = await request.post('/api/user/create').send({
      firstName: 'long 2',
      lastName: 'tran 2',
      username: 'longtran2',
      password: 'long123',
    });
    expect(res.statusCode).toEqual(200);
  });

  it('Route get all ', async () => {
    const res = await request
      .get('/api/user/')
      .set('Authorization', `Bearer ${token.body}`);
    expect(res.statusCode).toEqual(200);
  });

  it('Route get user by id', async () => {
    const res = await request
      .get(`/api/user/1`)
      .set('Authorization', `Bearer ${token.body}`);
    expect(res.statusCode).toEqual(200);
  });

  it('Route get token from authen ', async () => {
    const params = {
      username: 'longtran',
      password: 'long123',
      token: jwt.sign(
        { username: 'longtran', firstName: 'long', lastName: 'tran' },
        process.env.TOKEN_SECRET_KEY as unknown as string,
      ),
    };
    const res = await request.post('/api/user/auth').send({
      username: params.username,
      password: params.password,
    });
    expect(res.statusCode).toEqual(200);
    await request
      .get(`/api/user/1`)
      .set('Authorization', `Bearer ${res.body.token}`);
    expect(res.body.token).toBe(params.token);
  });
});
