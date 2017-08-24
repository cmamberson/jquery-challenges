/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){
  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    //Team One
      var teamOneShootButton = $("#teamone-shoot");
      var teamOneShoots = $("#teamone-numshots");
      var teamOneScores = $("#teamone-numhits");
      var psu = new Audio('assets/audio/Cheer.mp3');

      teamOneShootButton.click(function(){

        var numChance = Math.random() * 100; //creates a random number between 0 and 1 and multiplies it by 100
        let newTeamOneTry = parseInt(teamOneShoots.html()) + 1;
          teamOneShoots.html(newTeamOneTry);


        if (numChance > 50){
          let newTeamOneScore = parseInt(teamOneScores.html()) +1;
          teamOneScores.html(newTeamOneScore);
          $("#seeThrough").css("background-color", "#0000FF");
        };

        psu.play(); //plays audio
      });

    //Team Two
      var teamTwoShootButton = $("#teamtwo-shoot");
      var teamTwoShoots = $("#teamtwo-numshots");
      var teamTwoScores = $("#teamtwo-numhits");
      var osu = new Audio('assets/audio/Boo.mp3')

      teamTwoShootButton.click(function(){
        var numChance = Math.random() * 100; //creates a random number between 0 and 1 and multiplies it by 100
        let newTeamTwoTry = parseInt(teamTwoShoots.html()) + 1;
        teamTwoShoots.html(newTeamTwoTry);

          if (numChance > 50){
              let newTeamTwoScore = parseInt(teamTwoScores.html()) +1;
              teamTwoScores.html(newTeamTwoScore);
              $("#seeThrough").css("background-color","#FF0000");
            };
            osu.play(); //plays audio
          });

    //Reset
      var resetButton = $("#reset");
      var numOfReset = $("#num-resets");

      resetButton.click(function(){
        let timesReset = parseInt(numOfReset.html()) + 1;
        teamOneShoots.html(0);
        teamOneScores.html(0);
        teamTwoShoots.html(0);
        teamTwoScores.html(0);
        numOfReset.html(timesReset);

      });

  })

})();
