	const btn = document.getElementsByClassName('btn')

function load() {

    let inputValue = document.querySelector('input').value;

      if (!inputValue.startsWith('http://') && !inputValue.startsWith('https://')) {
        inputValue = 'http://' + inputValue;
      }
      alert("Now loading: " + inputValue)
      const encodedValue = btoa(inputValue);
      window.location.href = "/web/_" + encodedValue + '_/';
      btn.disabled = true

      
}
var TextLabel = document.getElementById("txt")

function lmao() {
      var randomshit = [
        'Zeta | I hate GoGuardian',
        'Zeta | Uhh shoutout to my math teacher',
        'Zeta | doodoo fard',
        'Zeta | I forgot what to say when typing shis',
        'Zeta | I made a roblox serverside before this',
        'Zeta | .gg/gACBTqaf7R',
        'Zeta | i was lazy with the website design',
        'Zeta | a^2 + b^2 = c^2',
        "Zeta | Education is important",
        "Zeta | Shoutout to ItzAlpha for being a cool guy",
        "Zeta | If you read this, you must slam your head in a wall",
        "Zeta | the fog is coming",
        "Zeta | Did you know, I am a sigma king who CANNOT be out-rizzlered"
      ];
      
      var fax = Math.floor(Math.random() * randomshit.length);
      var text = randomshit[fax]
      TextLabel.textContent = text
   }
   
lmao()
