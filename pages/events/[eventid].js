import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";

import EventContent from "../../components/events/detail-page/EventContent";
import EventBanner from "../../components/events/detail-page/EventBanner";
import EventLogistics from "../../components/events/detail-page/EventLogistics";

function EventPage() {
  const router = useRouter();
  const eventId = router.query.eventid;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventBanner event={event} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventPage;
