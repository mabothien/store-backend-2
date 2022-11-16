import UserModel from '../user';

describe('Test User Model Methods', () => {
  it('Get user by Id', () => {
    expect(UserModel.show).toBeDefined();
  });
  it('Get all user', () => {
    expect(UserModel.index).toBeDefined();
  });
  it('update user', () => {
    expect(UserModel.updateUser).toBeDefined();
  });
  it('delete user', () => {
    expect(UserModel.deleteUser).toBeDefined();
  });
  it('create user', () => {
    expect(UserModel.create).toBeDefined();
  });
});
