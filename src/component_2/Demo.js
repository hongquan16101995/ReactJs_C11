import React from "react";

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "C1122H1",
            student: {
                id: 1,
                name: "Sơn",
                age: 20
            }
        }
    }

    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <h1>{this.state.student.id}</h1>
                <h1>{this.state.student.name}</h1>
                <h1>{this.state.student.age}</h1>
                <button onClick={this.change}>Change</button>
                <button onClick={this.change1}>Change</button>
            </>
        )
    }

    change = () => {
        this.setState({
            name: "CodeGym"
        })
    }

    change1 = () => {
        this.state.student.name = "Lực"
        this.setState({
            student: this.state.student
        })
    }
}
