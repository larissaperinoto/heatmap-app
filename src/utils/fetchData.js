export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = response.json();

    return data;
  } catch (error) {
    console.error(`Erro ao buscar dados em ${url}:`, error);
  }
}
