import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import * as yup from 'yup';
import Swal from 'sweetalert2'

interface PaymentFormProps {
 selectedPlan: string; 
}

const schema = yup.object().shape({
  userName: yup.string().required('User Name is required'),
  email: yup.string().email('Invalid Email').required('Email is required'),
  plan: yup.string().required('Plan is required'),
  cardNumber: yup.string().length(16, 'Card Number must be 16 digits').required('Card Number is required'),
  cardName: yup.string().required('Card Name is required'),
  expiryDate: yup.string().length(4, 'Expiry Date must be 4 digits').required('Expiry Date is required'),
  cvc: yup.string().length(3, 'CVC must be 3 digits').required('CVC is required'),
});

export const PaymentForm: React.FC<PaymentFormProps> = ({ selectedPlan }) => {
 const { register, handleSubmit,setValue, watch, formState: { errors } } = useForm({
  resolver: yupResolver(schema),
});
const onSubmit = (data:any) => {
  Swal.fire({
    title: '¿Estas Seguro?',
    text: 'Por favor confirme su accion.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, pagar ya!',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(data);
      Swal.fire('Pago Realizado!', 'Su pago ha sido aceptado', 'success');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelado', 'Su pago ha sido cancelado', 'error');
    }
  });
};
 const cardNumber = watch("cardNumber");
 const cardName = watch("cardName");
 const expiryDate = watch("expiryDate");
 const cvc = watch("cvc");

 useEffect(() => {
   if(selectedPlan){
    setValue("plan",selectedPlan)
   } 
 }, [selectedPlan,setValue])
 


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
       focused={focused} 
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

       <input type="submit" className="w-full px-3 py-2 text-white font-bol bg-sky-500/100" />
     </form>
   </div>
 );
};