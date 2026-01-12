const express = require("express")
const path = require("path")
/// Routers
const pokemonRouter = require("./routers/PokemonRouter")

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname,"..","public")))
app.use("/api/pokemon", pokemonRouter)

app.listen(
    PORT,
    '0.0.0.0', // Aceita conexões de qualquer IP da rede
    () => {
        console.log(`API rodando em http://localhost:${PORT}`)
        console.log(`Acessível na rede em http://192.168.0.4:${PORT}`)
    }
)