import React from 'react'
import "../style/popup.scss"
import { useMainContext } from '../context/context';

const Popup = () => {
    const { setStatePopup,statePopup } = useMainContext();

    const closePopup = () => {
        setStatePopup(false)
    }
  return (
    <div className="popup" style={statePopup ? {display:"block"} : {display : "none"}}>
        <div className="popupContainer">
            <div className="popupWrapper">
                <h1 className="warningTitle">
                    UYARI !
                </h1>
                <div className="warningContent">
                    Aradığınız kriterlerde <span className='warningContentSubjectText'>OTOPARK</span> bulunamadı
                </div>
                <button className="popupClose" onClick={closePopup}>
                    TAMAM
                </button>
            </div>
        </div>
    </div>
  )
}

export default Popup