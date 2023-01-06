import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Banks - Banking as a Service (BaaS)</title>
        <meta
          name="description"
          content="Permita aos seus clientes controlarem suas finanças e realizarem operações bancárias online sem complicações."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
