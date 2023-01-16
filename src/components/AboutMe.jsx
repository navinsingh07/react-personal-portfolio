import React from "react";
import "./AboutDiv.css";
import { Button } from "@mui/material";
import NavinPdf from "../assets/navin-singh-cv.pdf";
// import dp from '../assets/images/dp.jpg'

const AboutMe = () => {
  return (
    <>
      <div className="about_Sec">
        <div className="about_sec_part">
          <div className="profile-pic"></div>

          <div className="details">
            <p>
              Hi i am Navin Singh. I Have Done BCA From Maharshi Dayanand
              University (MDU). I have knowledge of{" "}
              <b>HTML, CSS, Javascript and React.js.</b> I made several projects
              you can checkout them below 👇. You can Download my Resume Here
            </p>
            <a href={NavinPdf} download="NavinResume">
              <Button variant="contained" component="label">
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
