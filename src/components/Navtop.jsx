import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Navtop() {
    return (
        <div className="navbar-top">
            <div className="container">
                <div className="row">
                    <div className="col-6 contact">
                        <a href="tel:+261336381135"><WhatsAppIcon />+261336381135</a>
                        <a href="mailto:cs@qerozia.io"><MailIcon />cs@qerozia.io</a>
                    </div>
                    <div className="col-6 social">
                        <a href="https://web.facebook.com/qeroziadigital"><FacebookIcon /></a>
                        <a href="https://twitter.com/QeroziaD"><TwitterIcon /></a>
                        <a href="https://www.linkedin.com/company/79306496"><LinkedInIcon /></a>
                        <a href="https://www.instagram.com/qeroziadigital/"><InstagramIcon /></a>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navtop
