'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.3c980472-8098-468d-b014-877617efd0e1"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'What Would Kanye Do';

/**
 * Array containing Kayne quotes.
 */
var FACTS = [
"So I refuse people who write me off as some rich kid taking a hobby, fashion as a bleep hobby or a fashion plate",
"I will bleep laser you with alien bleep eyes and explode your bleep head.",
"I am a creator and it's my responsibility.",
"So many people look at success is just like having money.",
"I build things that mean things to people .",
"you can't make my point. Only I can make my point.",
"Hey, you're gonna fall sometimes in a run for greatness.",
"I'm inspired by Walt Disney. I'm inspired by Howard Hughes. I'm inspired by Henry Ford. I'm inspired by Steve Jobs. I mean, I'm inspired by James Perse. I'm inspired by Calvin, I'm inspired by Ralph [Lauren], I'm inspired by Bernard Arnault.",
"For me, money is not my definition of success. Inspiring people is a definition of success.",
"One of the keys to happiness in our marriage is we’re allowed to be ourselves.",
"I used to have insecurity about my finances, then I announced that I had debt, and now I don't have any insecurities.",
"The one thing I don't have an insecurity about is public perception. I'm not going to conform to it, you know?",
"I can sleep. I love sleep; it's my favorite.",
"I love nudity. And I love beautiful shapes.",
"Determined. I would say my determination is way higher than my smartness.",
"I'm a creative genius and there's no other way to word it, and I know you're not supposed to say those things about yourself.",
" For me to say I wasn't a genius, I would just be lying to you and to myself.",
"What I care about is history, I care about people. I care about you guys getting the best product possible.",
"I feel like in some ways I'm like a soldier of culture and I realize that no one wants that to be my job.",
"Will I feel convicted about things that really meant stuff to culture that constantly get denied for years and years and years and years? I'm sorry. I will. I cannot lie about it in order to sell records.",
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random Kayne quote from the Kanye quote list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Kanye say: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me what would kanye do, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};