import UserModel, { User } from '../user';

describe('Test User Model Methods', () => {
  let initUser = {} as User;
  beforeAll(async () => {
    const params: User = {
      firstName: 'long',
      lastName: 'tran',
      username: 'longtran',
      password: 'long123',
    };
    initUser = await UserModel.create(params);
  });
  it('create user', async () => {
    const params = {
      firstName: 'long',
      lastName: 'tran',
      username: 'longtran',
      password: 'long123',
    };
    await UserModel.create(params);
    const users = await UserModel.index();
    expect(users.length).toBeGreaterThan(0);
  });

  it('Get user by Id', async () => {
    if (initUser === null) {
      throw new Error('user is not created');
    }
    const result = await UserModel.show(initUser.id as number);
    expect(result).toEqual(initUser);
  });

  it('Get all user', async () => {
    const users = await UserModel.index();
    expect(users.length).toBeGreaterThan(0);
  });

  it('get token', async () => {
    const params = {
      username: 'longtran',
      password: 'long123',
    };
    const auth = await UserModel.authenticate(params.username, params.password);
    expect(auth?.username).toEqual('longtran');
  });
});
