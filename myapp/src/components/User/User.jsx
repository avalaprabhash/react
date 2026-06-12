import {useEffect, useInsertionEffect, useState} from 'react'
import './User.css'

function User(props){
    const {userDetails,setState1, setUserDetails1} = props
    const [list,setList] = useState(userDetails)
    const onCreate = () =>{
        setState1(1)
        
    }
    useEffect(() => {
        setList(userDetails)
    },[userDetails]);
    const onEdit =() =>{
        setState(2)
    }
    const onDelete=(id) =>{
        setList(list.filter(obj =>obj.id !== id ))
    }
    return(
        <div className="main">
            <div className="header">
                <h1>User Details</h1>
                <button type="button" onClick={onCreate}>

                    Create User
                </button>
            </div>
            <div className="details">
                <ul className="user">
                    {list.map(obj=>{
                        return (
                            <li key={obj.id}>
                                <div>
                                    <p className="name">{obj.name}</p>
                                    <p className="email">{obj.email}</p>
                                </div>
                                <div className="buttons">
                                    <button className="edit" onClick={onEdit}>Edit User</button>
                                    <button onClick={()=>onDelete(obj.id)} className="delete">Delete User</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default User