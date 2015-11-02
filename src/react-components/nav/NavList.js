// third party imports
import React, {Component} from 'react'
// local imports
import NavItem from './NavItem'

/**
 * A wrapper for horizontally listed items to be displayed in the Nav.
 */

export default class NavList extends Component {
    render() {
        const navNodes = this.props.content.nodes.map((node) => {
            return (
                <NavItem title={node.title} hyperlink={node.hyperlink} />
            )
        })
        return (
            <div className='navList'>
                {navNodes}
            </div>
        )
    }
}
