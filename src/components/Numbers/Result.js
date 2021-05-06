import React, { PureComponent } from 'react'

export default class Result extends PureComponent {
    render() {
        return (
            <div>
                <li>{this.props.result}</li>
            </div>
        )
    }
}
