export default function ProjectCard({ project, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
      <p className="text-gray-600 mb-1">Status: {project.status}</p>
      <p className="text-gray-600">Budget: {project.budget}</p>
      <p className="text-gray-600 mt-1">
        Client: {project.client?.name || 'No client'}
      </p>

      <button
        className="mt-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => onDelete(project.id)}
      >
        delete
      </button>
    </div>
  );
}
