import Head from 'next/head'
import Layout from '../components/layout'

const about = () => {
  return (
    <div>
      <Head>
        <title>Pharmarket - Nosotros</title>
        <meta name="description" content="Marketplace farmaceutico b2b" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <h1>Nosotros</h1>
      </Layout>

    </div>
  )
}

export default about