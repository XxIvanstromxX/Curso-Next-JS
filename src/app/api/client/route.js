import { NextResponse } from 'next/server';
import {
  getClients,
  createClient,
} from '@/features/clients/services/clientService'; // Asegúrate de tener esta función implementada para obtener los clientes
import { auth } from '@/lib/auth'; // Asegúrate de tener esta función implementada para manejar la autenticación

async function getUserIdFromSession() {
  const session = await auth();
  if (!session) {
    throw new Error('Unauthorized');
  }
  return session.user.id; // Asegúrate de que tu sesión tenga esta estructura
}

export async function GET() {
  try {
    const id = await getUserIdFromSession(); // Obtén el ID del usuario autenticado
    const clients = await getClients(id); // Llama a la función para obtener los clientes desde tu servicio
    return NextResponse.json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch clients' },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const userId = await getUserIdFromSession(); // Obtén el ID del usuario autenticado
    const { name, email, company } = await request.json();
    const newClient = await createClient({ name, email, company, userId }); // Llama a la función para crear un nuevo cliente desde tu servicio

    return NextResponse.json(newClient, { status: 201 });
  } catch (error) {
    console.error('Error creating client:', error);
    return NextResponse.json(
      { error: 'Failed to create client' },
      { status: 500 },
    );
  }
}
