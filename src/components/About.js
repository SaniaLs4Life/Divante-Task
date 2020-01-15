import React from 'react';
import { MdPermContactCalendar } from 'react-icons/md';

import './AboutContact.scss';

export default function About() {
  return (
    <div className="about__container">
      <div className="about__container--information">
        <MdPermContactCalendar className="about__container--information__icon" />
        <div className="about__container--information__title">About</div>
        <div className="about__container--information__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. eiusmod
          tempor incididunt ut labore et dolore magna aliqua. eiusmod tempor
        </div>
      </div>
    </div>
  );
}
