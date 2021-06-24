import styles from "./App.module.css";

export default function App() {
  throw Error("oops");

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.header}>Welcome</h1>
      </div>
    </>
  );
}
