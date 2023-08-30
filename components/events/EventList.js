import EventItem from "./EventItem";
import classes from "./EventList.module.scss";

function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
