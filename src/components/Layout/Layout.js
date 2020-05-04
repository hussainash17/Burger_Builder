import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrower from '../Navigation/SideDrower/SideDrower'

class Layout extends Component {
    state = {
        showSideDeower: false
    }
    sideDrowerClosedhandler = () => {
        this.setState({
            showSideDeower: false
        })
    }

    sideDrowerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDeower: !prevState.showSideDeower }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar drowerToggleClicked={this.sideDrowerToggleHandler}></Toolbar>
                <SideDrower open={this.state.showSideDeower} closed={this.sideDrowerClosedhandler}></SideDrower>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout
