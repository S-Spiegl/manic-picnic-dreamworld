import * as api from '../api/index.js';
// import { browserHistory } from 'react-router';

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.loginUser({userData: userData});
    dispatch({ type: 'VERIFY_USER', payload: data });
    // browserHistory.push('/');
    console.log('logged in')
  } catch (error) {
    console.log(error.message);
  }
}