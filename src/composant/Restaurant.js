import React from 'react'
import { useSelector } from 'react-redux'
import {translation} from "../I18n/i18n";

function Restaurant() {

    const lang = useSelector(state => state.languageReducer.language)

    return (
        <div className='part5-center'>
            <div className="color-part5"style={{display:'flex', justifyContent:"space-evently"}}>
            <div className='image-test-part5'>
                <div className='image-center'>
                    <img src='../../chef.jpg' alt='Philippe-labbé' width='100%'></img>
                </div>
                <div className='restaurant-philippe'>

                        <h2>{translation(lang,"h2p03")}</h2>
                        <p>
                        <p>Philippe Labbé</p>
                        <p>{translation(lang,"p03")}</p>
                        <p>{translation(lang,"chef01")}</p> 
                        <p>{translation(lang,"chef02")}</p>
                        </p>

                </div>
            </div>
            </div>


        </div>
    )
}

export default Restaurant
