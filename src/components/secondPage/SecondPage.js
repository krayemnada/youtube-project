import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SecondPage = ({ videoData, handleShow }) => {
           const {id}=useParams()
    return (
        <div>
            {/* <div>
              {videoData.filter(elt =>elt.id==id).map(elt =>
              <div>
                <iframe
                    width="560"
                    height="315"
                    src={elt.src}
                    title={elt.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                </div>
                )}
            </div>
            <div>
              <Button onClick={handleShow}>Comments</Button>
            </div> */}
        </div>
    );
};

export default SecondPage;
