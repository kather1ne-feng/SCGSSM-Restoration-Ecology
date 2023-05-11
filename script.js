var pathlist = $("svg").find("path");
$(pathlist).each(function() {
    $(this).css('fill', '#0000ffff');
    $(this).css('fill-opacity', 0);
});

var richnessA = "#810f7c";
var richnessB = "#8856a7";
var richnessC = "#8c96c6";
var richnessD = "#b3cde3";
var richnessE = "#edf8fb";

var evennessA = "#0868ac";
var evennessB = "#43a2ca";
var evennessC = "#7bccc4";
var evennessD = "#bae4bc";
var evennessE = "#f0f9e8";

var diversityA = "#b30000";
var diversityB = "#e34a33";
var diversityC = "#fc8d59";
var diversityD = "#fdcc8a";
var diversityE = "#fef0d9";

var clicked = false;

$('#richnessButton').click(function(){
  clicked = true;

  $(pathlist).each(function() {
    if ($(this).attr('richness') > 16) {
      $(this).css('fill', richnessA);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('richness') > 14) {
      $(this).css('fill', richnessB);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('richness') > 12) {
      $(this).css('fill', richnessC);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('richness') > 10) {
      $(this).css('fill', richnessD);
      $(this).css('fill-opacity', 1);
    }
    else {
      $(this).css('fill', richnessE);
      $(this).css('fill-opacity', 1);
    }
  });

  $('#cA').attr("src", 'assets/rA.png');
  $('#cB').attr("src", 'assets/rB.png');
  $('#cC').attr("src", 'assets/rC.png');
  $('#cD').attr("src", 'assets/rD.png');
  $('#cE').attr("src", 'assets/rE.png');

  $('#tA').html("&gt; 16");
  $('#tB').html("16-15");
  $('#tC').html("14-13");
  $('#tD').html("12-11");
  $('#tE').html("&#8804; 10");

  $("#datadesc").html("Species richness describes the number of species in the particular plot section. This number ranges from 7 to 22 different types of plants in each sub-plot.");

  $('.color').css('visibility', 'visible');
});

$('#evennessButton').click(function(){
  clicked = true;

    $(pathlist).each(function() {
    if ($(this).attr('evenness') > 0.820) {
      $(this).css('fill', evennessA);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('evenness') > 0.780) {
      $(this).css('fill', evennessB);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('evenness') > 0.720) {
      $(this).css('fill', evennessC);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('evenness') > 0.650) {
      $(this).css('fill', evennessD);
      $(this).css('fill-opacity', 1);
    }
    else {
      $(this).css('fill', evennessE);
      $(this).css('fill-opacity', 1);
    }
  });

  $('#cA').attr("src", 'assets/eA.png');
  $('#cB').attr("src", 'assets/eB.png');
  $('#cC').attr("src", 'assets/eC.png');
  $('#cD').attr("src", 'assets/eD.png');
  $('#cE').attr("src", 'assets/eE.png');


  $('#tA').html("&gt; 0.820");
  $('#tB').html("0.820-0.781");
  $('#tC').html("0.780-0.721");
  $('#tD').html("0.720-0.651");
  $('#tE').html("&#8804; 0.650");

  $("#datadesc").html("Species evenness describes the distribution of relative species in a particular plot section. Evenness ranges from 0-1, with 0 meaning there is no evenness and 1 meaning complete evenness. Complete evenness is where all species share the same relative proportion.");
  $('.color').css('visibility', 'visible');
});

$('#diversityButton').click(function(){
clicked = true;
    $(pathlist).each(function() {
    if ($(this).attr('diversity') > 2.200) {
      $(this).css('fill', diversityA);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('diversity') > 2) {
      $(this).css('fill', diversityB);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('diversity') > 1.85) {
      $(this).css('fill', diversityC);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('diversity') > 1.75) {
      $(this).css('fill', diversityD);
      $(this).css('fill-opacity', 1);
    }
    else {
      $(this).css('fill', diversityE);
      $(this).css('fill-opacity', 1);
    }
  });

  $('#cA').attr("src", 'assets/dA.png');
  $('#cB').attr("src", 'assets/dB.png');
  $('#cC').attr("src", 'assets/dC.png');
  $('#cD').attr("src", 'assets/dD.png');
  $('#cE').attr("src", 'assets/dE.png');

  $('#tA').html("&gt; 2.200");
  $('#tB').html("2.200-2.001");
  $('#tC').html("2.000-1.851");
  $('#tD').html("1.850-1.751");
  $('#tE').html("&#8804; 1.750");

  $("#datadesc").html("The Shannon Diversity Index describes the diversity of species in a particular plot section. It combines species richness and evenness. The higher the index value is, the more diverse a community is.");

  $('.color').css('visibility', 'visible');
});

$("#clear").click(function(){
  $(pathlist).each(function(){
    $(this).css('fill-opacity', 0);
    clicked = false;
  })

  $('#cA').attr("src", 'assets/rA.png');
  $('#cB').attr("src", 'assets/rB.png');
  $('#cC').attr("src", 'assets/rC.png');
  $('#cD').attr("src", 'assets/rD.png');
  $('#cE').attr("src", 'assets/rE.png');

  $('#tA').html("22-20");
  $('#tB').html("19-17");
  $('#tC').html("16-14");
  $('#tD').html("13-11");
  $('#tE').html("10-7");

  $("#datadesc").html("");


  $('.color').css('visibility', 'hidden');
});
$("path").hover(function(e) {
  if (clicked == false){
    $(this).css('fill', '#C7C7A6');
    $(this).css('fill-opacity', 0.5);
  }
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });
  
  $("path").mouseleave(function(e) {
    $('#info-box').css('display','none');
    if (clicked == false){
    $(this).css('fill-opacity', 0);
    }
  });
  
  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/3);
  }).mouseover();
  
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(ios) {
    $('a').on('click touchend', function() {
      var link = $(this).attr('href');
      window.open(link,'_blank');
      return false;
    });
  }
