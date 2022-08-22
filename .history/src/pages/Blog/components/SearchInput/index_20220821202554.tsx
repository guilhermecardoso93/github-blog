import { SearchInputContainer } from "./styles";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchInput = z.infer<typeof searchFormSchema>;

export function SearchInput() {
  const {register, handleSubmit} = useForm<SearchInput>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchPost ( data: SearchInput){

  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')}/>
    </SearchInputContainer>
  )
}