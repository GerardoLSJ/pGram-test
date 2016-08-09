/**
 * Date now 
 * plain JS
 * 
 */

var dateSpan = document.getElementById('dateNow');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;//January is 0, so always add + 1

var yyyy = today.getFullYear();
if(dd<10){dd='0'+dd}
if(mm<10){mm='0'+mm}
today = mm+'/'+dd+'/'+yyyy;
todayInput =  yyyy + '-' +mm+'-'+dd;
dateSpan.innerHTML = today;

document.getElementById('inputDate').value = todayInput;

/**
 * Date now 
 * plain JS
 * 
 */


 var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 
    // Wait for PhoneGap to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);
    // PhoneGap is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');
      // Unhide image elements
      //
      smallImage.style.display = 'block';
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;  base64," + imageData;
    }
    
	// Called when a photo is successfully retrieved
    //
    function onPhotoFileSuccess(imageData) {
      // Get image handle
      console.log(JSON.stringify(imageData));
      
   	  // Get image handle
      //
      var smallImage = document.getElementById('smallImage');
      // Unhide image elements
      //
      smallImage.style.display = 'block';
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = imageData;
    }
    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      // console.log(imageURI);
      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');
      // Unhide image elements
      //
      largeImage.style.display = 'block';
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }
    // A button will call this function
    //
    function capturePhotoWithData() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }



    function capturePhotoWithFile() {
        navigator.camera.getPicture(onPhotoFileSuccess, onFail, { 
            quality: 50, 
            destinationType: Camera.DestinationType.FILE_URI,
             saveToPhotoAlbum: true
        });
    }
    
    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { 
        quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source
     });
    }
    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }
