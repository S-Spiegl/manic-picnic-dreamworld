import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import KitchenItem from './KitchenItem.js'
import { addKitchenItem } from "../actions/addKitchenItem.js";
// import { removeKitchenItem } from "../actions/removeKitchenItem.js"
// import Input from './Input.js'


export default function KitchenComponent(props) {
  const userState = useSelector((state) => state.user)
  console.log(userState)

  // set state of fridge item input value
  const [fridgeItem, setFridgeItem] = useState({item: ""})

  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    console.log("line 21")
    console.log('userstate in component', userState)
    //here the userstate is still correct, but by the time it hits the action, it's 
    //being set to whatever I enter as an ingredient - solved - the issue was that there
    //was a console log in the async function below and for some reason it was 
    //messing up the order
    event.preventDefault()
      let asyncAddKitchenItem = addKitchenItem(
        // console.log(fridgeItem.item),
        fridgeItem.item,
        userState
        )
        asyncAddKitchenItem(dispatch)
    setFridgeItem({item: ""})
  }

  // const handleClick = (item) => {
  //   dispatch(removeKitchenItem(
  //     item,
  //     userState
  //   ))
  // }

  // const fridgeContents = userState.fridge.map((item) => {
  //   return(
  //     <KitchenItem name={item} handleClick={handleClick}/>
  //   )
  // })
  
  return (

  
    <div className="fridge--container">
        <div className="fridge--add-form">
        </div>
        <div className="fridge--contents">
        <div className="welcome-container" >
        {userState.userName && <h2 className="welcome" data-cy="nav-username">Hi, {userState.userName[0].toUpperCase() + userState.userName.substring(1)},<br></br>
              here's what's in your kitchen</h2>}
          </div>
          <div className="fridge-session-form-subcontainer">
            <form className="fridge-session-form" onSubmit={handleSubmit}>
            <input
              data-cy="recipe-search"
              type="text"
              className="form--input"
              placeholder="add ingredient..."
              value={fridgeItem.item} 
              onChange={(event) => setFridgeItem({...fridgeItem, item: event.target.value})}
            />
            <input type="submit" className="form--button" data-cy="ingredient-button"/>

            </form>
          </div>
          {/* <div className="fridge-contents-subcontainer">
            {fridgeContents}
          </div> */}
        </div>
        <div className="fridge-what-for-dinner-subcontainer">
          {/* <Input /> */}
        </div>
    </div>
  )
}