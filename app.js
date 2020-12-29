//connect the buttons to the audio using the click event.
//how to play audio on the web? try here: https://www.w3schools.com/tags/ref_av_dom.asp

console.log("step 1 - connect the buttons to the sound");

//people gonna love this app... and we need to tell them DRORSOFT made this!
//make a new div in the html...
//when people click "about us", make the text of the div change and tell them a bit about drorsoft :P
//here u can find useful things u can do to html elements via javascript: https://www.w3schools.com/jsref/dom_obj_all.asp
console.log("step 2 - about us section");

//we should really make the app more personal...
//try making a new "h1" div that reacts to the URL of the site
//for example:  "www.example.com/?name=moshe"   will make the "h1" say: "Hi moshe, wanna play Music with DrorSoft?""
//here is a way to read stuff from the url (check the answer for the question)
//https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript

console.log("step 3 - url stuff");

//ok! last thing! we should really save our contacts somewhere... you should grab the text from the input fields
//if someone press "send", fill the "contactUs" function, and fill it with the name, the mail, and the phone...
//it will go to a database and we will call him later! (tip- you should do a "sent successfuly" so the user knows it really been sent)

console.log("the big finish! contact us!");

//this is the function - take a look at the order of the parameters
function contactUs(clientName, mail, phone) {
  base("Table 1").create({ clientName, mail, phone }, function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  });
}
