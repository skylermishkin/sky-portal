// third party imports
import React, {Component} from 'react'
// local imports
import Tile from './Tile'

/**
 * A right side div with content about the subject as tiles.
 */

export default class Exp extends Component {
    render() {
        const expNodes = this.props.content.nodes.map((node) => {
            return (
                <Tile key={node.title} title={node.title} hyperlink={node.hyperlink} description={node.description} />
            )
        })
        return (
            <div id='exp' style={styles} >
                {expNodes}
            </div>
        )
    }
}

const styles = {
    float: 'left',
    padding: 'none',
    width: '55%',
}
