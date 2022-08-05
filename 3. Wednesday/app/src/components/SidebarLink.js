import React from 'react';




export default class SidebarLink extends React.Component {
    render() {
        return     <li><button>{this.props.text}</button></li>
    }
}
