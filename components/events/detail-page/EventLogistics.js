import { humanReadableDate } from "../../../lib/dates";

function EventLogistics(props) {
  return (
    <section>
      <time>{humanReadableDate(props.event.date)}</time>
    </section>
  );
}

export default EventLogistics;
