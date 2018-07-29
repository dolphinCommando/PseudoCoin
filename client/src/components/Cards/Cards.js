import React from 'react';
import './Cards.css';

const Card = (props) => {
    return (
        <div classNameName="card" style="width: 18rem;">
            <img className="card-img-top" src="..." alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Cryptocurrency</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/wallet" className="btn btn-primary">Go to wallet</a>
            </div>
        </div>
    )
}

export default Cards;