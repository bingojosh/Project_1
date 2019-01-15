
var accesstoken = "kdAsj5SsBKO4gyYsFfMgrN_gPHZPeKI9Ve4KHG33upRjJQqpciAlh1IF3DmQOW-b";
var usersearch = "Light my fire";
$(".main").hide();

$("#submit").on("click", function (event) {
    
    event.preventDefault();
    $("#bholder").empty();
    var usersearch = $("#song-name").val().trim();
    var limit = $("#limit").val().trim();
    var queryURL = "https://api.genius.com/search?q=" + usersearch + "&access_token=" + accesstoken;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response1) {
        console.log(response1.response.hits.length);
        console.log(response1);
        if (limit===''){
            limit=5;
        }
        else if (limit>=response1.response.hits.length){
            limit=response1.response.hits.length;
        }
        for (i = 0; i < limit; i++) {
            
            var title = response1.response.hits[i].result.full_title;
            var lyrpath = response1.response.hits[i].result.path;
            var primaryartist = response1.response.hits[i].result.primary_artist.name;
            song = title.split("by")[0].trim();
            artist = title.split("by")[1].trim();
            var imgurl=response1.response.hits[i].result.header_image_url;
            console.log(artist + " : " + song);
            var btns = $("<button>");
            btns.addClass("song-button btn btn-primary m-1");
            btns.attr("title", title);
            btns.attr("songname",song);
            btns.attr("artistname",artist);
            btns.attr("lyrpath",lyrpath);
            btns.attr("primaryartist", primaryartist);
            btns.attr("imgurl", imgurl);
            btns.text(artist + ":-" + song)
            $("#bholder").append(btns);
            
        }
    });
});


$(document).on("click", ".song-button", function () {
    $(".mainfiller").hide();
    $(".main").show();
    $("#song-info").empty();
    $("#image-info").empty();
    title = $(this).attr("title");
    artist = $(this).attr("artistname");
    lyrpath = $(this).attr("lyrpath");
    imgurl = $(this).attr("imgurl");
    primaryartist = $(this).attr("primaryartist");
    $("#song-info").append("<h3>"+title+"</h3>")
    var songtable=$("<table>");
    songtable.addClass("table");
    songtable.append("<tr><td>Artist:</td><td>"+artist+"</td></tr>");
    songtable.append("<tr><td>Primary artist:</td><td>"+primaryartist+"</td></tr>");
    var showimage=$("<img>");
    showimage.addClass("mx-auto");
    showimage.attr("src", imgurl);
    showimage.css("width","90%");
    $("#image-info").append(showimage);
    $("#song-info").append(songtable);

    wikiurl = "https://en.wikipedia.org/wiki/" + primaryartist;
    $("#lyricsholder").empty();
    $("#lyricsholder").text("Loading Lyrics...")
    
    //wikiurl = "https://genius.com/The-doors-the-end-lyrics";
    $(".loader").attr("src", wikiurl);
    lyricsurl = "https://cors-anywhere.herokuapp.com/https://genius.com/"+lyrpath;
    $.ajax({
        url: lyricsurl,
        methods: "GET"
    }).then(function (response){
        var test = $(response);
        console.log(test.find(".lyrics").text());
        $("#lyricsholder").empty();
        $("#lyricsholder").append(test.find(".lyrics").text().trim())
    })
    
    $("#song-name").val("");
    $("#limit").val("");
})

