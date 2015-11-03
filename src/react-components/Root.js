// third party imports
import React, {Component} from 'react'
// local imports
import Nav from './nav/Nav'
import Profile from './profile/Profile'
import Exp from './exp/Exp'
import NavContent from '../content/home/nav-content'
import ProfileContent from '../content/home/profile-content'
import ExpContent from '../content/home/exp-content'

export default class Root extends Component {
    render() {
        return (
            <div>
                <Nav content={NavContent} />
                <Profile content={ProfileContent} />
                <Exp content={ExpContent} />
            </div>
        )
    }
}
