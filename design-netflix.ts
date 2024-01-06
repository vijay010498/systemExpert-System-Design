// core netflix product

// user activity need to done for recommendation service


// two sub systems
    // core user flow (videos - storing, streaming)
    // recommendation engine - happens in the background

// video streaming - latency is important
// high availability

// global scale and highly available

// 200 million users - across the globe
// focus on only distributed system


//1. core video flow
// data
// video content
// user metadata - user watched, rating, etc.
// static content - thumbnails, description, ...
// logs - any type of event

// storage
// video - 10000 movies
// different resolutions - SD and HD
// average 1-hour video length
// in SD = 10GB/h
// in HD = 20GB/h

// 10000 * 30GB = 3,00,000 GB = 300TB

// 300TB is super low when compared with youtube

// storage = S3 -- blob storage

// static content = relevant to video - bounded within 300TB - postgres/KV pair

// user metadata = 200M users metadata is stored per video
// how many videos user watch in lifetime ?
// single videos = 2 videos  a week
// 50 * 2 = 100 videos
// 100 * 10 = 1000 videos

// 100 bytes per video/ per user
// 100bytes * 100  = 100Kb * 200M = 20TB

// user metadata = relational DB / shard 5 - 10 shards => shards based on userID


// 10M users at peak
// HD 5MBps per second / per user
// 50TBps per second for 10M users

// CDN for delivery
// CDN as pods
