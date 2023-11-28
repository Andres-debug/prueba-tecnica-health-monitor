"use client"
import { PaymentForm } from '@/components/PaymentForm'
import { PricingSection } from '@/components/Plan/PricingSection'
import React, { useState } from 'react';

export const PlansPage = () => {
    const [selectedPlan, setSelectedPlan] = useState("");

 const handlePlanSelect = (plan:any) => {
   setSelectedPlan(plan);
 };
    return(
        <div className="flex flex-col items-center justify-center space-y-8 p-20" style={{background: "#fefdff"}}>
            <div className="text-center flex flex-col gap-5">
                <h1 className="text-5xl font-bold ">Nuestros Planes</h1>
                <p className="text-lg">Elige el plan que mejor se adapte a tus necesidades. Tenemos planes diseñados para todos, desde individuos hasta grandes empresas. No importa cuántas URLs necesites monitorizar, tenemos un plan para ti.</p>
            </div>
            <PricingSection onPlanSelect={handlePlanSelect} />
            <div id="paymentFormSection">
            <PaymentForm selectedPlan={selectedPlan} />
            </div>
        </div>
    )
}

export default PlansPage  