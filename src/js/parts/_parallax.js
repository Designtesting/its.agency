$(document).ready(function() {
    var scrollorama = $.scrollorama({
        blocks:'.scrollblock'
    });

    // scrollorama
    //     .animate('#parallax4',{ delay: -300, duration: 600, property:'top', start:0, end:-100 });

    scrollorama
        .animate('#parallax1',{ delay: -500, duration: 600, property:'top', start:0, end:120 })
        .animate('#parallax3',{ delay: -400, duration: 600, property:'top', start:0, end:-100 })
        .animate('#parallax5',{ delay: -300, duration: 600, property:'top', start:0, end:100 })
        .animate('#parallax2',{ delay: -600, duration: 600, property:'top', start:0, end:-100 });
});