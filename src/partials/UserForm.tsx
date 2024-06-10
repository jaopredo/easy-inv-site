'use client'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { montserrat } from '@/fonts'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface UserProps {
    name: string,
    phone: string,
    email: string,
    business: boolean
}

export default function UserForm() {
    const [ toggled, setToggled ] = useState<boolean>(false)
    const [ responseMsg, setResponseMsg ] = useState<string>('')
    const { register, handleSubmit, setValue } = useForm<UserProps>()

    const submit: SubmitHandler<UserProps> = (data) => {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user`, data).then((resp) => {
            if (resp.status == 200) {
                setResponseMsg('Você foi cadastrado com sucesso!')
            } else {
                setResponseMsg('Um erro ocorreu, tente novamente')
            }
        }).catch((resp) => {
            setResponseMsg('Um erro ocorreu, tente novamente')
        })
    }

    useEffect(() => {
        const element = document.getElementById('toggle-inside')

        if (toggled) {
            element?.classList.add('right-0')
            element?.classList.remove('left-0')
        } else {
            element?.classList.remove('right-0')
            element?.classList.add('left-0')
        }

        setValue('business', toggled)
    }, [ toggled ])

    return <form onSubmit={handleSubmit(submit)} className='flex flex-col justify-center gap-3'>
        <div className='flex flex-col justify-center'>
            <label htmlFor="name" className={`text-white ${montserrat.className}`}>Nome</label>
            <input id='name' type="text" {...register('name', { required: { value: true, message: "Por favor, nos informe seu nome" } })} className='rounded-md focus:outline-none p-2' />
        </div>
        <div className='flex flex-col justify-center'>
            <label htmlFor="email" className={`text-white ${montserrat.className}`}>Email</label>
            <input id='email' type="email" {...register('email', { required: { value: true, message: 'Precisamos do seu email para entrarmos em contato!' } })} className='rounded-md focus:outline-none p-2' />
        </div>
        <div className='flex items-center gap-2'>
            <label htmlFor="business" className={`text-white ${montserrat.className}`}>Você já possui uma empresa?</label>
            <input id='business' type="hidden" {...register('business')} className='rounded-md focus:outline-none p-2' />
            <div id="toggle-background" className={`${toggled?'bg-amber-500':'bg-slate-300'} rounded-full w-12 h-6 relative hover:cursor-pointer`} onClick={() => setToggled(!toggled)}>
                <div id='toggle-inside' className={`h-6 w-6 bg-white rounded-full absolute left-0 top-1/2 -translate-y-1/2 transition-al`}></div>
            </div>
        </div>
        
        <button className='bg-amber-400 hover:bg-amber-500 active:bg-amber-600 font-bold rounded-md p-2 text-white w-fit transition-colors'>EU QUERO</button>

        { responseMsg && <p className={`text-white text-center ${montserrat.className}`}>{responseMsg}</p> }
    </form>
}
