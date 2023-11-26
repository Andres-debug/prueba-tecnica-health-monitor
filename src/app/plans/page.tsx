import { PricingSection } from '@/components/Plan/PricingSection'
import React from 'react'

export const PlansPage = () => {
    return(
        <div className="flex flex-col items-center justify-center space-y-8 bg-gradient-to-r from-blue-500 to-[#67D1E9] text-white p-8">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Nuestros Planes</h1>
                <p className="text-lg">Elige el plan que mejor se adapte a tus necesidades. Tenemos planes diseñados para todos, desde individuos hasta grandes empresas. No importa cuántas URLs necesites monitorizar, tenemos un plan para ti.</p>
            </div>
            <PricingSection/>
        </div>
    )
}

export default PlansPage