import React from 'react'
import {Link} from 'react-router-dom'
import "antd/dist/antd.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {translation} from "../I18n/i18n";
import { useDispatch, useSelector } from 'react-redux'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const lang = useSelector(state => state.languageReducer.language)
    const dispatch = useDispatch()

    return (
        <div className='navbar-header'>
            <nav class="navbar navbar-expand-lg navbar-light" id='background-header'>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{display:"flex", justifyContent:'center'}}>
                <div class="navbar-nav">
                <div className='nav-left'>
                        <Link class="nav-link" to='/Accueil' aria-label="Accueil">{translation(lang,"accueil")}</Link>
                        <Link class="nav-link" to='/Chambre' aria-label="Accueil">{translation(lang,"chambres&suites")}</Link>
                        <Link class="nav-link" to='/Restaurant' aria-label="Accueil">{translation(lang,"restaurant")}</Link>
                        <Link class="nav-link" to='/Service' aria-label="Accueil" >{translation(lang,"services&prestations")}</Link>
                </div>
                <div className='logo-center'>
                    <img src='../../logo-arrondi.svg' alt='hotel camille' width='170px'></img>
                </div>
                <div className='nav-right'>
                <Link class="nav-link" to='/Galerie' aria-label="Accueil" >{translation(lang,"galeriePhotos")}</Link>
                <Link class="nav-link" to='/Actualité' aria-label="Accueil">{translation(lang,"actualités")}</Link>
                <Link class="nav-link" to='/Contact' aria-label="Accueil"><FontAwesomeIcon icon={faEnvelope} style={{width:'20px', height:'20px', color:'white'}}/></Link>
                    <div className='box-btn'>
                        <div className='btn btn-fr' onClick={(() => dispatch({ type: 'fr' }))}><img src='../../france.svg' alt='fr' width='30' heigh='20'></img></div>
                        <div className='btn btn-en' onClick={(() => dispatch({ type: 'en' }))}><img src='../../uk.svg' alt='fr' width='30' heigh='20'></img></div>
                        <div className='btn btn-ko' onClick={(() => dispatch({ type: 'es' }))}><img src='../../spain.svg' alt='ko' width='30' heigh='20'></img></div>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header
