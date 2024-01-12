// design tinder
// profile creation - age, name, pics.... [metadata]
// deck - ranked based on some sort of score(location, already swiped...)
// swiping - left / right (no caps)
// matching
// chatting - no need
// super-liking
// undoing (only left)


// deck generation algo/service out of box
// notify user after match ? - while swiping

// scalability
// region ? - 50 Million users - evenly across the globe
// latency on app load and after 200 profiles - okay
// availability - out of box

// 1. Storage overview
// 2. Profile creation
// 3. Deck
// 4. Swiping
// 5. matching only while swap
// 6. super-liking & undoing

// storage overview
// user profile, decks,  - all seems structured data
// bunch of SQL table
// pictures  - lot of data - Blob store -

// split sql databases into regional databases
// global blob storage - CDN to serve all over the world


// Global blob store - Google cloud storage - for pictures
// Image CDN
// SQL tables - regional databases
// async replication between regions
// profiles -
// decks -
// swipes -
// matches -

// users - request - LB - RR - API servers - interacting with API servers


// profile creation -
// profiles - table - 2Kb per profile
// userId - assigned automatically
// geo - updates when user opens the app
// name
// age
// ...
// pictures [strings - blob addresses]

// 50 Mil * 2Kb = 100Kb * million = 100GB for one region
// 1 to 5TB total for 10 - 50 regions
// pictures - 2MB / pic - 5 pics per user  - lossy compression
// 2MB - 350KB(dim reduc) = 50KB(lossy temp) =
// so 250KB * 50Million = 12.5TB pictures - global blob storage


// 3. Deck - service
// 200 potential matches per deck
// uses profile tables and deck tables
// daily -  if active users
// if new location - API calls deck to regenerate - takes little time
// Decks - table
// userId - per row
// potentialMatches = [userIDs]

// APi not fetch 200 profiles
// 40 top profiles and store them locally
// refetch more only when required
// only 10MB thanks to dim reduction and lossy compression

// user closes the app -  stored profile and not swiped - re-add to the decks - deck algo is smart enough
// half of 20 profiles - re-fetches 40 profiles in bg
// we will almost never have latency


// 4. swiping
// uses swipes and matches table
// swipes
// swiperId
// swipeeId - Index
// swiptType: Enum - Like/Pass
// timestamp_at - Index
// every - 30 seconds since the last timestamp we have in local

// if matches - store into match table
// matches -table
// userOneId - userId
// userTwoId - userId
// timestamp

// undo
// no need to delete

// rather - wait to make API call for matches / wit till next swipe || default MS


// we can make a delete call


