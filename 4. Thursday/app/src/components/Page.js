import React from "react";
import "./Page.css"

export default class Page extends React.Component {
    render() {
        return (
            <article className='Page'>
                <h2>{this.props.title}</h2>
                {this.props.component}
            </article>
        )
    }
}