import Link from "next/link";
import classes from "./MainNavigation.module.scss";

function MainNavigation() {
  return (
    <section className={classes.topbar}>
      <div className={classes.logo}>
        <Link href={"/"}>Logo</Link>
      </div>
      <nav>
        <ul className={classes.mainnav}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/events"}>Events</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MainNavigation;
