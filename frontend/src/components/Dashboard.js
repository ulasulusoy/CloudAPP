import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import {
  People as PeopleIcon,
  ShoppingCart as ProductIcon,
  Category as CategoryIcon,
  Receipt as OrderIcon,
} from '@material-ui/icons';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  icon: {
    fontSize: 40,
    marginBottom: theme.spacing(2),
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [stats, setStats] = useState({
    total_users: 0,
    total_products: 0,
    total_orders: 0,
    total_categories: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/stats`);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    }
  };

  const statCards = [
    { title: 'Total Users', value: stats.total_users, icon: <PeopleIcon className={classes.icon} /> },
    { title: 'Total Products', value: stats.total_products, icon: <ProductIcon className={classes.icon} /> },
    { title: 'Total Categories', value: stats.total_categories, icon: <CategoryIcon className={classes.icon} /> },
    { title: 'Total Orders', value: stats.total_orders, icon: <OrderIcon className={classes.icon} /> },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {statCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Paper className={classes.paper}>
              {card.icon}
              <Typography variant="h6" component="h2">
                {card.title}
              </Typography>
              <Typography variant="h4" component="p">
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;
