import React, { Component } from 'react';


class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 5
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000);

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                this.props.onTimeup()
            }
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        let { count } = this.state
        return (
            <div>
                <div>CountDown</div>
                <div>{this.state.count}</div>
            </div>

        )
    }
}

export default CountDown

