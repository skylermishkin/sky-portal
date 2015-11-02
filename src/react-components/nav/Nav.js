// third party imports
import React, {Component} from 'react'
// local imports
import NavList from './NavList'

/**
 * A top nav-bar with horizontally listed items.
 */

export default class Nav extends Component {
    render() {
        return (
            <div className='navBar'>
                <NavList content={this.props.content} />
            </div>
        )
    }
}
