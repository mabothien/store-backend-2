import UserModel from '../user';
import bcrypt from 'bcrypt';

describe('Test User Model Methods', () => {
  it('Get user by Id', async () => {
    const user = await UserModel.show(1);
    const isResult = bcrypt.compareSync('long123', user.password)
    expect(isResult).toBe(true);
  });

  it('Get all user', async () => {
    const users = await UserModel.index()
    expect(users.length).toBeGreaterThan(0);
  });

  it('update user', async () => {
    const user = {
      firstName: "long1",
      lastName:"tran2",
      username:"longtran",
      password:"long123",
      id: 1,
    }
    const users = await UserModel.updateUser(user)
    expect(users.firstName).toBe( users.firstName)
  });

  it('delete user', async () => {
    await UserModel.deleteUser(1)
    const res = await UserModel.index();
    expect(res).toEqual([]);
  });

  it('create user', async () => {
    const user = {
      firstName: "long",
      lastName:"tran",
      username:"longtran",
      password:"long123"
    }
    await UserModel.create(user)
    const users = await UserModel.index()
    expect(users.length).toBeGreaterThan(0);
  });
});
