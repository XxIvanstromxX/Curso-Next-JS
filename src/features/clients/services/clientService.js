import { prisma } from '@/lib/prisma';

export const getClients = async (id) => {
  try {
    const clients = await prisma.client.findMany({
      where: {
        userId: id, // Filtra los clientes por el ID del usuario
      },
    });
    return clients;
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw new Error('Failed to fetch clients');
  }
};

export const createClient = async (clientData) => {
  try {
    const newClient = await prisma.client.create({
      data: {
        ...clientData,
      },
    });
    return newClient;
  } catch (error) {
    console.error('Error creating client:', error);
    throw new Error('Failed to create client');
  }
};

export const updateClient = async (id, clientData) => {
  try {
    const updatedClient = await prisma.client.update({
      where: { id },
      data: clientData,
    });
    return updatedClient;
  } catch (error) {
    console.error('Error updating client:', error);
    throw new Error('Failed to update client');
  }
};

export const deleteClient = async (id) => {
  try {
    const deletedClient = await prisma.client.delete({
      where: { id },
    });
    return deletedClient;
  } catch (error) {
    console.error('Error deleting client:', error);
    throw new Error('Failed to delete client');
  }
};
