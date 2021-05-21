import React, {useState} from 'react';
import './LoginForm.scss';
import { Button, Modal, Form } from 'react-bootstrap';
import BtnLogin from '../../atoms/BtnLogin/BtnLogin';
import BtnRegister from '../../atoms/BtnRegister/BtnRegister';

const LoginForm = ({setUser,
                    setPassword,
                    handleLogin,
                    setUserRegister,
                    setPasswordRegister,
                    handlerRegisterUser, 
                    msgError,
                    setMsgError,
                    msgErrorLogin, 
                    userSuccess}) => {
    const [showModal, setShowModal] = useState(false);
    const handleUser = (e) => {
        let user = e.target.value; 
        setUser(user);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleClose = () =>{
        setShowModal(false);
        setMsgError(null);
    } 
    const handleShow = () => setShowModal(true);   
    return (
        <>
            <div className="Login__Form">
                <form>
                    <div className="row">
                        <div className="col-12">
                            <div className="form__inputs">
                                <label className="form-label">Email</label>
                                <input type="email"
                                className="form-control"
                                onChange={(e) => handleUser(e)}
                                placeholder = 'Ingrese su Email'  />
                                <label className="form-label">Password</label>
                                <input type="password"
                                className="form-control"
                                onChange={(e) => handlePassword(e)}
                                placeholder = 'Ingrese su password' />
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                <div className="Login__btn">
                                    <BtnLogin title="Iniciar Seccion" handleLogin={handleLogin} />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                                <div className="Login__btn">
                                    <BtnRegister title="Registro" handleShow={handleShow} />
                                </div>
                            </div>
                        </div>
                        {
                    msgErrorLogin != null ? 
                    <div className="Login__Error">
                        <span>{msgErrorLogin}</span>
                    </div> :
                    <span></span>
                }
                </form>
            </div>
            <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Registro de usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                    onChange={(e) => {setUserRegister(e.target.value)}} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    onChange={(e)=> {setPasswordRegister(e.target.value)}}/>
                </Form.Group>
                <div className="Modal__btn">
                    <Button variant="success" type="button" onClick={(e)=> {handlerRegisterUser(e)}}>
                        Register User
                    </Button>
                </div>
            </Modal.Body>
            <Modal.Footer>

                {
                    msgError != null ? 
                    <div className="Modal__Error">
                        <span>{msgError}</span>
                    </div> :
                    <span className="Modal__Success">{userSuccess}</span>
                }
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default LoginForm
