import { ConfigSpeakers } from "./ConfigSpeakers";
import { ConfigSponsors } from "./ConfigSponsors";
import { ConfigPreviousEvents } from "./ConfigPreviousEvents";
import { ConfigSchedule } from "./ConfigSchedule";
export const Config = {
  live: {
    isLive: false,
    link: "http://google.com.ar",
  },
  register: {
    url:
      "https://www.eventbrite.com.ar/e/jornada-de-arquitectura-net-unit-testing-everywhere-2-dias-tickets-103651012970",
  },
  speakers: ConfigSpeakers,
  counter: {
    speakers: 13,
    attendees: 300,
    editions: 3,
    sponsors: 10,
  },

  previousEvents: ConfigPreviousEvents,
  sponsors: ConfigSponsors,
  tellAboutYourself: {
    text: "Contanos sobre vos",
    url: "mailto: info@net-baires.com.ar",
  },
  schedule: ConfigSchedule,
};
