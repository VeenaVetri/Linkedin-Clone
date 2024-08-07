import userReducer, {
  login,
  logout
} from './userSlice';

describe('user reducer', () => {
  const initialState = {
    user: null
  };
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      user: null
    });
  });

  it('should handle login', () => {
    const actual = userReducer(initialState, login());
    expect(actual.user).toHaveProperty("name");
  });

  it('should handle logout', () => {
    const actual = userReducer(initialState, logout());
    expect(actual.user).toBeNull();
  });

});