/* let navbar = document.querySelector('.navbar');

document.querySelector("menu-btn").onclick = () =>{
    navbar.classList.toggle('active');
}

*/
const filterCon = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterCon.addEventListener("click", (zoom) =>{
    if(zoom.target.classList.contains("filter-item")){
        filterCon.querySelector(".active").classList.remove("active");
        zoom.target.classList.add("active");
        const filterValue = zoom.target.getAttribute("data-filter");
        galleryItems.forEach((item) =>{
            if(item.classList.contains(filterValue) || filterValue === 'all'){
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

function imgSlider(anything) {
    document.querySelector('.main').src = anything;
  }
// script.js
document.addEventListener('DOMContentLoaded', function() {
  fetch('index.xml')
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
      const history = xmlDoc.querySelector('history').textContent;
      const address = xmlDoc.querySelector('address').textContent;
      const email = xmlDoc.querySelector('email').textContent;
      const phone = xmlDoc.querySelector('phone').textContent;

      document.getElementById('history').textContent = history;
      document.getElementById('address').textContent = address;
      document.getElementById('email').textContent = email;
      document.getElementById('phone').textContent = phone;

    })
    .catch(error => {
      console.error('Error fetching or parsing XML:', error);
    });
});

// Get the necessary elements
const locationButton = document.getElementById("locationButton");
const direction = document.getElementById("direction");

// Add event listener to the button
locationButton.addEventListener("click", function() {
  // Toggle the "show" class on the image container
  direction.parentElement.classList.toggle("show");
});  
// Create a function to handle the AJAX request
function loadXMLDoc() { //his line defines a function named loadXMLDoc. 
                        //This function will handle the AJAX request and update the elements on 
                        //the page with data from an XML file.
var xmlhttp = new XMLHttpRequest(); //This line creates a new instance of the XMLHttpRequest object. 
                                    //This object is used to interact with servers and make HTTP requests.
xmlhttp.onreadystatechange = function() { //This line assigns an anonymous function to the onreadystatechange 
                                         //event handler of the XMLHttpRequest object. This function will be 
                                         //called whenever the readyState property of the XMLHttpRequest changes.

  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {//This line checks if the readyState property of the 
                                       //XMLHttpRequest is 4 (which means the operation is complete) and the 
                                       //status property is 200 (which means the request was successful).



    // Parse the XML response
    var xmlDoc = xmlhttp.responseXML; //This line assigns the responseXML property of the XMLHttpRequest object to the 
                                //variable xmlDoc. This property holds the XML document returned by the server.
    
    // Get all the photo elements
    var photos = xmlDoc.getElementsByTagName("photo");//This line retrieves all the elements with the tag name 
                                     // "photo" from the XML document and assigns them to the variable photos.
    
    // Iterate over each photo element
    for (var i = 0; i < photos.length; i++) {//This line starts a for loop that iterates over each photo element in the photos array.
      var photo = photos[i];//This line assigns the current photo element to the variable photo for easier access to its child elements.
      
      // Get the src, title, and description values
      var src = photo.getElementsByTagName("src")[0].childNodes[0].nodeValue;
      var title = photo.getElementsByTagName("title")[0].childNodes[0].nodeValue;
      var description = photo.getElementsByTagName("description")[0].childNodes[0].nodeValue;
      
      // Update the corresponding elements on the page
      //This line retrieves the value of the first "src" child element of the current photo element and assigns it to the variable src.
      var imgElement = document.getElementsByClassName("img")[i];

           //This line selects the element with the class name "title" at index i and assigns it to the variable titleElement.
      var titleElement = document.getElementsByClassName("title")[i];

      //This line retrieves the value of the first "description" child element of the current photo element and assigns it to the variable description.
      var descriptionElement = document.getElementsByClassName("description")[i];
      
      //This line sets the src attribute of the imgElement to the value of src, updating the image source.
      imgElement.src = src;

      //This line sets the textContent property of the titleElement to the value of title, updating the text content of the title element.
      titleElement.textContent = title;

      //This line sets the textContent property of the descriptionElement to the value of description, updating the text content of the description element.
      descriptionElement.textContent = description;
    }
  }
};

// Send the AJAX request to load the XML file
//This line configures the XMLHttpRequest object to make a GET request to the "photos.xml" file. The third parameter true indicates that the request should be asynchronous.
xmlhttp.open("GET", "photos.xml", true);

//This line sends the AJAX request to the server to fetch the XML file.
xmlhttp.send();
}

// Call the loadXMLDoc function to load the XML and update the elements
//his line calls the loadXMLDoc function, initiating the process of loading the XML file and updating the elements on the page.
loadXMLDoc();

  