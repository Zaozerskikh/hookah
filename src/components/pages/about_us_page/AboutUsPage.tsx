import './AboutUsPage.css'
import React, {useState} from "react";

const AboutUsPage: React.FC = () => {
  useState(() => {
    window.scrollTo({ top: 0 });
  })

  return(
    <div>About us Page</div>
  )
}

export default AboutUsPage;
