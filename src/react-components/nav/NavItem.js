// third party imports
import React, {Component} from 'react'

/**
 * A wrapper for the Nav items/links.
 */

export default class NavItem extends Component {
    render() {
        return (
            <div className='navItem' style={styles} >
                <a href={this.props.hyperlink}>
                    <span style={spanStyles}>{this.props.title}</span>
                </a>
            </div>
        )
    }
}

const styles = {
    display: 'block',
    padding: '0.5em 1em',
    margin: '0em 1em',
    backgroundColor: 'rgb(225,225,225)',
    borderRadius: '0.3em',
}
const spanStyles = {
    fontSize: '1.2em',
    fontWeight: 'bold',
}
