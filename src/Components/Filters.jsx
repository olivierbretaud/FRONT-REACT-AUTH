import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Filters extends Component {

  render() {
    return (
      <div className="filters-container">
        <img src={process.env.PUBLIC_URL + "assets/images/list-ul-solid.svg"} className="picto-filters"alt="logo"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
