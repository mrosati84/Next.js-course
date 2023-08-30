import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

function EventsFilterPage() {
  const router = useRouter();
  const filterDate = router.query.slug;

  if (!filterDate) {
    return <p>Loading...</p>;
  }

  const [year, month] = filterDate;

  const numYear = parseInt(year);
  const numMonth = parseInt(month);

  if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
    return (
      <div>
        <p>Invalid filters.</p>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div>
        <h1>Events Filtered Page</h1>
        <EventList events={filteredEvents} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Events Filtered Page</h1>
        <p>No events found for this date.</p>
      </div>
    );
  }
}

export default EventsFilterPage;
