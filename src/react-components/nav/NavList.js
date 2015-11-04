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
                <li key={node.title} style={liStyles}>
                    <NavItem title={node.title} hyperlink={node.hyperlink} />
                </li>
            )
        })
        return (
            <div className='navList'>
                <ul style={ulStyles}>
                    {navNodes}
                </ul>
            </div>
        )
    }
}

const ulStyles = {
    listStyleType: 'none',
    overflow: 'hidden',
}
const liStyles = {
    margin: 'none',
    padding: '5px 0px',
    float: 'left',
}
