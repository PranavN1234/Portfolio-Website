export const getAIMessage = async (userQuery) => {
    const apiUrl = 'http://127.0.0.1:8000/answer';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: userQuery }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        return {
            role: "assistant",
            content: data.answer,
        };
    } catch (error) {
        console.error("Failed to fetch AI message:", error);
        return {
            role: "assistant",
            content: "Sorry, there was an error processing your request.",
        };
    }
};