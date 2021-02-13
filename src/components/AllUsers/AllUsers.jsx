import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import ListUser from "../ListUser/ListUser";
import './allUsers.scss'



const AllUsers = () =>{
    const dispatch = useDispatch();
    const users = useSelector(state => state.getUsers.users);
    const marked = useSelector(state => state.getUsers.markedUsers);

    const addMarked = (value, name) =>{
        const res = users.filter((item) => item.id.value === value && item.id.name === name);

        dispatch( ({type: 'ADD_MARKED_USER', payload: res}))
    };

    const result =  users && users.map(({name, picture, id, marked}, index) => <ListUser
        key={index}
        firstName={name.first}
        lastName={name.last}
        img={picture.medium}
        id={id.value}
        className='userList'
        onchange={() => addMarked(id.value, id.name)}

    />)



    return(
        <div>
            <ul>
                {result}
            </ul>
        </div>
    )

}

export default AllUsers;