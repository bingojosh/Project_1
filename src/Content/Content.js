import React from 'react';
import $ from 'jquery';
import './Content.css';
var accesstoken = "kdAsj5SsBKO4gyYsFfMgrN_gPHZPeKI9Ve4KHG33upRjJQqpciAlh1IF3DmQOW-b";
var apiKey = "887c3994092e28b12acbf6cf39a66890";

export default class extends React.Component {
    constructor(props){
        super();
        this.state ={
            search: props.search
        }
    }

    componentWillReceiveProps(props){
        $("#results-holder").empty();
        var usersearch = props.search
        var limit = 5;
        var queryURL = "https://api.genius.com/search?q=" + usersearch + "&access_token=" + accesstoken;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response1) {
            console.log(response1.response.hits.length);
            console.log(response1);
            if (limit>=response1.response.hits.length){
                limit=response1.response.hits.length;
            }
            for (var i = 0; i < limit; i++) {
                
                var title = response1.response.hits[i].result.full_title;
                var lyrpath = response1.response.hits[i].result.path;
                var primaryartist = response1.response.hits[i].result.primary_artist.name;
                var song = title.split("by")[0].trim();
                var artist = title.split("by")[1].trim();
                var imgurl=response1.response.hits[i].result.header_image_url;
                var songinfo="";
                console.log(artist + " : " + song);
                var btns = $("<button>");
                btns.addClass("song-button btn btn-dark m-1");
                btns.attr("title", title);
                btns.attr("songname",song);
                btns.attr("artistname",artist);
                btns.attr("lyrpath",lyrpath);
                btns.attr("primaryartist", primaryartist);
                btns.attr("imgurl", imgurl);
                btns.text(artist + ":-" + song)
                btns.on("click",function(){
                    var artistq = $(this).attr("artistname")
                    var songq = $(this).attr("songname")
                    var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="+apiKey+"&artist="+artistq+"&track="+songq+"&format=json";
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
                        songinfo=wiki;
                        console.log(songinfo)
                      }
                    else{
                
                    songinfo="No Song Info Found";   
                    }});
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
                    songtable.append("<tr><td>Song Info: </td><td id =\"songinfo\">"+songinfo+"</td></tr>");
                    var showimage=$("<img>");
                    showimage.addClass("mx-auto");
                    showimage.attr("src", imgurl);
                    showimage.css("width","90%");
                    $("#image-info").append(showimage);
                    $("#song-info").append(songtable);
                    $("#lyricsholder").empty();
                    $("#lyricsholder").text("Loading Lyrics...")
                    var lyricsurl = "https://cors-anywhere.herokuapp.com/https://genius.com/"+lyrpath;
                    $.ajax({
                        url: lyricsurl,
                        methods: "GET"
                    }).then(function (response){
                        var test = $(response);
                        console.log(test.find(".lyrics").text());
                        $("#lyricsholder").empty();
                        $("#lyricsholder").append(test.find(".lyrics").text().trim())
                    })
                    $("#songinfo").text(songinfo)
                    
                })
                $("#results-holder").append(btns); 
            }
        });
    }

    render(){
       return(
            <div className="mainContent">
                <div className="card content-card">
                <div id="results-holder" className="btn-group mr-2 flex-wrap" role="group"></div>
                <div className="schedule border ml-1">
                            <div className="card-header">
                                Song info
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div id="song-info" className="col-md-7">
                                    </div>
                                    <div id="image-info" className="col-md-5">
                                    </div>
                                </div>
                            </div>
                            <div className="card-header">
                                Youtube video
                            </div>
                            <div className="card-body">
                                <div id="videoholder" className="lyrics"></div>
                                <iframe className="video w100" title="youtube" width="640" height="360" src="https://www.youtube.com/embed/{videoid}" frameBorder="0" allowFullScreen=""></iframe>
                            </div>

                        </div>
                </div>
            </div>
    )}
}