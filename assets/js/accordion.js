$(document).ready(function() {

    $("#rm-heading").on("click", function() {
        if ($("#rm-content").hasClass("item-closed")) {
            $("#rm-chevron-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#ror-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#dd-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#v-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#rm-content").removeClass("item-closed").addClass("item-opened");
            $("#ror-content").removeClass("item-opened").addClass("item-closed");
            $("#dd-content").removeClass("item-opened").addClass("item-closed");
            $("#v-content").removeClass("item-opened").addClass("item-closed");
        }
        else {
            $("#rm-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#rm-content").removeClass("item-opened").addClass("item-closed");
        }
    });

    $("#ror-heading").on("click", function() {
        if ($("#ror-content").hasClass("item-closed")) {
            $("#ror-chevron-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#rm-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#dd-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#v-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#ror-content").removeClass("item-closed").addClass("item-opened");
            $("#rm-content").removeClass("item-opened").addClass("item-closed");
            $("#dd-content").removeClass("item-opened").addClass("item-closed");
            $("#v-content").removeClass("item-opened").addClass("item-closed");
        }
        else {
            $("#ror-content").removeClass("item-opened").addClass("item-closed");
        }
    });

    $("#dd-heading").on("click", function() {
        if ($("#dd-content").hasClass("item-closed")) {
            $("#dd-chevron-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#rm-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#ror-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#v-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#dd-content").removeClass("item-closed").addClass("item-opened");
            $("#rm-content").removeClass("item-opened").addClass("item-closed");
            $("#ror-content").removeClass("item-opened").addClass("item-closed");
            $("#v-content").removeClass("item-opened").addClass("item-closed");
        }
        else {
            $("#dd-content").removeClass("item-opened").addClass("item-closed");
        }
    });

    $("#v-heading").on("click", function() {
        if ($("#v-content").hasClass("item-closed")) {
            $("#v-chevron-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#rm-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#ror-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#dd-chevron-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#v-content").removeClass("item-closed").addClass("item-opened");
            $("#rm-content").removeClass("item-opened").addClass("item-closed");
            $("#ror-content").removeClass("item-opened").addClass("item-closed");
            $("#dd-content").removeClass("item-opened").addClass("item-closed");
        }
        else {
            $("#v-content").removeClass("item-opened").addClass("item-closed");
        }
    });   

});