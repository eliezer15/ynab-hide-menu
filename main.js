$('.ember-application').on("mouseenter", function (){
    
    var defaultSidebarToggleLeft = "260px";

    var imageSrc = chrome.extension.getURL("arrow.png");
    var imgTag = `<input type="image" src="${imageSrc}" id="sidebar-toggle" style="left:${defaultSidebarToggleLeft}" alt='toggle-sidebar'>`;

    $('.sidebar').after(imgTag);
    $(this).off();

    $("#sidebar-toggle").on("click", function() {

        $('.sidebar').animate({width:'toggle'}, 500);

        var sidebarIsHidden = $(this).css("left") == "0px"; 
        var leftValue = sidebarIsHidden ? defaultSidebarToggleLeft: "0px";
        $('#sidebar-toggle').animate({left:leftValue}, 500);

        var rotation = sidebarIsHidden ? "0deg" : "180deg";
        $('#sidebar-toggle').css("transform", `rotate(${rotation})`);
        $('.content').animate({left:leftValue}, 500);

        $('.budget-header').animate({left:leftValue}, 500);
    });
});




