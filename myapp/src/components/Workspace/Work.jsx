import {useState} from 'react'
import './Work.css'


function Work(props){
    const {state,UserDetails, workState, setUserDetails1} = props


    function CreateUser(){
        const onSubmit = (event) =>{
            event.preventDefault()
            const name = event.target.name.value
            const email = event.target.email.value
            const new_obj = {
                id : UserDetails.length + 1,
                name : name,
                email : email
            }
            const new_userDetails = [...UserDetails,new_obj]
            setUserDetails1(new_userDetails)
        }
        return(
            <div className="form_container">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="user_name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="user_email" />
                    <button type="submit">Create User</button>
                </form>
            </div>
        )
    }

    function EditUser(){
        return(
            <div className="form_container">
                <form action="submit">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="user_name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="user_email" />
                    <button type="submit">Edit User</button>
                </form>
            </div>
        )
    }
    let bodyContent;
    if(state===1){
        bodyContent=CreateUser()
    }
    else if(state===2){
        bodyContent=EditUser()
    }
    else{
        bodyContent=(<h1>Welcome</h1>)
    }
   return(
        <div className="main">
            <h1>Work Space</h1>
            {bodyContent}
        </div>
   )
}
export default Work