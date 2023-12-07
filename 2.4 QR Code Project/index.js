
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// var qr = require('qr-image');
inquirer
  .prompt([
  //  { console.log("Write your URL:")
    {message: "Type in your URL: ",
    name: "URL",}
    ,
 
  ])
  .then((answers) => {

    // console.log({answers})
    const url=answers.URL
    // Use user feedback for... whatever!!
    var qr_svg = qr.image(url, { type: 'png' });
   qr_svg.pipe(fs.createWriteStream('qr_img.png'));

   fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
 
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });