import React from 'react';
import Button from '@material-ui/core/Button';

const CusButton = (props) => {

    return (
        
        <Button variant="outlined" size="small" color="primary" >{props.name}</Button>

    )

}

export default CusButton;