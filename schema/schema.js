const graphql = require('graphql')

const {GraphQLObjectType, GraphQLString} = graphql

const CourseType = new GraphQLObjectType({
  name: 'Course', //nombre del tipo
  fields: () => ({
    //definiendo tipos
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    language: {type: GraphQLString},
    date: {type: GraphQLString}
  })
})

const RootQuery = new GraphQLObjectType ({
  name: 'RootQueryType',
  fields: {
    course: {
      type: CourseType,
      // el argumento que por el cual se buscará
      args: {
        id: { type: GraphQLString }
      },

      //codigo que accederá a la BD
      resolve(parent, args) {
        //nos devolverá un curso coincidente con la id que estará en la BD
        return 
      }
    }
  }
})