import React from 'react';
import Axios from 'axios';

export default class LoginForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        password: '',
        username: ''
    }

}
    handleUsername = (event) => {
        this.setState({ 
            username: event.target.value
        });
    };
    handlePassword = (event) => {
        this.setState({
            password: event.target.value 
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            password: this.state.password,
            username: this.state.username

        };
        Axios.post('http://localhost:9191/addUser', user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="loginForm">
                <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Username" value={this.state.username}
                    onChange={this.handleUsername} required
                />
                <input
                    placeholder="Password" value={this.state.password}
                    onChange={this.handlePassword} required
                />
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}
