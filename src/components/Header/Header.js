import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-rose-700 text-rose-50 flex justify-end py-5 px-10'>
           
                <Link className='mx-10' to='/login'>Signin</Link>
                <Link to='/register'>Register</Link>
           
        </div>
    );
};

export default Header;