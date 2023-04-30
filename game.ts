import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { user,rand,action,lvl } from "./user.js";
let player_power:number=100;
let enemy_power:number;
let ability:string[]=["Punch","Kick","Defence","slap"]
console.log(chalk.yellow.bold(figlet.textSync("Welcome to Zombie Game")));

for(let x=0;x>=0;x++)
{
let main_menu= await user("please select the option","rawlist",["Start game","change player","Difficulty level","Exit"]);

if (main_menu=="Start game")
{
    let level=await user("select difficulty level","rawlist",["Easy","Medium","Expert"])
    enemy_power= await lvl(level);
    console.log(chalk.red.bold("Your Game is started"))
    for(let i=0;i>=0;i++)
    {
                //select action
        let player_action= await user("attack opponent","rawlist",ability);
        let ran= await rand()
        console.log(`randow number: ${ran}`)
        let e_action=ability[ran]
        if(player_action=="Defence" || e_action=="Defence")
        {
            continue;
        }
                //loss power calculation
        let eloss_power= action(player_action);
        let ploss_power= action(e_action);
        enemy_power=enemy_power-eloss_power;
        player_power=player_power-ploss_power;
        console.log(`power of your player is ${player_power}`);
        console.log(`enemy power: ${enemy_power}`);
       
        if(enemy_power<=0)
        {
            console.log(chalk.red.bold(figlet.textSync("Congratulation You Win")))
            break;
        }
        else if(player_power<=0)
        {
            console.log(chalk.red.bold(figlet.textSync(" You Lose")))
            break;
        }
    
    }
}

else if(main_menu=="Exit")
{
    console.log(chalk.yellow.bold("game is ended"))
    break;
}
}