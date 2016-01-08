export default function() {
  this.get('/books', function(db, request){
    return {
      data: db.books.map(attrs => (
        {
          type: 'books', 
          id: attrs.id, 
          attributes: attrs
        }
      ))
    };
  });
  //this.post('/books', 'book');
  
  this.post('/books', function(db, request){
    let attrs = JSON.parse(request.requestBody).data;
    let book = db.books.insert(attrs);
    return {data: book}
  });

  this.delete('/books/:id');
  
  this.patch('/books/:id', function(db, request){
    var id = request.params.id;
    var attrs = JSON.parse(request.requestBody).data;
    var book = db.books.update(id, attrs);
    return {
      data : {
        type: "books",
        id: book.id,
        attributes: book
      }
    }
  });

  this.get('/books/:id', function(db, request){
    let id = request.params.id;
    return {
      data: {
        type: 'books',
        id: id,
        attributes: db.books.find(id)
      }
    };
  });
  
  /*
data: [
    {
      type: 'books',
      id: 1,
      attributes: {
        title:"El Señor de los Anillos - La comunidad del Anillo",
        author:"No se",
        cover: "http://img.emol.com/2012/12/31/anillos_95931.jpg",
        isNew: false,
        description: "Un libro sobre como dos hobbits deciden llevar el anillo mas cotizado por todos a la guarida del ejercito mas despiadado de la tierra para destruir el anillo."
      }
    },{
      type: 'books',
      id: 2,
      attributes: {
        title: "Juegos del Hambre - Sinsajo",
        author:"No se",
        cover: "http://img.emol.com/2014/09/17/jennier_12438.jpg",
        isNew: false,
        description: "Una mujer decide revelarse contra la ciudad de pitucos para que los pueblos vecinos tambien puedan comer y dejen de matarse entre ellos"
      }
    },{
      type: 'books',
      id: 3,
      attributes: {
        title: "Harry Potter y la Piedra Filosofal",
        author:"No se",
        cover: "http://cdn.webadictos.net/media/2012/05/harry-potter-kinect.jpg",
        isNew: true,
        description: "Un niño con una marca rara en la frente decide jugar al investigador con sus amigos y descubren a un tipo de dos cabezas con el que juegan a ajedrez...un ajedrez mortal"
      }
    },{
      type: 'books',      
      id: 4,
        attributes: {
        title: "Capitán América: Civil War",
        author:"No se",
        cover: "http://www.cinescondite.com/images/captain-america-civil-war-sinopsis.jpg",
        isNew: false,
        description: "El héroe mas querido por todos decide revelarse ante los vengadores y se lleva a sus amigos con el, luego se arrpiente y se entrega a la policia y despues se muere por salvar a un desconocido"
      }
    }
  ]
  */


  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
