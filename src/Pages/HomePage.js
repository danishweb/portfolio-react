import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import {Link} from 'react-router-dom';
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
            <Link className="sm-handles">
                <InstagramIcon className="s-media insta" />
            </Link>
            <Link className="sm-handles">
                <GitHubIcon className="s-media gh" />
            </Link >
            <Link className="sm-handles">
                <YouTubeIcon className="s-media yt" />
            </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
