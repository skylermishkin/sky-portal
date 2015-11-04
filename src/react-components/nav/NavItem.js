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
                    <span style={styles}>{this.props.title}</span>
                </a>
            </div>
        )
    }
}

const styles = {
    display: 'block',
    padding: '5px 10px',
    margin: '0px 10px',
    backgroundColor: 'rgb(225,225,225)',
}
