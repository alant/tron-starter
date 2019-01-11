import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
})

const EditBtn = withRouter(({ history }) => (
  <Button color="inherit" onClick={() => { history.push('/edit') }}>
    Edit
  </Button>
))

const HomeBtn = withRouter(({ history }) => (
  <Button color="inherit" onClick={() => { history.push('/') }}>
    Home
  </Button>
))

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className="App">
          <CssBaseline />
          <AppBar position="static" color="default" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" align="left" noWrap className={classes.toolbarTitle}>
                Tron Dapp
              </Typography>
              <HomeBtn />
              <EditBtn />
            </Toolbar>
          </AppBar>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/edit" component={Edit} />
          </main>
          <p> Built by alant with <span role="img" aria-label="Love">❤️</span> </p>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
