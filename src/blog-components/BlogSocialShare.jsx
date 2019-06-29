import React from "react";
import PropTypes from "prop-types";
import tw from "tailwind.macro";

// Components
import ShareIconWrapper from "../components/ShareIconWrapper";

const SocialShare = tw.div`text-right h-full`;

const sharerWindowOpen = href => {
  window.open(`${href}`, "sharer", "toolbar=0,status=0,width=626,height=436");
};

const BlogSocialShare = ({ title }) => {
  const text = `Checkout this amazing article on "${title}" by @navin_navi19`;

  const onClickTwitterIcon = e => {
    e.preventDefault();

    return sharerWindowOpen(
      `https://twitter.com/intent/tweet/?url=${encodeURI(
        window.location.href
      )}&text=${text}&hashtags=100DaysOfCode`
    );
  };

  const onClickFacebookIcon = e => {
    e.preventDefault();
    return sharerWindowOpen(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
        window.location.href
      )}`
    );
  };

  return (
    <SocialShare>
      <ShareIconWrapper
        text="Share on Twitter"
        bg="#38A1F3"
        hoverbg="#38a1f3cf"
        onClick={onClickTwitterIcon}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#fff"
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
          />
        </svg>
      </ShareIconWrapper>
      <ShareIconWrapper
        text="Share on Facebook"
        bg="#3b5998"
        hoverbg="#3b5998c9"
        onClick={onClickFacebookIcon}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#fff"
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          />
        </svg>
      </ShareIconWrapper>
    </SocialShare>
  );
};

export default BlogSocialShare;

BlogSocialShare.propTypes = {
  title: PropTypes.string.isRequired
};
