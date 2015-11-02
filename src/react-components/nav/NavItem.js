// third party imports
import React, {Component} from 'react'

/**
 * A wrapper for the Nav items/links.
 */

export default class NavItem extends Component {
    render() {
        return (
            <div className='navItem'>
                <a href={this.props.hyperlink}>
                    <span>{this.props.title}</span>
                </a>
            </div>
        )
    }
}
