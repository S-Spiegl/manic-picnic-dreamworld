import * as api from '../api/index.js'

export const addUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.addUser({userData: userData});
    dispatch({ type: 'SEND_USER_DATA', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}