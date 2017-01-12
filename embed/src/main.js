
function insertAfterNode(toInsertNode, currentNode){
	currentNode.parentNode.insertBefore(toInsertNode, currentNode.nextSibling);
}

function getStoryID(){
	return document.head.querySelector("[name=story_id]").content;
};

if (window.location.href.toString().includes("sideeffectspublicmedia")){
	var storyID = getStoryID();

	if (typeof storyID === "number" || typeof storyID === "string"){

		var cssText = `
		a.republish-button{
			padding: 4px;
            color: rgb(140, 195, 65);
            background-color: white;
            border: 2px solid rgb(140, 195, 65);
            font-weight: bold !important;
            font-size: 0.8em;

            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
		}
		a.republish-button:hover{
			color: #fff;
			background-color: rgb(140, 195, 65);
		}
		div.republish-button-contain{
			margin-bottom: 0.8em;
		}
		
		`;


		var style = document.createElement("style");
		style.setAttribute("type", "text/css");

		if (style.styleSheet) {
			style.styleSheet.cssText = cssText;
		}
		else {
			style.appendChild(document.createTextNode(cssText));
		}

		document.getElementsByTagName('head')[0].appendChild(style);

		var button = document.createElement("a");
		button.setAttribute("href", `https://sfx-repub.publicradiocode.org/republish/story-api/${storyID}`);
		button.setAttribute("class", "republish-button");
		button.appendChild(document.createTextNode("Republish This Story"));

		var buttonContain = document.createElement("div");
		buttonContain.setAttribute("class", "republish-button-contain");
		buttonContain.appendChild(button);

		// Insert it where the script lives.
		var scriptTag = document.getElementById("npr-republish-button-script");

		insertAfterNode(buttonContain, scriptTag);
	}

}
else {
}
