$(function(){
    var urlSearchParams  = new URLSearchParams(window.location.search);
    if(urlSearchParams.has('area')){
        let area = urlSearchParams.get('area');
        $("input:checkbox").each(function( index ){
            if($(this).attr('id') === `checkbox_${area}`){
                $(this).prop('checked',true);
            }
        })
    }
    
})