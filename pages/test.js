import Link from "next/link";
import Button from "@material-ui/core/Button";
import styles from "../styles/Home.module.css";

const Test = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Nothing to see here, this is just a test page
      </h1>
      <Link href="/" passHref>
        <Button variant="contained" color="secondary" className={styles.link}>
          Go back to home
        </Button>
      </Link>
    </main>
  </div>
);

export default Test;
