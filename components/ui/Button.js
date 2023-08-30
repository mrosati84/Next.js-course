import Link from "next/link";

import classes from "./Button.module.scss";

function Button(props) {
  if (props.href) {
    return (
      <Link className={classes.button} href={props.href}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button onClick={props.onClick} className={classes.button}>
        {props.children}
      </button>
    );
  }
}

export default Button;
