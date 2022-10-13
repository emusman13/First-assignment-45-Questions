
let Usernames = ["Admin", "Adnan", "Muneer", "zeeshan"];
if (Usernames.length === 0) { console.log("We Needs to find users") }
for (let i = 0; i < Usernames.length; i++) {

    if (Usernames[i] == "Admin") {
        console.log("Hello Admin")
    }
    else {
        console.log('Hello ' + Usernames[i])
    }

}