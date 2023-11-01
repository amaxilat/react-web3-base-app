import React, {Component} from 'react'
import './App.css'

class App extends Component {
    componentDidMount() {
        this.handleAccountsChanged()
    }

    async handleAccountsChanged() {
        let app = this;
        window.ethereum
            .request({method: 'eth_requestAccounts'})
            .then(function () {
                window.ethereum.request({method: 'eth_accounts'})
                    .then(function (accounts) {
                        app.setState({account: accounts[0]})
                    });
            })
            .catch((err) => {
                if (err.code === 4001) {
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            });
    }

    constructor(props) {
        super(props)
        this.state = {account: ''}
    }

    render() {
        return (<div className="container">
            <h1>Hello, World!</h1>
            <p>Your account: {this.state.account}</p>
        </div>);
    }
}

export default App;
