// Design A Code-Deployment System
// Design a global and fast code-deployment system.

// all test done - just ship to all the machines entire world

// Building code
// Deploying code
// 5 - 10  regions
// 100k machines

// it is an internal system
// availability - even its internal system we want availability
// how long - build pipeline eiter failed / succeeded
// ship within 30 minutes

// 2 - 3 nines are fine
//- 99% (two 9s): 87.7 hours - 2 nines
// - 99.9% (three 9s): 8.8 hours - 3 nines
// - 99.99%: 52.6 minutes -  4 nines
// - 99.999%: 5.3 minutes -  5 nines

// 30 minutes for the entire deployment

// how often we going to deploy this code ? - 1000 of times a day
// final build can be upto 10Gbs
// 1000s of deploy / also building
// 10GB per binary

// part - 1 building code
// sha commits used for the code reference


// queueing mechanism
// commits come in as engineers are pushing code
// jobs of building out of commit - build the binary
// queue the job one after another
// FIFO - workers will take job and build into binary

// once we got a binary
// store into storage - blob storage like Google cloud storage

// queue makes perfect sense
// how do you plan queue implementing ?


// queue -> servers to take jobs from servers -> store binary into GCS

// SQL database as queue - past jobs to be always there

// a SQL table can actually be our queue

// evey record / row is a job


// SQL table looks like ?

// dequeue operation

// queue:
// actually a SQL table
// jobs table
// columns:
// id: job ID/name
// name: for GCS binary name
// created_at timeStamp: when job was created
// SHA: commit sha ID
// status : important enums:['failed', 'success', 'running', 'available']

// what nice about using SQL ?
// created_at and status

// multiple workers how SQL as queue is concurrency safer ?
// 100 workers - looking for jobs , SQL database we have ACID transactions
// ACID is key,

// how workers dequeue ?
//  workers take job from queue in transaction

// BEGIN TRANSACTION;
// SELECT * FROM jobs WHERE
// status = "QUEUED"
// ORDER BY created_at ASC
// LIMIT 1;
// UPDATE  jobs SET status = "RUNNING" where id=our_id;
// COMMIT;

// what is all running / failed
// if no jobs , we will rollback
// we can index table in status and created_at to improve the query


// when workers do dequeue ?
// when they are free
// 100 workers
// every 5 seconds they go to the table

// not addressed bad failure case ?
// power failed, job will be in running state for ever

// some sort of health check ?
// health check of the worker status
// who is performing the health check ?

// fully separate service that check workers to check health

// worker can send heartbeat

// one more column
// last_heartBeat
// worker not sent the heart beat into the table

// 5000 builds  a day
// 15 mins per build
// 100 builds a day per worker
// 5000/100 = 50 workers

// design is super horizontally scalable
// we can scale with vertical


// after build is successful
// we have binary
// store build into GCS

// 5 - 10 regions
// we need multiple GCS to scatter multiple regions

// we have regional subsystems
// main GCS can async replicate into regional GCS

// we like to only allow deploy only when all GCS regions is replicated ?
// separate service
// checks the replication status


// Deploying code
// when engineer press a button to deploy code

// peer-to-peer network

// have one target
// global confguration to keep all config
// ex: zookeeper
// stored current build

// regional has key-value store