window.onload = function () {
  const button = document.getElementById("bonk");
  const image = document.getElementById("bonk-img");

  function startBonk() {
    const bonk = new Audio("res/bonk.mp3");
    bonk.play();
    image.src = "res/frame2.jpg";
  }

  function endBonk() {
    image.src = "res/frame1.jpg";
  }

  button.onpointerdown = function () {
    startBonk();
  };
  button.onpointerup = function () {
    endBonk();
  };

  document.onkeydown = function (e) {
    if (e.code == "Space") {
      startBonk();
    }
  };
  document.onkeyup = function (e) {
    if (e.code == "Space") {
      endBonk();
    }
  };
};
