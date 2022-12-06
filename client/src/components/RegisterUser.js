import axios from 'axios'
import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import toastr from "toastr"

const RegisterUser = () => {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let history = useHistory()

    const handleSubmit = async (e) => {
        console.log(fname,lname,email,password)
        e.preventDefault();
        const name = `${fname} ${lname}`
       
        try {
        //   const user = await createAccount(email, password, name);
        const res = await axios.post('/registeruser',{firstname:fname,lastname:lname,email,password})
          console.log("##################")
          console.log(res)
         history.push('/login')

         
        } catch (e) {
            console.log(e)
        }

        setFname("")
        setLname("")
        setEmail("")
        setPassword("")

        toastr.success('Registration Successful', 'Welcome!')
        
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen w-full ">
                {/* <!-- SignUp Container --> */}
                <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] w-1/4">
                    <div className="mb-8 flex justify-center">
                        <h1 className='text-4xl text-bold'>Todo</h1>
                    </div>
                    <div className="flex flex-col text-sm rounded-md">
                        <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
                        <input className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
                        <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Username or Email id" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={(e)=>handleSubmit(e)} className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit">Sign Up</button>
                    <div className="mt-5 flex justify-between text-sm text-gray-600">
                        {/* <a href="#">Forgot password?</a> */}
                        <Link to={'/login'}>Sign In</Link>
                    </div>



                </div>
            </div>
        </>
    )
}

export default RegisterUser