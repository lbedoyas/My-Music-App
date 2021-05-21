import React from 'react';
import Button from '@material-ui/core/Button';

const BtnRegister = ({title, handleShow}) => {
    return (
        <>
            <Button variant="contained" onClick={handleShow} >
                {title}
            </Button>
        </>
    )
}

export default BtnRegister
