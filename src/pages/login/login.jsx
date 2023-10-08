import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const login = () => {
  const {signIn} =useContext(AuthContext);

    const handleLogin = e =>{
               e.preventDefault();
               const form =new FormData(e.currentTarget);
             const email=form.get('email');
             const password=form.get('password');
           console.log(email,password);
             signIn(email,password)
            
             .then(result=>{
                 console.log(result.user)
             })
             .catch(error=>{
               console.error(error)
             }
             )
    }
    return (
        <div>
          
            login

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div><p>Dont have an account?</p> <Link to="/register">Register</Link></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default login;