import React, { Component } from 'react'

class Classcomp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {
        const { count } = this.state
        const { step } = this.props

        return(
            <div>
                <h1> {count} </h1>
                <h2> Step Interval: {step}</h2>
                <button onClick = {() => {this.setState({ count: count + step})}}> Click Me! </button>
            </div>
        )
    }

}

export default Classcomp
