import * as api from '../api/index.js';
// import { browserHistory } from 'react-router';

export const loginUser = (userData, isSuccess) => async (dispatch) => {
  try {
    const { data } = await api.loginUser({userData: userData});
    dispatch({ type: 'VERIFY_USER', payload: data });
    // browserHistory.push('/');
    console.log('logged in')
    isSuccess = 1
    return data
  } catch (error) {
    console.log(error.message);
  }
}
