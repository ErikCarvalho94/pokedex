<template>
    <v-container>
        <v-row>
            <v-col
                v-for="pokemon in pokemons"
                :key="pokemon.name"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                >
                <v-card>
                    <v-img
                        :src="pokemon.image"
                        height="200px"
                        class="wgite--text"
                        ></v-img>
                        <v-card-title class="text-h6">>{{ pokemon.number }} - {{ pokemon.name }}
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'PokemonList',
    data() {
        return {
            pokemons: [] // armazenar os pokémons da API
        }
    },
    mounted(){
            // Assim que o componente carregar, chamamos a função para buscar os dados
            this.fetchPokemons()
    },
    methods: {
        async fetchPokemons() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const data = await response.json();
            // Montar a lista de pokémons com os dados da API
            this.pokemons = data.results.map((item, index) => {
                const number = index + 1
                return {
                    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),  // Deixa a primeira letra maiúscula
                    number: number.toString().padStart(3, '0'), // Formata o número com 3 dígitos
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
                }
            })
        }
    }
}
</script>