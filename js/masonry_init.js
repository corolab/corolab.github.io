var $grid = $('.phd-students').masonry({
    itemSelector: '.phd-student-item',
    horizontalOrder: true,
    initLayout: true,
});

$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});
