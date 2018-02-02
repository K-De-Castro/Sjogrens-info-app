function go_back() {
    window.history.back();
}

function read_csv(file) {
    var lines = file.split(/\r\n|\n/);
    for (i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split(',');
    }
    return lines;
}

function init_index(){
    
}

function goto_page(id, type) {
    localStorage.page_type = type;
    localStorage.page_id = id;
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

}