$(document).ready(function() {
    var links = [
		{
            name: 'BOLTON - 02.12.2023',
            link: 'https://www.songkick.com/concerts/41466793-lil-liar-at-alma-inn?utm_source=8123&utm_medium=partner&utm_content=c80e1b72523a3dc5fd5b8770bacab9c3&utm_campaign=entity'
        },
    ];

    for(var i in links) {
        var link = links[i];

        $('#marquee').append('<a href="' + link.link + '" target="_blank">' + link.name + '</a>');

        var link = $('#marquee').children('a').last();

        if(i != links.length - 1) {
            $('#marquee').append(' · ');
        }
    }

    $('#marquee').marquee({
        duration: 20000,
        gap: 400,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
});
