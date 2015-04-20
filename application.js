$(document).ready(function () {
    $('.red').hover(function () {
        $(this).addClass('green');
    }, function () {
        $(this).removeClass('green');
    });


    $('#btn-bg').click(function () {
        $('body').addClass('bg');
    });


    $(document).dblclick(function () {
        alert('double clicked it');
    });


    $('img').click(function () {
      for (var i = 0; i < 1000; i++) {
      $('#hotdog').append('<img src="https://t0.gstatic.com/images?q=tbn:ANd9GcS59Hex-EQDMjCNGefJVQQYiES4Oy0xjExi6HuKJAgvWwSd_ExtBw" height="42" width="42" />');
    }
    });


    $('#up').click(function (){
      $('p').slideUp();
    });


    $('#list').click(function () {
      $(this.children[0]).css("color", "red");
      $(this.children[1]).css("color", "green");
      $(this.children[2]).css("color", "blue");
    });


    $('#random').click(function () {
      var colors = ['green', 'red', 'blue', 'purple', 'orange', 'pink'];
      var rand = colors[Math.floor(Math.random() * colors.length)];
      $(this).css("color", rand);
   });

   $('#number').click(function () {
     $(this).text("");
     for (var i = 0; i < 50; i++) {
     var rand = Math.floor(Math.random() * 1000);
     $(this).append(rand + " ");
    };
   });

});
