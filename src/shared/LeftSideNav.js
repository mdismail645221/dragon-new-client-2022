import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const LeftSideNav = () => {


    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch(`https://dragon-news-server-cyan-xi.vercel.app/news-categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    

    // console.log(categories)



    return (
        <div>
            <h5>LeftSideNav {categories.length}</h5>
            <div>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`category/${category.id}`}>{ category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;