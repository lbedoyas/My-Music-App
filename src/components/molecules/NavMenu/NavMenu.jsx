import React, {useEffect, useState} from 'react';
import { Nav } from 'react-bootstrap';
import BtnLogo from '../../atoms/BtnLogo/BtnLogo';
import { auth } from '../../../utils/config/firebaseConfig';
import { useHistory, Link } from 'react-router-dom';

const NavMenu = () => {
    const [userAuth, setUserAuth] = useState('');
    const historial = useHistory();
    useEffect(()=> {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserAuth(user.email)
            }
        })
    }, [])
    const signOut = () => {
        auth.signOut();
        historial.push('/')
        setUserAuth(null);
    }
    return (
        <div>
            <Nav style={{justifyContent: 'space-around'}}>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/home">
                            <BtnLogo/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/favorites" eventKey="link-2" >Favorites</Nav.Link>
                    </Nav.Item>
                    {
                        userAuth ?
                        <Nav.Item>
                        <Nav.Link eventKey="link-2" 
                        onClick={signOut}>log out</Nav.Link>
                    </Nav.Item>
                        :
                        <span></span>
                    }
            </Nav>
        </div>
    )
}

export default NavMenu
