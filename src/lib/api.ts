export async function fetchAnnouncements(): Promise<string[]> {
    const response = await fetch("https://api.example.com/announcements");
    if (!response.ok) {
      throw new Error("Failed to fetch announcements");
    }
    return response.json();
  }
  