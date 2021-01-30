let canvas;
let ctx;
let trianglelist = [];

function setup() {
    console.log("setup the code");
    canvas = document.getElementById('window');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        ctx.canvas.width  = window.innerWidth - 15;
        ctx.canvas.height = window.innerHeight - 100;
      } else {
        alert("The drawing canvas is not suported by the javascript code");
      }
}

function startTriangleTriangle(){
    const size = 500;
    let t1 = new TriangleFractal((canvas.width / 2) - (size / 2), (canvas.height / 2) + (size / 3), size, 0);
    let t2 = new TriangleFractal(t1.xend, t1.yend, size, Math.PI + Math.PI/3);
    let t3 = new TriangleFractal(t2.xend, t2.yend, size, Math.PI * 2 / 3);
    trianglelist.push(t1);
    trianglelist.push(t2);
    trianglelist.push(t3);
    for(let i = 0; i < trianglelist.length; i++) {
        trianglelist[i].draw();
    }
}

function startReverseTriangleTriangle(){
    const size = 500;
    let t1 = new TriangleFractal((canvas.width / 2) + (size / 2), (canvas.height / 2) + (size / 3), size, Math.PI);
    let t2 = new TriangleFractal(t1.xend, t1.yend, size, Math.PI + Math.PI * 2 /3);
    let t3 = new TriangleFractal(t2.xend, t2.yend, size, Math.PI / 3);
    trianglelist.push(t1);
    trianglelist.push(t2);
    trianglelist.push(t3);
    for(let i = 0; i < trianglelist.length; i++) {
        trianglelist[i].draw();
    }
}

function startTriangleSquare(){
    const size = 400;
    let t1 = new TriangleFractal((canvas.width / 2) - (size / 2), (canvas.height / 2) + (size / 2), size, 0);
    let t2 = new TriangleFractal(t1.xend, t1.yend, size, Math.PI  + Math.PI / 2);
    let t3 = new TriangleFractal(t2.xend, t2.yend, size, Math.PI);
    let t4 = new TriangleFractal(t3.xend, t3.yend, size, Math.PI / 2);
    trianglelist.push(t1);
    trianglelist.push(t2);
    trianglelist.push(t3);
    trianglelist.push(t4);
    for(let i = 0; i < trianglelist.length; i++) {
        trianglelist[i].draw();
    }
}

function startReverseTriangleSquare(){
    const size = 400;
    let t1 = new TriangleFractal((canvas.width / 2) + (size / 2), (canvas.height / 2) + (size / 2), size, Math.PI);
    let t2 = new TriangleFractal(t1.xend, t1.yend, size, Math.PI  + Math.PI / 2);
    let t3 = new TriangleFractal(t2.xend, t2.yend, size, 0);
    let t4 = new TriangleFractal(t3.xend, t3.yend, size, Math.PI / 2);
    trianglelist.push(t1);
    trianglelist.push(t2);
    trianglelist.push(t3);
    trianglelist.push(t4);
    for(let i = 0; i < trianglelist.length; i++) {
        trianglelist[i].draw();
    }
}

function startTriangleOctagon(){
    const size = 200;
    let t1 = new TriangleFractal((canvas.width / 2) - (size / 2), (canvas.height / 2) + (size*1.2), size, 0);
    let t2 = new TriangleFractal(t1.xend, t1.yend, size, Math.PI  + Math.PI *3 / 4);
    let t3 = new TriangleFractal(t2.xend, t2.yend, size, Math.PI + Math.PI / 2);
    let t4 = new TriangleFractal(t3.xend, t3.yend, size, Math.PI  + Math.PI / 4);
    let t5 = new TriangleFractal(t4.xend, t4.yend, size, Math.PI);
    let t6 = new TriangleFractal(t5.xend, t5.yend, size, Math.PI *3 / 4);
    let t7 = new TriangleFractal(t6.xend, t6.yend, size, Math.PI / 2);
    let t8 = new TriangleFractal(t7.xend, t7.yend, size, Math.PI / 4);
    trianglelist.push(t1);
    trianglelist.push(t2);
    trianglelist.push(t3);
    trianglelist.push(t4);
    trianglelist.push(t5);
    trianglelist.push(t6);
    trianglelist.push(t7);
    trianglelist.push(t8);
    for(let i = 0; i < trianglelist.length; i++) {
        trianglelist[i].draw();
    }
}

function startReverseTriangleOctagon(){
    const size = 200;
    let t1 = new TriangleFractal((canvas.width / 2) + (size / 2), (canvas.height / 2) + (size * 1.2), size, Math.PI);
    let t2 = new TriangleFractal(t1.xend, t1.yend, size, Math.PI  + Math.PI / 4);
    let t3 = new TriangleFractal(t2.xend, t2.yend, size, Math.PI + Math.PI / 2);
    let t4 = new TriangleFractal(t3.xend, t3.yend, size, Math.PI  + Math.PI * 3 / 4);
    let t5 = new TriangleFractal(t4.xend, t4.yend, size, 0);
    let t6 = new TriangleFractal(t5.xend, t5.yend, size, Math.PI / 4);
    let t7 = new TriangleFractal(t6.xend, t6.yend, size, Math.PI / 2);
    let t8 = new TriangleFractal(t7.xend, t7.yend, size, Math.PI * 3 / 4);
    trianglelist.push(t1);
    trianglelist.push(t2);
    trianglelist.push(t3);
    trianglelist.push(t4);
    trianglelist.push(t5);
    trianglelist.push(t6);
    trianglelist.push(t7);
    trianglelist.push(t8);
    for(let i = 0; i < trianglelist.length; i++) {
        trianglelist[i].draw();
    }
}

function startTree(){
    const size = 300;
    let startline = new TreeIterator(canvas.width / 2 + 10, canvas.height, size, Math.PI + Math.PI / 2);
    trianglelist.push(startline);
    for(let i = 0; i < trianglelist.length; i++) {
        trianglelist[i].draw();
    }
}

function reset(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trianglelist = [];
    let secondoption = document.getElementById("additionaloption").textContent;
    let firstoption = document.getElementById("mainoption").textContent; 
    if (firstoption == "Triangular itteration" && secondoption == "Triangle"){
        startTriangleTriangle();
    } else if (firstoption == "Reverse triangular itteration" && secondoption == "Triangle"){
        startReverseTriangleTriangle();
    } else if (firstoption == "Triangular itteration" && secondoption == "Square"){
        startTriangleSquare();
    } else if (firstoption == "Reverse triangular itteration" && secondoption == "Square"){
        startReverseTriangleSquare();
    } else if (firstoption == "Triangular itteration" && secondoption == "Octagon"){
        startTriangleOctagon();
    } else if (firstoption == "Reverse triangular itteration" && secondoption == "Octagon"){
        startReverseTriangleOctagon();
    } else if(firstoption == "Tree"){
        startTree();
    } else{
        alert("please make a valid choise");
    }
}

function doAlgorithm(firstoption, secondoption){
    console.log("running....");
    if (firstoption == "Triangular itteration" && secondoption == "Triangle"){
        triangleFraction();
    } else if (firstoption == "Reverse triangular itteration" && secondoption == "Triangle"){
        triangleFraction();
    } else if (firstoption == "Triangular itteration" && secondoption == "Square"){
        triangleFraction();
    } else if (firstoption == "Reverse triangular itteration" && secondoption == "Square"){
        triangleFraction();
    } else if (firstoption == "Triangular itteration" && secondoption == "Octagon"){
        triangleFraction();
    } else if (firstoption == "Reverse triangular itteration" && secondoption == "Octagon"){
        triangleFraction();
    } else if(firstoption == "Tree"){
        treeFraction();
    } else{
        alert("please make a valid choise");
    }
}

class TreeIterator{
    x;
    y;
    xend;
    yend;
    angle;
    length;
    
    /**
     * at construction we get a starting point, a length and an angle
     */
    constructor(x, y, length, angle){
        this.x = x;
        this.y = y;
        this.length = length;
        this.angle = angle;
        this.xend = length * Math.cos(angle) + x;
        this.yend = length * Math.sin(angle) + y;
    }

    /**
     * draws the line over the corect x and y coordinates
     */
    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.xend, this.yend);
        ctx.stroke();
    }

    /**
     * construct 2 parts form this part
     */
    split(){
        let newlist = [];
        let newlength = this.length / 2;
        let firstpart = new TreeIterator(this.xend, this.yend, newlength, this.angle + (Math.PI / 4));
        let secondpart = new TreeIterator(this.xend, this.yend, newlength, this.angle - (Math.PI / 4));
        newlist.push(firstpart);
        newlist.push(secondpart);
        return newlist;
    }
}

class TriangleFractal{

    x;
    y;
    xend;
    yend;
    angle;
    length;

    /**
     * at construction we get a starting point, a length and an angle
     */
    constructor(x, y, length, angle){
        this.x = x;
        this.y = y;
        this.length = length;
        this.angle = angle;
        this.xend = length * Math.cos(angle) + x;
        this.yend = length * Math.sin(angle) + y;
    }

    /**
     * splits this fractal in 4 parts and return a list with these new fractals
     */
    split(){
        let newlist = [];
        let newlength = this.length / 3;
        let firstx = ((this.xend - this.x) / 3 ) + this.x;
        let firsty = ((this.yend - this.y) / 3 ) + this.y;
        let secondx = (2 * (this.xend - this.x) / 3 ) + this.x;
        let secondy = (2 * (this.yend - this.y) / 3 ) + this.y;
        // there are 2 parts who are at the same angle as the current line
        // for these we need only to calculate endpoints and lengths
        let firsttria = new TriangleFractal(this.x, this.y, newlength, this.angle);
        let fourthtria = new TriangleFractal(secondx, secondy, newlength, this.angle);
        newlist.push(firsttria);
        newlist.push(fourthtria);
        // thte second triangle has a new angle which we need te calculate
        // we want an extra 60 degress added to the angle = pi / 3
        let newangle = this.angle + (Math.PI / 3);
        let secondtria = new TriangleFractal(firstx, firsty, newlength, newangle);
        newlist.push(secondtria);
        //for the third triangle we need to calculate new beginpoints and a new angle
        let finx = secondtria.xend;
        let finy = firsty + newlength * Math.sin(newangle);
        let finangl = this.angle - (Math.PI / 3);
        let thirdtria = new TriangleFractal(finx, finy, newlength, finangl);
        newlist.push(thirdtria);
        return newlist;
    }

    /**
     * draws the line over the corect x and y coordinates
     */
    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.xend, this.yend);
        ctx.stroke();
    }
}

function triangleFraction(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let newlist = [];
    for(let i = 0; i < trianglelist.length; i++) {
        newlist = newlist.concat(trianglelist[i].split());
    }
    for(let i = 0; i < newlist.length; i++) {
        newlist[i].draw();
    }
    trianglelist = newlist;
}

function treeFraction(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let newlist = [];
    for(let i = 0; i < trianglelist.length; i++) {
        newlist = newlist.concat(trianglelist[i].split());
    }
    trianglelist = trianglelist.concat(newlist);
    for(let i = 0; i < trianglelist.length; i++) {
        trianglelist[i].draw();
    }
}

//itterate button
document.getElementById("actualStartButton").onclick = () => {
    let secondoption = document.getElementById("additionaloption").textContent;
    let firstoption = document.getElementById("mainoption").textContent;
    doAlgorithm(firstoption, secondoption);    
};

document.getElementById("startButtonextra").onclick = () => {
    reset();
}

document.getElementById("actualStartButton2").onclick = () => {
    reset();
}

setup();