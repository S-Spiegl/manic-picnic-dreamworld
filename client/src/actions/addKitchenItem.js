// eslint-disable-next-line import/no-anonymous-default-export
import * as api from '../api/index.js'

export const addKitchenItem = (fridgeItem, userState) => {
  switch (userState._id) {
    case "":
      let array = userState.fridge
      array.push(fridgeItem)
      console.log('from the action')
      return (dispatch) => {
        dispatch({ type: 'NO_USER_ADD_FRIDGE_ITEM', payload: {
          "_id": "",
          "userName": "",
          "fridge": array,
        }});
      }
    default:
      return async (dispatch) => {
        try {
          console.log("trying to send to backend")
          console.log("userstate!", userState._id)
          console.log('fridgeItem', fridgeItem)
          const { data } = await api.addItemToKitchen({
            fridgeItem: fridgeItem,
            _id: userState._id
          });
          console.log('from the action')
          console.log("Line 23: ", data)
          dispatch({ type: 'ADD_FRIDGE_ITEM', payload: data });
      
        } catch (error) {
          console.log(error.message);
        }
      }
  }
}

