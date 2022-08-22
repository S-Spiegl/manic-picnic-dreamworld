import axios from 'axios';

const addUserUrl = 'http://localhost:4000/user/add';
export const addUser = (userData) => axios.post(addUserUrl, userData)