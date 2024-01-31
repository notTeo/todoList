export default async function getTodos() {
  try {
    const response = await fetch("/api/todos");
    const json = await response.json();
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    return json;
  } catch (e) {
    console.error("Error in getTodos:", e.message || e);
    throw e;
  }
}
