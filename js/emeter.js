var confirmationCode = Math.floor(Math.random() * 1000000)
var began = new Date();
var surveyJSON = { title: "", 
  surveyPostId: '70ad9ad7-5266-48af-a28a-05b978363cf6',
  showProgressBar: 'bottom',
  pages: [
    { name:"page1", questions: [ 
      { type: "comment", name: "experiences", title:"For each of the past 3 days: Choose one event that affected you emotionally and write a paragraph about how and why it affected you.", isRequired: true }
               ]},
      { name: "page2", questions: [
            { type: "matrix", name: "accuracies", title: "Please choose the answer that best reflects your thinking.", columns: [{ value: 1, text: "Strongly Negative"}, { value: 2, text: "Negative"}, { value: 3, text: "Slightly Negative"}, { value: 4, text: "Neutral"}, { value: 5, text: "Slightly Positive"}, { value: 6, text: "Positive"}, { value: 7, text: "Strongly Positive"}], rows: [{value: 'yourRating', text: "How positive or negative did you feel your writing was?"}, {value: 'eRating', text: "How positive or negative did the e-meter assess your writing to be?"}], isRequired: true },
            //to what extent do you trust the system and why (quant and qualitative)
       ] },
        { name: "page3",questions: [
            { type: "matrix", name: "assessedAccuracy", title: "Please choose the answer that best reflects your thinking.", columns: [{ value: 1, text: "Very Inaccurate"}, { value: 2, text: "Inaccurate"}, { value: 3, text: "Slightly Inaccurate"}, { value: 4, text: "Neither Accurate Nor Inaccurate"}, { value: 5, text: "Slightly Accurate"}, { value: 6, text: "Accurate"}, { value: 7, text: "Very Accurate"}], rows: [{value: 'eRating', text: "How accurate was the E-meter in its assessment of your writing?"}, {value: 'futureAccuracy', text: "If you were to use the system again how accurate do you think it would be?"}], isRequired: true },
          ] },
        { name: "page4",questions: [
            { type: "matrix", name: "systemTrust", title: "Please choose the answer that best reflects your thinking.", columns: [{ value: 1, text: "Not at all"}, { value: 2, text: "Slightly"}, { value: 3, text: "Moderately"}, { value: 4, text: "Very"}, { value: 5, text: "Extremely"}, ], rows: [{value: 'trustRating', text: "How trustworthy did you find the E-meter system?"}], isRequired: true },
              { type: "comment", name: "trustReasons", title: "Please explain why you chose your indicated level of trust.", isRequired: true }
          ] },
      //make sure people can't look back on questions to frame current answers
        { name: "page5",questions: [
              { type: "comment", name: "accuracyReasons", title: "Please give 2 reasons for your evaluations of the E-meter's accuracy. Why did you think it was inaccurate or accurate?", isRequired: true }
            ]}, 
        { name: "page6", questions: [
              { type: "comment", name: "like", title: "Please name 2 or more things you liked about the system.", isRequired: true }, //up for grabs (reevaluate feedback from question) (what did this system do for you?) (did this change how you thought about yourself)
              { type: "comment", name: "dislike", title: "Please name 2 or more things you disliked about the system.", isRequired: true }, // up for grabs (reevaluate feedback from question)
            ]}, 
        { name: "page7", questions: [
              { type: "comment", name: "feedbackEffects", title: "Please give 2-3 ways the feedback from the algorithm affected your writing.", isRequired: true }, 
          ] },
            
          { name: "page8", questions: [
              { type: "comment", name: "tips", title: "Imagine that you were given personalized tips on how to improve you mood based on what you wrote. Would you make use of such suggestions?", isRequired: true },  //imagine you were given personalized tips to improve your mood 
          ] },
          { name: "page9", questions: [
              { type: "comment", name: "folkTheory", title: "Please explain how do you think the system judges your writing.", isRequired: true }, 
              { type: "comment", name: "testing", title: "Did you experiment with or manipulate your writing to test how the system was working or how accurate it was? If so, how?", isRequired: true }, //rephrase this (did you experiment/manipulate your writing to test how the system was working and how accurate it was. explain--
        ] },
          { name: "page10", questions: [
              { type: "comment", name: "generalReactions", title: "If you have any additional feedback from your interaction with the E-meter, please detail it here.", isRequired: true }, //put on own page/get rid of.
          ] },
          { name: "page11", questions: [
          //add debrief  (
              { type: "html", name: "postDebriefComments", html: "<p>In order to assess how people interact with computer programs like the E-meter, the E-meter actually moved randomly each time you typed a word containing more than 4 characters. Previous studies indicate that many people will simply trust the algorithm rather than carefully evaluating it. This was a secondary hypothesis in this experiment. The E-meter was not responding to your typing and made no actual judgment on your writing.</p>" },  //how can we offer better support to the testers of algorithmic systems (
              { type: "html", name: "confirmationCode", html: "<h3>Confirmation Code: " + confirmationCode + "</h3><p>Please copy and paste this into the Mechanical Turk survey code field</p>"},
          ] }
     ]
};

var survey = new Survey.Survey(surveyJSON, "surveyContainer");
survey.sendResultOnPageNext = true;
//Use onComplete event to save the data           
survey.clientId = Math.random();
survey.onComplete.add(sendDataToServer);
survey.setValue('confirmationCode', confirmationCode)

function sendDataToServer(survey) {
  survey.setValue('timeElapsed', new Date() - began);
  //You should get the Guid for storing survey data in dxSurvey.com
  survey.sendResult('70ad9ad7-5266-48af-a28a-05b978363cf6');
}

survey.onCurrentPageChanged.add(function (sender, options) {
  if (survey.currentPage.visibleIndex == 0) {
    document.querySelector('#textAndMeter').style.display = '';
  } else {
    document.querySelector('#textAndMeter').style.display = 'none';
  }
});

var chart = c3.generate({
    bindto: "#emeter",
    data: {
        columns: [
            ['Positivity', 50]
        ],
        type: 'gauge',
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return '';
            },
            show: false // to turn off the min/max labels.
        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
//    units: ' %',
//    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
            values: [25, 50, 75, 100]
        }
    },
    size: {
        height: 280
    }
});

var direction = Math.round(Math.random())
if (direction == 0) {
  direction = direction - 1;
}

//document.querySelector('.panel-footer input[value="Next"]').style.display = 'none';

var lastNum = 0,
    timerOn = false;
document.body.onkeyup = function(e) {
  if (survey.currentPage.visibleIndex == 0) {
    if (e.keyCode == 32 || e.keyCode == 8 || e.keyCode == 13) {
      if (!timerOn) {
        timerOn = true;
        /*setTimeout(function() { 
          alert("Please move to the following page");
          document.querySelector('.panel-footer input[value="Next"]').style.display = '';
        }, 180000);*/
      }
      var words = document.querySelector('#sq_100 textarea').value,
      num = words.match(/\w\w\w\w+/g).length;
      //What you expected real AI here?
      //This is just UI testing. Integrating models next. :)
      //Interested in algorithm UX? Shoot me an email alspring(at)ucsc(dot)edu
      if (num != lastNum) {
        var addTo = direction * (Math.random()*10-4.35);
        var newVal = chart.data()[0].values[0]['value'] + addTo
        if (newVal > 100) {
          newVal = 100;
        }
        survey.setValue('finalEmeterValue', newVal);
        chart.load({
              columns: [['Positivity', newVal]]
        });
        lastNum = num;
      }
    }
  }
}

// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
  document.querySelector('#textAndMeter').style.display = 'none';
  document.querySelector('#surveyContainer').style.display = 'none';
  document.querySelector('#nomobile').style.display = '';
}
