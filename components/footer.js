import styles from "../styles/footer.module.scss";
import Image from 'next/image';
import logo from '../public/images/brand/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="container-xl">
        <div className="row">
          <div className="col-md-3 col-6">
            <h5>CONTACTO</h5>
            <ul>
              <li>
                <a rel="noreferrer" href="mailto:hola@pharmarket.co" target="_blank">hola@pharmarket.co</a>
              </li>
              {/* <li>
                <a rel="noreferrer" href="Telegram.com" target="_blank">Telegram</a>
              </li> */}
              <li>
                <a rel="noreferrer" href="https://www.facebook.com/pharmarketco" target="_blank">Facebook</a>
              </li>
              {/* <li>
                <a rel="noreferrer" href="Instagram.com" target="_blank">Linkedin</a>
              </li> */}
              <li>
                <a rel="noreferrer" href="https://wa.me/573153106663?text=Hola!,%20Estoy%20en%20conocer%20m%C3%A1s%20de%20Pharmarket" target="_blank">Whatsapp</a>
              </li>
              <li>
                <a rel="noreferrer" href="tel:-57" target="_blank">Llamar ahora</a>
              </li>
            </ul>
          
          </div>
          <div className="col-md-3 col-6">
          <h5>TRANSPARENCIA</h5>
            <ul>
              <li>
                <a rel="noreferrer" href="A" target="_blank">Política de privacidad</a>
              </li>
              <li>
                <a rel="noreferrer" href="#questions" target="_blank">Terminos y condiciones</a>
              </li>
            </ul>
          
          </div>
          <div className="col-md-3 col-6">
          <h5>TE PUEDE INTERESAR</h5>
            <ul>
              <li>
                <a rel="noreferrer" href="https://wa.me/573153106663?text=Hola!,%20Estoy%20interesado%20en%20ser%20proveedor%20Pharmarket" target="_blank">Como ser proveedor</a>
              </li>
              {/* <li>
                <a rel="noreferrer" href="#questions" target="_blank">Preguntas Frecuentes</a>
              </li>
              <li>
                <a rel="noreferrer" href="Facebook.com" target="_blank">Nosotros</a>
              </li>
              <li>
                <a rel="noreferrer" href="Instagram.com" target="_blank">Prensa</a>
              </li> */}
            </ul>
          
          </div>  
          
          {/* <div className="col-md-3 col-6">
          <h5>EXTRAS</h5>
            <ul>
              <li>
                <a rel="noreferrer" href="A" target="_blank">Api Docs</a>
              </li>
              <li>
                <a rel="noreferrer" href="#questions" target="_blank">Feedback</a>
              </li>
            </ul>
          
          </div>  
           */}
          <div className="col-12 copyright">
            <div className="image-wrapper">
              <Image src={logo} />
            </div>
            <div>
              © Pharmarket 2022 • Medellín, Antioquia, Colombia
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer