$(document).ready(function () {
    var label_id = getUrlParameter('label_id');
    var breadcrumb_label = getUrlParameter('breadcrumb_label');
    filterResults(label_id, breadcrumb_label);

    $('.breadcrumbs #breadcrumb-value').text(breadcrumb_label)
});
function filterResults(label_id, breadcrumb_label) {
    $("#results > *").css('display', 'none');
    $("#results > #" + label_id).css('display', '');
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};