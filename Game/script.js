const word_el=document.getElementById('word');

const correctLetters=['J','a'];
const wrongLetters=[];

function getRandomWord(){
      const words=["Javascript","Java","Php",'Python','Ruby'];
      return words[Math.floor(Math.random()*words.length)];
}





function displayWord(){
       const selectedWord=getRandomWord();
       word_el.innerHTML=`
         ${selectedWord.split('').map(letter=>`
             <div class="letter">
                 ${correctLetters.includes(letter)? letter:''}
             </div>
         
         `).join('')}
       
       
       `;
    
}

displayWord();