const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

app.use('/graphql', graphqlHTTP({
  
}))

app.listen(3131, () => {
  console.log('iniciando servidor en el puerto 3131')
})