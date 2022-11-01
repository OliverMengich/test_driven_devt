exports.getLetterCount = function(word){
    let obj = {}
    if(word.length >=1){
        for (let i = 0; i < word.length; i++) {
            let nth = word[i];
            obj[nth] = 0;
            for (let j = 0; j < word.length; j++) {
                if(nth===word[j]){
                    obj[nth] +=1;
                }
                
            }
        }
        return obj;
    }else{
        return obj;
    }
}

// export const getLetterCount = (string)=>{
//     const letters = string.split('');
//     let letterCount = {};
//     letters.forEach(letter => {
//         if(!letterCount[letter]){
//             letterCount[letter] = 1;
//         }else{
//             letterCount[letterCount] +=1
//         }
//     });
//     return letterCount
// };