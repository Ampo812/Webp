let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"} ]

const data = [heroes]

const templateLiteral = "<h1> Itt vannak a nevek: ${data} </h1>"
document.body.innerHTML = templateLiteral;
