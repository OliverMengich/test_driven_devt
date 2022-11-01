// (function(word1,word2){
//     let letters1 = word1.split("").join("");
//     let letters2 = word2.split("").join("");
//     letters1 = letters1.split('')
//     letters2 = letters2.split('')
//     if(letters1.length === letters2.length){
//         letters1.forEach(letter=>{
//             if(!letters2.includes(letter)){ 
//                 return 'not anagrams'
//             }
//             console.log('anagrams')
//             return 'Anagrams'
//         })
//     }else{
//         console.log("Letters not anagrams");
//     }
// })("conversation","voices rant on");
export const isAnagram = (string1,string2)=>{
    const letters1 = string1.split('');
    const letters2 = string2.split('');
    return letters1.every(letter=> letters2.includes(letter)) && letters2.every(letter=> letters1.includes(letter))
}