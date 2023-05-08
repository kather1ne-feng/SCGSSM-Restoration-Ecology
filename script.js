var pathlist = $("svg").find("path");
$(pathlist).each(function() {
    $(this).css('fill', '#0000ffff');
    $(this).css('fill-opacity', 0);
    // if ($(this).attr('richness') == 14) {
    //   $(this).css('fill', 'blue');
    //   $(this).css('fill-opacity', 1);
    // }
});
var richnessA = "#10007a";
var richnessB = "#4e2693";
var richnessC = "#7444a9";
var richnessD = "#9460bc";
var richnessE = "#b37bcf";

var evennessA = "#296d51";
var evennessB = "#4e856f";
var evennessC = "#719e8e";
var evennessD = "#97bab1";
var evennessE = "#bfd8d7";

var diversityA = "#006382";
var diversityB = "#437b99";
var diversityC = "#6b94b0";
var diversityD = "#96b0cb";
var diversityE = "#c3cfe8";

var clicked = false;

$('#richnessButton').click(function(){
  clicked = true;

  $(pathlist).each(function() {
    if ($(this).attr('richness') > 19) {
      $(this).css('fill', richnessA);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('richness') > 16) {
      $(this).css('fill', richnessB);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('richness') > 13) {
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

  $('#tA').html("22-20");
  $('#tB').html("19-17");
  $('#tC').html("16-14");
  $('#tD').html("13-11");
  $('#tE').html("10-7");

  $("#datadesc").html("Species richness describes the number of species in the particular plot section. This number ranges from 7 to 22 different types of plants in each sub-plot.");

  $('.color').css('visibility', 'visible');
});

$('#evennessButton').click(function(){
  clicked = true;

    $(pathlist).each(function() {
    if ($(this).attr('evenness') > 0.796) {
      $(this).css('fill', evennessA);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('evenness') > 0.711) {
      $(this).css('fill', evennessB);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('evenness') > 0.689) {
      $(this).css('fill', evennessC);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('evenness') > 0.558) {
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

  $('#tA').html("0.877-0.797");
  $('#tB').html("0.796-0.712");
  $('#tC').html("0.711-0.690");
  $('#tD').html("0.689-0.558");
  $('#tE').html("0.557-0.479");

  $("#datadesc").html("Species evenness describes the distribution of relative species in a particular plot section. Evenness ranges from 0-1, with 0 meaning there is no evenness and 1 meaning complete evenness. Complete evenness is where all species share the same relative proportion.");
  $('.color').css('visibility', 'visible');
});

$('#diversityButton').click(function(){
clicked = true;
    $(pathlist).each(function() {
    if ($(this).attr('diversity') > 2.089) {
      $(this).css('fill', diversityA);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('diversity') > 1.890) {
      $(this).css('fill', diversityB);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('diversity') > 1.685) {
      $(this).css('fill', diversityC);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('diversity') > 1.467) {
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

  $('#tA').html("2.309-2.090");
  $('#tB').html("2.089-1.891");
  $('#tC').html("1.890-1.686");
  $('#tD').html("1.685-1.468");
  $('#tE').html("1.467-1.258");

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


// var color1 = '#';
// var color2 = '#';
// var color3 = '#';
// var color4 = '#';
// var color5 = '#';
// var color6 = '#';
// var color7 = '#';

//   $("#densitybutton").on("click", function(){

//     $(pathlist).each(function() {
//       var currentpath = $(this).attr("id");
//       var pathdensity = $(this).attr("density");
//       var densitycolor = color1;
//       if (density > 10){
//         densitycolor = color7;
//       } else if (density > 8){
//         densitycolor = color6;
//       } else if (density > 6){
//         densitycolor = color5;
//       } else if (density > 4){
//         densitycolor = color4;
//       } else if (density > 2){
//         densitycolor = color3;
//       } else if (density > 0){
//         densitycolor = color2;
//       } else {
//         densitycolor = color1;
//       }
//       $(this).css('fill', densitycolor);
//     });
//   });

