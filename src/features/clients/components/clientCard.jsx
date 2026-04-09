export default function ClientCard({ client, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{client.name}</h3>
      <p className="text-gray-600 mb-1">Email: {client.email}</p>
      <p className="text-gray-600">Company: {client.company}</p>

      <button
        className="mt-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => onDelete(client.id)}
      >
        delete
      </button>
    </div>
  );
}
