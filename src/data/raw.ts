export const defaultRawText = `【1. MongoDB and the Document Model】
What is considered a best practice when naming fields in MongoDB documents? (Select one.)
a.
Using short, abbreviated names to conserve space on disk.
Incorrect.
Short, abbreviated names can make data less clear and more difficult to manage. When it comes to naming document fields, space considerations are generally secondary to readability and maintainability.
b.
Re-using field names within a document to optimize indexes.
Incorrect.
Re-using field names within a document does not optimize indexes and is not allowed because field names must be unique within a document.
c.
Using descriptive, unique names.
Correct.
Descriptive, unique field names in MongoDB documents help make the data more understandable and maintainable.
d.
Using generic names.
Incorrect.
Generic names are often unclear because they usually do not convey specific information about the data stored in the field.
=
What is a key characteristic of MongoDB's document model that allows for handling polymorphic data, or data of different shapes and types? (Select one.)
a.
Maximum document size of 16 MB
Incorrect.
MongoDB documents do have a maximum document size of 16 MB, but this limit does not have an impact on its ability to handle polymorphic data.
b.
Similarity to JSON objects
Incorrect.
MongoDB documents are similar to JSON objects, which allows for efficient data storage and traversal. However, this trait is not directly related to its ability to handle polymorphic data.
c.
Flexible schema
Correct.
A key characteristic of MongoDB's document model that allows for handling polymorphic data is its flexible schema, Which allows documents within a collection to have different structures.
d.
Single data type storage
Incorrect.
MongoDB allows for storing diverse data types within a single document.
=
Which of the following statements about the _id field in MongoDB is true? (Select all that apply.)
a.
It provides a unique identifier for each document.
Correct.
The _id field in MongoDB is a unique field that’s used to identify each document in a collection. It ensures that each document has a distinct identifier and allows for efficient querying and data retrieval.
b.
It must be defined explicitly by the user when inserting a document.
Incorrect.
The _id field does not have to be explicitly defined by the user. If it’s not provided during document insertion, MongoDB will automatically generate a unique ObjectId for the _id field.
c.
If omitted during document insertion, MongoDB generates an ObjectId automatically.
Correct.
The _id field in MongoDB is necessary for each document and must be unique. If it’s not provided during document insertion, MongoDB will automatically create an ObjectId for the _id field.
d.
It is required for every document in MongoDB.
Correct.
Every document in MongoDB must have an _id field. If it’s not provided during document insertion, MongoDB will automatically create an ObjectId for the _id field.
`;
