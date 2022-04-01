import Head from 'next/head'
import Layout from '../components/layout'

const Error404 = () => {
  return (
    <div>
      <Head>
        <title>Pharmarket - 404</title>
        <meta name="description" content="Marketplace farmaceutico b2b" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <div className="container-xl mt-5 pt-5 d-flex align-items-center justify-content-center">
          <div className="mt-5 pt-5">
            <h1 className="mt-n5 pt-5">Error 404 🤭</h1>
          </div>
        </div>
      </Layout>

    </div>
  )
}

export default Error404 