import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import cssStyle from "./EventDetail.module.css"

export const EventDetailPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const eventFetchInfo = useRouteLoaderData("event-info");

  const eventIndex = eventFetchInfo.findIndex(
    (event) => event.eventId === param.eventId
  );
  const onEditEventHandler = () => {
    navigate(`/event/${eventFetchInfo[eventIndex].id}/edit`);
  };
  const onDeleteHandler = () => {};
  return (
    <>
      <h2>Event Details</h2>
      <div className={cssStyle.eventDetail}>
        <img src={eventFetchInfo[eventIndex].eventImage} width="300" />
        <h4>Event Name: {eventFetchInfo[eventIndex].eventName}</h4>
        <h4>Year : {eventFetchInfo[eventIndex].eventYear}</h4>
        <div>
          <button type="button" onClick={onEditEventHandler}>
            Edit
          </button>
          <button type="button" onClick={onDeleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
