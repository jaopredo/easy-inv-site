'use client'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { montserrat } from '@/fonts'

interface UserProps {
    name: string,
    phone: string,
    email: string,
    business: boolean
}

export default function UserForm() {
    const { register, handleSubmit, formState: { errors }, control } = useForm<UserProps>()

    const submit: SubmitHandler<UserProps> = (data) => {
        console.log(data)
    }

    return <form onSubmit={handleSubmit(submit)} className='flex flex-col justify-center gap-3'>
        <div className='flex flex-col justify-center'>
            <label htmlFor="name" className={`text-white ${montserrat.className}`}>Nome</label>
            <input id='name' type="text" {...register('name', { required: { value: true, message: "Por favor, nos informe seu nome" } })} className='rounded-md focus:outline-none p-2' />
        </div>
        <div className='flex flex-col justify-center'>
            <label htmlFor="phone" className={`text-white ${montserrat.className}`}>Telefone</label>
            {/* <Controller
                control={control}
                name='phone'
                render={({field}) => (
                    <InputMask id="phone" mask={'(99) 99999-9999'} {...register('phone', { required: { value: true, message: 'Precisamos que informe seu telefone para entrarmos en contato' } })} className='rounded-md focus:outline-none p-2'/>
                )}
            /> */}
            <InputMask id="phone" mask={'(99) 99999-9999'} {...register('phone', { required: { value: true, message: 'Precisamos que informe seu telefone para entrarmos en contato' } })} className='rounded-md focus:outline-none p-2'/>
        </div>
        <div className='flex flex-col justify-center'>
            <label htmlFor="email" className={`text-white ${montserrat.className}`}>Email</label>
            <input id='email' type="email" {...register('email', { required: { value: true, message: 'Precisamos do seu email para entrarmos em contato!' } })} className='rounded-md focus:outline-none p-2' />
        </div>
        <div className='flex flex-col justify-center'>
            <label htmlFor="business" className={`text-white ${montserrat.className}`}>Você já possui uma empresa?</label>
            <input id='business' type="text" {...register('business')} className='rounded-md focus:outline-none p-2' />
        </div>
        
        <button className='bg-amber-400 hover:bg-amber-500 active:bg-amber-600 font-bold rounded-md p-2 text-white w-fit transition-colors'>EU QUERO</button>
    </form>
}
