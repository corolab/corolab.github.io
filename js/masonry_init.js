var $grid = $('.phd-students').masonry({
    itemSelector: '.members-item',
    horizontalOrder: true,
    initLayout: true,
});

$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});
