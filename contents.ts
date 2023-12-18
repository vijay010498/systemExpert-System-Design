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