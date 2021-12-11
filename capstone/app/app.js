$("a").click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
  });

  var x = document.getElementById('dropMenu');

  $(".navToggle").click(function(){

    this.classList.toggle('opened');

    if (x.style.display == 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
  })


  function initListeners(){
    $("#ltcButtons a").click(function(e){
        e.preventDefault();
        console.log("Clicked")
        var btnID = this.id;
        MODEL.getInsurance(btnID);
    });

    $("#riskButtons a").click(function(e){
      e.preventDefault();
      console.log("Clicked")
      var btnID = this.id;
      MODEL.getRisk(btnID);
  });

    $("#ltcOptionsButtons a").click(function(e){
      e.preventDefault();
      console.log("Clicked")
      var btnID = this.id;
      MODEL.getOption(btnID);
  });
}



function initPages(){
    

    $.get('views/aboutLtc/whatIsLTC.html', function(data){
        $("#ltcTextContain").html(data);
        console.log("working")
    });

    $.get('views/riskFactors/riskfactor.html', function(data){
      $("#riskTextContain").html(data);
      console.log("working")
  });

  $.get('views/ltcOptions/longterm.html', function(data){
    $("#ltcOptionsText").html(data);
    console.log("working")
    initListeners();
});
}



$(function () {
  $(document).scroll(function () {
    var $nav = $(".navContentHolder");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$(document).ready(function(){
    initPages();
}); 