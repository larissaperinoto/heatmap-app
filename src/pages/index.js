import { useState } from "react";
import h337 from "heatmap.js";
import styles from "../styles/Home.module.css";
import { fetchData } from "./utils/fetchData";

export default function Home() {
  const [heatmap, setHeatmap] = useState([]);
  const [objects, setObjects] = useState([]);
  const [heatmapInstance, setHeatmapInstance] = useState();

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const heatmap = document.getElementById("heatmapContainer");
        heatmap.style.backgroundImage = `url(${reader.result})`;
      };
      reader.readAsDataURL(file);
    }
  }

  function formatDataPoint(heatmap) {
    return heatmap.map(({ x, y }) => {
      return { x, y };
    });
  }

  async function handleCreateHeatmap() {
    const data = await fetchData("/api/heatmap/data");
    setHeatmap(data);

    const config = {
      container: document.getElementById("heatmapContainer"),
    };

    const instance = h337.create(config);

    setHeatmapInstance(instance);

    instance.setData({ data: formatDataPoint(data) });

    const objects = await fetchData("/api/heatmap/objects");
    setObjects(objects);
  }

  async function handleOnChangeObject(value) {
    let data = heatmap;

    if (value !== "todos") {
      data = heatmap.filter(({ object }) => object === value);
    }

    heatmapInstance.setData({ data: [] });

    const maxLengh = 500;

    if (data.length <= maxLengh) {
      console.log(data);
      for (const item of formatDataPoint(data)) {
        heatmapInstance.addData(item);
      }
    } else {
      heatmapInstance.setData({ data: formatDataPoint(data) });
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container_1}>
        <div id="heatmapContainer" className={styles.heatmapContainer}></div>
      </div>

      <div className={styles.container_2}>
        <div className={styles.inputContainer}>
          <label htmlFor="input">Selecione uma imagem</label>
          <input
            id="input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className={styles.createButtonContainer}>
          <button className={styles.createButton} onClick={handleCreateHeatmap}>
            Criar mapa de calor
          </button>
        </div>

        <div>
          <div className={styles.selectContainer}>
            <label htmlFor="dropdown">Selecione o objeto</label>
            <select
              id="dropdown"
              onChange={(e) => handleOnChangeObject(e.target.value)}
            >
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
