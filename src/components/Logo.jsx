import Image from 'next/image'
import digitalBanks from '@/images/logos/digital.png'

export function Logo(props) {
  return (
      // add png logo image
      <Image
        className="w-full"
        src={digitalBanks}
        alt=""
        priority
        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem" />
  )
}
