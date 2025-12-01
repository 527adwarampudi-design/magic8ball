function shakeMagic8Ball(){
   const question=prompt("What is your question for the magic 8 Ball?");
   
   if(question === null){
 document.getElementById('response-text').innerText='Please Ask a Question!!'
   }
}