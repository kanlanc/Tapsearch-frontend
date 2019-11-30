import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

          <Button>
            <Link
              to='/addnewdoc'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Add new
            </Link>
          </Button>
          <Button>
            <Link
              to='/'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Search
            </Link>
          </Button>
          <Button>
            <Link
              to='/clear'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Clear
            </Link>{' '}
          </Button>
          <Button>
            <Link
              to='/viewall'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              View{' '}
            </Link>{' '}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
