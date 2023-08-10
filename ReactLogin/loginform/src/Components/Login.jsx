import React, {useState} from "react";
import '../Styles/Slogin.css'
import axios from 'axios';

const Login = (props) => {

    const [email, setEmail]=useState('');
    const [password, setPass] = useState('');

    const handleSudmit = (s) =>{
        s.preventDefault();
        let data = {email,password}
        axios.post('http://localhost:4000/login',data)
        .then((res)=>{
            if (res.data.status === 200) {
                alert(res.data.message)
            }
            else{
                alert(res.data.message)
            }
        })
    }
    return ( 
        <div className="Logincontainer">
            <section>
               <form action="" onSubmit={handleSudmit}>
                <h4>Login</h4>
               <div className="login_form">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="youremail@gmail.com"/><br />
                    <input value={password} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="password"/><br />
                </div>
                <div className="btn">
                    <button type="submit">LOGIN</button>
                </div>
               </form>
               <div className="reg">
                <button onClick={() =>props.onFormSwitch('register')}>Don't have an account? Register here</button>
               </div>
            </section>
        </div>
     );
}
 
export default Login;