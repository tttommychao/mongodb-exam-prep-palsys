export const rawText3 = `【6. MongoDB CRUD Operations: Insert and Find Documents】
What methods are available in MongoDB for inserting a single document? (Select one.)
a.
.insertOne()
Correct! The insertOne() method is a valid method that's included in the MongoDB Shell to insert a single document.
b.
.inserting()
Incorrect. This is not a valid method included in the MongoDB Shell. What method can you use to insert a single document?
c.
.InsertDocument()
Incorrect. This is not a valid method included in the MongoDB Shell. What method can you use to insert a single document?
d.
.insertMany()
Incorrect. The insertMany() method is used to insert multiple documents. What method can you use to insert a single document?
=
Select an answer choice and then click "See Results" to submit.
What methods are available in MongoDB for inserting multiple documents? (Select one.)
a.
.InsertDocument()
Incorrect. The InsertDocument() method is not a valid MongoDB method to insert documents. What method can you use to insert a document?
b.
.inserting()
Incorrect. inserting() is not a valid method included in the MongoDB Shell. What method can you use to insert a document?
c.
.insertOne()
Incorrect. The insertOne() method is a valid method included in the MongoDB Shell, but it's used to insert a single document. What method can you use to insert multiple documents?
d.
.insertMany()
Correct! The insertMany() method is a valid method that's included in the MongoDB Shell to insert multiple documents.
=
What methods are available in MongoDB for finding documents? (Select one.)
a.
.find()
Correct! The find() method is a valid method that's included in the MongoDB Shell to find documents.
b.
.query()
Incorrect. This is not a valid method included in the MongoDB Shell. What method can you use to find documents?
c.
.finding()
Incorrect. This is not a valid method included in the MongoDB Shell. What method can you use to find documents?
d.
.search()
Incorrect. This is not a valid method included in the MongoDB Shell. What method can you use to find documents?
=
You are searching for data on a small area in downtown Chicago with the following zip codes:
“60601”
“60602”
“60603”
“60604”
“60605”
“60606”
Which of the following query documents should you use to ensure that only the documents with the specified zip codes are returned? (Select one.)
a.
{ zip: { $nin : [ "60601", "60602", "60603", "60604", "60605", "60606"] } }
Incorrect. The $nin operator returns documents that do not contain the values specified in the array. Including this query would not return the specified Chicago zip codes.
b.
{ zip: { $in : [ "60601", "60602", "60603", "60604", "60605", "60606"] } }
Correct! The $in operator returns documents that contain the values specified in the array. This query will return the specified Chicago zip codes.
c.
{ zip: { $eq : "60601", "60602", "60603", "60604", "60605", "60606" } }
Incorrect. This syntax is inaccurate because the $eq operator matches documents that contain only one specified value.
d.
{ zip: "60601", "60602", "60603", "60604", "60605", "60606" }
Incorrect. This syntax is inaccurate because the implicit equality operator matches documents that contain only one specified value.
=
Your company is conducting research on the customer experience and is focused on identifying unsatisfied customers. You need to find all customers with a satisfaction rating of 1 or 2.
Which of the following query documents would return all customers with a satisfaction rating of 1 or 2? (Select one.)
a.
{ "customer.satisfaction" : { $gt : 1}}
Incorrect. This query would return all documents with a customer satisfaction rating greater than 1. To solve this problem, you need to select a query that returns all documents with a customer satisfaction rating less than or equal to 2.
b.
{ customer.satisfaction : { $lte : 2}}
Incorrect. This syntax is incorrect. Remember, to access subdocuments, you must use the syntax “field.nestedfield”, which includes quotation marks.
c.
{ "customer.satisfaction" : { $lt : 2}}
Incorrect. This query would return all documents with a customer satisfaction rating less than 2. To solve this problem, you need to select a query that returns all documents with a customer satisfaction rating less than or equal to 2.
d.
{ "customer.satisfaction" : { $lte : 2}}
Correct! This query will return all documents with a customer satisfaction rating of less than or equal to 2.
=
Your company wants to offer a special discount for customers who are 65 or older. Your task is to find the records for these customers. Which of the following queries would return documents for all customers 65 or older? (Select all that apply.)
a.
{ customer.age : { $gte : 65 }}
Incorrect. This syntax is incorrect. Remember, to access subdocuments, you must use the syntax “field.nestedfield”, which includes quotation marks.
b.
{ "customer.age" : { $gt : 64 }}
Correct! This query would return all documents where the customer age is greater than 64, which includes those 65 and older.
c.
{ "customer.age" : { $gte : 65 }}
Correct! This query would return all documents where the customer age is greater than or equal to 65.
d.
{ "customer.age" : { $lte : 65 }}
Incorrect. This query would return all documents where the customer age is less than or equal to 65. To solve this problem, you need to find all documents where the customer age is 65 or older.
=
Which of the following operators can be used to find a subdocument that matches specific criteria in an array?
a.
&element
Incorrect. This is not a valid operator included in the MongoDB Shell. What operator can you use to find a subdocument that matches specific criteria in an array?
b.
$elemMatch
Correct! The $elemMatch operator is a valid operator that's included in the MongoDB Shell to find a subdocument that matches specific criteria in an array.
c.
$subMatch
Incorrect. This is not a valid operator included in the MongoDB Shell. What operator can you use to find a subdocument that matches specific criteria in an array?
d.
$docMatch
Incorrect. This is not a valid operator included in the MongoDB Shell. What operator can you use to find a subdocument that matches specific criteria in an array?
=
What will the following query return? (Select one.)
db.books.find({ genre: "Historical" })
a.
All documents where the genre field is equal to either the scalar value of “Historical” or an array that contains “Historical”.
Correct! This query will return all documents that contain “Historical” as a scalar value and as an array element within the genre field.
b.
All documents that contain the string “Historical” across any field.
Incorrect. This query will not return all documents that contain the string “Historical” in any field. It will return all documents that contain “Historical” as a scalar value and as an array element within the genre field.
c.
All documents where the genre field does not contain the value “Historical”.
Incorrect. This query will not filter out all documents that contain the string “Historical” in any field. It will return all documents that contain “Historical” as a scalar value and as an array element within the genre field.
=
You want to know which mobile food trucks in your neighborhood, Astoria, are the best spots to eat. Using the inspections collection, you’re making a map of all mobile food trucks nearby that have passed inspection. What should you include in your query document to ensure that you find all the mobile food vendors in Astoria that passed inspection? (Select one.)
a.
{ "sector": "Mobile Food Vendor - 881" } ,{ "address.city": "ASTORIA"} , {"result": "Pass"}
Incorrect. This answer option contains three separate query documents and is invalid. In order to use implicit AND specify the values within one query document.
b.
$and: {“Mobile Food Vendor - 881”, “ASTORIA”, “Pass}
Incorrect. This syntax is invalid. When using the $and operator, you must include each expression within an array.
c.
{ "sector": "Mobile Food Vendor - 881" , "address.city": "ASTORIA" , "result": "Pass"}
Correct! This query document uses implicit AND, so it will return all mobile food vendors in Astoria that have passed inspection.
d.
&and: {“Mobile Food Vendor - 881”, “ASTORIA”, “Pass}
Incorrect. This syntax is invalid. When using the $and operator, you must include each expression within an array.
=
What will the following query return? (Select one.)
db.routes.find({
$and: [
{ $or: [{ dst_airport: "IST" }, { src_airport: "IST" }] },
{ $or: [{ stops: 0 }, { airline.name: "Turkish Airlines"}] },
]
})
a.
All flights departing from or landing at the Istanbul airport (IST) that are nonstop or operated by Turkish Airlines.
Correct! This query will return all flights that either depart from or land at the Istanbul airport that are nonstop or operated by Turkish Airlines.
b.
All flights that are either departing from the Istanbul airport (IST) or Turkish Airlines flights that are nonstop.
Incorrect. To return all flights that are either departing from the Istanbul airport or nonstop Turkish Airlines flights, you would write the following query:
db.routes.find({
$or: [{ src_airport: "IST" }, { airline.name: "Turkish Airlines", stops: 0 }],
})
c.
All flights that are either landing at the Istanbul airport (IST) or operated by Turkish Airlines.
Incorrect. To return only flights that are landing at the Istanbul airport or those operated by Turkish Airlines, you would write the following query:
db.routes.find({
$or: [{ dst_airport: "IST" }, { airline.name: "Turkish Airlines" }],
})
d.
All Turkish Airlines flights that are nonstop.
Incorrect. To return all Turkish Airlines flights that are nonstop, you would write the following query:
db.routes.find({ "airline.name": "Turkish Airlines", stops: 0 })
=
【7. MongoDB CRUD Operations: Replace and Delete Documents】
Which of the following statements regarding the \`replaceOne()\` method for the MongoDB Shell (\`mongosh\`) are true? (Select all that apply.)
a.
This method is used to replace a single document that matches the filter document.
Correct! The \`replaceOne()\` method is used to replace a single document that matches the filter document.
b.
This method accepts a filter document, a replacement document, and an optional options document.
Correct! The \`replaceOne()\` method accepts a filter document, a replacement document, and an optional options document.
c.
This method can replace multiple documents in a collection.
Incorrect. The \`replaceOne()\` method is used to replace a single document that matches the filter document. Which of the other statements describe \`replaceOne()\`?
d.
This method returns a document containing an acknowledgement of the operation, a matched count, modified count, and an upserted ID (if applicable).
Correct! The \`replaceOne()\` method returns a document containing an acknowledgement of the operation, a matched count, modified count, and an upserted ID (if applicable).
=
You want to replace the following document from the birds collection with a new document that contains additional information on recent sightings, the scientific name of each species, and wingspan. What field should you use in the filter document to ensure that this specific document is replaced? (Select one.)
{ _id: ObjectId("6286809e2f3fa87b7d86dccd") },
{
common_name: "Morning Dove",
habitat: ["urban areas", "farms", "grassland"],
diet: ["seeds"]
}
a.
{ _id: ObjectId("6286809e2f3fa87b7d86dccd") }
Correct! Including the _id field as the filter document ensures that you’ll replace this specific document by using replaceOne().
b.
{ diet: ["seeds"] }
Incorrect. { diet: ["seeds"] } is not a unique field, so you cannot ensure that you will replace this specific document. If you use the diet field as the filter, MongoDB will replace the first document that contains { diet: ["seeds"] }.
c.
{ habitat: ["urban areas"] }
Incorrect. { habitat: ["urban areas"] } is not a unique field, so you cannot ensure that you will replace this specific document. If you use the diet field as the filter, MongoDB will replace the first document that contains { habitat: ["urban areas"] }.
d.
{ scientific_name: "Zenaida macroura" }
Incorrect. The document that you want to replace does not contain { scientific_name: "Zenaida macroura" }. Using { scientific_name: "Zenaida macroura" } as the filter will replace another document.
=
You want to add an element to the items array field in the sales collection. To do this, what should you include in the update document? (Select one.)
A.
{ $set: { items:[{ “name”: "tablet", “price”: 200}] } }
B.
{ $update: { items:[{ “name”: "tablet", “price”: 200}] } }
C.
{ $push: { items:[{ “name”: "tablet", “price”: 200}] } }
D.
{ $upsert: { items:[{ “name”: "tablet", “price”: 200}] } }
a.
Option A
Incorrect. The $set operator replaces the value of a field with the specified value. This code example would replace the value of the items field. It would not add an element to the existing array.
b.
Option B
Incorrect. This syntax is invalid. $update is not a MongoDB operator.
c.
Option C
Correct! The $push operator adds an element to an array field. In this example, you will add an array element for a tablet.
d.
Option D
Incorrect. This syntax is invalid. The upsert option can add a document to a collection if it does not already exist. upsert cannot be used to update the value of a field.
=
Air France has recently passed inspection. In the following document, you need to update the results field from Fail to Pass. To do this, what should you include in your update document? (Select one.)
{
_id: ObjectId("56d61033a378eccde8a837f9"),
id: '31041-2015-ENFO',
certificate_number: 3045325,
business_name: 'AIR FRANCE',
date: 'Jun 9 2015',
result: 'Fail',
sector: 'Travel Agency - 440',
address: {
city: 'JAMAICA',
zip: 11430,
street: 'JFK INTL AIRPORT BLVD',
number: 1
}
}
A.
{ $set: {result: ‘Pass’} }
B.
{ $upsert: {result: ‘Pass’} }
C.
{ $insert: {result: ‘Pass’} }
D.
{ $push: {result: ‘Pass’} }
a.
Option A
Correct! The $set operator replaces the value of a field with the specified value, so using this update document would update the result field to 'Pass'.
b.
Option B
Incorrect. This syntax is invalid. The upsert option can add a document to a collection if it does not already exist. upsert cannot be used as an update operator to update the value of a field.
c.
Option C
Incorrect. This syntax is invalid. $insert is not a MongoDB update operator.
d.
Option D
Incorrect. The $push operator adds an element to an array field. The result field is a string, not an array, so you cannot use the $push operator to update the value of result.
=
Using the zips collection, you write the following query. This query updates the population, which is stored in the pop field, in one zip code in Santa Fe, New Mexico. What will be returned? (Select one.)
db.zips.findAndModify({
query: { _id: ObjectId("5c8eccc1caa187d17ca72ee7") },
update: { $set: { pop: 40000 } },
new: true,
})
a.
The updated document, which contains a population of 40000
Correct! When the new option is set to true, findAndModify() returns the updated document. This query will return the updated document with a population of 40000.
b.
The original document, prior to the update, which contains a population of 34054
Incorrect. When the new option is set to true, findAndModify() returns the updated document. This query will return the updated document with a population of 40000.
c.
All documents with a population of 40000
Incorrect. findAndModify() will update and return a single document, not multiple documents.
d.
A new document that contains only an _id field and a population field
Incorrect. findAndModify() will insert a new document only if the upsert option is set to true. This query does not include the upsert option.
=
What would happen if you ran the following query on the zips collection? Note that there is currently no document for the city of Taos. (Select one.)
db.zips.findAndModify({
query: { zip: 87571 },
update: { $set: { city: "TAOS", state: "NM", pop: 40000 } },
upsert: true,
new: true,
})
a.
A new document would be inserted because the new option is set to true.
Incorrect. When the new option is set to true, the updated version of a document is returned, regardless of whether that document is new or existing.
b.
A new document would be inserted because the upsert option is set to true.
Correct! When the upsert option is set to true, a new document will be inserted if one does not already exist. For existing documents, the upsert option will cause the document to be updated.
c.
You would receive an error, because you cannot insert a new document when using the findAndModify() method.
Incorrect. If you use findAndModify() to insert a new document without including the upsert option, you will receive an error or a null response,and the document will not be inserted. In this example, the document is inserted because the upsert option is set to true.
=
Three computer science classes, with the class_ids of 377, 259, and 350, have earned 100 extra credit points by competing in a hackathon. You need to update the database so that all students who are in these classes receive extra credit points. Note that you will use the grades collection, which is in the sample_training database.
Which of the following queries will accomplish this goal? (Select one).
A.
db.grades.insertMany(
{
class_id: {
$in: [ 377, 259, 350 ]
},
},
{
$push: {
scores: [
{ type : 'extra credit', score: 100 }
]
}
}
)
B.
db.grades.updateMany(
{
class_id: {
$in: [ 377, 259, 350 ]
},
},
{
$push: {
scores: [
{ type : 'extra credit', score: 100 }
]
}
}
)
C.
db.grades.updateOne(
{
class_id: {
$in: [ 377, 259, 350 ]
},
},
{
$push: {
scores: [
{ type : 'extra credit', score: 100 }
]
}
}
)
D.
db.grades.findAndModify(
{
class_id: {
$in: [ 377, 259, 350]
},
},
{
$push: {
scores: [
{ type : 'extra credit', score: 100 }
]
}
}
)
a.
Option A
Incorrect. db.collection.insertMany() is used to insert multiple documents. It does not update existing documents.
b.
Option B
Correct! Using db.collection.updateMany() enables you to update multiple documents at once.
c.
Option C
Incorrect. db.collection.updateOne() updates only one document. To update the grades of all students in these classes, you need to use another collection method.
d.
Option D
Incorrect. db.collection.findAndModify() requires a query field and an update field. Running this query will throw an error message.
=
United Airlines is the only airline that has a route from the Denver Airport (DEN) to the Northwest Arkansas Airport (XNA). It has decided to cancel this route due to low ridership.
Which of the following queries will delete the route? (Select one.)
Note that these documents are contained in the routes collection in the sample_training database.
A.
db.routes.deleteOne({ "airline.name": "United Airlines"})
B.
db.routes.delete({ "airline.name": "United Airlines"})
C.
db.routes.delete({ src_airport: "DEN", dst_airport: "XNA"})
D.
db.routes.deleteOne({ src_airport: "DEN", dst_airport: "XNA"})
a.
Option A
Incorrect. This query would delete the first document that has the airline name of United Airlines. Instead, you need to delete the document that departs from Denver, where the src_airport field is set to “DEN” and lands in the Northwest Arkansas airport, where the dst_airport field is set to “XNA”.
b.
Option B
Incorrect. db.collection.delete() is not a valid collection method in MongoDB.
c.
Option C
Incorrect. Although the airports are correct, db.collection.delete() is not a valid collection method in MongoDB.
d.
Option D
Correct! The db.collection.deleteOne() method is used to delete a single document. The filter document contains the src_airport field with a value of “DEN” to specify a flight departing from Denver, and a dst_airport field with a value of “XNA” to specify a flight landing in the Northwest Arkansas Airport.
=
Air Berlin has filed for bankruptcy and ceased operations. You need to update the routes collection to delete all documents that contain an airline name of Air Berlin. Which of the following queries should you use? (Select one.)
A.
db.routes.deleteOne({ "airline.name": "Air Berlin"})
B.
db.routes.delete("Air Berlin")
C.
db.routes.deleteMany({ "airline.name": "Air Berlin"})
D.
db.routes.deleteMany("Air Berlin")
a.
Option A
Incorrect. db.collection.deleteOne() deletes a single document. This query will delete one document for Air Berlin, not all documents containing Air Berlin.
b.
Option B
Incorrect. db.collection.delete() is not a valid method in MongoDB.
c.
Option C
Correct! This query will delete all documents that contain an airline name of Air Berlin.
d.
Option D
Incorrect. This syntax is incorrect. You need to include a query document that contains a field and a specified value.
=
【8. MongoDB CRUD Operations: Modifying Query Results】
Using the inspections collection within the sample_training database, you need to find all inspections that were passed. Your manager has requested that you organize this data by the certificate number in ascending order. Which query should you use? (Select one).
A.
db.inspections.find( { result : "Pass" }).sort( {certificate_number: 1});
B.
db.inspections.find( { result : "Pass" }).sort( {certificate_number: - 1});
C.
db.inspections.find( { result : "Pass" }, { sort: { certificate_number: 1 }})
D.
db.inspections.find( { result : "Pass" }, { sort: { certificate_number: - 1 }})
a.
Option A
Correct! This query will return documents for businesses that passed inspection ordered by the certificate number in ascending order.
b.
Option B
Incorrect. This query will return documents for businesses that passed inspection ordered by the certificate number in descending order. You need to sort by certificate number in ascending order.
c.
Option C
Incorrect. Sort is a cursor method, so it must be appended to the end of the query. This query will not return documents that have passed inspection ordered by certificate number in ascending order.
d.
Option D
Incorrect. Sort is a cursor method, so it must be appended to the end of the query. This query will not return documents that have passed inspection ordered by certificate number in ascending order.
=
You are considering creating a new membership tier for your bike sharing service for users who take long trips. Using the trips collection within the sample-training database, you need to find the trips, taken by subscribers, with the longest trip duration. Return the top 5 results in descending order. Which query should you use? (Select one.)
A.
db.trips.find( { usertype: "Subscriber"},( sort: { tripduration: - 1 }), { limit :5 })
B.
db.trips.find( { usertype: "Subscriber"},( sort: { tripduration: 1 }), { limit :5 })
C.
db.trips.find( { usertype: "Subscriber"}).sort( { tripduration: 1 }).limit(5)
D.
db.trips.find( { usertype: "Subscriber"}).sort( { tripduration: - 1 }).limit(5)
a.
Option A
Incorrect. This query will return a syntax error. Remember to append sort() and limit() to the find() method.
b.
Option B
Incorrect. This query will return a syntax error. Remember to append sort() and limit() to the find() method.
c.
Option C
Incorrect. This query will return the 5 documents with the shortest trip duration, completed by subscribers, in ascending order. You need to return documents with the longest trip durations sorted in descending order.
d.
Option D
Correct! This query will return the 5 documents with the longest trip durations, completed by subscribers, in descending order.
=
Which of the following statements are true about a projection document? (Select all that apply.)
a.
We can include fields in our results by setting their values to 1 in the projection document.
Correct! We can include fields in our results by setting their values to 1 in the projection document.
b.
We can exclude fields from our results by setting their values to 0 in the projection document.
Correct! We can exclude fields from our results by setting their values to 0 in the projection document.
c.
We can either include or exclude fields in the results, but not both. The _id field is the exception to this rule.
Correct! We can either include or exclude fields in the results, but not both. However, the _id field is the exception to this rule.
d.
Inclusion and exclusion statements, not including _id statements, can be combined with each other in a projection document.
Incorrect. We cannot combine inclusion and exclusion statements with each other in a projection document. However, the _id field is the exception to this rule.
=
If we don’t want to return the _id field, we can add it to the projection document and set it to which of the following values? (Select all that apply.)
a.
0
Correct! Setting the _id field value to 0 will exclude that field from the results.
b.
1
Incorrect. Setting a field value to 1 will include that field in the results. Which value will exclude the _id field?
c.
-1
Incorrect. -1 is not a valid value for projection. Which value will exclude the _id field?
d.
None of the above
Incorrect. We must set the _id field to a numerical value in the projection document. Which value will exclude the _id field?
=
Which of the following statements are true about the countDocuments() collection method? (Select all that apply.)
a.
The method takes a query parameter, which selects the documents to be counted.
Correct! The correct syntax for .countDocuments() is db.collection.countDocuments().
b.
We can use the method to count all documents in a collection.
Correct! We use countDocuments() with an empty document in the query parameter to count all documents in a collection.
c.
The method does not support the use of operators in queries that are passed as a parameter.
Incorrect. The .countDocuments() method accepts queries that use operators, like $elemMatch or $lt.
=
What can we expect to be returned by running db.inspections.countDocuments({})? (Select one.)
a.
This command doesn't return anything because it requires a query parameter.
Incorrect. We use countDocuments() with an empty document in the query parameter to return the total number of documents in a collection.
b.
This command returns the total number of documents in the inspections database.
Incorrect. We use countDocuments() with an empty document in the query parameter to return the total number of documents in a collection.
c.
This command returns the total number of documents in the inspections collection.
Correct! We use countDocuments() with an empty document in the query parameter to return the total number of documents in a collection.
=
【9. MongoDB Indexes】
Which of the following statements about indexes are correct? (Select all the that apply.)
a.
Indexes are data structures that improve performance, support efficient equality matches and range-based query operations, and can return sorted results.
Correct.
Indexes are data structures that improve performance, support efficient equality matches and range-based query operations, and can return sorted results. Indexes achieve this by allowing MongoDB to perform only the work necessary to return the data that is requested, rather than scanning the entire collection.
b.
Indexes are automatically created based on usage patterns.
Incorrect.
While users can create indexes on the data that's used most often to help improve the performance of a slow query, indexes are not automatically created based on usage patterns. However, MongoDB Atlas provides recommendations about which indexes to create or drop.
c.
Indexes are used to make querying faster for users. One of the easiest ways to improve the performance of a slow query is create indexes on the data that is used most often.
Correct.
Indexes help make querying faster for users by only scanning the indexes to find the data that is requested.
d.
When using an index, MongoDB reads every document in a collection to check if it matches the query that's being run.
Incorrect.
When indexes are available, MongoDB does not need to scan the entire collection to return the data that is requested by a query. Instead, MongoDB will only scan the indexes to find the data that is requested.
=
Which of the following statements about indexes are true? (Select one.)
a.
Indexes improve query performance and have no impact on write performance.
Incorrect.
While indexes improve query performance, they do come with a cost. For example, any time you run a write operation, all the indexes must be updated, which can be time-consuming.
b.
Indexes improve query performance at the cost of write performance.
Correct!
Indexes improve query performance at the cost of write performance. For most use cases, this tradeoff is acceptable. Indexes should be used on data that is frequently queried or on queries that are infrequent but costly in terms of computational resources.
c.
Indexes have no impact on query performance but improve write performance.
Incorrect.
Indexes improve query performance by allowing the database to use indexes to speed up the query process. However, indexes do come with a cost. For example, any time you run a write operation, all the indexes must be updated, which can be time-consuming.
d.
Indexes have a negative impact on query performance but improve write performance.
Incorrect.
Indexes have a positive impact on query performance but come with a cost. For example, any time you run a write operation, all the indexes must be updated, which can be time-consuming.
=
What is a single field index? (Select one.)
a.
An index that supports efficient querying against one field
Correct.
A single field index is an index that supports efficient querying against a single field. By default, all collections have a single field index on the _id field, but users can define additional indexes that support important queries. A single field index is also a multikey index if the value of the field is an array.
b.
An index that supports efficient querying against multiple fields
Incorrect.
An index that supports efficient queries against multiple fields is called a compound index.
c.
An index that only supports efficient querying against fields with scalar values
Incorrect.
Single field indexes can also support efficient querying against a single array field.
d.
An index that supports efficient querying against fields that are already indexed by another user-defined index
Incorrect.
A single field index doesn't support efficient querying against fields that are already indexed by another user-defined index. When a single field is already indexed—for example, by a compound index—creating an additional single field index can cause over-indexing and performance issues.
=
You have a collection of customer details. The following is a sample document from the collection:
{
"_id": { "$oid": "5ca4bbcea2dd94ee58162a6a" },
"username": "hillrachel",
"name": "Katherine David",
"address": "55711 Janet Plaza Apt. 865\nChristinachester, CT 62716",
"birthdate": { "$date": { "$numberLong": "582848134000" } },
"email": "timothy78@hotmail.com",
"Accounts": [
{ "$numberInt": "462501" },
{ "$numberInt": "228290" },
{ "$numberInt": "968786" },
{ "$numberInt": "515844" },
{ "$numberInt": "377292" }
],
"tier_and_details": {}
}
You create a single field index on the email field, with the unique constraint set to true:
db.customers.createIndex({email:1}, {unique:true})
What would happen if you attempt to insert a new document with an email that already exists in the collection? (Select one.)
a.
The new document will be inserted and replace the old document in the collection.
Incorrect.
That is not how the unique constraint operates. Unique indexes ensure that indexed fields do not store duplicate values. The new document will not be inserted in this example because the email address already exists in another document in the collection.
b.
The new document will be inserted and the old document will remain in the collection.
Incorrect.
That is not how the unique constraint operates. Unique indexes ensure that indexed fields do not store duplicate values. The new document will not be inserted in this example. Because the email address already exists in another document in the collection, the unique constraint would prevent the new document from being inserted.
c.
MongoDB will return a duplicate key error, and the document will be inserted.
Incorrect.
That is not how the unique constraint operates. Unique indexes ensure that indexed fields do not store duplicate values. While a duplicate error key would be returned, the new document would not be inserted in this example because the email address already exists in another document in the collection.
d.
MongoDB will return a duplicate key error, and the document will not be inserted.
Correct.
Unique indexes ensure that indexed fields do not store duplicate values. In this example, MongoDB will return a duplicate key error if you attempt to insert a new document with an email that already exists in the collection, as the unique constraint was set to true.
=
What is a multikey index? (Select one.)
a.
An index on one field only where the field is not an array
Incorrect.
A multikey index is any index where one of the indexed fields contains an array, including both single field and compound indexes. In a compound index, only one of the fields can be an array.
b.
An index where one of the indexed fields contains an array
Correct.
Multikey indexes support efficient queries against array fields by creating an index key for each element in the array. This allows MongoDB to search for the index key of each element in the array rather than scan the entire array, which results in dramatic performance gains in your queries.
c.
An index on more than one field where none of the fields are arrays
Incorrect.
A multikey index is any index where one of the indexed fields contains an array, including both single field and compound indexes. In a compound index, only one of the fields can be an array.
d.
An index on more than one field where multiple fields are arrays
Incorrect.
A multikey index is any index where one of the indexed fields contains an array, including both single field and compound indexes. In a compound index, only one of the fields can be an array.
=
What is the maximum number of array fields per multikey index? (Select one.)
a.
1
Correct! The maximum number of array fields per multikey index is 1. If an index has multiple fields, only one of them can be an array.
b.
3
Incorrect. The maximum number of array fields per multikey index is not 3. However, there is a limitation on the number of array fields per index.
c.
5
Incorrect. The maximum number of array fields per multikey index is not 5. However, there is a limitation on the number of array fields per index.
d.
Unlimited
Incorrect. The maximum number of array fields per multikey index is not unlimited.
=
What is a compound index? (Select one.)
a.
An index that supports queries that combine the field name and the value into one string
Incorrect.
An index that combines the field name and the value into a single string does not exist MongoDB. Reconsider the fields that compound indexes support queries against.
b.
An index that supports queries against unknown or arbitrary fields
Incorrect.
An index that support queries against unknown or arbitrary fields is a wildcard index. Wildcard indexes were introduced in MongoDB 4.2. They allow users to query against fields that are not explicitly defined in the collection. Reconsider the fields that compound indexes support queries against.
c.
An index that contains references to multiple fields within a document
Correct!
A compound index is an index that contains references to multiple fields within a document. Compound indexes are created by adding a comma-separated list of fields and their corresponding sort order to the index definition.
d.
An index that supports queries that are run on two collections at the same time
Incorrect.
An index that supports running queries on two collections simultaneously doesn't currently exist in MongoDB. Reconsider the fields that compound indexes support queries against.
=
What is the recommended order of fields in a compound index? (Select one.)
a.
Sort, Range, Equality
Incorrect. There is a recommended order of indexed fields in a compound index. The order of indexed fields is important because query optimization depends on the order of the fields to determine which indexes to use.
b.
Range, Sort, Equality
Incorrect. There is a recommended order of indexed fields in a compound index. The order of indexed fields is important because query optimization depends on the order of the fields to determine which indexes to use.
c.
Equality, Sort, Range
Correct! The recommended order of indexed fields in a compound index is Equality, Sort, and Range. Optimized queries use the first field in the index, Equality, to determine which documents match the query. The second field in the index, Sort, is used to determine the order of the documents. The third field, Range, is used to determine which documents to include in the result set.
d.
The order of indexed fields is not important.
Incorrect. There is a recommended order of indexed fields in a compound index. The order of indexed fields is important because query optimization depends on the order of the fields to determine which indexes to use when executing a query.
=
What are the ramifications of deleting an index that is supporting a query? (Select one.)
a.
The performance of the query will improve.
Incorrect.
Deleting an index that is supporting a query won’t improve the performance. However, it might cause MongoDB to have to scan the entire database to find the documents that match the query.
b.
The performance of the query will be negatively affected.
Correct!
The performance of the query will be negatively affected by the deletion of the only index that is currently supporting that query. Indexes generally improve the performance and time efficiency of queries by reducing the number of times that the database needs to be accessed.
c.
The query will fail.
Incorrect.
Deleting the only index that is supporting a query won't cause it to fail. However, it might cause MongoDB to have to scan the entire database to find the documents that match the query.
d.
The query will perform as expected.
Incorrect.
Deleting an index that is supporting a query will have an impact. It might cause MongoDB to have to scan the entire database to find the documents that match the query.
=
You have a collection of customer details. The following is a sample document from this collection:
{
"_id": { "$oid": "5ca4bbcea2dd94ee58162a6a" },
"username": "hillrachel",
"name": "Katherine David",
"address": "55711 Janet Plaza Apt. 865\nChristinachester, CT 62716",
"birthdate": { "$date": { "$numberLong": "582848134000" } },
"email": "timothy78@hotmail.com",
"Accounts": [
{ "$numberInt": "462501" },
{ "$numberInt": "228290" },
{ "$numberInt": "968786" },
{ "$numberInt": "515844" },
{ "$numberInt": "377292" }
],
"tier_and_details": {}
}
You have an index on the email field. Here’s the command you used to create the index:
db.customers.createIndex({email:1})
Before deleting it, you want to assess the impact of removing this index on the performance of the query. To do this, which command should you use? (Select one.)
a.
dropIndex()
Incorrect.
The dropIndex() command deletes an index. Deleting the only index supporting a query will affect the performance of that query. You should hide the index before deleting it. This way, you'll be able to assess the impact of removing the index on query performance. What command is used to hide indexes?
b.
dropIndexes()
Incorrect.
The dropIndexes() command deletes multiple indexes. Deleting the only index supporting a query will affect the performance of that query. You should hide the index before deleting it. This way, you'll be able to assess the impact of removing the index on query performance. What command is used to hide indexes?
c.
getIndexes()
Incorrect.
The getIndexes() command returns an array that holds a list of documents that identify and describe the existing indexes on the collection, including hidden indexes. What command is used to hide indexes?
d.
hideIndex()
Correct.
The hideIndex() command hides an index. By hiding an index, you'll be able to assess the impact of removing the index on query performance. MongoDB does not use hidden indexes in queries but continues to update their keys. This allows you to assess if removing the index affects the query performance and unhide the index if needed. Unhiding an index is faster than recreating it. In this example, you would use the command db.customers.hideIndex({email:1}).
`;
