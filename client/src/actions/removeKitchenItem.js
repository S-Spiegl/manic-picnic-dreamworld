// eslint-disable-next-line import/no-anonymous-default-export
import * as api from '../api/index.js'

export const removeKitchenItem = (fridgeItem, userState) => {
  switch (userState._id) {
    case "":
      let array = userState.fridge
      let index = array.indexOf(fridgeItem)
      array.splice(index, 1)
      console.log("line 9: ", array)
      return (dispatch) => {
        dispatch({ type: 'NO_USER_REMOVE_FRIDGE_ITEM', payload: {
          "_id": "",
          "userName": "",
          "fridge": array
        } });
      }
    default:
      return async (dispatch) => {
        try {
          const { data } = await api.removeItemFromKitchen({
            fridgeItem: fridgeItem,
            _id: userState._id
          });
          console.log(data)
          dispatch({ type: 'REMOVE_FRIDGE_ITEM', payload: data });
        } catch (error) {
          console.log(error.message);
        }
      }
  }
}

