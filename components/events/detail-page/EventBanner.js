import classes from "./EventBanner.module.scss";

function EventBanner(props) {
  return (
    <section className={classes.banner}>
      <h1>{props.event.title}</h1>
      <img src={props.event.image} alt={props.event.title} />
    </section>
  );
}

export default EventBanner;
