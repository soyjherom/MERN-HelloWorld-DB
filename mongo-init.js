conn = new Mongo();
db = conn.getDB("helloWorldDB");
db.helloWorldCollection.createIndex(
  { "helloWorld.zip": 1 }, { unique: false });
db.helloWorldCollection.insertMany([
  { "hello": "Hello World!" },
  { "hello": "Hola Mundo!" },
  { "hello": "Salut Monde" }
]);