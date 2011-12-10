// remap jQuery to $
(function($){})(window.jQuery);

$(document).ready(function (){
  $('#arm').plaxify({"xRange":16,"yRange":16,"invert":true});
  $('#body').plaxify({"xRange":5,"yRange":5,"invert":true});
  $('#head').plaxify({"xRange":8,"yRange":2});
  $('#badge').plaxify({"xRange":5,"yRange":5,"invert":true});
  $.plax.enable();
});