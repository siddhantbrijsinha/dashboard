import React from 'react';
import { Grid, Card } from '@material-ui/core';
import './style.css';

const CardContainer = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={3} sm={6}>
                <Card className="card card1">
                    Primary Card
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Card className="card card2">
                    Warning Card
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Card className="card card3">
                    Success  Card
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Card className="card card4">
                    Danger Card
                </Card>
            </Grid>
        </Grid>
    )
}

export default CardContainer;