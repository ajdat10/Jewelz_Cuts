import React, { Component } from "react";
import TextInput from "../components/TextInput.js";
import { __LoginUser } from '../services/UserServices.js'

export default class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            formError: false
        }
    }

    handleChange = ({target }) => {
        this.setState ({ [target.name]: target.value, formError: false})
        console.log(this.state)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const loginData = await __LoginUser(this.state)
            this.props.toggleAuthenticated(true, loginData.user, () => 
            this.props.history.push('profile'))
        } catch (error) {
            this.setState({formError: true})
        }
    }
    remder() {
        const {email, password} = this.setState
        return (
            <div className='signin flex-col'>
                <form className='flex-col' onSubmit={this.handleSubmit}>
                    <TextInput
                    placeholder='Your Email'
                    name='email'
                    type='email'
                    value={email}
                    onChange={this.handleChange}
                    />
                    <TextInput
                    placeholder='Password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={this.handleChange}
                    />
                    <button>Sign In</button>
                    {this.state.formError ? <p>Error While Logging In</p> : <p></p>}
                </form>
            </div>
        )
    }
}