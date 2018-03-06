var confirmationCode = Math.floor(Math.random() * 1000000),
machineLearningCondition = 'transparent'//Math.floor(Math.random() * 2) ? 'transparent' : 'control',
experienceNode = null;
var began = new Date();
var surveyJSON = { title: "", 
  //surveyPostId: '516ed990-1ffe-4157-9f38-4ebabda5fe33',
  surveyPostId: 'd42dc904-3840-4805-973d-cc2a0a350e64',
  showProgressBar: 'bottom',
  pages: [
    { name:"page0", questions: [{
      type: "html",
      name: "info", 
      html: ' <div class="row"> <p><strong>U</strong><strong>NI</strong><strong>V</strong><strong>ER</strong><strong>S</strong><strong>ITY </strong><strong>O</strong><strong>F CALIFORNIA, SANTA CRUZ</strong></p> <p style="margin-left:-2.0pt;">Name: Prof. Steve Whittaker</p> <p style="margin-left:-2.0pt;">Department of: Psychology</p> <p style="margin-left:-2.0pt;">Email: swhittak@ucsc.edu</p> <p style="margin-left:-2.0pt;">Phone: (831) 459-2390</p> <p align="center" style="margin-left:-2.0pt;"><strong>CONSENT TO PARTICIPATE IN RESEARCH</strong></p> <p align="center" style="margin-left:-2.0pt;"><strong>Mood Meter User Evaluation</strong></p> <p style="margin-left:-2.0pt;">&nbsp;</p> <p style="margin-left:-2.0pt;"><strong><em><u>Introductory section</u></em></strong>: You are invited to&nbsp;take part in a research study conducted by Steve Whittaker from the Department of Psychology at the University of California, Santa Cruz. Before you decide whether or not to participate in the study, you should read this form and ask questions if there is anything that you do not understand.</p> <p style="margin-left:-2.0pt;"><strong><em><u>Description of the project</u></em></strong>: The purpose of the study is to evaluate the usage of a &ldquo;mood meter&rdquo; which gauges the positive/negativity of writing as an application. New technologies have allowed computer systems to accurately assess people&rsquo;s emotions as they write. Using these technologies we have built a system that responds in real-time to the emotional content of a user&rsquo;s writing. Testing this system will allow us to better understand design considerations in this space.</p> <p style="margin-left:-2.0pt;"><strong><em><u>What you will do in the study</u></em></strong>: We have designed a system that measures and displays the positivity/negativity of your writing as you write. We will ask you to write 3 paragraphs about 3 different emotional events that you have experienced in the past week. As you do this, the system will respond with its predictions about your writing and display them to you. After you finish writing these 3 paragraphs we will ask you a number of questions about your experience with the system.</p> <p style="margin-left:-2.0pt;"><strong><em><u>Time required</u></em></strong><strong>:</strong> Participation will take approximately 15 minutes.</p> <p style="margin-left:-2.0pt;"><strong><em><u>Risks or discomfort</u></em></strong><strong><em>:</em></strong> Psychological discomfort is a risk when writing about experiences that may have strong emotions associated with them. If you feel high levels of discomfort at any point in the study you are free to end the study. If you choose to end the study early, you will not be penalized. Although we do not believe these are necessary, but if needed support resources are provided below.</p> <p style="margin-left:-2.0pt;">This study happens through the internet. To prevent the risk of accidental data disclosure, all communication between your computer and the web server will be encrypted. Your name or identifiable information will not be collected nor linked to your responses.</p> <p style="margin-left:-2.0pt;"><strong><em><u>Benefits of this study</u></em></strong><em>:</em> Although there will be no direct benefit to you for taking part in this study, however you will contribute to the science surrounding emotional journaling applications.&nbsp;</p> <p style="margin-left:-2.0pt;"><strong><em><u>Compensation</u></em></strong><em> (If applicable): </em>&nbsp;You will be paid 2.50 USD for participation in this study.</p> <p style="margin-left:-2.0pt;"><strong><em><u>Confidentiality</u></em></strong>: Any answers and writing that you make in this study will be kept private and secure. The anonymized results may be published in scientific reports or presented at scientific meetings.</p> <p style="margin-left:-2.0pt;">Identifying information will be collected in the form of your IP address and Amazon Turk ID. All pieces of identifying information collected will be stored securely on password protected computers. Your data will be reported in a way that does not identify you.</p> <p style="margin-left:-2.0pt;">We would ask your permission to keep your data for use in future research studies in a similar space.&nbsp; If you agree, we may report some of your data for future analyses. Once research is complete the data will be destroyed.</p> <p style="margin-left:-2.0pt;"><strong><em><u>Decision to quit at any time</u></em></strong><em>:</em> The decision to take part in this study is completely voluntary.&nbsp; You do not have to participate. Even if you decide at first to take part, you are free to change your mind at any time and quit the study. Whatever you decide will in no way be used against you. You will still receive full payment for the study.</p> <p style="margin-left:-2.0pt;"><strong><em><u>Rights and Complaints</u></em></strong>: If you have questions about this research, please contact Prof. Steve Whittaker, Principal Investigator, Address: 1156 High St. Santa Cruz, CA 95060, University of California Santa Cruz, Tel: (831) 459-2390. If you have any questions regarding your rights as a research participant,&nbsp; please contact the Office of Research Compliance Administration at the University of California at Santa Cruz at 831-459-1473 or orca@ucsc.edu.</p> <p style="margin-left:-2.0pt;">&nbsp;</p> <p style="margin-left:-2.0pt;"><strong><em><u>Signature</u></em></strong><em>:</em></p> <p style="margin-left:-2.0pt;">Signing this document (by accepting the check boxes below) means that you understand the information given to you in this form and that you voluntarily agree to participate in the research described above.</p> <div> <hr align="left" size="1" width="33%" /></div> </div> <div class="row" style="text-align: center;">&nbsp;</div> <div class="row" style="text-align: center;"> <p align="center"><strong>List of Mental Health and Crisis Hotlines</strong></p> <p>If you, or someone you know, is at risk of harm to themselves or others and needs immediate help<strong>.&nbsp;</strong><strong>DIAL 911</strong></p> <p>National Hopeline Network Suicide Prevention Hotline 1-800-SUICIDE&nbsp;<span style="text-align: center;">(1-800-784-2433)</span><br /> ​</p> <p><strong>Mental Health and Substance Abuse Services</strong></p> <p>Request for Services&nbsp;&nbsp; &nbsp;(800)-952-2335<br /> Mental Health Resource Center&nbsp;&nbsp; &nbsp;(831) 458-1923<br /> Psychiatric Emergencies - &nbsp;&nbsp;<span style="margin: 0px; padding: 0px; border: 0px; white-space: nowrap;">1‑877‑SAMHSA7</span>&nbsp;<span style="margin: 0px; padding: 0px; border: 0px; white-space: nowrap;">(1‑877‑726‑4727)</span><br /> &nbsp;</p> <p>&nbsp;</p> </div> <div class="row" style="text-align: center;"><label for="cbox2"><strong>​​</strong></label></div> <div class="row" id="workContent">' },
      { type: "radiogroup", name: "consent", title: "I understand the information presented and I voluntarily agree to participate in the research described above and I give my permission for my data to be retained and used in future studies described above.", choices: ['Yes', 'No'], isRequired: false }
]},
      { name: "demographicsPage",questions: [
      { type: "text", inputType: "number", name: "demo_age", title: "How old are you?", isRequired: false },
      { type: "radiogroup", name: "demo_gender", title: "To which gender do you most identify?", choices: ['Female', 'Male', 'Transgender Female', 'Transgender Male', 'Non-binary', 'Other', 'Prefer Not to Answer'], isRequired: false }
      ]},

      { name: "screenerpage",questions: [
            { type: "radiogroup", name: "screener1", title: "Have you bene bothered by nerviousness or your 'nerves' during the past month?", choices: ['Extremely so-to the point where I could not work or take care of things', 'Very much so', 'Quite a bit', 'Some-enough to bother me', 'A little', 'Not at all'], isRequired: true },
            { type: "radiogroup", name: "screener2", title: "How much energy, pop, or vitality did you have or feel during the past month?", choices: ['Very full of energy-lots of pep', 'Fairly energetic most of the time', 'My energy level varied quite a bit', 'Generally low in energy or pep', 'Very low in energy or pep most of the time', 'No energy or pep at all-I felt drained, sapped'], isRequired: true },
            { type: "radiogroup", name: "screener3", title: "I was emotionally stable and sure of myself during the past month", choices: ['None of the time', 'A little of the time', 'Some of the time', 'A good bit of the time', 'Most of the time', 'All of the time'], isRequired: true },
            { type: "radiogroup", name: "screener4depress", title: "Did you feel depressed during the past month?", choices: ['No-never felt depressed at all', 'Yes-a little depressed now and then', 'Yes-quite depressed several times', 'Yes-very depressed almost every day', 'Yes-to the point that I did not care about anything', 'Yes-to the point where I felt like taking my own life'], isRequired: true },
            { type: "radiogroup", name: "screener5", title: "I felt cheerful, lighthearted during the past month", choices: ['None of the time', 'A little of the time', 'Some of the time', 'A good bit of the time', 'Most of the time', 'All of the time'], isRequired: true },
            { type: "radiogroup", name: "screener6", title: "I felt tired, worn out, used up, or exhausted during the past month", choices: ['None of the time', 'A little of the time', 'Some of the time', 'A good bit of the time', 'Most of the time', 'All of the time'], isRequired: true },
          ] },
    { name:"returnAdmin", questions: [{
      type: "html",
      name: "info", 
      html: '<center><h3>Please ask the administrator to return to the room</h3><center>'
    }]},
    { name:"page1", questions: [ 
      { type: "html", name: "experiences", title:"experience", html:'<div id="expquestion"><center><h5>Please write at least 100 words about an emotional experience that affected you in the last week.</h5></center><center><span id="wordcount">0/100 words</span></center><div id="text" contenteditable class="textarea form-control"></div></div>', isRequired: true }
               ]},
      { name: "page2",questions: [
              { type: "radiogroup", name: "numsLookedAtViz", title: "Select the number of times you looked at the visualization while you were writing:", choices: ['I never looked at the visualization', 'Once', '2-5 times', '5-10 times', '10+ times'], isRequired: true },
              { type: "radiogroup", name: "vizLookEffectOnWriting", title: "If you selected more than once above: Rate the extent to which looking at the visualization impacted or did not impact your writing:", choices: ['Extreme Impact', 'Moderate Impact', 'Slight Impact', 'Had No Impact'], isRequired: false },
            ]},
      { name: "page3", questions: [
            { type: "matrix", name: "accuracies", title: "Please choose the answer that best reflects your thinking.", columns: [{ value: 1, text: "Strongly Negative"}, { value: 2, text: "Negative"}, { value: 3, text: "Slightly Negative"}, { value: 4, text: "Neutral"}, { value: 5, text: "Slightly Positive"}, { value: 6, text: "Positive"}, { value: 7, text: "Strongly Positive"}], rows: [{value: 'yourRating', text: "How positive or negative did you feel your writing was?"}, {value: 'eRating', text: "How positive or negative did the e-meter assess your writing to be?"}], isRequired: true },
            //to what extent do you trust the system and why (quant and qualitative)
       ] },
        { name: "page4",questions: [
            { type: "matrix", name: "accuracy", title: "Please choose the answer that best reflects your thinking.", columns: [{ value: 1, text: "Very Inaccurate"}, { value: 2, text: "Inaccurate"}, { value: 3, text: "Slightly Inaccurate"}, { value: 4, text: "Neither Accurate Nor Inaccurate"}, { value: 5, text: "Slightly Accurate"}, { value: 6, text: "Accurate"}, { value: 7, text: "Very Accurate"}], rows: [{value: 'eRating', text: "How accurate or inaccurate was the E-meter in its assessment of your writing?"}, {value: 'futureAccuracy', text: "If you were to use the system again how accurate or inaccurate do you think it would be?"}], isRequired: true },
          ] },
//make sure people can't look back on questions to frame current answers
          { name: "page5",questions: [
            { type: "radiogroup", name: "systemTrust", title: "How trustworthy or untrustworthy did you find the E-meter system?", choices: ['Very Untrustworthy', 'Untrustworthy', 'Slightly Untrustworthy', 'Neither Trustworthy Nor Untrustworthy', 'Slightly Trustworthy', 'Trustworthy', 'Very Trustworthy'], isRequired: true },
            { type: "checkbox", name: "trustReasons", title: "Which of the following factors were most relevant to you in your rating of trust or distrust?", choices: ['How predictably the E-meter behaved', 'Potential biases of E-meter\'s creators', 'E-meter\'s accuracy or inaccuracy on the content I wrote', 'E-meter\'s accuracy or inaccuracy on predicting my current emotional state', 'Actions I took to test the E-meter\'s response', 'Understanding of how the E-meter worked', 'Amount of time that I have used the E-meter for'], isRequired: false }
          ] },
          { name: "tetrisPage",questions: [
            { type: "html", name: "info", html: '<center><h3>You will now spend 5 minutes playing tetris. Please click this <a target="_blank" href="http://htmltetris.com/">link</a> and the administrator will notify you when 5 minutes has passed.</h3><center>' },
          ]},

        { name: "page6",questions: [
            { type: "radiogroup", name: "accuracy2", title: "How accurate or inaccurate did you find the E-meter system?", choices: ['Very Inaccurate', 'Inaccurate', 'Slightly Inaccurate', 'Neither Accurate Nor Inaccurate', 'Slightly Accurate', 'Accurate', 'Very Accurate'], isRequired: true },
            { type: "radiogroup", name: "systemTrust2", title: "How trustworthy or untrustworthy did you find the E-meter system?", choices: ['Very Untrustworthy', 'Untrustworthy', 'Slightly Untrustworthy', 'Neither Trustworthy Nor Untrustworthy', 'Slightly Trustworthy', 'Trustworthy', 'Very Trustworthy'], isRequired: true },
          ] },
     ]
};

var survey = new Survey.Survey(surveyJSON, "surveyContainer");
survey.sendResultOnPageNext = true;
//Use onComplete event to save the data           
survey.clientId = Math.random();
survey.onComplete.add(sendDataToServer);
survey.setValue('confirmationCode', confirmationCode)
survey.setValue('transparency', machineLearningCondition)

function sendDataToServer(survey) {
  survey.setValue('timeElapsed', new Date() - began);
  //You should get the Guid for storing survey data in dxSurvey.com
  survey.sendResult('70ad9ad7-5266-48af-a28a-05b978363cf6');
}

survey.onCurrentPageChanged.add(function (sender, options) {
  if (survey.currentPage.visibleIndex == 4 ) {
      document.querySelector('#textAndMeter').style.display = '';
      experienceNode = $('#expquestion');
  }
  else if (survey.currentPage.visibleIndex == 10) {
      console.log(survey.currentPage.visibleIndex);
      document.querySelector('#textAndMeter').style.display = '';
      $('#textAndMeter').append(experienceNode);
      $('#text').on('keypress', function(e) {
        e.preventDefault();
      });
  }
  else {
      console.log(survey.currentPage.visibleIndex);
      document.querySelector('#textAndMeter').style.display = 'none';
  }
});

var chart = c3.generate({
    bindto: "#emeter",
    data: {
        columns: [
            ['Positivity', 63.333]
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

function SetCaretPosition(el, pos){

    // Loop through all child nodes
    for(var i = 0; i < el.childNodes.length; i++){
        var node = el.childNodes[i];
        if(node.nodeType == 3){ // we have a text node
            if(node.length >= pos){
                // finally add our range
                var range = document.createRange(),
                    sel = window.getSelection();
                range.setStart(node,pos);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
                return -1; // we are done
            }else{
                pos -= node.length;
            }
        }else{
            pos = SetCaretPosition(node,pos);
            if(pos == -1){
                return -1; // no need to finish the for loop
            }
        }
    }
    return pos; // needed because of recursion stuff
}

var lastWord = '',
    timerOn = false;
document.body.onkeyup = function(e) {
  if (survey.currentPage.visibleIndex == 4) {
    if (e.keyCode == 32 || e.keyCode == 8 || e.keyCode == 13) {
      var words = $('#text').text().split(/\s/);
      $('#wordcount').text(words.length + '/100 words');
      //Interested in algorithm UX? Shoot me an email alspring(at)ucsc(dot)edu
        var written_text = $('#text').text(),
        newVal = predict_all(written_text),
        pos = $('#text').caret('pos'),
        word_colors = make_words_colors_dict(written_text);
        if (machineLearningCondition === 'transparent') {
          for (var key in word_colors) {
            written_text = written_text.replace(new RegExp('\\b' + key + '\\b', 'gi'),
              function (match) {
                return '<span style="background-color: ' + word_colors[key] + ';">' + match + '</span>';
            });
          }
          $('#text').html(written_text);
          $('#text').caret('pos', pos);
        }
        //restore();
        /*if (newVal > 100) {
          newVal = 100;
        } else if (newVal < 0) {
          newVal = 0;
        }*/
        experienceNode = $('#expquestion');
        survey.setValue('finalEmeterValue', newVal);
        chart.load({
              columns: [['Positivity', newVal]]
        });
      //}
   }
  }
}

$(document).ready(function() {
  experienceNode = $('#expquestion');
  document.querySelector('#textAndMeter').style.display = 'none';
  if(machineLearningCondition === 'transparent') {
    $('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the question below. Individual words you type will be highlighted according to whether they contribute towards a positive mood direction or negative mood direction.');
  } else {
    $('#explanation').text('The graphic above displays the output from an algorithm that assesses the positivity/negativity of your writing as you answer the question below.');
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
