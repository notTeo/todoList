export default async function postTodos(inputValue, ID) {
    try {
        const response = await fetch("/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: inputValue, id: ID, completed: false }),
        });
        const json = await response.json();
        if (!response.ok) {
            throw new Error("Failed to fetch data. Status:" + response.status);            
        }
        return json;
    } catch (e) {
        console.error("Error in getTodos:", e.message || e);
        throw e
    }
}


