import React, { Component } from 'react'


import Login from './LoginComponent/Login';
import DeleteEvent from './DashBoard/DeleteEvent';

import DashBoardC from './DashBoard/DashBoardC';
class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <Login/>
        {/* <DeleteEvent/> */}
        {/* <DashBoardC/> */}
      </div>
    )
  }
}


export default App;
