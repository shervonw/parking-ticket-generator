// const
//     https = require("https"),
//     packageId = "74382239-6e6b-4683-b2e7-b0ce86263b2b";

// // promise to retrieve the package
// const getPackage = new Promise((resolve, reject) => {
//     https.get(`https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=${packageId}`, (response) => {
//         let dataChunks = [];
//         response
//             .on("data", (chunk) => {
//                 dataChunks.push(chunk)
//             })
//             .on("end", () => {
//                 let data = Buffer.concat(dataChunks)
//                 resolve(JSON.parse(data.toString())["result"])
//             })
//             .on("error", (error) => {
//                 reject(error)
//             })
//     });
// });

// // since this package has resources in the datastore, one can get the data rather than just the metadata of the resources
// // promise to retrieve data of a datastore resource 
// const getDatastoreResource = resource => new Promise((resolve, reject) => {
//     https.get(`https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?id=${resource["id"]}`, (response) => {
//         let dataChunks = [];
//         response
//             .on("data", (chunk) => {
//                 dataChunks.push(chunk)
//             })
//             .on("end", () => {
//                 let data = Buffer.concat(dataChunks)
//                 resolve(JSON.parse(data.toString())["result"]["records"])
//             })
//             .on("error", (error) => {
//                 reject(error)
//             })
//     })
// });

// // get the package information again
// getPackage.then(dataPackage => {
//     // get the datastore resources for the package
//     let datastoreResources = dataPackage["resources"].filter(r => r.datastore_active);

//     // retrieve the first datastore resource as an example
//     getDatastoreResource(datastoreResources[0])
//         .then(resource => {
//             // this is the actual data of the resource
            

//             console.log(resource.map(r => ({
//               id: r._id,
//               OBJECTID: r.OBJECTID,
//               AREA_SHORT_CODE: r.AREA_SHORT_CODE,
//               AREA_LONG_CODE: r.AREA_LONG_CODE,
//               AREA_NAME: r.AREA_NAME,
//               AREA_DESC: r.AREA_DESC,
//             })))
//         })
//         .catch(error => {
//             console.error(error);
//         })
// }).catch(error => {
//     console.error(error);
// })