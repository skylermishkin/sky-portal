// third party imports
import React, {Component} from 'react'

/**
 * A wrapper for a div holding a short description of the subject in the Profile element.
 */

export default class Short extends Component {
    render() {
        const bullets = this.props.bullets.map((item) => {
            return (
                <li key={item}>
                    <span>{item}</span>
                </li>
            )
        })
        return (
            <div>
                <h3>Quick Info</h3>
                <ul>
                    {bullets}
                </ul>
                <span>{this.props.text}</span>
            </div>
        )
    }
}
