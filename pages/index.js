import { getFeaturedEvents } from "../dummy-data";

import EventList from "../components/events/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Events app</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
