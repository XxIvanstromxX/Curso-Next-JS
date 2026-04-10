import { handleDeleteClient } from '../actions/clientAction';
import { getClients } from '../services/clientService';
import ClientCard from './clientCard';

export async function ClientShowCards({ userId }) {
  const clients = await getClients(userId);

  return (
    <>
      {clients.lengh !== 0 ? (
        clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onDelete={handleDeleteClient}
          />
        ))
      ) : (
        <p>No clients found.</p>
      )}
    </>
  );
}
