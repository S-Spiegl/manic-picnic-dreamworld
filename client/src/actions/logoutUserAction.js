export const logoutUser = (potato) => async (dispatch) => {
    dispatch({ type: 'END_SESSION', payload: potato });
}
