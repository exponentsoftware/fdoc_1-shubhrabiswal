// 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.
// The function `countWords` takes a paragraph and two words as parameters. 
// It compare  which word is most frequently occurred in the paragraph.
// const paragraph = 'I love teaching. If you do not love teaching what else can you love. 
// I love JavaScript if you do not love something which can give life to your application what else can you love.';
// console.log(countWords(paragraph,'love', 'you'));
// The word love more frequently occurred than you.


function countWords(paragraph, key1,key2){
    let wordset = paragraph.split(' ');
    let key1_count = 0;
    let key2_count = 0;
    for(let word of wordset){
        if(word.toLowerCase() == key1.toLowerCase()){
            console.log(word)
            key1_count++
        }
        if(word.toLowerCase() == key2.toLowerCase()){
            key2_count++
        }
    }
    if(key1_count>key2_count){
        return "The word "+key1+" more frequently occurred than "+key2;
    }
    else if(key2_count>key1_count){
        return "The word "+key2+" more frequently occurred than "+key1;
    }
    else{
        return "Both the words have same occurrances"
    }
    console.log(key1_count,key2_count)

}
const paragraph = 'I love teaching. If you do not love teaching what else can you love. Love'; 
console.log(countWords(paragraph,'love', 'you'));