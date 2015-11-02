// third party imports
import React, {Component} from 'react'

/**
 * A wrapper for a div holding a short description of the subject in the Profile element.
 */

export default class Short extends Component {
    render() {
        return (
            <div>
                <h3>Quick Info</h3>
                <span>{this.props.text}</span>
            </div>
        )
    }
}
