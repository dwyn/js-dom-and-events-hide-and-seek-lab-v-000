function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested div.target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML, 10) + n)
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
