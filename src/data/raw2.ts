export const rawText2 = `【1. MongoDB and the Document Model】
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
=
Which of the following data types is used for high-precision calculations and financial data in BSON? (Select one.)
a.
Boolean
Incorrect.
In BSON, boolean values are used to represent binary state data with values of true or false. They cannot be used for high-precision calculations or financial data.
b.
Decimal128
Correct.
In BSON, the decimal128 data type is used for high-precision calculations and financial data.
c.
Int32
Incorrect.
In BSON, the int32 data type is a 32-bit integer. Because integers are whole numbers only, they are unable to process fractional or decimal values that are required for financial data or high-precision calculations.
d.
Null
Incorrect.
In BSON, null represents the absence of a value and cannot be used for calculations of any kind.
=
In Atlas, how do you perform a simple query to find specific data? (Select one.)
a.
Select the Browse Collections option.
Incorrect.
The Browse Collections option allows you to navigate your collections, but to perform a simple query in Atlas, you need to enter field-value pairs directly in the filter bar on the Collections tab.
b.
View your data in table format.
Incorrect.
Viewing data in table format in Atlas helps to visualize your documents, but to perform a simple query, you must enter field-value pairs in the filter bar on the Collections tab.
c.
It isn't possible to perform a simple query in Atlas.
Incorrect.
It is possible to perform simple queries directly in Atlas. To find specific data, you must enter field-value pairs in the filter bar on the Collections tab.
d.
Enter field-value pairs in the filter bar on the Collections tab.
Correct.
To perform a simple query in Atlas to find specific data, you must enter field-value pairs directly in the filter bar on the Collections tab.
=
You are working with the memorabilia collection in the Atlas UI and need to add a new document for an autographed photo from the movie The Alamo, which is signed by three people. What best describes the steps you should take? (Select one.)
a.
Click Create Database followed by Insert Document, enter the field names and corresponding data types, click the Add to Existing Collection button.
Incorrect.
The Insert Document button is found on the Document view once a collection is selected and cannot be accessed from the Create Database modal. The Create Database button is used to create a new database and an initial collection within that database.
b.
Click Insert Document, choose a view, enter the field names and corresponding data types, click Insert.
Correct.
To add a new document to the memorabilia collection from the Atlas UI, click the Insert Document button to open the Insert Document modal, where you can add the document field-value pairings. Once all field-value pairings are added, click the Insert button.
c.
In the document view filter bar, insert the "new" keyword followed by a JSON document with the field-value pairings, then click Apply.
Incorrect.
The filter bar on the document view in the Atlas UI can only be used to query for documents. To insert documents into a collection, you must first click the Insert Document button, add the appropriate field-value pairings, and then click the Insert button.
=
In our movies collection, which is an example of a one-to-many relationship? (Select one.)
a.
Movies and the theaters that are showing them.
b.
A movie and the studio that released it.
c.
A movie and its cast members.
Correct.
A movie typically has many cast members. This represents a one-to-many relationship.
d.
Theaters and the movies they are showing.
=
In the context of a movie database application, which of the following is an example of an entity? (Select one.)
a.
The rating of a movie.
b.
A document representing a movie tracked in the database application.
Correct.
A movie is a distinct object in the database application. We would want to have documents per movie that we keep together in a collection.
c.
The genre of a movie.
d.
The release date of a movie.
=
What is the typical approach for modeling a one-to-one relationship in MongoDB, where one entity is related to exactly one other entity? (Select one.)
a.
Embedding
Correct.
To model a one-to-one relationship in MongoDB, the typical approach is to embed the data. Embedding keeps related data together within the parent document, simplifying queries and allowing all related information to be stored and retrieved in a single document.
b.
Referencing
Incorrect.
Referencing is not the preferred approach for modeling a one-to-one relationship, as it involves storing related data in separate documents, which can increase complexity.
c.
Flattening
Incorrect.
Flattening refers to reducing nested data structures and is not specifically related to modeling a one-to-one relationship in MongoDB.
d.
Normalizing
Incorrect.
While normalizing data is the standard practice for relational databases, the core principle of data modeling for MongoDB is "Data that is accessed together should be stored together." Normalization goes against this principle.
=
You are designing a MongoDB schema for a movie database. There are approximately 40 movie genres represented in the database. A movie will typically belong to a few genres, and each genre could include thousands of movies.
If you want to include the genre information for each movie, while also being able to query for all movies within a genre, how should you model the relationship between movies and genres from each side? (Select all that apply.)
a.
Embed the genres directly within the movie document.
Correct.
Embedding genres within the movie document is suitable for this many-to-many relationship. Since each movie will likely not have more than a few genres, the genres can be directly embedded without fear of bloating the documents.
b.
Reference the genres in the movie document using an array of genre IDs.
Incorrect.
Referencing the genres in the movie document using an array of genre IDs is suitable for some many-to-many relationships, but does not provide any benefit in this scenario. You would need to run a second query for just a few results, leading to slower application performance. Embedding would provide the same results in a single query.
c.
Embed the movie documents within each genre document.
Incorrect.
Embedding movies within each genre document is not suitable for this many-to-many relationship. Potentially thousands of movies belong to a given genre, and an array of thousands of movies can quickly consume too much space, leading to bloated documents.
d.
Reference the movies in each genre document using an array of movie IDs.
Correct.
Since each genre contains thousands of movies, referencing the movies in each genre document using an array of movie IDs is suitable for this many-to-many relationship. The document sizes can remain stable with the need for a single additional query to retrieve all of the results while allowing for independent updates to movie information.
=
【2. MongoDB Data Modeling Intro】
Which of the following statements is/are true about data modeling? (Select all that apply.)
a.
Data modeling is the process of defining how data is stored.
Correct!
Defining how data is stored is one function of data modeling. Data modeling helps you use your data effectively to meet information needs.
b.
Data modeling is the process of defining the relationships that exist among different entities in your data.
Correct!
Defining the relationships that exist among different entities in your data is one function of data modeling. Data modeling enables you to document data requirements for applications and identify errors in development plans before any code is written.
c.
Data modeling is the process of collecting data.
=
Which of the following are benefits of a proper data model? (Select all that apply.)
a.
A proper data model makes it easier to manage your data.
Correct!
A proper data model makes it easier to manage your data. It will sustain growing data volumes and adjust easily to the addition or deletion of data.
b.
A proper data model makes queries more efficient.
Correct!
A proper data model makes queries more efficient. It helps developers understand the database and tune it for fast performance, which makes reading and writing to the database faster.
c.
A proper data model uses less memory and CPU.
Correct!
A proper data model uses less memory and CPU. Data modeling helps you better estimate and model memory requirements.
d.
A proper data model reduces costs.
Correct!
A proper data model can reduce costs by using your database more efficiently. Data modeling catches errors and oversights early, when they are easier to fix.
=
Which of the following is a benefit of the document model?
a.
The document model does not enforce any document structure by default. This means that documents even in the same collection can have different structures.
Correct!
The document model does not enforce any document structure by default. This means that documents, even in the same collection can have different structures.
b.
The document model makes having a schema useless.
c.
The document model supports only simple relationships among data to make data wrangling easier.
=
Which of the following are common types of relationships that are found in every database? (Select all that apply.)
a.
One-to-one relationship
Correct!
A one-to-one relationship is one of the most common types of relationships found in a database. One-to-one is a relationship where a data entity in one set is connected to exactly one data entity in another set.
b.
One-to-many relationship
Correct!
A one-to-many relationship is one of the most common types of relationships found in a database. One-to-many is a relationship where a data entity in one set is connected to any number of data entities in another set.
c.
Many-to-many relationship
Correct!
A many-to-many relationship is one of the most common types of relationships found in a database. Many-to-many is a relationship where any number of data entities in one set are connected to any number of data entities in another set.
d.
One-to-zillions relationship
=
What is the type of relationship shown in the following document?
{
"_id": ObjectId("00000001"),
"name": "Marnie Dupree",
"grade": "Freshman",
"studentId": 123456,
"email": "mdupree@college.edu"
}
a.
One-to-one relationship
Correct!
There is a one-to-one relationship in this document. This is a document for a single student that contains her unique identifying fields.
b.
One-to-many relationship
c.
Many-to-many relationship
=
A legacy bank database has been ported to MongoDB, resulting in a set of collections that were mapped to their original tables.
You're tasked with redesigning the accounts collection of the banking database to make the information clearer. The bank would like you to keep the customers' contact information and account information separate.
The following is a sample document in the accounts collection:
{
"account_id": "MDB653115886",
"account_holder": "Herminia Mckinney",
"account_type": "savings",
"balance": 6617.34,
"street_num": 123,
"street": "Main St",
"city": "Tulsa",
"state": "OK",
"zip": 74008,
"country": "USA",
"home_phone": 1234567890,
"cell_phone": 1111111111,
"transfers": [
...
],
}
Which of the following actions can be made to improve this schema? Consider the following requirements:
Preserve the one-to-one relationship among all the fields.
Keep the contact and account information separate.
Store data together that is accessed together.
Hint
Remember that you can embed subdocuments and create separate collections.
a.
Create two collections: one for accounts and one for customer_info.
Correct!
Creating two collections, one for accounts and one for customer_info, aligns with the customer's requirements. It also ensures that data that is accessed together is stored together.
b.
Embed the phone numbers as a subdocument.
Correct!
Embedding the phone numbers as a subdocument can improve the schema, and it ensures that data that is accessed together is stored together.
c.
Create two collections that have no overlapping fields.
Incorrect.
Creating two collections that have no overlapping fields would not keep related information together, as there would not be references to link the two collections. This would not follow the principle of storing data together that is accessed together.
d.
Keep the current schema as is.
Incorrect.
Keeping the current schema as is would not be the best option here given the requirements. The current schema does not keep contact information and account information separate, and it does not follow the principle of storing data together that is accessed together.
=
Which of the following statements is/are true about embedding data in documents? (Select all that apply.)
a.
Embedding data in documents simplifies queries.
Correct!
Embedding data simplifies queries because it avoids application joins. It fulfills the principle that data that is accessed together should be stored together.
b.
Embedding data in documents improves the overall performance of queries.
Correct!
Embedding data provides better performance for read operations. Embedded documents enable you to store all kinds of related information in a single document.
c.
Embedding data in documents makes your document smaller over time.
Incorrect.
Over time, embedding data in a single document can make your document increasingly larger as you add data. This can lead to excessive memory and add latency for reads because large documents must be read into memory in full.
d.
Embedding data in documents never results in an unbounded document.
Incorrect.
When embedding data, you might structure your document in a way that data is added continuously, without limit. This creates an unbounded document, which might exceed the maximum BSON document size of 16 MB.
=
Which of the following relationship types often use embedding? (Select all that apply.)
a.
One-to-one relationship
Correct!
With MongoDB, embedding a one-to-one relationship means putting the two pieces of information in the same document. You could also opt to use a subdocument to group related information, such as the components of an address.
b.
One-to-many relationship
Correct!
Embedding is often used when there are one-to-many relationships in the data that's being stored. MongoDB recommends embedding documents to simplify queries and improve overall query performance.
c.
Many-to-many relationship
Correct!
Embedding is often used when there are many-to-many relationships in the data that's being stored. MongoDB recommends embedding documents to simplify queries and improve overall query performance. It is important to note that embedding this type of relationship may introduce data duplication.
=
Which of the following statements is/are true about referencing data in documents? (Select all that apply.)
a.
Referencing data in documents avoids duplication of data.
Correct!
Referencing allows you to store data in two different collections and ensure that the collections are related. This avoids duplication of data.
b.
Referencing data in documents may result in smaller documents.
Correct!
Referencing avoids duplication of data and, in most cases, results in smaller documents.
c.
Referencing data in documents links documents by using the same field.
Correct!
References save the _id field of one document in another document as a link between the two.
d.
Referencing data in documents improves read performance.
=
Imagine the following are a sample of documents from a users collection:
...
{
"id": "AL001",
"name": "Ella Richardson"
},
{
"id": "AL002",
"name": "Jackie Thomas"
},
{
"id": "AL003",
"name": "Justin McDonald"
},
...
Consider the following document from a posts collection, which contains data about a blog post and its comments. Which field is used as a reference? (Select one.)
{
"author": "Aileen Long",
"title": "Learn MongoDB in 30 Mins",
"published_date": ISODate("2020-05-18T14:10:30Z"),
"tags": ["mongodb", "introductory", "database", "nosql"],
"comments": [
{
"comment_id": "LM001",
"user_id": "AL001",
"comment_date": ISODate("2020-05-19T14:22:00Z"),
"comment": "Great read!"
},
{
"comment_id": "LM002",
"user_id": "AL002",
"comment_date": ISODate("2020-06-01T08:00:00Z"),
"comment": "So easy to understand - thanks!"
}
]
}
comment_id
b.
comments
c.
date
d.
user_id
Correct.
user_id is a reference to a document in the users collection. Reference: https://www.mongodb.com/docs/manual/reference/database-references/
=
What are the effects of creating unbounded documents when embedding data? (Select all that apply.)
a.
Unbounded documents impact write performance.
Correct!
Embedding data will make the document larger and impact write performance. As more data is added to each document, the entire document is rewritten into MongoDB data storage.
b.
Unbounded documents improve pagination performance.
c.
Unbounded documents cause storage problems.
Correct!
Unbounded documents caused by embedding will eventually run into storage problems by exceeding the maximum document size of 16 MB.
=
What is the recommended way to avoid the unbounded document sizes that may result from embedding?
a.
Break data into multiple collections and use references.
Correct!
To prevent unbounded document sizes that may result from embedding, you can break up your data into multiple collecitons and use references to keep frequently accessed data together.
b.
Break data into multiple databases.
c.
Separate documents to store on different servers.
=
What is MongoDB's principle for how you should design your data model?
a.
Data that is accessed together should be stored together.
Correct!
Data that is accessed together should be stored together. How you model your data depends entirely on your particular application's data access patterns. You want to structure your data to match the ways that your application queries and updates it.
b.
Data that is collected in the same day should be stored together.
c.
Data that is not in a one-to-one relationship should be stored together.
=
Which tab in Data Explorer shows ways to improve your schemas?
a.
Indexes
b.
Schema Anti-Patterns
Correct!
The Schema Anti-Patterns tab highlights any issues in the collection and provides details to resolve them. You can improve your schema by resolving the anti-patterns that are shown.
c.
Find
=
What is the minimum Atlas Cluster tier that you must have to use the Performance Advisor tool?
a.
M0
b.
M10
Correct!
The Performance Advisor tool is available in M10+ cluster tiers.
c.
M30
=
【3. The MongoDB Shell】
Which of the following commands can be used to connect to a database called students on a local MongoDB instance? (Select one.)
a.
mongosh
Incorrect.
This command will connect to a MongoDB instance, but it will not connect to a database called students. Instead, it will connect to the test database.
b.
mongosh --host localhost --db students
Incorrect.
This command will connect to a MongoDB instance, but the --db option is not valid for mongosh. You can, however, connect to localhost and a database called students by adding the database after the host, like this: mongosh –host localhost students.
c.
mongosh --db students
Incorrect.
This command will connect to a MongoDB instance, but the --db option is not valid for mongosh. You can, however, connect to localhost and a database called students by removing the --db flag from the command, like this: mongosh students.
d.
mongosh students
Correct.
This command will connect to a local MongoDB instance and select the students database. This method is also the shortest.
=
Which of the following are valid methods for connecting mongosh to a MongoDB Atlas cluster and selecting the sample_training database? (Select all that apply.)
a.
mongosh "mongodb+srv://.mongodb.net/?database=sample_training" –username
Incorrect.
Although using the --username flag is a valid way to pass in the database user, passing the database name as a query parameter within the connection string will result in an error.
b.
mongosh "mongodb+srv://:@.mongodb.net/sample_training"
Correct.
This connection string is valid for connecting mongosh to a MongoDB Atlas cluster and selecting the sample_training database. This connection string appends the database name to the connection string as part of its URI.
c.
mongosh "mongodb+srv://.mongodb.net/" –username --db sample_training
Incorrect.
Although this command allows you to connect to the Atlas cluster, the --db flag is not recognized in mongosh. Therefore, the user will be connected to the test database rather than the sample_training database.
d.
mongosh "mongodb+srv://.mongodb.net/sample_training" --username
Correct.
This connection string is valid for connecting mongosh to a MongoDB Atlas cluster and selecting the sample_training database. You can use the --username flag to specify the username, which will prompt the user for their password.
=
What method from the config API allows you to set a configuration option in mongosh? (Select one.)
a.
config.get()
Incorrect.
The config.get() method is used to retrieve a configuration option in mongosh.
b.
config.set()
Correct.
The config.set() method, one of the methods available in the config API, allows you to set the value of a specific configuration option by passing the name of the option that you want to set and the value. For example, if you want to disable telemetry, you would use config.set('enableTelemetry', false).
c.
config.apply()
Incorrect.
The config.apply() method is not a valid method in mongosh.
d.
db.config.set()
Incorrect.
The db.config.set() method is not a valid method in mongosh.
=
Which of the following settings can be adjusted by editing an option in the mongosh.conf file? (Select all that apply.)
a.
The color of the font that’s displayed in mongosh
Incorrect.
The mongosh.conf file is used to configure the behavior of mongosh. It does not affect the font color.
b.
How many items per batch are displayed when using the “it” iterator
Correct.
The mongosh.conf file can be used to change the displayBatchSize option, which controls how many items per batch are displayed when using the it iterator. For example, running db.accounts.find() would return a batch of 10 documents, assuming the displayBatchSize is set to 10, instead of returning all documents in the collection.
c.
The editor used by mongosh when using the edit() method
Correct.
The mongosh.conf file can be used to change the editor option, which determines the editor that’s used by mongosh when using the edit() method. By default, no editor is set. So, if you run config.get(“editor”), it will return a null value.
d.
Whether mongosh prompts the user for confirmation before running a deleteOne() or deleteMany() command
Incorrect.
There is no option in the mongosh.conf file that allows the user to confirm whether they want to delete documents when deleteOne() or deleteMany() is run against the database.
=
You want to use an external JavaScript file within an active mongosh session. What method should you use? (Select one.)
a.
load()
Correct.
The load() method allows you to load and use an external JavaScript file within an active mongosh session. For example, if you have a file named myScript.js in the current working directory, you can load it by running load('myScript.js').
b.
loadjs()
Incorrect.
The loadjs() method is not a valid method in mongosh.
c.
run()
Incorrect.
The run() method is not a valid method in mongosh.
d.
You cannot use external JavaScript files within an active mongosh session.
Incorrect.
mongosh allows you to load JavaScript files into the shell by using a particular method. What method is used to load an external JavaScript file into an active mongosh session?
=
What method is used to change databases within a script by using the load() method in mongosh? (Select one.)
a.
db.getDb()
Incorrect.
The db.getDb() method is not a valid method for use in mongosh. It will throw an error when used within a script that’s loaded into mongosh by using the load() method.
b.
db.getMongo()
Incorrect.
The db.getMongo() method will return the connection string for the current deployment when used in a script or mongosh. However, it will not allow you to change databases.
c.
use
Incorrect.
The use helper can be used to change databases when using mongosh. However, it will throw an error when used in a script that’s loaded into mongosh by using the load() method.
d.
db.getSiblingDB()
Correct.
The db.getSiblingDB() method allows you to change databases within a script that gets loaded into mongosh by using the load() method. The db.getSiblingDB() method accepts one argument, which is a string that contains the name of the database that you want to switch to.
=
Where should the .mongoshrc.js file be located? (Select one.)
a.
The same directory as the mongosh executable.
Incorrect.
The .mongoshrc.js file should not be located in the same directory as the mongosh executable, as mongosh won’t be able to use the file.
b.
The user's home directory.
Correct.
The .mongoshrc.js file should be located in the user's home directory so that mongosh will be able to load and use it.
c.
The file must be loaded into the mongosh session by using the load() method.
Incorrect.
The .mongoshrc.js file is loaded automatically when you start a new mongosh session. It does not need to be loaded by using the load() method.
=
Which of the following methods terminate an active mongosh session? (Select one.)
a.
exit
Correct.
You can end the current mongosh session by running exit in the shell. You can also end the current session by using quit, or by pressing Ctrl + D on your keyboard.
b.
db.exit()
Incorrect.
In mongosh, db.exit() is not recognized as a valid method for terminating a session. Doing so will throw an error message that states db.exit is not a function.
c.
db.quit()
Incorrect.
In mongosh, db.quit() is not recognized as a valid method for terminating a session. Doing so will throw an error message that states db.quit is not a function.
=
Which of the following examples demonstrates the correct usage of the EJSON.stringify() method in mongosh to convert an extended JSON object into a string? (Select one.)
A. EJSON.stringify({ name: “Test User”, dob: new Date(“1990-01-01”)})
B. EJSON.stringify(name: “Test User”, dob: new Date(“1990-01-01”)
C. ({name: “Test User”, dob: new Date(“1990-01-01”)}).EJSON.stringify()
D. EJSON.stringify = { name: “Test User”, dob: new Date(“1990-01-01”)}
a.
Option A
Correct.
The proper syntax for the EJSON.stringify() method is to pass the EJSON object into the method as an argument.
b.
Option B
Incorrect.
While the method is invoked correctly, and the argument is passed to the method, the argument that’s passed is not an object.
c.
Option C
Incorrect.
The way that the method is invoked in this example implies that EJSON.stringify is a method on the object that precedes it. This is not the case.
d.
Option D
Incorrect.
The syntax in this example attempts to reassign the value of EJSON.stringify to an object.
=
In mongosh, what Node.js fs module API method can be used to write the results of a query to a file? (Select one.)
a.
fs.write()
Incorrect.
The Node.js fs module does have a write() method, but it’s used to indicate a position and buffer that you want to write to.
b.
fs.writeFileSync()
Correct.
The Node.js fs module’s writeFileSync() method allows you to specify a path to write to as well as the data to write. It can be used in mongosh to write the results of a query after converting the results to an EJSON string.
c.
fs.commit()
Incorrect.
The Node.js fs module does not have a commit() method. There are two methods available in the fs API that enable writing to files, one that is synchronous and another that is asynchronous.
d.
EJSON.stringify()
Incorrect.
The EJSON.stringify() method is not specific to Node.js. It’s used in mongosh for converting extended JSON objects into strings.
=
You want to load a script into mongosh that requires an npm package. To do so, where should the npm package be installed? (Select all that apply.)
a.
An option for using an npm package in an external script is to install the package globally and then require it in the script.
Correct.
An option for using an npm package in an external script is to install the package globally and then require it in the script.
b.
The package can be installed in the node_modules directory in your current working directory. Then it can be added to a mongosh script that can be used with the load() method.
Correct.
An option for using an npm package in an external script is to install the package in the same directory as the script and then require it in the script.
c.
mongosh will automatically download and install the necessary dependencies when the script is run in the shell with the load() method.
Incorrect.
mongosh will not automatically download and install the necessary dependencies when the script is loaded. Like a Node.js application, when working in mongosh, you must install the necessary dependencies before you can use them by using a package manager like npm.
`;
