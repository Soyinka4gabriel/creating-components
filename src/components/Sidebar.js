import React from "react";

    const asideStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }
const Sidebar = (props) => {
    return ( 
        <aside 
        style={asideStyle}
        className="sidebar-component">
            <h2>{props.greet}  from Sidebar</h2>
        </aside>
     );
} 
 
export default Sidebar;