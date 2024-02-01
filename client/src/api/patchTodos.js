export default async function patchTodos(id, newState) {
    try {
        const response = await fetch("/api/todos/" + id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              completed: newState,
            }),
          });
      const json = await response.json();
      if(!response.ok){
          throw new Error("Failed to fetch data. Status: " + response.status)
      }
      return json;
    } catch(e) {
      console.error("Error in getTodos:", e.message || e);
      throw e;
    }
  }
  