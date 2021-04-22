const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  body = document.querySelector("body").style;
  header = document.querySelector("header").style;
  sideMenu = document.querySelector(".sideMenu").style;

  if (mood) {
    body.backgroundColor = "lightcoral";
    header.backgroundColor = "lightcoral";
    sideMenu.backgroundColor = "lightcoral";
  } else {
    body.backgroundColor = "sandybrown";
    header.backgroundColor = "sandybrown";
    sideMenu.backgroundColor = "sandybrown";
  }
};
