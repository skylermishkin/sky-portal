// third party imports
import React, {Component} from 'react'
// local imports
import Short from './Short'
import Long from './Long'

/**
 * A left side-bar with a profile of the subject.
 */

export default class Profile extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.content.title}</h2>
                <img src={this.props.content.image} />
                <Short text={this.props.content.short} />
                <Long text={this.props.content.long} />
            </div>
        )
    }
}
