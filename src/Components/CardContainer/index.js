import React from 'react';
import { Grid, Card, Tooltip } from '@material-ui/core';
import './style.css';
import { connect } from 'react-redux';
import { getMaxSalary, getMinSalary, getAverageSalary, getTotalSalary } from '../../helper/common';

const CardStyle = {
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: 'xxx-large'
}

const CardContainer = ({ graphData }) => {
    const maxSalary = (graphData.length !== 0 && getMaxSalary(graphData)) || 0
    const minSalary = (graphData.length !== 0 && getMinSalary(graphData)) || 0
    const avgSalary = (graphData.length !== 0 && getAverageSalary(graphData)) || 0
    const totalSalary = (graphData.length !== 0 && getTotalSalary(graphData)) || 0

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={3} sm={6}>
                <Card className="card card1">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Total Salary
                        </Grid>
                        <Tooltip title={`${totalSalary}`}>
                            <Grid item xs={12} style={CardStyle}>
                                ₹ {totalSalary}
                            </Grid>
                        </Tooltip>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Card className="card card2">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Average Salary
                        </Grid>
                        <Tooltip title={`${avgSalary}`}>
                            <Grid item xs={12} style={CardStyle}>
                                ₹ {avgSalary}
                            </Grid>
                        </Tooltip>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Card className="card card3">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Maximum Salary
                        </Grid>
                        <Tooltip title={`${maxSalary}`}>
                            <Grid item xs={12} style={CardStyle}>
                                ₹ {maxSalary}
                            </Grid>
                        </Tooltip>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Card className="card card4">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Minimum Salary
                        </Grid>
                        <Tooltip title={`${minSalary}`}>
                            <Grid item xs={12} style={CardStyle}>
                                ₹ {minSalary}
                            </Grid>
                        </Tooltip>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    const dataManipulation = state.dataManipulation;
    return { graphData: dataManipulation.graphData || [] };
};

export default connect(mapStateToProps)(CardContainer);