const graphql = require('graphql')

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLSchema} = graphql

var courses = [
  {
    id: '1',
    name: 'Curso JS',
    language: 'Javascript',
    date: '2022'
  },
  {
    id: '2',
    name: 'Curso Python',
    language: 'Python',
    date: '2022'
  },
  {
    id: '3',
    name: 'Curso POO',
    language: 'Java',
    date: '2022'
  },
  {
    id: '4',
    name: 'Curso BD',
    language: 'SQL',
    date: '2022'
  }
]

let professor = [
  {id: '1', name: 'Fernando', age: 24, active: true},
  {id: '2', name: 'Jesús', age: 25, active: true},
  {id: '3', name: 'Guadalupe', age: 30, active: true},
  {id: '4', name: 'Cristian', age: 28, active: true}
]

const CourseType = new GraphQLObjectType({
  name: 'Course', //nombre del tipo
  fields: () => ({
    //definiendo tipos
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    language: {type: GraphQLString},
    date: {type: GraphQLString}
  })
})

const ProfessorType = new GraphQLObjectType({
  name: 'Professor',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    active: { type: GraphQLBoolean }
  })
})

const RootQuery = new GraphQLObjectType ({
  name: 'RootQueryType',
  fields: {
    course: {
      type: CourseType,
      // el argumento que por el cual se buscará
      args: {
        id: { type: GraphQLID }
      },

      //resolve() se encargará de accederá a la BD
      resolve(parent, args) {
        //nos devolverá un curso coincidente con la id que estará en la BD
        return courses.find(curso => curso.id === args.id)
      }
    },
    professor: {
      type: ProfessorType,
      args: {
        name: {type: GraphQLString}
      },
      resolve(parent, args){
        return professor.find(profesor => profesor.name === args.name)
      }
    }
  }
})

//exportamos schema
module.exports = new GraphQLSchema({
  query: RootQuery
})