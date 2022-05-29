$("document").ready(function() {
    Subils = {};

    let lastTime;
    let lastText;

    Subils.HelpNotification = function(data) {
        if (lastTime == null) {
            lastTime = new Date().getTime();
            $(".container").css({ display: "block" });
            $(".container").removeClass('hide').addClass('show');
            $(".text").html(data.text);

        } else {
            lastTime = new Date().getTime();
            if (data.text != lastText) {
                $(".text").html(data.text);
                lastText = data.text;
            }
        }

        setTimeout(function() {
            if (new Date().getTime() - lastTime >= 800) {
                $(".container").removeClass("show").addClass('hide');
                setTimeout(function() {
                    $(".container").css({ display: "none" });
                }, 300);

                lastTime = null;
            }
        }, 1500);
    };

    window.addEventListener("message", function(event) {

        switch (event.data.action) {
            case "showHelp":
            Subils.HelpNotification(event.data);
            break;
        }
    });
});