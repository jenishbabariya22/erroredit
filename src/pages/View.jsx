import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Adduser, viewuser } from '../action/action'
import { Link, useNavigate } from 'react-router-dom'

function View() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const Dispatch = useDispatch()
  const navigate = useNavigate()
  let id = Math.floor(Math.random() * 100)



  const submit = () => {
    let obj = { id, email, password }
    console.log(obj);

    Dispatch(Adduser(obj))
    navigate("/add")

  }



  return (

    <div className='container mx-auto'>

      <center>
        <button className="button" style={{ marginTop: "10px" }}>
          <svg viewBox="0 0 16 16" className="bi bi-lightning-charge-fill" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" /></svg><Link to={"/add"}>Add</Link>
        </button>
      </center>
      <div style={{ height: "93vh", display: "flex", alignItems: "center", justifyContent: "center" }}>


        <div id="login" className="w-64 h-80 bg-indigo-50 rounded shadow flex flex-col justify-between p-3">
          <form className="text-indigo-500" action method="post">
            <fieldset className="border-4 border-dotted border-indigo-500 p-5">
              <legend className="px-2 italic -mx-2">Welcome again!</legend>
              <label className="text-xs font-bold after:content-['*'] after:text-red-400" htmlFor="email">Mail </label>
              <input className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500" value={email} onChange={(e) => setemail(e.target.value)} type="email" required />
              <label className="text-xs font-bold after:content-['*'] after:text-red-400" htmlFor="password">Password</label>
              <input className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500" value={password} onChange={(e) => setpassword(e.target.value)} type="password" required />
              <a href="#" className="block text-right text-xs text-indigo-500 text-right mb-4">Forgot Password?</a>
              <button onClick={submit} type='button' className="w-full rounded bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">Log In</button>
            </fieldset>
          </form>
        </div>

      </div>

    </div>

  )
}

export default View
