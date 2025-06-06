var languages = ["hindi","english","tamil","gujarati","sanskrit","marathi"];


// const deleteLang = (langName)=>{

//     return languages.filter((lang)=>{
//         return lang != langName
//     })

// }

// let x = deleteLang("marathi")
// console.log(x);

// const deleteLang = (langName)=>{

//     return languages.filter((lang)=> lang != langName)

// }

// let x = deleteLang("sanskrit")
// console.log(x);



const deleteLang = (langName)=> languages.filter((lang)=> lang != langName)
let x = deleteLang("english")
console.log(x);













// const deleteLang = (langName)=>{

//     let x = languages.filter((lang)=>{
//         return lang != langName
//     })

//     return x 
// }

// let x = deleteLang("tamil")
// console.log(x);
