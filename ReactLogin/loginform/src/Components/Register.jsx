import React, {useState, } from "react";
import '../Styles/Slogin.css'
import axios from 'axios';



const Rigester = (props) => {

    

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [confirmpass, setConfirmPass] = useState('')

    const handleSudmit = (s) =>{
        s.preventDefault();
        let data = {name,lastName,email,pass,confirmpass}
        if (name && lastName && email && (pass === confirmpass)) {
            axios.post('http://localhost:4000/register',data)
            .then((res)=>{
                alert(res.data.message)
               
                
            })
        } else {
            alert("Invalid Credentials")
        }
    }
    return ( 
        <div className="RegisterContainer">
            <section>
                <form action="" onSubmit={handleSudmit}>
                    <h4>Register</h4>
                    <div className="register">
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Your First Name" /> <br />
                        <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Enter Your Last Name"/> <br />
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your Email-Id"/> <br />
                        <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Enter Your Password" /> <br />
                        <input value={confirmpass} onChange={(e)=>setConfirmPass(e.target.value)} type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="btn2">
                        <button type="submit">REGISTER</button>
                    </div>
                </form>
                <div className="log">
                    
                    <button onClick={() =>props.onFormSwitch('login')}>Already have an account? Login here.</button>
                </div>
            </section>
        </div>
     );
}
 
export default Rigester;