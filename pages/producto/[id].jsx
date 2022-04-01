import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/producto.module.scss";
import Image from "next/dist/client/image";
import test from "../../public/images/test-img.png";
import testProduct from "../../public/images/test-img.png";
import pharma from "../../public/icons/capsula.svg";
import principle from "../../public/icons/tubo.svg";
import concentration from "../../public/icons/medida.svg";
import data from "../../public/icons/datos.svg";
import padlock from "../../public/icons/lock.svg";
import iconPSE from "../../public/icons/ico_pse.svg";
import iconBancolombia from "../../public/icons/bancolombia.svg";
import iconVisa from "../../public/images/visa.png";
import iconMastercard from "../../public/images/mastercard.png";
import iconNequi from "../../public/icons/nequi.svg";
import iconSum from "../../public/icons/sum.svg";
import iconSub from "../../public/icons/sub.svg";
import config from "../../config";
import useFetch from "../../hooks/useFetch";

const Producto = () => {
  const router = useRouter();
  const slug_product = router.query.id;
  const endPoint = `${config.BASE_URL_API}inventory/public/productBySlug/${slug_product}`;
  const product = useFetch(endPoint);
  console.log(product);

  return (
    <div className={`${styles.container} container-fluid`}>
      <Head>
        <title>Pharmarket - {product?.name} </title>
        <meta name="description" content="Marketplace farmaceutico b2b" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>

      <div className={`${styles.All} container web p-0`}>
        <div className={`${styles.product} row m-0`}>
          {product === null ? (
            <h1>Cargando..</h1>
          ) : (
            <>
              <div
                key={`product-${product.data._id}`}
                className={`${styles.productDetail} card col-md-9 col-sm-12`}
              >
                <div className={`${styles.description} row`}>
                  <div className={`${styles.rotateImg} col-md-1 col-sm-12`}>
                    <div className={`${styles.itemImg}`}>
                      <Image src={test} />
                    </div>
                  </div>
                  <div className={`${styles.imgProduct} col-4`}>
                    <Image src={test} />
                  </div>
                  <div className={`${styles.dataProduct} col-7`}>
                    <div className={`${styles.descriptionProduct} row`}>
                      <span>
                        {product.name}
                        {product.commercial_presentation_name}
                      </span>
                    </div>
                    <ul className={`${styles.data}`}>
                      <li className={`${styles.item} d-flex`}>
                        <p>
                          <span>Presentación comercial :</span>
                          <h1>a</h1>
                        </p>
                      </li>
                      <li className={`${styles.item} d-flex`}>
                        <span>Unidad de referencia :</span>
                        <p className="mb-0">
                          <h1>hola</h1>
                        </p>
                      </li>
                      <li className={`${styles.item} d-flex`}>
                        <span>Precio unidad :</span>
                        <p className="mb-0">aaaaa</p>
                      </li>
                      <li className={`${styles.item} d-flex`}>
                        <span>Fecha de vencimiento :</span>
                        <p className="mb-0">30 mar. 2022</p>
                      </li>
                      <li className={`${styles.item} d-flex`}>
                        <span>Forma del producto :</span>
                        <p className="mb-0">Locion</p>
                      </li>
                      <li className={`${styles.item} d-flex`}>
                        <span>Laboratorio :</span>
                        <p className="mb-0">Megalabs colombia s.a.s.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles.caracteristics} row m-0`}>
                  <div className={`${styles.textTop} col-12`}>
                    <span>Caracteristicas</span>
                  </div>
                  <div className={`${styles.caractItems} col-6`}>
                    <div className={`${styles.item} row`}>
                      <div className={`${styles.firstItem} col-2`}>
                        <Image className={styles.icon} src={pharma} />
                      </div>
                      <div className={`${styles.secondItem} col-10`}>
                        <span className={styles.type}>
                          forma farmaceutica :
                          <span className={styles.info}> locion</span>
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.item} row`}>
                      <div className={`${styles.firstItem} col-2`}>
                        <Image className={styles.icon} src={principle} />
                      </div>
                      <div className={`${styles.secondItem} col-10`}>
                        <span className={styles.type}>
                          Principio activo :
                          <span className={styles.info}> locion</span>
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.item} row`}>
                      <div className={`${styles.firstItem} col-2`}>
                        <Image className={styles.icon} src={concentration} />
                      </div>
                      <div className={`${styles.secondItem} col-10`}>
                        <span className={styles.type}>
                          Concentracion :
                          <span className={styles.info}> locion</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.caractItems} col-6`}>
                    <div className={`${styles.item} row`}>
                      <div className={`${styles.firstItem} col-2`}>
                        <Image className={styles.icon} src={data} />
                      </div>
                      <div className={`${styles.secondItem} col-10`}>
                        <span className={styles.type}>
                          Registro sanitario :
                          <span className={styles.info}> locion</span>
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.item} row`}>
                      <div className={`${styles.firstItem} col-2`}>
                        <Image className={styles.icon} src={data} />
                      </div>
                      <div className={`${styles.secondItem} col-10`}>
                        <span className={styles.type}>
                          ATC :<span className={styles.info}> locion</span>
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.item} row`}>
                      <div className={`${styles.firstItem} col-2`}>
                        <Image className={styles.icon} src={data} />
                      </div>
                      <div className={`${styles.secondItem} col-10`}>
                        <span className={styles.type}>
                          Vía de administración :
                          <span className={styles.info}> locion</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.buySection} col-3`}>
                <div className={`${styles.buyProduct} row card p-0`}>
                  <h5>$15.000</h5>
                  <span>stock disponible</span>
                  <div className={styles.amountControl}>
                    <div className={`${styles.sum} p-3`}>
                      <Image src={iconSum} />
                    </div>
                    <div className={`${styles.number}`}>1</div>
                    <div className={`${styles.sub} p-3`}>
                      <Image src={iconSub} />
                    </div>
                  </div>
                  <div className={styles.btn}>
                    <button className="btn w-100 btn-buy-now btn-primary mt-2 mb-2">
                      comprar ahora
                    </button>
                  </div>
                  <div className={styles.btn}>
                    <button className="mb-4 btn mt-0 w-100 btn-light btn-add-to-cart d-flex align-items-center justify-content-center">
                      agregar al carrito
                    </button>
                  </div>
                  <div
                    className={`${styles.security} d-flex align-items-center justify-content-center`}
                  >
                    <div className={styles.padlock}>
                      <Image src={padlock} />
                    </div>
                    <span>Transaccion segura</span>
                  </div>
                </div>
                <div className={`${styles.payments} row card mt-3`}>
                  <div className={`${styles.methods}`}>
                    <span>Medios de pago</span>
                  </div>
                  <div className={`${styles.transfer} row`}>
                    <div className={`${styles.item} col-12`}>
                      <span>Transaccion bancaria</span>
                    </div>
                    <div
                      className={`${styles.transferItem} col-6 d-flex align-items-center`}
                    >
                      <Image width={90} height={70} src={iconPSE} />
                    </div>
                    <div
                      className={`${styles.transferItem} col-6 d-flex align-items-center`}
                    >
                      <Image width={50} height={50} src={iconBancolombia} />
                    </div>
                  </div>
                  <div className={`${styles.transfer} row`}>
                    <div
                      className={`${styles.item} col-12  mt-2 d-flex align-items-center`}
                    >
                      <span>Tarjetas de crédito</span>
                    </div>
                    <div
                      className={`${styles.transferItem} col-6  d-flex align-items-center`}
                    >
                      <Image src={iconVisa} />
                    </div>
                    <div
                      className={`${styles.transferItem} col-6  d-flex align-items-center`}
                    >
                      <Image src={iconMastercard} />
                    </div>
                  </div>
                  <div className={`${styles.transfer} row`}>
                    <div className={`${styles.item} col-12 mt-2`}>
                      <span>Apps financieras</span>
                    </div>
                    <div
                      className={`${styles.transferItem} col-6  d-flex align-items-center`}
                    >
                      <Image src={iconNequi} />
                    </div>
                    <div
                      className={`${styles.transferItem} col-6  d-flex align-items-center`}
                    ></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={`${styles.AllMobile} movil`}>
        <div className={`${styles.product} row p-0 m-0 w-100`}>
          <div className={`${styles.productDetail} card col-12 p-0`}>
            <div className={`${styles.productInfo}`}>
              <span>
                Glicolic®-h locion Caja con un frasco pead blanco con tapa disc
                top en polipropileno . cuerpo de color verde claro y sobretapa
                en polipropileno incoloro por 60 ml.
              </span>
            </div>
            <div className={`${styles.imgProduct}`}>
              <Image src={testProduct} />
            </div>
            <div
              className={`${styles.imgRotate} d-flex justify-content-center`}
            >
              <div className={`${styles.boxes}`}>
                <Image src={test} />
              </div>
            </div>
            <div className={`${styles.price}`}>
              <div className={`${styles.text}`}>
                <span>$45.000</span>
              </div>
            </div>
            <div className={`${styles.amount}`}>
              <div className={`${styles.text}`}>
                <span>Stock 1 disponible</span>
              </div>
            </div>
            <div className={styles.amountControl}>
              <div className={`${styles.sum} p-3`}>
                <Image src={iconSum} />
              </div>
              <div className={`${styles.number}`}>1</div>
              <div className={`${styles.sub} p-3`}>
                <Image src={iconSub} />
              </div>
            </div>
            <div className={`${styles.aggCart}`}>
              <button className="btn w-100 btn-buy-now btn-primary mb-2">
                Agregar al carrito
              </button>
            </div>
            <div className={`${styles.buy}`}>
              <button className="btn w-100 btn-light btn-add-to-cart d-flex align-items-center justify-content-center">
                Comprar
              </button>
            </div>
            <div
              className={`${styles.security} d-flex justify-content-center align-items-center`}
            >
              <div className={`${styles.padlock} d-flex align-items-center`}>
                <Image className={`${styles.svg}`} src={padlock} />
              </div>
              <span>Transaccion segura</span>
            </div>
          </div>
          <div className={`${styles.information} card col-12 p-0`}>
            <ul className={`${styles.data}`}>
              <li className={`${styles.item}`}>
                <p>
                  <span>Presentación comercial :</span>Caja con un frasco pead
                  blanco con tapa disc top en polipropileno (pp). cuerpo de
                  color verde claro y sobretapa en polipropileno incoloro por 60
                  ml.
                </p>
              </li>
              <li className={`${styles.item}`}>
                <span>Unidad de referencia :</span>
                <p className="mb-0">2.00000 100 ml</p>
              </li>
              <li className={`${styles.item}`}>
                <span>Precio unidad :</span>
                <p className="mb-0">$22.500</p>
              </li>
              <li className={`${styles.item}`}>
                <span>Fecha de vencimiento :</span>
                <p className="mb-0">30 mar. 2022</p>
              </li>
              <li className={`${styles.item}`}>
                <span>Forma del producto :</span>
                <p className="mb-0">Locion</p>
              </li>
              <li className={`${styles.item}`}>
                <span>Laboratorio :</span>
                <p className="mb-0">Megalabs colombia s.a.s.</p>
              </li>
            </ul>
          </div>
          <div className={`${styles.caracteristics} card col-12 p-0`}>
            <div className={`${styles.textTop} col-12`}>
              <span>Caracteristicas</span>
            </div>
            <div className={`${styles.caractItems} col-12`}>
              <div className={`${styles.item} d-flex mb-3`}>
                <div className={`${styles.firstItem} col-2 p-0`}>
                  <Image className={styles.icon} src={pharma} />
                </div>
                <div className={`${styles.secondItem} col-10 p-0`}>
                  <span className={styles.type}>
                    forma farmaceutica :
                    <span className={styles.info}> locion</span>
                  </span>
                </div>
              </div>
              <div className={`${styles.item} d-flex mb-3`}>
                <div className={`${styles.firstItem} col-2 p-0`}>
                  <Image className={styles.icon} src={principle} />
                </div>
                <div className={`${styles.secondItem} col-10 p-0`}>
                  <span className={styles.type}>
                    Principio activo :
                    <span className={styles.info}> locion</span>
                  </span>
                </div>
              </div>
              <div className={`${styles.item} d-flex mb-3`}>
                <div className={`${styles.firstItem} col-2 p-0`}>
                  <Image className={styles.icon} src={concentration} />
                </div>
                <div className={`${styles.secondItem} col-10 p-0`}>
                  <span className={styles.type}>
                    Concentracion :<span className={styles.info}> locion</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={`${styles.caractItems2} col-12`}>
              <div className={`${styles.item} d-flex mb-3`}>
                <div className={`${styles.firstItem} col-2 p-0`}>
                  <Image className={styles.icon} src={data} />
                </div>
                <div className={`${styles.secondItem} col-10 p-0`}>
                  <span className={styles.type}>
                    Registro sanitario :
                    <span className={styles.info}> locion</span>
                  </span>
                </div>
              </div>
              <div className={`${styles.item} d-flex mb-3`}>
                <div className={`${styles.firstItem} col-2 p-0`}>
                  <Image className={styles.icon} src={data} />
                </div>
                <div className={`${styles.secondItem} col-10 p-0`}>
                  <span className={styles.type}>
                    ATC :<span className={styles.info}> locion</span>
                  </span>
                </div>
              </div>
              <div className={`${styles.item} d-flex mb-3`}>
                <div className={`${styles.firstItem} col-2 p-0`}>
                  <Image className={styles.icon} src={data} />
                </div>
                <div className={`${styles.secondItem} col-10 p-0`}>
                  <span className={styles.type}>
                    Vía de administración :
                    <span className={styles.info}> locion</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.payments} card col-12 p-0`}>
            <div className={`${styles.methods}`}>
              <span>Medios de pago</span>
            </div>
            <div className={`${styles.transfer} row`}>
              <div className={`${styles.item} col-12 p-0`}>
                <span>Transaccion bancaria</span>
              </div>
              <div className={`${styles.logos} col-12 p-0`}>
                <div
                  className={`${styles.transferItem} d-flex align-items-center`}
                >
                  <Image width={80} height={50} src={iconPSE} />
                </div>
                <div
                  className={`${styles.transferItem} d-flex align-items-center`}
                >
                  <Image width={40} height={40} src={iconBancolombia} />
                </div>
              </div>
            </div>
            <div className={`${styles.transfer} row`}>
              <div className={`${styles.item} col-12 p-0`}>
                <span>Tarjetas de crédito</span>
              </div>
              <div className={`${styles.logos} col-12 p-0`}>
                <div
                  className={`${styles.transferItem} d-flex align-items-center`}
                >
                  <Image src={iconVisa} />
                </div>
                <div
                  className={`${styles.transferItem} d-flex align-items-center`}
                >
                  <Image src={iconMastercard} />
                </div>
              </div>
            </div>
            <div className={`${styles.transfer} row`}>
              <div className={`${styles.item} col-12 p-0 mb-3`}>
                <span>Apps financieras</span>
              </div>
              <div className={`${styles.logos} col-12 p-0`}>
                <div
                  className={`${styles.transferItem} d-flex align-items-center`}
                >
                  <Image src={iconNequi} />
                </div>
                <div
                  className={`${styles.transferItem} d-flex align-items-center`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
