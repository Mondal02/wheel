$(document).ready( function() {

	var wheel = $(".wheel");
	var wheelSpeed = 8;
	var rSpeed = 7;   // rotational speed
	var wheelRotate = 9;  //degree of rotation
	var car = $(".car");
	var faceLeft = false;

	$(document).keydown( function(e) {
		if(e.which == 37) {
			rSpeed -= wheelRotate;
			wheel.css( {
				// left : "-=" + wheelSpeed + "px",
				transform : "rotate(" + rSpeed + "deg)"
			})

			car.css( {
				left : "-=" + wheelSpeed + "px",
			})
		}

		if (e.which == 37 && faceLeft == false) {    //to change the facing side of  the car
			car.css( {transform : "scaleX(-1)"})
			faceLeft = true
		}

		if(e.which == 39) {
			rSpeed += wheelRotate;
			wheel.css( {
				// left : "+=" + wheelSpeed + "px",
				transform : "rotate(" + rSpeed + "deg)"
			})

			car.css( {
				left : "+=" + wheelSpeed + "px",
			})
		}

		if (e.which == 39 && faceLeft == true) {     //to change the facing side of  the car
			car.css( {transform : "scaleX(1)"})
			faceLeft = false
		}
	})
})