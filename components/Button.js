import React from 'react';
import Button from '@material-ui/core/Button';

const CusButton = (props) => {

    return (
        
        <Button style={{marginRight:'10px'}} variant={props.pattern} size="small" color="primary" >{props.name}</Button>

    )

}

export default CusButton;