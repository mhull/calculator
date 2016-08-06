var calculator = {

	value: 0,

	/**
	 * The display object
	 */
	display: {

		elem: document.querySelector('#display'),
		updateValue: function() {
			this.elem.innerHTML = parseInt( calculator.value );
		}
	},

	/**
	 * The button objects
	 */
	buttons: [],

	/**
	 * Initialize the calculator on page load
	 */
	init: function() {

		// initialize the display
		setTimeout( function() {
			calculator.display.updateValue( calculator.display.value );
		}, 618 );

		// initialize the buttons
		this.initButtons();

		// bind events for the calculator
		this.bindEvents();
	}, // end: init

	/**
	 * Initialize the calculator button objects and store them int calculator.buttons
	 */
	initButtons: function() {

		// get HTML elements for the buttons
		var buttonElements = document.querySelectorAll( '.button' );

		// loop through the HTML elements
		for( var i = 0; i < buttonElements.length; i++ ) {

			var button = buttonElements[ i ];

			// push the button object to the calculators 'buttons' array
			this.buttons.push( newButton( button ) );

		} // end for: buttonElements
	}, // end: initButtons

	bindEvents: function() {

	}
};
calculator.init();

/**
 * Button factory method
 *
 * Returns a new button object with listeners attached, given an 
 * HTML button element
 */
function newButton( button ) {

	// this is the button object we are constructing
	var _this_button = {};

	_this_button.type = null;
	
	// get the number for this button
	_this_button.number = null;

	// the button number is inside a <span> tag
	var buttonText = button.querySelector('span').innerHTML;

	// if we have a numerical button, assign the number
	if( '0' === buttonText || parseInt( buttonText ) ) {
		_this_button.type = 'number';
		_this_button.number = buttonText;
	}

	// if we have the clear button
	if( 'C' === buttonText ) {
		_this_button.type = 'clear';
	}

	// push event callback for this button
	_this_button.push = function() {

		// clear button
		if( 'clear' === _this_button.type ) {
			calculator.value = 0;
		}
		else if( 'number' === _this_button.type ) {
			calculator.value += _this_button.number;
		}

		calculator.display.updateValue();
	};
	button.addEventListener( 'click', _this_button.push );
};