var surveyJSON = { title: "", 
  surveyPostId: '70ad9ad7-5266-48af-a28a-05b978363cf6',
  showProgressBar: 'bottom',
  pages: [
    { name:"page1", questions: [ 
      { type: "comment", name: "experiences", title:"Step through each of the past 3 days (including today) and write an experience that you had from each day on a new line in the box below. After you have chosen 3 events, for each event please write a few sentences about how that event affected you emotionally. You will recieve a notification after 3 minutes to continue to the next page." }
               ]},
      { name: "page2", questions: [
            { type: "matrix", name: "accuracies", title: "Please choose the answer that best reflects your thinking.", columns: [{ value: 1, text: "Strongly Negative"}, { value: 2, text: "Negative"}, { value: 3, text: "Slightly Negative"}, { value: 4, text: "Neutral"}, { value: 5, text: "Slightly Positive"}, { value: 6, text: "Positive"}, { value: 7, text: "Strongly Positive"}], rows: [{value: 'yourRating', text: "How positive or negative did you feeling your writing was?"}, {value: 'eRating', text: "How positive or negative did the e-meter assess your writing to be?"}], isRequired: true },
            { type: "matrix", name: "assessedAccuracy", title: "Please choose the answer that best reflects your thinking.", columns: [{ value: 1, text: "Very Inaccurate"}, { value: 2, text: "Inaccurate"}, { value: 3, text: "Slightly Inaccurate"}, { value: 4, text: "Neutral"}, { value: 5, text: "Slightly Accurate"}, { value: 6, text: "Accurate"}, { value: 7, text: "Very Accurate"}], rows: [{value: 'eRating', text: "How accurate was the E-meter in its assessment of your writing?"}], isRequired: true },
       ] },
        { name: "page3",questions: [
              { type: "comment", name: "accuracyReasons", title: "Please describe the reasons for your evaluations of the E-meter's accuracy. Why did you think it was inaccurate or accurate?" }, 
              { type: "comment", name: "wouldYouUse", title: "Would you use a system like this for journaling? Please explain why." },
              { type: "comment", name: "like", title: "What did you like about the system? (you may name as many things as occur to you)" }, ]},
        { name: "page4", questions: [
         { type: "comment", name: "dislike", title: "What did you dislike about the system? (you may name as many things as occur to you)" }, 
              { type: "comment", name: "feedbackEffects", title: "How did the feedback from the algorithm affect your writing?" }, 
              { type: "comment", name: "tips", title: "If you were given tips on how to make your writing about the experiences more positive, would you use them?" }, ]},
          { name: "page5", questions: [
              { type: "comment", name: "folkTheory", title: "How do you think the system judges your writing?" }, 
              { type: "comment", name: "generalReactions", title: "What are your general reactions to this application. Please explain." }, 
        ] }
     ]
};

var survey = new Survey.Survey(surveyJSON, "surveyContainer");
survey.sendResultOnPageNext = true;
//Use onComplete event to save the data           
survey.clientId = Math.random();
survey.onComplete.add(sendDataToServer);

function sendDataToServer(survey) {
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

document.querySelector('.panel-footer input[value="Next"]').style.display = 'none';

var lastNum = 0,
    timerOn = false;
document.body.onkeyup = function(e) {
  if (e.keyCode == 32 || e.keyCode == 8 || e.keyCode == 13) {
    if (!timerOn) {
      timerOn = true;
      setTimeout(function() { 
        alert("Please move to the following page");
        document.querySelector('.panel-footer input[value="Next"]').style.display = '';
      }, 180000);
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
      chart.load({
            columns: [['Positivity', newVal]]
      });
      lastNum = num;
    }
  }
}
