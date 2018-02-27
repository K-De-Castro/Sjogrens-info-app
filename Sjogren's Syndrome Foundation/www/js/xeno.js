var xenourls = {
    facebook: 'https://www.facebook.com/SjogrensSyndromeFoundation/',
    homepage: '',
    twitter: ''
};

//opens url in eternal browser. (The system's native one)
function xenolink(url){
    window.open(url, '_system', null);
}

//Clicking on button with id="google_it" opens external browser and,
//preforms a google search for the value of element 'to_google'
document.getElementById('google_it').onclick = function google(){
    var query = document.getElementById('to_google').value;
    xenolink('c'+query);
}

//Clicking on button with id="find_doc" opens external browser and,
//preforms a google search for doctors near value of element 'zipcode'.
document.getElementById('find_doc').onclick = function(){
    var zip = document.getElementById('zipcode').value;
    var url = "http://google.com/search?q=" + "sjogren's Rheumatologist near " + zip;
    xenolink(url);
}