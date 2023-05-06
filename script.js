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

  $("#datadesc").html("Species richness describes the number of species in the particular plot section.");

  $('.color').css('visibility', 'visible');
});

$('#evennessButton').click(function(){
  clicked = true;

    $(pathlist).each(function() {
    if ($(this).attr('evenness') > 0.7974) {
      $(this).css('fill', evennessA);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('evenness') > 0.7178) {
      $(this).css('fill', evennessB);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('evenness') > 0.6382) {
      $(this).css('fill', evennessC);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('evenness') > 0.5586) {
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

  $('#tA').html("0.877-0.7975");
  $('#tB').html("0.7974-0.7179");
  $('#tC').html("0.7178-0.6383");
  $('#tD').html("0.6382-0.5587");
  $('#tE').html("0.5586-0.479");

  $("#datadesc").html("Species evenness describes the distribution of abundance across species in a particular plot section.");
  $('.color').css('visibility', 'visible');
});

$('#diversityButton').click(function(){
clicked = true;
    $(pathlist).each(function() {
    if ($(this).attr('diversity') > 2.0989) {
      $(this).css('fill', diversityA);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('diversity') > 1.8886) {
      $(this).css('fill', diversityB);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('diversity') > 1.6784) {
      $(this).css('fill', diversityC);
      $(this).css('fill-opacity', 1);
    }
    else if ($(this).attr('diversity') > 1.4682) {
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

  $('#tA').html("2.309-2.0989");
  $('#tB').html("2.0989-1.8887");
  $('#tC').html("1.8886-1.6784");
  $('#tD').html("1.6783-1.4682");
  $('#tE').html("1.4681-1.258");

  $("#datadesc").html("The Shannon Diversity Index describes the diversity of species in a particular plot section. It combines species richness and evenness.");

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

