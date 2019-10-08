

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
    for (let i = 0; i < 8; i++) {
    nodes[i].classList.add(ACTIVE_CLS);
    document.getElementById("info").innerHTML = "8 people out of 100  experience neuropathy";


  }
}

function change2() {
  const nodes = [...document.querySelectorAll(`.${NODE_CLS}`)];
  for (let i = 0; i < 15; i++) {
  nodes[i].classList.add(ACTIVE_CLS);
  document.getElementById("info").innerHTML = "15 people out of 100  experience appetite loss";


  }
}

function change3() {
  const nodes = [...document.querySelectorAll(`.${NODE_CLS}`)];
  for (let i = 0; i < 20; i++) {
  nodes[i].classList.add(ACTIVE_CLS);
  document.getElementById("info").innerHTML = "20 people out of 100  experience vommiting";


  }
}

function change4() {
  const nodes = [...document.querySelectorAll(`.${NODE_CLS}`)];
  for (let i = 0; i < 29; i++) {
  nodes[i].classList.add(ACTIVE_CLS);
  document.getElementById("info").innerHTML = "29 people out of 100  experience insomnia";


  }
}

function change5() {
  const nodes = [...document.querySelectorAll(`.${NODE_CLS}`)];
  for (let i = 0; i < 42; i++) {
  nodes[i].classList.add(ACTIVE_CLS);
  document.getElementById("info").innerHTML = "42 people out of 100  experience diahrrea";


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
