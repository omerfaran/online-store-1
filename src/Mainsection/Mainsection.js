import React from 'react';

const mainsection = () => {
    return(
        <section className="section-main">
        <img src="bakery.jpg" alt="תמונת המוצר" className="product-image"/>
        
        <div className="product-content">
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam officia veritatis commodi nostrum reprehenderit saepe libero, ad mollitia corrupti maiores!</p>
            <div className="product-buttons">
                <a className="btn btn-info" href="#">מידע נוסף</a>
                <a className="btn btn-buy" href="#">לקנות</a>
            </div>
        </div>
        </section>
     )
}

export default mainsection;