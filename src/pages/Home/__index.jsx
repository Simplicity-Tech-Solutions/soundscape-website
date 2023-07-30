import logo from '../../assets/logo.svg';
import styles from '../../App.module.css';

function HomePage() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={ "http://localhost:3000" + logo} class={styles.logo} alt="logo" />
        <p className="mt-8 text-rose-400">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solidity Today Boom Testing

        </a>
      </header>
    </div>
  );
}

export default HomePage;
