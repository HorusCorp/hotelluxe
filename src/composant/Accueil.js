import React, {useEffect} from 'react';
import Header from './Header';
import Introduction from './Introduction'
import Footer from './Footer';
import Presentation from './Presentation';
import Chambre from './Chambre';
import Restaurant from './Restaurant';
import Service from './Service'
import Banner from './Banner';


  

function Accueil() {


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      

      

    return (
        <div>
            <Header/>
            <Banner/>
            <Introduction/>
            <div className='image-chambre'>
                <img src='../../chambre2.jpg' alt='' width='50%'></img>
            </div>
            <Presentation/>
            <Chambre/>
            <Restaurant/>
            <Service/>
            <Footer/>
        </div>
    )
}

export default Accueil
