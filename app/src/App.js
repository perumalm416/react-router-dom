import "./App.css";
import { RootLayout } from "./Component/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Component/HomePage";
import { EventPage } from "./Component/EventsPage";
import { NewEventPage } from "./Component/EventsPage/NewEventPage";
import { Fragment } from "react";
import { EventDetailPage } from "./Component/EventsPage/EventDetailPage";
import { EditEventPage } from "./Component/EventsPage/EditEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<h2>Error</h2>,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/event", element: <EventPage /> },
      { path: "/event/:eventId", element: <EventDetailPage /> },
      { path: "/new-event", element: <NewEventPage /> },
      { path: "/event/:eventId/edit", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return<Fragment>
     <RouterProvider router={router} />
   
  </Fragment>;
}

export default App;
