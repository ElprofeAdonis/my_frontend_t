// import React, { useEffect } from "react";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import RepeatIcon from "@mui/icons-material/Repeat";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import PublishIcon from "@mui/icons-material/Publish";
// import { Avatar, Button } from "@mui/material";

// import "./PostTweets.css";
// // import ConteoComentario from "./ConteoComentario";
// // import CorazonMegustas from "./CorazonMegustas";
// // import Etiquetas from "./Etiquetas";

// import ComentariosTweet from "./ComentariosTweet";

// const PostTweeter = ({ infoApi }) => {
//   return (
//     <>
//       {infoApi.map((el) => (
//         <div key={el.id}>
//           <div style={{ display: "flex" }}>
//             <div>
//               <div className="post__avatar">
//                 <Avatar
//                   style={{ width: "100px", height: "90px" }}
//                   src={el.t_foto}
//                 />
//               </div>
//             </div>
//             <div style={{ width: "370px" }}>
//               <div className="post__header">
//                 <div className="post__headerText">
//                   <h3>
//                     Adonis Aleman
//                     <span className="post__headerSpecial">
//                       <VerifiedUserIcon className="post__badge" /> @ autorId{" "}
//                       {el.s.name}
//                     </span>
//                   </h3>
//                 </div>
//                 <div className="post__headerDescription">
//                   <p>{el.t_comentario}</p>
//                 </div>
//               </div>
//               <img
//                 style={{ margin: "8px", width: "350px", borderRadius: "8px" }}
//                 src={el.t_foto}
//                 alt={el.t_foto}
//               />
//             </div>
//           </div>

//           {/* son los botones */}

//           <div className="post__footer">
//             <Button>
//               <ChatBubbleOutlineIcon fontSize="small" />
//             </Button>
//             {/* <ConteoComentario /> */}

//             <RepeatIcon fontSize="small" />
//             {/* <Etiquetas /> */}
//             <FavoriteBorderIcon fontSize="small" />
//             {/* <CorazonMegustas /> */}
//             <PublishIcon fontSize="small" />
//           </div>
//           <div className="Comentarios" style={{ width: "540px" }}>
//             <ComentariosTweet />
//           </div>
//           <font className="message">
//             <input name="usermsg" type="text" id="usermsg" />
//             <input name="submitmsg" type="submit" id="submitmsg" value="Send" />
//           </font>
//         </div>
//       ))}
//     </>
//   );
// };

// export default PostTweeter;
