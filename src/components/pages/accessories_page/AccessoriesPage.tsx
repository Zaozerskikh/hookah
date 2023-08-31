import './AccessoriesPage.css'
import React, {useEffect} from "react";

const AccessoriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  })

  return(
    <div>Accessories Page</div>
  )
}

export default AccessoriesPage;
