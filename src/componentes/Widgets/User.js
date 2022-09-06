import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import axios from "axios";

import "./Widgets.css";

export default class User extends React.Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:8000/usuario/tweetss`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <>
        {this.state.persons.map((person) => (
          <div key={person.id}>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={person.t_foto} src={person.t_foto} />
                </ListItemAvatar>
                <ListItemText
                  primary={person.s_name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        style={{ color: "#9a616d" }}
                      >
                        {person.s_email}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <button
                  className="seguir"
                  style={{
                    borderRadius: "4px",
                    boxSizing: "borderBox",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "400",
                    height: "28px",
                    lineHeight: "26px",
                    border: "none",
                    padding: "1px 10px 1px 9px",
                    background: "#f4511e",
                    position: "relative",
                  }}
                >
                  Follow
                </button>
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </div>
        ))}
      </>
    );
  }
}
