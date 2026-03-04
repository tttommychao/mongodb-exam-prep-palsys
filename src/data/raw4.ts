export const rawText4 = `【10.MongoDB Indexes II】
Which of the following statements describe a B tree? (Select all that apply.)
a.
B trees sort the stored data in ascending sequential order from left to right
Correct.
MongoDB stores the values of indexed fields using an optimized data structure known as a B tree. B trees sort their stored data in ascending sequential order, from left to right.
b.
Nodes in a B tree can have more than two child nodes
Correct.
MongoDB stores the values of indexed fields using an optimized data structure known as a B tree. Nodes in a B tree can have more than two child nodes.
c.
B tree stands for Binary tree
Incorrect.
MongoDB stores the values of indexed fields using an optimized data structure known as a B tree. B trees are self-balancing tree data structures, not binary tree structures.
d.
A B tree is a self-balancing tree data structure
Correct.
MongoDB stores the values of indexed fields using an optimized data structure known as a B tree. B trees are self-balancing tree data structures.
=
Which index would most effectively support the following query? (Select one.)
db.collection.find({ username: "j0hnny", timestamp: { $gte: ISODate("2021-05-18T00:00:00.000Z"), $lt: ISODate("2021-05-18T13:00:00.000Z") }})
A. db.collection.createIndex({ username: 1, timestamp: 1 })
B. db.collection.createIndex({ timestamp: 1, username: 1 })
C. db.collection.createIndex({ username: 1 })
D. db.collection.createIndex({ timestamp: 1 })
a.
Option A
Correct.
db.collection.createIndex({ username: 1, timestamp: 1 }) is the most effective index for this query. This is because our equality match is the index prefix so MongoDB can quickly filter out the documents that don’t match before applying the range query.
b.
Option B
Incorrect.
db.collection.createIndex({ timestamp: 1, username: 1 }) is not the most effective index for the given query. This index results in more index keys being scanned than documents returned due to the range query being the index prefix when we have an equality match in the query.
c.
Option C
Incorrect.
db.collection.createIndex({ username: 1 }) is not the most effective index for the given query. This index will reduce the amount of documents scanned but we could improve it by making a compound index with the timestamp field.
d.
Option D
Incorrect.
db.collection.createIndex({ timestamp: 1 }) is not the most effective index for the given query. This index will reduce the amount of documents scanned but we could improve it by making a compound index with the username field.
=
Which index would most effectively support the following query? (Select one.)
db.collection.find({ timestamp: { $gte: ISODate("2021-05-18T00:00:00.000Z"), $lt: ISODate("2021-05-19T00:00:00.000Z") }, username: "j0hnny"}).sort({ rating: 1})
A. db.collection.createIndex({ timestamp: 1, username: 1, rating: 1 })
B. db.collection.createIndex({ username: 1, rating: 1, timestamp: 1 })
C. db.collection.createIndex({ rating: 1, timestamp: 1, username: 1 })
D. db.collection.createIndex({ rating: 1, username: 1, timestamp: 1 })
a.
Option A
Incorrect.
This is not the most effective index for the given query. MongoDB will have to do an in-memory sort in order to get the correct results. Due to the order of the fields in this index, the documents that match the range filter will no longer be sorted when they get passed to the equality check. As a result, documents that match the name and range, need to be batched into memory and sorted, instead of the sorted results being returned directly from the index.
b.
Option B
Correct.
This is the most effective index for the given query. This index is using the equality field as the index predicate followed by the sort, and range. Putting the equality fields first in the index allows us to filter out documents before sorting or filtering, ideally eliminating 90% of possible document matches.. With the sort field second in the index, we can satisfy the sort request from the index without needing to do a blocking (in-memory) sort.
c.
Option C
Incorrect.
This is not the most effective index for the given query because this index has the sort as its predicate. Filtering based on the sort field first, we’re not able to avoid a blocking (in-memory) sort in subsequent stages.
d.
Option D
Incorrect.
This is not the most effective index for the given query because this index has the sort as its predicate. Filtering based on the sort field first, we’re not able to avoid a blocking (in-memory) sort in subsequent stages.
=
From the following explain output, select the option that describes what the explain output it telling us: (Select one.)
{
explainVersion: '1',
queryPlanner: {
namespace: 'sample_airbnb.listingsAndReviews',
indexFilterSet: false,
parsedQuery: {},
queryHash: 'DD1CE27D',
planCacheKey: 'DD1CE27D',
maxIndexedOrSolutionsReached: false,
maxIndexedAndSolutionsReached: false,
maxScansToExplodeReached: false,
winningPlan: {
stage: 'SORT',
sortPattern: { host: -1 },
memLimit: 104857600,
type: 'simple',
inputStage: { stage: 'COLLSCAN', direction: 'forward' }
},
rejectedPlans: []
},
executionStats: {
executionSuccess: true,
nReturned: 5555,
executionTimeMillis: 256,
totalKeysExamined: 0,
totalDocsExamined: 5555,
executionStages: {
stage: 'SORT',
nReturned: 5555,
executionTimeMillisEstimate: 130,
works: 11113,
advanced: 5555,
needTime: 5557,
needYield: 0,
saveState: 13,
restoreState: 13,
isEOF: 1,
sortPattern: { host: -1 },
memLimit: 104857600,
type: 'simple',
totalDataSizeSorted: 100493513,
usedDisk: false,
spills: 0,
inputStage: {
stage: 'COLLSCAN',
nReturned: 5555,
executionTimeMillisEstimate: 0,
works: 5557,
advanced: 5555,
needTime: 1,
needYield: 0,
saveState: 13,
restoreState: 13,
isEOF: 1,
direction: 'forward',
docsExamined: 5555
}
}
},
command: {
find: 'listingsAndReviews',
filter: {},
sort: { host: -1 },
'$db': 'sample_airbnb'
},
serverInfo: {
host: 'M-C02GG1X2MD6M',
port: 27017,
version: '6.0.6',
gitVersion: '26b4851a412cc8b9b4a18cdb6cd0f9f642e06aa7'
},
serverParameters: {
internalQueryFacetBufferSizeBytes: 104857600,
internalQueryFacetMaxOutputDocSizeBytes: 104857600,
internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
internalDocumentSourceGroupMaxMemoryBytes: 104857600,
internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
internalQueryProhibitBlockingMergeOnMongoS: 0,
internalQueryMaxAddToSetBytes: 104857600,
internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
},
ok: 1
}
a.
The explain method was used in the allPlansExecution mode. An index on the host field was used.
Incorrect.
The example output was not the result of using the explain method in allPlansExecution mode. Additionally, the output doesn’t indicate that an index was used.
b.
The explain method was used in the default queryPlanner mode. The winning plan was an in memory SORT stage and the query wasn’t supported by an index.
Incorrect.
The provided output is not the result of using the explain method in the default, queryPlanner, mode. However, the winning plan was an in-memory SORT stage and was not supported by an index.
c.
The explain method was used in the executionStats mode. The query was not supported by an index. The winning plan was SORT, requiring an in memory sort to return the results in order.
Correct.
The provided explain output is the result of using the explain method in executionStats mode. This is made evident by the presence of the executionStats object in the output. Additionally, we could tell that the query wasn’t supported by an index, required an in-memory sort, and the winning plan was the SORT stage.
d.
The explain method was used in the executionStats mode.The query was supported by an index on the host field.
Incorrect.
The provided output is the result of using the executionStats mode with the explain method, however the output doesn’t tell us that the query was supported by an index on the host field.
=
Which of the following fields can help us determine the effectiveness of an index? (Select all that apply.)
a.
nReturned
Correct.
nReturned shows the number of documents that match the query condition. If the nReturned is less than the number of total documents and keys examined, our index can be improved. With an efficient index, the number of documents returned by a query is the same as the number of documents and keys examined.
b.
executionSuccess
Incorrect.
executionSuccess only informs us if our operation was executed.
c.
totalDocsExamined
Correct.
totalDocsExamined shows the number of documents examined during query execution. With an efficient index, the number of documents returned by a query is the same as the number of documents and keys examined.
d.
executionStages
Correct.
executionStages can help determine if MongoDB had to perform an in-memory sort. In the event that an in-memory sort, or blocking sort, is taking place, the executionStages array will contain a SORT stage. This means that MongoDB couldn’t rely on the index to satisfy the sort requested in the query.
e.
totalKeysExamined
Correct.
totalKeysExamined shows the number of index entries scanned. With an efficient index, the number of documents returned by a query is the same as the number of documents and keys examined.
=
The SORT stage will be present in the executionStages object of the explain('executionStats') output if a blocking (in-memory) sort took place.
a.
True
Correct.
The presence of the SORT stage in the executionStages object of the explain('executionStats') output means that MongoDB had to sort the documents in memory, which can be computationally expensive.
b.
False
Incorrect.
The SORT stage’s presence in the executionStages object of the explain('executionStats') output means that MongoDB had to sort the documents in memory, which can be computationally expensive.
=
You check the executionStats for a query using an index and see the following output:
{
executionSuccess: true,
nReturned: 2,
executionTimeMillis: 0,
totalKeysExamined: 3,
totalDocsExamined: 3,
…
}
Which of the following is true? (Select all that apply.)
a.
MongoDB had to scan an extra document
Correct.
totalDocsExamined is three while nReturned is two which means MongoDB scanned an extra document. The number of documents and index keys examined should be the same as the number of documents returned. If MongoDB examines more documents than it returns, this indicates that the index used by this query could be optimized further.
b.
Two documents were returned
Correct.
nReturned signifies that two documents were returned. In this example, MongoDB returns two documents but scans three. This indicates that the index used by this query could be optimized further since the number of documents and index keys examined should be the same as the number of documents returned.
c.
MongoDB had to scan an extra index key
Correct.
totalKeysExamined is three while nReturned is two which means MongoDB scanned an extra index key. This indicates that the index used by this query could be optimized further since the number of index keys examined, and the number of documents examined, should be the same as the number of documents returned.
d.
This query is not using an index
Incorrect.
We can tell that an index was used since three index keys were scanned according to the totalKeysExamined field.
=
Why should you use a wildcard index to support queries in a MongoDB collection instead of a regular index? (Select one.)
a.
Wildcard indexes have a smaller storage footprint than regular indexes.
Incorrect.
Wildcard indexes do not have a smaller storage footprint over regular indexes.
b.
Wildcard indexes make queries that use regular expressions more efficient.
Incorrect.
Wildcard indexes are not more efficient for queries that use regular expressions.
c.
Wildcard indexes can support queries against any field, even if that field is unknown at the time of querying.
Correct.
Wildcard indexes allow queries against unknown or arbitrary fields to be supported by an index.
d.
Wildcard indexes allow for efficient querying against time-series data.
Incorrect.
Wildcard indexes do not offer any advantages for querying against time series data.
=
Given the following query:
db.people.find({ "metadata.likes": "golfing", "metadata.age": 30 })
Which of the following indexes would support all the fields in the query? (Select one.)
A. db.people.createIndex({ name: 1 })
B. db.people.createIndex({ metadata: 1})
C. db.people createIndex({ metadata.likes, metadata.status })
D. db.people.createIndex({ ‘metadata.$**’: 1 })
a.
Option A
Incorrect.
The original query doesn’t include an equality, sort or range query involving the name field. Therefore this index wouldn’t support all the fields in the query.
b.
Option B
Incorrect.
While queries against the metadata field as a whole would be supported by a single field index on the metadata field, this query attempts to search the fields within it and therefore wouldn’t benefit from this index.
c.
Option C
Incorrect.
While the metadata.likes field would be supported by this index, it fails to support a query that included other fields within the metadata document.
d.
Option D
Correct.
A wildcard index on all sub-fields within the metadata document would support the query. Additionally, if we were to add other fields to the query that were contained in the metadata document, those would be supported by this index as well.
=
When should you use a partial index? (Select one.)
a.
To index documents that match a specified filter document.
Correct.
Partial indexes are recommended when you want to index only documents that match a specific filter. For example, if we had a collection of movies and wanted to index only those that had an imdb.rating value of greater than 7, we could use a partial index. MongoDB recommends partial indexes over sparse indexes.
b.
To index based on ranges of documents rather than individual documents.
Incorrect.
Partial indexes can not be used to index ranges of documents. Partial indexes can be used to match documents based on complex filters, including the use of the operators like $exists, $gt, $lt, $type, $and, $or, and $in.
c.
To support queries against time series data.
Incorrect.
Partial indexes are not known for their ability to support efficient querying against time series data.
d.
To index a field that has a value of an array.
Incorrect.
Partial indexes do not directly support fields containing array values. Instead partial indexes evaluate documents based on a filter expression.
=
Given the following query:
db.zips.find({ state: "AZ", pop: { $gte: 20000} })
Which Partial index will support this query? (Select one.)
A. db.zips.createIndex( { state: 1 }, { partialFilterExpression: { pop: { $gte: 10000 } } } );
B. db.zips.createIndex( { state: 1 }, { partialFilterExpression: { pop: { $lte: 10000 } } } );
C. db.zips.createIndex( { state: 1 }, { partialFilterExpression: { pop: { $gte: 25000 } } } );
a.
Option A
Correct.
This index covers our query because it indexes every state with a population of 10000 or more.
b.
Option B
Incorrect.
This index only covers states with a population of 10000 or less. Our query matches AZ with a population of 20000 or more.
c.
Option C
Incorrect.
This index only covers states with a population of 25000 or greater which doesn’t cover all of the documents we want. Our query matches AZ with a population of 20000 or more.
=
Which of the following statements about sparse indexes are true? (Select all that apply.)
a.
Sparse indexes only create index entries for documents that have null or non-null values for the indexed field.
Correct.
Sparse indexes only index specific documents that include the indexed field. The field may have null or non-null values. Indexes like 2d, 2dsphere, geohaystack, text, and wildcard are all considered sparse indexes by nature.
b.
Sparse indexes are used to support queries against documents that meet a specified filter expression.
Incorrect.
Indexes that are used to support queries against documents that meet a specific filter expression are referred to as partial indexes. Examples of sparse indexes include the likes of 2d, 2dsphere, geohaystack, text, and wildcard indexes.
c.
Sparse indexes will not be chosen by the query planner if it means the query results will be incomplete.
Correct.
The query planner won’t choose a sparse index when evaluating eligible indexes to support a query if doing so means the results of the query will be incomplete.
d.
Sparse indexes only create index entries for documents that have non-null values for the indexed field.
Incorrect.
Sparse indexes create index entries for documents that have null or non-null values for the indexed field. Documents where the field is missing will not be part of the index.
=
Given the following index:
db.collection.createIndex({ stock: 1 }, { sparse: true })
Which document will be indexed? (Select one.)
A. { sku: 131, product_name: "Milk", price: 3, }
B. { sku: 121, product_name: "Bread", price: 2, stock: 50 }
a.
Option A
Incorrect.
This document is missing the stock field so this document will not be indexed. Sparse indexes are those that contain entries for documents that contain a specific field, even if that field’s value is null.
b.
Option B
Correct.
This document will be indexed because it has the stock field, even if this field is null. Sparse indexes are those that contain entries for documents that contain a specific field, even if that field’s value is null.
=
How does a clustered index in MongoDB differ from a regular index? (Select all that apply.)
a.
Clustered indexes arrange documents in order based on their index key.
Correct.
Clustered indexes arrange documents according to their index key. This improves query performance on range and equality matches by reducing access to the disk.
b.
Clustered indexes optimize query performance for a given field over regular indexes.
Incorrect.
While clustered indexes can provide a performance benefit overall, this benefit does not come in the form of superior performance for specific fields. The performance benefit comes from the ordered storage of documents based on index key.
c.
Clustered indexes store the index key alongside the documents themselves.
Correct.
Clustered indexes store the index key with the documents. This avoids having to do additional lookups to find the location of the document on disk, as is the case with traditional indexes.
d.
Clustered index keys eliminate the need for an additional TTL (time to live) index.
Correct.
Clustered indexes can act as a Time to Live (TTL) index if the expireAfterSeconds field is used when creating the index, eliminating the need to create an additional TTL index on the collection.
=
When can we create a clustered index? (Select one.)
a.
When creating the clustered collection
Correct.
Clustered indexes can only be created when the collection is created.
b.
Anytime
Incorrect.
Clustered indexes can only be created when the collection is created.
c.
When dropping the clustered collection
Incorrect.
Clustered indexes can only be created when the collection is created.
d.
When creating secondary indexes
Incorrect.
Clustered indexes can only be created when the collection is created.
=
You run a query against a clustered collection, as shown below:
db.weather.find({ "metadata.sensorId": 5578 })
The clustered collection has an internal clustered index and a secondary index that is eligible for the query. Which of the following two indexes will be automatically selected by the query planner to support the query? (Select one.)
// internal clustered index - db.runCommand( { listCollections: 1 } )
{
name: 'system.buckets.weather',
type: 'collection',
options: {
validator: { ... },
clusteredIndex: true,
timeseries: {
timeField: 'timestamp',
metaField: 'metadata',
granularity: 'hours',
bucketMaxSpanSeconds: 2592000
}
},
info: { ... }
}
// secondary index - db.weather.getIndexes()
{
v: 2,
key: { 'metadata.sensorId': 1 },
name: 'metadata.sensorId_1'
}
a.
Clustered index
Incorrect.
MongoDB’s query planner will check to see if any secondary indexes are eligible for use by a query. In which case, the secondary index will be used. In order to use the internal clustered index, you must provide a hint to use it.
b.
Secondary index
Correct.
The clustered index is not automatically used by the query optimizer if a usable secondary index exists. MongoDB can be instructed to use the index, however, by appending the hint method to the query and providing the name of the internal clustered index.
=
What is the correct definition of a time series collection? (Select one.)
a.
Time series collections efficiently store time series data. In time series collections, writes are organized so that data from the same source is stored alongside other data points from a similar point in time.
Correct.
A time series collection stores time series data, which is data that simply changes over time. Documents are organized in such a way that those that originate from a single source will be grouped together with other data from a similar point in time.
b.
Time series collections is a specialized collection that stores time-related data in multiple time zones for easy lookup.
Incorrect.
While time series collections are specialized collections that help organize data based on time, they are not designed with the goal of handling conversions between different time zones.
c.
Time series collections are collections of documents that are grouped together into a single bucket based on the total size of the documents.
Incorrect.
Time series collections are clustered collections, which means that they group documents together and index based on ranges of values rather than individual documents — however, time series collections are not grouped together based on the size of the documents.
d.
Time series collections are fixed-size collections that support high-throughput operations that insert and retrieve documents based on insertion order.
Incorrect.
Collections that are fixed sized and support high-throughput operations are known as capped collections.
=
What are the advantages of providing a metaField field when creating a time series collection? (Select one.)
Example:
db.createCollection("stockprice", {
timeseries: {
timeField: "timestamp",
metaField: "metadata",
granularity: "seconds",
},
});
a.
Improves the efficiency of querying data that changes over time
Incorrect.
Adding a metaField will not improve the efficiency or query performance for time-series data.
b.
Allows you to visualize the data using third party tools
Incorrect.
Adding a metaField is not a necessary requirement for visualizing time series data.
c.
Allows for better organization by attaching additional information directly to the data
Correct.
Adding a metaField to the time-series collection allows for better organization and allows you to see at a glance what source a particular group of documents is associated with. For example, you could categorize data based on its sensorid.
=
What will the following command return? (Select one.)
db.customers.aggregate([{ $indexStats: {} }]);
a.
An array of integers, each one representing the score assigned to each index in the collection.
Incorrect.
The $indexStats operator includes the name of the index and the specification document used to create it, however there is more information included in the output of this aggregation operator. The score assigned to each index is not one of them.
b.
An array of documents, each representing an index specification document.
Correct.
$indexStats will provide details about each of our indexes within a given collection, including the name, key pattern, hostname, how many times the index has been accessed (accesses.ops), and the date since its usage has been monitored (accesses.since).
c.
An object estimating how much has been saved by leveraging the existing indexes to support queries against the collection.
Incorrect.
The $indexStats operator provides information about each index but doesn’t provide an estimate of how much has been saved by leveraging the existing indexes to support queries against the collection.
d.
Suggested actions that can be taken on current mongod instances to improve performance. Specifically, suggestions to create indexes that can support common usage patterns.
Incorrect.
The $indexStats operator does not return suggested actions that one can take in terms of suggested indexes. However, these kinds of suggestions are provided by the performance advisor when using an M10 or above Atlas cluster.
=
What happens when the database profiler is enabled on a database? (Select one.)
a.
Operations are captured and recorded inside the database under a capped collection named system.profile.
Correct.
Enabling the database profiler will capture database operations and record them in a capped collection called system.profile. Depending on the profiling level (1, or 2), the profiler will record only slow operations with a setting of 1 (defined by the slowms threshold), or all operations with a setting of 2.
b.
A web server is enabled to support queries on the database.
Incorrect.
The database profiler is not a locally hosted web server that provides data visualization for a given MongoDB instance. MongoDB’s Performance Advisor provides this functionality.
c.
You’ll receive suggestions for actions you can take on your database to improve performance.
Incorrect.
The database profiler does not provide suggestions, however setting a slowms threshold with the db.setProfilingLevel() method does impact what appears in the diagnostic logs.
d.
The MongoDB instance is profiled in order to find the source of out-of-memory errors.
Incorrect.
The database profiler does not help troubleshoot out of memory errors associated with a running MongoDB instance. Furthermore, there is no log file generated from it.
`;
