"use strict";

$(document).ready(function () {
  var win = false;
  var started = false;
  $("#start")
      .click(function () {
          reset();
      });
  $(".boundary")
      .mouseover(function () {
          if(started) {
              $(".boundary").addClass('youlose');
              win = false;
              changeStatus("You lost :[");
          }
          started = false;
      });
  $("#end")
      .mouseover(function () {
          if(started) {
              if (win) {
                  changeStatus("You win. :]");
              }
          }
          started = false;
      });
  $('#maze').mouseleave(function () {
      if(started) {
          $(".boundary").addClass('youlose');
          win = false;
          changeStatus("You lost :[");
      }
      started = false;
  });

  function reset() {
      win = true;
      started = true;
      $(".boundary").removeClass('youlose');
      changeStatus("Started");
  }

  function changeStatus(text) {
      $('#status').text(text);
  }
});