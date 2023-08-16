import type { NextPage } from 'next'
import Head from 'next/head'
import SafeCookiePolicy from '@/components/cookie-policy'

const CookiePolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Tenet Safe – Cookie policy'}</title>
      </Head>

      <main>
        <SafeCookiePolicy />
      </main>
    </>
  )
}

export default CookiePolicy
