const jk=document.getElementById("b");
    
     pJokes()
     async function pJokes(){
        let joke=await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
        let jok=await joke.json()
        if(jok.joke==undefined){
          myjoke=`${jok.setup} <br /> ${jok.delivery}`
        }
       else{
         myjoke=jok.joke;
        }
        document.getElementById("j").innerHTML=myjoke;
    }
   