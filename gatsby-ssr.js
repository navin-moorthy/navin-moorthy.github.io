/* eslint-disable react/jsx-key */
/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { stripIndent } from "common-tags";
import config from "./config/website";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="plugin-facebook-analytics"
      dangerouslySetInnerHTML={{
        __html: stripIndent(`
            window.fbAsyncInit = function() {
              FB.init({
                appId: "${config.fbAppId}",
                autoLogAppEvents: true,
                xfbml: true,
                version: "v6.0"
              });
              FB.AppEvents.logPageView();
            };
            (function(d, s, id){
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) {return;}
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_US/sdk.js";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        `)
      }}
    />,
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    />
  ]);
};
