import { getFeaturedEvents } from "../dummy-data";

import EventList from "../components/EventList/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <main>
      <h1>My nextjs app</h1>
      <EventList events={featuredEvents} />
    </main>
  );
}

export default HomePage;
