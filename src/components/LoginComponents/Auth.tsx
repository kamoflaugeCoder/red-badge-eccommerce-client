import React, { Component } from "react";
import  Register from "./Register";
import Login from "./Login";
import { Button } from "@material-ui/core";

type LoginProps = {
    updateToken: (newToken: string) => void;
    // updateRole: (newUserIsAdmin: string) => void;
};

// type Register = {
//    updateToken: (newToken: string) => void;
//     // updateRole: (newUserIsAdmin: string) => void;  
// }

type UserState = {
    showLogin: boolean;
};

export default class Auth extends Component<LoginProps, UserState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            showLogin: false,
        };
    }
    loginToggle = (event: any) => {
        event.preventDefault();
        if (this.state.showLogin === false) {
            return this.setState({
                showLogin: true
            });
        }
        if (this.state.showLogin === true) {
            return this.setState({
                showLogin: false
            });
        }
    };
    render() {
        return (
            <div>
                <div>
                    {this.state.showLogin ? (
                        <div>
                            <Register
                                updateToken={this.props.updateToken}
                                // updateRole={this.props.updateRole}
                            />
                        </div>
                    ) : (
                        <div>
                            <Login
                                updateToken={this.props.updateToken}
                                // updateRole={this.props.updateRole}
                            />
                        </div>
                    )}
                    <br />
                    <Button
                        variant="contained"
                        onClick={(e) => {
                            this.loginToggle(e);
                        }}
                    >
                        {this.state.showLogin ? "Login" : "Register"}
                    </Button>
                </div>
            </div>
        );
    }

}
