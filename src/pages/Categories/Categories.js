import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from '../../shared/CategoryDetails';

const Categories = () => {

    const allNews = useLoaderData();
    // console.log(allNews)
    // console.log(news)

    return (
        <div>
            <p>Category{allNews.length}</p>
            
            <div>
                {
                    allNews.map(news => <CategoryDetails
                        key={news._id}
                        news={news}
                    ></CategoryDetails>)
                }
           </div>

        </div>
    );
};

export default Categories;