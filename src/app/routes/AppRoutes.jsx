import React from "react";
import {Switch, Route} from 'react-router-dom'
import AllUsers from "../../components/AllUsers/AllUsers";
import MarkedUser from "../../components/MarkedUser/MarkedUser";

const AppRoutes = () => {
    return(
        <Switch>
            <Route exact path='/users'>
                <AllUsers />
            </Route>
            <Route exact path='/markedUsers'>
                <MarkedUser />
            </Route>

        </Switch>
    )
}

export default AppRoutes;