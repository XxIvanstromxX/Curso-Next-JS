import { prisma } from '@/lib/prisma';

export const getProjects = async (id, clientId) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        client: {
          is: {
            userId: id,
            ...(clientId ? { id: clientId } : {}),
          },
        },
      },
      include: {
        client: true,
      },
    });
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects');
  }
};

export const createProject = async (projectData) => {
  console.log('Creating project with data:', projectData);
  try {
    const newProject = await prisma.project.create({
      data: {
        ...projectData,
      },
      include: {
        client: true,
      },
    });
    return newProject;
  } catch (error) {
    console.error('Error creating project:', error);
    throw new Error('Failed to create project');
  }
};

export const updateProject = async (id, projectData) => {
  try {
    const updatedProject = await prisma.project.update({
      where: { id },
      data: projectData,
    });
    return updatedProject;
  } catch (error) {
    console.error('Error updating project:', error);
    throw new Error('Failed to update project');
  }
};

export const deleteProject = async (id) => {
  try {
    const deletedProject = await prisma.project.delete({
      where: { id },
    });
    return deletedProject;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw new Error('Failed to delete project');
  }
};
