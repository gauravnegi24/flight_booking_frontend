import React from 'react'

const Login = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
          <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
