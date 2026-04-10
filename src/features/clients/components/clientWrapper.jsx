'use client';

import { useState } from 'react';
import ClientForm from './clientForm';
import { handleCreateClient } from '../actions/clientAction';

export default function ClientWrapper({ userId }) {
  const [toggleForm, setToggleForm] = useState(false);

  const handleAddClient = async (clientData) => {
    try {
      const newClient = await handleCreateClient({ ...clientData, userId });
      console.log('New client created:', newClient);
      setToggleForm(false); // Cierra el formulario después de agregar un cliente
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  return (
    <>
      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => setToggleForm(!toggleForm)}
      >
        {toggleForm ? 'Close Form' : 'Add New Client'}
      </button>
      {toggleForm && <ClientForm onSubmit={handleAddClient} />}
    </>
  );
}
