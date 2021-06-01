
// ["u1","u1","u1","u2","u2","u2"]
// [1,2,3,4,5,6]
// ["a","b","c","a","b","a"]

// ["joe","joe","joe","james","james","james","james","mary","mary","mary"]
// [1,2,3,4,5,6,7,8,9,10]
// ["home","about","career","home","cart","maps","home","home","about","career"]

// ["u1","u1","u1","u2","u2","u2"]
// [1,2,3,4,5,6]
// ["a","b","a","a","b","c"]


/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    let userAccess = new Map()
    for (var i =0; i < username.length; i++){
         if(!userAccess.get(username[i]))
             userAccess.set(username[i], [website[i]] )
        else{
            let webList=[]
            webList = userAccess.get(username[i] )
            webList.push(website[i])
            userAccess.set(username[i], webList )
        }
    }
    
    let webSiteCount = new Map()
    let count = 1
    userAccess.forEach(logMapElements)
    
    function logMapElements(value, key, map) {
         let cnt = webSiteCount.get(value)||0
         webSiteCount.set(value, cnt + 1 )
    //    if(!webSiteCount.get(value)){
    //           webSiteCount.set(value, count )
    //     }else{
    //         let cnt =  webSiteCount.get(value)
    //         webSiteCount.set(value, cnt + 1 )
    //     }
    }
    const ret =  [...webSiteCount].sort((a,b) => b[1] - a[1] || a[0][0].localeCompare(b[0][0]))
    // console.log(ret)
    return ret[0][0]
   
};