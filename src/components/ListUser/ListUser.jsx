import React from 'react';

const ListUser = ({firstName, lastName, img, id, className, onchange, checked}) =>{

    return(
        <li className={className}>
            <img src={img} alt='user'/>
                <div>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>
            <p>{id}</p>
            <input type="checkbox" checked={checked} onChange={onchange}/>
        </li>
    )

};

export default ListUser;