import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import KitchenItem from './kitchenItem.jsx'
import { addKitchenItem } from "../actions/addKitchenItem.js";
// import { removeKitchenItem } from "../actions/removeKitchenItem.js"
// import Input from './Input.js'


export default function KitchenComponent(props) {
  const userState = useSelector((state) => state.user)
  
  
  //to get list of items in kitchen, uncomment the below block and 'fridgeContents'
  //at bottom of code. Ignore getFridgeContents. The below will only work if 
  //an action has been called after going to kitchen (e.g. if you've added an ingredient)

  // const fridgeContents = userState.kitchen.map((item) => {
  //   return(
  //     <KitchenItem name={item}/>
  //   )
  // })

  // const getFridgeContents = () => {
  //   if(userState.kitchen){
  //     userState.kitchen.map((item) => {
  //       console.log('test', userState.kitchen)
  //       return(
  //         <KitchenItem name={item}/>
  //       )
  //     })
  //   }
  //   else{
  //     return "loading"
  //   }}
  

  //when you first log in, the userState.kitchen is for some reason undefined and thus unmappable...
  //once you enter an item, all is fine. But this means I can't display the kitchen from
  //the get go...

  //to see this in action, log in and look at the console.log of userState.kitchen
  //it's undefined... (yet the log shows the contents of the kitchen array when you log userState)
  //then add an item and see how it becomes defined... why does it have to wait for an
  //item to be added??? Something to do with async messing things up? Can you put a timer 
  //on it??

  // console.log(fridgeContents)

  console.log(userState)
  console.log('userState.kitchen', userState.kitchen)

  // set state of fridge item input value
  const [fridgeItem, setFridgeItem] = useState({item: ""})

  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
      let asyncAddKitchenItem = addKitchenItem(
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
          <div className="fridge-contents-subcontainer">
            {/* {getFridgeContents} */}
          </div>
        </div>
        <div className="fridge-what-for-dinner-subcontainer">
          {/* <Input /> */}
        </div>
    </div>
  )
}