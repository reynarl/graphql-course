const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3131, () => {
  console.log('iniciando servidor en el puerto 3131')
})