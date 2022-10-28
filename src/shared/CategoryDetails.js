import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const CategoryDetails = ({ news }) => {
    // console.log(news)
    const { author, category_id, _id, details, image_url, rating, title, total_view } = news;
    // console.log(category_id, _id);
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
                        {details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>...Read More</Link></>
                            :
                            <>{details}</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default CategoryDetails;