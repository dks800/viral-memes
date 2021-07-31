import {React} from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Meme(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Text>
                    { props.name }
                </Card.Text>
                <Button variant="primary">Download Mem</Button>
            </Card.Body>
        </Card>
    )
}