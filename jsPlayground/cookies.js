// Cookies are small strings of data stored on the client's computer . 
// js can manipulate cookies(crud) using teh document.cookie method.

// writing to cookie
document.cookie="this is cookie"; // this method doesn't replace pre-existing cookie. it append cookie to previous cookies if it exists .


// --------------------------------------------------------------------------------------------------------------------------------------------------
// local storage : is a web storage object which are not sent to server with each request. 
// this data survives a full page refresh and even a full browser restart.
//  it  can be used to :
// 1) persistent user preferences such as theme settings , language choices and other configuration stuffs . 
// 2) offline caching , form data persistence , user authentication info, game progress and app state etc.


localStorage.setItem('username','john');
localStorage.setItem('email','test@gmail.com');

// retrieveing data form local storage
const username = localStorage.getItem("username");

// removing an item
localStorage.removeItem('email');

// clear all items 
localStorage.clear();

// ---------------------------------------------------------------------------------------------------------------------------------------------------
//  session storage : properties and methods are same as localstorage
// the session storage exists only within the current browser tab. Another tab with same page will have a different storage.