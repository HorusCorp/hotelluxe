import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faCoffee, faClock, faUsers, faConciergeBell, faSuitcaseRolling, faUserTag, faWifi } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import {translation} from "../I18n/i18n";

function Service() {

    const lang = useSelector(state => state.languageReducer.language)

    return (
        <div className='part6'>


            <div className='services'>
            <h2>{translation(lang,"services&prestations")}</h2>
            </div>
            <div className='background-services'>
                <div className='card-services'>
                <div style={{width:'100%', display:'flex', justifyContent:'center', height:'50px', alignItems:'center'}}>
                <FontAwesomeIcon icon={faUtensils} style={{width:'35px', height:'35px', opacity:'0.3'}}/>
                </div>
                <p style={{textAlign:'center', paddingTop:'15px'}}>{translation(lang,"sc01")}</p>

                </div>
                <div className='card-services'>
                <div style={{width:'100%', display:'flex', justifyContent:'center', height:'50px', alignItems:'center'}}>
                <FontAwesomeIcon icon={faCoffee} style={{width:'35px', height:'35px', opacity:'0.3'}}/>
                </div>
                <p style={{textAlign:'center', paddingTop:'15px'}}>{translation(lang,"sc02")}</p>

                </div>
                <div className='card-services'>
                <div style={{width:'100%', display:'flex', justifyContent:'center', height:'50px', alignItems:'center'}}>
                <FontAwesomeIcon icon={faClock} style={{width:'35px', height:'35px', opacity:'0.3'}}/>
                </div>
                <p style={{textAlign:'center', paddingTop:'15px'}}>{translation(lang,"sc03")}</p>
                </div>
                <div className='card-services'>
                <div style={{width:'100%', display:'flex', justifyContent:'center', height:'50px', alignItems:'center'}}>
                <FontAwesomeIcon icon={faUsers} style={{width:'35px', height:'35px', opacity:'0.3'}}/>
                </div>
                <p style={{textAlign:'center', paddingTop:'15px'}}>{translation(lang,"sc04")}</p>
                </div>
            </div>

            <div className='services'>
            </div>
            <div className='background-services'>
            <div className='card-services'>
            <div style={{width:'100%', display:'flex', justifyContent:'center', height:'50px', alignItems:'center'}}>
                <FontAwesomeIcon icon={faConciergeBell} style={{width:'35px', height:'35px', opacity:'0.3'}}/>
            </div>
            <p style={{textAlign:'center', paddingTop:'15px'}}>{translation(lang,"sc05")}</p>

            </div>
            <div className='card-services'>
            <div style={{width:'100%', display:'flex', justifyContent:'center', height:'50px', alignItems:'center'}}>
            <FontAwesomeIcon icon={faSuitcaseRolling} style={{width:'35px', height:'35px', opacity:'0.3'}}/>
            </div>
            <p style={{textAlign:'center', paddingTop:'15px'}}>{translation(lang,"sc06")}</p>
            </div>
            <div className='card-services'>
            <div style={{width:'100%', display:'flex', justifyContent:'center', height:'50px', alignItems:'center'}}>
            <FontAwesomeIcon icon={faUserTag} style={{width:'35px', height:'35px', opacity:'0.3'}}/>
            </div>
            <p style={{textAlign:'center', paddingTop:'15px'}}>{translation(lang,"sc07")}</p>
            </div>
            <div className='card-services'>
            <div style={{width:'100%', display:'flex', justifyContent:'center', height:'50px', alignItems:'center'}}>
            <FontAwesomeIcon icon={faWifi} style={{width:'35px', height:'35px', opacity:'0.3'}}/>
            </div>
            <p style={{textAlign:'center', paddingTop:'15px'}}>{translation(lang,"sc08")}</p>
            </div>
            </div>
        </div>
    )
}

export default Service
