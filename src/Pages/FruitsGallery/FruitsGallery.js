import React from 'react';
import './FruitsGallery.css';
import fruits1 from '../../images/fruitsGallery/fruits1.jpg';
import fruits2 from '../../images/fruitsGallery/fruits2.jpg';
import fruits3 from '../../images/fruitsGallery/fruits3.jpg';
import fruits4 from '../../images/fruitsGallery/fruits4.jpg';
import fruits5 from '../../images/fruitsGallery/fruits5.jpg';
import fruits6 from '../../images/fruitsGallery/fruits6.jpg';
import fruits7 from '../../images/fruitsGallery/fruits7.jpg';
import fruits8 from '../../images/fruitsGallery/fruits8.jpg';
import fruits9 from '../../images/fruitsGallery/fruits9.jpg';

const FruitsGallery = () => {
    return (
        <section className="container my-5">
            <h1 className="my-5 text-center">Fruits Gallery</h1>
            <div className="imagesGallery">
                <div className="mx-auto">
                    <figure>
                        <img src={fruits1} className="img-fluid"/>
                    </figure>
                </div>
                <div className="mx-auto">
                    <figure>
                        <img src={fruits2} className="img-fluid"/>
                    </figure>
                </div>
                <div className="mx-auto">
                    <figure>
                        <img src={fruits3} className="img-fluid"/>
                    </figure>
                </div>
                <div className="mx-auto">
                    <figure>
                        <img src={fruits4} className="img-fluid"/>
                    </figure>
                </div>
                <div className="mx-auto">
                    <figure>
                        <img src={fruits5} className="img-fluid"/>
                    </figure>
                </div>
                <div className="mx-auto">
                    <figure>
                        <img src={fruits6} className="img-fluid"/>
                    </figure>
                </div>
                <div className="mx-auto">
                    <figure>
                        <img src={fruits7} className="img-fluid"/>
                    </figure>
                </div>
                <div className="mx-auto">
                    <figure>
                        <img src={fruits8} className="img-fluid"/>
                    </figure>
                </div>
                <div className="mx-auto">
                    <figure>
                        <img src={fruits9} className="img-fluid"/>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default FruitsGallery;