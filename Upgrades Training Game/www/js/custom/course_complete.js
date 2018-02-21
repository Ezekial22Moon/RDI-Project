function courseComplete(username) {
    var time = new Date();
    var data = {
        "UserName": username,
        "ClientId": "357",
        "ClientName": "DirecTV",
        "Program": "Upgrades",
        "Type": "RPG Maker MV",
        "Status": "Complete",
        "DatedAt": time
    };
    var url = "https://apps.rdicorp.com/API/RDITrainingCourses/TrainingCompletePost";
    $.post(url, JSON.stringify(data));
    console.log("Working");
}