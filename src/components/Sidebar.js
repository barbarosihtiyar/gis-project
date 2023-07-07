import React from 'react'
import { useMainContext } from "../context/context";

const Sidebar = () => {
const {sideBar,setSideBar} = useMainContext();

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar