
window.onload = startAnimation;
function startAnimation() {
  $("img").first().addClass("anim4");
  $("h1").first().addClass("anim2");
  $("h2").first().addClass("anim3");
}

$("a.nav-link").hover(function(){
  $(this).addClass("anim1");

}, function() {
  $(this).removeClass("anim1");
});
