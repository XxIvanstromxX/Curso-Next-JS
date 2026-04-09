import { useState } from 'react';

export default function ProjectForm({
  onSubmit,
  clients = [],
  initialData = {},
  initialClientId = '',
}) {
  const [name, setName] = useState(initialData.name || '');
  const [status, setStatus] = useState(initialData.status || '');
  const [budget, setBudget] = useState(initialData.budget || '');
  const [clientId, setClientId] = useState(
    initialData.clientId || initialClientId || '',
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      status,
      budget: budget === '' ? null : Number(budget),
      clientId,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 mb-4"
    >
      <h2 className="text-xl font-semibold mb-4">
        {initialData.id ? 'Edit Project' : 'Add New Project'}
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Status</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Budgets</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Client</label>
        <select
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="">Select a client</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        disabled={!clientId || clients.length === 0}
      >
        {initialData.id ? 'Update Project' : 'Create Project'}
      </button>
    </form>
  );
}
