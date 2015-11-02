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
                <Tile title={node.title} hyperlink={node.hyperlink} description={node.description} />
            )
        })
        return (
            <div>
                {expNodes}
            </div>
        )
    }
}
