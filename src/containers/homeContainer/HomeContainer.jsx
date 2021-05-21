import React, {useState, useEffect} from 'react';
import HomeGrid from '../../components/organisms/HomeGrid/HomeGrid';
import { HTTP } from '../../services/SpotifyServices.js'

let Globaltrack = []
const HomeContainer = () => {
    const [tracks, setTracks] = useState([]);
    
    useEffect(() => {
        funcGetInfo();
    }, [])

    const funcGetInfo = async () => {
        try {
            Globaltrack = await HTTP.getTracks();
            console.log(Globaltrack);
            setTracks(Globaltrack)
            console.log(tracks);
        } catch (err) {
            console.log(err);

        }
    }
    return (
        <div>
            {
                tracks ?
                <HomeGrid tracks={tracks}/>:
                <span>renew token</span>
            }

       
        </div>
    )
}
export default HomeContainer
