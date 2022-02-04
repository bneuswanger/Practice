const BUTTONS = document.querySelectorAll('button')

for (i of BUTTONS) {
    i.addEventListener('click', function() {
      alert("oh no, you clicked the button and got the annoying alert");
    });
  }