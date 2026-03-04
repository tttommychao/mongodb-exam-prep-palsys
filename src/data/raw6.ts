export const rawText6 = `【15.Self-Managed Upgrades & Maintenance】
You want to add a new index to your replica set. Which type of environment should you test in before releasing to users? (Select one.)
a.
Production
Incorrect.
You should push only well-tested changes to the production environment to avoid releasing suboptimal features to users.
b.
Pre-production
Correct.
It’s crucial to thoroughly test any changes before pushing to production. Using a pre-production environment helps minimize any potential bugs that can arise when changes are made.
c.
Development
Incorrect.
The development environment is primarily used for implementing new features. While some testing happens in the development environment, it tends to be not as rigorous as the testing in a pre-production environment.
d.
Application
Incorrect.
The application environment can sometimes be a catch-all term. It does not specifically correspond to the pre-production environment.
=
Which of the following can result in rolling maintenance? (Select all that apply.)
a.
Creating a new index
Correct.
Creating a new index on a replica set requires it to be built on each node in a rolling fashion.
b.
Upgrading the MongoDB version
Correct.
The MongoDB version of each host must be upgraded individually in a rolling fashion.
c.
Creating a new user
Incorrect.
The process of creating a new user is replicated by all members of a replica set, which eliminates the need for rolling maintenance.
d.
Upgrading the operating system
Correct.
Upgrading the host’s operating system requires you to restart each mongod process in a rolling fashion.
=
Which of the following is true about MongoDB maintenance? (Select one.)
a.
Upgrading and maintaining MongoDB requires scheduled downtime.
Incorrect.
Performing maintenance on MongoDB does not require scheduled downtime. MongoDB replica sets are upgraded in a way that allows you to keep downtime to a minimum when performing maintenance.
b.
MongoDB requires that each node be removed from the replica set before upgrading.
Incorrect.
In MongoDB replica sets, each node is upgraded one at a time. You only have to gracefully shut down each node, which doesn’t require removing it from the replica set.
c.
Nodes can be updated individually while the others continue running.
Correct.
In MongoDB replica sets, each node is upgraded one at a time. This allows you to keep downtime to a minimum when performing maintenance.
=
You want to upgrade your MongoDB driver. What action should you take before doing so? (Select one.)
a.
Clear the oplog
Incorrect.
You should not clear the oplog. This will cause an initial sync and increase the downtime of the member being upgraded.
b.
Gracefully shut down the host server
Incorrect.
You do not need to shut down the host server to upgrade the MongoDB driver.
c.
Check the compatibility between the driver and MongoDB version
Correct.
To avoid breaking your application, you should ensure that the MongoDB version is compatible with the MongoDB driver that you plan to use.
d.
Set the feature compatibility version
Incorrect.
You set the feature compatibility version only when upgrading MongoDB versions, not drivers. The feature compatibility version enables or disables the features that persist data and are incompatible with earlier versions of MongoDB.
=
Which characteristics affect the proper functioning of an application? (Select all that apply.)
a.
Regressions in driver upgrades
Correct.
Occasionally, early driver upgrades can cause a regression in performance. After upgrading, it’s important to thoroughly test your application before pushing it to a production environment.
b.
Creating new users
Incorrect.
Creating a new user should not affect the proper functioning of your application.
c.
New host server
Incorrect.
Changing the host server should not affect the proper functioning of your application. However, it's still a good idea to thoroughly test your application before releasing it to users.
d.
Performance improvements
Correct.
Performance improvements can disrupt runtime triggers or similar functionality. It’s crucial to test these types of functions after upgrading.
=
You want to upgrade your MongoDB database version to 6.0 for your three-member replica set. Which of the following should you do before upgrading? (Select all that apply.)
a.
Confirm that MongoDB version 5.0 is installed
Correct.
You must install versions in consecutive order. For example, if you are running 4.4, you must first upgrade to 5.0 before upgrading to 6.0.
b.
Gracefully shut down all members at once
Incorrect.
When upgrading, you should have only one member of a replica set down at a time to avoid system downtime.
c.
Create a pre-production environment for your application that uses the updated version
Correct.
It’s a best practice to set up a pre-production environment before upgrading so that you can test the changes before pushing to a production environment.
d.
Confirm the feature compatibility version of each member
Correct.
Before upgrading, you should confirm that each member of the replica set has the same feature compatibility version. The feature compatibility version enables or disables the features that persist data and are incompatible with earlier versions of MongoDB.
e.
Confirm the state of each member
Correct.
Before upgrading, ensure that no replica set member is in the ROLLBACK or RECOVERING state. If it’s not clear what the state of the member is, the risk of corrupting or losing data rises significantly.
=
You have completed your pre-upgrade checklist and are ready to upgrade. What should you do first? (Select one.)
a.
Install the most recent version of MongoDB
Incorrect.
After completing the preliminary steps needed for upgrading, the next thing you need to do is gracefully shut down the secondary member that you will upgrade first.
b.
Gracefully shut down the first secondary member that you plan to upgrade
Correct.
After completing the preliminary steps needed for upgrading, the next thing you need to do is gracefully shut down the secondary member that you will upgrade first, or you risk corrupting data.
c.
Remove members from the replica set
Incorrect.
You do not need to remove any members from the replica set. You only need to gracefully shut down the secondary member that you will upgrade first.
=
【16.Replication in MongoDB】
Which of the following are benefits of using replication? (Select all that apply.)
a.
High availability
Correct.
Replication provides high availability, which means that our data can be continuously accessed, even if there is a lack of availability in a system.
b.
Indexing
Incorrect.
Indexes can be used alongside replication, but it’s not a benefit of replication.
c.
Data partitioning
Incorrect.
Data partitioning is a part of sharding, not replication.
d.
Data durability
Correct.
With replication, we can increase the durability of our data.
=
Which term best matches the following definition? (Select one.)
The concept of making sure that our data can be continuously accessed, even if there is an interruption in a system.
a.
Data durability
Incorrect.
Data durability guarantees that data has been committed and will not be lost in the case of a system failure.
b.
High availability
Correct.
High availability is the concept of making sure that our data can be continuously accessed, even if there is an interruption in a system. In MongoDB, replication is the process of storing multiple copies of the same data on different servers. This provides the database system with fault tolerance and high availability.
c.
Data partitioning
Incorrect.
Data partitioning is a method for distributing data across multiple machines.
d.
Reduced latency
Incorrect.
Reduced latency refers to the decrease in the time that it takes for a database operation to complete.
=
Which replica set member accepts all write operations? (Select one.)
a.
Arbiter
Incorrect.
Arbiters are usually introduced if there is an even number of voting members. Arbiters also do not hold any data.
b.
Secondary
Incorrect.
The secondary replicates the data from the primary. The secondary does not receive write operations.
c.
Primary
Correct.
The primary is the only member that accepts write operations. MongoDB applies write operations on the primary and records the operations in the primary's oplog, or operation log.
d.
Main
Incorrect.
Main is not a component of replication.
=
Which replica set member is responsible for replicating data? (Select one.)
a.
Secondary
Correct.
The secondary is responsible for replicating the data from the primary. The secondary does this by duplicating the primary's oplog entries and applying the operations to their datasets. As a result, the secondaries' datasets reflect the primary's dataset.
b.
Arbiter
Incorrect.
Arbiters are usually introduced if there is an even number of voting members. Arbiters also do not hold any data.
c.
Main
Incorrect.
Main is not a component of replication.
d.
Primary
Incorrect.
The primary is the only member that is responsible for accepting write operations.
=
In a three-member replica set, how many of the members are voting members by default? (Select one.)
a.
1
Incorrect.
By default, a three-member replica set has three voting members. MongoDB recommends having an odd number of voting members in a replica set. This ensures that a primary will be elected in the event of a network partition.
b.
2
Incorrect.
By default, a three-member replica set has three voting members. MongoDB recommends having an odd number of voting members in a replica set. This ensures that a primary will be elected in the event of a network partition.
c.
3
Correct.
By default, a three-member replica set has three voting members.
d.
0
Incorrect.
By default, a three-member replica set has three voting members.
=
Which of the following scenarios will initiate an election? (Select all that apply.)
a.
The primary becomes unavailable.
Correct.
If the primary becomes unavailable, it will initiate an election.
b.
The secondaries lose connectivity to primary for longer than configured timeout.
Correct.
An election is initiated if the secondary members lose connectivity to the primary for longer than the configured timeout, which is 10 seconds by default.
c.
The primary has been the primary for too long.
Incorrect.
The length of time that a member has been the primary is not a factor when it comes to initiating elections.
=
What is the role of the oplog in relation to replication? (Select one.)
a.
It keeps a running record of operations on a given member.
Correct.
The oplog is a special collection, known as a capped collection, that behaves similarly to a circular buffer. The oldest entries in this special collection are overwritten once it reaches capacity.
b.
It keeps a record of all votes that have been cast in elections.
Incorrect.
The oplog does not keep a record of all votes that have been cast. You can find election-related information by using the rs.status() command.
c.
It holds configuration information about the replica set.
Incorrect.
The oplog does not hold configuration information about a replica set. The configuration information can be found in the mongod.conf file and on the rs.conf() object.
=
You want to retrieve the status of your oplog, including details such as the configured size of your oplog and the first recorded event time. Which command should you use? (Select one.)
a.
rs.printSecondaryReplicationInfo()
Incorrect.
rs.printSecondaryReplicationInfo() will not retrieve the configured size of the oplog and the first recorded event time. You can use rs.printSecondaryReplicationInfo() to check the secondaries' oplog against the primary's oplog.
b.
rs.status()
Incorrect.
rs.status() will not retrieve the configured size of the oplog and the first recorded event time. rs.status() returns a document that outlines the status of the entire replica set.
c.
rs.printReplicationInfo()
Correct.
rs.printReplicationInfo() returns the actual size and configured size of the oplog. It also gives the length of the oplog in time, and the timestamps of the first and last entries.
d.
rs.conf()
Incorrect.
rs.conf() will not retrieve the configured size of the oplog and the first recorded event time. rs.conf() is used to retrieve the configuration object for a running replica set.
=
Which of the following are causes of replication lag? (Select all that apply.)
a.
Network latency
Correct.
Increased network latency can be a cause of replication lag.
b.
Disk throughput
Correct.
If the file system and disk device on the secondary is unable to flush data to disk as quickly as the primary, then the secondary will have difficulty keeping state.
c.
Write concerns
Correct.
Not having the appropriate write concerns can cause replication lag. If you are performing a large data ingestion or bulk load operation that requires a large number of writes to the primary, particularly unacknowledged writes, the secondaries will not be able to read the oplog fast enough to keep up with changes.
d.
Enabling access control
Incorrect.
Enabling access control is not typically a cause for replication lag. Enabling access control on a MongoDB deployment enforces authentication. With access control enabled, users are required to identify themselves and can only perform actions that adhere to the permissions granted by their assigned roles.
=
You want data to be read only from your secondary nodes. How do you achieve this? (Select one.)
a.
Set the write concern to secondary.
Incorrect.
Write concern describes the level of acknowledgement requested for a write operation.
b.
Set the read concern to secondary.
Incorrect.
Read concern lets your application specify a durability guarantee for the documents that are returned by a read operation.
c.
Set the read preference to secondary.
Correct.
Read preference allows you to determine from which replica set members read operations will be read from. When the read preference is set to secondary, all read operations will be read from secondary nodes.
d.
Set the read preference to primary.
Incorrect.
Setting read preference to primary will send all reads to the primary.
=
In a replica set, you want to require acknowledgement that write operations have been durably committed to a calculated majority of the data-bearing voting members. How do you achieve this? (Select one.)
a.
Set the write concern to majority.
Correct.
Setting the write concern to majority means that a majority of the members need to acknowledge write operations.
b.
Set the write concern to 0.
Incorrect.
Setting the write concern to 0 will not guarantee that a calculated majority of data-bearing voting members acknowledge write operations. A write concern of 0 means that no members are required to acknowledge write operations.
c.
Set the read concern to local.
Incorrect.
Setting the read concern to local will not guarantee that a calculated majority of data-bearing voting members acknowledge write operations. Read concern lets your application specify a durability guarantee for the documents that are returned by a read operation. In this case, the local instance returns the most recent data it has, with no guarantee that this data has been written to a majority of replica set members.
d.
Set the read preference to primaryPreferred.
Incorrect.
Setting the read preference to primaryPreferred will not guarantee that a calculated majority of data-bearing voting members acknowledge write operations. Read preference allows you to determine where to send reads.
=
You want to update the primary node of a replica set. How do you initiate an election? (Select one.)
a.
rs.election()
Incorrect.
rs.election() is not a valid command in MongoDB.
b.
rs.stepDown()
Correct.
rs.stepDown() initiates an election in a replica set.
c.
rs.startElection()
Incorrect.
rs.startElection() is not a valid command in MongoDB.
d.
rs.initiate()
Incorrect.
rs.initiate() is used to create a replica set. It accepts a document that specifies the hosts and the replica set configuration.
=
Which of the following commands initiates a replica set? (Select one.)
a.
rs.initiate()
Correct.
rs.initiate() is used to create a replica set. It accepts a document that specifies the hosts and the replica set configuration.
b.
rs.start()
Incorrect.
rs.start() is not a valid command in MongoDB.
c.
rs.stepDown()
Incorrect.
rs.stepDown() initiates an election in a replica set.
d.
rs.printReplicationInfo()
Incorrect.
rs.printReplicationInfo() returns the actual size and the configured size of the oplog. It also returns the length of the oplog in time, and the timestamps of the first and last entries.
=
You run the rs.status() method on your replica set. Given the following output message, which host is the primary? (Select one.)
{
set: 'atlas-9ame3j-shard-0',
date: ISODate("2023-03-10T21:30:25.181Z"),
myState: 1,
term: Long("173"),
syncSourceHost: '',
syncSourceId: -1,
heartbeatIntervalMillis: Long("2000"),
majorityVoteCount: 2,
writeMajorityCount: 2,
votingMembersCount: 3,
writableVotingMembersCount: 3,
optimes: {
lastCommittedOpTime: { ts: Timestamp({ t: 1678483825, i: 15 }), t: Long("173") },
lastCommittedWallTime: ISODate("2023-03-10T21:30:25.162Z"),
readConcernMajorityOpTime: { ts: Timestamp({ t: 1678483825, i: 15 }), t: Long("173") },
appliedOpTime: { ts: Timestamp({ t: 1678483825, i: 15 }), t: Long("173") },
durableOpTime: { ts: Timestamp({ t: 1678483825, i: 15 }), t: Long("173") },
lastAppliedWallTime: ISODate("2023-03-10T21:30:25.162Z"),
lastDurableWallTime: ISODate("2023-03-10T21:30:25.162Z")
},
lastStableRecoveryTimestamp: Timestamp({ t: 1678483819, i: 26 }),
electionCandidateMetrics: {
lastElectionReason: 'stepUpRequestSkipDryRun',
lastElectionDate: ISODate("2023-03-03T20:13:03.058Z"),
electionTerm: Long("173"),
lastCommittedOpTimeAtElection: { ts: Timestamp({ t: 1677874382, i: 13 }), t: Long("172") },
lastSeenOpTimeAtElection: { ts: Timestamp({ t: 1677874382, i: 13 }), t: Long("172") },
numVotesNeeded: 2,
priorityAtElection: 7,
electionTimeoutMillis: Long("5000"),
priorPrimaryMemberId: 2,
numCatchUpOps: Long("0"),
newTermStartDate: ISODate("2023-03-03T20:13:03.162Z"),
wMajorityWriteAvailabilityDate: ISODate("2023-03-03T20:13:04.128Z")
},
members: [
{
_id: 0,
name: 'host0.mongodb.net:27017',
health: 1,
state: 2,
stateStr: 'SECONDARY',
uptime: 609553,
optime: { ts: Timestamp({ t: 1678483823, i: 17 }), t: Long("173") },
optimeDurable: { ts: Timestamp({ t: 1678483823, i: 17 }), t: Long("173") },
optimeDate: ISODate("2023-03-10T21:30:23.000Z"),
optimeDurableDate: ISODate("2023-03-10T21:30:23.000Z"),
lastAppliedWallTime: ISODate("2023-03-10T21:30:25.162Z"),
lastDurableWallTime: ISODate("2023-03-10T21:30:25.162Z"),
lastHeartbeat: ISODate("2023-03-10T21:30:23.193Z"),
lastHeartbeatRecv: ISODate("2023-03-10T21:30:23.246Z"),
pingMs: Long("0"),
lastHeartbeatMessage: '',
syncSourceHost: 'host1.mongodb.net:27017',
syncSourceId: 1,
infoMessage: '',
configVersion: 9,
configTerm: 173
},
{
_id: 1,
name: 'host1.mongodb.net:27017',
health: 1,
state: 1,
stateStr: 'PRIMARY',
uptime: 609583,
optime: { ts: Timestamp({ t: 1678483825, i: 15 }), t: Long("173") },
optimeDate: ISODate("2023-03-10T21:30:25.000Z"),
lastAppliedWallTime: ISODate("2023-03-10T21:30:25.162Z"),
lastDurableWallTime: ISODate("2023-03-10T21:30:25.162Z"),
syncSourceHost: '',
syncSourceId: -1,
infoMessage: '',
electionTime: Timestamp({ t: 1677874383, i: 1 }),
electionDate: ISODate("2023-03-03T20:13:03.000Z"),
configVersion: 9,
configTerm: 173,
self: true,
lastHeartbeatMessage: ''
},
{
_id: 2,
name: 'host2.mongodb.net:27017',
health: 1,
state: 2,
stateStr: 'SECONDARY',
uptime: 609282,
optime: { ts: Timestamp({ t: 1678483824, i: 24 }), t: Long("173") },
optimeDurable: { ts: Timestamp({ t: 1678483824, i: 24 }), t: Long("173") },
optimeDate: ISODate("2023-03-10T21:30:24.000Z"),
optimeDurableDate: ISODate("2023-03-10T21:30:24.000Z"),
lastAppliedWallTime: ISODate("2023-03-10T21:30:25.162Z"),
lastDurableWallTime: ISODate("2023-03-10T21:30:25.162Z"),
lastHeartbeat: ISODate("2023-03-10T21:30:24.509Z"),
lastHeartbeatRecv: ISODate("2023-03-10T21:30:23.727Z"),
pingMs: Long("0"),
lastHeartbeatMessage: '',
syncSourceHost: 'host2.mongodb.net:27017',
syncSourceId: 1,
infoMessage: '',
configVersion: 9,
configTerm: 173
}
],
ok: 1,
'$clusterTime': {
clusterTime: Timestamp({ t: 1678483825, i: 15 }),
signature: {
hash: Binary(Buffer.from("31d47b93602c9412e9fb4c2eac2cadc5eae03b8a", "hex"), 0),
keyId: Long("7148911878087901206")
}
},
operationTime: Timestamp({ t: 1678483825, i: 15 })
}
a.
host0.mongodb.net:27017
Incorrect.
host0.mongodb.net:27017 is currently a secondary, according to the stateStr field. rs.status() allows you to view information about your replica set, including the health of each member, whether a member is a secondary or the primary, and information about operations.
b.
host1.mongodb.net:27017
Correct.
host1.mongodb.net:27017 is currently the primary, according to the stateStr field. rs.status() allows you to view information about your replica set, including the health of each member, whether a member is a secondary or the primary, and information about operations.
c.
host2.mongodb.net:27017
Incorrect.
host2.mongodb.net:27017 is currently a secondary, according to the stateStr field. rs.status() allows you to view information about your replica set, such as the health of each member, whether a member is a secondary or the primary, and information about operations.
=
You run the rs.conf() command on a replica set, which returns the following output. Currently, mongod0.replset.com:27017 has the highest priority, but you want to change it so that mongod2.replset.com:27017 has the highest priority.
First, you assign rs.conf() to a variable called config. Which of the following commands should you use to ensure that server mongod2.replset.com:27017 has the highest priority? (Select one.)
{
_id: 'mongodb-repl-example',
version: 1,
term: 3,
members: [
{
_id: 0,
host: 'mongod0.replset.com:27017',
arbiterOnly: false,
buildIndexes: true,
hidden: false,
priority: 10,
tags: {},
secondaryDelaySecs: Long("0"),
votes: 1
},
{
_id: 1,
host: 'mongod1.replset.com:27017',
arbiterOnly: false,
buildIndexes: true,
hidden: false,
priority: 7,
tags: {},
secondaryDelaySecs: Long("0"),
votes: 1
},
{
_id: 2,
host: 'mongod2.replset.com:27017',
arbiterOnly: false,
buildIndexes: true,
hidden: false,
priority: 1,
tags: {},
secondaryDelaySecs: Long("0"),
votes: 1
}
],
protocolVersion: Long("1"),
writeConcernMajorityJournalDefault: true,
settings: {
chainingAllowed: true,
heartbeatIntervalMillis: 2000,
heartbeatTimeoutSecs: 10,
electionTimeoutMillis: 10000,
catchUpTimeoutMillis: -1,
catchUpTakeoverDelayMillis: 30000,
getLastErrorModes: {},
getLastErrorDefaults: { w: 1, wtimeout: 0 },
replicaSetId: ObjectId("63dc64c2692d2589bcd1838c")
}
}
a.
config.members[2].priority = 100
Correct.
The priority is part of a nested object in an array, so you can use the index of the member that you want to update. In this case, mongod2.replset.com has an index of 2. The higher the priority, the more likely the member is to win an election.
b.
config.members[1].priority = 100
Incorrect.
The priority is part of a nested object in an array, so you can use the index of the member that you want to update. In this case, mongod1.replset.com has an index of 1. The higher the priority, the more likely the member is to win an election. In this example, you want to ensure that mongod2.replset.com:27017 has the highest priority and, therefore, the highest probability of winning an election.
c.
config.members[2].priority = 0
Incorrect.
The priority is part of a nested object in an array, so you can use the index of the member that you want to update. In this case, mongod2.replset.com has an index of 2. The higher the priority, the more likely the member is to win an election. A priority value of 0 will result in this member never being elected.
=
You run the db.hello() method on your replica set. Given the following output message, which host is the primary? (Select one.)
{
topologyVersion: {
processId: ObjectId("640254427adc6d84361ce560"),
counter: Long("6")
},
hosts: [
'mongod0.replset.com:27017',
'mongod1.replset.com:27017',
'mongod2.replset.com:27017'
],
setName: 'mongodb-repl-example',
setVersion: 1,
isWritablePrimary: true,
secondary: false,
primary: 'mongod0.replset.com:27017',
me: 'mongod0.replset.com:27017',
electionId: ObjectId("7fffffff0000000000000003"),
lastWrite: {
opTime: { ts: Timestamp({ t: 1675469681, i: 1 }), t: Long("3") },
lastWriteDate: ISODate("2023-02-04T00:14:41.000Z"),
majorityOpTime: { ts: Timestamp({ t: 1675469681, i: 1 }), t: Long("3") },
majorityWriteDate: ISODate("2023-02-04T00:14:41.000Z")
},
maxBsonObjectSize: 16777216,
maxMessageSizeBytes: 48000000,
maxWriteBatchSize: 100000,
localTime: ISODate("2023-02-04T00:14:44.847Z"),
logicalSessionTimeoutMinutes: 30,
connectionId: 130,
minWireVersion: 0,
maxWireVersion: 17,
readOnly: false,
ok: 1,
'$clusterTime': {
clusterTime: Timestamp({ t: 1679013170, i: 22 }),
signature: {
hash: Binary(Buffer.from("8b26846115473501007904a39a6e6a169c9b1fa3", "hex"), 0),
keyId: Long("7148911878087901206")
}
},
operationTime: Timestamp({ t: 1679013170, i: 22 })
}
a.
mongod1.replset.com:27017
Incorrect.
mongod1.mongodb.net:27017 is not the primary, according to the primary field. The hello command is useful for monitoring the cluster status via MongoDB drivers.
b.
mongod2.replset.com:27017
Incorrect.
mongod2.mongodb.net:27017 is not the primary, according to the primary field. The hello command is useful for monitoring the cluster status via MongoDB drivers.
c.
mongod0.replset.com:27017
Correct.
mongod0.mongodb.net:27017 is the primary, according to the primary field. The hello command is useful for monitoring the cluster status via MongoDB drivers.
=
【17.Self-Managed Database Security】
A user is required to enter a valid username and password in order to access a database. This is an example of which security practice? (Select one.)
a.
Authentication
Correct.
Authentication is the process of verifying the identity of a user attempting to access a database. Requiring a user to enter a valid username and password is a commonly used authentication mechanism.
b.
Authorization
Incorrect.
Authorization determines the specific permissions that a user has on the database. Requiring a user to enter a valid username and password is a mechanism for verifying the identity of the user, not for determining the user’s permissions.
c.
Auditing
Incorrect.
Auditing is the process of monitoring and recording changes to data and database configuration. Requiring a user to enter a valid username and password is a mechanism for verifying the identity of the user, not for monitoring and recording data and database changes.
=
You grant a user permission to create and modify roles and users on the sample_analytics database. This is an example of which security practice? (Select one.)
a.
Auditing
Incorrect.
Auditing is the process of monitoring and recording changes to data and database configuration, not granting user permissions on a database.
b.
Authentication
Incorrect.
Authentication is the process of verifying the identity of a user attempting to access a database, not granting user permissions on a database.
c.
Authorization
Correct.
Authorization determines the specific permissions that a user has on the database.
=
At your company, you're in charge of making sure only the portions of data necessary for the Security team to complete their tasks are accessible. You must ensure that the team cannot access data they do not need. Which practice is the best choice for you to implement? (Select one.)
a.
Auditing
Incorrect.
Auditing is the process of monitoring and recording changes to data and database configuration.
b.
Role-Based Access Control (RBAC)
Correct.
Role-Based Access Control (RBAC) is a widely used authorization approach in which permissions are granted to roles rather than to users directly. Users are granted one or more roles that determine their access to database resources and operations.
c.
Authentication
Incorrect.
Authentication is the process of verifying the identity of a user attempting to access a database.
=
What is the purpose of auditing in the context of database security? (Select all that apply.)
a.
Increase database performance
Incorrect.
Recording audit events can degrade the performance of a system. Therefore, it is important to be intentional about the operations you audit in order to minimize potential performance costs.
b.
Support the analysis of security incidents
Correct.
Auditing can be used to support the analysis of security incidents. For example, you could use an audit log to determine what users were logged in at the time of an incident.
c.
Record all read and write operations made by all users on a database
Incorrect.
While you can audit and record read and write operations, this can impact database performance. Therefore, it’s generally recommended to be selective and only audit necessary read and write operations to minimize performance costs.
d.
Comply with regulatory requirements
Correct.
Auditing is often needed to comply with regulatory requirements. For example, regulations in some industries require organizations to keep an audit trail of database actions such as user authentication and authorization events.
=
What is the default authentication mechanism for MongoDB? (Select one.)
a.
x.509 Certificates
Incorrect.
MongoDB supports x.509 certificate authentication for client and internal authentication of replica set members and sharded clusters, but this is not the default mechanism. x.509 certificate authentication requires a secure TLS/SSL (Transport Layer Security/Secure Sockets Layer) connection.
b.
LDAP
Incorrect.
MongoDB Enterprise supports querying an LDAP server for the LDAP groups the authenticated user belongs to, but this is not the default mechanism. MongoDB authorizes the user based on the mapped roles and their associated privileges.
c.
SCRAM
Correct.
SCRAM, or the Salted Challenge Response Authentication Mechanism, is MongoDB’s default authentication mechanism. SCRAM verifies the identity of a user by exchanging a challenge and response that is protected by a cryptographic key.
=
You assign a user the userAdminAnyDatabase role. What types of actions can the user take with this role only? (Select all that apply.)
a.
Create users and roles
Correct.
The userAdminAnyDatabase is a superuser role that provides the ability to create users and roles, among other privilege actions.
b.
Ensure that only users with valid credentials connect to a database
Incorrect.
Authentication is the security measure that ensures only users with valid credentials can connect to a database. userAdminAnyDatabase cannot set authentication measures.
c.
Modify users and roles
Correct.
The userAdminAnyDatabase is a superuser role that provides the ability to modify users and roles, among other privilege actions.
d.
Read all data
Incorrect.
The userAdminAnyDatabase provides the same access to user administration operations as userAdmin on all databases except local and config.
=
You want to create users on a self-managed MongoDB deployment. What do you need to do before you can do so? (Select all that apply.)
a.
Enable access control
Correct.
Enabling access control is a prerequisite for creating users on a MongoDB deployment. With access control enabled, users must authenticate themselves and can only access database resources and perform actions as allowed by their roles.
b.
Assign a role
Incorrect.
Assigning one or more roles is part of the process of creating a user, not a prerequisite for creating users.
c.
Create a user administrator
Correct.
The user administrator is responsible for managing all users and roles that are allowed to access the database. You must create a user administrator prior to creating any other users.
=
You need to create a new user and want to assign roles to them at the same time. What method should you use? (Select one.)
a.
db.getUser()
Incorrect.
db.getUser() is not used to create a user or assign roles to them. db.getUser() is used to return user information, including current roles, for a specified user.
b.
db.createUser()
Correct.
db.createUser() is used to create a new user on the current database. You can assign roles to the new user within the call to db.createUser().
c.
db.revokeRolesFromUser()
Incorrect.
db.revokeRolesFromUser() is not used to assign roles to a user. db.revokeRolesFromUser() is used to remove one or more roles from a user on the current database.
=
Which destinations can audit events be printed to when using a self-managed MongoDB instance? (Select all that apply.)
a.
Console
Correct.
Audit events can be printed to the console in JSON format.
b.
Syslog
Correct.
Audit events can be printed to the syslog in JSON format. This option is not available on Windows.
c.
Configuration file
Incorrect.
Audit events are not printed to the configuration file. The configuration file can be used to enable auditing by setting the auditLog.destination configuration file option.
d.
BSON file
Correct.
Audit events can be printed to a file in either BSON or JSON file format.
=
Given the following configuration file, where are audit events printed on this MongoDB instance? (Select one.)
# mongod.conf
storage:
dbPath: /var/lib/mongodb
systemLog:
destination: file
logAppend: true
path: /var/log/mongodb/mongod.log
net:
port: 27017
bindIp: 127.0.0.1
processManagement:
timeZoneInfo: /usr/share/zoneinfo
security:
authorization: enabled
auditLog:
destination: file
format: BSON
path: /var/log/mongodb/auditLog.bson
Correct Answer
a.
/var/log/mongodb/auditLog.json
Incorrect.
The path /var/log/mongodb/auditLog.json does not appear in this configuration file.
b.
/var/lib/mongodb
Incorrect.
In this configuration file, /var/lib/mongodb is the storage.dbPath setting. storage.dbPath is the directory where the mongod instance stores its data.
c.
/var/log/mongodb/auditLog.bson
Correct.
In this configuration file, /var/log/mongodb/auditLog.bson is the auditLog.path setting. auditLog.path is the location of the output file for auditing if auditLog.destination is set to file, as it is in this case.
d.
/var/log/mongodb/mongod.log
Incorrect.
In this configuration file, /var/log/mongodb/mongod.log is the systemLog.path setting. The log at systemLog.path is used to write information related to operational aspects of the MongoDB server, not audit events.
=
What are some limitations of encryption at rest? (Select all that apply.)
a.
Managing encryption keys can be a challenge.
Correct.
If the key used to encrypt data at rest is lost or stolen, the data might become compromised or inaccessible. Anyone with the encryption key will have access to the data on the server.
b.
It does not protect against attacks on data in memory.
Correct.
With encryption at rest, data is decrypted for use. Once the data is in use, such as when it's being processed by the database server, it is vulnerable to attack.
c.
It does not encrypt filesystem-based backups.
Incorrect.
Encryption at rest can be used to encrypt backup copies of your data, in addition to the data files on the database server. Users running MongoDB Atlas may choose to “bring their own key” and enable database-level encryption for sensitive workloads via the WiredTiger Encrypted Storage Engine.
d.
It does not protect against insider threats.
Correct.
Trusted users with authorization can use their privileges to decrypt data protected by encryption at rest. Therefore, these trusted users can expose or tamper with the data.
=
A doctor’s office stores patient medical records in a database. To provide an extra layer of security for medical diagnosis information, you want to use a method of encryption in which this data is encrypted in the client application before it’s sent over the network to the MongoDB servers. What type of encryption should you use? (Select one.)
a.
Encryption at rest
Incorrect.
Encryption at rest does not encrypt data in the client application. It only encrypts data in storage on the server.
b.
Client-Side Field Level Encryption (CSFLE)
Correct.
Client-Side Field Level Encryption (CSFLE) encrypts data in the client before it's sent to the database. This ensures data is tamper- and read-proof on the server.
c.
TLS/SSL (Transport Encryption)
Incorrect.
TLS/SSL is used to encrypt all of MongoDB’s network traffic. It ensures that MongoDB's network traffic is readable only by the intended client.
=
How does MongoDB provide encryption at rest? (Select all that apply.)
a.
Client-Side Field Level Encryption (CSFLE)
Correct.
MongoDB’s Client-Side Field Level Encryption (CSFLE) feature provides in-use and at-rest encryption capabilities. CSFLE enables you to encrypt data in your application before you send it over the network to MongoDB. The protected fields are encrypted from the time they leave the application boundary until they are received back to the application.
b.
Transport Layer Security (TLS)
Incorrect.
MongoDB supports Transport Layer Security (TLS) to provide transport encryption. TLS enables encrypted communication between client applications and MongoDB instances.
c.
Encrypted Storage Engine
Correct.
MongoDB’s Encrypted Storage Engine feature enables you to natively encrypt MongoDB data files on disk. Note that this feature is only available on MongoDB Enterprise instances.
=
How does MongoDB support encryption of data in transit? (Select all that apply.)
a.
Encrypted Storage Engine
Incorrect.
MongoDB’s Encrypted Storage Engine feature enables you to natively encrypt MongoDB data files on disk.
b.
Client-Side Field Level Encryption (CSFLE)
Correct.
MongoDB’s Client-Side Field Level Encryption (CSFLE) feature provides in-use encryption capabilities. CSFLE enables you to encrypt data in your application before you send it over the network to MongoDB. The protected fields are encrypted from the time they leave the application boundary until they are received back to the application.
c.
Transport Layer Security (TLS)
Correct.
MongoDB supports Transport Layer Security (TLS) to provide encryption of data in transit. TLS enables encrypted communication between client applications and MongoDB instances.
=
How does MongoDB support in-use encryption? (Select all that apply.)
a.
Client-Side Field Level Encryption (CSFLE)
Correct.
MongoDB’s Client-Side Field Level Encryption (CSFLE) feature provides in-use encryption capabilities. CSFLE enables you to encrypt data in your application before you send it over the network to MongoDB.
b.
Automatic encryption
Correct.
Automatic encryption is a mechanism available in MongoDB Enterprise for setting up Client-Side Field Level Encryption (CSFLE). Automatic encryption enables you to perform encrypted read and write operations without having to write code to specify how to encrypt fields.
c.
Transport Layer Security (TLS)
Incorrect.
MongoDB supports Transport Layer Security (TLS) in order to provide encryption of data in transit. TLS enables encrypted communication between client applications and MongoDB instances.
=
You want to enable Transport Layer Security (TLS) for a self-managed MongoDB deployment at your organization. Which certificate should you or your organization obtain prior to enabling TLS? (Select one.)
a.
A keyfile that provides use of local key management
Incorrect.
MongoDB’s encrypted storage engine supports use of local key management via a keyfile as a key management option for the master key. This is all to support encryption at rest.
b.
A valid TLS certificate issued by a certificate authority for each server in the deployment
Correct.
To enable TLS in a self-managed environment, you should obtain a valid, signed TLS certificate for each server in the deployment. In production, you should use onlycertificates generated and signed by a certificate authority. This permits MongoDB drivers to verify the server’s identity.
c.
A valid, self-signed TLS certificate for each server in the deployment
Incorrect.
While MongoDB can use a self-signed certificate to enable TLS, there will be no validation of server identity even though the communications channel will be encrypted to prevent eavesdropping on the connection. This leaves you vulnerable to a man-in-the-middle attack.
=
You want to specify that a server uses and accepts only TLS-encrypted connections. What should you set the net.tls.mode configuration file setting to? (Select one.)
a.
preferTLS
Incorrect.
Setting the net.tls.mode configuration file setting to preferTLS specifies that connections between servers use TLS. For incoming connections, the server accepts both TLS and non-TLS.
b.
/etc/tls/mongodb.pem
Incorrect.
/etc/tls/mongodb.pem is a path to a file that contains a TLS certificate and key. It is not a potential value for the net.tls.mode configuration file setting.
c.
requireTLS
Correct.
Setting the net.tls.mode configuration file setting to requireTLS specifies that the server uses and accepts only TLS-encrypted connections.
d.
disabled
Incorrect.
Setting the net.tls.mode configuration file setting to disabled specifies that the server does not use TLS.
`;
