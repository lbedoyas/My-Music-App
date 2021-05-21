import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './FavoriteList.scss';

let ArrayFavorites = [];
const FavoriteList = () => {
    useEffect(()=>{
        let ArrayLocalStorage = window.localStorage.getItem('Songs');
        ArrayFavorites = JSON.parse(ArrayLocalStorage)
    },[])

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
    });
    const classes = useStyles();

    return (
        <>
        <div className="row">
        {ArrayFavorites.map((track) => {
                return (
                <div className="songsList__cards" key={track.id}>
                    <div className="col-12">
                    <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={track.album.images[0].url}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                {track.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {track.artists[0].name}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </div>
                </div>
                )
            })}
        </div>
    </>
    )
}

export default FavoriteList
