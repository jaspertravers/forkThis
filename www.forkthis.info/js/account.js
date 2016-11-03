/*global
$, window, document,FORK_THIS_API
*/
"use strict";

$(window).on("load", function() {
    $(document).ready(function() {
        $('#bio').on('click', function() {
            if (document.getElementById('bioinput').readOnly === true) {
                document.getElementById('bioinput').readOnly = false;
                document.getElementById("bio").innerHTML = "Save";
								$("#bio").addClass("btn-success");
            } else {
                FORK_THIS_API.Account.currentUser.bio = $("#bioinput").val();
                FORK_THIS_API.Account.update(FORK_THIS_API.Account.currentUser, function() {
                    document.getElementById('bioinput').readOnly = true;
                    document.getElementById("bio").innerHTML = "Edit";
                    $("#bio").removeClass("btn-success");
                });
            }
        });

        $('#insti').on('click', function() {
            if (document.getElementById('instiinput').readOnly === true) {
                document.getElementById('instiinput').readOnly = false;
                document.getElementById("insti").innerHTML = "Save";
								$("#insti").addClass("btn-success");
            } else {
                FORK_THIS_API.Account.currentUser.insti = $("#instiinput").val();
                FORK_THIS_API.Account.update(FORK_THIS_API.Account.currentUser, function() {
                    document.getElementById('instiinput').readOnly = true;
                    document.getElementById("insti").innerHTML = "Edit";
                    $("#insti").removeClass("btn-success");
                });
            }
        });

        $('#email').on('click', function() {
            if (document.getElementById('emailinput').readOnly === true) {
                document.getElementById('emailinput').readOnly = false;
                document.getElementById("email").innerHTML = "Save";
								$("#email").addClass("btn-success");
            } else {
                FORK_THIS_API.Account.currentUser.email = $("#emailinput").val();
                FORK_THIS_API.Account.update(FORK_THIS_API.Account.currentUser, function() {
                    document.getElementById('emailinput').readOnly = true;
                    document.getElementById("email").innerHTML = "Edit";
                    $("#email").removeClass("btn-success");
                });
            }
        });

        $('#websites').on('click', function() {
            if (document.getElementById('websitesinput').readOnly === true) {
                document.getElementById('websitesinput').readOnly = false;
                document.getElementById("websites").innerHTML = "Save";
								$("#websites").addClass("btn-success");
            } else {
                FORK_THIS_API.Account.currentUser.websites = $("#websitesinput").val();
                FORK_THIS_API.Account.update(FORK_THIS_API.Account.currentUser, function() {
                    document.getElementById('websitesinput').readOnly = true;
                    document.getElementById("websites").innerHTML = "Edit";
                    $("#websites").removeClass("btn-success");
                });
            }
        });
        FORK_THIS_API.Account.authorization = localStorage.authorization || "";
        FORK_THIS_API.Account.read(function(user) {
            $("#websitesinput").val(user.account.websites || "");
            $("#emailinput").val(user.account.email || "");
            $("#instiinput").val(user.account.insti || "");
            $("#bioinput").val(user.account.bio || "");
        });
    });
});
