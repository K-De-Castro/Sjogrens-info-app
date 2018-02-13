function go_back() {
    window.history.back();
}

function go_home() {
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
                url = types[i] + "_docs/" + types[i] + "_index.csv";
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
    setItem(page_type, type);
    setItem(key, value);
    //sessionStorage.page_type = type;
    //sessionStorage.page_id = id;
    window.location.assign(type + "_page.html");
}

function goto_info(id) {
    goto_page(id, "info");
}

function goto_facts(id) {
    goto_page(id, "fact");
}

function goto_survive(id) {
    goto_page(id, "survive");
}

function get_content(id, type) {
    var url = type + "_docs/" + id + ".pdf";
    PDFJS.workerSrc = 'pdfjs-dist/build/pdf.worker.js';
}