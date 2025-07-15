import { createStore } from "vuex";

export default createStore({
  // aqui ficam os dados da aplicação
  state: {
    // array que guarda a lista de pokémons
    pokemons: [],
    //indica se está carregando dados
    loading: false,
    // mensagem de erro (se houver)
    error: null,
  },
});
