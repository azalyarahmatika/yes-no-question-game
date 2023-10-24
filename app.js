function buttonHandler() {
  const roles = document.querySelectorAll('.role');
  const starts =  document.querySelectorAll('.start');

  roles.forEach((role) => {
    role.children[0].children[3].addEventListener('click', () => {
      if(role.children[0].classList.contains('back_transform')) {
        role.children[0].classList.remove('back_transform');
      }
      role.children[0].classList.add('transform');
      role.children[1].classList.add('visible');
    })

    role.children[1].children[1].addEventListener('click', () => {
      if(role.children[0].classList.contains('transform')) {
        role.children[0].classList.remove('transform');
      }
      role.children[0].classList.add('back_transform');
      role.children[1].classList.remove('visible');
    })

    role.children[0].children[1].addEventListener('click', () => {
        console.log(role.children[0].children[1])
        countdown(180, role.children[0].children[1]);
    })
  })
};

function countdown(seconds, element) {
  let currentSecond = seconds;

  const countdownInterval = setInterval(function() {
    if (currentSecond <= 0) {
      clearInterval(countdownInterval);
      element.innerHTML = "Time's OVER!";
    } else {
      element.innerHTML = currentSecond;
      currentSecond--;
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", buttonHandler);
