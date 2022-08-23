export const logoutUser = (userData) => async (dispatch) => {
    dispatch({ type: 'END_SESSION', payload: userData });
}
