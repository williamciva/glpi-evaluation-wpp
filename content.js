(window.onclick = function () {
    alert("fui chamado!!")
  document.querySelectorAll("form").forEach((e) => {
    if (e.action == window.location.origin + "/front/itilsolution.form.php") {
      e.addEventListener("submit", () => {
        var iframe = document.querySelector("iframe").contentWindow.document;
        let solution = iframe.querySelector("#tinymce");
        alert("chamado resolvido com sucesso \n" + solution);
      });
    }
  });
})();
