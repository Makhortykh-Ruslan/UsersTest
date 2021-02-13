import React, {useEffect} from 'react';
import {Provider} from "react-redux";
import store from '../../store/store'
import {BrowserRouter as Router} from "react-router-dom";
import Header from "../../../components/Header/Header";
import AppRoutes from "../../routes/AppRoutes";
import Container from "../../../components/Container/Container";


function App() {

    return (
        <Provider store={store} >
            <Router>
                <Header />
                    <Container>
                        <AppRoutes />
                    </Container>

            </Router>
        </Provider>
    );
}

export default App;
