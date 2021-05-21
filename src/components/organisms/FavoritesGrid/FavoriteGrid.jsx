import React from 'react';
import FavoriteList from '../../molecules/FavoritesLists/FavoriteList';

const FavoriteGrid = () => {
    return (
        <div>
            <div className="Home__Container">
            <div className="row">
                <div className="col-12">
                    <FavoriteList/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FavoriteGrid
