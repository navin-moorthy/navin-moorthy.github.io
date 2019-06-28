import "typeface-cantata-one";
import "typeface-montserrat";
import "./src/styles/globalStyles.css";
import "./src/styles/prism-a11y-dark.css";

import { siteFBAppID } from "./config/website";

export const onInitialClientRender = () => {
  if (siteFBAppID) {
    window.fbAsyncInit = function() {
      FB.init({
        appId: siteFBAppID,
        xfbml: true,
        version: "v3.2"
      });
      FB.AppEvents.logPageView();
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
};
