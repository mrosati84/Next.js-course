import Image from "next/image";
import Button from "../ui/Button";

import classes from "./EventItem.module.scss";

function Event(props) {
  const { title, description, image, date, location, id } = props.event;

  // format date into a human readable format
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={classes.item}>
      <h2>{title}</h2>
      <p>
        <strong>{humanReadableDate}</strong>
      </p>
      <p>{location}</p>
      <p>{description}</p>
      <Image
        src={image}
        width={300}
        height={300}
        alt={props.event.description}
      ></Image>
      <div>
        <Button href={`/events/${id}`}>Explore Event</Button>
      </div>
    </li>
  );
}

export default Event;
