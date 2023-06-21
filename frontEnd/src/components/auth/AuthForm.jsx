import React, { useState } from 'react';
// import { Login } from './login';
// import { Register } from './register';
import { Form, useSearchParams, Link } from 'react-router-dom';

const AuthForm = () => {
  const [searchParams] = useSearchParams('');
  const isLogin = searchParams.get('mode') === 'login';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form method='post' className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label
          htmlFor='name'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Username:
        </label>
        <input
          type='username'
          name='username'
          id='username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Password:
        </label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>
      <button
        type='submit'
        className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300'
      >
        {isLogin ? 'Login' : 'Register'}
      </button>
      <p>
        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
          {isLogin ? 'Create new user' : 'Login'}
        </Link>
      </p>
    </Form>
  );
};

export default AuthForm;
