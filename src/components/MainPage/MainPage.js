import React, { Component } from 'react';
import './MainPage.css';
import Results from '../Results/Results';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade, withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
// import { Link, Redirect } from 'react-router-dom';

const useStyles = theme => ({
  search: {
    position: 'relative',
    borderRadius: '30px',
    boxShadow: '1px 2px 1px #9E9E9E',
    border: '1px solid #000000',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5f6368',
    marginTop: '-0.4%'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
});

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      results: [],
      length: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    // handle the re routing to main page
    var bodyFormData = new FormData();
    bodyFormData.set('text', this.state.text);
    let redirect = false;
    axios({
      url: '/search',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: bodyFormData,
      method: 'post'
    })
      .then(response => {
        // re route to results page
        redirect = true;
        console.log(response.data);
        this.setState({ results: response.data, length: 1 });
      })
      .catch(function(error) {
        console.log(error);
      });

    event.preventDefault();
  }

  render() {
    let { classes } = this.props;
    if (this.state.length == 0) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className='MainPage centered'>
            <Typography
              variant='h2'
              style={{
                marginBottom: '2%',
                marginTop: '4%',
                textAlign: 'center'
              }}
            >
              <span
                style={{
                  paddingRight: '.5%',
                  color: 'blue',
                  fontWeight: 'bold'
                }}
              >
                T
              </span>
              <span
                style={{
                  paddingRight: '.5%',
                  color: 'red',
                  fontWeight: 'bold'
                }}
              >
                a
              </span>
              <span
                style={{
                  paddingRight: '.5%',
                  color: 'yellow',
                  fontWeight: 'bold'
                }}
              >
                p
              </span>
              <span
                style={{
                  paddingRight: '.5%',
                  color: 'blue',
                  fontWeight: 'bold'
                }}
              >
                s
              </span>
              <span
                style={{
                  paddingRight: '.5%',
                  color: 'green',
                  fontWeight: 'bold'
                }}
              >
                e
              </span>
              <span
                style={{
                  paddingRight: '.5%',
                  color: 'red',
                  fontWeight: 'bold'
                }}
              >
                a
              </span>
              <span
                style={{ paddingRight: '.5%', color: '', fontWeight: 'bold' }}
              >
                r
              </span>
              <span
                style={{
                  paddingRight: '.5%',
                  color: 'green',
                  fontWeight: 'bold'
                }}
              >
                c
              </span>
              <span
                style={{
                  paddingRight: '.5%',
                  color: 'blue',
                  fontWeight: 'bold'
                }}
              >
                h
              </span>
            </Typography>

            <div
              className={classes.search}
              style={{
                marginBottom: '1%',
                width: '40%',
                padding: '.2% 10px',
                alignSelf: 'center'
              }}
            >
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                required='True'
                value={this.state.text}
                onChange={this.handleChange}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className='MainPage-buttons'>
              <Button
                variant='contained'
                className='MainPage-buttons--button'
                type='submit'
                value='Submit'
              >
                Search
              </Button>
              <Button variant='contained' className='MainPage-buttons--button '>
                View All
              </Button>
            </div>
          </div>
        </form>
      );
    } else {
      return <Results data={this.state.results} />;
    }
  }
}

export default withStyles(useStyles)(MainPage);
