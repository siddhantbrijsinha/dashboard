import React from 'react';
import { Grid } from '@material-ui/core';

const GridStyleOne = {
    fontSize: '2.5rem',
    color: '#212529',
    textAlign: 'left',
    marginBottom: '0.5rem',
    marginTop: '1.5rem',
    fontWeight: '500',
    lineHeight: '1.2'
}

const GridStyleTwo = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0.75rem 1rem',
    marginBottom: '1rem',
    backgroundColor: '#e9ecef',
    borderRadius: '0.25rem'
}

const DashBoard = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} style={GridStyleOne}>
                DashBoard
            </Grid>
            <Grid item xs={12} style={GridStyleTwo}>
                DashBoard
            </Grid>
        </Grid>
    )
}

export default DashBoard;