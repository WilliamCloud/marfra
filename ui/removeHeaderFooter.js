function hideElementById(id) {
    var element = document.getElementById(id);
    if (element)
        element.style.display = 'none';
}
function hideElementByClass(className) {
    var tags = document.getElementsByClassName(className);

    for (var i = 0; i < tags.length; ++i) {
        var element = tags[i];
        element.style.display = 'none';
    }
}

function hideElementByTagName(tagName) {
    var tags = document.getElementsByTagName(tagName);
    for (var i = 0; i < tags.length; ++i) {
        var element = tags[i];
        element.style.display = 'none';
    }
}


hideElementByTagName("header");
hideElementByTagName("footer");
hideElementById("demo");
