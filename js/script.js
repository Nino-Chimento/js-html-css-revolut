// $(document).ready(
//   function(){
//     $(".parent").mouseenter(
//       function(){
//         $(this).children().addClass("flex");
//       }
//     )
//     $(".parent").mouseleave(
//       function(){
//         $(this).children().removeClass("flex");
//       }
//     )
//     $("body").click(
//       function () {
//         $(".parent < ul").removeClass("flex")
//       }
//     );
//   }
// );
$(document).ready(
  function(){
    $(".parent").mouseenter(
      function(){
        var active = $(".flex");
        active.removeClass("flex")
        $(this).children().addClass("flex");
      }
    )
    $("body").click(
      function(){
        console.log("n");
        $(".flex").removeClass("flex")
      }
    );

  }
);
