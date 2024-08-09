export default function Home() {
  const [objects, setObjects] = useState([]);

  return (
    <main>
      <div>
        <div id="heatmapContainer"></div>
      </div>

      <div>
        <div>
          <label htmlFor="input">Selecione uma imagem</label>
          <input id="input" type="file" accept="image/*" />
        </div>
        <div>
          <button>Criar mapa de calor</button>
        </div>

        <div>
          <div>
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
          <div>
            <button>Fazer download</button>
          </div>
        </div>
      </div>
    </main>
  );
}
