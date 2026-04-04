import { NextResponse } from 'next/server';
import {
  getClients,
  createClient,
} from '@/features/clients/services/clientService'; // Asegúrate de tener esta función implementada para obtener los clientes

export async function GET() {
  try {
    const clients = await getClients(); // Llama a la función para obtener los clientes desde tu servicio
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
    const { name, email, company, userId } = await request.json();
    await createClient({ name, email, company, userId }); // Llama a la función para crear un nuevo cliente desde tu servicio

    return NextResponse.json(
      { message: 'Client created successfully' },
      { status: 201 },
    );
  } catch (error) {
    console.error('Error creating client:', error);
    return NextResponse.json(
      { error: 'Failed to create client' },
      { status: 500 },
    );
  }
}
