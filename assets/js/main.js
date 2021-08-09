
// TOOLTIP
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(window).scroll(function(){
    if ($(this).scrollTop() > 1) {
       $('header').addClass('scrollTop');
    } else {
       $('header').removeClass('scrollTop');
    }
});
