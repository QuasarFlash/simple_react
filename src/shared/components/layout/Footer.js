import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>&copy; Honey {(new Date()).getFullYear()}</footer>
            </div>
        )
    }
}
