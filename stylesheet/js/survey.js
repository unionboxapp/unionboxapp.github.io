(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          if(questionNumber === 0){
                answers.push(
                    `
                     <input type="email" placeholder="email@example.com" id="rad${questionNumber}" class="emailSurvey" name="question${questionNumber}" required>`
                  );
          }
          else if(questionNumber == 5 || questionNumber == 3 || questionNumber == 4 || questionNumber == 6 || questionNumber ==7 || questionNumber ==10 || questionNumber ==13 || questionNumber ==15 || questionNumber ==16 
            || questionNumber ==18 || questionNumber ==23 || questionNumber ==25 || questionNumber ==26 || questionNumber ==28){
                answers.push(
                    `
                     <textarea type="text" placeholder="Respond here." id="rad${questionNumber}" class="emailText" name="question${questionNumber}" required></textarea>`
                  );
          }
          else if(questionNumber == 9 || questionNumber == 11 || questionNumber == 12 || questionNumber == 17 || questionNumber == 22 || questionNumber == 27 ){
                answers.push(
                    `
                     <input type="number" placeholder="Number" id="rad${questionNumber}" class="emailSurvey" name="question${questionNumber}" required>`
                  );
          }
          else{
                answers.push(
                    `
                      <input type="radio" id="rad${questionNumber}${letter}" class="mcSurvey" name="question${questionNumber}" value="${letter}">
                      <label for="rad${questionNumber}${letter}" id="lab${questionNumber}${letter}">
                      ${currentQuestion.answers[letter]}
                    </label>`
                  );
          }
          
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    var obj = {
        answers:[]
    };
    // keep track of user's answers
    let numCorrect = 0;

     const answerContainers2 = quizContainer.querySelectorAll('.answers');
     const selector2 = `input[name=question1]:checked`;
     const userAnswer2 = (answerContainers2[1].querySelector(selector2) || {}).value;
     var n = 0;
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      n++;
      // find selected answer
      if(userAnswer2 == "a"){

        if(questionNumber >= 0 && questionNumber <= 11){
          const answerContainer = answerContainers[questionNumber];

          if(questionNumber === 0){
            var inputVal = document.getElementById("rad"+questionNumber).value;
            obj.answers.push({email: inputVal});
          }
          else if(questionNumber == 5 || questionNumber == 3 || questionNumber == 4 || questionNumber == 6 || questionNumber ==7 || questionNumber ==10 || questionNumber ==13 || questionNumber ==15 || questionNumber ==16 
                || questionNumber ==18 || questionNumber ==23 || questionNumber ==25 || questionNumber ==26 || questionNumber ==28 || questionNumber == 9 || questionNumber == 11 || questionNumber == 12 || questionNumber == 17 || questionNumber == 22 || questionNumber == 27){
            var inputVal = document.getElementById("rad"+questionNumber).value;
            obj.answers.push({quest: currentQuestion.question, answ: inputVal});
          }
          else{
              const selector = `input[name=question${questionNumber}]:checked`;
              const userAnswer = (answerContainer.querySelector(selector) || {}).value;
              var fullAnswer = document.getElementById("lab"+questionNumber + userAnswer).innerText;
              obj.answers.push({quest: currentQuestion.question, answ: fullAnswer});
          }

          
        }

      }
      else if(userAnswer2 == "b"){
        if((questionNumber >= 12 && questionNumber <= 21) || questionNumber == 0 || questionNumber == 1 ){
          const answerContainer = answerContainers[questionNumber];

          if(questionNumber === 0){
            var inputVal = document.getElementById("rad"+questionNumber).value;
            obj.answers.push({email: inputVal});
          }
          else if(questionNumber == 5 || questionNumber == 3 || questionNumber == 4 || questionNumber == 6 || questionNumber ==7 || questionNumber ==10 || questionNumber ==13 || questionNumber ==15 || questionNumber ==16 
                || questionNumber ==18 || questionNumber ==23 || questionNumber ==25 || questionNumber ==26 || questionNumber ==28 || questionNumber == 9 || questionNumber == 11 || questionNumber == 12 || questionNumber == 17 || questionNumber == 22 || questionNumber == 27){
            var inputVal = document.getElementById("rad"+questionNumber).value;
            obj.answers.push({quest: currentQuestion.question, answ: inputVal});
          }
          else{
              const selector = `input[name=question${questionNumber}]:checked`;
              const userAnswer = (answerContainer.querySelector(selector) || {}).value;
              var fullAnswer = document.getElementById("lab"+questionNumber + userAnswer).innerText;
              obj.answers.push({quest: currentQuestion.question, answ: fullAnswer});
          }
        }
      }
      else if(userAnswer2 == "c"){
        if((questionNumber >= 22 && questionNumber <= 31) || questionNumber == 0 || questionNumber == 1 ){
          const answerContainer = answerContainers[questionNumber];

          if(questionNumber === 0){
            var inputVal = document.getElementById("rad"+questionNumber).value;
            obj.answers.push({email: inputVal});
          }
          else if(questionNumber == 5 || questionNumber == 3 || questionNumber == 4 || questionNumber == 6 || questionNumber ==7 || questionNumber ==10 || questionNumber ==13 || questionNumber ==15 || questionNumber ==16 
                || questionNumber ==18 || questionNumber ==23 || questionNumber ==25 || questionNumber ==26 || questionNumber ==28 || questionNumber == 9 || questionNumber == 11 || questionNumber == 12 || questionNumber == 17 || questionNumber == 22 || questionNumber == 27){
            var inputVal = document.getElementById("rad"+questionNumber).value;
            obj.answers.push({quest: currentQuestion.question, answ: inputVal});
          }
          else{
              const selector = `input[name=question${questionNumber}]:checked`;
              const userAnswer = (answerContainer.querySelector(selector) || {}).value;
              var fullAnswer = document.getElementById("lab"+questionNumber + userAnswer).innerText;
              obj.answers.push({quest: currentQuestion.question, answ: fullAnswer});
          }
        }
      }

    });

  
      var json = JSON.stringify(obj);
      alert(json);
    // show number of correct answers out of total
    document.getElementById("quizer").style.width= "1000px";
    document.getElementById("quizer").style.textAlign="center";
    document.getElementById("quizer").innerHTML = "<h1 style='color:#fff;'>Thank you for completing a quiz! Your coupon for <strong>FREE TWO WEEKS USAGE</strong> will be sent shortly after the moderation.</h1>";
  }

  function getInputValue(questionNumber){
    // Selecting the input element and get its value 
        var inputVal = document.getElementById("rad"+questionNumber).value;
        
        // Displaying the value
        return inputVal;
    }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   }
  function showSlide(n) {



    var part = myQuestions.length;

    if(n >= 2 && n <= 11){
        part = 12;
    }
    else if(n >= 12 && n <= 21){

        part = 22;
    }

    else if(n >= 22 && n <= 31){

        part = 32;
    }


    if(prev == true){
        prev = false;
        if(n == 1){
            slides[n].classList.remove('active-slide');
            n = 1;
        }
        else if(n == 11){
            slides[n].classList.remove('active-slide');
            n = 1;
        }
        else if(n == 21){
            slides[n].classList.remove('active-slide');
            n = 1;
        }

        if(n == 10 || n == 20 || n == 30){
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
            document.getElementById("quizButtons").style.width= (document.getElementById("next").offsetWidth + document.getElementById("previous").offsetWidth + 11) + 'px';
            document.getElementById("next").style.marginLeft= '10px';
        }
    }


    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    


    if(currentSlide == 1){
        var inputVal = getInputValue(n-1);
    }
    if(currentSlide === 0){
      previousButton.style.display = 'none';

      document.getElementById("quizButtons").style.width= document.getElementById("next").offsetWidth+1+'px';


      document.getElementById("next").style.marginLeft= '0';
    }
    else if(currentSlide == 1){
        if(inputVal != null && inputVal != ''){
          if(n == 1){
            if(!validateEmail(inputVal)){
                showPreviousSlide();
            }
            else{  
              previousButton.style.display = 'inline-block';
              document.getElementById("quizButtons").style.width= (document.getElementById("next").offsetWidth + document.getElementById("previous").offsetWidth + 11) + 'px';

              document.getElementById("next").style.marginLeft= '10px';
            }
          }
          else{
              previousButton.style.display = 'inline-block';
              document.getElementById("quizButtons").style.width= (document.getElementById("next").offsetWidth + document.getElementById("previous").offsetWidth + 11) + 'px';

              document.getElementById("next").style.marginLeft= '10px';
          }
        }
        else{
            showPreviousSlide();
        }
        
    }
    else if(currentSlide == 2){

        const answerContainers = quizContainer.querySelectorAll('.answers');
        const selector = `input[name=question${currentSlide-1}]:checked`;
        const userAnswer = (answerContainers[currentSlide-1].querySelector(selector) || {}).value;
        if( userAnswer == "a"){
            for(i = n; i < 2; i++){
                slides[i].classList.remove('active-slide');
            }
            slides[2].classList.add('active-slide');
            currentSlide = 2;
        }
        else if( userAnswer == "b"){
            for(i = n; i < 12; i++){
                slides[i].classList.remove('active-slide');
            }
            slides[12].classList.add('active-slide');
            currentSlide = 12;
        }

        else if( userAnswer == "c"){
            for(i = n; i < 22; i++){
                slides[i].classList.remove('active-slide');
            }
            slides[22].classList.add('active-slide');
            currentSlide = 22;
        }
        else{
             showPreviousSlide();
        }

        if(currentSlide >= 2 && currentSlide <= 11){
            part = 12;
        }
        else if(currentSlide >= 12 && currentSlide <= 21){

            part = 21;
        }

        else if(currentSlide >= 22 && currentSlide <= 31){

            part = 31;
        }
    }
    if(n === part-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';


      document.getElementById("quizButtons").style.width= (document.getElementById("submit").offsetWidth + document.getElementById("previous").offsetWidth + 11) + 'px';

      document.getElementById("submit").style.marginLeft= '10px';

      return true;
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    prev = true;
    showSlide(currentSlide - 1);
  }


  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('kafsljiou849ywuefjsnlfehu4wy7');
  const submitButton = document.getElementById('submit');
  let myQuestions = [
        {
          question: "Enter your email to start",
          answers: {
            a: "Reseller (Business purposes)",
          },
          correctAnswer: "c"
        },
        {
          question: "Who are you?",
          answers: {
            a: "Reseller (Business purposes)",
            b: "Collector ",
            c: "Average customer",
          },
          correctAnswer: "c"
        },
        // reseller 2-11

        {
          question: "What do you do (specific) in your business?",
          answers: {
            a: "MarketPlace Seller",
            b: "CEO of Shop or service",
            c: "Local Shop",
            d: "Self-working reseller"
          },
          correctAnswer: "c"
        },
        {
          question: "What is your main problem or issue that you deal with in your business?",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },
        {
          question: "How are you solving all of these problems?",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },
        {
          question: "What about your average sales?",
          answers: {
            a: "Number",
          },
          correctAnswer: "c"
        },
        {
          question: "Why don't you sell more?",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },

        {
          question: "Approximately, what is your profit? (We'll keep this information private)",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },

        {
          question: "Have you ever tried StockX or SNRKS?",
          answers: {
            a: "STOCKX",

            b: "SNKRS",

            c: "OTHER",

            d: "NONE",
          },
          correctAnswer: "c"
        },

        {
          question: "How much are you ready to overpay to get the desired limited items from Nike SNKRS platform?",
          answers: {
            a: "Number",
          },
          correctAnswer: "c"
        },
        {
          question: "Where do you live and where do you ship your items?  ",
          answers: {
            a: "full answer",
          },
          correctAnswer: "c"
        },
        {
          question: "How old are you?",
          answers: {
            a: "Number",
          },
          correctAnswer: "c"
        },

         // collector 12-21

        {
          question: "How old are you?",
          answers: {
            a: "number",
          },
          correctAnswer: "c"
        },
        {
          question: "Where do you live?",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },
        {
          question: "Have you ever tried StockX or SNRKS?",
          answers: {
            a: "STOCKX",

            b: "SNKRS",

            c: "OTHER",

            d: "NONE",
          },
          correctAnswer: "c"
        },
        {
          question: "What is your main problem or issue that you deal with in in these services?",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },

        {
          question: "How you deal with these services",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },

        {
          question: "How many sneakers do you buy per year ?",
          answers: {
            a: "Number",
          },
          correctAnswer: "c"
        },

        {
          question: "How much are you ready to overpay to get the desired sneakers?",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },
        {
          question: "What kind of sneakers do you like the most?",
          answers: {
            a: "Common Sneakers",

            b: "Rare Sneakers",

            c: "Sneaker Collabs",
          },
          correctAnswer: "c"
        },
        {
          question: "Are you interested in custom sneakers that will be made just for you?",
          answers: {
            a: "Yes",
            b: "No",
            c: "Maybe",
          },
          correctAnswer: "c"
        },
        {
          question: "Are you a human?",
          answers: {
            a: "Yes",
            b: "No",
          },
          correctAnswer: "c"
        },

        // average custumer 22-31

        {
          question: "How old are you?",
          answers: {
            a: "number",
          },
          correctAnswer: "c"
        },
        {
          question: "Where do you live?",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },
        {
          question: "Have you ever ordered sneakers from StockX,GOAT or Ebay.",
          answers: {
            a: "STOCKX",

            b: "SNKRS",

            c: "EBAY",

            d: "OTHER",

            E: "NONE",
          },
          correctAnswer: "c"
        },
        {
          question: "What is your main problem or issue that you deal with in in these services?",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },

        {
          question: "How you deal with these services",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },

        {
          question: "How many sneakers do you buy per year?",
          answers: {
            a: "Number",
          },
          correctAnswer: "c"
        },

        {
          question: "How much are you ready to overpay to get the desired sneakers?",
          answers: {
            a: "Full answer",
          },
          correctAnswer: "c"
        },
        {
          question: "What kind of sneakers do you like the most?",
          answers: {
            a: "Common Sneakers",

            b: "Rare Sneakers",

            c: "Sneaker Collabs",
          },
          correctAnswer: "c"
        },
        {
          question: "Are you interested in custom sneakers that will be made just for you?",
          answers: {
            a: "Yes",
            b: "No",
            c: "Maybe",
          },
          correctAnswer: "c"
        },
        {
          question: "Are you a human?",
          answers: {
            a: "Yes",
            b: "No",
          },
          correctAnswer: "c"
        },
    ];
  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  let prev = false;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

