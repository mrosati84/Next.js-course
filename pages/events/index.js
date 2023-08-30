import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

import { useRouter } from "next/router";

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function searchEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={searchEventsHandler} />
      <h1>Events Page</h1>
      <EventList events={events} />
    </div>
  );
}

export default EventsPage;
