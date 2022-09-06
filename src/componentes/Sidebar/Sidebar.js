import React from "react";
import "./Sidebar.css";

import SidebarOption from "./SidebarOption";

import { Button } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Sidebar = () => {
  const [userId, setUserId] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const getData = () => {
    return {
      userId: localStorage.getItem("userId"),
      email: localStorage.getItem("email"),
      name: localStorage.getItem("name"),
      role: localStorage.getItem("role"),
    };
  };
  React.useEffect(() => {
    const { userId, email, name, role } = getData();
    setUserId(userId);
    setName(name);
    setEmail(email);
    setRole(role);
  }, []);

  return (
    <div className="sidebar">
      <a href="/home">
        <SidebarOption Icon={HomeIcon} active={true} text="Home" />
      </a>
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <a href="/profile">
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      </a>
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <div style={{ padding: "12px 12px 12px 12px" }}>
        <Button id="tweet">Tweet</Button>
      </div>
      <div style={{ padding: "10px" }}>
        <a href="/login">
          <Button id="tweett">Salir</Button>
        </a>
      </div>

      <div
        style={{
          display: "flex",
          padding: "8px",
          width: "70px",
          height: "50px",
          padding: "30px 16px 16px 8px",
          // border: "1px solid red",
          margin: "32px 8px 16px 32px",
        }}
      >
        <div>
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "76px",
              padding: "4px",
            }}
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="Todo bien"
          />
        </div>
        <div>
          <div>
            <span style={{ color: "#9a616d" }}>{name}</span>
          </div>
          <div>
            <span style={{ color: "#9a616d" }}>{email}</span>
          </div>
          <div>
            <span style={{ color: "#9a616d" }}>{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
