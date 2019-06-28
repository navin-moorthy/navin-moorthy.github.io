import React from "react";
import tw from "tailwind.macro";

// Components
import FacebookShareIcon from "../components/FaceBookShareIcon";
import TwitterShareIcon from "../components/TwitterShareIcon";

const SocialShare = tw.div`text-right h-full`;

const shareToFacebook = (href, text) => {
  window.FB.ui({
    method: "share",
    mobile_iframe: true,
    href,
    quote: text
  });
};

const shareToTwitter = (href, text) => {
  window.open(
    `https://twitter.com/share?url=${encodeURI(encodeURI(href))}&text=${text}`,
    "sharer",
    "toolbar=0,status=0,width=626,height=436"
  );
};

const BlogSocialShare = ({ title }) => {
  const text = `Recommend on "${title}" written by Navin Navi`;

  const onClickTwitterIcon = e => {
    e.preventDefault();

    return shareToTwitter(window.location.href, text);
  };

  const onClickFacebookIcon = e => {
    e.preventDefault();
    return shareToFacebook(window.location.href, text);
  };

  return (
    <SocialShare>
      <FacebookShareIcon onClick={onClickFacebookIcon} />
      <TwitterShareIcon onClick={onClickTwitterIcon} />
    </SocialShare>
  );
};

export default BlogSocialShare;
