import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Link,
  Dialog,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  
  },
  card: {
    minWidth: 500,
    maxWidth: 700,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  registerLink: {
    display: 'block',
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Register(props) {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Sign Up
          </Typography>
          <form className={classes.form}>
          <TextField label="Name" type="text" required />
            <TextField label="Email" type="email" required />
            <TextField label="Password" type="password" required />
            <TextField
              label="register As"
              select
              value="v"
              variant="standard"
              required
            >
            <MenuItem value="hospital">Hospital Admin</MenuItem>
              <MenuItem value="agency">Insurance Agency Admin</MenuItem>
              <MenuItem value="org">Employer</MenuItem>
            </TextField>
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </form>
          <Link className={classes.registerLink}>
           Already have an account? Sign in
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

