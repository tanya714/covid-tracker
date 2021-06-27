//running an infinite loop on jquery animation
$(document).ready(function() {
    function yo() {
        $(".center").animate({
            marginLeft: '1500px',
        }, 5000, 'linear', function() {
            $(".center").animate({
                marginLeft: '-300px',
            }, -10000, yo);
            $(".center").animate({
                opacity: '100%'
            })
        });
    }
    yo()
});