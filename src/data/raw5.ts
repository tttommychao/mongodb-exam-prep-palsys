export const rawText5 = `【11.MongoDB Logging Basics】
Which of the following are valid methods to download logs from M10-and-above Atlas clusters? (Select all that apply.)
a.
Using the Atlas UI
Correct.
When using the Atlas dashboard, you can download logs for a node in a given cluster by first navigating to the Database tab and locating the cluster in the list. Then click the ellipsis icon to expand the drop-down menu and select the Download Logs option.
b.
Contacting MongoDB Support
Incorrect.
MongoDB Support can help with a lot of issues, but there are easier and quicker ways to acquire logs for your Atlas deployment.
c.
Using the Atlas CLI
Correct.
You can download logs for several different services (mongod, mongos, mongodbsql, etc.) by using the atlas logs download command in the Atlas CLI.
d.
Using a service like SCP (Secure Copy Protocol) or FTP (File Transfer Protocol)
Incorrect.
While you cannot use SCP (Secure Copy Protocol) or FTP (File Transfer Protocol), Atlas logs can be downloaded easily by using a few different methods.
=
What is the minimum privilege you need to download logs from an Atlas cluster? (Select one.)
a.
Organization Read Only
Incorrect.
The Organization Read Only role gives users of an organization the ability to read settings, view users, view projects, and view some billing information within the organization.
b.
Project Data Access Read Only
Correct.
The Project Data Access Read Only role gives users the ability to view databases and collections, view documents (in the UI only), view indexes, view and download process and audit logs, and view the Performance Advisor, profiler, and real-time stats. This role is also known by its API equivalent, GROUP_DATA_ACCESS_READ_ONLY.
c.
Project Read Only
Incorrect.
This limited role grants users view-only access to the project control panel. This role does not allow users to view or edit data in the data explorer or to access log files.
d.
Organization Member
Incorrect.
This role applies to an organization rather than a project. Organization members can access projects that they have been invited to, but they need to be explicitly added.
=
While trying to access the mongod.log file for a self-managed deployment, you realize that it’s not in its default location. Which of the following options would help you find the location of the mongod.log file? (Select all that apply.)
a.
The path for the log file can be found by running the db.getLogPath() helper method in mongosh.
Incorrect.
The db.getLogPath() helper method does not exist in mongosh. Running this command will result in an error.
b.
The path for the log file can be found by viewing the value provided to the --logpath argument when viewing the mongod process information with a command such as “ps aux | grep mongod”.
Correct.
The --logpath argument can be used to specify the path to the log file when starting the mongod process. If this argument is not provided, the default path is /var/log/mongodb/mongod.log. However, if a path is provided, the log file will be written to that location instead.
c.
The path for the log file can be found by checking the systemLog.path value in the mongod.conf file.
Correct.
The systemLog.path value in the mongod.conf file can be used to find the path to the log file.
d.
The path for the log file can be found by running db.adminCommand({getLog: "global"}) in mongosh.
Incorrect.
The db.adminCommand({getLog: "global"}) command will return the contents of the RAM cache for the global log. This command does not return the path to the log file.
=
Which of the following users can successfully open a mongod.log file? (Select all that apply.)
a.
A user with access to the sudo command in Linux.
Correct.
The sudo command can be used to open the log file with elevated privileges. For example, running sudo cat /var/log/mongodb/mongod.log | jq will print the contents of the log file to the terminal, regardless of the permissions of the user running the command.
b.
A user that has been added to the mongodb group.
Correct.
Adding the user to the mongodb group will allow the user to open the log file.
c.
The file can be opened by any user on the system, regardless of permissions.
Incorrect.
The log file is owned by the mongodb user and the mongodb group. If the user is not a member of the mongodb group or a superuser with access to the sudo command, they will not be able to open the log file.
=
Given the following log message, identify the correct field name that relates to the operating system thread that prompted the log message. (Select one.)
{
"t": {
"$date": "2023-05-12T21:09:58.661+00:00"
},
"s": "I",
"c": "REPL",
"id": 21358,
"ctx": "conn54",
"msg": "Replica set state transition",
"attr": {
"newState": "SECONDARY",
"oldState": "PRIMARY"
}
}
a.
The "t" field
Incorrect.
The "t" field in a MongoDB log message relates to the timestamp of the log message.
b.
The "s" field
Incorrect.
The "s" field in a MongoDB log message relates to the severity of the log message.
c.
The "ctx" field
Correct.
The "ctx" field in a MongoDB log message relates to the thread that generated the log message, in this case, "conn54". This field will be present in all log messages.
d.
The "id" field
Incorrect.
The "id" field in a MongoDB log message relates to the unique ID of the log message.
=
Which of the following fields in a MongoDB log relates to the level of debugging verbosity? (Select one.)
a.
"msg"
Incorrect.
The "msg" field in a MongoDB log message relates to the message itself.
b.
"s"
Correct.
The "s" field in a MongoDB log message relates to the severity of the log message, which will be set to a value for the debugging verbosity level. The severity is indicated by a number preceded by a "D" between 0 and 5, with 0 being the least severe and 5 being the most severe. For example, D1 indicates a debugging message with a severity of 1.
c.
"attr"
Incorrect.
The "attr" field in a MongoDB log message relates to the attributes of the log message. If there are no attributes, this field will not be present in the log message.
d.
"id"
Incorrect.
The "id" field in a MongoDB log message relates to the unique ID of the log message.
=
Which of the following statements are true regarding the slowms property? (Select all that apply.)
a.
The slowms threshold can be set only for self-managed deployments. It cannot be changed for Atlas clusters.
Incorrect.
The slowms threshold can be set for both self-managed deployments and M10-or-above Atlas clusters.
b.
The slowms property defines the maximum amount of time for an operation to complete before it’s considered slow.
Correct.
Any operations that run longer than the slowms threshold will be written to the diagnostic log.
c.
The default value for the slowms property is set to 100 milliseconds.
Correct.
The default value for the slowms property can be adjusted at any time.
d.
The only way to set a custom threshold for the slowms property is by using the db.setProfilingLevel() method in mongosh.
Incorrect.
You can set a custom threshold in one of three ways: by using the db.setProfilingLevel() method in mongosh, by using the slowms launch parameter to the MongoDB service, or by adding the slowOpsThreshold property in the configuration file.
=
Which of the following options would successfully set a slowms threshold to 50 milliseconds in the MongoDB Shell? (Select one.)
Option A. db.setProfilingLevel(0, { slowms: 500 })
Option B. db.setProperty(0, { slowms: 500 })
Option C. db.setProperty(0, { slowms: 50 })
Option D. db.setProfilingLevel(0, { slowms: 50 })
a.
Option A
Incorrect.
This method would set a slowms threshold to 500 milliseconds, not 50 milliseconds.
b.
Option B
Incorrect.
db.setProperty() is not a valid MongoDB Shell method and will return an error when run.
c.
Option C
Incorrect.
db.setProperty() is not a valid MongoDB Shell method and will return an error when run.
d.
Option D
Correct.
This command will set a slowms threshold to 50 milliseconds in the MongoDB Shell.
=
Which of the following statements are true regarding the verbosity of the logs? (Select all that apply.)
a.
The verbosity level refers to the amount of debugging information to include in the log file.
Correct.
The verbosity level refers to the amount of debugging information to include in the log file. The verbosity level is set to 0 by default to preserve disk space.
b.
To increase the verbosity for only one component, such as the INDEX component, edit the configuration file for a self-managed deployment.
Correct.
You can adjust the verbosity for a single component or for all components in the configuration file.
c.
The setLogLevel() method can be used on Atlas clusters to adjust the verbosity of the logs.
Incorrect.
The setLogLevel() method can be used to adjust the verbosity level only on self-managed deployments.
d.
The verbosity level for a self-managed deployment can be adjusted by setting the verbosity property under the systemLog section of the configuration file.
Correct.
Setting the verbosity property to a value of 1 to 5 determines the amount of debugging information that is included in the log.
=
What is the maximum number of days that MongoDB Atlas will retain logs for? (Select one.)
a.
30 days
Correct.
MongoDB Atlas will retain the last 30 days of log messages for each service run on your cluster, for example, mongod, mongos, and mongodbsql. These logs are downloadable by using the Atlas UI or Atlas CLI on M10-or-above Atlas clusters.
b.
90 days
Incorrect.
MongoDB Atlas retains logs, but not for 90 days. The logs can be downloaded by using the Atlas UI or Atlas CLI for M10-or-above Atlas clusters.
c.
120 days
Incorrect.
MongoDB Atlas retains logs, but not for 120 days. The logs can be downloaded by using the Atlas UI or Atlas CLI for M10-or-above Atlas clusters.
d.
365 days
Incorrect.
MongoDB Atlas retains logs, but not for an entire year. The logs can be downloaded by using the Atlas UI or Atlas CLI for M10-or-above Atlas clusters.
=
Which of the following are valid methods for rotating mongod log files? (Select all that apply.)
a.
Using the db.adminCommand({ logRotate: 1 }) method in mongosh
Correct.
Rotating logs can be done in mongosh by using the db.adminCommand({ logRotate: 1 }) method. Depending on your configuration, MongoDB will either reopen the current log file and append new messages to it, or rename the existing log file, open a new one, and append new messages to the new file.
b.
Forcefully ending the mongod process by using pkill $(pidof mongod)
Incorrect.
Ending the mongod process by issuing the pkill command will not cause the logs to rotate. You also run the risk of losing some messages if they were not logged before the process was ended.
c.
Running the rotate logs helper in mongosh
Incorrect.
While it’s possible to initiate a log rotation in mongosh, the rotate logs helper is not an actual command.
d.
Issuing a SIGUSR1 signal to the mongod process manually or automatically by using the Linux logrotate utility
Correct.
The mongod process will respond to a SIGUSR1 signal in Linux by initiating a log rotation. This method allows log rotations to occur without using mongosh.
=
【12.MongoDB Database Administrator Tools】
Which of the following statements are true about the MongoDB Database Tools suite? (Select all that apply.)
a.
To gain access to the MongoDB Database Tools suite, the package must be installed separately from MongoDB Community Edition or MongoDB Enterprise Edition.
Incorrect.
The MongoDB Database Tools suite is included when you install MongoDB Community Edition or MongoDB Enterprise Edition. If you wish to use MongoDB Database Tools with an Atlas deployment, it must be installed separately.
b.
MongoDB Database Tools are a suite of command-line utilities for working with MongoDB.
Correct.
MongoDB Database Tools are a suite of command-line utilities that support the management and administration of your deployment.
c.
MongoDB Database Tools allow you to import and export data, restore backups, and view diagnostics for your deployments.
Correct.
MongoDB Database Tools fall into four categories: Backup and Restore, Data Import and Export, Diagnostic Tools, and GridFS Tools.
d.
Version compatibility between MongoDB Database Tools and the target MongoDB server is crucial to ensure interoperability and data integrity.
Correct.
Before installing MongoDB Database Tools, be sure to refer to the compatibility table in MongoDB’s documentation to verify version compatibility.
=
Which of the following is an example of a task that can be accomplished with the MongoDB Database Tools? (Select all that apply.)
a.
Importing JSON files from an external source into an Atlas cluster
Correct.
mongoimport can be used to import data into an Atlas cluster or a self-managed MongoDB deployment.
b.
Monitoring the status of a self-managed MongoDB deployment from the MongoDB Shell
Incorrect.
mongostat can be used to monitor a self-managed deployment or an Atlas cluster from the command line, not from the MongoDB Shell.
c.
Creating a backup of a small Atlas cluster
Correct.
mongodump can be used to create a backup of a small Atlas cluster or a self-managed MongoDB deployment.
d.
Diagnosing problems when attempting to restore data from a BSON file to a self-managed MongoDB deployment
Correct.
bsondump can be used to diagnose issues that may arise when trying to restore data from a binary file to a self-managed MongoDB deployment.
=
Which of the following best describes the MongoDB Database Tool mongodump? (Select one.)
a.
mongodump is a utility that is used to back up the contents of a sharded MongoDB cluster.
Incorrect.
The mongodump utility is used to back up the contents of simple standalone deployments and replica sets. It should not be used on sharded clusters.
b.
mongodump is a utility that is used to restore the contents of a sharded MongoDB cluster.
Incorrect.
The mongodump utility is used to back up the contents of simple standalone deployments and replica sets. It should not be used on sharded clusters. To restore the contents of a non-sharded cluster, you can use the mongorestore utility.
c.
mongodump is a utility that is used to back up the contents of a simple MongoDB cluster.
Correct.
The mongodump utility is used to back up the contents of simple standalone deployments and replica sets.
d.
mongodump is a utility that is used to restore the contents of a simple MongoDB cluster.
Incorrect.
The mongodump utility is used to back up the contents of simple standalone deployments and replica sets. To restore the contents of a non-sharded cluster, you can use the mongorestore utility.
=
Which of the following commands will back up only the grades collection from the sample_training database in a dump directory? (Select all that apply.)
Option A.
mongodump --db sample_training --collection grades
Option B.
mongodump --collection grades "mongodb+srv://dbaTestAdmin@m0-example-cluster.iy0a1o4.mongodb.net/sample_training"
Option C.
mongodump -v --gzip --archive=backup.gz "mongodb+srv://dbaTestAdmin@m0-example-cluster.iy0a1o4.mongodb.net/sample_training"
Option D.
mongodump --db sample_training
a.
Option A
Correct.
This command will back up the grades collection from the sample_training database in a standalone instance running on the default port.
b.
Option B
Correct.
This command will back up the grades collection from the sample_training database in an Atlas cluster.
c.
Option C
Incorrect.
This command will compress the data from the grades collection from the sample_training database and collapse it into a single file called backup.gz. This file will not be stored in a dump directory.
d.
Option D
Incorrect.
Incorrect. This command will back up the entire sample_training database. To limit the backup to the grades collection, the command must include --collection grades.
=
Which of the following best describes the MongoDB Database Tool mongorestore? (Select one.)
a.
mongorestore is a utility that is used to back up the contents of a sharded MongoDB cluster.
Incorrect.
The mongorestore utility is used to restore the contents of simple standalone deployments and replica sets. It should not be used on sharded clusters. If you want to back up the contents of a non-sharded cluster, use the mongodump utility.
b.
mongorestore is a utility that is used to restore the contents of a sharded MongoDB cluster.
Incorrect.
The mongorestore utility is used to restore the contents of simple standalone deployments and replica sets. It should not be used on sharded clusters.
c.
mongorestore is a utility that is used to back up the contents of a simple MongoDB cluster.
Incorrect.
The mongorestore utility can be used to restore the contents of simple standalone deployments and replica sets. If you want to back up the contents of a non-sharded cluster, use the mongodump utility.
d.
mongorestore is a utility that is used to restore the contents of a simple MongoDB cluster.
Correct.
The mongorestore utility can be used to restore the contents of simple standalone deployments and replica sets.
=
Which of the following commands will restore only the grades collection from the sample_training database from a dump directory? (Select all that apply.)
Option A.
mongorestore --nsInclude=grades dump/
Option B.
mongorestore --nsInclude=sample_training.grades dump/sample_training/school/grades
Option C.
mongorestore --nsInclude=sample_training.grades dump/
Option D.
mongorestore --db sample_training –collection grades
a.
Option A
Incorrect.
This command uses --nsInclude to specify the grades collection, but it’s missing the database name.
b.
Option B
Incorrect.
This command uses --nsInclude to specify the grades collection in the sample_training database, but it specifies the incorrect folder for the backup.
c.
Option C
Correct.
This command will restore the data from the grades collection in the sample_training database, from the file created by the mongodump command.
d.
Option D
Incorrect.
mongorestore uses the --nsInclude option to specify the database and collection.
=
Which of the following best describes the MongoDB Database Tool mongoexport? (Select one.)
a.
mongoexport is a command-line tool that produces a binary dump of data stored in a MongoDB instance.
Incorrect.
The mongoexport utility is used to produce an export of data stored in a MongoDB instance, but only in JSON or CSV file format.
b.
mongoexport is a command-line tool that takes a JSON or CSV file and uploads it to a MongoDB instance.
Incorrect.
The mongoexport utility creates a backup file from a MongoDB instance. To restore the contents of a cluster, you can use the mongoimport utility.
c.
mongoexport is a command-line tool that produces a YAML export of data stored in a MongoDB instance.
Incorrect.
The mongoexport utility is used to produce an export of data stored in a MongoDB instance, but only in JSON or CSV file format.
d.
mongoexport is a command-line tool that produces a JSON or CSV export of data stored in a MongoDB instance.
Correct.
The mongoexport utility is used to produce a JSON export of data stored in a MongoDB instance. To restore the contents of a cluster, you can use the mongoimport utility.
=
Which of the following commands will export only the grades collection from the sample_training database in a dump directory? (Select all that apply.)
Option A.
mongoexport --collection=grades --db=sample_training --out=grades.json
Option B.
mongoexport --ns=sample_training.grades --out=grades.json
Option C.
mongoexport --collection=grades --db=sample_training --out=grades.yaml
Option D.
mongoexport --db=sample_training --out=grades.json
a.
Option A
Correct.
This command will successfully export the grades collection from the sample_training database in a file called grades.json.
b.
Option B
Incorrect.
The options to specify the database and collection in the mongoexport command are --collection and --db.
c.
Option C
Incorrect.
You cannot export a YAML file by using mongoexport.
d.
Option D
Incorrect.
This command will export the entire sample_training database. To limit the export to the grades collection, the command must include --collection grades.
=
Which of the following best describes the MongoDB Database Tool mongoimport? (Select all that apply.)
a.
mongoimport is a command-line tool that is used to create a new database with a JSON or CSV file of data from another database.
Correct.
The mongoimport utility is used to add data to a new database from a CSV or JSON file.
b.
mongoimport is a command-line tool that is used to restore the contents of a database with a JSON or CSV file of data from a database.
Correct.
The mongoimport utility is used to restore an existing database with data from a CSV or JSON file.
c.
mongoimport is a command-line tool that is used to directly connect two databases together and have them share data.
Incorrect.
The mongoimport utility is used to add data to a database, but it does not connect databases.
d.
mongoimport is a command-line tool that produces a JSON or CSV export of data that’s stored in a MongoDB instance.
Incorrect.
The mongoimport utility is used to restore the contents of a database from a CSV or JSON file. To create that CSV or JSON file, you can use the mongoexport utility.
=
Which of the following commands will import data to a collection called grades in the students database from a file named grades.json, and replace documents in the database that match the documents in the import file? (Select one.)
Option A.
mongoimport --collection=grades --db=students --file=grades.json
Option B.
mongoimport --collection=grades --db=students --mode=delete --file=grades.json
Option C.
mongoimport --collection=grades --db=students --mode=upsert --file=grades.json
Option D.
mongoimport --collection=grades --db=students --mode=merge --file=grades.json
a.
Option A
Incorrect.
To replace documents in the database that match the documents in the import file, you must include --mode=upsert.
b.
Option B
Incorrect.
--mode=delete deletes existing documents in the database that match a document in the import file. To replace documents in the database that match the documents in the import file, you must use --mode=upsert.
c.
Option C
Correct.
With --mode=upsert, mongoimport replaces existing documents in the database that match a document in the import file with the document from the import file.
d.
Option D
Incorrect.
--mode=merge merges fields from a new record with an existing document in the database. To replace documents in the database that match the documents in the import file, you must use --mode=upsert.
=
Which of the following best describes the MongoDB Database Tool mongostat? (Select one.)
a.
mongostat is a diagnostic tool that provides a day-old view of a currently running MongoDB instance.
Incorrect.
The mongostat tool is useful because it provides the current status of a MongoDB instance in real time, not day-old information.
b.
mongostat is a diagnostic tool that provides a real-time view of a currently running MongoDB instance.
Correct.
The mongostat tool provides a real-time overview of a currently running MongoDB instance.
c.
mongostat is a diagnostic tool that provides a list of all MongoDB instances that are running on your local machine.
Incorrect.
The mongostat tool is used to get statistics for a particular MongoDB instance that could be running on any server.
d.
mongostat is a diagnostic tool that provides a history of all actions performed in a cluster.
Incorrect.
The mongostat tool doesn't show a history of a running instance, but it does show the current status.
=
Which of the following commands will show the status of the insert rate, query rate, and command rate of the MongoDB instance running at mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net with a polling time of 2 seconds? (Select one.)
Option A.
mongostat -o='host,opcounters.insert.rate()=Insert Rate,opcounters.query.rate()=Query Rate,opcounters.command.rate()=Command Rate' "mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net" 2
Option B.
mongostat -o='host,opcounters.insert.rate()=Insert Rate,opcounters.query.rate()=Query Rate,opcounters.command.rate()=Command Rate' "mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net" 2000
Option C.
mongostatus -stats='host,opcounters.insert.rate()=Insert Rate,opcounters.query.rate()=Query Rate' "mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net" 2
Option D.
mongostat -stats='host,opcounters.insert.rate()=Insert Rate,opcounters.query.rate()=Query Rate,opcounters.command.rate()=Command Rate' "mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net" 2
a.
Option A
Correct.
This command will show the insert rate, query rate, and command rate of the cluster at mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net
b.
Option B
Incorrect.
The polling time should be given in seconds.
c.
Option C
Incorrect.
You must use the mongostat command with the -o option to specify what statistics to show in the output.
d.
Option D
Incorrect.
You must use the -o option to specify what statistics to show in the output.
=
Which of the following best describes the MongoDB Database Tool mongotop? (Select one.)
a.
mongotop provides a method to track the amount of time a MongoDB instance spends writing data, but it does not provide information about time spent reading data.
Incorrect.
The mongotop utility is used to track the amount of time a MongoDB instance spends writing and reading data.
b.
mongotop is a utility that tracks the database users who spend the most time modifying the data.
Incorrect.
The mongotop utility is not used to track database user activity, but it can be used to track the time spent on data operations.
c.
mongotop provides a method to track the amount of time a MongoDB instance spends reading and writing data.
Correct.
The mongotop utility tracks the amount of time a MongoDB instance spends reading and writing data. It provides statistics per collection.
d.
mongotop is a utility to track the amount of space left in a MongoDB instance running on Atlas.
Incorrect.
The mongotop utility is used to track activity, not space. If you need to know the size of your database, you can use the dbStats() method.
=
Which of the following commands will show the read and write activity of ar MongoDB instance at mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net every 30 seconds? (Select one.)
Option A.
mongotop 30000 --uri='mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net'
Option B.
mongotop 30 --uri='mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net'
Option C.
mongotop -–int=30
Option D.
mongotop 30 --database='mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net'
a.
Option A
Incorrect.
The mongotop command expects the interval for updates to be specified in seconds.
b.
Option B
Correct.
This command will show the read and write activity on the cluster running at mongodb+srv://username@businesscluster.iy0a1o4.mongodb.net.
c.
Option C
Incorrect.
This command is missing the URI for the database, and the update interval is not specified correctly.
d.
Option D
Incorrect.
Use the --uri option to specify the URI of the cluster, not --database.
=
Which of the following best describes the MongoDB Database Tool bsondump? (Select one.)
a.
bsondump converts the JSON from the mongodump command into a binary format for storage efficiency.
Incorrect.
The mongodump utility outputs the data as BSON, which is not a human-readable format. The bsondump utility helps make those mongodump files more human-readable.
b.
bsondump outputs the entire database in binary format in the MongoDB Shell.
Incorrect.
The bsondump utility is useful because it enables the user to view the data in a human-readable format, rather than in binary format.
c.
bsondump encrypts BSON files for storage on less secure servers.
Incorrect.
The bsondump utility does not encrypt files, and in fact is meant to make files human-readable.
d.
bsondump converts BSON files into human-readable formats, including JSON.
Correct.
The bsondump utility is used for converting BSON documents into a human-readable format, such as JSON.
=
Which of the following commands will output a prettified JSON file from the grades.bson file? (Select one.)
Option A. bsondump --outFile=grades.json -–pretty grades.bson
Option B. bsondump grades.bson->grades.json -–pretty
Option C. bsondump --inputFile=grades.bson --outputFile=grades.json -–pretty
Option D. bsondump --outFile=grades.json grades.bson
a.
Option A
Correct.
This command will create a prettified JSON file from the grades.bson file.
b.
Option B
Incorrect.
You must specify grades.bson as the file you want to convert, and then use the --outFile option to specify the path of a file where bsondump should write its output.
c.
Option C
Incorrect.
--inputFile is not a valid option for the bsondump command. No option is necessary when specifying a BSON file with the bsondump command.
d.
Option D
Incorrect.
Remember that the JSON output should be prettified by using the -–pretty option.
=
Which of the following best describes the MongoDB Database Tool mongofiles? (Select one.)
a.
mongofiles enables you to store BSON documents in a human-readable format instead of binary.
Incorrect.
The mongofiles utility doesn't change the format of your data, but it does enable you to manipulate your files.
b.
mongofiles enables you to manipulate files stored in your MongoDB instance in GridFS objects from the command line.
Correct.
mongofiles is a utility that enables you to manipulate files stored in your MongoDB instance in GridFS objects from the command line.
c.
mongofiles enables you to manipulate files stored in your MongoDB instance in the Atlas UI.
Incorrect.
The mongofiles utility enables you to manipulate files stored in your MongoDB instance, but not in the Atlas UI.
d.
mongofiles enables you to run diagnostics on files stored in your MongoDB instance to find any documents that do not match the schema.
Incorrect.
The mongofiles utility is not used for running diagnostics, but it can be used to manipulate files.
=
Which of the following commands will list all of the files in the GridFS collection in the grades database that start with the word "final"? (Select one.)
Option A. mongofiles -d=grades list final
Option B. mongofiles -d=grades list --files="final"
Option C. mongofiles -d=grades search final
Option D. mongofiles -d=grades put final
Incorrect - 0 out of 1 correct answer chosen
a.
Option A
Correct.
This command will output a list of files in the grades database's GridFS collection that start with the word "final".
b.
Option B
Incorrect.
The command to specify the word the files start with does not require a flag.
c.
Option C
Incorrect.
The search option will list the files in the GridFS store with names that contain the string “final”. To list the files that begin with the string “final”, you must use the list command.
d.
Option D
Incorrect.
The mongofiles command can be used with the put command to add files, but in this case, you want to list the files with the list command.
=
【13.MongoDB Database Metrics & Monitoring】
Which of the following is the ideal value for objects scanned when reviewing the Query Targeting metrics? (Select one.)
a.
1
Correct.
The ideal ratio of scanned objects to documents returned is about 1:1.
b.
100
Incorrect.
This value indicates that 100 objects were scanned and 1 was returned. Ideally, we want a ratio of about 1:1.
c.
1000
Incorrect.
This value indicates that 1000 objects were scanned and 1 was returned. Ideally, we want a ratio of about 1:1.
d.
10000
Incorrect.
This value indicates that 10000 objects were scanned and 1 was returned. Ideally, we want a ratio of about 1:1.
=
You need to check if the storage subsystem has become a bottleneck. Which of the following storage metrics will help you determine if operations are waiting to be serviced? (Select one.)
a.
Swap Usage
Incorrect.
Swap Usage is a metric that is used to determine how much memory is being placed on the swap device. If we want to determine if operations are waiting to be serviced, we should look at Disk Queue Depth.
b.
Disk Queue Depth
Correct.
Disk Queue Depth tells us the average length of the queue of requests issued to the disk partition used by MongoDB. This metric will indicate whether or not operations are waiting to be serviced.
c.
System CPU
Incorrect.
System CPU displays the CPU usage of all processes on the node. If we want to determine if operations are waiting to be serviced, we should look at Disk Queue Depth.
d.
Disk Space Percent Free
Incorrect.
Disk Space Percent Free tells us the percentage of free disk space on the partition used by MongoDB. If we want to determine if operations are waiting to be serviced, we should look at Disk Queue Depth.
=
Which of the following metrics allows you to view the rate at which different types of operations are being performed within your deployment? (Select one.)
a.
Tickets Available
Incorrect.
Tickets Available indicates the number of concurrent read and write operations available to the MongoDB storage engine. In this case, we would check Opcounters to view the rate at which different operations are being performed.
b.
Network Traffic
Incorrect.
Network Traffic metrics provide information about your network performance and include bytesIn, bytesOut, and NumRequests. In this case, we would check Opcounters to view the rate at which different operations are being performed.
c.
Connections
Incorrect.
Connections represent the total number of open network connections to the database deployment by application, shell clients, as well as internal MongoDB connections. In this case, we would check Opcounters to view the rate at which different operations are being performed.
d.
Opcounters
Correct.
Opcounters measures the rate at which operations are performed which can help correlate changes in operations with your MongoDB deployment’s performance.
=
Which of the following metrics should you watch if you wish to monitor network traffic for your deployment? (Select all that apply.)
a.
bytesIn
Correct.
bytesIn displays the average rate of physical bytes (after any wire compression) sent to the database server per second over the selected sample period.
b.
bytesOut
Correct.
bytesOut displays the average rate of physical bytes (after any wire compression) sent from the database server per second over the selected sample period.
c.
numRequests
Correct.
numRequests displays the average rate of requests sent to the database server per second over the selected sample period.
d.
Tickets Available
Incorrect.
Tickets Available is a metric that indicates the number of concurrent read and write operations available to the WiredTiger storage engine and will not help with monitoring network traffic.
=
MongoDB Atlas supports more than 40 metrics for M10+ clusters only.
a.
True
Correct.
Free and Shared clusters have access to metrics related to connections, network, logical size, and Opcounters, while M10 and above clusters have access to more than 40 metrics.
b.
False
Incorrect.
Free and Shared clusters have access to metrics related to connections, network, logical size, and Opcounters, while M10 and above clusters have access to more than 40 metrics.
=
You are creating new alerts for an M5 (shared-tier) cluster and you successfully configure an alert for a Query Targeting metric. However, you notice that the alert isn’t being triggered, even though several queries are exceeding the threshold you set. Which of the following explains why the new alert isn’t being triggered? (Select one.)
a.
The Query Targeting alert condition cannot be configured to be different from the default threshold.
Incorrect.
Alert conditions for any metric can be configured to be different from the default settings across all cluster tiers, however, shared-tier clusters will only trigger alerts related to the metrics supported by those clusters, including Network, Connections, Logical Size, and Opcounters.
b.
The Query Target alert condition will not trigger an alert for an M5 cluster.
Correct.
Alerts can be configured for any metric across all cluster tiers, however, shared-tier clusters will only trigger alerts related to the metrics supported by those clusters, including Network, Connections, Logical Size, and Opcounters.
c.
Alerts cannot be configured for Query Targeting metrics.
Incorrect.
Alerts can be configured for any metric across all cluster tiers, however, shared-tier clusters will only trigger alerts related to the metrics supported by those clusters, including Network, Connections, Logical Size, and Opcounters.
=
You have been granted the clusterAdmin role, will you be able to configure new alert conditions for a specific host? (Select one.)
a.
Yes, the clusterAdmin role provides the greatest cluster admin access and will allow you to configure new alerts for a specific host.
Incorrect.
While it is true that the clusterAdmin role provides the greatest cluster admin access, you will not be able to configure new alerts without the Project Owner role.
b.
No, the Project Owner role is required to configure any new alerts for a specific host.
Correct.
You must have the Project Owner role in order to successfully configure new alerts for a specific host.
=
You receive a notification from Atlas that an alert has been triggered for your project and you wish to acknowledge the alert with the Atlas CLI. What information is required to successfully acknowledge the alert with the atlas alerts acknowledge command? (Select one.)
a.
metricName
Incorrect.
You cannot provide metricName as an option when acknowledging an alert. The atlas alerts acknowledge command requires id to successfully acknowledge an alert.
b.
comment
Incorrect.
comment is optional when acknowledging an alert. The atlas alerts acknowledge command requires id to successfully acknowledge an alert.
c.
hostnameAndPort
Incorrect.
You cannot provide hostnameAndPort as an option when acknowledging an alert. The atlas alerts acknowledge command requires id to successfully acknowledge an alert.
d.
id
Correct.
The atlas alerts acknowledge command requires id to successfully acknowledge an alert.
=
Under which of the following circumstances will an Atlas alert’s status change to CLOSED? (Select one.)
a.
When the alert is acknowledged
Incorrect.
Acknowledging an alert will not change the status to closed. An alert’s status will only change to CLOSED once the condition that triggered the alert is resolved.
b.
When an alert is disabled
Incorrect.
Disabling an alert will not mark it as CLOSED. An alert’s status will only change to CLOSED once the condition that triggered the alert is resolved.
c.
When the alert condition is resolved
Correct.
An alert’s status will only change to CLOSED once the condition that triggered the alert is resolved.
d.
When a Project Owner manually changes the alert status
Incorrect.
A Project Owner cannot manually close an alert. An alert’s status will only change to CLOSED once the condition that triggered the alert is resolved.
=
MongoDB Atlas supports hybrid monitoring solutions via 3rd party integrations.
a.
True
Correct.
With Atlas integrations you can create hybrid monitoring solutions to meet the unique needs of your deployment.
b.
False
Incorrect.
MongoDB Atlas does support hybrid monitoring solutions via 3rd party integrations, you can create hybrid monitoring solutions to meet the unique needs of your deployment.
=
MongoDB Atlas provides 3rd party integration services with the following data. (Select all that apply.)
a.
Index suggestions
Incorrect.
You can monitor slow queries with third-party services, but those services won’t provide suggestions for indexes. However, MongoDB’s Performance Advisor suggests new indexes to improve query performance based on slow queries.
b.
Alerts
Correct.
You can integrate Atlas with third-party monitoring services to receive Atlas alerts in external monitoring services, and to view and analyze performance metrics that Atlas collects about your cluster.
c.
Query results
Incorrect.
You cannot query a MongoDB database with a 3rd-party monitoring service.
d.
Performance metrics that Atlas collects about your cluster
Correct.
You can integrate Atlas with third-party monitoring services to receive Atlas alerts, and to view and analyze performance metrics that Atlas collects about your cluster.
=
Prometheus gathers metrics from MongoDB Atlas via 3rd party integration but can also be used to collect metrics from a self-managed deployment using the following: (Select one.)
a.
Data Dog
Incorrect.
Data Dog is a 3rd Party service that can be used separately from Prometheus to monitor a MongoDB deployment.
b.
Custom Webhooks
Incorrect.
Prometheus doesn’t use custom webhooks to monitor a self-managed MongoDB deployment.
c.
Grafana
Incorrect.
Grafana is an open source dashboard application that can display metrics from Prometheus.
d.
Percona MongoDB Exporter
Correct.
We can configure the Percona MongoDB Exporter as a Prometheus target.
=
Which of the following best describes how we can use the third-party tool, Grafana, to monitor a self-managed MongoDB deployment? (Select one.)
a.
We can use it to collect metrics directly from a self-managed MongoDB deployment at given intervals.
Incorrect.
We use a service like Prometheus to collect metrics from configured targets, like MongoDB Exporter, at given intervals and trigger alerts when it observes specific conditions. We can use Grafana to ingest database metrics from a data source, like Prometheus, and display it on customizable charts for easy analysis.
b.
We can configure Grafana as a Prometheus target.
Incorrect.
We can configure MongoDB Exporter as a Prometheus target so that Prometheus can make database metrics available to Grafana to display on a dashboard.
c.
We can use Grafana to ingest database metrics from a data source, like Prometheus, and display it on customizable charts for easy analysis.
Correct.
Grafana is an open-source web application that we can use to create interactive visualizations and analyze metrics from a self-managed MongoDB deployment.
=
MongoDB Atlas gathers active operation metrics from the database instance using which of the following commands? (Select one.)
a.
currentOp
Correct.
The currentOp command will successfully return a document with all in-progress operations.
b.
activeOp
Incorrect.
activeOp is not a valid command. currentOp will successfully return a document with all in-progress operations.
c.
serverStatus
Incorrect.
serverStatus will return a document that provides an overview of a database’s state, but that does not include active operations. currentOp will successfully return a document with all in-progress operations.
d.
collStats
Incorrect.
This command will return a document that contains storage statistics for a given collection. currentOp will successfully return a document with all in-progress operations.
=
You wish to view the total number of active connections to your deployment while in the MongoDB Shell. Which of the following commands should you use? (Select one.)
a.
killOp
Incorrect.
killOp is an administrative command that allows us to kill active operations, it does not provide connection metrics.
b.
currentOp
Incorrect.
currentOp is an administrative command that returns a document containing information on in-progress operations for the mongod instance, not connection metrics.
c.
serverStatus
Correct.
serverStatus is a diagnostic database command that returns a document that provides an overview of the database’s state, including connection metrics.
=
【14.Self-Managed Backup & Recovery】
A business has determined it can tolerate the database being down for no more than one hour. What is this value called? (Select one.)
a.
Recovery Time Objective
Correct.
This is an example of a Recovery Time Objective, which is the maximum amount of time that a business can tolerate after an outage before the disruption makes normal business operations intolerable.
b.
Recovery Point Objective
Incorrect.
This is not an example of a Recovery Point Objective, which is the maximum acceptable amount of data loss that a business is willing to tolerate in the event of a disruption, expressed as an amount of time.
c.
Backup Time Objective
Incorrect.
This is not an example of a Backup Time Objective, which is not part of a backup plan.
d.
Backup Point Objective
Incorrect.
This is not an example of a Backup Point Objective, which is not part of a backup plan.
=
A business has determined that it can tolerate losing four hours of data. What is this value called? (Select one.)
a.
Recovery Time Objective
Incorrect.
This is not an example of a Recovery Time Objective, which is the maximum amount of time that a business can tolerate after an outage before the disruption makes normal business operations intolerable.
b.
Recovery Point Objective
Correct.
This is an example of a Recovery Point Objective, which is the maximum acceptable amount of data loss that a business is willing to tolerate in the event of a disruption, expressed as an amount of time.
c.
Backup Time Objective
Incorrect.
This is not an example of a Backup Time Objective, which is not part of a backup plan
d.
Backup Point Objective
Incorrect.
This is not an example of a Backup Point Objective, which is not part of a backup plan.
=
Which of the following are key elements of a backup plan? (Select all that apply.)
a.
How to back up the data
Correct.
To formulate an effective backup plan, you need to determine which backup solution to use.
b.
How many database connections occur
Incorrect.
The number of database connections is not a key element of a backup plan.
c.
How often the data needs to be backed up
Correct.
To formulate an effective backup plan, you need to know how often to back up your data.
d.
How long to retain the backup data
Correct.
To formulate an effective backup plan, you need to know how long to retain your backup data. Depending on the data, there could be regulatory obligations that dictate how long to keep the data.
=
Before you create a snapshot, you need to lock your MongoDB deployment. (True or false.)
a.
True
Correct.
You need to lock your MongoDB deployment by using the db.fsyncLock() command. This prevents additional write operations while creating the snapshot. After creating the snapshot, remember to unlock your deployment by using the db.fsyncUnlock() command.
b.
False
Incorrect.
You need to lock your MongoDB deployment by using the db.fsyncLock() command. This prevents additional write operations while creating the snapshot. If you don’t lock the deployment, you risk having an incomplete snapshot. After creating the snapshot, remember to unlock your deployment by using the db.fsyncUnlock() command.
=
You want to create a complete copy of your data at a specific point in time. How can you accomplish this? (Select one.)
a.
Create a dump file of the data only
Incorrect.
You can back up your data in a dump file by using mongodump, but you would also need the oplog to create a point-in-time backup.
b.
Export your data to a CSV file
Incorrect.
Exporting your data to a CSV does not create an efficient point-in-time backup.
c.
Create a snapshot of your data
Correct.
You should create a snapshot to have a complete copy of your data at a specific point in time.
=
Which Linux command can be used to restore an archived volume snapshot? (Select one.)
a.
dd
Correct.
You can use the dd command to restore a volume snapshot. dd is a command-line utility in Linux that allows you to convert and copy data.
b.
cat
Incorrect.
You cannot use the cat command to restore a volume snapshot. The cat command in Linux prints the contents of a file to the terminal.
c.
scp
Incorrect.
You cannot use the scp command to restore a volume snapshot. The scp command in Linux allows you to securely transfer files to a remote host.
d.
man
Incorrect.
You cannot use the man command to restore a volume snapshot. The man command is used to display the user manual for commands you can run in Linux.
=
Volume snapshots should be stored separately from the MongoDB deployment. (True or false.)
a.
True
Correct.
It’s a good idea to store your backups on a separate server from the MongoDB deployment. This allows you to easily access your backups in case your MongoDB deployment server becomes unavailable. It also allows you to save server resources for your deployment server.
b.
False
Incorrect.
It’s a good idea to store your backups on a separate server from the MongoDB deployment. This allows you to easily access your backups in case your MongoDB deployment server becomes unavailable. It also allows you to save server resources for your deployment server.
=
The snapshot volume does not need to be mounted to create a filesystem archive from it. (True or false.)
a.
True
Incorrect.
To create a filesystem archive, the snapshot volume must be mounted.
b.
False
Correct.
To create a filesystem archive, the snapshot volume must be mounted.
=
Which command is used to create a new archive of all the files in a directory? (Select one.)
a.
tar
Correct.
The tar command is used to create a new archive of all the files in a directory.
b.
cp
Incorrect.
The cp command is not used to create a new archive of all the files in a directory. The cp command is used to copy files or directories from one location to another.
c.
ls
Incorrect.
The ls command is not used to create a new archive of all the files in a directory. The ls command is used to list the contents of a directory.
d.
lsblk
Incorrect.
The lsblk command is not used to create a new archive of all the files in a directory. The lsblk command is used to list all block storage devices.
=
You want to create a backup of a replica set with access control enabled. What command should you use? (Select one.)
Option A.
mongodump --gzip --archive=backup/mongodump-april "mongodb://backup-admin:backup-pass@mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?authSource=admin&replicaSet=replset"
Option B.
mongodump --gzip --archive=backup/mongodump-april "mongodb://mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?replicaSet=replset"
Option C.
mongorestore --gzip --archive=backup/mongodump-april "mongodb://backup-admin:backup-pass@mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?replicaSet=replset"
a.
Option A
Correct.
This option provides a username, password, and authSource in the connection string, which enables access control.
b.
Option B
Incorrect.
This option does not provide a username, password, and authSource in the connection string, which are all required to create a backup of a replica set with access control enabled.
c.
Option C
Incorrect.
This option uses mongorestore, which restores a database from a backup.
=
You want to create backups in an archive file that include the date of the backup. What command should you use? (Select one.)
Option A.
mongodump --out=backup/mongodump-april "mongodb://backup-admin:backup-pass@mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?authSource=admin&replicaSet=replset"
Option B.
mongodump --gzip --db=owners --collection=pets --file=backup/mongodump-april "mongodb://backup-admin:backup-pass@mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?authSource=admin&replicaSet=replset"
Option C.
mongodump --gzip --db=owners --collection=pets --archive=backup/mongodump-april "mongodb://backup-admin:backup-pass@mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?authSource=admin&replicaSet=replset"
a.
Option A
Incorrect.
The --out option will dump the data into directories that correspond to the database and collection name that are being dumped.
b.
Option B
Incorrect.
The --file option will not create backups in an archive file that include the date of the backup.
c.
Option C
Correct.
The --archive option will create backups in an archive file that include the date of the backup. The --gzip and --archive options compress the data so that it can be efficiently stored.
=
If you want to create a backup of a specific collection in the sales database, what command should you use? (Select one.)
Option A.
mongodump --gzip --db=owners --collection=pets --archive=backup/mongodump-april "mongodb://backup-admin:backup-pass@mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?authSource=admin&replicaSet=replset"
Option B.
mongodump --gzip --db=sales --collection=items --archive=backup/mongodump-april "mongodb://backup-admin:backup-pass@mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?authSource=admin&replicaSet=replset"
Option C.
mongodump --gzip --archive=backup/mongodump-april "mongodb://backup-admin:backup-pass@mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?authSource=admin&replicaSet=replset"
a.
Option A
Incorrect.
This command backs up a database named owners and collection named pets.
b.
Option B
Correct.
This command backs up a database named sales and a collection named items in the sales database.
c.
Option C
Incorrect.
This command backs up all databases and collections stored in the replica set.
=
You want to restore a MongoDB replica set on three separate hosts by using mongorestore. What command should you use? (Select one.)
Option A.
mongorestore --drop --gzip --oplogReplay --archive=backup/mongodump-april-2023
Option B.
mongodump --drop --gzip --oplogReplay --archive=backup/mongodump-april-2023 "mongodb://restore-admin:restore-pass@localhost:27017/?authSource=admin"
Option C.
mongorestore --drop --gzip --archive=backup/mongodump-april-2023 "mongodb://restore-admin:restore-pass@mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?authSource=admin&replicaSet=replset"
a.
Option A
Incorrect.
This command does not specify the seedlist of hosts and the replica set in the URI, which are needed to restore a MongoDB replica set by using mongorestore.
b.
Option B
Incorrect.
This command uses mongodump, which creates a backup to be restored. In addition, the command does not use an URI with three separate hosts.
c.
Option C
Correct.
This command specifies the seedlist of hosts and the replica set in the URI, which are needed to restore a MongoDB replica set by using mongorestore.
=
What will the following operation do? (Select one.)
mongorestore --drop --gzip --archive=backup/mongodump-april-2023 "mongodb://restore-admin:restore-pass@mongod0.replset.com:27017,mongod1.replset.com:27017,mongod2.replset.com:27017/?authSource=admin&replicaSet=replset"
a.
Restore all databases and collections in the backup
Correct.
This operation will restore all databases and collections, as it does not use the --db and --collection options.
b.
Restore only a database named “pets”
Incorrect.
This operation does not use the --db option, which is required to restore a specific database named pets.
c.
Back up all databases and collections
Incorrect.
The operation would need to use mongodump to back up all databases and collections.
d.
Restore all databases and collections in the backup to a standalone instance
Incorrect.
This operation will restore a replica set because a seedlist of hosts and the replica set name are specified in the connection string.
`;
