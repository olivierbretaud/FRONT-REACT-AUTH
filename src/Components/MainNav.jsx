import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserConnection from '../Components/UserConnection'


export class MainNav extends Component {

  render() {
    return (
        <div className="main-nav">
            <div></div>
            <UserConnection user={this.props.user}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNav)
