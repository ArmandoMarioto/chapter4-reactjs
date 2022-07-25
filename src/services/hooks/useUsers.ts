import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

type userResponse = {
    id: string;
    name: string;
    email: string;
    created_at: string;

    
  }

  export async function getUsers(): Promise<userResponse[]> {
    const { data } = await api.get("/users");
    const users = data.users.map((user: userResponse) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: new Date(user.created_at).toLocaleDateString('pt-BR',{
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
      }
    })

    return users;
  }

export function useUsers () {
    return useQuery(["users"], getUsers,{
        staleTime: 1000 * 5,
      });
}