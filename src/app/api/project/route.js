import { NextResponse } from 'next/server';
import {
  getProjects,
  createProject,
} from '@/features/projects/services/projectsService';
import { auth } from '@/lib/auth';

async function getUserIdFromSession() {
  const session = await auth();
  if (!session) {
    throw new Error('Unauthorized');
  }
  return session.user.id; // Asegúrate de que tu sesión tenga esta estructura
}

export async function GET() {
  try {
    const id = await getUserIdFromSession(); // Obtén el ID del usuario desde la sesión
    const projects = await getProjects(id);
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const { name, status, budget, clientId } = await request.json();

    if (!clientId) {
      return NextResponse.json(
        { error: 'clientId is required' },
        { status: 400 },
      );
    }

    const newProject = await createProject({ name, status, budget, clientId });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Error creating client:', error);
    return NextResponse.json(
      { error: 'Failed to create client' },
      { status: 500 },
    );
  }
}
