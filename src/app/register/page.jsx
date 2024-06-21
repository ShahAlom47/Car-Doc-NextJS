'use client'
import React from 'react';
import image from '../../../assets/images/login/login.svg'
import Image from 'next/image';
import SocialLogin from '../../components/sharedComponents/SocialLogin';
import Link from 'next/link';
import axios from 'axios';



const Register = () => {
   

    const handelForm = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value

        if(password!==confirmPassword){
            alert('confirm password not match')
            return
        }

        const newUser = {
            name,
            email,
            password,
            date:new Date().toLocaleString()
        }
       
        const res=await axios.post('http://localhost:3000/api/register',newUser)
        if(res?.data?.insertedId){
            alert('Account created successfully ,please login again')
           
            form.reset()
          
        }
        else if (res?.data?.status===304){
            alert('already you have an account')
            form.reset()
        }


    }

    return (
        <div className=' container m-auto p-5 grid grid-cols-2 gap-5'>
            <div>
                <Image src={image} height={500} width={300} alt="Shoes" className="w-8/12 m-auto rounded-xl" ></Image>

            </div>
            <div className=' border-2 p-5'>
                <h1 className=' text-xl font-bold text-center  my-4'>Register</h1>

                <form onSubmit={handelForm} className=' flex flex-col gap-3 justify-center items-center'>

                    <input type="text" name='name' placeholder='Your Name ' className='input input-bordered w-full' required />
                    <input type="email" name='email' placeholder='Your email ' className='input input-bordered w-full' required />
                    <input type="text" name='password' placeholder='Your Password ' className='input input-bordered w-full' required />
                    <input type="text" name='confirmPassword' placeholder='Confirm password ' className='input input-bordered w-full' required />
                    <input type="submit" value={'Register'} className=' btn w-full bg-p-color text-neutral-50' />


                </form>
                <SocialLogin></SocialLogin>

                <h1 className='mx-auto text-center'>Already Have an account? <Link href={'/login'} className='btn btn-link '> Login </Link></h1>


            </div>

        </div>
    );
};

export default Register;