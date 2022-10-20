import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const News = () => {
    
    const news = useLoaderData();
    // console.log(news)
    const { author, category_id, details, image_url, rating, title, total_view } = news;

    return (
        <div>
           <Card className="text-left mb-5">
                <Card.Header>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <img style={{ height: '60px', borderRadius: '50%' }} src={author?.img} alt="" />
                            <div>
                                <p className='m-0 p-0 ms-2'>{ author?.name}</p>
                                <p className='m-0 p-0 ms-2'>{author?.published_date}</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <button style={{border: 'none'}}><FaRegBookmark /></button>
                            <button style={{border: 'none'}}><FaShareAlt /></button>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url? image_url : 'UPDATING..'} />
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary">Show All Ctg News</Button></Link>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default News;