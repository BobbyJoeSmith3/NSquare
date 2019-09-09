var prev_media_index;

function mediaConfig(type, url, alt) {
    let htmlString;
    if (type == "image") {
        htmlString = `<div class="media_object"><a href="${url}" target="_blank"><img src="${url}" class="media_object_style" alt="${alt}"></a></div>`;
    } else if (type == "online_video") {
        htmlString = `<div class="media_object website"><a href="${url}" target="_blank"><iframe src="${url}" class="media_object_style" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a></div>`;
    } else if (type == "video") {
        htmlString = `<a href="${alt}" target="_blank"><video controls>
            <source src="${url}" type="video/mp4">
            Your browser does not support the video tag.
        </video></a>`;
    } else if (type == "website") {
        htmlString = `<div class="media_object website"><a href="${url}" target="_blank"><iframe src="${url}" class="media_object_style" frameborder="0"></iframe></a></div>`;
    }
    return htmlString;
}

function noteConfig(src, comm) {
    let htmlString = `<span class="note_object"><a href="${src}" class="note_object_style" target="_blank">${src}</a><br><br><p class="note_object_style">${comm}</p></span>`;
    return htmlString;
}

// Display media in media display section when user hovers over associated word
$(".media_trigger").mouseenter(function() {
    let media_index = $(this).attr("data-media-index");
    let media_type = $(this).attr("data-media-type");
    let media_url = $(this).attr("data-media-url");
    let media_alt = $(this).attr("data-media-alt");
    let media_source = $(this).attr("data-media-source");
    let media_note = $(this).attr("data-media-note");

    // Keep from reposting the same media if already displayed
    if (prev_media_index !== media_index) {
        $(".media_object").replaceWith(mediaConfig(media_type, media_url, media_alt));
        $(".note_object").replaceWith(noteConfig(media_source, media_note));
    }
    prev_media_index = media_index;
})


// Navigation scrolling
let navLinks = document.querySelectorAll("nav a");

// Check which part of document we are on when page loads
checkCurrent($(".content"));

$(".content").scroll(function() {
    checkCurrent($(this));
})

function checkCurrent(elem) {
    let fromTop = $(elem).scrollTop();
    // console.log("content pane has scrolled: " + fromTop);
    navLinks.forEach(link => {
        let article = document.querySelector(link.hash);
        let adjustedOffsetTop = article.offsetTop - Math.round($(".title").outerHeight(true));
        if (adjustedOffsetTop <= fromTop &&
            adjustedOffsetTop + Math.round($(article).outerHeight(true)) > fromTop) {
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
    let outerHeightTrue = Math.round($(article).outerHeight(true));
    let fromT = $(".content").scrollTop();
    let adjustedOffsetTop = offsetTop - Math.round($(".title").outerHeight(true));
    console.log(`offsetTop: ${offsetTop}\nadjustedOffsetTop: ${adjustedOffsetTop}\noffsetHeight: ${offsetHeight}\ne.ScrollTop: ${elemScrollTop}\nouterHeight: ${outerHeight}\nouterHeightTrue: ${outerHeightTrue}\nfromTop: ${fromT}`);
    // console.log(
    //     `if (${offsetTop} <= ${fromT} && ${offsetTop} + ${offsetHeight} > ${fromT})...`
    // );
    console.log(
        `if (${adjustedOffsetTop} <= ${fromT} && ${adjustedOffsetTop} + ${outerHeightTrue} > ${fromT})...`
    );
}
