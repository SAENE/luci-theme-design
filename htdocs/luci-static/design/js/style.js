(function ($) {

    // 修复某些插件导致在https下env(safe-area-inset-bottom)为0的情况
    var url = self.location.href; 
    if ((/(iPhone|iPad|iPod|iOS|Mac|Macintosh)/i.test(navigator.userAgent)) && url.indexOf("openclash") != -1 ) {
        var oMeta = document.createElement('meta');
        oMeta.content = 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover';
        oMeta.name = 'viewport';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
    }

    var showSide = false;
    $(".showSide").click(function () {
        if (!showSide) {
            $("header").css("box-shadow",   "17rem 2px 4px rgb(0 0 0 / 8%)")
            showSide = true;
        }
    });

    $(".darkMask").click(function () {
        if (showSide) {
            $("header").css("box-shadow",   "0 2px 4px rgb(0 0 0 / 8%)")
        }
    });

    $(window).resize(function () {
        $("header").css("box-shadow",   "17rem 2px 4px rgb(0 0 0 / 8%)")
    });
})(jQuery);