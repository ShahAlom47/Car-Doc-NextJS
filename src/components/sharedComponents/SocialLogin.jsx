'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ImGoogle } from 'react-icons/im';
import { IoLogoFacebook, IoLogoGithub } from 'react-icons/io';

const SocialLogin = () => {
    const router=useRouter()
    const session=useSession()
const googleLoginHandel = async()=>{
const res =await signIn('google',{redirect:false})
console.log(session);
if( res.status==='authenticated'){
router.push('/')
}

}
const githubLoginHandel=()=>{

}


    return (
        <div className=' justify-center flex flex-col gap-5 mt-5'>
            <h1 className='font-semibold text-lg text-center'>Or SignIn with </h1>
            <div className="  m-auto  flex  gap-3 mb-9 ">
            {/* <ToastContainer/> */}
            <button onClick={googleLoginHandel} className="btn btn-outline bg-slate-300 px-2 rounded-full"> <ImGoogle className=" text-red-500  w-8 h-6" /> </button>
            <button onClick={githubLoginHandel} className="btn btn-outline bg-slate-300 px-2 rounded-full"> <IoLogoGithub className="  w-8 h-8" />   </button>
            <button className="btn btn-outline bg-slate-300 px-2 rounded-full"> <IoLogoFacebook className=" rounded-full w-8 h-8" />   </button>
        </div>
        </div>
    );
};

export default SocialLogin;