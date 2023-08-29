import Image from "next/image";

function EventList(props) {
  return (
    <ul>
      {props.events.map((event) => (
        <li key={event.id}>
          <h2>{event.title}</h2>
          <p>
            <strong>{event.date}</strong>, {event.location}
          </p>
          <p>{event.description}</p>
          <Image
            src={event.image}
            width={300}
            height={300}
            alt={event.description}
          ></Image>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
