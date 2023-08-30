import Link from "next/link";

import classes from "./Button.module.scss";

function Button(props) {
  return (
    <Link className={classes.button} href={props.href}>
      {props.children}
    </Link>
  );
}

export default Button;
