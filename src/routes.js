import Dashboard from "views/Dashboard.js";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-layout-11",
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "Clients",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
  },
  {
    name: "Client Settings",
    icon: "nc-icon nc-settings",
    layout: "/admin",
    
  },
  {
    name: "Task",
    icon: "nc-icon nc-layout-11",
    layout: "/admin",
  },
  {
    name: "DeadLines",
    icon: "nc-icon nc-watch-time",
    layout: "/admin",
  },
  {
  name: "Empolyee",
    icon: "nc-icon nc-layout-11",
    layout: "/admin",
  },
];
export default routes;
