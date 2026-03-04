export const rawTextPart1 = `【4. Getting Started with MongoDB Atlas】
Which of the following best describes a document database? (Select one.)
a.
A database where data is stored in tables with rows and columns
Incorrect.
This describes a relational database, not a document database.
b.
A database where data is stored in JSON-like documents, allowing for flexible and polymorphic data structures
Correct.
A document database stores data in JSON-like documents, which can represent complex data structures.
c.
A database that requires a fixed schema and stores data in a hierarchical structure
Incorrect.
A document database supports both structured and unstructured data through its flexible schema.
d.
A database designed to index data from document files like PDFs and spreadsheets
Incorrect.
While a document database can store various types of data, it is not specifically designed to index data from document files like PDFs and spreadsheets. In the context of MongoDB, documents are the fundamental unit of data. They have a JSON-like structure, consisting of field-value pairs.
=
What are the primary advantages of MongoDB’s flexible schema? (Select all that apply.)
a.
It allows each document to have a unique structure, accommodating various data types and fields within a single collection.
Correct.
One of the main advantages of a flexible schema is that it allows each document to have a unique structure, accommodating various data types and fields within a single collection.
b.
It enables the database to handle unstructured or semi-structured data that doesn't fit neatly into a table.
Correct.
A flexible schema is particularly beneficial for handling unstructured or semi-structured data that doesn't fit neatly into a table.
c.
It requires all documents to follow a predefined structure, but allows changes to those structures.
Incorrect.
A flexible schema by default does not require documents to follow a predefined structure. It allows for variability in document structures.
d.
It permits changes and additions to the schema without requiring predefined structures.
Correct.
An advantage of a flexible schema is that it permits changes and additions to the schema without requiring predefined structures, making it adaptable to evolving data requirements.
=
Which of the following statements correctly identifies the relationships among documents, collections, and databases in MongoDB? (Select one.)
a.
A database is a group of documents, and a collection is a group of databases.
Incorrect.
A database is a group of collections, not documents.
b.
A document is a group of collections, and a database is a group of documents.
Incorrect.
In MongoDB, a document is the fundamental unit of data, not a group of collections.
c.
A document is a group of databases, and a collection is a group of documents.
Incorrect.
In MongoDB, a document is the fundamental unit of data, and a collection is a group of documents, not databases.
d.
A collection is a group of documents, and a database is a group of collections.
Correct.
In MongoDB, a collection is a group of documents, and a database is a group of collections.
=
Which of the following best describes how replication in MongoDB provides high availability? (Select all that apply.)
a.
Replication stores multiple copies of data across multiple nodes.
Correct.
Replication stores multiple copies of data across multiple nodes, ensuring redundancy and high availability.
b.
Replication allows for horizontal scaling by distributing data across nodes.
Incorrect.
Horizontal scaling by distributing data across nodes is achieved through sharding, not replication.
c.
Replication ensures that the database remains operational even if one node fails.
Correct.
Replication ensures that the database remains operational even if one node fails by maintaining redundant copies of data.
d.
Replication is used to partition data across different shards.
Incorrect.
Partitioning data across different shards is a function of sharding, not replication.
=
What are key differences between MongoDB Atlas as a database-as-a-service and MongoDB's self-managed options? (Select all that apply.)
a.
MongoDB Atlas requires users to manually configure and maintain their database infrastructure.
Incorrect.
MongoDB Atlas, as a database-as-a-service, removes the need for users to manually configure and maintain their database infrastructure, which is a requirement for self-managed options.
b.
MongoDB Atlas provides automatic failover across regions and availability zones.
Correct.
MongoDB Atlas provides automatic failover across regions and availability zones, which enhances availability and fault tolerance, a feature not inherently available in self-managed options.
c.
MongoDB Atlas includes built-in support for multi-factor authentication (MFA) and role-based access control (RBAC).
Correct.
MongoDB Atlas includes built-in support for multi-factor authentication (MFA) and role-based access control (RBAC), providing robust security features that are managed by the service.
d.
MongoDB Atlas reduces operational overhead by offering a fully managed cloud-based infrastructure.
Correct.
MongoDB Atlas reduces operational overhead by offering a fully managed cloud-based infrastructure.
=
Which of the following best describes the role of automatic failover in MongoDB Atlas? (Select one.)
a.
Automatic failover distributes data across multiple regions to reduce latency.
Incorrect.
Distributing data across multiple regions to reduce latency is a function of data distribution, not specifically automatic failover.
b.
Automatic failover ensures data is encrypted both in transit and at rest.
Incorrect.
Ensuring data is encrypted both in transit and at rest is a security feature, not related to automatic failover.
c.
Automatic failover allows the database to continue operating if one availability zone fails by switching to another zone.
Correct.
Automatic failover allows the database to continue operating if one availability zone fails by switching to another zone, ensuring high availability.
d.
Automatic failover manages user permissions and access control.
Incorrect.
Managing user permissions and access control is a function of role-based access control (RBAC), not automatic failover.
=
You are deploying your first MongoDB Atlas cluster and want to choose the most suitable option for loading a sample dataset and experimenting with simple CRUD operations. Which of the following cluster types should you consider? (Select all that apply.)
a.
M10
Incorrect.
M10 is a dedicated cluster tier that’s more suitable for handling large datasets and production deployments rather than for experimentation with simple CRUD operations.
b.
Serverless
Correct.
The serverless tier operates on a “pay for what you use” model, making it suitable for experimenting with simple CRUD operations.
c.
M0
Correct.
M0 is a free cluster tier that’s ideal for loading a sample dataset and experimenting with simple CRUD operations. It can be upgraded to a serverless or dedicated tier with additional capabilities if needed.
d.
Dedicated
Incorrect.
Dedicated clusters, at the M10 level and higher, are recommended for production deployments and high-traffic applications, rather than for experimentation with simple CRUD operations.
=
You have created an Atlas account and want to organize your resources in a way that supports development, testing, and production environments. Which of the following actions should you take? (Select all that apply.)
a.
Create separate projects for development, testing, and production to isolate the environments.
Correct.
Creating separate projects for development, testing, and production helps isolate resources.
b.
Name your organization descriptively to reflect its overall purpose.
Correct.
Naming your organization descriptively to reflect its overall purpose helps to clarify its role, which can in turn help streamline management of it.
c.
Deploy all clusters in a single project to simplify management and reduce overhead.
Incorrect.
Deploying all clusters in a single project can complicate management and reduce the effectiveness of access control and resource organization.
=
You’ve just upgraded from an M0 to M10 cluster. Which of the following features are you now able to use that you did not have access to previously? (Select all that apply.)
a.
Real-Time panel
Correct.
The Real-Time performance panel is a feature available on M10 and above clusters. It provides insight into metrics such as network traffic, database operations, and hardware statistics.
b.
Find bar for querying documents
Incorrect.
The Find bar is available on all cluster tiers and is used for querying documents within collections.
c.
Performance Advisor
Correct.
The Performance Advisor is available on M10 and above clusters. It offers guidance on improving cluster performance by identifying slow queries and suggesting new indexes to improve query performance.
d.
Online Archive
Correct.
The Online Archive is available on M10 and above clusters. It optimizes storage while allowing queries on infrequently accessed data.
=
Your data is stored in an M10 cluster, and you are working in the MongoDB Atlas UI. Which of the following information can you see in the Real-Time performance panel? (Select all that apply.)
a.
Current operations running on the cluster
Correct.
The Real-Time performance panel in the MongoDB Atlas UI shows the current operations running on the cluster, providing insight into what processes are actively using resources.
b.
Summary of cluster performance over the past month
Incorrect.
The Real-Time performance panel focuses on current and recent performance metrics, not historical data over extended periods, such as the past month.
c.
Hardware statistics
Correct.
The Real-Time performance panel provides real-time metrics for CPU, disk IOPS and memory usage, allowing you to monitor the current state of your cluster's hardware resources.
d.
Network traffic
Correct.
The Real-Time performance panel reports network traffic information, such as the number of current connections and number of inbound and outbound bytes per second.
=
【5. Connecting to a MongoDB Database】
Which of the pre-formatted connection strings are available in the Atlas dashboard? (Select all that apply.)
a.
Connect with the MongoDB Shell
Correct.
MongoDB provides a pre-formatted connection string to use with the MongoDB Shell. The connection string looks like the following:
mongosh "mongodb+srv://mdb-training-cluster.swnn5.mongodb.net/myFirstDatabase" --apiVersion 1 --username MDBUser
b.
Connect your application
Correct.
MongoDB provides a pre-formatted connection string to use when connecting to an application. The connection string looks like the following:
mongodb+srv://MDBUser:@mdb-training-cluster.swnn5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
c.
Connect using MongoDB Compass
Correct.
MongoDB provides a pre-formatted connection string to use with MongoDB Compass. The connection string looks like the following:
mongodb+srv://MDBUser:@mdb-training-cluster.swnn5.mongodb.net/test
d.
Connect with MongoDB Charts
Incorrect.
MongoDB Charts is a data visualization tool that you can use with your MongoDB data. Open the Atlas dashboard to check which connection strings are available.
=
Which REPL environment does the MongoDB Shell use? (Select one.)
a.
Python
Incorrect.
The MongoDB Shell does not use a Python REPL environment. The MongoDB Shell uses a REPL environment that gives us access to JavaScript variables, functions, conditionals, loops, and control flow statements.
b.
Node
Correct.
The MongoDB Shell uses a Node REPL environment. This means that we are able to use JavaScript variable declaration, function declaration, and loops.
c.
Bash
Incorrect.
The MongoDB Shell does not use a Bash REPL environment. The MongoDB Shell uses a REPL environment that gives us access to JavaScript variables, functions, conditionals, loops, and control flow statements.
d.
Perl
Incorrect.
The MongoDB Shell does not use a Perl REPL environment. The MongoDB Shell uses a REPL environment that gives us access to JavaScript variables, functions, conditionals, loops, and control flow statements.
=
To connect your Atlas cluster with the MongoDB Shell, what do you need to run in the command line? (Select one.)
a.
The _id of the document(s) you want to work with
Incorrect.
Before you start working with documents, you need to connect to your Atlas cluster with the MongoDB Shell.
b.
The name of the collection that you want to use
Incorrect.
Before you start working with a particular collection, you need to connect to your Atlas cluster with the MongoDB Shell.
c.
Your connection string
Correct!
You need to run your connection string in the command line to connect to your Atlas cluster with the MongoDB Shell. To find your connection string, click the Connect in the Atlas dashboard and select the option for connecting with the MongoDB Shell.
=
Which of the following describes MongoDB Compass? (Select one.)
a.
A Node.js REPL environment that is used to interact with the database
Incorrect.
MongoDB Compass is not a Node REPL environment, but the MongoDB shell is a Node REPL environment. MongoDB Compass helps you work with your data in MongoDB.
b.
A data visualization tool that allows you to create and embed visualizations in your application
Incorrect.
MongoDB Compass is not a data visualization tool, but MongoDB does offer a data visualization tool called Charts. MongoDB Compass helps you work with your data in MongoDB.
c.
A tool that allows you to query, transform, and move data across Amazon S3 and Atlas clusters
Incorrect.
MongoDB Compass does not allow you to query, transform, and move data across Amazon S3 and Atlas clusters specifically. MongoDB offers a tool called Atlas Data Lake that performs those actions.
d.
A graphical user interface (GUI) for querying, aggregating, and analyzing data in MongoDB
Correct.
MongoDB Compass is a graphical user interface (GUI) for querying, aggregating, and analyzing data in MongoDB.
=
What does a MongoDB driver do? (Select one.)
a.
Executes an aggregation pipeline
Incorrect.
MongoDB drivers can be used with the aggregation framework, but that is not the sole purpose of a MongoDB driver. MongoDB drivers allow you to use MongoDB with your applications.
b.
Connects MongoDB to applications via programming languages
Correct.
MongoDB drivers provide a way to connect our database with our application.
c.
Controls replication and sharding across servers
Incorrect.
MongoDB drivers do not handle replication and sharding; this is handled in Atlas. MongoDB drivers allow you to use MongoDB with your applications.
d.
Creates different types of charts of our data
Incorrect.
MongoDB drivers do not perform any type of visualization. We can use MongoDB Charts for data visualization. MongoDB drivers allow you to use MongoDB with your applications.
=
Visit the official MongoDB driver documentation. Which of the following languages have drivers that are supported by MongoDB? (Select all that apply.)
a.
C#
Correct.
MongoDB provides a driver to connect to C# applications.
b.
Go
Correct.
MongoDB provides a driver to connect to Go applications.
c.
Node
Correct.
MongoDB provides a driver to connect to Node applications.
d.
Pascal
Incorrect.
MongoDB does not support a Pascal driver. Visit the MongoDB driver documentation for the list of drivers that MongoDB supports.
=
How can you fix the following error? (Select one.)
MongoServerSelectionError: connection to 34.239.188.169:27017 closed
a.
Update database access with the correct user credentials.
Incorrect.
This is an authentication error. You would have to update your database user if you were experiencing an authentication error. What are the other types of errors commonly experienced when trying to connect to MongoDB, and how do we address them?
b.
Add your IP address in the Network Access panel in Atlas.
Correct.
This is a network access error. You need to check the Network Access panel to ensure that your desired IP address is on the allowlist. If not, you may experience a connection timeout.
c.
Create a new database on your Atlas cluster.
Incorrect.
Creating a new database will not fix this error. How would you fix a network access error?
=
How can we fix the following error? (Select all that apply.)
MongoServerError: bad auth : Authentication failed.
a.
Check that you are connecting to the correct database deployment.
Correct.
Even if you enter the correct username and password, you should confirm that you are connecting to the correct database deployment if you receive an authentication error.
b.
Update your IP address in the Network Access panel.
Incorrect.
Updating your IP address in the Network Access panel would resolve a network access error. How do you resolve an authentication error?
c.
Check that your username and password are spelled correctly in your connection string.
Correct.
Often, a simple misspelling of login credentials will result in an authentication error.
`;
