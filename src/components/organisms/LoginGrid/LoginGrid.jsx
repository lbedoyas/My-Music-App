import React from 'react';
import './LoginGrid.scss';
import logo from '../../../assets/img/logo-login.jpg';
import LoginForm from '../../molecules/LoginForm/LoginForm';

const LoginGrid = ({setUser,
                    setPassword,
                    handleLogin,
                    setUserRegister,
                    setPasswordRegister,
                    handlerRegisterUser,
                    msgError,
                    setMsgError,
                    msgErrorLogin,
                    userSuccess}) => {
    return (
        <div className="login__container">
            <div className="row">
                <div className="col-12">
                    <div className="login__logo" style={{backgroundImage: `url(${logo})`}}>
                        <span className="login__title">My Music app</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <LoginForm
                        setUser={setUser}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        setUserRegister={setUserRegister}
                        setPasswordRegister={setPasswordRegister}
                        handlerRegisterUser={handlerRegisterUser}
                        msgError={msgError}
                        setMsgError={setMsgError}
                        msgErrorLogin={msgErrorLogin}
                        userSuccess={userSuccess} />
                </div>
            </div>
        </div>
    )
}

export default LoginGrid
