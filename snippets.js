function load_snippets(result){
  result=result.replace(/[\n\r]/g,'\n<br />')
               .replace(/(snippet)(.*)/g,'<hr><h5>$2</h5>')
               .replace(/(<\/h5>)/g,'</h5><div class="code">')
               .replace(/<hr>/g,'</div><hr>')
               .replace(/<\/div>/g,'</div></div>')
               .replace(/(#)([^\$|^\n]*)(\n<br \/>)/g,'\<\/div\>\<div class="type"\><h4>$2</h4>')
  result+="\<\/div\>";
  result=result.replace(/^(\<\/div\>)([/s/S]*)/g,'');
  
  result=result.replace(/(\$\{1)([^\}]*)(\})/g,'<span class="style1">$1$2$3</span>').replace(/(\$\{2)([^\}]*)(\})/g,'<span class="style2">$1$2$3</span>').replace(/(\$\{3)([^\}]*)(\})/g,'<span class="style3">$1$2$3</span>').replace(/(\$\{4)([^\}]*)(\})/g,'<span class="style4">$1$2$3</span>').replace(/(\$\{5)([^\}]*)(\})/g,'<span class="style5">$1$2$3</span>');


  $('#preview').html(result)
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
