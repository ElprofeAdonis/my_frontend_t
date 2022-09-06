import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ModeloComentario = ({ infoApi }) => {
  return (
    <>
      {infoApi.map((el) => (
        <div key={el.id}>
          <List
            sx={{
              width: "400px",
              maxWidth: 360,
              background: "#f4511e",
              borderRadius: "10px",
              margin: "8px",
              boxShadow: "0 0 24px hsl(210 14% 90%)",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={el.c_foto} />
              </ListItemAvatar>
              <ListItemText
                primary="username"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {el.c_comentario}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </div>
      ))}
    </>
  );
};

export default ModeloComentario;
