import React from 'react'
import Mailchimp from 'react-mailchimp-form'


function Footer() {
    return (
        <div >
            <div className="background-footer">
            <div className="logo-footer">
                    <img src="../../logo-camille-hotel.png" alt=''></img>
            </div>
               

                <div className="localisation">
                    <h3>Nous situer</h3>
                    <span><img src="../../location.svg" alt=''></img>12 avenue Montaigne, 75008 Paris</span>
                </div>
                <div className="newsletter">
                    <h3>Newsletter</h3>

                    <Mailchimp
                    action='https://donka-creation.us18.list-manage.com/subscribe/post?u=c9ab211e6f0f1c917f29bfa7d&amp;id=86c8f38fed'

                    //ajoutez multiples champ:
                    fields={[
                        {
                        name: 'EMAIL',
                        placeholder: 'Email',
                        type: 'email',
                        required: true
                        }
                    ]}
                    // Changez language  predefinis
                    messages = {
                        {
                        sending: "Attendez un instant...",
                        success: "Merci pour l'inscription",
                        error: "Une erreur interne inattendue s'est produite.",
                        empty: "Vous devez écrire un e-mail",
                        duplicate: "Trop de tentatives d'abonnement pour cette adresse électronique",
                        button: "S'inscrire"
                        }
                    }
                    // ajoutez a personnaliser la class
                    className='form'/>
                    
                   
                </div>

            </div>
          

            <div className="mentions">
                <div className="legales">
                    <span>Mentions légales</span>
                </div>
                <div className="credits">
                <span>credits @Diadao</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
