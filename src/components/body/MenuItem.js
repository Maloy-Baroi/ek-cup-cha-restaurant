import React from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';

const MenuItem = props => {
    console.log(props);
    return (
        <div>
            <Card style={{margin: "10px"}}>
                <CardBody>
                    <CardImg
                        style={{opacity: 0.5, display: "inline"}}
                        width={"100%"} alt={props.dish.name} src={props.dish.image} />
                    <CardImgOverlay>
                        <CardTitle>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;
