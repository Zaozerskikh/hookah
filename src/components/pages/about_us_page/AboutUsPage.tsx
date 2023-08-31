import './AboutUsPage.css'
import React, {useEffect} from "react";

const AboutUsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  })

  return(
    <div>About us Page</div>
  )
}

export default AboutUsPage;
