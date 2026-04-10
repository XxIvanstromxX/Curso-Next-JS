'use server';

import {
  createClient,
  deleteClient,
  updateClient,
} from '../services/clientService';
import { revalidatePath } from 'next/cache';

export const handleCreateClient = async (clientData) => {
  try {
    const newClient = await createClient(clientData);
    revalidatePath('/dashboard/clients'); // Revalida la página de clientes después de crear uno nuevo
    return newClient;
  } catch (error) {
    console.error('Error creating client:', error);
    throw error;
  }
};

export const handleUpdateClient = async (id, clientData) => {
  try {
    const updatedClient = await updateClient(id, clientData);
    return updatedClient;
  } catch (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};

export const handleDeleteClient = async (id) => {
  try {
    const deletedClient = await deleteClient(id);
    revalidatePath('/dashboard/clients'); // Revalida la página de clientes después de eliminar
    return deletedClient;
  } catch (error) {
    console.error('Error deleting client:', error);
    throw error;
  }
};
