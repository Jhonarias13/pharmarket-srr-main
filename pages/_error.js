import Layout from "../components/layout";
import Link from "next/link";
import Head from "next/head";

const Error = ({ statusCode }) => {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Pharmarket - Upps!</title>
      </Head>
      <Layout>
        <div className="error-404">
          <div className="content">
            <h1>
              Upps! Error {statusCode}<br />
              No encontramos lo que buscabas
            </h1>
            <Link href="/">
              <a className="btn btn-primary btn-sm " role="button">
                Volver a casa
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;
