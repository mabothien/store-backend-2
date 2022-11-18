import UserModel, { User } from '../user';

describe('Test User Model Methods', () => {
  let user = {} as User;

  it('create user', async () => {
    const params = {
      firstName: 'long',
      lastName: 'tran',
      username: 'longtran',
      password: 'long123',
    };
    const result = await UserModel.create(params);
    user = result;
    const users = await UserModel.index();
    expect(users.length).toBeGreaterThan(0);
  });

  it('Get user by Id', async () => {
    const result = await UserModel.show(user.id as number);
    expect(result).toEqual({
      id: user.id,
      firstName: 'long',
      lastName: 'tran',
      username: 'longtran',
      password: user.password,
    });
  });

  it('Get all user', async () => {
    const users = await UserModel.index();
    expect(users.length).toBeGreaterThan(0);
  });
});
