import { NextResponse } from 'next/server';
import {
  updateProject,
  deleteProject,
} from '@/features/projects/services/projectsService';

export async function PUT(request, { params }) {
  try {
    const { id } = await params; // Obten el id del proyecto desde los parámetros de la ruta
    const body = await request.json(); // Obtén los datos actualizados del proyecto desde el cuerpo de la solicitud

    const updated = await updateProject(id, body);

    return NextResponse.json(
      { message: 'Project updated successfully', client: updated },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 },
    );
  }
}

export async function DELETE(_request, { params }) {
  try {
    const { id } = await params;
    const deleteC = await deleteProject(id);

    return NextResponse.json(
      { message: 'Project deleted successfully', client: deleteC },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error deleting Project:', error);
    return NextResponse.json(
      { error: 'Failed to delete Project' },
      { status: 500 },
    );
  }
}
