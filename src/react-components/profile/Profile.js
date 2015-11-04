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
            <div id='profile' style={styles} >
                <h2>{this.props.content.title}</h2>
                <img src={this.props.content.image} style={imgStyles} />
                <Short bullets={this.props.content.short.bullets} text={this.props.content.short.text} />
                <Long text={this.props.content.long} />
            </div>
        )
    }
}

const styles = {
    padding: '10px',
    width: '40%',
    float: 'left',
}
const imgStyles = {
    width: '85%',
}
