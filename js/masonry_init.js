var $phdGrid = $('.phd-students').masonry({
    itemSelector: '.phd-student-item',
    horizontalOrder: true,
    initLayout: true,
});

var $alumniGrid = $('.alumni').masonry({
    horizontalOrder: true,
    initLayout: true,
});

var $visitingScholarGrid = $('.visiting-scholar').masonry({
    horizontalOrder: true,
    initLayout: true,
});

$phdGrid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});

$alumniGrid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});

$visitingScholarGrid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});
