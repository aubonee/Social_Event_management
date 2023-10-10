
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
   
  
   
  const handleSignOut =() =>{
    logOut()
    .then()
    .catch()
  }
    return (
      

<div className="navbar bg-[#702632] text-white">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className=" lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-[#702632] rounded-box w-52">
    <li>
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }> Home </NavLink>
    </li>

    <li>  <NavLink to="/Contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Contact</NavLink></li>

    <li>  <NavLink to="/Blogs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Blogs</NavLink></li>

   
    </ul>
  </div>
  <a className="font-extrabold text-white upper-case text-xl">EVENTz</a>
</div>
<div className="hidden lg:flex">
              <div className=' '>
           
           <ul className='flex gap-5 font-2xl'>
               <li>
               <NavLink
 to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-bold underline underline-offset-8" : "" }> Home</NavLink>        </li>
               <li>  <NavLink to="/Contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-bold underline underline-offset-8" : ""}>Contact</NavLink></li>
               
               <li>  <NavLink to="/Blogs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-bold underline underline-offset-8" : ""}> Blogs</NavLink></li>


               
           </ul>
           
       </div>
        </div>
<div className="navbar-end">
 
<div className="flex">
<div>
      {
        user && <div className="flex"> <div><img className=" w-[30px] h-[30px] rounded-full" src={user.photoURL} alt="" /></div> <div>{user.displayName}  {user.email} </div> </div> 
      }
    </div>
 <div>

  {
    user ?
    <button onClick={handleSignOut} className=" my-2 mx-2 btn rounded-none bg-[#702632] border-2 border-spacing-y-3 border-spacing-x-7 text-[#FFFFFA] border-[#FFFFFA]">Sign Out</button>
  :
  <Link className=" my-2 mx-2 btn rounded-none bg-[#702632] border-2 border-spacing-y-3 border-spacing-x-7 text-[#FFFFFA] border-[#FFFFFA]" to="/Login">Login</Link>
  }
 </div>

  {/* <div><Link className=" my-2 mx-2 btn rounded-none bg-[#702632] border-2 border-spacing-y-3 border-spacing-x-7 text-[#FFFFFA] border-[#FFFFFA]" to="/Register">Register</Link></div> */}
</div>
</div>
</div>

    );
};

export default Navbar;