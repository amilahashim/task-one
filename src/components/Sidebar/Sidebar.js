
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
//import logo from "logo.svg";
function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
       <div className="logo">
        <a
          href="#logo"
          className="simple-text logo-mini"> <div className="logo-img">
          <img className="-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;"
           src="http://schedulizemanager.crosip.com/static/media/favicon.420115fa.png" alt=""/>
          </div>
        </a>
        <a href="#logo">
<img className="-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" 
src="http://schedulizemanager.crosip.com/static/media/logo.99b04b0e.png" width="900" height="20" alt=""></img>
        </a><hr/>
        <div>
        <img className="-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms; rounded-circle"
         src="http://schedulizemanager.crosip.com/static/media/ayo-ogunseinde-2.f4af8f2c.jpg" width="50" height="50" alt=""/>
        </div>
      </div> 
  
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
