import React from 'react'
import { useSelector } from 'react-redux'
import {translation} from "../I18n/i18n";

function Chambre() {
    const lang = useSelector(state => state.languageReducer.language)
    
    return (
        <div>
            <div className='background-chambre'>
                <h2>{translation(lang,"chambres&suites")}</h2>
                <span>{translation(lang,"esprit")}</span>
                <p>{translation(lang,"repos")}</p>
            </div>
            <div className='reception-img'>

            </div>
        </div>
    )
}

export default Chambre
