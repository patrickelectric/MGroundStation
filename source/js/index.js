// Manage pages from navbar
var loaded_pages = [];
var current_page = undefined;

$(function () {
    var hash = location.hash;
    var target = hash.length > 0 ? hash.substr(1) : "dashboard";
    var link = $(".navview-menu a[href*=" + target + "]");
    var menu = link.closest("ul[data-role=dropdown]");
    var node = link.parent("li").addClass("active");

    function getContent(target) {
        window.on_page_functions = [];
        $.get(target + ".html").then(
            function (response) {
                if (current_page) {
                    let id = `#content-wrapper-${current_page.substring(1)}`
                    $(id).hide();
                }
                current_page = location.hash;
                if (loaded_pages.includes(target)) {
                    let id = `#content-wrapper-${current_page.substring(1)}`
                    $(id).show();
                    return;
                }
                loaded_pages.push(target);

                var wrapper = document.createElement("div");
                wrapper.id = `content-wrapper-${target}`
                wrapper.style = "height: 100%; width: 100%;"
                wrapper.innerHTML = response
                $("#content-wrapper").append(wrapper)

                window.on_page_functions.forEach(function (func) {
                    Metro.utils.exec(func, []);
                });
            }
        );
    }

    getContent(target);

    if (menu.length > 0) {
        Metro.getPlugin(menu, "dropdown").open();
    }

    $(".navview-menu").on(Metro.events.click, "a", function (e) {
        var href = $(this).attr("href");
        var pane = $(this).closest(".navview-pane");
        var hash;

        if (Metro.utils.isValue(href) && href.indexOf(".html") > -1) {
            document.location.href = href;
            return false;
        }

        if (href === "#") {
            return false;
        }

        hash = href.substr(1);
        href = hash + ".html";

        getContent(hash);

        if (pane.hasClass("open")) {
            pane.removeClass("open");
        }

        pane.find("li").removeClass("active");
        $(this).closest("li").addClass("active");

        window.history.pushState(href, href, "index.html#" + hash);

        return false;
    });
});

