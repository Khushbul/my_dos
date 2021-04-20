import React from 'react'
import './sign-up.css'
import imaegforsignup from '../Pics/logo.png'

const signup = () => {
    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center', 
            height: '90vh'}}>

                <div className='signupdiv'>
                    <h1>Welcome!</h1>
                    <img src={imaegforsignup} width='100px' height='100px'/>
                </div>
            
            <form className='signupform' name='signup' onSubmit=''>
                <legend>Registration Form</legend>

                <ul>

                    <li><label for='firstname'>First Name:</label></li>
                    <li><input type='text' name='fname' placeholder='Abdul' size='15'/></li>
                    <li><label for='lastname'>Last Name:</label></li>
                    <li><input type='text' name='lname' placeholder='Ali' size='15'/></li>
                    <li><label for="userid">User id:</label></li>
	                <li><input type="text" name="userid" placeholder='@abdulali' size="12" /></li> 
                    <li><label for="username">User Name:</label></li>
	                <li><input type="text" name="username" placeholder='Abdul' size="12" /></li> 
                    
                    


                </ul>

            </form>
        </div>
    )
}

export default signup
