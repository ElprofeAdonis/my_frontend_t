import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <a href="/home">
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </a>
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <a href="/profile">
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      </a>
      <SidebarOption Icon={MoreHorizIcon} text="More" />
    </div>
  );
};

export default Sidebar;
