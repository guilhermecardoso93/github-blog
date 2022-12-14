import { SearchInputContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {
  getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPost(data: SearchInput) {
    await getPosts(data.query)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  );
}
