import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: '#000000'
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{}}>
      <AppBar
        position='static'
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 0 0 #000000' }}
      >
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Tapsearch
          </Typography>
          <Button>Add new</Button>
          <Button>Search</Button>
          <Button>Clear </Button>
          <Button>View </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
