import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    grid: {
        marginTop: '80px',
    },
    title: {
      flexGrow: 1,
      letterSpacing: '5px'
    },
    paper: {
        margin: theme.spacing(4),
        padding: theme.spacing(2),
        borderRadius: '0px',
    }
  }));

export default function Party(props) {
    const classes = useStyles();
    const { partyId } = props.match.params;

    const [queue, setQueue] = useState([]);

    useEffect(() => {
        const fetchQueue = async () => {
            const result = await axios(
                `http://localhost:5000/queue?session=${partyId}`,
            );
            setQueue(result.data);
        };
        fetchQueue();
    }, [partyId])

    useEffect(() => {
        let eventSource = new EventSource(`http://localhost:5000/stream/queue?session=${partyId}`);
        eventSource.onmessage = e => setQueue(JSON.parse(e.data).content.songs);
    }, [partyId]);

    return (
        <div className={classes.root}>
            <Navbar /> 
            <Grid container className={classes.grid}>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>Current Song</Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    {queue.map(function(song, index) {
                        return <Paper className={classes.paper} key={index}>{song}</Paper>
                    })}
                </Grid>
            </Grid>
        </div>
    );
};