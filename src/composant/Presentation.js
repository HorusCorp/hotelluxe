import React from 'react'
import { useSelector } from 'react-redux'
import {translation} from "../I18n/i18n";

function Presentation() {

    const lang = useSelector(state => state.languageReducer.language)
    
    return (
        <div className='background-2'>

            <div className='article-2'>
                <h2>{translation(lang,"h2p02")}</h2>
                <p>{translation(lang,"p02")}</p>
                    <button className='button-introduction1'>{translation(lang,"decouvrez")}</button>

            </div>
            <div className='background-article-2'>

            </div>
            
        </div>
    )
}

export default Presentation
