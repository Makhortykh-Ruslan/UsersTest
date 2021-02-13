import React, {useEffect} from 'react';
import {fields} from './fields';
import {NavLink} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {usersRequestCreator} from "../../app/store/users/actions/actionsUsers";
import {useDispatch} from "react-redux";


const Header = () =>{
    const dispatch = useDispatch();
    useEffect(()=> {
        const action = usersRequestCreator();
        dispatch(action)
    }, [])

    const tabsResult = fields.map(({name, tabsUrl}) => <React.Fragment key={uuidv4()}>
        <NavLink to={tabsUrl} >{name}</NavLink>
    </React.Fragment>)

    return(
        <div className='headerContainer'>
            {tabsResult}
        </div>
    )
}

export default Header;