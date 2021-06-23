$(document).ready(
    function() {
        $(".major").animate({
            marginLeft: '600px',
            width: '400px',
            height: '400px',
            borderRadius: '200px',
            padding: '100px',
        }, 1000);
        $(".major ul li").delay(1000).fadeIn(1000);
        $(".serious").animate({
            marginLeft: '600px',
            width: '400px',
            height: '400px',
            borderRadius: '200px',
            padding: '100px',
        }, 1000);
        $(".serious ul li").delay(1000).fadeIn(1000);
        $(".less").animate({
            marginRight: '510px',
            width: '400px',
            height: '400px',
            borderRadius: '200px',
            padding: '50px',
            paddingLeft: '80px',
        }, 1000);
        $(".less ul li").delay(1000).fadeIn(1000);
    })