import { SearchInputContainer } from "./styles";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchInput = z.infer<typeof searchFormSchema>;

export function SearchInput() {
  const {} = useForm<SearchInput>({
    resolver: zodResolver(searchFormSchema)
  })
  return (
    <SearchInputContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo"/>
    </SearchInputContainer>
  )
}