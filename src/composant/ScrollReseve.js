import React, {useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBed, faUtensils, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';

import { useDispatch,useSelector } from 'react-redux'
import {translation} from "../I18n/i18n";


function ScrollReseve() {

    const lang = useSelector(state => state.languageReducer.language)
    const dispatch = useDispatch()

    const [isOpen, setisOpen]=useState(false)

    var handleOpen = () => {
        setisOpen(true)
        handleLang()
    }
    var handleClose = () => {setisOpen(false)}
    var handleLang = ()=> {
        if (lang === 'en'){
        dispatch({ type: 'en' })
    }else if(lang === 'es'){
        dispatch({ type: 'es' })
        
    }}

    if (isOpen === false){
    return (
        <div>
             <div className='position-reserver'>
                <button className='toggle' onClick={() => handleOpen()}>
                    <span style={{writingMode: 'vertical-rl'}}>{translation(lang,"reserver")}</span>
                </button>
            </div>
        </div>
    )
    } else {
    return (
        <div>
            <div className='position-reserver reserver-open'>
                <div className='side-bar bar-open'>

                        <div><p><a href="#"><FontAwesomeIcon icon={faBed} style={{marginRight:'15px'}}/>{translation(lang,"sr01")}</a></p></div>
                        <div> <p> <a href="#"><FontAwesomeIcon icon={faUtensils} style={{marginRight:'15px'}}/>{translation(lang,"sr02")}</a></p></div>
                        <div><p style={{borderBottom:"none"}} > <a href="#"><FontAwesomeIcon icon={faSuitcaseRolling} style={{marginRight:'15px'}}/>{translation(lang,"sr03")}</a></p></div>

                 </div>

                 <button className='toggle toggle-open' onClick={() => handleClose()}>
                    <spam style={{writingMode: 'vertical-rl'}}> <FontAwesomeIcon icon={faTimes}/></spam>
                </button>
            </div>
        </div>
    )
}
}

export default ScrollReseve
