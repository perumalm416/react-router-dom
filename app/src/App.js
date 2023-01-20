import "./App.css";
import { RootLayout } from "./Component/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Component/Pages/Home/index";
import { EventPage } from "./Component/Pages/Event";
import { NewEventPage } from "./Component/Pages/NewEvent/NewEventPage";
import { Fragment } from "react";
import { EventDetailPage } from "./Component/Pages/EventDetail/EventDetailPage";
import { EditEventPage } from "./Component/Pages/EditEvent/EditEventPage";
import { EventRootLayout } from "./Component/EventRootLayout";

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
        children: [
          { index: true, element: <EventPage /> },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
          { path: "new-event", element: <NewEventPage /> },
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