import { getFeaturedEvents } from "../dummy-data";

import EventList from "../components/events/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <main>
      <h1>Events app</h1>
      <EventList events={featuredEvents} />
    </main>
  );
}

export default HomePage;
