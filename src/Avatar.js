import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component {

    constructor() {
        super();
        this.state = {
            name: "Welcome to Avatar World"
        }
    }

    nameChange(){
        this.setState({
            name: "React States Demo"
        })
    }
git
    render() {
        const avatarlistarray = [
            {
                id: 1,
                name: "jon",
                work: "Web Developer"
            },
            {
                id: 2,
                name: "Vishal",
                work: "Java Developer"
            },
            {
                id: 3,
                name: "Akash",
                work: "UX Designer"
            },
            {
                id: 4,
                name: "Varsha",
                work: "Exacetive HR"
            },
            {
                id: 5,
                name: "Pooja",
                work: "DBA"
            }
        ]


        const arrayavatarcard = avatarlistarray.map((avatar, i) => {
            return <Avatarlist key={i} id={avatarlistarray[i].id}
                name={avatarlistarray[i].name}
                work={avatarlistarray[i].work} />

        })

        return (<div className="mainpage">
            <h1 className="tc"> {this.state.name} </h1>
            {arrayavatarcard}
            <br />
            <button className="ma4" onClick={()=> this.nameChange()}>Click to change</button>
        </div>
        )
    }
}

export default Avatar;