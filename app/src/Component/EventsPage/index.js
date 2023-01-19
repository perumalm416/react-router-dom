import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cssStyle from "./index.module.css";

const dummyEvents = [
  { id: "eventId_1", event: "New year ", year: 2023 },
  { id: "eventId_2", event: "Pongal festival ", year: 2023 },
  { id: "eventId_3", event: "Republic day ", year: 2023 },
  { id: "eventId_4", event: "Tamil New year ", year: 2023 },
  { id: "eventId_5", event: "Birth Day ", year: 2023 },
  { id: "eventId_6", event: "Diwali festival ", year: 2023 },
];
export const EventPage = () => {
  const navigate = useNavigate();
  
  const onNavigateHandler = (id) => {
    navigate(`${id}`);
  };
  return (
    <>
      <h2>Event Page</h2>
      <ul>
        {dummyEvents.map((eventItem) => (
          <li
            className={cssStyle.eventList}
            key={eventItem.id}
            onClick={onNavigateHandler.bind(this, eventItem.id)}
          >
            {eventItem.event}
          </li>
        ))}
      </ul>
    </>
  );
};
