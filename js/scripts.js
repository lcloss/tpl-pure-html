'use strict';
function now() {
    var time_in_ms = Date.now();
    return time_in_ms;
}
function timestamp() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    
    var current_date = dd + '-' + mm + '-' + yyyy;
    return current_date;
}
