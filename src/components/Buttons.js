import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "../style/buttons.scss"
import { useMainContext } from '../context/context';

const Buttons = () => {
    const { sidebarLocation } = useMainContext();
    const { zooms,setZooms } = useMainContext();

    const increaseZoom = () => {
        setZooms(zooms + 1)
    }

    const decreaseZoom = () => {
        setZooms(zooms - 0.2)
        console.log(zooms)
    }

  return (
    <div className="buttons"
    style={sidebarLocation ? {left : "20px"} : {right : "20px"}}>
        <div className="buttonsContainer">
            <div className="buttonsWrapper">
                <div className="zoomInButtons">
                <AddIcon onClick={increaseZoom}/>
                </div>
                <div className="zoomOutButtons">
                <RemoveIcon onClick={decreaseZoom}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buttons