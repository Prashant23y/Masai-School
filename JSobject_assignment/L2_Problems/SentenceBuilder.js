let sentence = {
    subject: "I",
    verb: "am",
    object: "coding",

    sentenceBuilder: function () {
        if (!this.subject || !this.verb || !this.object) {
            return "Incomplete sentence";
        }
        return this.subject + " " + this.verb + " " + this.object;
    },

    updateProperty: function (property, value) {
        if (this.hasOwnProperty(property)) {
            this[property] = value;
        } else {
            return "Invalid property";
        }
    }
};

console.log(sentence.sentenceBuilder());

sentence.updateProperty("verb", "am learning");
console.log(sentence.sentenceBuilder());

console.log(sentence.updateProperty("mood", "happy"));
