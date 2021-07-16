import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="heading">
        <h1 className="heading-text">
          Hi, I am <span>Danish Shaikh</span>
        </h1>
        <p className="sub-heading">
            I am a Frontend Developer, Through constant practice & learning, I produce
aesthetic webpages to an high standard.
        </p>
        <div className="icons">
            <a className="sm-handles" href="https://www.instagram.com/danish512s/">
                <InstagramIcon className="s-media insta" />
            </a>
            <a href="https://github.com/danishweb/" className="sm-handles"  >
                <GitHubIcon className="s-media gh" />
            </a>
            <a className="sm-handles" href="https://www.youtube.com/channel/UC5N6Quxx4OSMC9hksPqJrCg" >
                <YouTubeIcon className="s-media yt" />
            </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
