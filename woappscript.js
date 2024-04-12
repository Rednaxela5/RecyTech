var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(function(response) {
        return response.json();
    }).then(function(html){
        // Clear the form inputs
        form.reset();
        alert("Your response has been submitted");
    });

    // Download the file after successful submission
    var downloadLink = document.createElement('a');
    downloadLink.href = 'pup.html';
    downloadLink.download = 'pup.html';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    
});
