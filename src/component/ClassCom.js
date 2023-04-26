import React from "react";

export default class ClassCom extends React.Component {
    //State trong Component
    constructor(props) {
        super(props);
        this.state = {
            name: "C1122H1"
        }
    }

    componentWillMount() {
        console.log("Will mount: " + new Date().getTime())
        for (let i = 0; i < 1000000; i++) {}
    }

    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <h2>{"Render:" + new Date().getTime()}</h2>
                <input type="text" id={"value"}/>
                <button onClick={this.change}>Change</button>
            </>
        )
    }

    componentDidMount() {
        console.log("Did mount: " + new Date().getTime())
        for (let i = 0; i < 1000000; i++) {}
    }

    componentWillUnmount() {
        console.log("Bye bye: " + new Date().getTime())
        for (let i = 0; i < 1000000; i++) {}
    }

    componentDidUpdate() {
        console.log("DidUpdate: " + new Date().getTime())
        for (let i = 0; i < 1000000; i++) {}
    }

    change = () => {
        let data = document.getElementById("value").value
        this.setState({
            name: data
        })
    }
}
