function setup(){
    const canvas = createCanvas(160, 120);
    pixelDensity(1);
    background(0);
    let lat, lon;
    const button = document.getElementById('submit');
    button.addEventListener('click', async event => {
        const mood = document.getElementById('mood').value;
        canvas.loadPixels();
        const data = { lat, lon, mood, image64 };
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);      
        //fetch('/api', options).then(repsonse => {
          //  console.log(response)}
        });
            

        if ('geolocation' in navigator) {
            console.log('geolocation available');
            navigator.geolocation.getCurrentPosition(async position => {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                document.getElementById('latitude').textContent = lat;
                document.getElementById('longitude').textContent = lon;
                
                //console.log(position); //to look at everything
                //console.log(position.coords.latitude);
                //console.log(position.coords.longitude);
            });
        } else {
            console.log('geolocation NOT avalible');
        }  
    }  

    function keyPressed() {
        if (key == 'c') {
          background(0);
        }
      }
      
      function draw() {
        stroke(255);
        strokeWeight(8);
        if (mouseIsPressed) {
          line(pmouseX, pmouseY, mouseX, mouseY);
        }
      }