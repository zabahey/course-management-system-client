import { authActions } from './authSlice';
import { uiActions } from './uiSlice';
import { login as userLogin } from '../api/user';

export const login = (username, password) => {
  return async (dispatch) => {
    const data = await userLogin(username, password);

    if (data.code !== 200) {
      dispatch(
        uiActions.showNotification({
          title: 'Login failed',
          messages: ['username or password incorrect'],
        })
      );
    } else {
      const { token } = data.data;
      localStorage.setItem('token', token);
      dispatch(uiActions.showNotification());
      dispatch(
        authActions.login({
          token: token,
        })
      );
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(authActions.logout());
  };
};

export const setAuthenticate = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(
        authActions.login({
          token: token,
        })
      );
    }
  };
};
