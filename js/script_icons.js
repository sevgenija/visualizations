
const template = document.getElementById('chel');
const container = document.querySelector('.container');

const NODE_CLS = 'js-chel';
const ACTIVE_CLS = 'active';

for (let i = 0; i < 100; i++) {
  const chelNode = document.importNode(template, true);
  container.appendChild(chelNode.content)
}


  function change() {
    const nodes = [...document.querySelectorAll(`.${NODE_CLS}`)];
    for (let i = 0; i < 4; i++) {
    nodes[i].classList.add(ACTIVE_CLS);
    document.getElementById("info").innerHTML = "4 people out of 100  experience insomnia";
  }
}


function change2() {
  const nodes = [...document.querySelectorAll(`.${NODE_CLS}`)];
  for (let i = 0; i < 7; i++) {
  nodes[i].classList.add(ACTIVE_CLS);
  document.getElementById("info").innerHTML = "7 people out of 100  experience fatigue";


  }
}

function change3() {
  const nodes = [...document.querySelectorAll(`.${NODE_CLS}`)];
  for (let i = 0; i < 10; i++) {
  nodes[i].classList.add(ACTIVE_CLS);
  document.getElementById("info").innerHTML = "10 people out of 100  experience appetite loss";


  }
}

function change4() {
  const nodes = [...document.querySelectorAll(`.${NODE_CLS}`)];
  for (let i = 0; i < 14; i++) {
  nodes[i].classList.add(ACTIVE_CLS);
  document.getElementById("info").innerHTML = "14 people out of 100  experience diarrhea";


  }
}

function change5() {
  const nodes = [...document.querySelectorAll(`.${NODE_CLS}`)];
  for (let i = 0; i < 19; i++) {
  nodes[i].classList.add(ACTIVE_CLS);
  document.getElementById("info").innerHTML = "19 people out of 100  experience nausea/vomiting";


  }
}

document.getElementById("reset").onclick = function refreshPage(){
    window.location.reload();
}


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$("#button").click(function() {
  $('.transform').toggleClass('transform-active');
});

$("#button").click(function() {
  $('.transform1').toggleClass('transform1-active');
});

$("#button").click(function() {
  $('.transform2').toggleClass('transform2-active');
});

$("#button").click(function() {
  $('.transform3').toggleClass('transform3-active');
});

$("#button").click(function() {
  $('.transform4').toggleClass('transform4-active');
});
