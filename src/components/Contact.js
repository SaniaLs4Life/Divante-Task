import React from 'react';
import { MdPermContactCalendar } from 'react-icons/md';

import './AboutContact.scss';

export default function Contact() {
  return (
    <div className="about__container">
      <div className="about__container--information">
        <MdPermContactCalendar
          className="about__container--information__icon"
        />
        <div className="about__container--information__title">Contact</div>
        <div className="about__container--information__contact">
          divante@divante.pl
        </div>
        <div className="about__container--information__contact">
          <div> tel. 123 - 456 - 789</div>
          <div>tel. 887 - 236 - 324</div>
        </div>
        <div className="about__container--information__contact">
          <div>ul. Dmowskiego 17</div>
          <div>00 - 000 Wroclaw</div>
        </div>
      </div>
    </div>
  );
}
