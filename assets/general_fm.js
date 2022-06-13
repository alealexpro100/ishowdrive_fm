var project_name="General FM";

//Functions for UI

function buildTableFromJson(table_head, table_body, table_data) {
    table_head.empty();
    var el=$("<tr></tr>");
    jQuery.each(table_data[0], function(i, val) {
        el.append("<th>"+i+"</th>");
    });
    table_head.append(el);
    table_body.empty();
    jQuery.each(table_data, function( i, val ) {
        el=$("<tr></tr>");
        jQuery.each(val, function( i, val ) {
            el.append("<td>"+val+"</td>");
        });
        table_body.append(el);
    });
}

//Functions for toast messages

async function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function ToastIcon(icon, text) {
    M.toast({unsafeHTML: "<span class=\"material-icons\">"+icon+"</span>"+ text});
}

function ToastError(text) {
    ToastIcon("error", "Error (see console): "+text);
}

(function(e,t) {
    window.addEventListener('load', init);
    function init() {
        M.AutoInit();
    }
})();
