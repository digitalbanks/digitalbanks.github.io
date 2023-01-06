import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-3xl">
          Amplie as possibilidades do seu negócio agora mesmo!
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          Comece a utilizar nossa solução de Banco Digital imediatamente.
          </p>
          <Button href="mailto:contato@digitalbankscorp.com" color="white" className="mt-10">
            Contate-nos
          </Button>
        </div>
      </Container>
    </section>
  )
}
