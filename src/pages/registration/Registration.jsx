import react, {useState} from "react";
import BgImg from "../../assets/image 13.png"
import styles from "./Registration.module.css"

function Registration(){
const [formdata, setformdata]=useState(
    {
        name:'',
        username:'',
        email:'',
        mobile:'',
        checked: false,
    }
)

function handlesubmit(){
    if ( !formdata.name|| !formdata.username|| !formdata.email || !formdata.mobile || !formdata.checked){
        return alert('Please enter all fields');
    }
    else{
        console.log('Name',formdata.name)
        console.log('UserName', formdata.username)
        console.log('Email', formdata.email)
        console.log('Mobile', formdata.mobile)
        console.log('Checked', formdata.checked)
    }
}
return <div className={styles.page}>
    <div >
        <h1> Discover new things on Superapp</h1>
        <img src={BgImg} alt='background'></img>
    </div>
    <div> 
    <div>
        
        <h2>Super app</h2>
        <h6> Create your new account</h6>
        <input type='text' value={formdata.name} onChange={(e)=>{
            setformdata({...formdata, name: e.target.value});
        }} placeholder='Name' /> 
        <input type='text' value={formdata.username} onChange={(e)=>{
            setformdata({...formdata, username: e.target.value})
        }} 
        placeholder="UserName" />
        <input type='emai' value={formdata.email} onChange={(e)=>{
            setformdata({...formdata, email: e.target.value})
        }} 
        placeholder='Email'/>

        <input type='tel' value={formdata.mobile} onChange={(e)=>{
            setformdata({...formdata, mobile: e.target.value})
        }} 
        placeholder="Mobile"/>
    </div>
    <div>
        <input type="checkbox" value={formdata.checked} onChange={(e)=>{
            setformdata({...formdata, checked: !formdata.checked})
        }}/>
        <label> Share my registration data with Superapp </label>
    </div>
    <div>
        <button type='submit' onClick={handlesubmit}> SIGN UP </button>
        <p> By clicking on Sign up. you agree to Superapp <span>  Terms and Conditions of Use </span> </p>
        <p> To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
    </div>
    </div>
</div>
}

export default Registration;