import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/css/Explorer.css';

import MainNav from './MainNav';
import Filters from './Filters';
import Search from './Search';
// import axios from 'axios';

export class Explorer extends Component {
    constructor() {
        super() 
        this.state ={
        }
    }

    componentWillMount() {
        // axios.get(`https://restcountries.eu/rest/v2/all`)
        // .then(res => {
        //     const allCountries= res.data;
        //     this.setState({ allCountries })
        // })
    }

  render() {
    return (
      <div className="explorer-container">
        <MainNav />
        <div className="filters-search-container">
        <Filters />
        <Search />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Explorer)
