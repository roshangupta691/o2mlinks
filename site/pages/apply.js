import React, { useState } from 'react'
import styles from '../styles/apply.module.css';

const Apply = () => {

  const [category,setCategory] = useState('');

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  }
  return (
    <>
      <section className={styles.backgorund+ ' min-h-screen flex justify-center items-center'}>
        <div className="main">
          <div className="content border-2 px-4 py-8 rounded-2xl shadow-lg">
            <h1 className='text-2xl font-bold text-center'>Join the top 1%  creators</h1>
            <p className='text-center'>create Links for your Brand.</p>
            <p className='text-center py-5 font-bold text-gray-500'>Start Building Your Hub</p>
            <form className='flex flex-col gap-4 mt-5'>
              <span className='flex flex-row shadow-md border-2 px-3 py-2 rounded-md'>
                <img className='w-6 mr-3' src="/svg/ig.svg" alt="" />
                <input className='focus:outline-none text-lg' type="text" name="" id="" placeholder='Social Handle' />              

              </span>
              <input className='shadow-md border-2 px-3 py-2 rounded-md' type="email" name="" id="" placeholder='Enter Your Email'/>
              <input className='shadow-md border-2 px-3 py-2 rounded-md' type="password" name="" id="" placeholder='Enter Your Password'/>

              <h5 className='text-center text-sm'>Account Type:</h5>
              <span className='flex'>
                <label className='flex flex-row mr-3'>
                  <input type="checkbox" value="Creator" checked={category==='Creator'} onChange={handleCategoryChange} />
                  <p className="pl-2">Creator</p>
                </label>
                <label className='flex flex-row mr-3'>
                  <input type="checkbox" value="Agency" checked={category==='Agency'} onChange={handleCategoryChange} />
                  <p className="pl-2">Agency</p>
                </label>
                <label className='flex flex-row mr-3'>
                  <input type="checkbox" value="Brand" checked={category==='Brand'} onChange={handleCategoryChange} />
                  <p className="pl-2">Brand</p>
                </label>
              </span>
              <input className='bg-indigo-600 text-white cursor-pointer py-2 rounded-lg' type="submit" value="Apply" />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Apply
