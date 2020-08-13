import React from 'react'
import { useSelector } from 'react-redux'
import {translation} from "../I18n/i18n";

function Introduction() {
    const lang = useSelector(state => state.languageReducer.language)

    return (
        
        <div className='description-h1'>

            <div className='h1-accueil'>

                <h1 style={{fontSize:'50px', margin:0}}>{translation(lang,"h2p01")}</h1>
                <p> {translation(lang,"p01")}</p>
                <button className='button-introduction'>{translation(lang,"decouvrez")}</button>
            </div>

            <div className='image-2'>

            </div>


        </div>
    )
}

export default Introduction
