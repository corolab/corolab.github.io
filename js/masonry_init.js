var $grid = $('.phd-students').masonry({
    horizontalOrder: true,
    initLayout: true,
});

$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});
