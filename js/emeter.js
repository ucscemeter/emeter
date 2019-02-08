var confirmationCode = 'when' + Math.floor(Math.random() * 1000000),
  condition = Math.floor(Math.random() * 2) ? 'transparent' : 'control',
  legend = '<div id="legend" class="col-md-4" style="display:none; text-align: right;"><h3>Word Highlighting Key:</h3><br><span style="background-color:rgba(255, 0, 0, 0.5);">Very Negative</span><br><span style="background-color:rgba(249, 118, 0, 0.5);">Negative</span><br><span style="background-color:rgba(246, 198, 0, 0.5);">Slightly Negative</span><br><span style="background-color:rgba(96, 176, 68, 0.5);">Positive</span><br><span style="background-color:rgba(61, 110, 43, 0.5);">Very Positive</span><br><span>Unknown</span></div>'
  experienceNode = null,
  currentTransparency = false;
var began = new Date();
var emeterHTMLS = {};
var emeterValue = {'emeter1': 66.66, 'emeter2': 66.66};
console.log(condition);

var surveyJSON = { title: "", 
  surveyPostId: '9fc1d2e5-62ae-4b24-b1f5-386d544c0e45',
  showProgressBar: 'bottom',
  pages: [
    { name: "page99", questions: [
      { type: "html", name: "Introduction", html: "On the next page you will be using a system that assesses the positivity or negativity of your writing. Please begin thinking of an experience that happened to you within the past week or two that you can write 100 words about. When you are ready to begin the task you may move to the next page."},
      { type: "radiogroup", name: "userAssessmentofEmeterRating", title: "How positive or negative did the e-meter assess your writing to be?", choices: [{ value: 1, text: "Strongly Negative"}, { value: 2, text: "Negative"}, { value: 3, text: "Slightly Negative"}, { value: 4, text: "Neutral"}, { value: 5, text: "Slightly Positive"}, { value: 6, text: "Positive"}, { value: 7, text: "Strongly Positive"}]},
    ] },
    { name:"emeter1", questions: [ 
      { type: "html", name: "experiences", title:"experience", html:'<div id="expquestion"><center><h5>Please write at least 100 words about an emotional experience that affected you in the last week.</h5></center><center><span id="wordcount">0/100 words</span></center><div id="text" contenteditable class="textarea form-control"></div></div>', isRequired: true }
    ]},
    { name:"emeter2", questions: [ 
          { type: "html", name: "experiences2", title:"experience2", html:'<div id="expquestion"><center><h5>Please write at least 100 words about an emotional experience that affected you in the last week.</h5></center><center><span id="wordcount">0/100 words</span></center><div id="text" contenteditable class="textarea form-control"></div></div>', isRequired: true }
    ]},
    { name: "accuracy",questions: [
      { type: "radiogroup", name: "accuracy", title: "How accurate or inaccurate was the E-meter in its predictions about your writing?", choices: [{ value: 1, text: "Very Inaccurate"}, { value: 2, text: "Inaccurate"}, { value: 3, text: "Slightly Inaccurate"}, { value: 4, text: "Neither Accurate Nor Inaccurate"}, { value: 5, text: "Slightly Accurate"}, { value: 6, text: "Accurate"}, { value: 7, text: "Very Accurate"}] },
    ]},
    { name: "trust",questions: [
      { type: "radiogroup", name: "systemTrust", title: "How trustworthy or untrustworthy did you find the E-meter system?", choices: [{value: 1, text: 'Very Untrustworthy'}, {value: 2, text: 'Untrustworthy'}, {value: 3, text: 'Slightly Untrustworthy'}, {value: 4, text:'Neither Trustworthy Nor Untrustworthy'}, {value: 5, text: 'Slightly Trustworthy'}, {value: 6, text: 'Trustworthy'}, {value: 7, text: 'Very Trustworthy'}], isRequired: true }
    ] },
    { name: "attention",questions: [
      { type: "radiogroup", name: "attentionCheck", title: "Sorry to bother you, could you please select the third option below?", choices: [{value: false, text: 'Very Poor'}, {value: false, text: 'Poor'}, {value: true, text: 'Fair'}, {value: false, text:'Good'}, {value: false, text: 'Very Good'}, {value: false, text: 'Excellent'}, {value: false, text: 'Exceptional'}], isRequired: true }
    ] },
    { name: "buttonQuestions",questions: [
      { type: "radiogroup", visibleIf: "{condition}='transparent'", name: "buttonYesNo", title: "Did you press the \"Why am I getting this rating?\" button when completing the task?", choices: ['Yes', 'No'], isRequired: true },
      { type: "text", visibleIf: "{buttonYesNo}='Yes'", name: "buttonWhy", title: "In general, how would you characterize the times when you pressed the button?", isRequired: true },
    ] },
    { name: "buttonQuestions",questions: [
      { type: "text", visibleIf: "{condition}='control'", name: "userQuestions", title: "If the system could respond truthfully to any question, what 3 questions would you ask?", isRequired: true },
    ] },


    { name: "page11", questions: [
      //add debrief  (
      { type: "html", name: "confirmationCode", html: "<h3>Confirmation Code: " + confirmationCode + "</h3><p>Please copy and paste this into the Mechanical Turk survey code field</p>"},
    ] }

  ]
};

// randomize the pre-survey question
var expVioQuestion = { type: "radiogroup", name: "expectationViolation", title: "Does the rating predicted by the system match what you would expect for the text you have written so far? ", description: "The system's predicted rating is...", choices: [{ value: 1, text: "Far too negative"}, { value: 2, text: "Too negative"}, { value: 3, text: "Slightly too negative"}, { value: 4, text: "Matching what I would expect"}, { value: 5, text: "Slightly too positive"}, { value: 6, text: "Too positive"}, { value: 7, text: "Far too positive"}]},
  confusionQuestion = { type: "radiogroup", name: "confusion", title: "How much do you feel that you understand or do not understand how the system is working?", choices: [{ value: 1, text: "Completely Do Not Understand"}, { value: 2, text: "Do Not Understand"}, { value: 3, text: "Slightly Negative"},  { value: 5, text: "Slightly Positive"}, { value: 6, text: "Understand"}, { value: 7, text: "Completely Understand"}]},
  miniPreSurveyJSON = { title: "", 
    surveyPostId: '',
    showCompletedPage: false,
    pages: [
      { name: "miniPre", questions: [expVioQuestion,
        { type: "text", name: "pressReason", title: "What question were you hoping to answer by clicking the button?"},
      ] },
    ]};

var miniPostSurveyJSON = { title: "", 
  surveyPostId: '',
  showCompletedPage: false,
  pages: [
    { name: "miniPost", questions: [
      { type: "radiogroup", name: "understandingChange", title: "Did the information and visualization provided increase or decrease your understanding of the system's prediction?", choices: [{ value: 1, text: "Strongly Decreased My Understanding"}, { value: 2, text: "Decreased My Understanding"}, { value: 3, text: "Slightly Decreased My Understanding"}, { value: 4, text: "Did Not Change My Understanding"}, { value: 5, text: "Slightly Increased My Understanding"}, { value: 6, text: "Increased My Understanding"}, { value: 7, text: "Strongly Increased My Understanding"}]},
      { type: "radiogroup", name: "remainingQuestionsYesNo", title: "Did the information and visualization answer the questions you had when clicking the button or do you have further questions?", choices: ["Yes", "No"]},
      { type: "text", visibleIf: "{remainingQuestionsYesNo}='Yes'", name: "remainingQuestionContent", title: "What questions do you still have?"},
    ] },
  ]};

var miniPreSurvey;
function initMiniPreSurvey() {
  currentTransparency = false;
  if (condition == 'control') {
    miniPreSurveyJSON.pages[0].questions = [miniPreSurveyJSON.pages[0].questions[0]];
  }
  miniPreSurvey = new Survey.Survey(miniPreSurveyJSON, "miniSurvey");

  miniPreSurvey.onComplete.add(function () {
    console.log(miniPreSurvey.getAllValues());
    var miniPreSurveyValues = miniPreSurvey.getAllValues()
    miniPreSurveyValues['textPoint'] = $('#text').text();
    miniPreSurveyValues['emeterValue'] = newVal;
    console.log(miniPreSurveyValues); //TODO DOES THE CHECKPOINT WORK
    if(survey.getValue('miniPreSurvey')) {
      var curVals = survey.getValue('miniPreSurvey');
      curVals.push(miniPreSurvey.getAllValues());
      survey.setValue('miniPreSurvey' + survey.currentPage.name, curVals)
    } else {
      survey.setValue('miniPreSurvey' + survey.currentPage.name, [miniPreSurvey.getAllValues()]);
    }
    $("#questionsModal").modal('toggle');
    if (condition == 'control') {
      initMiniPreSurvey();
    } else {
      initMiniPostSurvey();
    }
  });

}

function initMiniPostSurvey() {
  miniPostSurvey = new Survey.Survey(miniPostSurveyJSON, "miniSurvey");
  miniPostSurvey.onComplete.add(function () {
    console.log(miniPostSurvey.getAllValues());
    if(survey.getValue('miniPostSurvey')) {
      var curVals = survey.getValue('miniPostSurvey');
      curVals.push(miniPostSurvey.getAllValues());
      survey.setValue('miniPostSurvey' + survey.currentPage.name, curVals)
    } else {
      survey.setValue('miniPostSurvey' + survey.currentPage.name, [miniPostSurvey.getAllValues()]);
    }
    $("#questionsModal").modal('toggle');
    initMiniPreSurvey();
  });
}

var miniPostSurvey;
var miniPreSurveyJSON;
initMiniPreSurvey();


var survey = new Survey.Survey(surveyJSON, "surveyContainer");
survey.sendResultOnPageNext = true;
//Use onComplete event to save the data           
survey.clientId = Math.random();
survey.onComplete.add(sendDataToServer);
survey.setValue('confirmationCode', confirmationCode)
survey.setValue('condition', condition)

function sendDataToServer(survey) {
  survey.setValue('timeElapsed', new Date() - began);
  //You should get the Guid for storing survey data in dxSurvey.com
  survey.sendResult('9fc1d2e5-62ae-4b24-b1f5-386d544c0e45');
}

function showEmeter() {
	$('#textAndMeter').show();
	$('#explanation').show();
  if (condition == 'transparent') {
    $('#why_button').show();
  }
}

function hideEmeter() {
	$('#textAndMeter').hide();
	$('#explanation').hide();
  $('#why_button').hide();
}

survey.onAfterRenderPage.add(function (sender, options) {
	if (survey.currentPage.name == 'emeter1') {
		chart.load({
			columns: [['Rating', emeterValue[survey.currentPage.name]]]
		});
    showEmeter();
		if (emeterHTMLS[survey.currentPage.name] != true) {
				$('#text').html(emeterHTMLS[survey.currentPage.name]);
		}
		if (condition == 'control') {
			$('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the prompt below.');
		} else {
			$('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the prompt below.');
			$('#expquestion').after(legend);
			$('#expquestion').addClass("col-md-8");
		}
		experienceNode = $('#expquestion');
		} else if (survey.currentPage.name == 'emeter2') {
      initMiniPreSurvey();
      chart.load({
        columns: [['Rating', emeterValue[survey.currentPage.name]]]
      });
      showEmeter();
      $('#expquestion').after(legend);
			$('#expquestion').addClass("col-md-8");
		if (emeterHTMLS[survey.currentPage.name] != true) {
			$('#text').html(emeterHTMLS[survey.currentPage.name]);
		}
		if (condition == 'transparent') {
			$('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the prompt below.');
		} else {
			$('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the prompt below. Individual words you type will be highlighted according to whether they contribute towards a positive mood direction or negative mood direction.');
			$('#expquestion').after(legend);
			$('#expquestion').addClass("col-md-8");
		}
		experienceNode = $('#expquestion');
	}
	else {
		hideEmeter();
	}
});

var chart = c3.generate({
    bindto: "#emeter",
    data: {
        columns: [
            ['Rating', 63.333]
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
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044', '#3d6e2b'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
            values: [15, 35, 50, 75]
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

var lastWord = '',
    timerOn = false,
    firstProbeDone = false,
    secondProbeDone = false,
    newVal = -1;
document.body.onkeyup = function(e) {
  if ([32,8,13,190,188,49,191,186].includes(e.keyCode)) {
    if ($('#text').is(":focus")) {
      var words = $('#text').text().split(/\s+/);
      $('#wordcount').text(words.length-1 + '/100 words');
      //Interested in algorithm UX? Shoot me an email alspring(at)ucsc(dot)edu
        var written_text = $('#text').text(),
        pos = $('#text').caret('pos'),
        word_colors = make_words_colors_dict(written_text);
        newVal = predict_all(written_text);
        emeterHTMLS[survey.currentPage.name] = written_text;
        emeterValue[survey.currentPage.name] = newVal;

        if (condition == 'control' && (firstProbeDone == false && words.length >= 25) ) {
          firstProbeDone = true;
          $("#questionsModal").modal('toggle');
        } else if (condition == 'control' && (secondProbeDone == false && words.length >= 75) ) {
          secondProbeDone = true;
          $("#questionsModal").modal('toggle');
        }


        survey.setValue('textWrittenByUser' + survey.currentPage.name, written_text);
        if (condition === 'transparent') {
          for (var key in word_colors) {
            written_text = written_text.replace(new RegExp('\\b' + key + '\\b', 'gi'),
              function (match) {
                return '<span class="' + word_colors[key] + '">' + match + '</span>';
            });
          }

          $('#text').html(written_text);
          emeterHTMLS[survey.currentPage.name] = written_text
          $('#text').caret('pos', pos);
        }
        //restore();
        /*if (newVal > 100) {
          newVal = 100;
        } else if (newVal < 0) {
          newVal = 0;
        }*/
        experienceNode = $('#expquestion');
        survey.setValue(survey.currentPage.name + 'Value', newVal);
        chart.load({
              columns: [['Rating', newVal]]
        });
      //}
    }
  }
}

$(document).ready(function() {
  $('#why_button').click(function (e) {
    if(currentTransparency === false) {
      currentTransparency = true;
    } else {
      currentTransparency = false;
    }
    if(currentTransparency === true) {
      $("#questionsModal").modal('toggle');
      $('#questionsModal').one('hidden.bs.modal', function () {
        $('#legend').toggle();
        $('#why_button').attr('value', 'Click the button again to continue writing')
        $('#text').attr('contenteditable', 'false')
        for (var i=0; i < colors.length; i++) {
          $('.' + colors[i]).css('background-color', colors_vals[i]);
        } 
      });
    } else {
      $("#questionsModal").modal('toggle');
      $('#questionsModal').one('hidden.bs.modal', function () {
        $('#legend').toggle();
        $('#why_button').attr('value', 'Why am I recieving this rating?')
        $('#text').attr('contenteditable', '')
        for (var i=0; i < colors.length; i++) {
          $('.' + colors[i]).css('background-color', '#fff');
        }
      });
    }
  });
});

// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
  document.querySelector('#textAndMeter').style.display = 'none';
  document.querySelector('#surveyContainer').style.display = 'none';
  document.querySelector('#nomobile').style.display = '';
}
