/*
 * 
 * Author: P K JANA
 * IIT Kharagpur
 * 
 * Setup your quiz text and questions here
 * NOTE: pay attention to commas, IE struggles with those bad boys
 * 
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "Distillation is particularly important in",
            "a": [
                {"option": "Manufacture of sulphuric acid", "correct": false},
                {"option": "Petroleum refinery", "correct": false},
                {"option": "Both (a) and (b) ", "correct": true},
                {"option": "None of these", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Relative volatility, α is given by",
            "a": [
                {"option": "α=y(1-x)/(1-y)x", "correct": true},
                {"option": "α=yx/(1-y)(1-x)", "correct": false},
                {"option": "α=y(1-y)/x(1-x)", "correct": false},
                {"option": "α=x(1-x)/y(1-y)", "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Flash distillation is",
            "a": [
                {"option": "Same as differential distillation", "correct": true},
                {"option": "Used for multicomponent systems like crude refinery", "correct": false},
                {"option": "Same as simple distillation", "correct": false},
                {"option": "Most useful for handling binary system", "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        {// Question 4
            "q": "Relative volatility does not change appreciably with the change in",
            "a": [
                {"option": "Temperature", "correct": false},
                {"option": "Total pressure", "correct": true},
                {"option": "Vapour pressure", "correct": false},
                {"option": "None of these", "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        {// Question 5
            "q": " The relative volatility",
            "a": [
                {"option": "is independent of pressure", "correct": false},
                {"option": "Increases with increasing pressure", "correct": false},
                {"option": "Decreases with increasing pressure", "correct": false},
                {"option": "Increases with increasing pressure and temperature.", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 6
            "q": "Separation of components by distillation is not possible for",
            "a": [
                {"option": "α=1", "correct": true},
                {"option": "α>1", "correct": false},
                {"option": "α=0", "correct": false},
                {"option": "α<1", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 7
            "q": "In distillation separation is accomplished by application of",
            "a": [
                {"option": "Solvents", "correct": false},
                {"option": "Heat", "correct": false},
                {"option": "Absorbent", "correct": true},
                {"option": "None of these", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 8
            "q": "Roult's law is applicable to",
            "a": [
                {"option": "Ideal solution", "correct": false},
                {"option": "Nonideal solution", "correct": true},
                {"option": "Real solutions", "correct": false},
                {"option": "Both a and b", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 9
            "q": "A system comprising of two insoluble liquids, A and B will boil when the total pressure `P_t` is equal to",
            "a": [
                {"option": "`x_A^(sat)P_A+x_B^(sat)P_B`", "correct": false},
                {"option": "`P_A^(sat) + P_B^(sat) `", "correct": true},
                {"option": "`y_A^(sat)P_A + y_B^(sat)P_B`", "correct": false},
                {"option": "none of these", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 10
            "q": "For a multicomponent system the bubble point is that temperature when",
            "a": [
                {"option": "`sum_(i=1)^cy_i=1`", "correct": false},
                {"option": "`sum_(i=1)^cx_i=1`", "correct": false},
                {"option": "`sum_(i=1)^cy_i=0 `", "correct": false},
                {"option": "`sum_(i=1)^cx_i=0`", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 11
            "q": "For a multicomponent system the dew point is that temperature when",
            "a": [
                {"option": "`sum_(i=1)^c y_i=1`", "correct": true},
                {"option": "`sum_(i=1)^c x_i=1`", "correct": false},
                {"option": "`sum_(i=1)^c y_i=0`", "correct": false},
                {"option": "`sum_(i=1)^c x_i=0`", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
{// Question 12
            "q": "For ideal solutions relative volatility, α is related to the vapour pressure of components in a binary mixture according to the relation",
            "a": [
                {"option": "`α= P_A + P_B`", "correct": true},
                {"option": "`α= P_A / P_B`", "correct": false},
                {"option": "`α= P_B / P_A`", "correct": false},
                {"option": "`α= P_AP_B`", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 13
            "q": "In flash vaporisation,the product vapours",
            "a": [
                {"option": "is always in equilibrium with the liquid leaving the flash chamber", "correct": true},
                {"option": "is never in equilibrium with the liquid leaving the flash chamber", "correct": false},
                {"option": "May be in equilibrium with the liquid leaving the flash chamber and the extent of equilibrium depends on the vapour- liquid contact time in the chamber", "correct": false},
                {"option": "None of these.", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        }// no comma here
    ]
};
