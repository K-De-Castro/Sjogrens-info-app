var xenourls = {
    facebook: 'https://www.facebook.com/SjogrensSyndromeFoundation/',
    homepage: 'https://www.sjogrens.org/',
    twitter: 'https://twitter.com/SjogrensOrg',
    pintrest: 'https://www.pinterest.com/sjogrensorg/',
    donate: 'https://www.sjogrens.org/home/get-connected/donate',
    member: 'https://www.sjogrens.org/home/get-connected/become-a-member'
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
    var url = "http://google.com/search?q=" + "Sj&ouml;gren's Rheumatologist near " + zip;
    xenolink(url);
}