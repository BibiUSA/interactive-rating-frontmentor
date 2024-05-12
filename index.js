const firstBox= document.querySelector("#first-box");
const secondBox= document.querySelector("#thank-you");
const submittedRating = document.querySelector("#submittedRating");
const ratingLength = document.querySelectorAll(".rating").length;
const rating = document.querySelectorAll(".rating");
//console.log(ratingLength);
let answer= 0;
//if rating is clicked, then make it orange
//if one of rating has clicked, then turn off that, and then add it to this
//function answers(){
for(let i=0; i<ratingLength; i++){
    const clickedRating = rating[i];
    rating[i].addEventListener("click", function(){
        for(let j= 0; j<ratingLength;j++){
          const checkRating = rating[j];
         // console.log(rating[j]);
          if(rating[j].classList.contains("clicked")){
            rating[j].classList.remove("clicked");
          }
     
        }
        clickedRating.classList.toggle("clicked");
//get the value of the rating that has been clicked
       console.log(clickedRating.innerHTML);
       let answering= clickedRating.innerHTML;
        answer =parseInt(answering);
       
    })
}



   console.log(answer);
//if submit is clicked, check and see if one one of the rating has been clicked
const submitButton= document.querySelector(".submit");
submitButton.addEventListener("click", function(){
        if(answer== 0){
            console.log(answer);
         //and show the next page   
        }else if(answer !=0){
            firstBox.classList.add("survey");
            secondBox.classList.toggle("thank-you")
            //on the next page, input the value of the rating that has clicked value in the text box
            submittedRating.innerHTML="You selected " + answer +" out of 5"
        }
    })





