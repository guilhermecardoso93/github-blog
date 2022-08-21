import { SearchInputContainer } from "./styles";

export function SearchInput() {
  return (
    <SearchInputContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
        <input type="text" placeholder="Buscar conteúdo"/>
      </header>
    </SearchInputContainer>
  )
}