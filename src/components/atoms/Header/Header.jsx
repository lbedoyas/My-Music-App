import React from 'react';
import logoHeader from '../../../assets/img/logo-Header.jpg'
import './Header.scss'

const Header = () => {
    return (
        <>
            <img src={logoHeader} alt="Header picture" style={{height: '210px'}} />
        </>
    )
}

export default Header
