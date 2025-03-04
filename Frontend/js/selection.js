var droppables = new Array();
var itemBeingDragged = null;
var mouseDownPoint = {x: 0, y: 0};

function onDocumentMouseMove(mouseMoveEvent) {
	var point = {x: mouseMoveEvent.pageX, y: mouseMoveEvent.pageY};
	
	// Drag the draggable to this position
	itemBeingDragged.dragTo(point);

	// If there are any droppable elements at this position, notify them
	for (var i = 0; i < droppables.length; i++) {
		if (droppables[i].contains(point) && !droppables[i].isBeingDraggedOver) {
			droppables[i].onDragEnter();
		} else if (!droppables[i].contains(point) && droppables[i].isBeingDraggedOver) {
			droppables[i].onDragExit();
		}
	}
}

function onDocumentMouseUp(mouseUpEvent) {
	// If any droppable is being dragged over, accept the drop
	for (var i = 0; i < droppables.length; i++) {
		if (droppables[i].isBeingDraggedOver) {
			droppables[i].onDragDrop(itemBeingDragged);
		}
	}
	
	// Reset the position of the item being dragged and clear out the document event handlers
	itemBeingDragged.reset(mouseUpEvent);
}

var Draggable = function(elementId) {
	this.init(elementId);
};

Draggable.prototype = {
	init: function(element) {
		if (typeof element === "string") element = document.getElementById(element);
		
		this.element = element;
		this.element.className += "draggable";
		
		var self = this;
		
		this.element.onmousedown = function(mouseDownEvent) {
			this.style.zIndex = "1000";
			
			itemBeingDragged = self;
			
			mouseDownPoint.x = mouseDownEvent.pageX;
			mouseDownPoint.y = mouseDownEvent.pageY;
			
			document.onmousemove = onDocumentMouseMove;
			document.onmouseup = onDocumentMouseUp;
		};
	},
	
	// Called when the mouse is moved (after having been pressed on this element)
	dragTo: function(point) {
		this.element.style.left = (point.x - mouseDownPoint.x) + "px";
		this.element.style.top = (point.y - mouseDownPoint.y) + "px";
	},
	
	// Called when the mouse is lifted (after having been pressed on this element)
	reset: function() {
		this.element.style.zIndex = "";
		this.element.style.left = "";
		this.element.style.top = "";
			
		itemBeingDragged = null;
			
		mouseDownPoint.x = 0;
		mouseDownPoint.y = 0;

		document.onmousemove = null;
		document.onmouseup = null;
	}
};

// customDragDrop is a custom function which will be called when a Draggable is dropped
// on this Droppable; it is passed the Draggable that was dropped
var Droppable = function(element, customDragDrop) {
	this.init(element, customDragDrop);
};

Droppable.prototype = {
	init: function(element, customDragDrop) {
		if (typeof element === "string") element = document.getElementById(element);
		
		this.element = element;
		this.isBeingDraggedOver = false;
		this.customDragDrop = customDragDrop;
		droppables.push(this);
	},
	
	// Calculate the top-left coordinate of this element
	position: function() {
		if (this.element != null) {
			var position = {x: this.element.offsetLeft, y: this.element.offsetTop};
		
			var offsetParent = this.element.offsetParent;
			while (offsetParent) {
				position.x += offsetParent.offsetLeft;
				position.y += offsetParent.offsetTop;
				offsetParent = offsetParent.offsetParent;
			}
		}
		
		
		return position;
	},
	
	// Calculate whether the given coordinate falls within this element's boundaries
	contains: function(point) {
		if (this.element != null) {
			var topLeft = this.position();
			var bottomRight = {
				x: topLeft.x + this.element.offsetWidth,
				y: topLeft.y + this.element.offsetHeight
			};
			return (
				topLeft.x < point.x
				&& topLeft.y < point.y
				&& point.x < bottomRight.x
				&& point.y < bottomRight.y
			);
		
		}
		
		
	},
	
	// Called when an item is dragged into this element
	onDragEnter: function() {
		this.isBeingDraggedOver = true;
		this.element.className += "dragOver";
	},
	
	// Called when an item is dragged out of this element
	onDragExit: function() {
		this.isBeingDraggedOver = false;
		this.element.className = this.element.className.replace(/\bdragOver\b/, "");
	},
	
	// Called when an item is dropped on this element
	onDragDrop: function(draggable) {
		this.onDragExit();
		this.customDragDrop(draggable);
	}
};


function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type = "mousemove"; break;        
        case "touchend":   type = "mouseup";   break;
        default:           return;
    }

    // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
    //                screenX, screenY, clientX, clientY, ctrlKey, 
    //                altKey, shiftKey, metaKey, button, relatedTarget);

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                                  first.screenX, first.screenY, 
                                  first.clientX, first.clientY, false, 
                                  false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function mapDocumentTouchToMouse() 
{
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);    
}
var dict = {
	"Golden Zephyr": [33.806053,-117.922291],
	"Goofy's Sky School": [33.806266,-117.922837],
	"Jessie's Critter Carousel": [33.804691,-117.921217],
	"Guardians of the Galaxy":  [33.806881,-117.917179],
	"Incredicoaster": [33.804642,-117.920575],
	"Jumpin' Jellyfish": [33.806009,-117.922593],
	"Luigi's Rollickin' Roadsters": [33.805404,-117.918518],
	"Mater's Graveyard JamBOOree": [33.806417,-117.919249],
	"Monsters, Inc. Mike & Sulley to the Rescue!": [33.808228,-117.917497],
	"Pixar Pal-A-Round – Swinging": [33.805060,-117.922321],
	"Radiator Springs Racers": [33.804692,-117.919084],
	"Soarin' Over California": [33.808234,-117.920233],
	"Silly Symphony Swings": [33.805547,-117.922974],
	"The Little Mermaid ~ Ariel's Undersea Adventure": [33.806150,-117.921038],
	"Toy Story Midway Mania!": [33.804676,-117.921592]
};

function locateMap() {
	var key = event.target.innerText;
	map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: dict[key][0], lng: dict[key][1] },
        zoom: 20,
	});
};

mapDocumentTouchToMouse();
window.onload = function() {
	var data = [
		"Golden Zephyr",
		"Goofy's Sky School",
		"Jessie's Critter Carousel",
		"Guardians of the Galaxy",
		"Incredicoaster",
		"Jumpin' Jellyfish",
		"Luigi's Rollickin' Roadsters",
		"Mater's Graveyard JamBOOree",
		"Monsters, Inc. Mike & Sulley to the Rescue!",
		"Pixar Pal-A-Round – Swinging",
		"Radiator Springs Racers",
		"Soarin' Over California",
		"Silly Symphony Swings",
		"The Little Mermaid ~ Ariel's Undersea Adventure",
		"Toy Story Midway Mania!"
	];
	
	var availableMetrics = document.getElementById("available_metrics_list");
	
	for (var i = 0; i < data.length; i++) {
		var liElement = document.createElement("li");
		liElement.appendChild(document.createTextNode(data[i]));
		availableMetrics.appendChild(liElement);
		var liElementDraggable = new Draggable(liElement);
	}
	
	var availableMetricsDroppable = new Droppable(availableMetrics, function(draggable) {
		if (this.element !== draggable.element.parentNode) {
			this.element.appendChild(draggable.element);
		}
	});
	
	var selectedMetricsDroppable = new Droppable("next_metric", function(draggable) {
		if (this.element.parentNode !== draggable.element.parentNode) {
			this.element.parentNode.insertBefore(draggable.element, this.element);
		}
	});

    var selectedMetricsDroppable2 = new Droppable("next_metric2", function(draggable) {
		if (this.element.parentNode !== draggable.element.parentNode) {
			this.element.parentNode.insertBefore(draggable.element, this.element);
		}
	});

	var selectedMetricsDroppable2 = new Droppable("next_metric3", function(draggable) {
		if (this.element.parentNode !== draggable.element.parentNode) {
			this.element.parentNode.insertBefore(draggable.element, this.element);
		}
	});
	
	new Droppable("remove_metric", function(draggable) {
		availableMetricsDroppable.onDragDrop(draggable);
	});


	var button = document.getElementById("algorithm_call")
    button.onclick = planClick = function() {
		const must_go_arr = [];
		let c = document.getElementById('must_go_list').getElementsByTagName('li');
        for (let i = 0; i <c.length-1; i++) {
            must_go_arr.push(" " + c[i].firstChild.data);
        }

		//document.getElementById("prl").innerHTML = must_go_arr;

		const hope_arr = [];
		let h = document.getElementById('hope_rides_list').getElementsByTagName('li');
        for (let i = 0; i <h.length-1; i++) {
            hope_arr.push(" " + h[i].firstChild.data);
        }
		//document.getElementById("prl").innerHTML += ";" + hope_arr;

		var ul = document.createElement('ul');
		document.getElementById('output').appendChild(ul);
 
		must_go_arr.forEach(function(must_go){
			var li = document.createElement('li');
			ul.appendChild(li);
			li.innerHTML += must_go;
		});


		//console.log(must_go_arr);
		document.getElementsByClassName("plan_result_window")[0].style.display='block';
		
		document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};