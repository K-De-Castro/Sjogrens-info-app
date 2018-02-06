+function go_back() {
    window.history.back();
}

function store_csv(data, type) {
    var lines = data.split(/\r\n|\n/);
    for (i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split(',',1);
        sessionStorage.setItem( concat(type, id), lines[i] );
    }
}

function init_index(types){//load all the csv file data into local storage.
    (function(){
        var xhr = [];
        for (i = 0; i < 3; i++){
            (function (i){
                xhr[i] = new XMLHttpRequest();
                url = types[i] + "_doc/" + types[i] + "_index.csv";
                xhr[i].open("GET", url, true);
                xhr[i].onreadystatechange = function () {
                    if (xhr[i].readyState == 4 && xhr[i].status == 200) {
                        store_csv(xhr[i].responseText, types[i]);
                    }
                };
                xhr[i].send();
            })(i);
        }
    })();
}

function goto_page(id, type) {
    sessionStorage.page_type = type;
    sessionStorage.page_id = id;
    window.location.assign(id + "_page.html");
}

function goto_info(id) {
    goto_page(id, "info");
}

function goto_facts(id) {
    goto_page(id, "fact");
}

function goto_survival(id) {
    goto_page
}

function get_content(id, type) {
    var xhr = new XMLHttpRequest();
    url = types + "_doc/" + id + ".pdf";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            return xhr.responseText;
        }
    }
}