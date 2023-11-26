import React from 'react';
import {Plan} from './Plan';
import { dataFeaturesSection } from './Plan.data';


export const PricingSection = () => {
    return(
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center p-4">
            {dataFeaturesSection.map((plan, id) => (
                <Plan key={id} {...plan} />
            ))}
        </div>
    )
}

