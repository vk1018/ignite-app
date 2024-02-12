const resObj=[{
    "id": "667962",
    "name": "Paris Panini - Gourmet Sandwiches & Wraps",
    "cloudinaryImageId": "33101e2fff3a071cbd8b85e73c0d4f45",
    "locality": "Church Street",
    "areaName": "Central Bangalore",
    "costForTwo": "₹500 for two",
    "cuisines": [
                    "Continental",
                    "Pastas",
                    "Salads",
                    "Snacks",
                    
                ],
    "avgRating": 4.5,                                   
                                            
},
{
    "id": "672074",
    "name": "Subway",
    "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
    "locality": "Ashok Nagar",
    "areaName": "Sobha Mall",
    "costForTwo": "₹350 for two",
    "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
    ],
    "avgRating": 3.9,   
},
{
    "id": "3241",
    "name": "Meghana Foods",
    "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
    "locality": "Residency Road",
    "areaName": "Residency Road",
    "costForTwo": "₹500 for two",
    "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
    ],
    "avgRating": 4.5,  
},
{
    "id": "30531",
    "name": "Hotel Empire",
    "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
    "locality": "Brigade Road",
    "areaName": "Church Street",
    "costForTwo": "₹450 for two",
    "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
    ],
    "avgRating": 4.3,
},
{
    "id": "5938",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Tasker Town",
    "areaName": "Shivaji Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
        "Burgers",
        "American"
    ],
    "avgRating": 4.1,
},
{
    "id": "567206",
    "name": "NOTO - Ice Creams & Desserts",
    "cloudinaryImageId": "544f9e6dce1efb7054e4ac5d98aba049",
    "locality": "Firdous Complex",
    "areaName": "Central Bangalore",
    "costForTwo": "₹250 for two",
    "cuisines": [
        "Desserts",
        "Ice Cream"
    ],
    "avgRating": 4.4,    
},
{
    "id": "210945",
    "name": "Royal Restaurant",
    "cloudinaryImageId": "yicweopn4lzcjlqy4jvq",
    "locality": "Sulthangunta",
    "areaName": "Shivajinagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
        "Chinese",
        "North Indian",
        "Tandoor"
    ],
    "avgRating": 3.9,
},
{
    "id": "3369",
    "name": "Truffles",
    "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
    "locality": "St. Marks Road",
    "areaName": "St. Marks Road",
    "costForTwo": "₹450 for two",
    "cuisines": [
        "American",
        "Desserts",
        "Continental",
        "Italian"
    ],
    "avgRating": 4.5,
},
{
    "id": "279735",
    "name": "Easy Bites",
    "cloudinaryImageId": "d06b7fa84cb8f8193f60d4c2de172347",
    "locality": "Castel Street",
    "areaName": "Ashok Nagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
        "Snacks",
        "Fast Food",
        "Beverages"
    ],
    "avgRating": 4.2,
},
{
    "id": "530296",
    "name": "Chaayos Chai+Snacks=Relax",
    "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
    "locality": "CMH ROAD",
    "areaName": "INDIRANAGAR",
    "costForTwo": "₹250 for two",
    "cuisines": [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        
    ],
    "avgRating": 4.3,
},
]

console.log(resObj);

const resList=[];
for (let i=0;i<resObj.length;i++){
const modifiedObject={};
for(const key in resObj[i]){
    if(resObj[i].hasOwnProperty(key)){
        const newKey = key.replace(/"/g,'');
        modifiedObject[newKey]=resObj[i][key];

    }

}
resList.push(modifiedObject)

}


export default resList;