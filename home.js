import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { movePage } from './redux'
import {store} from './redux'

import Menu from "./app/menu.js"
import Inquiry from "./app/inquiry.js"
// import Training from "./app/training.js"
// import Method from "./app/method.js"
// import Warning from "./app/warning.js"

export class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var state = store.getState()
        var name = state.user.name
        switch (name) {
            case 'menu': 
                return <Menu />
            case 'inquiry': 
                return <Inquiry />
            // case 'training':
            //     return <Training />
            // case 'method':
            //     return <Method />
            // case 'warning':
            //     return <Warning />
        }
    }
}


const mapStateToProps = state => ({
    // nameにjsonから取って来たデータを代入 
    name: state.user.name
})
  
const mapDispatchToProps = {
    // importしたactionCreator
    movePage
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)