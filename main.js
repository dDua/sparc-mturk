var record_count = 0;
var total_question_cnt = 0;
var question_num = 0
var passages = getContents_history().split("\n");
var annotations = []
var current_question_id = ""
var edit_mode = false
var annotations = {}
var min_questions = 10
var global_timeout = null

document.onkeypress = function (event) {
    // on enter press override to create question
    if (event.keyCode == 13) {
        create_question()
        return false;
    }
}

//History passages
function getContents_history() {
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
    At Cleveland Browns Stadium, Cleveland, Ohio TV Time: CBS 4:05pm eastern The Ravens traveled to Cleveland, Ohio for an AFC North match-up with the Cleveland Browns.  The Ravens struck first with kicker Matt Stover getting a 32-yard field goal.  However, in the second quarter, their small lead was wiped out, as WR Braylon Edwards caught a 58-yard TD pass and QB Charlie Frye got a one-yard TD run.  In the third quarter, both sides stiffened their defenses and prevented each other from scoring.  In the fourth quarter, down by 2 points, McNair drove down the field to set Stover up for a 52-yard field goal. With 0:29 left in the 4th quarter the field goal provided the winning points.  Steve McNair passed for 264 yards. He threw no interceptions and completed 23 passes out of 41. Jamal Lewis rushed for 86 yards. The leading receiver was Derrick Mason with 7 completions for 132 yards. The defense sacked Brown's quarterback Charlie Frye seven times. The defense also had one forced fumble and an interception. With their third straight win, the Ravens advanced to 3-0.`
    return survey_data
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
        if (candidate_el[i] && candidate_el[i].id.lastIndexOf(prefix, 0) === 0) {
            items.push(candidate_el[i]);
        }
    }
    return items;
}

// Attach AI-answer fetch to the quest text keyup event
function initialize_answer() {
    document.getElementById('ai-answer').value = 'AI is thinking ...';
   
    if (global_timeout != null) {
        clearTimeout(global_timeout);
    }

    global_timeout = setTimeout(function () {
        global_timeout = null
        how_many_check();
        invoke_bidaf_with_retries(3);
    }, 800);

    run_validations_date_digit();
}

function deselect_date() {
    var caption_row = document.getElementById("date_row_1")
    var data_row = document.getElementById("date_row_2")
    document.getElementById("year").value = ""
    document.getElementById("month").value = ""
    document.getElementById("day").value = ""
    caption_row.style.display = 'none'
    data_row.style.display = 'none'
    document.getElementById("date").checked = false
}

// deselect digit type answer
function deselect_digit() {
    var caption_row = document.getElementById("digit_row_1")
    var data_row = document.getElementById("digit_row_2")
    document.getElementById("value").value = ""
    document.getElementById("unit").value = ""
    caption_row.style.display = 'none'
    data_row.style.display = 'none'
    document.getElementById("digit").checked = false
}

// deselect span type answer
function deselect_span() {
    var span_ind = document.getElementById("span_row").rowIndex
    var ans_table = document.getElementById("ans_table");
    var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-")

    if (span_elements.length > 0) {
        for (var i = 0; i < span_elements.length; i++) {
            // remove spans
            //span_elements[i].parentNode.parentNode.remove()
            var mark_node = span_elements[i].parentNode.nextSibling
            if (mark_node && (mark_node.innerText.charCodeAt().toString().includes("10004")
                    || mark_node.innerText.charCodeAt().toString().includes("10008"))) {
                mark_node.remove()
            }
            span_elements[i].value = ""
            span_elements[i].parentNode.parentNode.style.display = "none"
        }
        document.getElementById("span").checked = false
    }
}

//disable submission button
function disable_button(button_id) {
    document.getElementById(button_id).style.background = "darkgray";
    document.getElementById(button_id).disabled = true
}

// Edit an already added QA pair
function modify_previous_question() {
    edit_mode = true
    document.getElementById("next_question").innerText = "RE-SUBMIT QUESTION"

    // reset_passage_buttons()

    document.getElementById("next_question").disabled = false
    document.getElementById("next_question").style.background = "#2085bc";

    current_question_id = this.id
    var annotation = annotations[current_question_id]

    if (annotation.answer.checked == "date") {
        document.getElementById("date").checked = true
        document.getElementById("date_row_1").style.display = ""
        document.getElementById("date_row_2").style.display = ""
        document.getElementById("year").value = annotation.answer.date.year
        document.getElementById("month").value = annotation.answer.date.month
        document.getElementById("day").value = annotation.answer.date.day
    } else if (annotation.answer.checked == "digit") {
        document.getElementById("digit").checked = true
        document.getElementById("digit_row_1").style.display = ""
        document.getElementById("digit_row_2").style.display = ""
        document.getElementById("value").value = annotation.answer.digit.value
        document.getElementById("unit").value = annotation.answer.digit.unit
    } else if (annotation.answer.checked == "span") {
        document.getElementById("span").checked = true
        var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-")
        for (var i = 0; i < annotation.answer.spans.length; i++) {
            span_elements[i].parentNode.parentNode.style.display = ""
            span_elements[i].value = annotation.answer.spans[i]
        }
        var last_row = span_elements[i - 1].parentNode.parentNode
        last_row.cells[last_row.cells.length - 1].innerHTML = '<a href="add_span" onclick="return add_span(this);">&#10010;</a>';
    }

    document.getElementById("input-question").value = annotation.question

    document.getElementById('ai-answer').value = 'AI is thinking ...'
    initialize_answer()
    document.getElementById("input-question").dispatchEvent(new KeyboardEvent('keyup', { 'key': ' ' }))
}

// Create text for the bottom rectangle tab
function create_text_for_tab() {
    var answer = {
        "date": {
            "year": "",
            "month": "",
            "day": "",
        },
        "digit": {
            "value": "",
            "unit": ""
        },
        "spans": [],
        "checked": ""

    }
    var empty_qa = false
    var correct_flag = true
    var duplicate_check = false
    var ai_overlap = true
    var question_el = document.getElementById("input-question")
    if (question_el.value.trim() == "") {
        empty_qa = empty_qa || true
    }

    var qa_text = "Q: " + question_el.value.trim() + "\nA: "
    if (document.getElementById("date").checked) {
        var year = document.getElementById("year").value.trim()
        var month = document.getElementById("month").value.trim()
        var day = document.getElementById("day").value.trim()
        answer.date.year = year
        answer.date.month = month
        answer.date.day = day
        answer.checked = "date"

        var input_date = day + " " + month + " " + year
        input_date = input_date.trim()
        if (input_date == "") {
            empty_qa = empty_qa || true
        }
        qa_text = qa_text + input_date

        ai_overlap = bow_overlap(document.getElementById('ai-answer').value, input_date, 1.0)

        var duplicate_check = duplicate_qa_check(qa_text)

    } else if (document.getElementById("digit").checked) {
        var dig = document.getElementById("value").value.trim()
        var unit = document.getElementById("unit").value.trim()
        var input_number = dig + " " + unit
        var input_number = input_number.trim()
        if (dig == "") {
            empty_qa = empty_qa || true
        }
        qa_text = qa_text + input_number

        answer.digit.value = dig
        answer.digit.unit = unit

        answer.checked = "digit"

        ai_overlap = bow_overlap(document.getElementById('ai-answer').value, input_number, 1.0)

        var duplicate_check = duplicate_qa_check(qa_text)


    } else if (document.getElementById("span").checked) {
        var correct_flag = span_match_check()
        var i_cnt = 0
        var input_spans = ""
        var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-")
        for (var i = 0; i < span_elements.length; i++) {
            if (span_elements[i].value.trim() != "") {
                input_spans = input_spans + "[" + span_elements[i].value.trim() + "] "
                answer.spans.push(span_elements[i].value.trim())
            }
        }

        answer.checked = "span"

        if (input_spans.trim() == "")
            empty_qa = empty_qa || true

        ai_overlap = bow_overlap(document.getElementById('ai-answer').value, input_spans, 1.0)

        qa_text = qa_text + input_spans
        var duplicate_check = duplicate_qa_check(qa_text)

    } else {
        empty_qa = empty_qa || true
    }

    return {
        "qa_text": qa_text,
        "ai_overlap": ai_overlap,
        "empty_qa": empty_qa,
        "correct_text": correct_flag,
        "duplicate_check": duplicate_check,
        "annotation": answer
    }
}

//Submit the question 
function create_question() {
    var correct_flag = new Boolean(true)

    var annotation = { question: "", answer: "" }

    annotation.question = document.getElementById("input-question").value

    //create the text for the bottom rectangle container containing QA pair 
    var result = create_text_for_tab(edit_mode)
    var qa_text = result.qa_text
    var ai_overlap = result.ai_overlap
    var empty_qa = result.empty_qa
    var correct_flag = result.correct_text
    var duplicate_check = result.duplicate_check
    var answer = result.annotation

    annotation.answer = answer
    annotations[current_question_id] = annotation

    var tab_container = document.getElementsByClassName("horizontal-scroll-wrapper")[0]

    // If all the checks satify 
    if (correct_flag && ai_overlap && !empty_qa && !duplicate_check) {

        // Create the bottom tab container if its a new questionand question is new add it
        if (!edit_mode) {
            var new_tab = document.createElement("div");
            new_tab.className = 'rectangles'
            new_tab.id = (record_count - 1) + '-' + question_num
            new_tab.onclick = modify_previous_question
            new_tab.innerText = qa_text
            tab_container.appendChild(new_tab);
            question_num = question_num + 1
            total_question_cnt = total_question_cnt + 1
            document.getElementsByClassName("passage_num")[0].innerText = "Passage: " + (record_count) + "/" + passages.length + " Questions: " + (total_question_cnt)
            current_question_id = (record_count - 1) + "-" + question_num
            // else just modify the text
        } else {
            var curr_tab = document.getElementById(current_question_id);
            curr_tab.innerText = qa_text
            document.getElementById("input-question").value = ""
        }
        reset()
        check_question_count()
    } 
}

function reset() {
    document.getElementById("input-question").value = ""
    document.getElementById("ai-answer").value = ""
    deselect_date()
    deselect_digit()
    deselect_span()

    disable_button("next_question")
    if (edit_mode) {
        document.getElementById("next_question").innerText = "ADD QUESTION"

        reset_passage_buttons()
        edit_mode = false
    }
}

// Run span checks on hover 
function run_validations_span() {
    var result = create_text_for_tab()
    var qa_text = result.qa_text
    var ai_overlap = result.ai_overlap
    var empty_qa = result.empty_qa
    var correct_flag = result.correct_text
    var duplicate_check = result.duplicate_check

    if (correct_flag && ai_overlap && !empty_qa && !duplicate_check) {
        document.getElementById("next_question").style.background = "#2085bc";
        document.getElementById("next_question").disabled = false
        document.getElementById("next_question").title = ""
    }
    else if (!correct_flag) {
        disable_button("next_question")
        if (document.getElementById("span").checked) {
           // parent.innerText = "Please check the spans. The text should match the spans in passage exactly!"
            document.getElementById("next_question").title = "Please check the spans. The text should match the spans in passage exactly!"
        } 
    } else if (empty_qa) {
        disable_button("next_question")
        document.getElementById("next_question").title = "Empty question or answer or span"
    } else if (!ai_overlap) {
        disable_button("next_question")
        document.getElementById("next_question").title = "AI answer matches true answer. Please try a different question."
    } else if (duplicate_check) {
        disable_button("next_question")
        document.getElementById("next_question").title = "Same question-answer pair has alreday been added.  Please try a different question."
    } else {
        disable_button("next_question")
        document.getElementById("next_question").title = "Something wrong with the answer please try a differenet question."
    }
}

// Run date and digit checks on hover 
function run_validations_date_digit() {
  
    var result = create_text_for_tab()
    var qa_text = result.qa_text
    var ai_overlap = result.ai_overlap
    var empty_qa = result.empty_qa
    var correct_flag = result.correct_text
    var duplicate_check = result.duplicate_check

    if (ai_overlap && !empty_qa && !duplicate_check) {
        document.getElementById("next_question").disabled = false
        document.getElementById("next_question").style.background = "#2085bc";

    } else if (empty_qa) {
        
        document.getElementById("next_question").title = "Empty question or answer or span"
    } else if (!ai_overlap) {
        disable_button("next_question")
        document.getElementById("next_question").title = "AI answer matches true answer. Please try a different question."
    } else if (duplicate_check) {
        disable_button("next_question")
        document.getElementById("next_question").title = "Same question-answer pair has alreday been added.  Please try a different question."
    } else {
        disable_button("next_question")
        document.getElementById("next_question").title = "Something wrong with the answer please try a different question."
    }
}

function duplicate_qa_check(cand_text) {
    cand_text = cand_text.toLowerCase().trim()
    var qa_list = document.getElementsByClassName("rectangles")
    for (var i = 0; i < qa_list.length; i++) {
        if (cand_text == qa_list[i].innerText.toLowerCase().trim() && qa_list[i].id != current_question_id) {
            return true
        }
    }
    return false
}

// Check for 'how many' string in question
function how_many_check() {
    var unit_el = document.getElementById("unit")
    var question_el = document.getElementById("input-question")
    if (question_el.value.toLowerCase().includes("how many") == true) {
        unit_el.disabled = true
    } else {
        unit_el.value = ""
        unit_el.disabled = false
    }
}

// Check if answer span overlaps with text in passage
function span_match_check() {
    var correct_flag = new Boolean(true);
    if (document.getElementById("span").checked) {
        var span_ind = document.getElementById("span_row").rowIndex
        var ans_table = document.getElementById("ans_table");
        var span_values = get_last_span()
        var span_count = parseInt(span_values.last_span_tokens[span_values.last_span_tokens.length - 1], 10) + 1
        var count = 0
        for (var i = span_ind + 1; i < ans_table.rows.length; i++) {
            var span_id = "span-" + count
            if (document.getElementById(span_id)) {
                var span_value = document.getElementById(span_id).value
                var cur_span_row = document.getElementById(span_id).parentNode.parentNode
                var passage_str = document.getElementsByClassName("passage-" + record_count)[0].innerText
                var pattern = new RegExp(span_value);
                if (pattern.test(passage_str) && span_value != "") {
                    if ((cur_span_row.cells.length == 2) ||
                        (span_count == count) && (cur_span_row.cells.length == 2)) {
                        var marker = cur_span_row.insertCell(1)
                        marker.innerHTML = '<p style="color: green;">&#10004;</p>'
                    } else {
                        var marker = cur_span_row.cells[1]
                        marker.innerHTML = '<p style="color: green;">&#10004;</p>'
                    }
                } else if (span_value != "") {
                    if ((cur_span_row.cells.length == 2) ||
                        (span_count == count) && (cur_span_row.cells.length == 2)) {
                        var marker = cur_span_row.insertCell(1)
                        marker.innerHTML = '<p style="color: red;">&#10008;</p>'
                    } else {
                        var marker = cur_span_row.cells[1]
                        marker.innerHTML = '<p style="color: red;">&#10008;</p>'
                    }
                    correct_flag = correct_flag && false
                }
            }
            count = count + 1
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
    var q13_span = parent.getElementsByClassName("ans_span13_high")
    var q14_span = parent.getElementsByClassName("ans_span14_high")
    var q15_span = parent.getElementsByClassName("ans_span15_high")

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
    if (q13_span != 'null') {
        reset_class(q13_span, "ans_span13")
    }
    if (q14_span != 'null') {
        reset_class(q14_span, "ans_span14")
    }
    if (q15_span != 'null') {
        reset_class(q15_span, "ans_span15")
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
    var q_span = parent.getElementsByClassName("ans_span5");
    reset_class(q_span, "ans_span5_high")
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

// event on hover over on annotated question
function highlight_q8_nfl() {
    var parent = document.getElementsByClassName("passage-sample")[0];
    var q_span = parent.getElementsByClassName("ans_span5");
    reset_class(q_span, "ans_span5_high")
    var q_span = parent.getElementsByClassName("ans_span13");
    reset_class(q_span, "ans_span13_high")
    var q_span = parent.getElementsByClassName("ans_span7");
    reset_class(q_span, "ans_span7_high")
    var q_span = parent.getElementsByClassName("ans_span8");
    reset_class(q_span, "ans_span8_high")
    var q_span = parent.getElementsByClassName("ans_span15");
    reset_class(q_span, "ans_span15_high")
    var q_span = parent.getElementsByClassName("ans_span14");
    reset_class(q_span, "ans_span14_high")
}

// add element for date type answer
function create_input_date() {
    var caption_row = document.getElementById("date_row_1")
    var data_row = document.getElementById("date_row_2")
    if (document.getElementById("date").checked) {
        caption_row.style.display = ''
        data_row.style.display = ''
    }
    deselect_digit()
    deselect_span()
}

// add element for digit type answer
function create_input_digit() {
    if (document.getElementById("digit").checked) {
        var caption_row = document.getElementById("digit_row_1")
        var data_row = document.getElementById("digit_row_2")
        caption_row.style.display = ''
        data_row.style.display = ''
    }
    deselect_date()
    deselect_span()
}

function create_tabs(prefix) {
    var rectangle_containers = []
    for (var key in annotations) {
        if (key.lastIndexOf(prefix, 0) == 0) {
            rectangle_containers.push(annotations[key])
        }
    }


}

// switch between next and previous passages
function populate_passage(config) {
    if (record_count <= passages.length) {
        var parent = document.getElementsByClassName("passage")[0];
        var passage_el = document.getElementsByClassName("passage-" + record_count)[0];
        passage_el.remove();
        reset_tabs()

        if (config == "next") {
            record_count = record_count + 1;

        } else {
            record_count = record_count - 1;
        }
        var rect_el = get_elements_by_class_starts_with("horizontal-scroll-wrapper", "div", (record_count - 1) + "-")
        question_num = rect_el.length

        document.getElementsByClassName("passage_num")[0].innerText = "Passage: " + (record_count) + "/" + passages.length + " Questions: " + (total_question_cnt)
        var new_passage = document.createElement("div");
        new_passage.innerText = passages[record_count - 1];
        new_passage.className = "passage-" + record_count;
        new_passage.style.fontSize = '15px'

        parent.appendChild(new_passage)

        var i = 0
        while (true) {
            var tab_qa = document.getElementById((record_count - 1) + "-" + i)
            if (!tab_qa) break;
            else {
                tab_qa.style.display = ""
                i = i + 1
            }
        }
    }
    reset_passage_buttons()
    current_question_id = (record_count - 1) + "-" + question_num
    document.getElementById("input-question").onkeyup = initialize_answer
    reset()
}

function reset_passage_buttons() {
    if (record_count <= 1) {
        disable_button("prev_passage")
    } else if (record_count == passages.length) {
        disable_button("next_passage")
    } else {
        document.getElementById("next_passage").disabled = false
        document.getElementById("prev_passage").disabled = false
        document.getElementById("prev_passage").style.background = "#2085bc"
        document.getElementById("next_passage").style.background = "#2085bc"
    }
}

// Reset element when previous passages control is selected
function reset_tabs() {
    var rectange_el = get_elements_by_class_starts_with("horizontal-scroll-wrapper", "div", (record_count - 1) + "-")
    for (var i = 0; i < rectange_el.length; i++) {
        rectange_el[i].style.display = "none"
    }
}


function resolve_response(response) {
    if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        document.getElementById('ai-answer').value = ""
        return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
        var ai_answer_container = document.getElementsByClassName("ai_answer")[0]
        var ai_input = document.getElementById('ai-answer')
        ai_input.value = data["best_span_str"]
        return;
    });

}

function error_response() {
    document.getElementsByClassName("ai-answer").value = "Error while fetching AI answer"
}

function invoke_bidaf_with_retries(n) {
    document.getElementsByClassName("ai-answer").value = "AI is thinking ..."
    var r = {
        passage: document.getElementsByClassName('passage-' + record_count)[0].innerText,
        question: document.getElementById('input-question').value
    };
    return new Promise(function (resolve, reject) {
        fetch("https://sparc-bidaf-server.dev.allenai.org/predict", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(r)
        }).then(resolve_response)
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
    var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-")
    if (span_elements.length == 0) return null;
    var last_span_id = span_elements[span_elements.length - 1].id
    var last_span_tokens = span_elements[span_elements.length - 1].id.split("-")
    return {
        "last_span_id": last_span_id,
        "last_span_tokens": last_span_tokens
    }
}

// Delete an added span
function delete_span(el) {
    var curr_row = el.parentNode.parentNode
    curr_row.remove()
    return false;
}

// Add a new answer span
function add_span(el) {
    deselect_digit()
    deselect_date()

    var ans_table = document.getElementById("ans_table");
    var span_index = el.parentNode.parentNode.rowIndex
    var span_row_start_index = document.getElementById("span_row").rowIndex

    if (!document.getElementById("span-" + span_count)) {
        var span_count = span_index - span_row_start_index
        var new_row = ans_table.insertRow(span_index + 1)
        var new_cell = new_row.insertCell(0)
        new_cell.innerHTML = '<input type="text" placeholder="copy text from passage here" id="span-' + span_count + '" name="span-' + span_count + '">';
        var new_ref = new_row.insertCell(1)
        new_ref.innerHTML = '<a href="add_span" onclick="return add_span(this);">&#10010;</a>'

        if (span_count >= 1) {
            var prev_row = ans_table.rows[new_row.rowIndex - 1]
            var row_sub_link = prev_row.cells[prev_row.cells.length - 1]
            row_sub_link.innerHTML = ' <a href="delete_span" onclick="return delete_span(this);">&#9473;</a>'
        }

        document.getElementById("span-" + span_count).onkeyup = run_validations_span
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

function check_question_count() {
    if (total_question_cnt < min_questions) {
        document.getElementById("ready_submit").title = "Must write " + (min_questions - total_question_cnt) + " more questions to submit"

    } else {
        document.getElementById("ready_submit").title = ""
        document.getElementById("ready_submit").disabled = false
        document.getElementById("ready_submit").style.background = "#2085bc";
        document.getElementById("ready_submit").value = "Ready to Submit"
    }
}

function final_submit() {
    var root = document.getElementById("generated_answers")
    for (var key in annotations) {
        var answer = annotations[key].answer
        var question_el = document.createElement("input")
        question_el.value = annotations[key].question
        question_el.id = "input-question-" + key
        question_el.name = "input-question-" + key
        question_el.type = "text"
        question_el.style.display = 'none'
        root.appendChild(question_el)

        if (annotations[key].answer.checked == "span") {
            for (var i = 0; i < annotations[key].answer.spans.length; i++) {
                var span_el = document.createElement("input")
                span_el.id = "span-" + key + "-" + i
                span_el.name = "span-" + key + "-" + i
                span_el.type = "text"
                span_el.value = annotations[key].answer.spans[i]
                span_el.style.display = 'none'
                root.appendChild(span_el)
            }
        } else if (annotations[key].answer.checked == "date") {
            var year_el = document.createElement("input")
            year_el.type = "number"
            year_el.id = "year-" + key
            year_el.name = "year-" + key
            year_el.value = annotations[key].answer.date.year
            year_el.style.display = 'none'
            root.appendChild(year_el)

            var month_el = document.createElement("input")
            month_el.type = "number"
            month_el.id = "month-" + key
            month_el.name = "month-" + key
            month_el.value = annotations[key].answer.date.month
            month_el.style.display = 'none'
            root.appendChild(month_el)

            var day_el = document.createElement("input")
            day_el.type = "number"
            day_el.id = "day-" + key
            day_el.name = "day-" + key
            day_el.value = annotations[key].answer.date.day
            day_el.style.display = 'none'
            root.appendChild(day_el)

        } else if (annotations[key].answer.checked == "digit") {
            var value_el = document.createElement("input")
            value_el.type = "number"
            value_el.id = "value-" + key
            value_el.name = "value-" + key
            value_el.value = annotations[key].answer.digit.value
            value_el.style.display = 'none'
            root.appendChild(value_el)

            var unit_el = document.createElement("input")
            unit_el.type = "number"
            unit_el.id = "unit-" + key
            unit_el.name = "unit-" + key
            unit_el.value = annotations[key].answer.digit.unit
            unit_el.style.display = 'none'
            root.appendChild(unit_el)
        }

    }
    document.getElementById("root").remove()
    document.getElementById("submission").style.display = ""
    document.getElementById("submitButton").style.display = ""
    document.getElementById("comment").style.display = ""
}