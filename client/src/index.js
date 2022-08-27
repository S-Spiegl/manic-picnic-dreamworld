import * as React from 'react';
// import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store/store.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css'
import Layout from "./pages/layout.jsx";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import SignUp from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Kitchen from "./pages/kitchen.jsx";
import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

export default function App() {
  return (
    
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="kitchen" element={<Kitchen />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    
  );
}

ReactDOM.render(<App />, document.getElementById("root"));