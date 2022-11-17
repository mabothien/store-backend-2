import UserModel from '../user';

describe('Test User Model Methods', () => {
  it('Get user by Id', async () => {
    const user = await UserModel.show(1);
    expect(user.id).toEqual(1);
  });

  it('Get all user', async () => {
    const users = await UserModel.index();
    expect(users.length).toBeGreaterThan(0);
  });

  it('create user', async () => {
    const user = {
      firstName: 'long',
      lastName: 'tran',
      username: 'longtran',
      password: 'long123',
    };
    await UserModel.create(user);
    const users = await UserModel.index();
    expect(users.length).toBeGreaterThan(0);
  });
});
