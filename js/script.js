$(document).ready(
  function(){
    // $(".parent").mouseenter(
    //   function(){
    //     $(this).children().addClass("flex");
    //   }
    // )
    $(".parent").mouseleave(
      function(){
        $(this).children().removeClass("flex");
      }
    )
    $(".parent").click(
      function () {
        $(this).children().addClass("flex")
      }
    );
  }
);
