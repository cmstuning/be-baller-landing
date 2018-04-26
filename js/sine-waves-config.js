var waves = new SineWaves({
    // Canvas Element
    el: document.getElementById('waves'),
    speed: 4,

    // width: 300,
  
    // height: 300,
  
    // rotate: 270,
  
    ease: 'SineOut',
    
    wavesWidth: '100%',
  
    waves: [
  
     
      {
        timeModifier: 1,
        lineWidth: 4,
        amplitude: -150,
        wavelength: 50,
      },
      {
        timeModifier: 1,
        lineWidth: 4,
        amplitude: -100,
        wavelength: 100,
      },
      {
        timeModifier: 1,
        lineWidth: 2,
        amplitude: 250,
        wavelength: 250,
      },
      {
        timeModifier: 1,
        lineWidth: 3,
        amplitude: 50,
        wavelength: 150,
      },
    
    ],
  
    // Perform any additional initializations here
    initialize: function (){},
  
    // This function is called whenver the window is resized
    resizeEvent: function() {
  
      // Here is an example on how to create a gradient stroke
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0,"rgba(0, 0, 0, 0)");
      gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1,"rgba(0, 0, 0, 0)");
  
      var index = -1;
      var length = this.waves;
        while(++index < length){
        this.waves[index].strokeStyle = gradient;
      }
    }
  });