import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Fist Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>hogehoge</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}
