import React, { Component } from 'react'

export default class List extends Component {
    state = {
        data: [
            {
                id: 1,
                name: "vishnu",
                age: 22
            },
            {
                id: 2,
                name: "sumesh",
                age: 23
            }
        ]
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map((value, index) => (
                        <li>
                            {value.id} - {value.name} - {value.age}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
