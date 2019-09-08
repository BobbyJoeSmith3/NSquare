var prev_media_index;

var media_lib = [
    ['<a href="http://images.nintendolife.com/news/2013/01/nintendo_comes_out_on_top_in_consumer_experience_poll/attachment/0/large.jpg" target="_blank"><img src="http://images.nintendolife.com/news/2013/01/nintendo_comes_out_on_top_in_consumer_experience_poll/attachment/0/large.jpg" class="media_object" alt="kid and computer"></a>', '<a href="http://images.nintendolife.com/news/2013/01/nintendo_comes_out_on_top_in_consumer_experience_poll/attachment/0/large.jpg" class="note_object" target="_blank">http://images.nintendolife.com/news/2013/01/nintendo_comes_out_on_top_in_consumer_experience_poll/attachment/0/large.jpg</a>'],
    ['<a href="https://r.hswstatic.com/w_907/gif/podcasts/missedinhistory-podcasts-wp-content-uploads-sites-99-2016-06-Bayard-Rustin-1-P-Full.jpg"  target="_blank"><img src="https://r.hswstatic.com/w_907/gif/podcasts/missedinhistory-podcasts-wp-content-uploads-sites-99-2016-06-Bayard-Rustin-1-P-Full.jpg" class="media_object" alt="Bayard Rustin"></a>', '<a href="https://r.hswstatic.com/w_907/gif/podcasts/missedinhistory-podcasts-wp-content-uploads-sites-99-2016-06-Bayard-Rustin-1-P-Full.jpg" class="note_object" target="_blank">https://r.hswstatic.com/w_907/gif/podcasts/missedinhistory-podcasts-wp-content-uploads-sites-99-2016-06-Bayard-Rustin-1-P-Full.jpg</a>']
]

// Display media in media display section when user hovers over associated word
$(".media_trigger").mouseenter(function() {

    var media_index = $(this).attr("data-media-index");
    media_index = parseInt(media_index);
    // note: remove on deployment
    console.log(media_index);
    // PEE PEE PANTS CASA DI POOPI
    if (prev_media_index !== media_index) {
        $(".media_object").replaceWith(media_lib[media_index][0]);
        $(".note_object").replaceWith(media_lib[media_index][1]);
    }
    prev_media_index = media_index;
})

// Navigation scrolling
let navLinks = document.querySelectorAll("nav a");
let mainArticles = document.querySelectorAll(".content article");
let lastId;
let cur = [];

checkCurrent($(".content"));
/*$(".content").scroll(function() {
    let fromTop = $(this).scrollTop();
    console.log("content pane has scrolled: " + fromTop);
    navLinks.forEach(link => {
        let article = document.querySelector(link.hash);
        let adjustedOffsetTop = article.offsetTop - Math.round($(".title").outerHeight(true));

        // if (article.offsetTop <= fromTop &&
        //     article.offsetTop + article.offsetHeight > fromTop) {
        //         link.classList.add("current");
        //     } else {
        //         link.classList.remove("current");
        //     }
        if (adjustedOffsetTop <= fromTop &&
            adjustedOffsetTop + $(article).outerHeight(true) > fromTop) {
                link.classList.add("current");
            } else {
                link.classList.remove("current");
            }
    });
});*/

$(".content").scroll(function() {
    checkCurrent($(this));
})

function checkCurrent(elem) {
    let fromTop = $(elem).scrollTop();
    console.log("content pane has scrolled: " + fromTop);
    navLinks.forEach(link => {
        let article = document.querySelector(link.hash);
        let adjustedOffsetTop = article.offsetTop - Math.round($(".title").outerHeight(true));

        // if (article.offsetTop <= fromTop &&
        //     article.offsetTop + article.offsetHeight > fromTop) {
        //         link.classList.add("current");
        //     } else {
        //         link.classList.remove("current");
        //     }
        if (adjustedOffsetTop <= fromTop &&
            adjustedOffsetTop + $(article).outerHeight(true) > fromTop) {
                link.classList.add("current");
            } else {
                link.classList.remove("current");
            }
    });
}

function checker (article) {
    let offsetTop = document.querySelector(article).offsetTop;
    let offsetHeight = document.querySelector(article).offsetHeight;
    let elemScrollTop = $(article).scrollTop();
    let outerHeight = $(article).outerHeight();
    let outerHeightTrue = $(article).outerHeight(true);
    let fromT = $(".content").scrollTop();
    let adjustedOffsetTop = offsetTop - Math.round($(".title").outerHeight(true));
    console.log(`offsetTop: ${offsetTop}\nadjustedOffsetTop: ${adjustedOffsetTop}\noffsetHeight: ${offsetHeight}\ne.ScrollTop: ${elemScrollTop}\nouterHeight: ${outerHeight}\nouterHeightTrue: ${outerHeightTrue}\nfromTop: ${fromT}`);
    // console.log(
    //     `if (${offsetTop} <= ${fromT} && ${offsetTop} + ${offsetHeight} > ${fromT})...`
    // );
    console.log(
        `if (${adjustedOffsetTop} <= ${fromT} && ${adjustedOffsetTop} + ${offsetHeight} > ${fromT})...`
    );
}
