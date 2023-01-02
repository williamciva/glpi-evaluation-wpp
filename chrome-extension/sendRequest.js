const onResolving = () => {
  const solution = document.getElementById('tinymce').innerHTML

  alert("chamado resolvido com sucesso \n" + solution)
}



button = document.getElementsByClassName("vsubmit")["add"]
alert(button)
button.addEventListener("click", onResolving())