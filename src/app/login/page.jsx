'use client'
import React from 'react';
import Image from 'next/image';
import image from '../../../assets/images/login/login.svg';
import SocialLogin from '../../components/sharedComponents/SocialLogin';
import Link from 'next/link';
import { signIn} from "next-auth/react";
import { useRouter, useSearchParams } from 'next/navigation';


const LogIn = () => {
  const router=useRouter()
  const searchPath=useSearchParams()
  const path = searchPath.get('redirect')

    const handelForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

     
        const res = await signIn('credentials', { 
            email, 
            password,
             redirect: true,
             callbackUrl:path? path:'/'
             });
       

        if (res?.error) {
            console.error('Login failed:', res.error);
        } else {
            console.log('Login successful:', res);
            if(res.status===200){
                alert('login')
            }
        }
    };

    return (
        <div className='container m-auto p-5 grid grid-cols-2 gap-5'>
            <div>
                <Image src={image} height={500} width={300} alt="Shoes" className="w-8/12 m-auto rounded-xl" />
            </div>
            <div className='border-2 p-5'>
                <h1 className='text-xl font-bold text-center my-4'>Login</h1>
                <form onSubmit={handelForm} className='flex flex-col gap-3 justify-center items-center'>
                    <input type="email" name='email' placeholder='Your email' className='input input-bordered w-full' required />
                    <input type="text" name='password' placeholder='Your Password' className='input input-bordered w-full' required />
                    <input type="submit" value={'Login'} className='btn w-full bg-p-color text-neutral-50' />
                </form>
                <SocialLogin />
                <h1 className='mx-auto text-center'>Create an account <Link href={'/register'} className='btn btn-link'>Register</Link></h1>
            </div>
        </div>
    );
};

export default LogIn;
