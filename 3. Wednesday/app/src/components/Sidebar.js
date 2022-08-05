import React from 'react';
import SidebarLink from "./SidebarLink"



export default class Sidebar extends React.Component {
    render() {
        return <article className="App-sidebar">
        <h2>Site navigation.</h2>
        <ul class="navigationList">
            <SidebarLink text ="Example"/>
            <SidebarLink text ="of"/>
            <SidebarLink text ="Buttons"/>
        </ul>
    </article >
    }
}
