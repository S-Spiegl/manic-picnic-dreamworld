/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import React, { useState } from "react";
import Login from './Login.js'
import { ReactDOM } from 'react-dom'
import "@testing-library/jest-dom"
import store from "../store/store.js"

test('logs in a user', () => {
  render(
    <Provider store={store}>
     <Login />
    </Provider>
  )
  // need to check for userData.userName. How do I get the userData from the state?
  const greeting = screen.getByText(/Welcome/i)
  expect(greeting).toBeInTheDocument() 
})