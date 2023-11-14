var $phdGrid = $('.phd-students').masonry({
    itemSelector: '.phd-student-item',
    horizontalOrder: true,
    initLayout: true,
});

var $visitingScholarGrid = $('.visiting-scholar').masonry({
    itemSelector: '.visiting-scholar-item',
    horizontalOrder: true,
    initLayout: true,
});

var $alumniGrid = $('.alumni').masonry({
    itemSelector: '.alumni-item',
    horizontalOrder: true,
    initLayout: true,
});

$phdGrid.imagesLoaded().progress( function() {
    $phdGrid.masonry('layout');
});

$visitingScholarGrid.imagesLoaded().progress( function() {
    $visitingScholarGrid.masonry('layout');
});

$alumniGrid.imagesLoaded().progress( function() {
    $alumniGrid.masonry('layout');
});
