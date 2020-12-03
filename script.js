//   C      Major7      1st inversion
// [key]   [chord]        [quality]


var key_array = []
var chord_type_array = []



// select all choices button
function select_all(form_id) {
    var form_choices = document.getElementById(form_id)
    for (var i = 0; i < form_choices.length; i++) {
        if (form_choices[i].checked == false) {
            form_choices[i].checked = true
        }
    }
}

// clear all choices button
function clear_all(form_id) {
    var form_choices = document.getElementById(form_id)
    for (var i = 0; i < form_choices.length; i++) {
        if (form_choices[i].checked == true) {
            form_choices[i].checked = false
        }
    }
}



// get random key
function rand_key(choices) {
    rand_index = Math.round(Math.random() * ((choices.length) - 1))
    key = choices[rand_index]
    return key
}


// get random chord and inverion
function rand_chord(choices) {
    rand_index = Math.round(Math.random() * ((choices.length) - 1))
    chord = choices[rand_index]

    // make a global variable of inversion choices based on the chord type selected
    if (rand_index <= 3) {
        quality_array = ['Root Position', '1st Inversion', '2nd Inversion',]
    } else {
        quality_array = ['Root Position', '1st Inversion', '2nd Inversion', '3rd Inversion']
    }
    return chord
}


// get random inversion
function rand_quality(choices) {
    rand_index = Math.round(Math.random() * ((choices.length) - 1))
    quality = choices[rand_index]
    return quality
}



// final function
function generate() {

    //create key choices array
    var key_choices = document.getElementById("key_choices")
    key_array = []
    for (var i = 0; i < key_choices.length; i++) {
        if (key_choices[i].checked) {
            key_array.push(key_choices[i].value)
        }
    }
    console.log("Key Choices: " + key_array)

    //create chord-type choices array
    var chord_type_choices = document.getElementById("chord_type_choices")
    chord_type_array = []
    for (var i = 0; i < chord_type_choices.length; i++) {
        if (chord_type_choices[i].checked) {
            chord_type_array.push(chord_type_choices[i].value)
        }
    }
    console.log("Chord-type Choices: " + chord_type_array)



    // generate random chord
    document.getElementById("chord").innerHTML = rand_key(key_array) + rand_chord(chord_type_array)


    // toggle chord inversions
    document.getElementById("quality").innerHTML = String.fromCharCode(160) //NBSP is char 160
    if (document.getElementById("toggle").checked) {
        document.getElementById("quality").innerHTML = rand_quality(quality_array)
    }   
}




// things to do
// - ensure chord isn't immediately repeated
// - have a check answer button
