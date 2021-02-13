import React from 'react';
import './container-style.scss'

const Container = ({children}) =>{
    return(
        <section className='wrapper'>
            {children}
        </section>

    )
}

export default Container
