export default function Announcements() {
    const announcements = [
      "2025 Technology Predictions Report Released",
      "Upcoming IEEE Conferences",
      "New Membership Benefits Announced",
    ];
  
    return (
      <section className="bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Announcements</h2>
        <ul className="space-y-2">
          {announcements.map((announcement, index) => (
            <li key={index} className="text-blue-600 hover:underline">
              {announcement}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  