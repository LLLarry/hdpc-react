import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom'
import { handleSendLogin } from '@/store/actionCreator/login'
class Login extends Component {
    constructor(props){
        super(props)
        this.state= {
            phone: '',
            password: ''
        }
        this.changeVal= this.changeVal.bind(this)
    }
    render() {
        const { login,handleSendLogin }= this.props
        return (
            login.token === 0 ?
            (
                <div style={{margin: 100,width: 300}}>
                    <Form>
                        <Form.Item label="phone" name="phone" >
                            <Input onChange={(v)=>this.changeVal(v,'phone')} />
                        </Form.Item>
                        <Form.Item label="password" name="password" >
                            <Input onChange={(v)=>this.changeVal(v,'password')} />
                        </Form.Item>
                        <Button type="primary" onClick={handleSendLogin.bind(this)}>登陸</Button>
                    </Form>
                </div>
            ) : <Redirect to="/" />
        )
    }
    changeVal(v,type){
       const val= v.target.value
       this.setState(()=>{
           return {
            [type]: val
           }
       })
    }

}
const mapStateToProps= (state)=>{
    return {
        login: state.login
    }
}
const mapDispatchToProps= (dispatch)=>{
    return {
        handleSendLogin(){
            dispatch(handleSendLogin(this.state))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)