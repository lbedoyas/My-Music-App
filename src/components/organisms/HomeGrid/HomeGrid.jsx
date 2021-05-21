import React from 'react'
import SongsLists from '../../molecules/SongsLists/SongsLists'

const HomeGrid = ({tracks}) => {
    return (
        <div className="Home__Container">
            <div className="row">
                <div className="col-12">
                    <SongsLists tracks={tracks}  />
                </div>
            </div>
        </div>
    )
}

export default HomeGrid
