$("h2").click (
  function(){
    $("img").each(function(i){
    if($(this).hasclass("active")){
    $(this).stop(true).animate({
    "margin-left":(i*300+"px"),
    "margin-top":(i*50+"px")
    },1000);
  }
  else{
    $(this).stop(true).animate({
      "margin-left":(i*0+"px"),
      "margin-top":(i*0+"px")
    },1000);
  });
});
