function getArticleGenerator(articles) {
  function showNext() {
    let text = articles.shift();
    if (text != undefined) {
      let field = document.getElementById("content");
      let p = document.createElement("article");
      p.textContent = text;
      field.appendChild(p);
    }
  }

  return showNext;
}
