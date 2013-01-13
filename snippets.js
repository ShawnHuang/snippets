function load_snippets(result){
  result=result.replace(/[\n\r]/g,'\n<br />')
  result=result.replace(/(#)(.*)(\n)/g,'\<\/div\>\<div class="type"\><h3>$2</h3>');
  result+="\<\/div\>";
  result=result.replace(/^(\<\/div\>)([/s/S]*)/g,'');
  //result=result.replace(/(qqqq)([\s\S]*)(bbbb)/gm,'tet');
  $('#test').html(result)
}
function load_options(result){
  result=result.replace(/(.*)(snippets)/g,'<option>$1$2</option>');
  $('#select').html(result);
}
$(function(){
   $('#select').load("./directory",load_options);
   $('#select').change(function () {
     var filename = $(this).children('option:selected').val();
     $('#list-snippets').load("./snippets/"+filename,load_snippets);
   });
});
