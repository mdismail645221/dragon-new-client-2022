import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const news = useLoaderData();
    console.log(news)

    return (
        <div>
            <h4>This is Home items: { news.length}</h4>
        </div>
    );
};

export default Home;