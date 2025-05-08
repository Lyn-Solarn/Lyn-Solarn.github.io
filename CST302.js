var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var content = this.parentElement.nextElementSibling;
    content.classList.toggle("open");
  });
}