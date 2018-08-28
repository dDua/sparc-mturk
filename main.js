var record_count = 0;
var total_question_cnt = 0;
var question_num = 0
var passages = getContents().split("\n");
var hasMarks = false
var current_q_id = ""

//History passages
function getContents() {
    var survey_data = `The 5th Light Infantry was a long established regiment in the Indian Army, dating from 1803. and had a good military record. It was initially known as the 2nd Battalion, 21st Bengal Native Infantry and was re-designated as the 42nd Bengal Native  Infantry in 1843. After the Indian Mutiny, also known as the Indian rebellion of 1857, the surviving Bengal regiments were renumbered in 1861 and consequently the 42nd became the 5th Bengal Native  Infantry. Following army reforms, the word ‘'Native'' was dropped the regiment simply became known as the 5th Light Infantry. The regiment was well known for several battle honors, which included the Arakan, Afghanistan and Kandahar 1842, Ghunze 1842, Kabul and Moodkee, Ferozeshah and Sobroan 1857. It also fought in the Second Afghan War of 1879-80 and the Third Burmese War of 1885-87, which led to the British annexation of Burma and its tributary Shan states. Immediately prior to World War One, the regiment was employed in garrison duties in India. In 1914 the 5th LI was stationed in Nowgong when it was posted to Singapore to replace the King's Own Yorkshire Light Infantry, which had been ordered to France. Unusually for 1914-15 the 5th Light Infantry was an entirely Muslim unit, mainly comprising Ranghars  and Pathans, commanded by British and Indian officers. Upon arrival in Singapore, the 5th Light Infantry was based in Alexandra Barracks.
    The Łódź insurrection, also known as the June Days, was an uprising by Polish workers in Łódź against the Russian Empire between 21-25 June 1905. This event was one of the largest disturbances in the Russian-controlled Congress Poland during the Russian Revolution of 1905. Poland was a major center of revolutionary fighting in the Russian Empire in 1905-1907, and the Łódź insurrection was a key incident in those events. For months, workers in Łódź had been in a state of unrest, with several major strikes having taken place, which were forcibly suppressed by the Russian police and military. The insurrection began spontaneously, without backing from any organized group. Polish revolutionary groups were taken by surprise and did not play a major role in the subsequent events. Around 21-22 June, following clashes with the authorities in the previous days, angry workers began building barricades and assaulting police and military patrols. Additional troops were called by the authorities, who also declared martial law. On 23 June, no businesses operated in the city, as the police and military stormed dozens of workers' barricades. Eventually, by 25 June, the uprising was crushed, with estimates of several hundred dead and wounded. The uprising was reported in the international press and widely discussed by socialist and communist activists worldwide. Unrest in Łódź would continue for many months, although without protests on such a large-scale as before.
    The Koreans waited until a large Japanese fleet had left the island for a raid. Yi Jong-mu's fleet of 227 ships and 17,285 soldiers set off from Geoje Island toward Tsushima on June 19, 1419. The following day the fleet landed in Asō Bay . General Yi Jong-mu first sent captured Japanese pirates as emissaries to ask for surrender. When he received no reply, he  sent out expeditionary forces, and the soldiers proceeded to raid the islanders and pirates and plunder pirate settlements. He found and rescued 131 Chinese captives of the pirates and 21 slaves on the island, burned 129 ships and 1,939 houses, and killed or captured 135 pirates. On the 26th day, the Korean army was ambushed on land by a Japanese army in an ambush at Nii, and suffered 150 casualties. The ambush was known to the locals as the Battle of Nukadake . In the weeks that followed, a truce was negotiated with the Sō clan on the island. The Korean expeditionary force withdrew and sailed back to the Korean Peninsula on July 3, 1419. and Korea gave up occupation of Tsushima. In subsequent diplomatic exchanges, Tsushima would be granted trading priveldges with Joseon, in exchange for maintaining control and order of pirate threats originating from the island.
    1st Squadron, 10th Cavalry  with the 4th Infantry Division participated in Exercise Reforger in 1977, 1978, 1981, 1985, 1987, and 1991. Exercise Reforger  was an annual exercise conducted, during the Cold War, by NATO. The exercise was intended to ensure that NATO had the ability to quickly deploy forces to West Germany in the event of a conflict with the Warsaw Pact. 2nd Squadron, 10th Cavalry  with the 7th Infantry Division participated in Exercise Reforger in 1984, 1986 and 1993. 3rd Battalion, 10th Cavalry  was activated in the 1st Cavalry Division at Fort Hood, Texas, in 1977.
    The Anglo-Powhatan Wars were three wars fought between English settlers of the Virginia Colony, and Indians of the Powhatan Confederacy in the early seventeenth century. The First War started in 1610, and ended in a peace settlement in 1614. Another war between the two powers lasted from 1622 to 1626. The third war lasted from 1644 until 1646, and ended when Opechancanough was captured and killed. That war resulted in a boundary being defined between the Indians and English lands that could only be crossed for official business with a special pass. This situation would last until 1677 and the Treaty of Middle Plantation, which established Indian reservations following Bacon's Rebellion. `
    return survey_data
}

//NFL passages
function getContents_nfl() {
    var survey_data = `Hoping to recover from a two-game skid, the Cardinals flew to the Georgia Dome for a Week 4 match-up with the Atlanta Falcons.  From the get-go, the Cardinals trailed, as Falcons kicker Morten Andersen completed a 34-yard and a 40-yard field goal in the opening period.  The Cardinals would respond with a 29-yard field goal by kicker Neil Rackers.  In the second quarter, Arizona continued to trail, as Koenan belted a 51-yard field goal for Atlanta.  The Cardinals would strike back with SS Adrian Wilson returning an interception 99 yards for a touchdown, but that would be the only time that the Cardinals saw the lead, as Andersen got a 36-yard field goal to give the Falcons the lead at halftime.  In the second half, the Cardinals got shot down and shut-out, as Atlanta scored 20 unanswered points (Andersen's 26-yard field goal, CB DeAngelo Hall's 37-yard interception return in the third quarter, rookie RB Jerious Norwood's 78-yard TD run & Andersen's 28-yard field goal in the fourth quarter).  Not even QB Matt Leinart, who replaced QB Kurt Warner in the fourth quarter, could save Arizona from dropping three-straight games, as the Cardinals fell to 1-3. The game showed just how much the Cardinals must improve their offensive line, as they were whipped for the whole game by the Falcons defensive line.    
    The Cardinals opened the regular season at home against the San Francisco 49ers on September 10.  This game would be the inaugural regular season game played at the University of Phoenix Stadium.  In the first quarter, Niners QB Alex Smith and TE Vernon Davis scored the inaugural regular season TD in the new Stadium as they connected on a 31-yard pass.  Fortunately, the Cardinals would respond, as QB Kurt Warner threw the very first TD pass by a Cardinals player in the new stadium on a 2-yard strike to WR Troy Walters.  Newly acquired RB Edgerrin James provided the very first rushing touchdown in their new stadium as he ran the ball into the end zone on a 1-yard strike.  Afterwards, Warner threw another TD pass, this time to WR Anquan Boldin.  In the second quarter, Niners RB Frank Gore helped San Francisco get closer as he ran on a 4-yard TD play.  Kicker Neil Rackers helped improve the Cardinals' lead, as he kicked a 36-yard field goal.  In the third quarter, both sides each got a touchdown.  S.F.'s Gore scored on a 2-yard run, while Arizona's Warner threw a 7-yard TD to TE Adam Bergen.  In the fourth quarter, it was all field goals to end the game, as Niners kicker Joe Nedney kicked a 22-yard field goal.  Then, Rackers helped Arizona on a 30-yard field goal.  Even though Nedney would kick one more field goal for San Francisco (a 44-yard field goal), the Cardinals were able to barely escape with the win and a 1-0 start.
    Coming of their road win over the Rams, the Cardinals went home for an NFC West rematch with the Seattle Seahawks.  In the first quarter, the Cards drew first blood with QB Matt Leinart completing a 56-yard TD pass to WR Bryant Johnson, while RB Edgerrin James (who ran for 115 yards on the day) got a 7-yard TD run.  The Seahawks would respond with QB Matt Hasselbeck's 23-yard TD pass to WR D.J. Hackett.  In the second quarter, the Big Red increased its lead with kicker Neil Rackers getting a 32-yard field goal, yet Seattle responded with Hasselbeck's 5-yard TD pass to WR Nate Burleson.  In the third quarter, Arizona temporarily lost the lead as Hasselbeck completed a 2-yard TD pass to WR Darrell Jackson for the only score of the period.  Fortunately, in the fourth quarter, Arizona reclaimed the lead and won with Leinart's 5-yard TD pass to WR Larry Fitzgerald and Rackers' 40-yard field goal.  With the upset win, the Cardinals improved to 4-9. 
    At the Georgia Dome, Atlanta, Georgia The Falcons entered their Week 2 home-opener against another NFC South rival, the Tampa Bay Buccaneers.  The only Atlanta scores of the game came in the first quarter, with a 1-yard TD run on QB Michael Vick's QB sneak.  The only other Falcons score came in the second quarter, with RB Fred McCrary getting a 4-yard TD run.  The Buccaneers only score of the game came in the second quarter, with opposing kicker Matt Bryant kicking a 22-yard field goal.  The ground game made short work of the Tampa Defense, with Michael Vick and Warrick Dunn combining for 261 rushing yards. Rookie running back Jerious Norwood added 45 more rushing yards to the Falcon's total. The Falcons set a new  franchise record for rushing yards in a game with 306.  On the other side of the ball, the Falcons defense shut down the Tampa offense, with DeAngelo Hall picking off two passes and Jason Webster picking off one.  Also, they held Tampa Bay RB Carnell "Cadillac" Williams to just 37 yards on 15 carries.  Special teams struggled as kicker Michael Koenen missed three field goals and had one blocked, making him 2/8 so far this season. 
    At Cleveland Browns Stadium, Cleveland, Ohio TV Time: CBS 4:05pm eastern The Ravens traveled to Cleveland, Ohio for an AFC North match-up with the Cleveland Browns.  The Ravens struck first with kicker Matt Stover getting a 32-yard field goal.  However, in the second quarter, their small lead was wiped out, as WR Braylon Edwards caught a 58-yard TD pass and QB Charlie Frye got a one-yard TD run.  In the third quarter, both sides stiffened their defenses and prevented each other from scoring.  In the fourth quarter, down by 2 points, McNair drove down the field to set Stover up for a 52-yard field goal. With 0:29 left in the 4th quarter the field goal provided the winning points.  Steve McNair passed for 264 yards. He threw no interceptions and completed 23 passes out of 41. Jamal Lewis rushed for 86 yards. The leading receiver was Derrick Mason with 7 completions for 132 yards. The defense sacked Brown's quarterback Charlie Frye seven times. The defense also had one forced fumble and an interception. With their third straight win, the Ravens advanced to 3-0.
    Keeping some slim playoff hopes alive, the Bills stayed home, donned their throwback jerseys again and faced a fierce Week 13 challenge against the San Diego Chargers. In the first quarter, the Chargers struck first with kicker Nate Kaeding getting a 42-yard FG, while LaDainian Tomlinson got a 51-yard run. In the second quarter, Buffalo continued to struggle as Philip Rivers completed an 11-yard pass to Antonio Gates for the only score of the period. In the third quarter, the Bills scored with J. P. Losman completing a 6-yard pass to Robert Royal, while Willis McGahee got a 2-yard run. However, in the fourth quarter, Tomlinson got his second touchdown run of the day, a 2-yarder. A 6-yard pass from Losman to Peerless Price closed the gap, but a failed onside kick sealed any chance of a comeback victory. With the loss, the Bills dropped to 5-7. 
    The Bengals opened the regular season on the road against the Kansas City Chiefs on September 10.  The Chiefs scored first on a 29-yard field goal by kicker Lawrence Tynes.  In the second quarter, the Bengals scored 17-straight points.  Bengal kicker Shayne Graham tied the game up with a 37-yard field goal, Rudi Johnson ran 22 yards for a touchdown, and Kenny Watson ran 8 yards for another touchdown, making the score 17-3 at halftime.  After both sides failed to score in the third quarter,  which was marked by Chief quarterback Trent Green being injured and leaving the game, Graham made the score 20-3 with a 42-yard field goal.  A Chiefs' come back fell short, as they could only score on a 9-yard touchdown pass from Chief back-up quarterback Damon Huard to tight end Tony Gonzalez.  A 36-yard field goal by Graham would be the final score of the game, leaving the Bengals 1-0. 
    Hoping to rebound from their Sunday night home loss to the Saints, the Cowboys flew to the Georgia Dome for a Saturday night fight with the Atlanta Falcons.  In the first quarter, Dallas took an early lead with QB Tony Romo completed a 7-yard TD pass to WR Terrell Owens for the only score of the period.  In the second quarter, the Cowboys increased its lead as on the very first play, OLB DeMarcus Ware returned an interception 41 yards for a touchdown.  However, the Falcons started to fight back with QB Michael Vick completing a 1-yard TD pass to FB Justin Griffith and a 9-yard TD pass to WR Michael Jenkins.  Fortunately, the 'Boys struck back with Romo and Owens hooking up with each other again with a 51-yard TD pass.  Yet again, Atlanta fought back with Vick completing an 8-yard TD pass to WR Ashley Lelie.  In the third quarter, Dallas temporarily fell behind with Vick completing 5-yard TD pass to Griffith.  Afterwards, the Cowboys regained control with kicker Martin Gramatica's 48-yard field goal and RB Marion Barber 9-yard TD run.  In the fourth quarter, Barber helped the Cowboys wrap the game up with a 3-yard TD run.  With the win, the 'Boys improved to 9-5 and put themselves in position to clinch a playoff berth following the day`
    return survey_data
}

// Attach AI-answer fetch to the quest text keyup event
function initialize_answer() {
    var textInput = document.getElementById('input-question-' + current_q_id);
    var timeout = null;

    textInput.onkeyup = function (e) {
        document.getElementsByClassName("wait_loop")[0].innerText = "AI is thinking ..."
        if (textInput.value == "") {
            document.getElementById('ai-answer').innerText = ""
        }

        clearTimeout(timeout);

        timeout = setTimeout(function () {
            invoke_bidaf_with_retries(3);
        }, 800);
    };
}

// Check for Bag-of-Words overlap
function bow_overlap(a, b, threshold) {
    var stopwords = new Set(["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"]);
    var a_withoutpunct = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]]/g, "");
    var a_final = a_withoutpunct.replace(/\s{2,}/g, " ");
    a_final = a_final.trim()
    var b_withoutpunct = b.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]]/g, "");
    var b_final = b_withoutpunct.replace(/\s{2,}/g, " ");
    b_final = b_final.trim()
    set1 = new Set(a_final.split(" "))
    var set1_difference = new Set([...set1].filter(x => !stopwords.has(x)));
    set2 = new Set(b_final.split(" "))
    var set2_difference = new Set([...set2].filter(x => !stopwords.has(x)));
    var intersection = new Set([...set1_difference].filter(x => set2_difference.has(x)));

    var overlap = Array.from(intersection)
    var result = overlap.length / Math.max(set1_difference.size, set2_difference.size)
    return (result != threshold)
}

//Reset Error Panel
function reset_error() {
    var parent = document.getElementsByClassName("error_panel")[0]
    parent.innerText = ""
}

//Get currently displayed question index
function get_current_question_num() {
    var current_question = document.getElementsByClassName("question")[0]
    for (var child = current_question.firstChild; child !== null; child = child.nextSibling) {
        if (child.style && child.id && child.style.display != "none") {
            return child.id.replace("input-question-", "")
        }
    }
}

// Check if the current question id exists in HTML (hidden or visible)
function check_if_question_exists(current_qnum) {
    var blocks = document.getElementsByClassName("rectangles");
    for (var i = 0; i < blocks.length; i++) {
        if (blocks.item(i).id == current_qnum) {
            return true
        }
    }
    return false
}

//Get elements matching id regex
function get_elements_by_id_starts_with(container, selector_tag, prefix) {
    var items = [];
    var candidate_el = document.getElementById(container).getElementsByTagName(selector_tag);
    for (var i = 0; i < candidate_el.length; i++) {
        //omitting undefined null check for brevity
        if (candidate_el[i].id.lastIndexOf(prefix, 0) === 0) {
            items.push(candidate_el[i]);
        }
    }
    return items;
}

//Get elements matching class regex
function get_elements_by_class_starts_with(container, selector_tag, prefix) {
    var items = [];
    var candidate_el = document.getElementsByClassName(container)[0].getElementsByTagName(selector_tag);
    for (var i = 0; i < candidate_el.length; i++) {
        //omitting undefined null check for brevity
        if (candidate_el[i].id.lastIndexOf(prefix, 0) === 0) {
            items.push(candidate_el[i]);
        }
    }
    return items;
}

//Get visible question-id element 
function get_visible_id() {
    var question_el = get_elements_by_class_starts_with("question", "input", "input-question-")
    for (var i = 0; i < question_el.length; i++) {
        if (question_el[i].style.display != "none") {
            return question_el[i].id.replace("input-question-","")
        }
    }
}

// Edit an already added QA pair
function modify_previous_question() { 
    current_q_id = get_visible_id()
    var question_el = document.getElementById("input-question-" + current_q_id)
    question_el.style.display = "none";

    deselect_date()
    deselect_span()
    deselect_digit()
    deselect_bool()

    var question_el = document.getElementById('input-question-' + this.id)
    question_el.style.display = "";
    current_q_id = this.id

    if (document.getElementById("date-" + this.id)) {
        document.getElementById("date").checked = true
        document.getElementById("date_row_1").style.display = ""
        document.getElementById("date-" + this.id).style.display = ""

    } else if (document.getElementById("digit-" + this.id)) {
        document.getElementById("digit").checked = true
        document.getElementById("digit_row_1").style.display = ""
        document.getElementById("digit-" + this.id).style.display = ""
    } else if (document.getElementById("no_" + this.id) && document.getElementById("yes_" + this.id).checked) {
        var yes_no_ind = document.getElementById("yes_no_row").rowIndex
        var ans_table = document.getElementById("ans_table");
        var yes_row = ans_table.rows[yes_no_ind + 1]
        var no_row = ans_table.rows[yes_no_ind + 2]
        yes_row.style.display = ""
        no_row.style.display = ""        
        document.getElementById("yes_" + this.id).checked = true        
    } else if (document.getElementById("no_" + this.id) && document.getElementById("no_" + this.id).checked) {
        document.getElementById("yes_no").checked = true
        var yes_no_ind = document.getElementById("yes_no_row").rowIndex
        var ans_table = document.getElementById("ans_table");
        var yes_row = ans_table.rows[yes_no_ind + 1]
        var no_row = ans_table.rows[yes_no_ind + 2]
        yes_row.style.display = ""
        no_row.style.display = ""
        document.getElementById("no_" + this.id).checked = true
    } else {
        document.getElementById("span").checked = true
        var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-" + this.id)
        for (var i = 0; i < span_elements.length; i++) {
            span_elements[i].parentNode.parentNode.style.display = ""
        }
    }
    
    initialize_answer()
    question_el.dispatchEvent(new KeyboardEvent('keyup', { 'key': ' ' }))
}

// Delete previous digit element while modifying
function remove_digit() {
    var prev_digit_el = document.getElementById("digit-" + current_q_id)
    if (prev_digit_el) {
        prev_digit_el.remove()
    }
}

// Delete previous yes/no element while modifying
function remove_bool() {
    var prev_bool_el = document.getElementById("yes_" + current_q_id)
    if (prev_bool_el) {
        prev_bool_el.remove()
    }
    var prev_bool_el = document.getElementById("no_" + current_q_id)
    if (prev_bool_el) {
        prev_bool_el.remove()
    }
}

// Delete previous date element while modifying
function remove_date() {
    var prev_date_el = document.getElementById("date-" + current_q_id)
    if (prev_date_el) {
        prev_date_el.remove()
    }
}

// Delete previous span element while modifying
function remove_span() {
    var span_el = get_elements_by_id_starts_with("ans_table", "input", "span-" + current_q_id)
    for (var i = 0; i < span_el.length; i++) {
        span_el[i].parentNode.parentNode.remove()
    }

}

// Create text for the bottom rectangle tab
function create_text_for_tab(q_num, flag_exists) {
    var empty_qa = false
    var correct_flag = true
    var duplicate_check = false
    var question_el = document.getElementById("input-question" + q_num)
    if (question_el.value.trim() == "") {
        empty_qa = empty_qa || true
    }

    var qa_text = "Q: " + question_el.value + "\nA: "
    if (document.getElementById("date").checked) {
        var year = document.getElementById("year" + q_num).value
        var month = document.getElementById("month" + q_num).value
        var day = document.getElementById("day" + q_num).value
        var input_date = day + " " + month + " " + year
        input_date = input_date.trim()
        if (input_date == "") {
            empty_qa = empty_qa || true
        }
        qa_text = qa_text + input_date
        var ai_overlap = bow_overlap(document.getElementById("ai-answer").innerText, input_date, 1.0)
        var duplicate_check = duplicate_qa_check(qa_text)
        if (flag_exists) {
            remove_digit()
            remove_span()
            remove_bool()
        }

    } else if (document.getElementById("digit").checked) {
        var dig = document.getElementById("dig_answer" + q_num).value
        var unit = document.getElementById("unit_answer" + q_num).value
        var input_number = dig + " " + unit
        var input_number = input_number.trim()
        if (input_number == "") {
            empty_qa = empty_qa || true
        }
        qa_text = qa_text + input_number
        var ai_overlap = bow_overlap(document.getElementById("ai-answer").innerText, input_number, 1.0)
        var duplicate_check = duplicate_qa_check(qa_text)
        if (flag_exists) {
            remove_date()
            remove_span()
            remove_bool()
        }

    } else if (document.getElementById("span").checked) {
        var correct_flag = span_match_check()
        var i_cnt = 0
        var input_spans = ""
        var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-" + current_q_id)
        for (var i = 0; i < span_elements.length; i++) {
            if (span_elements[i].value.trim() != "") {
                input_spans = input_spans + "[" + span_elements[i].value.trim() + "] "
            } else {
                empty_qa = empty_qa || true
            }
        }
        var ai_overlap = bow_overlap(document.getElementById("ai-answer").innerText, input_spans, 1.0)
        qa_text = qa_text + input_spans
        var duplicate_check = duplicate_qa_check(qa_text)
        if (flag_exists) {
            remove_date()
            remove_digit()
            remove_bool()
        }

    } else if (document.getElementById("yes_no").checked) {
        var bool_el = document.getElementsByName("yes_no")
        
        if (bool_el[0].checked) {
            qa_text = qa_text + "Yes"
            var ai_overlap = bow_overlap(document.getElementById("ai-answer").innerText, "Yes", 1.0)
        } else {
            qa_text = qa_text + "No"
            var ai_overlap = bow_overlap(document.getElementById("ai-answer").innerText, "No", 1.0)
        }
        if (flag_exists) {
            remove_date()
            remove_digit()
            remove_span()
        }
    }

    return {
        "qa_text": qa_text,
        "ai_overlap": ai_overlap,
        "empty_qa": empty_qa,
        "correct_text": correct_flag,
        "duplicate_check": duplicate_check
    }
}

//Submit the question 
function create_question() {
    hasMarks = true
    reset_error()
    var correct_flag = new Boolean(true)
    
    var current_qnum = get_current_question_num()
    var flag_exists = check_if_question_exists(current_qnum)

    // get query if for current or previously added question
    var q_num = "-"
    if (flag_exists) {
        q_num = q_num + current_qnum
    } else {
        q_num = q_num + (record_count - 1) + "-" + question_num
    }
    var question_el = document.getElementById("input-question" + q_num)
  
    //create the text for the bottom rectangle container containing QA pair 
    var result = create_text_for_tab(q_num, flag_exists)
    var qa_text = result.qa_text
    var ai_overlap = result.ai_overlap
    var empty_qa = result.empty_qa
    var correct_flag = result.correct_text
    var duplicate_check = result.duplicate_check

    var tab_container = document.getElementsByClassName("horizontal-scroll-wrapper")[0]

    // If all the checks satify 
    if (correct_flag && ai_overlap && !empty_qa && !duplicate_check) {

        // Create the bottom tab container if its a new questionand question is new add it
        if (!flag_exists) {
            var new_tab = document.createElement("div");
            new_tab.className = 'rectangles'
            new_tab.id = (record_count - 1) + '-' + question_num
            new_tab.onclick = modify_previous_question
            new_tab.innerText = qa_text
            tab_container.appendChild(new_tab);
            question_num = question_num + 1
            total_question_cnt = total_question_cnt + 1
            // else just modify the text
        } else {
            var curr_tab = document.getElementById(current_qnum);
            curr_tab.innerText = qa_text
            question_el.style.display = "none"
        }

        // reset answer containers
        deselect_date()
        deselect_digit()
        deselect_span()
        deselect_bool()
        document.getElementById('ai-answer').innerText = ""

        // Create new question text for next question
        create_input_question(record_count - 1, false)
        hasMarks = false

    } else if (!correct_flag) {
        var parent = document.getElementsByClassName("error_panel")[0]
        if (document.getElementById("span").checked) {
            parent.innerText = "Please check the spans. The text should match the spans in passage exactly!"
        } else if (document.getElementById("date").checked) {
            parent.innerText = "Please check the date. The text should match the date in passage exactly!"
        }
    } else if (empty_qa) {
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "Empty question or answer"
    } else if (!ai_overlap) {
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "AI answer matches true answer. Please try a different question."
    } else if (duplicate_check) {
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "Same question-answer pair has alreday been added.  Please try a different question."
    } else {
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "Something wrong with the answer please try a differenet question."
    }
}

// Run span checks on hover 
function run_validations_span() {
    hasMarks = true
    reset_error()
    var current_qnum = get_current_question_num()
    var flag_exists = check_if_question_exists(current_qnum)
    var q_num = "-"
    if (flag_exists) {
        q_num = q_num + current_qnum
    } else {
        q_num = q_num + (record_count - 1) + "-" + question_num
    }

    var result = create_text_for_tab(q_num, flag_exists)
    var qa_text = result.qa_text
    var ai_overlap = result.ai_overlap
    var empty_qa = result.empty_qa
    var correct_flag = result.correct_text
    var duplicate_check = result.duplicate_check

    if (correct_flag && ai_overlap && !empty_qa && !duplicate_check) {
        document.getElementById("next_question").style.background = "#2085bc";
    }
    else if (!correct_flag) {
        document.getElementById("next_question").style.background = "darkgray";
        var parent = document.getElementsByClassName("error_panel")[0]
        if (document.getElementById("span").checked) {
            parent.innerText = "Please check the spans. The text should match the spans in passage exactly!"
        } else if (document.getElementById("date").checked) {
            parent.innerText = "Please check the date. The text should match the date in passage exactly!"
        }
    } else if (empty_qa) {
        document.getElementById("next_question").style.background = "darkgray";
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "Empty question or answer"
    } else if (!ai_overlap) {
        document.getElementById("next_question").style.background = "darkgray";
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "AI answer matches true answer. Please try a different question."
    } else if (duplicate_check) {
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "Same question-answer pair has alreday been added.  Please try a different question."
    } else {
        document.getElementById("next_question").style.background = "darkgray";
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "Something wrong with the answer please try a differenet question."
    }
}

// Run boolean checks on click 
function run_validations_bool() {
    var bool_el = document.getElementsByName("yes_no")
    if (bool_el[0].checked || bool_el[1].checked) {
        document.getElementById("next_question").style.background = "#2085bc";
    } else {
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "Please choose an answer Yes or No."
    }
}

// Run date and digit checks on hover 
function run_validations_date_digit() {
    hasMarks = true
    reset_error()
    var current_qnum = get_current_question_num()
    var flag_exists = check_if_question_exists(current_qnum)
    var q_num = "-"
    if (flag_exists) {
        q_num = q_num + current_qnum
    } else {
        q_num = q_num + (record_count - 1) + "-" + question_num
    }

    var result = create_text_for_tab(q_num, flag_exists)
    var qa_text = result.qa_text
    var ai_overlap = result.ai_overlap
    var empty_qa = result.empty_qa
    var correct_flag = result.correct_text

    if (ai_overlap && !empty_qa && !duplicate_check) {
        document.getElementById("next_question").style.background = "#2085bc";
    } else if (empty_qa) {
        document.getElementById("next_question").style.background = "darkgray";
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "Empty question or answer"
    } else if (!ai_overlap) {
        document.getElementById("next_question").style.background = "darkgray";
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "AI answer matches true answer. Please try a different question."
    } else if (duplicate_check) {
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "Same question-answer pair has alreday been added.  Please try a different question."
    } else {
        document.getElementById("next_question").style.background = "darkgray";
        var parent = document.getElementsByClassName("error_panel")[0]
        parent.innerText = "Something wrong with the answer please try a differenet question."
    }
}

function duplicate_qa_check(cand_text) {
    cand_text = cand_text.toLowerCase().trim()
    var qa_list = document.getElementsByClassName("rectangles")
    for (var i = 0; i < qa_list.length; i++) {
        if (cand_text == qa_list[i].innerText.toLowerCase().trim()) {
            return true
        }
    }
    return false
}

// Check for 'how many' string in question
function how_many_check() {
    var unit_el = document.getElementById("unit_answer-" + current_q_id)
    var question_el = document.getElementById("input-question-" + current_q_id)
    if (question_el.value.toLowerCase().includes("how many") == true) {
        unit_el.disabled = true
    }
}

// Check if answer span overlaps with text in passage
function span_match_check() {
    var correct_flag = new Boolean(true);
    if (document.getElementById("span").checked) {
        var span_ind = document.getElementById("span_row").rowIndex
        var ans_table = document.getElementById("ans_table");        
        var span_values = get_last_span()
        var span_count = parseInt(span_values.last_span_tokens[span_values.last_span_tokens.length - 1], 10) + 2
        for (var i = span_ind + 1; i < span_count; i++) {
            var span_id = "span-" + current_q_id + "-" + (i - 1)
            var curr_span = document.getElementById(span_id)
            var span_value = document.getElementById(span_id).value
            var cur_span_row = ans_table.rows[i]
            var passage_str = document.getElementsByClassName("passage-" + record_count)[0].innerText
            var pattern = new RegExp(span_value);
            if (pattern.test(passage_str)) {
                if ((cur_span_row.cells.length == 1) ||
                    ((span_count - 1 == i) && (cur_span_row.cells.length == 2))) {
                    var marker = cur_span_row.insertCell(1)
                    marker.innerHTML = '<p style="color: green;">&#10004;</p>'
                } else {
                    var marker = cur_span_row.cells[1]
                    marker.innerHTML = '<p style="color: green;">&#10004;</p>'
                }
            } else {
                if ((cur_span_row.cells.length == 1) ||
                    ((span_count - 1 == i) && (cur_span_row.cells.length == 2))) {
                    var marker = cur_span_row.insertCell(1)
                    marker.innerHTML = '<p style="color: red;">&#10008;</p>'
                } else {
                    var marker = cur_span_row.cells[1]
                    marker.innerHTML = '<p style="color: red;">&#10008;</p>'
                }
                correct_flag = correct_flag && false
            }

        }
    }
    return correct_flag;
}

// remove annotation highlights on mouse out
function reset_higlight() {
    var parent = document.getElementsByClassName("passage-sample")[0]
    var q1_span = parent.getElementsByClassName("ans_span1_high")
    var q2_span = parent.getElementsByClassName("ans_span2_high")
    var q3_span = parent.getElementsByClassName("ans_span3_high")
    var q4_span = parent.getElementsByClassName("ans_span4_high")
    var q5_span = parent.getElementsByClassName("ans_span5_high")
    var q6_span = parent.getElementsByClassName("ans_span6_high")
    var q7_span = parent.getElementsByClassName("ans_span7_high")
    var q8_span = parent.getElementsByClassName("ans_span8_high")
    var q9_span = parent.getElementsByClassName("ans_span9_high")
    var q10_span = parent.getElementsByClassName("ans_span10_high")
    var q11_span = parent.getElementsByClassName("ans_span11_high")
    var q12_span = parent.getElementsByClassName("ans_span12_high")

    if (q1_span != 'null') {
        reset_class(q1_span, "ans_span1")
    }
    if (q2_span != 'null') {
        reset_class(q2_span, "ans_span2")
    }
    if (q3_span != 'null') {
        reset_class(q3_span, "ans_span3")
    }
    if (q4_span != 'null') {
        reset_class(q4_span, "ans_span4")
    }
    if (q5_span != 'null') {
        reset_class(q5_span, "ans_span5")
    }
    if (q6_span != 'null') {
        reset_class(q6_span, "ans_span6")
    }
    if (q7_span != 'null') {
        reset_class(q7_span, "ans_span7")
    }
    if (q8_span != 'null') {
        reset_class(q8_span, "ans_span8")
    }
    if (q9_span != 'null') {
        reset_class(q9_span, "ans_span9")
    }
    if (q10_span != 'null') {
        reset_class(q10_span, "ans_span10")
    }
    if (q11_span != 'null') {
        reset_class(q11_span, "ans_span11")
    }
    if (q12_span != 'null') {
        reset_class(q11_span, "ans_span11")
    }
}

// Util class for changing class name to apply css
function reset_class(q_span, class_name) {
    count = q_span.length - 1
    while (count >= 0) {
        q_span[count].className = class_name
        count = count - 1;
    }
}

// event on hover over on annotated question
function highlight_q1() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span1");
    reset_class(q_span, "ans_span1_high")
    var q_span = parent.getElementsByClassName("ans_span3");
    reset_class(q_span, "ans_span3_high")
}

// event on hover over on annotated question
function highlight_q2() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span2");
    reset_class(q_span, "ans_span2_high")
    var q_span = parent.getElementsByClassName("ans_span5");
    reset_class(q_span, "ans_span5_high")
}

// event on hover over on annotated question
function highlight_q3() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span1");
    reset_class(q_span, "ans_span1_high")
}

// event on hover over on annotated question
function highlight_q4() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span4");
    reset_class(q_span, "ans_span4_high")
    var q_span = parent.getElementsByClassName("ans_span2");
    reset_class(q_span, "ans_span2_high")
}

// event on hover over on annotated question
function highlight_q5() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span4");
    reset_class(q_span, "ans_span4_high")
    var q_span = parent.getElementsByClassName("ans_span2");
    reset_class(q_span, "ans_span2_high")
}

// event on hover over on annotated question
function highlight_q6() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span4");
    reset_class(q_span, "ans_span4_high")
    var q_span = parent.getElementsByClassName("ans_span1");
    reset_class(q_span, "ans_span1_high")
}

// event on hover over on annotated question
function highlight_q7() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span6");
    reset_class(q_span, "ans_span6_high")
}

// event on hover over on annotated question
function highlight_q8() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span1");
    reset_class(q_span, "ans_span1_high")
    var q_span = parent.getElementsByClassName("ans_span2");
    reset_class(q_span, "ans_span2_high")
    var q_span = parent.getElementsByClassName("ans_span4");
    reset_class(q_span, "ans_span4_high")
}

// event on hover over on annotated question
function highlight_q9() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span5");
    reset_class(q_span, "ans_span5_high")
    var q_span = parent.getElementsByClassName("ans_span2");
    reset_class(q_span, "ans_span2_high")
}

// event on hover over on annotated question
function highlight_q10() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span8");
    reset_class(q_span, "ans_span8_high")
    var q_span = parent.getElementsByClassName("ans_span9");
    reset_class(q_span, "ans_span9_high")
}

// event on hover over on annotated question
function highlight_q11() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span6");
    reset_class(q_span, "ans_span6_high")
    var q_span = parent.getElementsByClassName("ans_span10");
    reset_class(q_span, "ans_span10_high")
}

// event on hover over on annotated question
function highlight_q1_nfl() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span1");
    reset_class(q_span, "ans_span1_high")
    var q_span = parent.getElementsByClassName("ans_span2");
    reset_class(q_span, "ans_span2_high")
}

// event on hover over on annotated question
function highlight_q2_nfl() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span2");
    reset_class(q_span, "ans_span2_high")
    var q_span = parent.getElementsByClassName("ans_span3");
    reset_class(q_span, "ans_span3_high")
}

// event on hover over on annotated question
function highlight_q3_nfl() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span4");
    reset_class(q_span, "ans_span4_high")
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span5");
    reset_class(q_span, "ans_span5_high")
}

// event on hover over on annotated question
function highlight_q4_nfl() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span6");
    reset_class(q_span, "ans_span6_high")
    var q_span = parent.getElementsByClassName("ans_span3");
    reset_class(q_span, "ans_span3_high")
}

// event on hover over on annotated question
function highlight_q5_nfl() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span7");
    reset_class(q_span, "ans_span7_high")
    var q_span = parent.getElementsByClassName("ans_span8");
    reset_class(q_span, "ans_span8_high")
}

// event on hover over on annotated question
function highlight_q6_nfl() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span2");
    reset_class(q_span, "ans_span2_high")
    var q_span = parent.getElementsByClassName("ans_span9");
    reset_class(q_span, "ans_span9_high")
    var q_span = parent.getElementsByClassName("ans_span10");
    reset_class(q_span, "ans_span10_high")
    var q_span = parent.getElementsByClassName("ans_span11");
    reset_class(q_span, "ans_span11_high")
}

// event on hover over on annotated question
function highlight_q7_nfl() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span12");
    reset_class(q_span, "ans_span12_high")
}

// add element for date type answer
function create_input_date() {
    var a_num = current_q_id
    if (document.getElementById("date").checked) {
        var ans_table = document.getElementById("ans_table");
        var date_ind = document.getElementById("date_row").rowIndex
        var caption_row = document.getElementById("date_row_1")
        caption_row.style.display = ''

        var input_row = ans_table.insertRow(date_ind + 2)
        input_row.id = "date-" + a_num
        var year_row = input_row.insertCell(0)
        year_row.innerHTML = '<input type="number" id="year-' + a_num + '" name="year-' +
            a_num + '" min="1" max="3000">'
        document.getElementById("year-" + a_num).onkeyup = run_validations_date_digit
        var month_row = input_row.insertCell(1)
        month_row.innerHTML = '<select id="month-' + a_num + '" name="month-' + a_num +
            '"><option></option><option>Jan</option><option>Feb</option><option>Mar</option><option>Apr</option><option>May</option><option>Jun</option><option>Jul</option><option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option><option>Dec</option></select>'
        document.getElementById("month-" + a_num).onkeyup = run_validations_date_digit
        var day_row = input_row.insertCell(2)
        day_row.innerHTML = '<input type="number" id="day-' + a_num + '" name="day-' +
            a_num + '" min="1" max="31">'
        document.getElementById("day-" + a_num).onkeyup = run_validations_date_digit
    }   
    deselect_digit()
    deselect_span()
    deselect_bool()
    remove_digit()
    remove_span()
}

// add element for yes-no type answer
function create_yes_no() {
    document.getElementById("yes_no_row_1").style.display = ""
    document.getElementById("yes_no_row_2").style.display = ""

    var yes_no_ind = document.getElementById("yes_no_row").rowIndex
    var ans_table = document.getElementById("ans_table");
    var yes_row = ans_table.rows[yes_no_ind + 1]
    var y_td = yes_row.insertCell(1)
    y_td.innerHTML = '<input type="radio" name="yes_no" value="yes" id="yes_' + current_q_id + '">Yes'
    y_td.width = "50%"
    y_td.id = "yes_row_" + current_q_id
    y_td.onclick = run_validations_bool

    var no_row = ans_table.rows[yes_no_ind + 2]
    var n_td = no_row.insertCell(1)
    n_td.innerHTML = '<input type="radio" name="yes_no" value="no" id="no_' + current_q_id + '">No'
    n_td.width = "50%"
    n_td.id = "no_row_" + current_q_id
    n_td.onclick = run_validations_bool
    deselect_date()
    deselect_span()
    deselect_digit()
}


// add element for digit type answer
function create_input_digit() {
    var q_id = current_q_id
    if (document.getElementById("digit").checked) {
        var dig_ind = document.getElementById("digit_row").rowIndex
        var ans_table = document.getElementById("ans_table");
        var caption_row = document.getElementById("digit_row_1")
        caption_row.style.display = ''

        var input_row = ans_table.insertRow(dig_ind + 2)
        input_row.id = "digit-" + q_id
        var value_row = input_row.insertCell(0)
        value_row.innerHTML = '<input name="dig_answer-' + q_id
            + '" id="dig_answer-' + q_id + '" rows="1" type="number">'
        document.getElementById("dig_answer-" + q_id).onkeyup = run_validations_date_digit
        var unit_row = input_row.insertCell(1)
        unit_row.innerHTML = '<input name="unit_answer-' + q_id
            + '" id="unit_answer-' + q_id + '" rows="1" type="text">'

        how_many_check();

    }
    deselect_date()
    deselect_span()
    deselect_bool()
    remove_span()
    remove_date()
}

// deselect yes-no type answer
function deselect_bool() {
    if (document.getElementById("yes_row_" + current_q_id)) {
        document.getElementById("yes_row_" + current_q_id).style.display = "none"
    }
    if (document.getElementById("no_row_" + current_q_id)) {
        document.getElementById("no_row_" + current_q_id).style.display = "none"
    }
    document.getElementById("yes_no").checked = false
}

// deselect date type answer
function deselect_date() {
        var date_ind = document.getElementById("date_row").rowIndex
        var ans_table = document.getElementById("ans_table");
        if (document.getElementById("date-" + current_q_id)) {
            var caption_row = document.getElementById("date_row_1")
            caption_row.style.display = 'none'
            document.getElementById("date-" + current_q_id).style.display = 'none'
        }
        document.getElementById("date").checked = false
}

// deselect digit type answer
function deselect_digit() {
        var dig_ind = document.getElementById("digit_row").rowIndex
        var ans_table = document.getElementById("ans_table");
        if (document.getElementById("digit-" + current_q_id)) {
            var caption_row = document.getElementById("digit_row_1")
            caption_row.style.display = 'none'
            document.getElementById("digit-" + current_q_id).style.display = 'none'
        }
        document.getElementById("digit").checked = false 
}

// deselect span type answer
function deselect_span() {
    var span_ind = document.getElementById("span_row").rowIndex
    var ans_table = document.getElementById("ans_table");
    var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-" + current_q_id)

    if (span_elements.length > 0) {
        for (var i = 0; i < span_elements.length; i++) {
            // remove tick marks
            var mark_node = span_elements[i].parentNode.nextSibling
            if (mark_node && !mark_node.innerText.includes("Add span")) {
                mark_node.remove()
            }
            span_elements[i].parentNode.parentNode.style.display = "none"
        }
        document.getElementById("span").checked = false
    }
}

// add a question element for each new question
function create_input_question(cnt, reset_qnum, config) {
    if (question_num > 0 || cnt > 0) {
        if (reset_qnum) {
            var question_el = document.getElementById('input-question-' + (cnt - 1) + '-' + question_num)
            question_el.style.display = "none";
            question_el.onkeyup = null
            question_num = 0
        } else {
            var question_el = document.getElementById('input-question-' + cnt + '-' + (question_num - 1))
            question_el.style.display = "none";
            question_el.onkeyup = null
        }

    }
    if (config == "previous") {
        reset_to_previous()
        var q_num = 'input-question-' + (cnt - 2) + '-' + question_num
        current_q_id = (cnt - 2) + '-' + question_num
    } else {
        var q_num = 'input-question-' + cnt + '-' + question_num
        current_q_id = cnt + '-' + question_num
        
    }
    
    if (document.getElementById(q_num) == null) {
        var question_wrapper = document.getElementsByClassName('question')[0]
        var question_input = document.createElement("input");
        question_input.type = "text"
        question_input.id = q_num
        question_input.name = q_num
        question_input.size = 100
        question_wrapper.appendChild(question_input)
    } else {
        var question_el = document.getElementById(q_num)
        question_el.style.display = ''
    }

    initialize_answer()
}

// switch between next and previous passages
function populate_passage(config) {  
    deselect_span()
    deselect_date()
    deselect_digit()
    deselect_bool()
    
    document.getElementById('ai-answer').innerText = ""
    
    create_input_question(record_count, true, config)
    if (record_count <= passages.length) {
        var parent = document.getElementsByClassName("passage")[0];
        var passage_el = document.getElementsByClassName("passage-" + record_count)[0];
        passage_el.remove();
        if (config == "next") {
            record_count = record_count + 1;
        } else {
            record_count = record_count - 1;
        }
        document.getElementsByClassName("passage_num")[0].innerText = "Passage " + (record_count) + "/" + passages.length
        var new_passage = document.createElement("div");
        new_passage.innerText = passages[record_count - 1];
        new_passage.className = "passage-" + record_count;
        new_passage.style.fontSize = '15px'

        parent.appendChild(new_passage)

        var i = 0
        while (true) {
            if (config == "next") {
                var tab_qa = document.getElementById((record_count - 2) + "-" + i)
            } else {
                var tab_qa = document.getElementById((record_count) + "-" + i)
            }
            if (!tab_qa) break;
            else {
                tab_qa.style.display = "none"
                i = i+1
            }
        }

        if (record_count == passages.length) {
            if (total_question_cnt <= 10) {
                var parent = document.getElementsByClassName("error_panel")[0]
                parent.innerText = "We have reached the last passage and we need a total of 10 questions. Please write " + (10 - total_question_cnt) + " more questions to submit the HIT."
            } else {
                reset_error()
                var submit_btn = document.getElementById("submitButton");
                submit_btn.style.display = ""
                var next_passage = document.getElementById("next_passage")
                next_passage.remove()
            }
        }
    }
    if (record_count <= 1) {
        document.getElementById("prev_passage").style.display = "none"
    } else {
        document.getElementById("prev_passage").style.display = ""
    }
    
}

// Reset element when previous passages control is selected
function reset_to_previous() {
    var rectange_el = get_elements_by_class_starts_with("horizontal-scroll-wrapper", "div", (record_count - 2)+"-")
    for (var i = 0; i < rectange_el.length; i++) {
        rectange_el[i].style.display = ""
    }
    question_num = rectange_el.length
}

//Query BIDAF server
function invoke_bidaf() {
    var r = {
        passage: document.getElementsByClassName('passage-' + record_count)[0].innerText,
        question: document.getElementById('input-question-' + current_q_id).value
    };
    fetch("https://sparc-bidaf-server.dev.allenai.org/predict", {
    //fetch("http://demo.allennlp.org/predict/machine-comprehension", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(r)
    }).then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                document.getElementsByClassName("wait_loop")[0].innerText = ""
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                document.getElementById('ai-answer').innerText = data["best_span_str"]
                document.getElementsByClassName("wait_loop")[0].innerText = ""
                return;
            });
        }
    ).catch(function (err) {
        console.log('Fetch Error :-S', err);
        document.getElementsByClassName("wait_loop")[0].innerText = ""
    });
}

function resolve_response(response) {
    if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        document.getElementsByClassName("wait_loop")[0].innerText = ""
        return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
        document.getElementById('ai-answer').innerText = data["best_span_str"]
        document.getElementsByClassName("wait_loop")[0].innerText = ""
        return;
    });

}

function error_response() {
    console.log('Fetch Error :-S', err);
    document.getElementsByClassName("wait_loop")[0].innerText = ""
}

function invoke_bidaf_with_retries(n) {
    var r = {
        passage: document.getElementsByClassName('passage-' + record_count)[0].innerText,
        question: document.getElementById('input-question-' + current_q_id).value
    };
    return new Promise(function (resolve, reject) {
        fetch("https://sparc-bidaf-server.dev.allenai.org/predict", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(r)
        }).then(resolve_response) // <--- Much cleaner!
            .catch(function (error) {
                if (n === 1) return reject(error_response);
                invoke_bidaf_with_retries(n - 1)
                    .then(resolve_response)
                    .catch(error_response);
            })
    });
}

// Get the modt recently added span
function get_last_span() {
    var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-" + current_q_id)
    if (span_elements.length == 0) return null;
    var last_span_id = span_elements[span_elements.length - 1].id
    var last_span_tokens = span_elements[span_elements.length - 1].id.split("-")
    return {
        "last_span_id": last_span_id,
        "last_span_tokens": last_span_tokens
    }
}

// Add a new answer span
function add_span() {    
    var span_values = get_last_span()
    if (span_values == null && document.getElementById("span").checked) {
        var span_ind = document.getElementById("span_row").rowIndex
        var ans_table = document.getElementById("ans_table");
        var add_row = ans_table.insertRow(span_ind + 1)
        var row_text = add_row.insertCell(0)
        row_text.innerHTML = ' <input type="text" id="span-' + current_q_id + "-0" + '" name="span-' + current_q_id + "-0" + '">'
        document.getElementById("span-" + current_q_id + "-0").onkeyup = run_validations_span
        var row_link = add_row.insertCell(1)
        row_link.innerHTML = ' <a href="add_span" onclick="return add_span();">+ Add span</a>'
        deselect_date()
        deselect_digit()
        deselect_bool()
        remove_date()
        remove_digit()
    }
    else { 
        var span_count = parseInt(span_values.last_span_tokens[span_values.last_span_tokens.length-1],10) + 2
        var ans_table = document.getElementById("ans_table");
        var new_row = ans_table.insertRow(span_count)
        var new_cell = new_row.insertCell(0)
        new_cell.innerHTML = ' <input type="text" id="span-' + current_q_id + "-" + (span_count-1) + '" name="span-' + current_q_id + "-" + (span_count-1) + '">';
        
        if (!hasMarks) {
            var add_span_link = document.getElementById(span_values.last_span_id).parentNode.nextSibling
            var new_ref = new_row.insertCell(1)
            new_ref.innerHTML = add_span_link.innerHTML;
            add_span_link.remove()
        }
        else {
            var add_span_link = document.getElementById(span_values.last_span_id).parentNode.nextSibling.nextSibling
            var new_ref = new_row.insertCell(1)
            new_ref.innerHTML = add_span_link.innerHTML;
            add_span_link.remove()
        }
        document.getElementById("span-" + current_q_id + "-" + (span_count - 1)).onkeyup = run_validations_span
    } 
    return false;
}

// Collapse and Expand instructions
function collapse() {
    var annotated_el = document.getElementsByClassName("annotated")[0]
    if (annotated_el.style.display == "none") {
        annotated_el.style.display = ""
        document.getElementById("collapse_link").innerText = "(Click to collapse)"
    } else {
        annotated_el.style.display = "none"
        document.getElementById("collapse_link").innerText = "(Click to expand)"
    }
    return false;
}
