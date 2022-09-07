import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
   return (
    <div className={"navbar"}>
        <NavLink
            className={"link"}
            to={"/"}
        >
            All Entries   
        </NavLink>

        <NavLink
            className={"link"}
            to={"/"}
        >
        Add Entry
        </NavLink>

    </div>
   );
}

export default NavBar;