// src/api/apiClient.ts

// Helper function to handle fetch calls and errors automatically
export async function handleRequest<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
}
