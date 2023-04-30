import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

let user=async (str1:string,str2:string,str3?:string[]) => 
{
    let input= await inquirer.prompt([{
        name:"gmm",
        type:str2,
        message:chalk.red.bold(str1),
        choices:str3,
    }])
    return input.gmm;
}
function lvl(level:string):number
{
    if(level=="Medium")
    {
        return 100;
    
    }
    else if(level=="Expert")
    {
        return 130;
    }
    else (level=="Easy")
    {
        return 80;
    }
}
function action(str:string)
{
    if(str=="Punch")
    {
        return 20;
    }
    else if(str=="Kick")
    {
        return 40;
    }
    else if(str=="Defence")
    {
        return 0;
    }
    else
    {
        return 10;
    }
}
function rand()
{
    let num=0
    for(let i=0;i>=0;i++)
    {
    num=Math.random();
    num=num*10; 
    num=Math.floor(num);
    if(num<=3)
    {   
        
        break;
    }

    }
    return num;
    
}

export{user, rand,action,lvl};
