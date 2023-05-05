$("path").hover(function(e) {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });
  
  $("path").mouseleave(function(e) {
    $('#info-box').css('display','none');
  });
  
  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  }).mouseover();
  
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(ios) {
    $('a').on('click touchend', function() {
      var link = $(this).attr('href');
      window.open(link,'_blank');
      return false;
    });
  }

var pathlist = $("svg").find("path");
var color1 = '#';
var color2 = '#';
var color3 = '#';
var color4 = '#';
var color5 = '#';
var color6 = '#';
var color7 = '#';

  $("#densitybutton").on("click", function(){

    $(pathlist).each(function() {
      var currentpath = $(this).attr("id");
      var pathdensity = $(this).attr("density");
      var densitycolor = color1;
      if (density > 10){
        densitycolor = color7;
      } else if (density > 8){
        densitycolor = color6;
      } else if (density > 6){
        densitycolor = color5;
      } else if (density > 4){
        densitycolor = color4;
      } else if (density > 2){
        densitycolor = color3;
      } else if (density > 0){
        densitycolor = color2;
      } else {
        densitycolor = color1;
      }
      $(this).css('fill', densitycolor);
    });
  });

