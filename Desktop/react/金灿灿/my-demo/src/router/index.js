import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from '../pages/index/index'

class Routes extends React.Component {
    render() {
        return <BrowserRouter>
            <div>
                <Main />
            </div>
        </BrowserRouter>
    }
}

export default Routes;