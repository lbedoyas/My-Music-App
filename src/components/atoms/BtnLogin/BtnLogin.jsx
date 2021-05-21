import React from 'react';
import Button from '@material-ui/core/Button';

const BtnLogin = ({title, handleLogin}) => {
    return (
        <>
            <Button variant="contained" onClick={handleLogin}  >
                {title}
            </Button>
        </>
    )
}

export default BtnLogin
