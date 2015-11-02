// third party imports
import React, {Component} from 'react'

/**
 * A wrapper for a div holding the long explanation of the subject in the Profile element.
 */

export default class Long extends Component {
    render() {
        return (
            <div>
                <h3>More Info</h3>
                <span>{this.props.text}</span>
            </div>
        )
    }
}
