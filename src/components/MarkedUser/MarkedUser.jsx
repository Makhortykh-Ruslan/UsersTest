import React from 'react';
import {useSelector} from "react-redux";
import ListUser from "../ListUser/ListUser";

const MarkedUser = () =>{
    const markedUserArr = useSelector(state => state.getUsers.markedUsers);
    console.log(markedUserArr)
    const result = markedUserArr.map(({name, picture, id, marked, index}) => console.log(name) )

    return(
        <div>
            {/*{result}*/}
        </div>
    )

}
export default MarkedUser