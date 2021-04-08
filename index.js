const scroller = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: true,
});

$(window).resize(function(e) {

    locomotiveScrollInstance.update();
    //DeltaY of 1 so event is effectively triggered
    var wheelEvent = new WheelEvent("mousewheel",{deltaY:1}); 
    //Element selector used for locomotivePlugin
    $("body")[0].dispatchEvent(wheelEvent);
})