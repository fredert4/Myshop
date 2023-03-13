function validateForm() { 
    let a = document.forms["myForm"]["fname"].value;
    if (a == null || a =="") {
        alert("Name must be filled out");
        return false;
    }
    let b = document.forms["myForm"]["femail"].value;
    if (b == null || b == "") {
        alert("Email must be filled out");
        return false;
    }
    let c = document.forms["myForm"]["fPhone"].value;
    if (c == null || c == "") {
        alert("Phone number must be filled out");
        return false;
    }
    let d = document.forms["myForm"]["fcomment"].value;
    if (d == null || d == "") {
        alert("Comments/ requests must be filled out ");
        return false;
    }
    
}
