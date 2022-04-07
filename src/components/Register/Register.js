import React from 'react';

const Register = () => {
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log('submitted')

    }
    const handleEmailBlur = event => {
        console.log(event.target.value)
    }
    const handlePasswordBlur = event => {
        console.log(event.target.value)
    }
    
    return (
        <div className=''>
            <form action="" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 w-1/3 justify-center items-center mx-auto border-2  px-10 py-20 rounded mt-10">
                    <div className="mt-3">
                        <label htmlFor="">Email</label>
                        <input onBlur={handleEmailBlur} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' type="email" name="" id="" placeholder='youremail@domain.com'/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePasswordBlur} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' type="password" name="" id="" placeholder='set a password' />
                    </div>
                    <div className="mt-6 ">
                        <input className='bg-green-700 text-green-50 px-3 py-2 w-full rounded cursor-pointer' type="submit" value="Register" />
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Register;