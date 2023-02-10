import React, { useContext, useState } from 'react'
import { todosContext } from '../contexts/TodosContext'
import "./Register.css"
 function Register() {

  const {registerUser} = useContext(todosContext)
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const handleClick = () => {
      const obj = {
          email: login,
          password
      }
      registerUser(obj)
    }
  return (
    <div className="Register" >
      <div className='block' >
        <input value={login} className='inp' type="text" onChange={(e) => setLogin(e.target.value)} placeholder='Email' />
        <input  value={password} className='inp' type="text" onChange={(e) => setPassword(e.target.value)} placeholder='passworld' />
        <button onClick={handleClick} className='btn' >Register</button>
      </div>
        
        <img className='img_bag' src="https://pibig.info/uploads/posts/2021-04/1619608163_3-pibig_info-p-anime-vindovs-anime-krasivo-3.png" alt="" />
    </div>
  )
}
export default Register