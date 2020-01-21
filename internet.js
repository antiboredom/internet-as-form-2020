function updateTitle() {
  const title = document.title + " - ";
  const refresh = 100;
  let offset = 0;

  function update() {
    document.title = title.substring(offset) + title.substring(0, offset);

    offset++;
    if (offset >= title.length) offset = 0;

    setTimeout(() => {
      window.requestAnimationFrame(update);
    }, refresh);
  }

  window.requestAnimationFrame(update);
}

// function setIframe() {
//   setTimeout(() => {
//     document.querySelector('iframe').src = "index.html?a=" + Math.random();
//   }, 1000);
// }

updateTitle();
// setIframe();
