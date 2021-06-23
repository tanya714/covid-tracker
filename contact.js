//running an infinite loop on jquery animation
$(document).ready(function() {
    function yo() {
        $(".center").animate({
            marginLeft: '1600px',
        }, 5000, 'linear', function() {
            $(".center").animate({
                marginLeft: '-200px',
            }, -10000, yo)
        });
    }
    yo()
});