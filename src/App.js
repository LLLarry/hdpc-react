import React,{ Component } from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Authen from '@/router/Authen'
import { superAdminRouter } from '@/router/router.config.js'
import Login from '@c/Login'
class App extends Component {

    render(){
        const { route }= this.props.login
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    {
                        Authen(route)
                    }
                </Switch>
            </Router>
        )
    }
}
const mapStateToProps= (state)=>{
    return {
        login: state.login
    }
}
export default connect(mapStateToProps,null)(App)

