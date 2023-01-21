import { Form, useNavigation } from "react-router-dom";
import cssStyle from "./NewEvent.module.css";

export const NewEventForm = () => {
  const navigation = useNavigation();
  const transistionStatus = navigation.state === "submitting";

  return (
    <>
      <Form method="POST">
        <div className={cssStyle.newEventForm}>
          <label htmlFor="event-name">Event Name</label>
          <input id="event-name" type="text" name="event-name" required />
          <label htmlFor="event-image">Image</label>
          <input id="event-image" type="url" name="event-image" required />
          <label htmlFor="event-year">Year</label>
          <input id="event-year" type="date" name="event-year" required />
          <button type="submit" disabled={transistionStatus}>
            {transistionStatus ? "Procesing..." : "Add Event"}
            {transistionStatus}
          </button>
        </div>
      </Form>
    </>
  );
};

async function EventAction({ request, param }) {
  const data = await request.formData();
  const eventInfo = {
    eventName: data.get("event-name"),
    eventImage: data.get("event-image"),
    eventYear: data.get("event-year"),
    eventId: Math.random().toString(),
  };
  console.log("Event Id : ",Math.random().toString());
  const response = await fetch(
    "https://router-4221e-default-rtdb.firebaseio.com/events.json",
    {
      method: "POST",
      body: JSON.stringify(eventInfo),
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    console.log("Post is Failure occure");
  }
  return await response.json();
}
export default EventAction;
