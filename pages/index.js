import styles from "../styles/Home.module.css";

const Home = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://www.rodrigogross.me/">My Website</a>
      </h1>

      <p className={styles.description}>This is a work in progress</p>
      <iframe
        src="https://flask.io/BcJKdsEwaHCF?embed=true"
        style="width: 100%; height: 500px;"
        frameborder="0"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </main>
  </div>
);

export default Home;
