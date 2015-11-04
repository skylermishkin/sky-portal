// third party imports
import React, {Component} from 'react'

/**
 * A wrapper for a div with a hyperlink title and a description.
 */

export default class ExpContent extends Component {
    render() {
        return (
            <div className='Tile' style={styles} >
                <a href={this.props.hyperlink} >
                    <h3>{this.props.title}</h3>
                </a>
                <span>{this.props.description}</span>
            </div>
        )
    }
}

const styles = {
    width: '85%',
    margin: '2em 0.3em',
    borderWidth: '0.3em',
    borderStyle: 'outset',
    padding: '1em 2em',
}
