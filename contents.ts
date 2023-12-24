// Design Fundamentals
// we have to explain why we designed in such as way
// Basic fundamentals - client-server model, Network Protocols, Storage, etc



// -- 3
// what happens when u open a website ?
// client-server model
// client - talks to servers
// server - talks to clients
// client - request server
// server -  response for the incoming network calls

// First calls DNS -> ask for IP address(given by cloud provider)


// -4
// Network Protocols
// Ip - internet protocol Address
// TCP - ordered, reliable data delivery b/w machines over public internet
// HTTP - implemented on top of TCP
// HTTP - req: host, port, method - GET, PUT .., headers : pair, body
// HTTP - res: status code, headers, body


// -5
// Storage
// Database - Write, Read
// Disk, persistence, Memory


// -6
// Latency and Throughput
// Two Imp measures of the performance of the system
// Latency - how long for data to get from one point to another point in system
// Latency - time from client -  server, server client
// Rule of thumb  - 1MB
    // RAM - 0.25 MS
    // SSD - 1 MS
    // Transfer 1MB 1Gbps - 10 ms
    // Reading 1MB from HDD - 20 ms
    // Round trip - 150 MS

// Throughput - number of operations that a system can handle properly per tume unit
// Requests per second  - RPS


// 7
// Availability
// AKA Fault tolerance
// guarantee of availability

// measure of availability
// Measure of system out time per year
//- 99% (two 9s): 87.7 hours - 2 nines
// - 99.9% (three 9s): 8.8 hours - 3 nines
// - 99.99%: 52.6 minutes -  4 nines
// - 99.999%: 5.3 minutes -  5 nines

// Redundancy -  replicating parts of system to make it more reliable



// 8
// caching
// reduce latency ,  improve system
// write through cache - write at cache -> then database -> then to client
// write back cache - write only in cache -> then to client -> behind the scenes -> async update the database

// cache stale - when cache is not updated


// cache eviction policy
// to remove the cache
// LRU- Least recently used
// FIFO - First in First OUT
// LFU - Least frequently used.

// CDN - Content Delivery Network - third-party service - cache for servers
// cloud fare, Google Cloud


// 9
// Proxies
// Very Important
// Forward Proxy - sits b/w client(s) and server(s)
// AKA FWD proxy - server acts on behalf of client(s)
// server responds back to fwd proxy back to the client
// fwd proxy can hide the IP address of the client
// source IP address can get removed and replaced by FWD proxy
// FWD proxy is like VPN


// Reverse Proxy
// tricky
// act on behalf of sever b/w client and server
// client send request to reverse proxy -> server -> reverse proxy -> client
// client won't know the reverse proxy
// really useful
// useful.in complex systems
// eg: filter out requests to ignore
// logging, caching
// best use case :  load balancer
// load balancer: distribute load b/w servers
// security verification

// Nginx
// "engine X"
// Webserver - used as reverse proxy and load balancer


// 10
// Load Balancers
// Very Important
// Single server has limited resources  / limited throughput
// Server is overloaded
// so server is scaled - vertically scaled - increasing power of server  Limited
// Horizontally  scaled - add more servers to the system - Good solution

// Load balancer - b/w client and server, balancing client requests to servers in balanced way.
// client -> load balancer -> balance -> server
// s/w load balancer - best
// H/w Load balancer - limited

// Load balancer knows about servers ?
// Load balancer is configured to know when server is added/ removed

//server selection?
// Random - most basic - one could over loaded
// round-robin - all server in one order- top-bottom

// weighted round robin -  weight on the server
// more traffic based on weight - one server is more powerful for example
// Performance based selection - metrics such as response time, amount of traffic
// ip-based selection - hash client Ip address and redirect to the server - best of caching
// specific client request can always be redirected to the particular server
// path-based selection - according to the path based - for ex: payments path -> to one server

// what if load balancer is overloaded ?
    // we can have multiple load balancers
    // load balancer communicate with each other

// Hot spot
// workload might spread unevenly.
// when sharding key and hashing function is not optimal


// Hashing
// Ip address, username, http request -> hashed into integer
// basic algo = modulo operator - not optimal when server is added / removed

// consistent hashing



