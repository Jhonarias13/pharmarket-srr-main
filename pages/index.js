import { useEffect, useState, useRef} from "react";

import Head from 'next/head';
import Layout from '../components/layout';
import Image from 'next/image';
import indexDevices from '../public/images/devices-index.png';
import styles from '../styles/index.module.scss';
import dotsSquares from '../public/images/home/dots_squares.png';
import dotsRectangle from '../public/images/home/dots_rectangle.png';
import dotsRectangleMedium from '../public/images/home/dots_rectangle_medium.png';
import genfar from '../public/images/home/brands/genfar.png';
import astrazeneca from '../public/images/home/brands/astrazeneca.png';
import pfizer from '../public/images/home/brands/pfizer.png';
import dotsCards from '../public/images/home/dots_cards.png';

import shapeQueryTop from '../public/images/home/shape-query-top.png';
import shapeQueryBottom from '../public/images/home/shape-query-bottom.png';

import serviceShapeTop from '../public/images/home/services-shape-top.png';
import serviceShapeBottom from '../public/images/home/services-shape-bottom.png';

import serviceShapeSmTop from '../public/images/home/service-card-shape-top.png';
import serviceShapeSmBottom from '../public/images/home/service-card-shape-bottom.png';

import query from '../public/images/home/query.png';
import queryDrug from '../public/images/home/query_drug.png';
import bluePill from '../public/images/home/blue-pill.png';
import pillBottle from '../public/images/home/pill-bottle.png';

import dotsBeginUse from '../public/images/home/dots-begin-use.png';
import dollarImage from '../public/images/home/dollar.svg';
import quotationImage from '../public/images/home/quotation.svg';
import verifiedImage from '../public/images/home/verified.svg';
import angleDown from '../public/icons/angle-down.svg';
import config from "../config";

const questions = [
  {
    name: '¿Cómo funciona la plataforma?',
    answer: 'La plataforma funciona como un buscador simple que te permite realizar búsquedas de productos de acuerdo con la necesidad y ubicar la mejor opción disponible, además de tener las funcionalidades propias de un Marketplace donde puedes comprar y vender de manera simple y confiable, para ello debes estar debidamente registrado mediante un formulario simple con datos básicos que solicita la plataforma para la adecuada identificación y registro.',
    open: false
  },
  {
    name: '¿Usar la plataforma tiene algún costo?',
    answer: 'Para publicar productos o comprar, la plataforma no tiene ningún costo, solo debes registrarte y listo, puedes acceder así de simple a todos los beneficios.',
    open: false
  },
  {
    name: '¿Cómo estoy seguro de que mi dinero está en buenas manos?',
    answer: 'La plataforma cuenta con una póliza que garantiza la compra segura, además que ofrece una política clara de devoluciones para que estés plenamente seguro que tu dinero está a salvo, sabemos que nuestro principal activo es la confianza de nuestros clientes y trabajamos para garantizar la seguridad en todas las transacciones y dar las garantías para que confíen en nosotros.',
    open: false
  },
  {
    name: '¿Cómo estoy seguro de la calidad de los productos?',
    answer: 'La plataforma tiene un proceso de calificación y de registro que garantiza la inclusión de productos de alta calidad de proveedores certificados para que tengas total tranquilidad respecto a la calidad de los productos comprados.',
    open: false
  },
  {
    name: '¿Si hay una reclamación y solicito la devolución de mi dinero cuanto tiempo debo esperar?',
    answer: 'Si la reclamación es considerada válida o procedente de acuerdo con los causales establecidos en nuestra política de devoluciones tu dinero será reembolsado en no más de 7 días calendario.',
    open: false
  },
  {
    name: '¿Se tiene cobertura nacional?',
    answer: 'Así es, llegamos a todos los puntos en el territorio nacional',
    open: false
  },
  {
    name: '¿Cómo me garantizan la trazabilidad de la calidad del medicamento?',
    answer: 'La trazabilidad del medicamento se asegura con la documentación técnica que aportan los proveedores de la plataforma, con ello puede realizarse toda la trazabilidad en toda la cadena, desde el comprador hasta el laboratorio fabricante',
    open: false
  },
  {
    name: '¿Cómo me garantizan la idoneidad del proveedor o de la institución que pone en venta sus medicamentos?',
    answer: 'Nuestro proceso de registro valida la información del proveedor y permite realizar una calificación de los proveedores para garantizar la idoneidad de los proveedores y la calidad de los productos.',
    open: false
  },
  {
    name: '¿Qué tipo de respaldo me ofrece Pharmarket?',
    answer: 'En pharmarket puedes encontrar todo el soporte necesario para encontrar tus productos, vender tus inventarios de manera rápida y segura',
    open: false
  },
  {
    name: '¿Qué valores agregados me aporta Pharmarket?',
    answer: 'Flexibilidad, confiabilidad, calidad y una amplia red de asociados que te permite gestionar tus necesidades de compra y venta de una manera confiable, rápida y segura',
    open: false
  }
]
  
export default function Home() {

  const [scrollY, setScrollY] = useState(0);
  const [isActive, setActive] = useState(null);
  const [alertText, setAlertText] = useState('Agrega una dirección de correo');
  const buyerSteps = useRef()
  const inputInit = useRef()
  const alertRef = useRef()

  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const [height, setHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 0);
  const [email, setEmail] = useState('')

  const scrollToSignUp = () => {
    /* if(inputInit.current && typeof window !== "undefined"){
      window.scrollTo(0,0)
      inputInit.current.focus()
    } */
  }

  const handleWindowSizeChange = ()=> { 
    setWidth(typeof window !== "undefined" ? window.innerWidth : 0)
    setHeight(typeof window !== "undefined" ? window.innerHeight : 0)
  }
  
  const showAlert = () => {
    
    if(alertRef.current){
      alertRef.current.classList.add('active');
    }

    setTimeout(() => {
      removeAlert()  
    }, 2500);

  }

  const removeAlert = () => {
    if(alertRef.current){
      alertRef.current.classList.remove('active');
    }
  }

  /* const focusInit = () => {
    if(inputInit.current){
      inputInit.current.focus()
    }
  }

  setTimeout(() => {
    focusInit()
  }, 500); */

  useEffect(() => {
    if(typeof window !== "undefined"){
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    } else {
      return false
    }
  }, []);

  let isMobile = (width <= 768);

  let progress = 15

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      goToApp()
    }
  }

  const goToApp = () => {

    if (window && email.length > 10) {
      if(config.signUpRedirect.length > 100) {
        window.open(`${config.signUpRedirect} ${email}`, '_self')
      } else {
        window.open(`${config.signUpRedirect}?email=${email}`, "_self");
      }
    } else {
      showAlert()
      scrollToSignUp()
    }

  }

  useEffect(() => {
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  if(buyerSteps.current){
    
    let top = buyerSteps.current.offsetParent.offsetTop + buyerSteps.current.offsetTop;
    let mediaHeight = height / 2;

    if(scrollY > ((top - mediaHeight) + (isMobile ? 150 : 10 )) ){
      progress = 26;
    }

    if(scrollY > ((top - mediaHeight) + (isMobile ? 430 : 50 )) ){
      progress = 51;

    }

    if(scrollY > ((top - mediaHeight) + (isMobile ? 750 : 80 )) ){
      progress = 76;
    }
  }
  
  return (
    <>
      <Head>
        <title>Pharmarket - La mejor solución para comprar y vender medicamentos.</title>
        <meta name="description" content="Marketplace farmaceutico b2b" />
        <meta name="og:image" content="https://pharmarkets3.s3.amazonaws.com/Group+2644.png" />
        <meta property="og:image:secure_url" content="https://pharmarkets3.s3.amazonaws.com/Group+2644.png" />
        <meta property="og:image" content="https://pharmarkets3.s3.amazonaws.com/Group+2644.png" />
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-title" content="Pharmarket" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="content" />
        <meta name="google-signin-scope" content="profile email" />
        <meta name="theme-color" content="#1976d2" />
        <meta
          name="og:title"
          content="Pharmarket - La mejor solución para comprar y vender medicamentos."
        />
        <meta
          name="og:description"
          content="Medicamentos verificados, Logística integrada en un solo lugar. Compra y vende medicamentos en un solo lugar de manera segura."
        />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="Pharmarket" />
        <meta
          name="twitter:title"
          content="Pharmarket - La mejor solución para comprar y vender medicamentos."
        />
        <meta
          name="twitter:description"
          content="Medicamentos verificados, Logística integrada en un solo lugar. Compra y vende medicamentos en un solo lugar de manera segura."
        />
        <meta name="distribution" content="global" />
        <meta name="language" content="es" />
        <meta
          name="description"
          content="Medicamentos verificados, Logística integrada en un solo lugar. Compra y vende medicamentos en un solo lugar de manera segura."
        />
        <meta name="author" content="Pharmarket" />
        <meta name="copyright" content="Pharmarket" />
        <meta name="language" content="es" />
        <meta name="distribution" content="global" />
      </Head>
      <Layout>

{/*         <iframe src='https://my.spline.design/triangulos-d15eab6a2a198d2eec0082efe4d7254a/' frameBorder='0' width='100%' height='100%'></iframe>
 */}
        <section className="container-xl">
          <div className={`row align-items-center position-relative`}>
            <div
              className={`home-init col-md-8 px-0 col-lg-8 text-center text-md-start `}
            >
              <h1 className={`${styles.title} title`}>
                La forma mas fácil <br />
                <span className={`${styles.textPrimary}`}>rápida</span> y{" "}
                <span className={`${styles.textPrimary}`}>segura</span> de comprar{" "}
                
                productos farmacéuticos
              </h1>

              <p className={`${styles.description} description`}>
                Desafiamos la complejidad de conectar compradores y vendedores de
                la industria farmacéutica a través de tecnología
              </p>

              <div className="input-email">
                <div className="image-wrapper">
                  <Image src={dotsRectangleMedium} alt="dots" />
                </div>
                <input onKeyDown={(e)=> handleKeyDown(e)} ref={inputInit} value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder="Tu dirección de correo" type="text" autoComplete="currentEmail" name="email" />
                <button className={``} onClick={()=>goToApp()}>Registrarme</button>
              </div>

              <div className="brands">
                <div className="brand">
                  <Image src={genfar} />
                </div>
                <div className="brand">
                  <Image src={astrazeneca} />
                </div>
                <div className="brand">
                  <Image src={pfizer} />
                </div>
                <div className="brand">+1000 Productos</div>
              </div>
            </div>
          
            <div
              className={`col-8 mx-auto init-illustration col-md-4  col-lg-4`}
            >
              <div className={"devices"}>
                <div className="image-wrapper">
                  <Image src={dotsRectangle} alt="devices" />
                </div>
                <div className="image-wrapper">
                  <Image src={indexDevices} alt="devices" />
                </div>
                <div className="image-wrapper">
                  <Image src={dotsSquares} alt="devices" />
                </div>
              </div>
            </div>
          
          </div>
          <div className="mouse-down-anim">
            <div className="mouse"></div>
          </div>
        </section>
        <section className="service-cards">
          
          <div className="image-wrapper service-dots">
            <Image src={dotsCards} alt="devices" />
          </div>

          <div className="image-wrapper service-dots">
            <Image src={dotsCards} alt="devices" />
          </div>

          <div className="bg-sm-shape shape-top">
            <Image src={serviceShapeSmTop} alt="devices" />
          </div>

          <div className="bg-sm-shape shape-bottom">
            <Image src={serviceShapeSmBottom} alt="devices" />
          </div>

          <div className="bg-shapes">
            <div className="image-wrapper">
              <Image src={serviceShapeTop} alt="devices" />
            </div>
            <div className="image-wrapper">
              <Image src={serviceShapeBottom} alt="devices" />
            </div>
          </div>

          <div className="container-xl">
            <div className="row ">
              <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                <div className="card">
                  <div className="card-icon buy">
                    <Image src={verifiedImage}/>
                  </div>
                  <h4>Compra medicamentos verificados</h4>
                  <p>
                    Disponemos del inventario de empresas verificadas, con más de
                    1000 productos disponibles.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                <div className="card">

                  <div className="card-icon query">
                  <Image src={quotationImage}/>
                  </div>
                  <h4>Solicita productos desabastecidos</h4>
                  <p>
                    Si no encuentras un medicamento en específico, crea una
                    solicitud y nuestro equipo la gestionara por ti.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                <div className="card">
                  <div className="card-icon dollar">
                  <Image src={dollarImage}/>
                  </div>
                  <h4>Aumenta el % de ahorro en las compras</h4>
                  <p>
                    Mejora el indicador de ahorros en compras de medicamentos, de
                    manera eficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-xl buyer-section " >
            <div className="title">
              <div className="image-wrapper">
                <Image src={pillBottle}/>
              </div>
              <div className="image-wrapper">
                <Image src={bluePill}/>
              </div>
              <h2>
                <span>Comprar</span> productos <br /> farmacéuticos{" "}
                <span>no tiene</span> que ser <br />
                traumatico
              </h2>
              <p>
                Buscamos crear un ecosistema seguro, nos encargamos de validar
                la trazabilidad de los medicamentos con proveedores verificados.
              </p>
              <button onClick={()=> {scrollToSignUp()}}>
                  Registrarme
              </button>
            </div>

            <div className="step-by-step" >
              <div className="row steps-wrapper" ref={buyerSteps}>
                <div className="col-12">
                  <div className={`progress-line-m`} style={{height: `${progress}%`}}  ></div>
                </div> 
                <div className={`progress-line`} style={{width: `${progress}%`}}  ></div>
                <div className="col-md-3 col-sm-12 step">
                  <div className="indicator active">
                    1
                  </div>
                  <div className="card">
                    <h6>Busca o realiza una solicitud</h6>
                    <ul>
                      <li>Encuentra medicamentos</li>
                      <li>Vitales no disponibles</li>
                      <li>En desabastecimiento</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 step">
                  <div className={`indicator ${progress > 25 ? 'active' : ''}`}>
                    2
                  </div>
                  <div className="card">
                    <h6>Confirma y paga el pedido</h6>
                    <ul>
                      <li>Pagos seguros</li>
                      <li>Cotiza productos</li>
                      <li>Gestiona las compras</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 step">
                  <div className={`indicator ${progress > 50 ? 'active' : ''}`}>
                  3
                  </div>
                  <div className="card">
                    <h6>Envío con logistica integrada</h6>
                    <ul>
                      <li>Envíos asegurados</li>
                      <li>Logística farmacéutica</li>
                      <li>Monitoreo en tiempo real</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 step">
                  <div className={`indicator ${progress > 75 ? 'active' : ''}`}>
                    4
                  </div>
                  <div className="card">
                    <h6>Entrega estándar y urgente</h6>
                    <ul>
                      <li>Entregas urgentes</li>
                      <li>Entregas programadas</li>
                      <li>Logística de última milla</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          
        </section>
        <section className="querys">
          <div className="image-wrapper">
              <Image src={shapeQueryTop} alt="shape" />
            </div>
            <div className="image-wrapper">
              <Image src={shapeQueryBottom} alt="shape" />
          </div>
          <div className="container-xl content">
            <div className="row">
              <div className="col-md-7 col-sm-12 info">
                <h1>
                  ¿ Buscando un <br /> medicamento <span>vital</span> o en <br /> <span>desabastecimiento</span>
                  ?
                </h1>
                <p>
                  Soluciona de forma rápida tus requerimientos de productos agotados o
                  vitales no disponibles, nuestro equipo de profesionales te darán
                  respuesta a la mayor brevedad
                </p>
                <button onClick={()=> {scrollToSignUp()}}>
                  Registrarme
                </button>
              </div>
              <div className="col-md-5 col-sm-12 d-flex align-items-center justify-content-center">
                <div className="query-illustration">
                  <div className="image-wrapper-i">
                    <Image src={query} alt="query" />
                  </div>
                  <div className="image-wrapper-i">
                    <Image src={queryDrug} alt="query" />
                  </div>
                  <div className="image-wrapper-i">
                    <Image src={dotsSquares} alt="dotSquares" />
                  </div>
                  <div className="image-wrapper-i">
                    <Image src={dotsSquares} alt="dotSquares" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="questions">
          <h2>
            Preguntas <span>frecuentes</span>
          </h2>
          
          <div className="content">
            {
              questions.map((question, i)=> {
                return (
                  <div key={i} onClick={() => { isActive == i ? setActive(null) : setActive(i)}}>
                    <div className={`item ${isActive == i ? 'open' : ''}`} >
                      <div className="header" >
                        {question.name}

                        <div className="angle-wrapper">
                          <Image src={angleDown}/>
                        </div>

                      </div>
                      <div className={`body`}>
                        <div className="answer">
                          {question.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className="begin-use">
            <h1>
              Empieza a usar Pharmarket
            </h1>
            <p>
              Desafiamos la complejidad de <br/>
              comercializar productos farmacéuticos <br/> a
              través de tecnología
            </p>
            <div className="call-to">
              <div className="image-wrapper">
                <Image src={dotsBeginUse}/>
              </div>
              <div className="image-wrapper">
                <Image src={dotsBeginUse}/>
              </div>
              <input type="text" onKeyDown={(e)=> handleKeyDown(e)} value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder="Tu dirección de correo"/>
              <button onClick={()=> goToApp()}>Registrarme</button>
            </div>
        </section>

        <div ref={alertRef} className={`alert`}>
          {alertText}
        </div>
      </Layout>
    </>
  );
}
