import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Link,
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

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Log In
          </Typography>
          <form className={classes.form}>
            <TextField label="Email" type="email" required />
            <TextField label="Password" type="password" required />
            <TextField
              label="Login As"
              select
              value=""
              variant="standard"
              required
            >
            <MenuItem value="hospital">Hospital</MenuItem>
              <MenuItem value="agency">Agency</MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
              <MenuItem value="org">Organisation</MenuItem>
            </TextField>
            <Button variant="contained" color="primary" type="submit">
              Log In
            </Button>
          </form>
          <Link href="#" className={classes.registerLink}>
            Don't have an account? Register
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

