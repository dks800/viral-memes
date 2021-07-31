import {React} from 'react';
import { Card, Button } from 'react-bootstrap';


function Memes(props) {
    let [memeData] = [props.data];
    return (
        <div className="meme-container">
            {
                memeData.map((meme) => (
                    <Card key={meme.id}>
                        <Card.Img variant="top" src={meme.url} />
                        <Card.Body>
                            <Card.Title>{ meme.name }</Card.Title>
                            <Button variant="success" onClick={() => window.open(meme.url, "_blank")}>Download</Button>
                        </Card.Body>
                    </Card>
                ))
            }
            <Button className="loadMore" variant="danger" onClick={() => props.loadMore()}>Load More, It's Fun!</Button>
        </div>
    );
}

export default Memes;