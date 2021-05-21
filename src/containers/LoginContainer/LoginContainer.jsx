import React, {useState, useEffect} from 'react'
import './LoginContainer.scss';
import LoginGrid from '../../components/organisms/LoginGrid/LoginGrid';
import { auth } from '../../utils/config/firebaseConfig.js';
import { useHistory } from 'react-router-dom';

const LoginContainer = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userRegister, setUserRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [msgError, setMsgError] = useState(null);
    const [msgErrorLogin, setMsgErrorLogin] = useState(null);
    const historial = useHistory();
    const [userSuccess, setUserSuccess] = useState('');
    
    useEffect(() => {
    }, [user, password])

    useEffect(() => {
    }, [userRegister, passwordRegister])

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(user, password).then((dataLogin) => {
            console.log(dataLogin);
            historial.push('/home')
            window.localStorage.setItem('user', user)
        }).catch((err) => {
            console.error(err);
            switch (err.code) {
                case 'auth/invalid-email':
                    setMsgErrorLogin('Auth Invalid')
                    setTimeout(() => {
                        setMsgErrorLogin(null)
                    }, 5000);
                    break;
                case 'auth/wrong-password':
                    setMsgErrorLogin('Auth Invalid')
                    setTimeout(() => {
                        setMsgErrorLogin(null)
                    }, 5000);
                default:
                    setMsgErrorLogin(null)
                    break;
            }
        })
    }

    const handlerRegisterUser = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(userRegister, passwordRegister).then((dataFirebase) => {
            console.log(dataFirebase);
            console.log('usuario creado');
            setUserSuccess('User created!!!')
        }).catch(e => {
            switch (e.code) {
                case 'auth/invalid-email':
                    setMsgError(e.message)
                    break;
                case 'auth/weak-password':
                    setMsgError(e.message)
                default:
                    setMsgError(null)
                    break;
            }
        })
    }
    return (
        <div className="Login__Container">
            <LoginGrid
                setUser={setUser}
                setPassword={setPassword}
                handleLogin={handleLogin}
                setUserRegister= {setUserRegister}
                setPasswordRegister={setPasswordRegister}
                handlerRegisterUser={handlerRegisterUser}
                msgError={msgError}
                setMsgError={setMsgError}
                msgErrorLogin={msgErrorLogin}
                userSuccess={userSuccess}/>
        </div>
    )
}

export default LoginContainer
