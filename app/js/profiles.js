'use strict';
 
 
var MydataSource = new kendo.data.DataSource(
{
        transport: {
            read: {
                url: function () {
                    var urlnow = app.baseURL + "profiles/";
                    var suffix;
                    var prefs = app.getAuthSettings();
                    if (prefs != null) {
                        suffix = prefs.agentid;
                    } else {
                        // should call the login screen
                        alert("You need to Login.");
                    }
                    return urlnow + suffix;
                },
 
                // the request type
                type: "get",
 
                // the data type of the returned result
                dataType: "json",
 
                beforeSend: function (xhr) {
                    var encodedAuth = app.getBasicAuth();
                    xhr.setRequestHeader('Authorization', encodedAuth);
                    var pageSize = 0;
                    var daysBack = 0;
                    var filter = "";
                    var prefs = app.getSettings();
                    if (prefs != null) {
                        pageSize = prefs.pagesize;
                        daysBack = prefs.daysback;
                        filter = prefs.filter;
                    }
                    xhr.setRequestHeader('Pagesize', pageSize);
                    xhr.setRequestHeader('Daysback', daysBack);
                    xhr.setRequestHeader('Filter', filter);
                }
            }
        },
        schema: {
                data: "profile"
        },
    serverPaging: false,
    serverSorting: true,
    pageSize: function () {
        return app.getSettings().pagesize;
    }
 
});
 
function initList() {
// had tried with var myListView
   //myListView = $("#mylist").kendoMobileListView({
   //     dataSource: MydataSource
   //}).data("kendoMobileListView");
 
   $("#profileListView").kendoMobileListView({
       dataSource: profileDataSource,
       dataBinding: function (e) {
           console.log(e);
       }
   });
 
}
 
function viewShow() {
    //myListView.refresh();
    $("#profileListView").data("kendoMobileListView").dataSource.read();
}