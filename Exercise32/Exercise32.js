
let current_users = ["Admin", "Adnan", "MUNEER", "zeeshan"];
let new_users = ["Adnan", "Muneer", "Sohail", "Afzal"]

for (let i = 0; i < new_users.length; i++)
{
    for (let j = 0; j < current_users.length; j++)
    {
        var new_man = new_users.toUpperCase
        console.log(new_man)
        if (new_users[i] == current_users[j]) {
            console.log(new_users[i] + " will have to choose new name")
        }
        
        else if (new_man == current_users[j])
        {
            console.log(new_man + " will have to choose new name")
        }
    }

}  

