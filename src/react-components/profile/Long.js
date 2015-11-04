// third party imports
import React, {Component} from 'react'

/**
 * A wrapper for a div holding the long explanation of the subject in the Profile element.
 */

export default class Long extends Component {
    render() {
        return (
            <div>
                <h2>More Info</h2>
                <div>
                    <span>{this.props.text}</span>
                </div>
            </div>
        )
    }
}
