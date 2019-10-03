//Black rectangles and squares



function setup(){
    createCanvas(800, 400)
    background(0)
    

}

function draw(){
    stroke(255)
    strokeWeight(3)
    noFill()

    push()
    square(1, 1, 200)
    translate(0, 200)
    square(1, 1, 200)
    square(20, 20, 150)
    pop()
   
    square(20, -20, 150)
    square(205, 1, 200)
    rect(100, 130, 150, 90)
    
    push()
    rect(201, 201, 270, 100)
    scale(1.331)
    rect(201, 201, 270, 100)
    scale(1.23)
    rect(201, 201, 300, 70)
    pop()

    push()
    strokeWeight(5)
    square(408, -30, 100)
    scale(1.5, 1)
    square(250, 70, 129)
    translate(100, 20)
    square(285, 200, 129)
    pop()

    strokeWeight(11)
    rect(700, 352, 100, 50)
    rect(620, 0, 80, 40)

    push()
    strokeWeight(11)
    rect(700, 0, 100, 250)
    scale(2.62, .55)
    rect(700, 0, 100, 250)
    
    fill(0)
    square(250, 250, 50)
    translate(120, 50)
    square(0, 1, 50)
    square(-50, 305, 50)
    pop()

    push()
    strokeWeight(13)
    square(595, 112, 100)
    square(735, 10, 75)
    pop()

    push()
    fill(0)
    square(250, 250, 50)
    translate(120, 50)
    square(0, 1, 50)
    square(-50, 305, 50)
    pop()





}