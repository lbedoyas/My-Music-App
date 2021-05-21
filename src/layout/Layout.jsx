import React from 'react';
import Header from '../components/atoms/Header/Header';
import NavMenu from '../components/molecules/NavMenu/NavMenu';

const Layout = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Header/>
                </div>
            </div> 
            <div className="row">
                <div className="col-12">
                <NavMenu/>
                </div>
            </div>
            {props.children}
        </>
    )
}

export default Layout
