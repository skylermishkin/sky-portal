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
            <div id='navBar' style={styles}>
                <NavList content={this.props.content} />
            </div>
        )
    }
}

const styles = {
    margin: 'none',
    padding: '0.1em',
    backgroundColor: 'rgb(45,45,45)',
}
