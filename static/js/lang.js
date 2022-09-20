$(function (){
      var lang = localStorage.getItem('lang');
      if (!lang){
          getContent("id");
      }
      else{
          getContent(lang);
      }
});
function getContent(lang){
    if (!localStorage.getItem("attribute")){
          $.getJSON( "static/lang/lang.json", function() {
            }).done(function(data) {
                localStorage.setItem("attribute", JSON.stringify(data));
            }).fail(function(err) {
                alert(err);
            });
      }

    $("#lang_id").removeClass('active');
    $("#lang_en").removeClass('active');
    localStorage.setItem('lang', lang);
    if (lang =='id'){
        $("#lang_id").addClass('active');
    }else{
        $("#lang_en").addClass('active');
    }
    var attribute = JSON.parse(localStorage.getItem("attribute"));
    var path = window.location.pathname.split('/');
    path = path[path.length - 1].replace('.html','');
    if (!path || path == 'index'){
        path = "AboutUs";
    }
    $.each(attribute[lang]["Header"], function(key,_) {
        $(`.${key}`).html(attribute[lang]["Header"][key]);
    });
    $.each(attribute[lang][path], function(key,_) {
        $(`.${key}`).html(attribute[lang][path][key]);
    });
}