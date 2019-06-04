let active = 0;
let board_rows = 7;
let board_columns = 4;
let start_time = 0;

let line_1 = false;
let line_2 = false;
let line_3 = false;
let line_4 = false;

let score = 25;
let speed = 500;
let count = 1000;

let timer = 0;
let end_timer = 100;

let hit = 0;
let missed = 0;
let total_notes = 0;
let bad_timing = 0;

let health = document.getElementById("health");

document.addEventListener("keydown", buttonPress);
document.addEventListener("keyup", buttonRelease);
document.getElementById("easy").addEventListener("click", estart);
document.getElementById("medium").addEventListener("click", mstart);
document.getElementById("hard").addEventListener("click", hstart);
document.getElementById("campaign").addEventListener("click", cstart);

document.getElementById("score-screen").style.visibility = "hidden";
document.getElementById("health").style.visibility = "hidden";

function estart(){
  speed = 500;
  start();
}
function mstart(){
  speed = 250;
  start();
}
function hstart(){
  speed = 175;
  start();
}

function cstart(){

}

function start(){
  start_time = performance.now();
  active = 1;

  health.style.visibility = "visible";
  healthChange();

  document.getElementById("easy").style.visibility = "hidden";
  document.getElementById("medium").style.visibility = "hidden";
  document.getElementById("hard").style.visibility = "hidden";
  document.getElementById("campaign").style.visibility = "hidden";

  while(active == 1){
    setTimeout(tick, count);
    count = count + speed;
    if(count > (speed * speed * end_timer)){
      break;
    }
  }

}
function healthChange(){
  if(score <= 0){
    endGame();
    return;
  }

  let temp = score/25;

  if(temp > 1) temp = 1;

  let healthbar = 17*(1-temp) + 33;

  let temp2 = 255-(255/(1/temp));

  health.style.marginLeft = healthbar + "%";
  health.style.marginRight = healthbar + "%";

  health.style.backgroundColor = "rgb(" + temp2 + ",100,0)";
}

function buttonPress(event){
  let temp = "";
  let temp1 = "";
  let temp2 = "";

  let color = "";
  let color1 = "";
  let color2 = "";
  if(active == 1){
    if(event.which == 65){
      temp = "r" + board_rows + "c1";
      temp1 = "r" + (board_rows - 1) + "c1";
      temp2 = "r" + (board_rows - 2) + "c1";
      color = "DarkGreen";
      color1 = "LimeGreen";
      color2 = "PaleGreen"

      if(line_1 == true) {
        score++;
        document.getElementById("timing").innerHTML = "<span style=\"color: Lime\">Nice!</span>"
        document.getElementById("r" + board_rows + "c1").innerHTML = "-";
        line_1 = false;
        hit++;
      } else{
        score--;
        bad_timing++;
        document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Missed!</span>"
      }
      document.getElementById("score").innerHTML = score;
    }
    if(event.which == 83){
      temp = "r" + board_rows + "c2";
      temp1 = "r" + (board_rows - 1) + "c2";
      temp2 = "r" + (board_rows - 2) + "c2";
      color = "DarkRed";
      color1 = "IndianRed";
      color2 = "Pink"

      if(line_2 == true) {
        score = score++;
        document.getElementById("timing").innerHTML = "<span style=\"color: Lime\">Nice!</span>"
        document.getElementById("r" + board_rows + "c2").innerHTML = "-";
        line_2 = false;
        hit++;
      } else{
        score--;
        bad_timing++;
        document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Missed!</span>"
      }
      document.getElementById("score").innerHTML = score;
    }
    if(event.which == 75){
      temp = "r" + board_rows + "c3";
      temp1 = "r" + (board_rows - 1) + "c3";
      temp2 = "r" + (board_rows - 2) + "c3";
      color = "Gold";
      color1 = "Khaki";
      color2 = "PapayaWhip"

      if(line_3 == true) {
        score = score++;
        document.getElementById("timing").innerHTML = "<span style=\"color: Lime\">Nice!</span>"
        document.getElementById("r" + board_rows + "c3").innerHTML = "-";
        line_3 = false;
        hit++;
      } else{
        score--;
        bad_timing++;
        document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Missed!</span>"
      }
      document.getElementById("score").innerHTML = score;
    }
    if(event.which == 76){
      temp = "r" + board_rows + "c4";
      temp1 = "r" + (board_rows - 1) + "c4";
      temp2 = "r" + (board_rows - 2) + "c4";
      color = "DarkSlateBlue";
      color1 = "MediumSlateBlue";
      color2 = "Plum"

      if(line_4 == true) {
        score = score++;
        document.getElementById("timing").innerHTML = "<span style=\"color: Lime\">Nice!</span>"
        document.getElementById("r" + board_rows + "c4").innerHTML = "-";
        line_4 = false;
        hit++;
      } else{
        score--;
        bad_timing++;
        document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Missed!</span>"
      }
      document.getElementById("score").innerHTML = score;
    }

    document.getElementById(temp).style.backgroundColor = color;
    document.getElementById(temp1).style.backgroundColor = color1;
    document.getElementById(temp2).style.backgroundColor = color2;

    healthChange();
  }
}

function buttonRelease(event){
  let temp = "";
  let temp1 = "";
  let temp2 = "";

  let color = "";

  if(event.which == 65){
    temp = "r" + board_rows + "c1";
    temp1 = "r" + (board_rows - 1) + "c1";
    temp2 = "r" + (board_rows - 2) + "c1";
    color = "white";
  }
  if(event.which == 83){
    temp = "r" + board_rows + "c2";
    temp1 = "r" + (board_rows - 1) + "c2";
    temp2 = "r" + (board_rows - 2) + "c2";
    color = "white";
  }
  if(event.which == 75){
    temp = "r" + board_rows + "c3";
    temp1 = "r" + (board_rows - 1) + "c3";
    temp2 = "r" + (board_rows - 2) + "c3";
    color = "white";
  }
  if(event.which == 76){
    temp = "r" + board_rows + "c4";
    temp1 = "r" + (board_rows - 1) + "c4";
    temp2 = "r" + (board_rows - 2) + "c4";
    color = "white";
  }

  document.getElementById(temp).style.backgroundColor = color;
  document.getElementById(temp1).style.backgroundColor = color;
  document.getElementById(temp2).style.backgroundColor = color;
}

function tick(){
  if(active == 1){
    timer++;
    if(timer > end_timer){
      endGame();
      return;
    }

    let number = board_columns - 1;
    if(speed < 251) number = board_columns;
    let r_num = Math.floor(Math.random() * number);

    for(let i = 0; i < r_num; i++){
      let r_place = Math.floor((Math.random() * board_columns)+1);
      let shape = "";
      if(r_place == 1) shape = "A";
      if(r_place == 2) shape = "S";
      if(r_place == 3) shape = "K";
      if(r_place == 4) shape = "L";
      document.getElementById("r1c" + r_place).innerHTML = shape;
    }

    for(let i = 1; i < board_columns + 1; i++){
      if(document.getElementById("r1c" + i).innerHTML != "-") total_notes++;
    }

    for(let i = board_rows; i > 0; i--){
      for(let j = board_columns; j > 0; j--){
        let id = "r" + i + "c" + j;
        let current = document.getElementById(id).innerHTML;

        if(current != "-"){
          let temp = current;
          document.getElementById(id).innerHTML = "-";
          if(i+1 > 7){
            if(line_1 == true){
              line_1 = false;
              score = score - 2;
              document.getElementById("score").innerHTML = score;
              document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Oof!</span>";
              missed++;
            }
            if(line_2 == true){
              line_2 = false;
              score = score - 2;
              document.getElementById("score").innerHTML = score;
              document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Oof!</span>";
              missed++;
            }
            if(line_3 == true){
              line_3 = false;
              score = score - 2;
              document.getElementById("score").innerHTML = score;
              document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Oof!</span>";
              missed++;
            }
            if(line_4 == true){
              line_4 = false;
              score = score - 2;
              document.getElementById("score").innerHTML = score;
              document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Oof!</span>";
              missed++;
            }
          } else{
            document.getElementById("r" + (i+1) + "c" + j).innerHTML = temp;
          }
        }
      }
    }

    if(document.getElementById("r" + board_rows + "c1").innerHTML != "-"){
      line_1 = true;
    }
    if(document.getElementById("r" + board_rows + "c2").innerHTML != "-"){
      line_2 = true;
    }
    if(document.getElementById("r" + board_rows + "c3").innerHTML != "-"){
      line_3 = true;
    }
    if(document.getElementById("r" + board_rows + "c4").innerHTML != "-"){
      line_4 = true;
    }
  }

  healthChange();
}

function endGame(){
  active = 0;
  if(score <= 0) document.getElementById("timing").innerHTML = "<span style=\"color: Magenta\">You Lost!</span>";
  else document.getElementById("timing").innerHTML = "<span style=\"color: Magenta\">You Won!</span>";

  health.style.visibility = "hidden";
  score = Math.round(100*(((performance.now() - start_time)*hit)/(60*(missed+bad_timing)))/100);

  document.getElementById("score").innerHTML = score;
  document.getElementById("score-screen").style.visibility = "visible";
  document.getElementById("accuracy").innerHTML = Math.round(100*((hit/total_notes)*100)/100) + "%";
  document.getElementById("hit").innerHTML = hit;
  document.getElementById("missed").innerHTML = missed;
  document.getElementById("bad-timing").innerHTML = bad_timing;
}
