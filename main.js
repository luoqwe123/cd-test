
function $(el) {
  const elArr = document.querySelectorAll(el);
  if (elArr.length > 1) {
    return Array.from(elArr);
  } else {
    return elArr[0];
  }
}

(() => {
  let h1 = $('h1');
  let btn = $("button");
  btn[0].onclick = () => {
    h1.style.color = "blue";
  };
  btn[1].onclick = () => {
    h1.style.color = "black";
  };
  console.log(import.meta.env.VITE_GLOB_API_URL);
  console.log(111)
})();

