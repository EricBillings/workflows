/* Survey Page Functionality */




$("#submit").on("click", function(event) {
    event.preventDefault();

    const confirmDiv = $("<div>");

    $("#end").append(confirmDiv.text("Your Request Has Been Submitted"));




});