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
                <h1 >{this.props.content.title}</h1>
                <img src={this.props.content.image} style={imgStyles} />
                <Short bullets={this.props.content.short.bullets} text={this.props.content.short.text} />
                <Long text={this.props.content.long} />
            </div>
        )
    }
}

const styles = {
    padding: '2%',
    width: '38%',
    height: '50em',
    overflow: 'auto',
    float: 'left',
}
const imgStyles = {
    width: '15em',
}
