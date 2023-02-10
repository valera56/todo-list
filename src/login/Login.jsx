import React, { useContext, useState } from 'react'
import { todosContext } from '../contexts/TodosContext'
import "./Login.css"
const Login = () => {

  const {loginUser} = useContext(todosContext)
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const handleClick = () => {
      const obj = {
          email: login,
          password
      }
      loginUser(obj)
    }
  return (
    <div className='Login'>

      <div className='block' >
        <input value={login} className='inp' type="text" onChange={(e) => setLogin(e.target.value)} placeholder='Email' />
        <input value={password} className='inp' type="text" onChange={(e) => setPassword(e.target.value)} placeholder='passworld' />
        <button onClick={handleClick} className='btn' >login</button>
      </div>

      <img className='img_bag' src="https://gamerwall.pro/uploads/posts/2021-11/1635889645_1-gamerwall-pro-p-zastavka-na-rabochii-stol-anime-krasivie-1.jpg" alt="" />
    </div>
  )
}

export default Login