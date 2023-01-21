import "./App.css";
import { RootLayout } from "./Component/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Component/Pages/Home/index";
import { EventPage, EventLoader as EventFetch } from "./Component/Pages/Event";
import { NewEventPage } from "./Component/Pages/NewEvent/NewEventPage";
import { Fragment } from "react";
import { EventDetailPage } from "./Component/Pages/EventDetail/EventDetailPage";
import { EditEventPage } from "./Component/Pages/EditEvent/EditEventPage";
import { EventRootLayout } from "./Component/EventRootLayout";
import EventAction from "./Component/Pages/NewEvent/NewEventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h2>Error</h2>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "event",
        element: <EventRootLayout />,
        loader: EventFetch,
        id: "event-info",
        children: [
          { index: true, element: <EventPage /> },
          {
            path: ":eventId",
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage /> },
            ],
          },      
          { path: "new-event", element: <NewEventPage />, action: EventAction },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
