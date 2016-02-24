(function () {

    var currentBook;

    var RESTurl = "https://00ae9cc4.ngrok.io/templates/dev/api/"

    window.AboutDetail = {

        show: function () {
            
            var get_req = RESTurl + "about/"  + appkey;
            alert()
            $.get(get_req,  function(data, status){
                var jsonData = $.parseJSON(data);
                console.log(jsonData);
            	alert("Data: " + jsonData + "\nStatus: " + status);
    		});


            //Pull the ISBN number from the query string
            //r location = window.location.toString();
            //r isbn = location.substring(location.lastIndexOf('?') + 4);


          //currentBook = window.Books.data.view()[0];

            // Create a model for the page and bind it to the view
            var about = {
                name: data.name,
                image_url: data.image_url,
                site_url: data.amazon_url,
                // is_favorite: currentBook.is_favorite
            };
            
        //   kendo.bind($('#aboutContent'), about, kendo.mobile.ui);
            
            // If the current book is a favorited item, toggle the switch on the view
            //if (currentBook.is_favorite) {
              //  $('#favorite').data('kendoMobileSwitch').toggle();
            //}

        },
        hide: function () {
            // When the user navigates away from the page, remove the filter
            //window..data.filter([]);
        },
        openLink: function () {
            // Will use the Cordova InAppBrowser plugin when deployed to a device. Opens a new window in
            // the simulator
            window.open(currentBook.amazon_url, '_blank', 'location=yes');
        }
    };
}());