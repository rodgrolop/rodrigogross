import styles from "../styles/Home.module.css";

function createMarkup() {
  return {
    __html:
      '<iframe allowfullscreen frameborder="0" scrolling="auto" marginheight="0" marginwidth="0" src="https://www.gqueues.com/public/queues/ag1zfmdxdWV1ZXMtaHJkciYLEgdBY2NvdW50GICAqLmd69cIDAsSBVF1ZXVlGICAqMWu5r0LDA?options=1&subtasks=1&hideControls=1"></iframe>',
  };
}

const Home = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://www.rodrigogross.me/">My Website</a>
      </h1>

      <p className={styles.description}>This is a work in progress</p>
      <div
        className={styles.iframeContainer}
        dangerouslySetInnerHTML={createMarkup()}
      />
    </main>
  </div>
);

export default Home;
