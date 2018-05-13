var confirmationCode = 'easy' + Math.floor(Math.random() * 1000000),
  machineLearningCondition = Math.floor(Math.random() * 2) ? 'transparent' : 'control',
  legend = '<div class="col-md-3"><h3>Legend:</h3><br><span style="background-color:rgba(255, 0, 0, 0.5);">Very Negative</span><br><span style="background-color:rgba(249, 118, 0, 0.5);">Negative</span><br><span style="background-color:rgba(246, 198, 0, 0.5);">Slightly Negative</span><br><span style="background-color:rgba(96, 176, 68, 0.5);">Positive</span><br><span style="background-color:rgba(61, 110, 43, 0.5);">Very Positive</span><br><span>Unimportant</span></div>'
  experienceNode = null;
var began = new Date();
var tlxDescriptions = {
	'Mental Demand': 'How much mental and perceptual activity was required (e.g. thinking, deciding, calculating, remembering, looking, searching, etc)? Was the task easy or demanding, simple or complex, exacting or forgiving?', 
	'Performance': 'How successful do you think you were in accomplishing the goals of the task set by the experimenter (or yourself)? How satisfied were you with your performance in accomplishing these goals?',
	'Physical Demand': 'How much physical activity was required (e.g. pushing, pulling, turning, controlling, activating, etc)? Was the task easy or demanding, slow or brisk, slack or strenuous, restful or laborious?',
	'Temporal Demand': 'How much time pressure did you feel due to the rate of pace at which the tasks or task elements occurred? Was the pace slow and leisurely or rapid and frantic?',
	'Frustration': 'How insecure, discouraged, irritated, stressed and annoyed versus secure, gratified, content, relaxed and complacent did you feel during the task?',
	'Effort': 'How hard did you have to work (mentally and physically) to accomplish your level of performance?',
	'Click this option to show you are actually performing the task': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet nisi a lacus porta fringilla. Mauris luctus eu leo in laoreet. Donec scelerisque finibus scelerisque. Vestibulum iaculis justo non erat tristique ultrices.',
	'Do NOT click this option to show you are actually performing the task': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet nisi a lacus porta fringilla. Mauris luctus eu leo in laoreet. Donec scelerisque finibus scelerisque. Vestibulum iaculis justo non erat tristique ultrices.'
};
var emeterHTMLS = {};
var emeterValues = {'emeter1': 66.66, 'emeter2': 66.66};


var surveyJSON = { title: "", 
  surveyPostId: 'c2855f11-5cca-4d2a-914f-abbe8dcd20d0',
  showProgressBar: 'bottom',
  pages: [
    { name:"preQuestions", 
      questionsOrder: 'random', 
      questions: [
        {
          type: "radiogroup",
          name: "presurveynormal",
          title: "This program evaluates the positivity/negativity of emotional experiences that users write about. How accurate or inaccurate do you think this program would be for you? The program works with English also.",
          colCount: 7,
          choices: [{ value: 1, text: "Very Inaccurate"}, { value: 2, text: "Inaccurate"}, { value: 3, text: "Slightly Inaccurate"}, { value: 4, text: "Neither Accurate Nor Inaccurate"}, { value: 5, text: "Slightly Accurate"}, { value: 6, text: "Accurate"}, { value: 7, text: "Very Accurate"}], rows: [{value: 'preaccuracycontrol', text: "How accurate or inaccurate was the E-meter in its assessment of your writing?"}, {value: 'futureAccuracy', text: "If you were to use the system again how accurate or inaccurate do you think it would be?"}], isRequired: true 
        },
        {
          type: "radiogroup",
          name: "presurveytransparent",
          title: "This program evaluates the positivity/negativity of emotional experiences that users write about. How accurate or inaccurate do you think this program would be for you? The program works with English also.",
          colCount: 7,
          choices: [{ value: 1, text: "Very Inaccurate"}, { value: 2, text: "Inaccurate"}, { value: 3, text: "Slightly Inaccurate"}, { value: 4, text: "Neither Accurate Nor Inaccurate"}, { value: 5, text: "Slightly Accurate"}, { value: 6, text: "Accurate"}, { value: 7, text: "Very Accurate"}], rows: [{value: 'preaccuracytransparent', text: "How accurate or inaccurate was the E-meter in its assessment of your writing?"}, {value: 'futureAccuracy', text: "If you were to use the system again how accurate or inaccurate do you think it would be?"}], isRequired: true 
        },
      ]},
    { name:"preQuestionsReasons",
      questions: [
        {
          type: "comment",
          name: "presurveyaccuracyreasons",
          title: "Please give 2 or more reasons for the accuracy ratings you made on the previous page.",
          isRequired: true
        }
      ]},

    { name:"emeter1", questions: [ 
      { type: "html", name: "experiences1", title:"experience1", html:'<div id="expquestion"><center><h5>Please write at least 100 words about an emotional experience that affected you in the last week.</h5></center><center><span id="wordcount">0/100 words</span></center><div id="text" contenteditable class="textarea form-control"></div></div>', isRequired: true }
    ]},
    /*{ name:"tlxpage", 
      questionsOrder: 'random', 
      questions: [
        {
            type: "radiogroup",
            name: "tlxcomparisons1",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Temporal Demand', 'Effort']
        },
        {
            type: "radiogroup",
            name: "tlxcomparisons2",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Temporal Demand', 'Mental Demand']
        },
        {
            type: "radiogroup",
            name: "tlxcomparisons3",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrders: 'random',
            commentText: 'what is this where does it go',
            choices: ['Temporal Demand', 'Physical Demand']
        },
        {
            type: "radiogroup",
            name: "tlxcomparisons4",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Temporal Demand', 'Performance']
        },
        {
            type: "radiogroup",
            name: "tlxcomparisons5",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Temporal Demand', 'Frustration']
        },
        {
            type: "radiogroup",
            name: "tlxcomparisons6",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Mental Demand', 'Effort']
        },
        {
            type: "radiogroup",
            name: "tlxcomparisons7",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Frustration', 'Mental Demand']
        },
        {
            type: "radiogroup",
            name: "tlxcomparisons8",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Frustration', 'Physical Demand']
        },
        {
            type: "radiogroup",
            name: "tlxcomparisons9",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Frustration', 'Performance']
        },
        {
            type: "radiogroup",
            name: "attentionCheck",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Click this option to show you are actually performing the task', 'Do NOT click this option to show you are actually performing the task']
        },

        {
            type: "radiogroup",
            name: "tlxcomparisons10",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Frustration', 'Effort']
        },
        {
            type: "radiogroup",
            name: "tlxcomparisons11",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Effort', 'Performance']
        },
        {
            type: "radiogroup",
            name: "tlxcomparisons12",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Physical Demand', 'Effort']
        },
{
            type: "radiogroup",
            name: "tlxcomparisons13",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Mental Demand', 'Performance']
        },

{
            type: "radiogroup",
            name: "tlxcomparisons14",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Mental Demand', 'Physical Demand']
        },

{
            type: "radiogroup",
            name: "tlxcomparisons15",
            title: "Click on the factor that represents the more important contributor to workload for the task",
            colCount: 1,
            choicesOrder: 'random',
            commentText: 'what is this where does it go',
            choices: ['Physical Demand', 'Performance']
        },

      ]},*/

    { name:"tlxsliders1", questions: [ 
      {
        type: "html",
        name: "tlxsliders1",
        title: "How satisfied are you with the Product?",
        html:'<div class="row"><center><h3>Click on each scale at the point that best indicates your experience of the task</h3></center><h4 class="col-md-2 col-md-offset-3"><center>Mental Demand</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="mentalDemand"></div><b class="col-md-1">High</b><p class="col-md-5">How much mental and perceptual activity was required (e.g. thinking, deciding, calculating, remembering, looking, searching, etc)? Was the task easy or demanding, simple or complex, exacting or forgiving?</p></div><div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Physical Demand</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="physicalDemand"></div><b class="col-md-1">High</b><p class="col-md-5">How much physical activity was required (e.g. pushing, pulling, turning, controlling, activating, etc)? Was the task easy or demanding, slow or brisk, slack or strenuous, restful or laborious?</p></div><div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Temporal Demand</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="temporalDemand"></div><b class="col-md-1">High</b><p class="col-md-5">How much time pressure did you feel due to the rate of pace at which the tasks or task elements occurred? Was the pace slow and leisurely or rapid and frantic?</p></div><div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Performance</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="performance"></div><b class="col-md-1">High</b><p class="col-md-5">How successful do you think you were in accomplishing the goals of the task set by the experimenter (or yourself)? How satisfied were you with your performance in accomplishing these goals?</p></div><div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Effort</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="effort"></div><b class="col-md-1">High</b><p class="col-md-5">How hard did you have to work (mentally and physically) to accomplish your level of performance?</p></div><div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Frustration</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="frustration"></div><b class="col-md-1">High</b><p class="col-md-5">How insecure, discouraged, irritated, stressed and annoyed versus secure, gratified, content, relaxed and complacent did you feel during the task?</p></div>'
        }
      ]},

    { name: "page1", questions: [
      { type: "radiogroup", name: "userAssessmentOfWriting1", title: "How positive or negative did you feel your writing was?", choices: [{ value: 1, text: "Strongly Negative"}, { value: 2, text: "Negative"}, { value: 3, text: "Slightly Negative"}, { value: 4, text: "Neutral"}, { value: 5, text: "Slightly Positive"}, { value: 6, text: "Positive"}, { value: 7, text: "Strongly Positive"}]},
      { type: "radiogroup", name: "userAssessmentofEmeterRating1", title: "How positive or negative did the e-meter assess your writing to be?", choices: [{ value: 1, text: "Strongly Negative"}, { value: 2, text: "Negative"}, { value: 3, text: "Slightly Negative"}, { value: 4, text: "Neutral"}, { value: 5, text: "Slightly Positive"}, { value: 6, text: "Positive"}, { value: 7, text: "Strongly Positive"}]},
      //to what extent do you trust the system and why (quant and qualitative)
    ] },
    { name: "page2",questions: [
      { type: "radiogroup", name: "accuracy1", title: "How accurate or inaccurate was the E-meter in its assessment of your writing?", choices: [{ value: 1, text: "Very Inaccurate"}, { value: 2, text: "Inaccurate"}, { value: 3, text: "Slightly Inaccurate"}, { value: 4, text: "Neither Accurate Nor Inaccurate"}, { value: 5, text: "Slightly Accurate"}, { value: 6, text: "Accurate"}, { value: 7, text: "Very Accurate"}] },
    ]},
    { name: "trust1",questions: [
      { type: "radiogroup", name: "systemTrust1", title: "How trustworthy or untrustworthy did you find the E-meter system?", choices: [{value: 1, text: 'Very Untrustworthy'}, {value: 2, text: 'Untrustworthy'}, {value: 3, text: 'Slightly Untrustworthy'}, {value: 4, text:'Neither Trustworthy Nor Untrustworthy'}, {value: 5, text: 'Slightly Trustworthy'}, {value: 6, text: 'Trustworthy'}, {value: 7, text: 'Very Trustworthy'}], isRequired: true },
      { type: "checkbox", name: "trustReasons1", title: "Which of the following factors were most relevant to you in your rating of trust or distrust?", choices: [{value: 1, text: 'How predictably the E-meter behaved'}, {value: 2, text: 'Potential biases of E-meter\'s creators'}, {value: 3, text: 'E-meter\'s accuracy or inaccuracy on the content I wrote'}, {value: 4, text: 'E-meter\'s accuracy or inaccuracy on predicting my current emotional state'}, {value: 5, text: 'Actions I took to test the E-meter\'s response'}, {value: 6, text: 'Understanding of how the E-meter worked'}, {value: 7, text: 'Amount of time that I have used the E-meter for'}], isRequired: false }
    ] },
    { name: "panas",
      questionsOrder: 'random', 
      questions: [
        { type: "matrix", name: "panas", title: "This scale consists of a number of words that describe different feelings and emotions. Read each item and then mark the appropriate answer. Indicate to what extent you have felt this way during the past few weeks. Use the following questions to record your answers", columns: [{ value: 1, text: "Very Slightly or Not At All"}, { value: 2, text: "A Little"}, { value: 3, text: "Moderately"}, { value: 4, text: "Quite A Bit"}, { value: 5, text: "Extremely"}], rows: [{value: 'panas_interested', text: "Interested"}, {value: 'panas_distressed', text: "Distressed"}, {value: 'panas_excited', text: "Excited"}, {value: 'panas_upset', text: "Upset"},{value: 'panas_strong', text: "Strong"}, {value: 'panas_guilty', text: "Guilty"},{value: 'panas_scared', text: "Scared"}, {value: 'panas_hostile', text: "Hostile"},{value: 'panas_enthusiastic', text: "Enthusiastic"}, {value: 'panas_proud', text: "Proud"},{value: 'panas_irritable', text: "Irritable"}, {value: 'panas_alert', text: "Alert"},{value: 'panas_ashamed', text: "Ashamed"}, {value: 'panas_inspired', text: "Inspired"},{value: 'panas_nervous', text: "Nervous"}, {value: 'panas_determined', text: "Determined"},{value: 'panas_attentive', text: "Attentive"}, {value: 'panas_jittery', text: "Jittery"},{value: 'panas_active', text: "Active"}, {value: 'panas_afraid', text: "Afraid"},],  },
      ]},

    { name:"emeter2", questions: [ 
      { type: "html", name: "experiences2", title:"experience2", html:'<div id="expquestion"><center><h5>Please write at least 100 words about an emotional experience that affected you in the last week.</h5></center><center><span id="wordcount">0/100 words</span></center><div id="text" contenteditable class="textarea form-control"></div></div>', isRequired: true }
    ]},
    { name:"tlxsliders2", questions: [ 
      {
        type: "html",
        name: "tlxsliders2",
        title: "How satisfied are you with the Product?",
        html:'<div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Mental Demand</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="mentalDemand"></div><b class="col-md-1">High</b><p class="col-md-5">How much mental and perceptual activity was required (e.g. thinking, deciding, calculating, remembering, looking, searching, etc)? Was the task easy or demanding, simple or complex, exacting or forgiving?</p></div><div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Physical Demand</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="physicalDemand"></div><b class="col-md-1">High</b><p class="col-md-5">How much physical activity was required (e.g. pushing, pulling, turning, controlling, activating, etc)? Was the task easy or demanding, slow or brisk, slack or strenuous, restful or laborious?</p></div><div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Temporal Demand</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="temporalDemand"></div><b class="col-md-1">High</b><p class="col-md-5">How much time pressure did you feel due to the rate of pace at which the tasks or task elements occurred? Was the pace slow and leisurely or rapid and frantic?</p></div><div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Performance</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="performance"></div><b class="col-md-1">High</b><p class="col-md-5">How successful do you think you were in accomplishing the goals of the task set by the experimenter (or yourself)? How satisfied were you with your performance in accomplishing these goals?</p></div><div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Effort</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="effort"></div><b class="col-md-1">High</b><p class="col-md-5">How hard did you have to work (mentally and physically) to accomplish your level of performance?</p></div><div class="row"><h4 class="col-md-2 col-md-offset-3"><center>Frustration</center></h4></div><div class="row tlx"><b align="right" class="col-md-1">Low</b><div class="col-md-5"><input type="range" min="0" max="100" step="5" value="50" class="slider" id="frustration"></div><b class="col-md-1">High</b><p class="col-md-5">How insecure, discouraged, irritated, stressed and annoyed versus secure, gratified, content, relaxed and complacent did you feel during the task?</p></div>'
      }
    ]},

    { name: "page5", questions: [
        { type: "radiogroup", name: "userAssessmentOfWriting2", title: "How positive or negative did you feel your writing was?", choices: [{ value: 1, text: "Strongly Negative"}, { value: 2, text: "Negative"}, { value: 3, text: "Slightly Negative"}, { value: 4, text: "Neutral"}, { value: 5, text: "Slightly Positive"}, { value: 6, text: "Positive"}, { value: 7, text: "Strongly Positive"}]},
      { type: "radiogroup", name: "userAssessmentofEmeterRating2", title: "How positive or negative did the e-meter assess your writing to be?", choices: [{ value: 1, text: "Strongly Negative"}, { value: 2, text: "Negative"}, { value: 3, text: "Slightly Negative"}, { value: 4, text: "Neutral"}, { value: 5, text: "Slightly Positive"}, { value: 6, text: "Positive"}, { value: 7, text: "Strongly Positive"}]},
      //to what extent do you trust the system and why (quant and qualitative)
    ] },
    { name: "page6",questions: [
     { type: "radiogroup", name: "accuracy2", title: "How accurate or inaccurate was the E-meter in its assessment of your writing?", choices: [{ value: 1, text: "Very Inaccurate"}, { value: 2, text: "Inaccurate"}, { value: 3, text: "Slightly Inaccurate"}, { value: 4, text: "Neither Accurate Nor Inaccurate"}, { value: 5, text: "Slightly Accurate"}, { value: 6, text: "Accurate"}, { value: 7, text: "Very Accurate"}] },
    ] },
    //make sure people can't look back on questions to frame current answers
    { name: "page7",questions: [
      { type: "radiogroup", name: "systemTrust2", title: "How trustworthy or untrustworthy did you find the E-meter system?", choices: [{value: 1, text: 'Very Untrustworthy'}, {value: 2, text: 'Untrustworthy'}, {value: 3, text: 'Slightly Untrustworthy'}, {value: 4, text:'Neither Trustworthy Nor Untrustworthy'}, {value: 5, text: 'Slightly Trustworthy'}, {value: 6, text: 'Trustworthy'}, {value: 7, text: 'Very Trustworthy'}], isRequired: true },
      { type: "checkbox", name: "trustReasons2", title: "Which of the following factors were most relevant to you in your rating of trust or distrust?", choices: [{value: 1, text: 'How predictably the E-meter behaved'}, {value: 2, text: 'Potential biases of E-meter\'s creators'}, {value: 3, text: 'E-meter\'s accuracy or inaccuracy on the content I wrote'}, {value: 4, text: 'E-meter\'s accuracy or inaccuracy on predicting my current emotional state'}, {value: 5, text: 'Actions I took to test the E-meter\'s response'}, {value: 6, text: 'Understanding of how the E-meter worked'}, {value: 7, text: 'Amount of time that I have used the E-meter for'}], isRequired: false }
    ] },
    { name: "chooseSystem",questions: [
      { type: "radiogroup", name: "finalVersionChoice", title: "If you were to use the E-meter again, which system would you prefer?", choices: ['Transparent', 'Normal'], isRequired: true },
      {
        type: "comment",
        name: "finalVersionChoiceReasons",
        title: "Please give 2 or more reasons for the choice you made above.",
        isRequired: true
      }
    ]},
    { name: "page11", questions: [
      //add debrief  (
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
survey.setValue('startingCondition', machineLearningCondition)

function sendDataToServer(survey) {
  survey.setValue('timeElapsed', new Date() - began);
  //You should get the Guid for storing survey data in dxSurvey.com
  survey.sendResult('c2855f11-5cca-4d2a-914f-abbe8dcd20d0');
}

function toggleMeterAndExplanation() {
	$('#textAndMeter').toggle();
	$('#explanation').toggle();
}
function hideEmeter() {
	$('#textAndMeter').hide();
	$('#explanation').hide();
}

survey.onAfterRenderPage.add(function (sender, options) {
	if (survey.currentPage.name == 'emeter1') {
		chart.load({
			columns: [['Rating', emeterValues[survey.currentPage.name]]]
		});
		if (emeterHTMLS[survey.currentPage.name] != true) {
				$('#text').html(emeterHTMLS[survey.currentPage.name]);
		}
		if (machineLearningCondition == 'control') {
			$('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the prompt below.');
		} else {
			$('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the prompt below. Individual words you type will be highlighted according to whether they contribute towards a positive direction or negative direction.');
			$('#expquestion').after(legend);
			$('#expquestion').addClass("col-md-8");
		}
		toggleMeterAndExplanation();
		experienceNode = $('#expquestion');
	} else if (survey.currentPage.name == 'chooseSystem') {
		$('input[name^="finalVersionChoice"][value="Transparent"]').siblings('span:Contains("Transparent")').replaceWith('<center><img src="img/transparentgif.gif" style="padding-bottom: 4em;"></img></center>');
		$('input[name^="finalVersionChoice"][value="Normal"]').siblings('span:Contains("Normal")').replaceWith('<center><img src="img/controlgif.gif" style="padding-bottom: 4em;"></img></center>');
	} else if (survey.currentPage.name == 'preQuestions') {
		$('input[name^="presurveynormal"]').parents('.sv_q').before('<center><img src="img/controlgif.gif"></img></center>');
		$('input[name^="presurveytransparent"]').parents('.sv_q').before('<center><img src="img/transparentgif.gif"></img></center>');

	} else if (survey.currentPage.name == 'tlxpage') {
		for (var key in tlxDescriptions) {
			$('input[type="radio"][value="' + key + '"]').parent().after('<div class="col-md-6"><p>' + tlxDescriptions[key] + '</p></div>').addClass("col-md-2 pull-left").parent().parent().attr('style', 'padding-bottom: 5em;');
		}
	} else if (survey.currentPage.name == 'tlxsliders1' || survey.currentPage.name == 'tlxsliders2') {
			hideEmeter();
			$('input[type="range"]').each(function () {
				if (survey.getValue(survey.currentPage.name + '_' + $(this).attr('id')) != null) {
					$(this).val(survey.getValue(survey.currentPage.name + '_' + $(this).attr('id')));
				}
			});
			$('input[type="range"]').on('input', function () {
				survey.setValue(survey.currentPage.name + '_' + $(this).attr('id'), $(this).val());
			});
	} else if (survey.currentPage.name == 'emeter2') {
		chart.load({
			columns: [['Rating', emeterValues[survey.currentPage.name]]]
		});
		if (emeterHTMLS[survey.currentPage.name] != true) {
			$('#text').html(emeterHTMLS[survey.currentPage.name]);
		}
		if (machineLearningCondition == 'transparent') {
			$('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the prompt below.');
		} else {
			$('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the prompt below. Individual words you type will be highlighted according to whether they contribute towards a positive mood direction or negative mood direction.');
			$('#expquestion').after(legend);
			$('#expquestion').addClass("col-md-8");
		}
		toggleMeterAndExplanation();
		experienceNode = $('#expquestion');
	}
	else {
		$('#textAndMeter').hide();
		$('#explanation').hide();
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
    timerOn = false;
document.body.onkeyup = function(e) {
  if (e.keyCode == 32 || e.keyCode == 8 || e.keyCode == 13) {
    var words = $('#text').text().split(/\s/);
    $('#wordcount').text(words.length + '/100 words');
    //Interested in algorithm UX? Shoot me an email alspring(at)ucsc(dot)edu
      var written_text = $('#text').text(),
      newVal = predict_all(written_text),
      pos = $('#text').caret('pos'),
      word_colors = make_words_colors_dict(written_text);
			emeterHTMLS[survey.currentPage.name] = written_text;
			emeterValues[survey.currentPage.name] = newVal;
      if ((machineLearningCondition === 'transparent' && survey.currentPage.name == 'emeter1') || (machineLearningCondition === 'control' && survey.currentPage.name == 'emeter2')) {
        for (var key in word_colors) {
          written_text = written_text.replace(new RegExp('\\b' + key + '\\b', 'gi'),
            function (match) {
              return '<span style="background-color: ' + word_colors[key] + ';">' + match + '</span>';
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
      survey.setValue('emeterValue' + machineLearningCondition , newVal);
      chart.load({
            columns: [['Rating', newVal]]
      });
    //}
  }
}

$(document).ready(function() {
  experienceNode = $('#expquestion');
	$('input[name^="presurveynormal"]').parents('.sv_q').before('<center><img src="img/controlgif.gif"></img></center>');
	$('input[name^="presurveytransparent"]').parents('.sv_q').before('<center><img src="img/transparentgif.gif"></img></center>');
	if(machineLearningCondition === 'transparent') {
    $('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the prompt below. Individual words you type will be highlighted according to whether they contribute towards a positive mood direction or negative mood direction.');
    $('#expquestion').after(legend);
    $('#expquestion').addClass("col-md-8");
  } else {
    $('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the prompt below.');
  }
  /*$('#btn-explain').click(function (e) {
    $('#explanation').append('blahblahtext');
    var textarea = $('textarea'),
    words = clean_split_words(textarea.val());
    for(var i = 0; i < words.length; i++) {
      var score = predict(words[i]);
      switch(score){
      case i:
        break;
    }
    }*/
  //});
});

// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
  document.querySelector('#textAndMeter').style.display = 'none';
  document.querySelector('#surveyContainer').style.display = 'none';
  document.querySelector('#nomobile').style.display = '';
}
