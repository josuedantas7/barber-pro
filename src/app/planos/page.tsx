import CardPlans from '@/components/Card/CardPlans'
import Header from '@/components/Header/Header'
import React from 'react'

const Planos = () => {

  const plans = ['Registrar cortes', 'Criar apenas 3 modelos', 'Editar seu perfil']
  const plansPremium = ['Registrar cortes ilimitados', 'Criar modelos ilimitados', 'Editar seu perfil', 'Editar tipos de corte', 'Recebe todas atualizações']

  return (
    <div>
        <Header/>
        <div className='h-screen bg-[#12131B] text-white'>
            <div className='flex flex-col gap-8 items-start w-[80%] max-[650px]:w-[95%] max-[650px]:pt-6 mx-auto pt-20'>
                <h1 className='text-white text-2xl font-bold'>Planos</h1>
            </div>
            <div className='flex mt-8 gap-8 justify-center'>
              <CardPlans plans={plans} />
              <CardPlans plans={plansPremium} premium={true}/>
            </div>
        </div>
    </div>
  )
}

export default Planos
