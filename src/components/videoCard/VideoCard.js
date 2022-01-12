import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="video">
<Link to={`/details/${video.id}`}>
      <Card className= "card" style={{ width: "320px", height:"350px" , marginBottom :"10px", marginTop: "10px"}}>
      <iframe
          title={video.id}
          width="320"
          height="250"
          src={video.src}
        ></iframe> 
        <Card.Body>
        
          <Card.Title style={{fontSize:"15px"}}>{video.title}</Card.Title>
          <Card.Text style={{fontSize:"15px"}}> {video.description}  <i class="fas fa-chevron-circle-down"></i>
          <br/>
          {video.vues}</Card.Text>
         
        </Card.Body>
      </Card>
      </Link>
    </div>
  );
};

export default VideoCard;
