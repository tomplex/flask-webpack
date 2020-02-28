import _ from 'lodash'

function component() {
  // const element = document.createElement('div');
  const link  = document.createElement('a');
  link.setAttribute('href', '/home');
  link.innerHTML = "go home!";
  return link;
}

document.body.appendChild(component());