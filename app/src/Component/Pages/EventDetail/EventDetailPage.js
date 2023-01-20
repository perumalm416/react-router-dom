import { useNavigate, useParams } from "react-router-dom";

const dummyEvents = [
  { id: "eventId_1", event: "New year ", year: 2023 },
  { id: "eventId_2", event: "Pongal festival ", year: 2023 },
  { id: "eventId_3", event: "Republic day ", year: 2023 },
  { id: "eventId_4", event: "Tamil New year ", year: 2023 },
  { id: "eventId_5", event: "Birth Day ", year: 2023 },
  { id: "eventId_6", event: "Diwali festival ", year: 2023 },
];

export const EventDetailPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const filterEvent = dummyEvents.filter((event) => event.id === param.eventId);

  const onEditEventHandler = () => {
    navigate(`/event/${filterEvent[0].id}/edit`);
  };
  
  return (
    <>
      <h2>Event Detail Page</h2>
      <div>
        <h4>
          Event : {filterEvent[0].event} Year: {filterEvent[0].year}
        </h4>
        <button type="button"  onClick={onEditEventHandler}>
          Edit
        </button>
      </div>
    </>
  );
};
