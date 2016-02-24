(function () {
    var app;

    var payload = {
        appsecret: "dfjkl553434GHsfdg95645",
        company: "JimsPharmacy"
    };

    var appkey = "1234567890QWERTYzxcvb";

    var RESTurl = "https://e26a39e6.ngrok.io/templates/dev/api/";

    // var app.baseURL = "https://e26a39e6.ngrok.io/templates/dev/api/";

    window.Books = {
        data: new kendo.data.DataSource({
            transport: {
                read: {
                    url: RESTurl + "books/" + appkey,
                    type: "GET",
                    dataType: "json"
                }
            },
            schema: {
                data: "books"
            }
        }),
        back: function () {
            app.navigate("#:back");
        },
        settings: function () {
            app.navigate("views/settings.html");
        }
    };

    window.About = {

        data: new kendo.data.DataSource({
            transport: {
                read: {
                    url: RESTurl + "about/" + appkey,
                    type: "GET",
                    dataType: "json"
                }
            },
            schema: {
                data: "about"
            }
        }),
        back: function () {
            app.navigate("#:back");
        },
        settings: function () {
            app.navigate("views/settings.html");
        }
    };
    
     window.Profiles = {

        data: new kendo.data.DataSource({
            transport: {
                read: {
                    url: RESTurl + "profiles/" + appkey,
                    type: "GET",
                    dataType: "json"
                }
            },
            schema: {
                data: "profile"
            }
        }),
        back: function () {
            app.navigate("#:back");
        },
        settings: function () {
            app.navigate("views/settings.html");
        }
    };

    window.loginView = kendo.observable({

        login: function () {

            if (!this.userid) {
                navigator.notification.alert("Please enter a userid.");
                return;
            }
            if (!this.userpwd) {
                navigator.notification.alert("Please enter a password.");
                return;
            }

            var get_req = RESTurl + "login/" + this.userid + "/" + this.userpwd + "/" + appkey;


            $.ajax({
                url: get_req,
                dataType: 'JSON',
                success: function (data, status) {
                    $.each(data, function (key, value) {
                        //handle the data             
                    });

                    var localData = JSON.stringify(data);
                    //   console.log(localData);
                    window.localStorage.setItem('profiles', localData);

                    app.navigate("views/profiles.html");

                },
                error: function (ts) {
                    $("#login").data("kendoMobileModalView").close();
                    alert(ts.responseText)
                }
            });

        },

        close: function () {

            $("#login").data("kendoMobileModalView").close();
            this.userid = "";
            this.userpwd = "";
        }
    });

    document.addEventListener("deviceready", function () {

        navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, {
            layout: "main-layout",
            skin: "flat"
        });
    }, false);

    window.app = app;

}());