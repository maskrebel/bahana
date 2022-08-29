$(document).ready(function()
{
  $.get("static/templates/about-us.html", function(html_string)
   {
      $("#header").html(html_string);
   });
});