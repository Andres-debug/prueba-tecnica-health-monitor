import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

interface PaymentFormProps {
 selectedPlan: string; 
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ selectedPlan }) => {
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const onSubmit = (data:any) => console.log(data);
 const cardNumber = watch("cardNumber");
 const cardName = watch("cardName");
 const expiryDate = watch("expiryDate");
 const cvc = watch("cvc");


 const [focused, setFocused] = useState<'number' | 'name' | 'expiry' | 'cvc' | undefined>(undefined);

 const handleFocus = (e:any) => {
  const { name } = e.target;
  if (['cardNumber', 'cardName', 'expiryDate', 'cvc'].includes(name)) {
    setFocused(name);
  }
};

 return (
   <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-32 p-5">
     <h1 className="text-2xl font-bold mb-4 mx-auto text-center text-black ">Formulario de Pago</h1>
     <Cards
       number={cardNumber || ''}
       name={cardName || ''}
       expiry={expiryDate || ''}
       cvc={cvc || ''}
       focused={focused} // Usa el estado 'focused' para determinar en qué campo de la tarjeta de crédito se debe centrar el foco
     />
     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-5">
       <input {...register("userName", { required: true })} placeholder="User Name" className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none bg-gray-200" />
       {errors.userName && <p>This field is required</p>}

       <input {...register("email", { required: true })} placeholder="Email" className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none bg-gray-200" />
       {errors.email && <p>This field is required</p>}

       <select {...register("plan", { required: true })} defaultValue={selectedPlan} className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none bg-gray-200">
         <option value="">Select Plan</option>
         <option value="Gratuito">Gratuito</option>
         <option value="Basico">Basico</option>
         <option value="Empresa">Empresa</option>
       </select>
       {errors.plan && <p>This field is required</p>}

       <input {...register("cardNumber", { required: true, maxLength: 16 })} placeholder="Card Number" className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none bg-gray-200" onFocus={handleFocus} />
       {errors.cardNumber && <p>This field is required</p>}
       
       <input {...register("cardName", { required: true })} placeholder="Card Name" className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none bg-gray-200" onFocus={handleFocus} />
       {errors.cardName && <p>This field is required</p>}

       <input {...register("expiryDate", { required: true, maxLength: 4 })} placeholder="Expiry Date" className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none bg-gray-200" onFocus={handleFocus} />
       {errors.expiryDate && <p>This field is required</p>}

       <input {...register("cvc", { required: true, maxLength: 3 })} placeholder="CVC" className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none bg-gray-200" onFocus={handleFocus} />
       {errors.cvc && <p>This field is required</p>}

       <input type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none" />
     </form>
   </div>
 );
};