import React, { useState, useEffect } from "react";
import { instagramFetch } from "./instagramFetch";
import { InstagramFeedContainer } from "./InstagramFeedContainer";

export const InstagramFeed = (props) => {
  // Set state for feed once fetched
  const [feeds, setFeeds] = useState();
  // Is feed loaded or nah? 
  const [isLoaded, setisLoaded] = useState(false);
  
  // URL for graph basic
  let url = `https://graph.instagram.com/me/media?fields=media_count,permalink,media_url&&access_token=${props.token}`;

  useEffect(() => {
    instagramFetch(url, setFeeds, setisLoaded);
  }, [])

  if (!isLoaded) {
    return (
      <div>
        <h1>Not loaded</h1>
      </div>
    );
  }else{
    return (
      <div>
        <InstagramFeedContainer counter={props.counter} feeds={feeds} />
      </div>
    );
  }
}