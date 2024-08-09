import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [objects, setObjects] = useState([]);

  return (
    <main className={styles.main}>
      <div className={styles.container_1}>
        <div id="heatmapContainer" className={styles.heatmapContainer}></div>
      </div>

      <div className={styles.container_2}>
        <div className={styles.inputContainer}>
          <label htmlFor="input">Selecione uma imagem</label>
          <input id="input" type="file" accept="image/*" />
        </div>
        <div className={styles.createButtonContainer}>
          <button className={styles.createButton}>Criar mapa de calor</button>
        </div>

        <div>
          <div className={styles.selectContainer}>
            <label htmlFor="dropdown">Selecione o objeto</label>
            <select id="dropdown">
              <option value="todos" key="todos" defaultValue={true}>
                todos
              </option>
              {objects.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.downloadContainer}>
            <button>Fazer download</button>
          </div>
        </div>
      </div>
    </main>
  );
}
