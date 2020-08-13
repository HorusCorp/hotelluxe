import React, {useState} from 'react'
import { DatePicker, Space, Select, Button } from 'antd';
import ScrollReseve from './ScrollReseve';
import { useSelector } from 'react-redux'
import {translation} from "../I18n/i18n";


function Banner() {
    const lang = useSelector(state => state.languageReducer.language)

    const [isVisible, setisVisible] = useState(false)
    const { RangePicker } = DatePicker;
    var handleClick = () => {setisVisible(true)}
    var handleClickDouble = () =>{setisVisible(false)}
    
    if (isVisible){
    return (
        <div>
            <div className='background-image'></div>
            <ScrollReseve/>
            <div className="date-center">
            <div className='date' style={{display:'flex', justifyContent:"space-between"}}>
                <div className="dates-center">
                <label>{translation(lang,"dates")}</label>
                <Space direction="vertical" >
                    <RangePicker style={{width:'350px'}}/>
                </Space>
            </div>
                <div className="chambres-center">
                    <label>{translation(lang,"chambres&suites")}</label>
                    <div className="select-center" onClick={() => handleClickDouble()}>
                        <input type='text' placeholder='1 chambre | 0 personne' disabled></input>

                    <Button type='primary' className='button-reserver'>{translation(lang,"reserver")}</Button>
                    </div>

                </div>

            </div>
            </div>


            <div className='form-reservation'>
                <div className='reservations-line'>
                    <span className='chambre-border'>{translation(lang,"chambres")}</span>
                    <div className="selection">
                        <span>{translation(lang,"adultes")}</span>
                        <div>
                        <Select defaultValue="0">
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </Select>
                        </div>
                    </div>
                    <div className="selection">
                        <span>{translation(lang,"enfant")}</span>
                        <div>
                        <Select defaultValue="0">
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </Select>
                        </div>
                    </div>

                </div>
                <div className='reserver-btn-zone'>
                <Button type='primary' className='button-reserver'>{translation(lang,"reserver")}</Button>
                </div>
            </div>

        </div>
        
    )
} else{
    return(
        <div>
        <div className='background-image'></div>
       <ScrollReseve/>
        <div className="date-center">
            <div className='date' style={{display:'flex', justifyContent:"space-between"}}>
            <div className="dates-center">
            <label>{translation(lang,"dates")}</label>
            <Space direction="vertical" >
                <RangePicker style={{width:'350px'}}/>
            </Space>
        </div>
            <div className="chambres-center">
                <label>{translation(lang,"chambres&suites")}</label>
                <div className="select-center" onClick={() => handleClick()}>
                    <input type='text' placeholder='1 chambre | 0 personne' disabled></input>

                <Button type='primary' className='button-reserver'>{translation(lang,"reserver")}</Button>
                </div>

            </div>

        </div>
        </div>

        </div>

    )
}
}

export default Banner
