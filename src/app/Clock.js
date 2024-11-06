import styles from './styles.css';
  export default function Clock({ time })  {
      let hours = time.getHours();
      let parteHora;
      if (hours >= 0 && hours <= 6) {
        parteHora ="night";
      } else {
        parteHora="day"
      }
      return (
        <h1 id="time" className={parteHora} >
          {time.toLocaleTimeString()} 
        </h1>
      );
    }
      