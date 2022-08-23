import { combineReducers } from 'redux'; 
import user from './User.js'


// fetchMeals reducer returns the data from the action 'FETCH_RECIPES' (from the funciton getMealData)
// the function below saves that data into the 'state' using combineReducers
export default combineReducers({ 
  user
})


// In index, all the combined reducers get imported and saved to state.

