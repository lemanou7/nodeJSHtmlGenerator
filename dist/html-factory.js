// This Page Is Creating Two Key Functions To Generate Our Final HTML 

// BASE TEMPLATE HOLDING THE MAIN HTML 
const createBaseHtml = function (Cards) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

<title>My Team Members</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

<link rel="stylesheet" href="./style.css">
</head>
<body>

    <div class="header">
        <div class="jumbotron bg">
            <h1 class="display-3 text-white text-center">My Team</h1>
        </div>
    </div>

    <div class="container-body container-fluid">
        <div class="row d-flex align-items-center justify-content-center">
            ${Cards} 
        </div>
    </div>

    <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  

</body>
</html>`

}

// EMPLOYEE CLASS BASED CARDS TEMPLATE  
const cardsTemplate = function (teamObject) {
    // Variable declaration
    let selectedIcon;
    let role;

    if (teamObject.title === "Manager") {
        //Fontawesome Icons selection 
        selectedIcon = `<i class="fas fa-mug-hot"></i>`
        role = `Office Number: ${teamObject.officeNumber}`
    } else if (teamObject.title === "Engineer") {
        selectedIcon = `<i class="fas fa-glasses"></i>`
        role = `GitHub Username: <a href="https://github.com/${teamObject.github}" target="_blank">${teamObject.github}</a>`
    } else if (teamObject.title === "Intern") {
        selectedIcon = `<i class="fas fa-user-graduate"></i>`
        role = `School: ${teamObject.school}`
    }

    return `
            <div class="col-md-4 col-sm-6 col-12 col-lg-3">
                <div class="card shadow-lg mb-5 bg-white rounded">
                    <div class="card-header bg-card-header">
                        <h4 class="text-white text-center">${teamObject.name}</h4>
                        <h4 class="text-white text-center">${selectedIcon}</i> ${teamObject.title}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li>Employee ID: ${teamObject.id}</li>
                            <li>Email: <a href="mailto:${teamObject.email}">${teamObject.email}</a></li>
                            <li>${role}</i>
                        </u>
                    </div>
                </div>
            </div> `
}

exports.createBaseHtml = createBaseHtml;
exports.cardsTemplate = cardsTemplate;