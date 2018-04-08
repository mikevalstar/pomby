//TODO: Make this into pomby-create-app

const fs = require('fs');
const chalk = require('chalk');

var args = process.argv.slice(2);
if(args.length !== 1 || args[0].trim().length <= 0){
  console.info(chalk.red('Could not find project name argument'));
  console.info(chalk.cyan('usage ' + chalk.underline.italic('npm run start <projectname>')));
  process.exit();
}
var installDir = './' + args[0].trim();

console.info(chalk.green('Beginning Pomby install'));

if (!fs.existsSync(installDir)){
  fs.mkdirSync(installDir);
}
