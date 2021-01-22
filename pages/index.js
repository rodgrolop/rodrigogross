import Link from "next/link";
import Button from "@material-ui/core/Button";
import styles from "../styles/Home.module.css";

function createMarkup() {
  return {
    __html:
      '<iframe title="My Website Task List" allowfullscreen frameborder="0" scrolling="auto" marginheight="0" marginwidth="0" src="https://www.gqueues.com/public/queues/ag1zfmdxdWV1ZXMtaHJkciYLEgdBY2NvdW50GICAqLmd69cIDAsSBVF1ZXVlGICAqMWu5r0LDA?options=1&subtasks=1&hideControls=1"></iframe>',
  };
}

const Home = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://www.rodrigogross.me/">My Website</a>
      </h1>
      <Link href="/test/" passHref>
        <Button variant="contained" color="secondary" className={styles.link}>
          Go to test page
        </Button>
      </Link>
      <p className={styles.description}>This is a work in progress</p>
      <p className={styles.description}>
        Latest Update: re Added Page transitions with framer-motion API and i18n
        initial setup
      </p>
      <div
        className={styles.iframeContainer}
        dangerouslySetInnerHTML={createMarkup()}
      />
    </main>
  </div>
);

export default Home;
