import React from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import cssStyle from "./index.module.css";


export const EventPage = () => {
  const navigate = useNavigate();
  const eventFetchInfo = useRouteLoaderData("event-info");

  console.log(eventFetchInfo);
  const onNavigateHandler = (id) => {
    navigate(`${id}`);
  };
  return (
    <>
      <h2>Events</h2>
      <ul>
        {eventFetchInfo.map((eventItem) => (
          <li
            className={cssStyle.eventList}
            key={eventItem.eventId}
            onClick={onNavigateHandler.bind(this, eventItem.eventId)}
          >
            {eventItem.eventName}
          </li>
        ))}
      </ul>
    </>
  );
};

export const EventLoader = async () => {
  const response = await fetch(
    "https://router-4221e-default-rtdb.firebaseio.com/events.json"
  );

  if (!response.ok) {
    console.log("fetch failure");
  }
  const responseData = await response.json();
  const fetchedData = [];
  for (let key in responseData) {
    fetchedData.push(responseData[key]);
  }
  return fetchedData;
};
