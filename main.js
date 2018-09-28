var record_count = 0;
var total_question_cnt = 0;
var question_num = 0
//var passages = getContents_history().split("\n");
var passages = []
fetch_passages_with_retries(3)
var current_question_id = ""
var edit_mode = false
var annotations = {}
var min_questions = 10
var num_passages = 5
var global_timeout = null

document.onkeypress = function (event) {
    // on enter press override to create question
    if (event.target.tagName != 'TEXTAREA') {
        if (event.keyCode == 13) {
            create_question()
            return false;
        }
    }
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i].trim();
        array[i] = array[j].trim();
        array[j] = temp;
    }
}

function get_contents_history() {
    var data = ``
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
    return (result == threshold)
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
    document.getElementById("error_panel").innerText = ""
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
    document.getElementById("error_panel").innerText = ""
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
    document.getElementById("error_panel").innerText = ""
}

//disable submission button
function disable_button(button_id) {
    document.getElementById(button_id).style.background = "darkgray";
    document.getElementById(button_id).disabled = true
}

// Edit an already added QA pair
function modify_previous_question() {
    edit_mode = true
    deselect_date()
    deselect_digit()
    deselect_span()
    document.getElementById("next_question").innerText = "RE-SUBMIT QUESTION"
    document.getElementById("next_question").disabled = false
    document.getElementById("next_question").style.background = "#2085bc";

    current_question_id = this.id

    var tabs = document.getElementsByClassName("rectangles")
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].id != this.id) {
            document.getElementById(tabs[i].id).style.pointerEvents = 'none';
        }
    }

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
            if (i != annotation.answer.spans.length - 1) {
                span_elements[i].parentNode.nextSibling.innerHTML = '<a href="delete_span" onclick="return delete_span(this);">&#9473;</a>'
            } else {
                span_elements[i].parentNode.nextSibling.innerHTML = '<a href="add_span" onclick="return add_span(this);">&#10010;</a>';
            }
        }
        //var last_row = span_elements[i - 1].parentNode.parentNode
        //last_row.cells[last_row.cells.length - 1].innerHTML = '<a href="add_span" onclick="return add_span(this);">&#10010;</a>';
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
        "checked": "",
    }
    var empty_qa = false
    var correct_flag = true
    var duplicate_check = false
    var ai_overlap = true
    var how_many_const = true
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

        duplicate_check = duplicate_qa_check(qa_text)

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
        
        duplicate_check = duplicate_qa_check(qa_text)

        how_many_const = how_many_constraint()

    } else if (document.getElementById("span").checked) {
        var correct_flag = span_match_check()
        var i_cnt = 0
        var input_spans = ""
       // var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-")
        var span_elements = get_spans(true)
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
        duplicate_check = duplicate_qa_check(qa_text)

    } else {
        empty_qa = empty_qa || true
    }

    return {
        "qa_text": qa_text,
        "ai_overlap": ai_overlap,
        "empty_qa": empty_qa,
        "correct_text": correct_flag,
        "duplicate_check": duplicate_check,
        "how_many_const": how_many_const,
        "annotation": answer
    }
}

//Submit the question 
function create_question() {
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
    var how_many_const = result.how_many_const

    annotation.answer = answer
    annotations[current_question_id] = annotation

    var tab_container = document.getElementsByClassName("horizontal-scroll-wrapper")[0]

    // If all the checks satify 
    if (correct_flag && !ai_overlap && !empty_qa && !duplicate_check && how_many_const) {

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
    document.getElementById("error_panel").innerText = ""
    deselect_date()
    deselect_digit()
    deselect_span()

    disable_button("next_question")
    if (edit_mode) {
        document.getElementById("next_question").innerText = "ADD QUESTION"

        reset_passage_buttons()
        edit_mode = false
    }
    var tabs = document.getElementsByClassName("rectangles")
    for (var i = 0; i < tabs.length; i++) {
        //tabs[i].onclick = modify_previous_question
        document.getElementById(tabs[i].id).style.pointerEvents = 'auto';
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
    
    if (correct_flag && !ai_overlap && !empty_qa && !duplicate_check) {
        document.getElementById("next_question").style.background = "#2085bc";
        document.getElementById("next_question").disabled = false
        document.getElementById("next_question").title = ""
        document.getElementById("error_panel").innerText = ""
    }
    else if (!correct_flag) {
        disable_button("next_question")
        if (document.getElementById("span").checked) {
            document.getElementById("next_question").title = "Please check the spans. The text should match the spans in passage exactly!"
            document.getElementById("error_panel").innerText = "Please check the spans. The text should match the spans in passage exactly!"
        }
    } else if (empty_qa) {
        disable_button("next_question")
        document.getElementById("next_question").title = "Empty question or answer or span"
    } else if (ai_overlap) {
        disable_button("next_question")
        document.getElementById("next_question").title = "AI answer matches true answer. Please try a different question."
        document.getElementById("error_panel").innerText = "AI answer matches true answer. Please try a different question."
    } else if (duplicate_check) {
        disable_button("next_question")
        document.getElementById("next_question").title = "Same question-answer pair has already been added.  Please try a different question."
        document.getElementById("error_panel").innerText = "Same question-answer pair has already been added.  Please try a different question."
    } else {
        disable_button("next_question")
        document.getElementById("next_question").title = "Something wrong with the answer please try a differenet question."
        document.getElementById("error_panel").innerText = "Something wrong with the answer please try a differenet question."
    }
}

// Run date and digit checks on hover 
function run_validations_date_digit() {
    var result = create_text_for_tab()
    var qa_text = result.qa_text
    var empty_qa = result.empty_qa
    var correct_flag = result.correct_text
    var duplicate_check = result.duplicate_check
    var ai_overlap = result.ai_overlap
    var how_many_const = result.how_many_const

    if (!empty_qa && !duplicate_check && !ai_overlap && how_many_const) {
        document.getElementById("next_question").disabled = false
        document.getElementById("next_question").style.background = "#2085bc";
        document.getElementById("next_question").title = ""
        document.getElementById("error_panel").innerText = ""
    } else if (empty_qa) {
        disable_button("next_question")
        document.getElementById("next_question").title = "Empty question or answer or span"        
    } else if (ai_overlap) {
        disable_button("next_question")
        document.getElementById("next_question").title = "AI answer matches true answer. Please try a different question."
        document.getElementById("error_panel").innerText = "AI answer matches true answer. Please try a different question."
    } else if (duplicate_check) {
        disable_button("next_question")
        document.getElementById("next_question").title = "Same question-answer pair has already been added.  Please try a different question."
        document.getElementById("error_panel").innerText = "Same question-answer pair has already been added.  Please try a different question."
    } else if (!how_many_const) {
        disable_button("next_question")
        document.getElementById("next_question").title = "Please re-phrase the question as a how-many question for Number type answer"
        document.getElementById("error_panel").innerHTML = "Please re-phrase the question as a how-many question for Number type answer"
    } else {
        disable_button("next_question")
        document.getElementById("next_question").title = "Something wrong with the answer please try a different question."
        document.getElementById("error_panel").innerText = "Something wrong with the answer please try a different question."
    }
}

function duplicate_qa_check(cand_text) {
    cand_text = cand_text.toLowerCase().replace("[", "").replace("]", "")
    cand_text = cand_text.replace("  ", " ").trim()
    var qa_list = document.getElementsByClassName("rectangles")
    for (var i = 0; i < qa_list.length; i++) {
        var curr_text = qa_list[i].innerText.toLowerCase().replace("[", "").replace("]", "")
        curr_text = curr_text.replace("  ", " ").trim()
        if (cand_text == curr_text && qa_list[i].id != current_question_id) {
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

// Force re-phrasing as 'how many' question
function how_many_constraint() {
    var question_el = document.getElementById("input-question")
    return question_el.value.toLowerCase().includes("how many")
}

// Check if answer span overlaps with text in passage
function span_match_check() {
    var correct_flag = new Boolean(true);
    if (document.getElementById("span").checked) {
        var span_ind = document.getElementById("span_row").rowIndex
        var ans_table = document.getElementById("ans_table");

        var visible_spans = get_spans(true)
        var count = 0
        while (count < visible_spans.length) {
            var span_id = "span-" + count
            if (document.getElementById(span_id)) {
                var span_value = document.getElementById(span_id).value
                var cur_span_row = document.getElementById(span_id).parentNode.parentNode
                var passage_str = document.getElementsByClassName("passage-" + record_count)[0].innerText
                span_value = span_value.replace(".", "\\.")
                var pattern = new RegExp(span_value);
                if (pattern.test(passage_str) && span_value != "") {
                    if (cur_span_row.cells.length == 2) {
                        var marker = cur_span_row.insertCell(1)
                        marker.innerHTML = '<p style="color: green;">&#10004;</p>'
                    } else {
                        var marker = cur_span_row.cells[1]
                        marker.innerHTML = '<p style="color: green;">&#10004;</p>'
                    }
                } else {
                    if (cur_span_row.cells.length == 2) {
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

//highlight span on hover
function highlight_span() {


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
    document.getElementById("ready_submit").onclick = null
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
    check_question_count()
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

function parse_passages(response) {
    if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
        var all_passages = data["passages"]        
        var passages = []
        for (var i = 0; i < num_passages; i++) {
            var idx = Math.floor((Math.random() * all_passages.length) + 1);
            passages.push(all_passages[idx])
        }        
        return;
    });
}

function error_passages() {
    passages = get_contents_history()
}

function fetch_passages_with_retries(n) {
    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');

    return new Promise(function (resolve, reject) {
        fetch("https://s3.us-east-2.amazonaws.com/sparc-dataset/history_dataset.json", {
            method: "GET",
            headers: myHeaders
          }).then(parse_passages)
            .catch(function (error) {
                if (n === 1) return reject(error_passages);
                fetch_passages_with_retries(n - 1)
                    .then(parse_passages)
                    .catch(error_passages);
            })
    });

}

// Get all the current spans
function get_spans(visible) {
    var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-")
    var cand_spans = []
    for (var j = 0; j < span_elements.length; j++) {
        if (visible) {
            if (span_elements[j].parentNode.parentNode.style.display != "none") {
                cand_spans.push(span_elements[j])
            }
        } else {
            cand_spans.push(span_elements[j])
        }
    }
    return cand_spans
}

// Delete an added span
function delete_span(el) {
    var curr_row = el.parentNode.parentNode
    var curr_span_id = el.parentNode.parentNode.firstChild.firstChild.id
    var start_span_id = parseInt(curr_span_id.replace("span-", ""))
    var visible_spans = get_spans(true)
    //var last_span_id = parseInt(visible_spans[visible_spans.length - 1].id.replace("span-", ""))    
    var last_span_id = get_spans(false).length
    for (var i = start_span_id + 1; i < last_span_id; i++) {
        var curr_span = document.getElementById("span-" + i)
        curr_span.id = "span-" + (i - 1)
        curr_span.name = "span-" + (i - 1)
    }

    var clone = curr_row.cloneNode(true);

    var curr_value = clone.cells[0].firstChild
    curr_value.onkeyup = run_validations_span
    curr_value.id = "span-" + (i - 1)
    curr_value.name = "span-" + (i - 1)
    curr_value.value = ""

    if (clone.cells.length == 3) {
        clone.deleteCell(1)
    }

    clone.style.display = "none"
    curr_row.remove()
    document.getElementById("ans_table").getElementsByTagName('tbody')[0].appendChild(clone)
    document.getElementById("span-0").dispatchEvent(new KeyboardEvent('keyup', { 'key': ' ' }))
    return false;
}

// Add a new answer span
function add_span(el) {
    deselect_digit()
    deselect_date()

    var ans_table = document.getElementById("ans_table");
    var span_index = el.parentNode.parentNode.rowIndex
    var span_row_start_index = document.getElementById("span_row").rowIndex
    var span_elements = get_elements_by_id_starts_with("ans_table", "input", "span-")
    var visible_spans = get_spans(true)

    var span_count = visible_spans.length

    if (!document.getElementById("span-" + span_count)) {
        var span_count = span_index - span_row_start_index
        var new_row = ans_table.insertRow(span_index + 1)
        var new_cell = new_row.insertCell(0)
        new_cell.innerHTML = '<input type="text" placeholder="copy text from passage here" id="span-' + span_count + '" name="span-' + span_count + '">';
        var new_ref = new_row.insertCell(1)
        new_ref.innerHTML = '<a href="add_span" onclick="return add_span(this);">&#10010;</a>'
        document.getElementById("span-" + span_count).onkeyup = run_validations_span
        if (span_count >= 1) {
            var prev_row = ans_table.rows[new_row.rowIndex - 1]
            var row_sub_link = prev_row.cells[prev_row.cells.length - 1]
            row_sub_link.innerHTML = ' <a href="delete_span" onclick="return delete_span(this);">&#9473;</a>'
        }
    } else {
        document.getElementById("span-" + span_count).parentNode.parentNode.style.display = ""
        document.getElementById("span-" + span_count).parentNode.nextSibling.innerHTML = '<a href="add_span" onclick="return add_span(this);">&#10010;</a>'
        if (span_count >= 1) {            
            el.outerHTML = ' <a href="delete_span" onclick="return delete_span(this);">&#9473;</a>'
        }
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
        document.getElementById("ready_submit").onclick = final_submit
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
                month_el.type = "text"
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
        document.getElementById("submission").style.display = ""
        document.getElementById("submitButton").style.display = ""
        document.getElementById("comment").style.display = ""
        document.getElementsByClassName("main-container")[0].style.display = "none"
       
    
}