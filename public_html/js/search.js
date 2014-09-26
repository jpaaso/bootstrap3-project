var searchField = $('#search-field');

$('#search-btn').click(function() {
    if (searchField.width() > 0) {
        hideField();
    } else {
        showField();
    }
});

/*$('html').click(function() {
    hideField();
});

searchField.click(function(event){
    event.stopPropagation();
});*/

function showField() {
    searchField.animate({width: "280px", borderWidth: "1px"});
}
function hideField() {
    searchField.animate({width: "0px", borderWidth: "0px"});
}
