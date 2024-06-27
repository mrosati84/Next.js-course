import { getFeaturedEvents } from "../dummy-data";

import EventList from "../components/events/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Events app title</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
