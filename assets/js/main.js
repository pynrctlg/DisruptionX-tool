//loader
function loading(status) {
  if (status == true) {
    $(".loadingOverlay").addClass("active");
    $("html").css("overflow", "hidden");
  } else if (!status) {
    $(".loadingOverlay").removeClass("active");
    $("html").css("overflow-y", "auto");
  }
}

$(document).ready(function () {
  $("body").on("click", ".popupButton", function () {
    var elem = $(this).attr("attr-popup-id");
    var title = $(this).attr("attr-title");
    var text = $("#" + elem + "").html();
    Swal.fire({
      title: title,
      html: text,
      showCancelButton: false,
      showConfirmButton: false,
      confirmButtonText: "TAMAM",
      showCloseButton: true,
      showClass: {
        backdrop: "text_popup",
      },
      closeButtonHtml: '<i class="fa-solid fa-xmark"></i>',
    });
  });
  $("body").on("click", ".start-question-button", function () {
    $(".start").hide();
    $(".question").fadeTo("slow", 1);
    $("body").addClass("start-question");
  });
  $("body").on("change", ".sec1-brand", function () {
    var value = $(this).parents(".step").find(".sec1-brand").val();
    var parent = $(this).parents(".step").find(".animation1");
    if (value !== "0") {
      // $(".animation1, .continue").fadeTo("slow", 1);
      $(".continue").fadeTo("slow", 1);
      $(parent).fadeTo("slow", 1);
    }
  });

  $("body").on("click", ".continue", function () {
    var stepVal = $(this).attr("data-attr");
    stepVal++;
    $(this).attr("data-attr", stepVal);
    $(".step").hide();
    $(".step").removeClass("active");
    $('.step[data-step="' + stepVal + '"]').fadeTo("slow", 1);
    $('.step[data-step="' + stepVal + '"]').addClass("active");
    changeText($(".TypeEffect.active p"), $(".TypeEffect.active .p2"), 30);
    if (stepVal === 9) {
      loading(true);
      setTimeout(() => {
        $(".loadingOverlay span")
          .text("Backslash Edges - 40 Cultural Trends")
          .fadeTo("slow", 1);
        setTimeout(() => {
          $(".loadingOverlay span")
            .text(
              "Disruption Index - Trend Relevance scores based on target region & audience"
            )
            .fadeTo("slow", 1);
          setTimeout(() => {
            loading(false);
          }, 3000);
        }, 4000);
      }, 5000);
      stepVal++;
    $(this).attr("data-attr", stepVal);
      $(".step").hide();
      $(".step").removeClass("active");
      $('.step[data-step="10"]').fadeTo("slow", 1);
      $('.step[data-step="10"]').addClass("active");
    }
    if (stepVal === 10) {
       $(".continue").hide();
    } else if (stepVal === 11) {
      $(".radio-checkbox label").removeClass("active");
      $('.step.radio-checkbox[data-step="10"]').remove();
      var checked = $(this).is(":checked");
    } else if (stepVal === 12) {
      $(".continue").hide();
    }
    return false;
  });
  $("body").on("change", ".radio-checkbox select", function () {
    var value = $(this).parents(".step").find(".sec1-brand").val();
    var parent = $(this).parents(".step").find(".animation1");
    if (value !== "0") {
      $(parent).fadeTo("slow", 1);
    }
  });
  $("body").on("change", ".radio-checkbox.active input", function () {
    var checked = $(this).is(":checked");
    if (checked) {
      $(".radio-checkbox label").removeClass("active");
      $(".continue").fadeTo("slow", 1);
      $(this).next().find('.sub').addClass("active");

      if ($(".continue").attr("data-attr") === "10") {
        
        $(".append-html .append-html-in").remove();
        var htmlAppend = $(this).next('.sub-content').html();
        
        $(".append-html").append(
          "<div class='append-html-in'>" + htmlAppend + "</div>"
        );
      }
    }
  });
});

function changeText(cont1, cont2, speed) {
  var contents = $(cont1)
    .contents()
    .map(function () {
      if (this.nodeType == 3) {
        if ($.trim(this.nodeValue).length) {
          return this.nodeValue.split("");
        }
      } else {
        return $(this).clone().get();
      }
    })
    .get();
  var i = 0;

  function show() {
    if (i < contents.length) {
      cont2.append(contents[i]);
      i = i + 1;
    } else {
      clearInterval(Otimer);
    }
    if ($(".TypeEffect.active")) {
      $(".TypeEffect.active .p2").scrollTop(
        $(".TypeEffect.active .p2").scrollHeight
      );
      return false;
    }
  }
  var Otimer = setInterval(show, speed);
}
