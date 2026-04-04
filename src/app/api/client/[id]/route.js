import { NextResponse } from 'next/server';
import {
  updateClient,
  deleteClient,
} from '@/features/clients/services/clientService'; // Asegúrate de tener esta función implementada para actualizar el cliente

export async function PUT(request, { params }) {
  try {
    const { id } = await params; // Obtén el ID del cliente desde los parámetros de la ruta
    const body = await request.json(); // Obtén los datos actualizados del cliente desde el cuerpo de la solicitud

    const updated = await updateClient(id, body); // Llama a la función para actualizar el cliente en tu servicio

    return NextResponse.json(
      { message: 'Client updated successfully', client: updated },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error updating client:', error);
    return NextResponse.json(
      { error: 'Failed to update client' },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params; // Obtén el ID del cliente desde los parámetros de la ruta
    const deleteC = await deleteClient(id); // Llama a la función para eliminar el cliente en tu servicio

    return NextResponse.json(
      { message: 'Client deleted successfully', client: deleteC },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error deleting client:', error);
    return NextResponse.json(
      { error: 'Failed to delete client' },
      { status: 500 },
    );
  }
}
