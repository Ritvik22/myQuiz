class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Answer (1, 2, 3, 4)...");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
    this.Option1 = createElement("h4")
    this.Option2 = createElement("h4")
    this.Option3 = createElement("h4")
    this.Option4 = createElement("h4")

    this.endMessage = createElement("h2")

  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.endMessage.hide();



  }

  display(){
    this.title.html("MyQuiz Game");
    this.message.html("What is the fastest land animal in the world?");
    this.Option1.html("1) Snail")
    this.Option2.html("2) Fish")
    this.Option3.html("3) Homosapiens")
    this.Option4.html("4) Cheetah")
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.input2.position(450, 230);
    this.button.position(290, 300);
    this.message.position(200, 75);
    this.Option1.position(200, 100);
    this.Option2.position(200, 125);
    this.Option3.position(200, 150);
    this.Option4.position(200, 175);


    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

      this.endMessage.html("Your answer has been submitted. Thank You :)");

    })


  }
}
