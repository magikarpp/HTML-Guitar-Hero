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
let temp = 0;
let end_timer = 0;
let mode = "";
let noteCount = 2;
let combo = 0;
let hicombo = 0;

let timer = 0;

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
document.getElementById("restart").addEventListener("click", restart);

document.getElementById("score-screen").style.display = "none";
document.getElementById("health").style.display = "none";
document.getElementById("combodisp").style.display = "none";
document.getElementById("restart").style.visibility = "hidden";

function estart(){
  speed = 200;
  mode = "e";
  end_timer = 75;
  noteCount = 1;
  start();
}
function mstart(){
  speed = -75;
  mode = "m";
  end_timer = 200;
  noteCount = 2;
  start();
}
function hstart(){
  speed = -150;
  mode = "h";
  end_timer = 300;
  noteCount = 2;
  start();
}

function cstart(){
  speed = 300;
  mode = "c";
  end_timer = 99999;
  noteCount = 1;
  start();
}

function start(){

  start_time = performance.now();
  active = 1;

  health.style.display = "block";
  document.getElementById("combodisp").style.display = "block";
  healthChange();

  document.getElementById("easy").style.display = "none";
  document.getElementById("medium").style.display = "none";
  document.getElementById("hard").style.display = "none";
  document.getElementById("campaign").style.display = "none";
  document.getElementById("warning").style.display = "none";

  if(active == 1){
    setTimeout(gameLoop, 1500);
  }

  function gameLoop(){
    tick();
    if(active == 1){
      if(mode == "e"){
        if(Math.floor(Math.random() * 10) == 1) noteCount = 2;
        else noteCount = 1;
      } else if(mode == "m"){
        if(Math.floor(Math.random() * 10) == 1) noteCount = 3;
        else noteCount = 2;
      } else if(mode == "h"){
        if(Math.floor(Math.random() * 10) == 1) noteCount = 3;
        else noteCount = 2;
      }
      else if(mode == "c"){
        if(timer > 45){
          speed = 200;
        }
        if(timer > 100){
          noteCount = 2;
        }
        if(timer > 155){
          speed = 0;
        }
        if(timer > 245){
          if(Math.floor(Math.random() * 2)) noteCount = 3;
          else noteCount = 2;
        }
        if(timer > 335){
          speed = -75;
        }
        if(timer > 535){
          speed = -125;
        }
        if(timer > 850){
          speed = -150;
        }
      }
      if(timer > end_timer){
        endGame();
      }
      setTimeout(gameLoop, 325 + speed);
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
        combo++;
        if(combo > hicombo){
          hicombo = combo;
        }
        document.getElementById("combo").innerHTML = combo;
      } else{
        score--;
        bad_timing++;
        combo = 0;
        document.getElementById("combo").innerHTML = combo;
        document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Missed!</span>"
      }
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
        combo++;
        if(combo > hicombo){
          hicombo = combo;
        }
        document.getElementById("combo").innerHTML = combo;
      } else{
        score--;
        bad_timing++;
        combo = 0;
        document.getElementById("combo").innerHTML = combo;
        document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Missed!</span>"
      }
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
        combo++;
        if(combo > hicombo){
          hicombo = combo;
        }
        document.getElementById("combo").innerHTML = combo;
      } else{
        score--;
        bad_timing++;
        combo = 0;
        document.getElementById("combo").innerHTML = combo;
        document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Missed!</span>"
      }
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
        combo++;
        if(combo > hicombo){
          hicombo = combo;
        }
        document.getElementById("combo").innerHTML = combo;
      } else{
        score--;
        bad_timing++;
        combo = 0;
        document.getElementById("combo").innerHTML = combo;
        document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Missed!</span>"
      }
    }

    if(temp){
      document.getElementById(temp).style.backgroundColor = color;
      document.getElementById(temp1).style.backgroundColor = color1;
      document.getElementById(temp2).style.backgroundColor = color2;
    }

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
  
  if(temp){
    document.getElementById(temp).style.backgroundColor = color;
    document.getElementById(temp1).style.backgroundColor = color;
    document.getElementById(temp2).style.backgroundColor = color;
  }
}

function tick(){
  if(active == 1){
    timer++;

    let r_num = Math.floor(Math.random() * (noteCount + 1));

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
              score--;
              combo = 0;
              document.getElementById("combo").innerHTML = 0;
      
              document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Oof!</span>";
              missed++;
            }
            if(line_2 == true){
              line_2 = false;
              score--;
              combo = 0;
              document.getElementById("combo").innerHTML = 0;
      
              document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Oof!</span>";
              missed++;
            }
            if(line_3 == true){
              line_3 = false;
              score--;
              combo = 0;
              document.getElementById("combo").innerHTML = 0;
      
              document.getElementById("timing").innerHTML = "<span style=\"color: Crimson\">Oof!</span>";
              missed++;
            }
            if(line_4 == true){
              line_4 = false;
              score--;
              combo = 0;
              document.getElementById("combo").innerHTML = 0;
      
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

  health.style.display = "none";
  document.getElementById("restart").style.visibility = "visible";
  score = Math.round(100*(((performance.now() - start_time)*hit)/(60*(missed+bad_timing)))/100)
  document.getElementById("score-screen").style.display = "block ";
  document.getElementById("accuracy").innerHTML = Math.round(100*((hit/total_notes)*100)/100) + "%";
  document.getElementById("hit").innerHTML = hit;
  document.getElementById("missed").innerHTML = missed;
  document.getElementById("bad-timing").innerHTML = bad_timing;
  document.getElementById("hicombo").innerHTML = hicombo;
}

function restart(){
  location.reload(true);
}
