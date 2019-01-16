var apiKey = "887c3994092e28b12acbf6cf39a66890";
var accesstoken = "kdAsj5SsBKO4gyYsFfMgrN_gPHZPeKI9Ve4KHG33upRjJQqpciAlh1IF3DmQOW-b";
var usersearch = "Light my fire";
var song = "";
var artist = "";



$("#select-song").on("click", function (event) {
    event.preventDefault();
    $("#bholder").empty();
    $("#song-div").empty();
    var usersearch = $("#song-input").val().trim();
    console.log($("#song-input").val().trim());
    console.log(song +" "+ artist);
    var queryURL = "https://api.genius.com/search?q=" + usersearch + "&access_token=" + accesstoken;
    //var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="+apiKey+"&artist="+artist+"&track="+song+"&format=json";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response1) {
        for (i = 0; i < 5; i++) {
            console.log(response1);
            var title = response1.response.hits[i].result.full_title;
            var lyrpath = response1.response.hits[i].result.path;
            song = title.split("by")[0].trim();
            artist = title.split("by")[1].trim();
            console.log(artist + " : " + song);
            var btns = $("<button>");
            btns.addClass("song-button btn btn-success");
            btns.attr("songname",song);
            btns.attr("artistname",artist);
            btns.attr("lyrpath",lyrpath);
            btns.text(artist + ":" + song)
            $("#song-div").append(btns);
            $("#song-div").append("\n");
            

        }

    query2();           
       
    });

function query2(){
        
    $(".song-button").on("click", function (event) {
        event.preventDefault();
        $("#song-div").empty();
        alert("Song Chosen !");
        const songButton = $(this);
        const song = songButton.attr("songname");
        //const songTrim = song.replace(/\s/g, "");
        const artist = songButton.attr("artistname");
        //const artistTrim = artist.replace(/\s/g, "");
        var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="+apiKey+"&artist="+artist+"&track="+song+"&format=json";

    $.ajax({
        url: queryURL2,
        method: "GET",
    }).then(function (response) {
    console.log(song + " by " + artist);    
    console.log(response);
    //console.log(songTrim);
    //console.log(artistTrim); 
    if (response.track && response.track.wiki && response.track.wiki.content) {
        var wiki = response.track.wiki.content;
        $("#song-div").append("Song Info: " + wiki);
      }
    else{

    console.log("No Song Info Found");
    enter();    
    }
            
      
            
       
    });

    }); 


}

//Used to reload previous Buttons if no song info is found  
function enter(){
    $("#select-song").click();
    console.log("test");
 }



});




