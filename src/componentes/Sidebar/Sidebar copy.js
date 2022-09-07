import React from "react";

import "./Sidebar.css";

import Button from "@mui/material/Button";

import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// stilos del modal

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* creacion de los iconos */}
      <TwitterIcon className="sidebar__twitterIcon" />
      <a>
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </a>
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <a>
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      </a>
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <a
        style={{
          borderRadius: "24px",
        }}
      >
        <Button
          style={{ margin: "16px 4px 64px 2px" }}
          variant="outlined"
          className="sidebar__tweet"
          fullWidth
        >
          Tweet
        </Button>
      </a>
    </div>
  );
};

export default Sidebar;
