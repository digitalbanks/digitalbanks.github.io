import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'O que é a telemedicina?',
      answer:
        'A telemedicina é um serviço que permite que os pacientes consultem médicos online, sem precisar sair de casa.',
    },
    {
      question: 'O que é a telemedicina veterinária?',
      answer: 'A telemedicina veterinária é um serviço que permite que os donos de animais de estimação consultem veterinários online, sem precisar sair de casa.',
    },
    {
      question: 'O que é o seguro odonto e vida?',
      answer:
      'O seguro odonto e vida é um produto que oferece proteção em caso de imprevistos relacionados à saúde bucal e à vida em geral.',
    },
    {
      question: 'O que são as assistências em geral?',
      answer:
        'As assistências em geral são serviços que oferecem descontos em farmácias e outros serviços de saúde.',
    },
  ],
  [
    {
      question: 'O que é a conta digital?',
      answer:
        'A conta digital é uma conta bancária que pode ser acessada pela internet ou pelo celular, sem a necessidade de ir a uma agência física.',
    },
    {
      question: 'Quais as vantagens de ter uma conta digital?',
      answer:
        'Algumas vantagens de ter uma conta digital são a facilidade de acesso, a possibilidade de fazer transações online e o gerenciamento de finanças de forma prática.',
    },
    {
      question: 'O que é o cartão de crédito físico?',
      answer:
        'O cartão de crédito físico é um cartão que pode ser usado para fazer compras onde quiser, seja pessoalmente ou online.',
    },
  ],
  [
    {
      question: 'O que é o cartão de crédito virtual?',
      answer:
        'O cartão de crédito virtual é um cartão que pode ser usado apenas para fazer compras online.',
    },
    {
      question: 'Quais as vantagens de ter um cartão de crédito físico e virtual?',
      answer: 'As vantagens de ter um cartão de crédito físico e virtual são a facilidade de uso, a possibilidade de fazer compras onde quiser e a segurança nas transações.      ',
    },
    {
      question: 'O que é a máquina de POS?',
      answer:
        'A máquina de POS é um aparelho que permite que os estabelecimentos recebam pagamentos de forma rápida e segura.',
    },
    {
      question: 'O que é o gateway de pagamentos?',
      answer:
        'O gateway de pagamentos é uma ferramenta que permite que os estabelecimentos aceitem pagamentos online de forma fácil e segura.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Dúvidas frequentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Se não encontrar a resposta para a sua pergunta, entre em contato com nosso time de suporte.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
