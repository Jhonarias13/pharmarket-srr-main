import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/brand/logo.svg"
import styles from "../styles/navbar.module.scss"
import apps from "../public/icons/apps.svg"
import logoBase from "../public/images/brand/logo-base.svg"
import equis from "../public/icons/angle-up.svg"

import whatsapp from "../public/icons/whatsapp.svg"
import whatsappWhite from "../public/icons/whatsappWhite.svg"
import telegram from "../public/icons/telegram.svg"
import email from "../public/icons/email.svg"
import facebook from "../public/icons/facebook.svg"
import messenger from "../public/icons/messenger.svg"
import config from "../config";

import { useEffect, useState, useRef} from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(null);

  return (
    <>
      <nav className={`${styles.navbar} navbar px-0 navbar-expand-lg navbar-light bg-light`} >
        <div className={`container-xl px-0`}>
          <Link href="/">
            <a className={`${styles.navbarBrand} mt-1 navbar-brand`}>
              <Image src={logo} alt="Logo" />
            </a>
          </Link>
          <button
            className="toggler"
            onClick={()=> setOpen(isOpen ? false : true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/><path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/><path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/></svg>
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mt-1 me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <a className={`${styles.navLink} nav-link`} rel="noreferrer" href="https://wa.me/573153106663?text=Hola!,%20Estoy%20interesado%20en%20ser%20proveedor%20Pharmarket" target="_blank" >
                  ¿ Como ser proveedor ?
                </a>
              </li>

            </ul>
            <div className="d-flex">
              <a className={`${styles.btnLight} btn ms-3`} href={config.signInRedirect} rel="noreferrer" target="_self" role="button">Ingresar</a>
              <a className={`${styles.btnPrimary} btn ms-3`} href={config.signUpRedirect} rel="noreferrer" target="_self" role="button">Registrarme</a>
            </div>
          </div>
        </div>
      </nav>
      
      <div onClick={()=> setOpen(isOpen ? false : true)} className={`blur ${isOpen ? 'show': ''}`}>
      </div>

      <div className={`menu ${isOpen ? 'open': ''}`}>
          <div onClick={()=> setOpen(isOpen ? false : true)} className="close"></div>
          <div className="nav-sm-content">
            <div className="nav-sm-header">
              <a className={`nav-sm-brand`}>
                <Image src={logoBase} alt="Logo" />
              </a>
              <div className={`nav-sm-equis`} onClick={()=> setOpen(isOpen ? false : true)}>
                <Image src={equis} alt="Logo" />
              </div>
            </div>
            <div className="nav-sm-body">
              <li className="nav-sm-item">
                  <a rel="noreferrer" href="https://wa.me/573153106663?text=Hola!,%20Estoy%20interesado%20en%20ser%20proveedor%20Pharmarket" target="_blank">
                    ¿ Como ser proveedor ?
                  </a>
                </li>
             
              <hr/>
              <span>Contacto</span>
              <div className="content-icons">
                <div className="nav-icon">
                  <a rel="noreferrer" href="https://wa.me/573153106663?text=Hola!,%20Estoy%20en%20conocer%20m%C3%A1s%20de%20Pharmarket" target="_blank">
                    <div className="icon-wrapper">
                      <Image src={whatsapp} />
                    </div>  
                  </a>                  
                </div>
                <div className="nav-icon">
                  <a rel="noreferrer" href="https://m.me/pharmarketco" target="_blank">
                    <div className="icon-wrapper">
                      <Image src={messenger} />
                    </div>  
                  </a>
                </div>

                <div className="nav-icon">
                  <a rel="noreferrer" href="mailto:hola@pharmarket.co" target="_blank">
                    <div className="icon-wrapper">
                      <Image src={email} />
                    </div>  
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="nav-call-to">
            <a className="signIn sign-call-to" href={config.signInRedirect} rel="noreferrer" target="_self" role="button">
              <span>
                Ingresar
              </span>
            </a>
            <a className="signUp sign-call-to" href={config.signUpRedirect} rel="noreferrer" target="_self" role="button">
              <span>
                Registrarme
              </span>
            </a>
          </div>
      </div>
      {/* <a className="whatsapp-btn" rel="noreferrer" href="https://wa.me/573153106663?text=Me%20gustar%C3%ADa%20ser%20parte%20de%20la%20lista%20de%20espera%20Pharmarket.%20Este%20es%20mi%20email:" target="_blank">
        <div className="icon-wrapper">
          <Image src={whatsappWhite} />
        </div>  
      </a> */}
    </>
  );
};

export default Navbar;
