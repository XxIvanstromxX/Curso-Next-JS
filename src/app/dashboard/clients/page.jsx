'use client';

import ClientCard from '@/features/clients/components/clientCard';
import ClientForm from '@/features/clients/components/clientForm';
import { useEffect, useState } from 'react';

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('/api/client');
        const data = await response.json();
        console.log('Fetched clients:', data); // Agrega este log para verificar los clientes obtenidos
        setClients(data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/client/${id}`, {
        method: 'DELETE',
      });
      setClients((prevClients) =>
        prevClients.filter((client) => client.id !== id),
      );
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  const handleAddClient = async (clientData) => {
    try {
      const response = await fetch('/api/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      });
      const newClient = await response.json();
      setClients((prevClients) => [...prevClients, newClient]);
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => setToggleForm(!toggleForm)}
      >
        {toggleForm ? 'Close Form' : 'Add New Client'}
      </button>
      {toggleForm && <ClientForm onSubmit={handleAddClient} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
