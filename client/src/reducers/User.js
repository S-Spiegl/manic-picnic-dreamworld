// eslint-disable-next-line import/no-anonymous-default-export
export default (user = {
  "_id": "",
  "userName": "",
  "kitchen": []
}, action) => {
  switch (action.type) {
    case 'SEND_USER_DATA':
      return action.payload;
    case 'VERIFY_USER':
      return action.payload;
    case 'END_SESSION':
      return action.payload;
    case 'ADD_FRIDGE_ITEM':
      return action.payload;
    case 'REMOVE_FRIDGE_ITEM':
      return action.payload;
    case 'NO_USER_REMOVE_FRIDGE_ITEM':
      return action.payload;
    default:
      return user;
  }
}