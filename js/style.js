let imageSrollIndex = 0;
let isMouseDown = false;
scrollableWidth = $('#divp')[0].scrollWidth;

function scrollHorizontal(event) {
    event.preventDefault();

    // scrollableWidth = $('#divp')[0].imageSrollIndex;
    console.log(scrollableWidth);
    $('#divp').animate({
        scrollLeft: imageSrollIndex
    }, 'fast');

}


function moveNext(event) {
    isMouseDown = !isMouseDown;
    console.log(isMouseDown);
    while (isMouseDown) {
        if (event.type == "mousedown" || event.type == "touchstart") {
            if (imageSrollIndex <= scrollableWidth) {
                imageSrollIndex = imageSrollIndex + 20;
                scrollHorizontal(event);
            }
        }
    }
}

function movePrevious(event) {
    isMouseDown = !isMouseDown;
    console.log(isMouseDown);
    isMouseDown
    if (event.type == "mousedown" || event.type == "touchstart") {
        mouseDownTimer = setInterval(function () {
            if (imageSrollIndex >= 0) {
                imageSrollIndex = imageSrollIndex - 10;
                scrollHorizontal(event);
            }
        }, 100);
    }
}


$("#scroll-next").on("mousedown mouseup touchstart", moveNext);
$("#scroll-previous").on("mousedown mouseup", movePrevious);