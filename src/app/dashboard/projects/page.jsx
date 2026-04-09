'use client';

import ProjectCard from '@/features/projects/components/projectCard';
import ProjectForm from '@/features/projects/components/projectForm';
import { useEffect, useState } from 'react';

export default function ClientsPage() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsResponse, clientsResponse] = await Promise.all([
          fetch('/api/project'),
          fetch('/api/client'),
        ]);

        const [projectsData, clientsData] = await Promise.all([
          projectsResponse.json(),
          clientsResponse.json(),
        ]);

        setProjects(projectsData);
        setClients(clientsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  const visibleProjects =
    selectedClientId === 'all'
      ? projects
      : projects.filter((project) => project.clientId === selectedClientId);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/project/${id}`, {
        method: 'DELETE',
      });
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id),
      );
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleAddProject = async (projectData) => {
    try {
      const response = await fetch('/api/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });
      const newProject = await response.json();

      if (!response.ok) {
        throw new Error(newProject.error || 'Failed to create project');
      }

      setProjects((prevProjects) => [...prevProjects, newProject]);
      setToggleForm(false);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Projects</h1>
        <p className="text-gray-600">
          Choose a client to see and create their projects.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Clients</h2>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-2 rounded border ${selectedClientId === 'all' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700'}`}
            onClick={() => setSelectedClientId('all')}
            type="button"
          >
            All clients
          </button>
          {clients.map((client) => (
            <button
              key={client.id}
              className={`px-3 py-2 rounded border ${selectedClientId === client.id ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700'}`}
              onClick={() => setSelectedClientId(client.id)}
              type="button"
            >
              {client.name}
            </button>
          ))}
        </div>
      </div>

      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => setToggleForm(!toggleForm)}
        type="button"
      >
        {toggleForm ? 'Close Form' : 'Add New Project'}
      </button>
      {toggleForm && (
        <ProjectForm
          key={selectedClientId}
          onSubmit={handleAddProject}
          clients={clients}
          initialClientId={selectedClientId === 'all' ? '' : selectedClientId}
        />
      )}

      {selectedClientId !== 'all' && (
        <p className="text-sm text-gray-600">
          Showing projects for{' '}
          {clients.find((client) => client.id === selectedClientId)?.name ||
            'this client'}
          .
        </p>
      )}

      {!toggleForm && clients.length === 0 && (
        <p className="text-sm text-gray-600">
          Create a client first so you can assign projects to it.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="text-sm text-gray-600">
          No projects for this client yet.
        </p>
      )}
    </div>
  );
}
