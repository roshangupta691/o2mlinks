import React, { useState } from 'react'
import styles from '../styles/apply.module.css';
import {toast} from 'react-toastify';
import Link from 'next/link';
import router from 'next/router';

const Apply = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        //backend call..
        fetch('http://localhost:8000/api/login',{
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({
          email,password
        })
      })
        .then(res => res.json())
        .then(data => {
          if(data.status==='success')
          {
            toast('You have Logged in.');
            localStorage.setItem('o2mlinksToken',data.token);
            router.push('/dashboard');
          }
          if(data.status==='not found'){
            toast.error('User Not Found');
          }
        })
        .catch(err=>{
          console.log(err);
        })
    }
  return (
    <>
      <section className={styles.backgorund+ ' min-h-screen flex justify-center items-center'}>
        <div className="main">
          <div className="content border-2 px-4 py-8 rounded-2xl shadow-lg">
            <h1 className='text-2xl font-bold text-center'>You're now among top creators</h1>
            <p className='text-center'>Access Your Dashboard.</p>
            <p className='text-center py-5 font-bold text-gray-500'>Start Building Your Hub</p>
            <form onSubmit={handleLogin} className='flex flex-col gap-4 mt-5'>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='shadow-md border-2 px-3 py-2 rounded-md' type="email" name="" id="" placeholder='Enter Your Email' required/>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} className='shadow-md border-2 px-3 py-2 rounded-md' type="password" name="" id="" placeholder='Enter Your Password' required/>

              
              <input className='bg-indigo-600 text-white cursor-pointer py-2 rounded-lg' type="submit" value="Login"  />
            </form>
            <h4 className='text-center mt-3'>New Here? <Link className='font-bold text-blue-400' href='/apply'>Apply</Link></h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default Apply
