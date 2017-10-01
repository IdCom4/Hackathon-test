

$(document).ready(function() {
	var grid = new Array();
	var toDo = new Array();
	var count = 0;
	var interval;

	var secure = 0;
	var stop = 0;
	var level = 1;

	var posOrigin = new String();
	var dirOrigin;
	var pieceOrigin = new String();
	var numPiece;

	var posYtest;
	var posXtest;
	var dirTest;
	var gridTest = new Array();
	var gridPiece = new Array();

	var fonction = new Array();
	var nbrFonction = 1;
	var current = new String();
	current += '0';

	for(var coucou = 2; coucou <= 10; coucou++) {
		$("#f" + coucou).hide();
	}
	for(var coucou = 10; coucou <= 18; coucou++) {
		$("#option" + coucou).hide();
	}

	$("#startBis").hide();
	$("#perdu").hide();
	$("#gagne").hide();

	function wait(millisecond) {
		var startTime = new Date();
		var startMillisecond = startTime.getMilliseconds();
		var startSecond = startTime.getSeconds();
		var endTime = new Date();
		var endMillisecond = endTime.getMilliseconds();
		var endSecond = endTime.getSeconds();
		//console.log("(wait ...");
		while((endSecond * 1000 + endMillisecond) - (startSecond * 1000 + startMillisecond) < millisecond)
		{
			endTime = new Date();
			endMillisecond = endTime.getMilliseconds();
			endSecond = endTime.getSeconds();
		}
		//console.log("... ok.)");
	}

	$(".fonction div.caseF").click(function () {
		 var ok = false;
		 var idbis = current;
		 idbis += 'a';
		if($(this).hasClass("bordure"))
			ok = true;
		if(current[0] != '0')
			$("#" + current).removeClass("bordure");
		current = $(this).attr("id");
		if(ok) {
			$(this).empty();
			$(this).addClass("white");
			$(this).removeClass("vert");
			$(this).removeClass("orange");

			fonction[getFonction(current[1], 'a')][getFonction(current[3], idbis[4])] = 0;
		}
		$(this).addClass("bordure");
	});

	$(".option").click(function () {
		var y;
		var x;
		var idbis = current;
		idbis += 'a';
		if(current[0] != '0')
		{
			if($(this).attr("id") == "option6")
			{
				$("#" + current).removeClass("orange");
				$("#" + current).addClass("vert");
			}
			else if($(this).attr("id") == "option7")
			{
				$("#" + current).removeClass("vert");
				$("#" + current).addClass("orange");
			}
			else
			{
				$("#" + current).html($(this).html());
			}
			y = getFonction(current[1], 'a');
			x = getFonction(current[3], idbis[4]);
			if($(this).attr("id") == "option1")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 101;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 201;
				else
					fonction[y][x] = 1;
			}
			if($(this).attr("id") == "option2")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 102;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 202;
				else
					fonction[y][x] = 2;
			}
			if($(this).attr("id") == "option3")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 103;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 203;
				else
					fonction[y][x] = 3;
			}
			if($(this).attr("id") == "option4")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 104;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 204;
				else
					fonction[y][x] = 4;
			}
			if($(this).attr("id") == "option5")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 105;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 205;
				else
					fonction[y][x] = 5;
			}
			if($(this).attr("id") == "option6")
			{
				console.log("condition verte");
				if(fonction[y][x] < 100)
					fonction[y][x] += 100;
				else if(fonction[y][x] >= 200)
					fonction[y][x] -= 100;
			}
			if($(this).attr("id") == "option7")
			{
				console.log("condition orange");
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] += 100;
				else if(fonction[y][x] < 100)
					fonction[y][x] += 200;
			}
			if($(this).attr("id") == "option8")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 108;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 208;
				else
					fonction[y][x] = 8;
			}
			if($(this).attr("id") == "option9")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 109;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 209;
				else
					fonction[y][x] = 9;
			}
			if($(this).attr("id") == "option10")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 110;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 210;
				else
					fonction[y][x] = 10;
			}
			if($(this).attr("id") == "option11")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 111;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 211;
				else
					fonction[y][x] = 11;
			}
			if($(this).attr("id") == "option12")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 112;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 212;
				else
					fonction[y][x] = 12;
			}
			if($(this).attr("id") == "option13")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 113;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 213;
				else
					fonction[y][x] = 13;
			}
			if($(this).attr("id") == "option14")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 114;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 214;
				else
					fonction[y][x] = 14;
			}
			if($(this).attr("id") == "option15")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 115;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 215;
				else
					fonction[y][x] = 15;
			}
			if($(this).attr("id") == "option16")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 116;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 216;
				else
					fonction[y][x] = 16;
			}
			if($(this).attr("id") == "option17")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 117;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 217;
				else
					fonction[y][x] = 17;
			}
			if($(this).attr("id") == "option18")
			{
				if(fonction[y][x] >= 100 && fonction[y][x] < 200)
					fonction[y][x] = 118;
				else if(fonction[y][x] >= 200)
					fonction[y][x] = 218;
				else
					fonction[y][x] = 18;
			}
		}
	});


	function initGrid () {
		var y = 0;
		var x = 0;
		while(y < 10)
		{
			gridTest[y] = new Array();
			grid[y] = new Array();
			gridPiece[y] = new Array();
			while(x < 10)
			{
				gridTest[y][x] = 0;
				grid[y][x] = 0;
				gridPiece[y][x] = 0;
				x++;
			}
			x = 0;
			y++;
		}
	}


	function lvl1() {
			posOrigin = new String("#E5");
			dirOrigin = 2;
			pieceOrigin[0] = new String("E6");
			pieceOrigin[1] = new String("00");
			numPiece = 1;

			gridTest[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[1] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[2] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[3] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[4] = new Array(0,0,0,0,1,1,0,0,0,0);
			gridTest[5] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[6] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[7] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[8] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[9] = new Array(0,0,0,0,0,0,0,0,0,0);

			grid[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[1] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[2] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[3] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[4] = new Array(0,0,0,0,1,1,0,0,0,0);
			grid[5] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[6] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[7] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[8] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[9] = new Array(0,0,0,0,0,0,0,0,0,0);
		}

		function lvl2() {
			posOrigin = new String("#E5");
			dirOrigin = 2;
			pieceOrigin[0] = new String("E7");
			pieceOrigin[1] = new String("00");
			numPiece = 1;

			gridTest[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[1] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[2] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[3] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[4] = new Array(0,0,0,0,1,1,1,0,0,0);
			gridTest[5] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[6] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[7] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[8] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[9] = new Array(0,0,0,0,0,0,0,0,0,0);

			grid[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[1] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[2] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[3] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[4] = new Array(0,0,0,0,1,1,1,0,0,0);
			grid[5] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[6] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[7] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[8] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[9] = new Array(0,0,0,0,0,0,0,0,0,0);
		}

	function lvl3() {
			posOrigin = new String("#E3");
			dirOrigin = 2;
			pieceOrigin[0] = new String("E8");
			pieceOrigin[1] = new String("00");
			numPiece = 1;

			gridTest[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[1] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[2] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[3] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[4] = new Array(0,0,1,1,1,1,1,1,0,0);
			gridTest[5] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[6] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[7] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[8] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[9] = new Array(0,0,0,0,0,0,0,0,0,0);

			grid[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[1] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[2] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[3] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[4] = new Array(0,0,1,1,1,1,1,1,0,0);
			grid[5] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[6] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[7] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[8] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[9] = new Array(0,0,0,0,0,0,0,0,0,0);
		}

		function lvl4() {
			posOrigin = new String("#E3");
			dirOrigin = 2;
			pieceOrigin[0] = new String("H8");
			pieceOrigin[1] = new String("00");
			numPiece = 1;

			gridTest[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[1] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[2] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[3] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[4] = new Array(0,0,1,1,1,1,1,2,0,0);
			gridTest[5] = new Array(0,0,0,0,0,0,0,1,0,0);
			gridTest[6] = new Array(0,0,0,0,0,0,0,1,0,0);
			gridTest[7] = new Array(0,0,0,0,0,0,0,1,0,0);
			gridTest[8] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[9] = new Array(0,0,0,0,0,0,0,0,0,0);

			grid[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[1] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[2] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[3] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[4] = new Array(0,0,1,1,1,1,1,2,0,0);
			grid[5] = new Array(0,0,0,0,0,0,0,1,0,0);
			grid[6] = new Array(0,0,0,0,0,0,0,1,0,0);
			grid[7] = new Array(0,0,0,0,0,0,0,1,0,0);
			grid[8] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[9] = new Array(0,0,0,0,0,0,0,0,0,0);
		}

		function lvl5() {
			posOrigin = new String("#J10");
			dirOrigin = 4;
			pieceOrigin[0] = new String("E5");
			pieceOrigin[1] = new String("00");
			numPiece = 1;

			gridTest[0] = new Array(2,1,1,1,1,1,1,1,1,2);
			gridTest[1] = new Array(1,0,0,0,0,0,0,0,0,1);
			gridTest[2] = new Array(1,0,2,1,1,1,1,2,0,1);
			gridTest[3] = new Array(1,0,1,0,0,0,0,1,0,1);
			gridTest[4] = new Array(1,0,1,0,1,0,0,1,0,1);
			gridTest[5] = new Array(1,0,1,0,2,1,1,2,0,1);
			gridTest[6] = new Array(1,0,1,0,0,0,0,0,0,1);
			gridTest[7] = new Array(1,0,2,1,1,1,1,1,1,2);
			gridTest[8] = new Array(1,0,0,0,0,0,0,0,0,0);
			gridTest[9] = new Array(2,1,1,1,1,1,1,1,1,1);

			grid[0] = new Array(2,1,1,1,1,1,1,1,1,2);
			grid[1] = new Array(1,0,0,0,0,0,0,0,0,1);
			grid[2] = new Array(1,0,2,1,1,1,1,2,0,1);
			grid[3] = new Array(1,0,1,0,0,0,0,1,0,1);
			grid[4] = new Array(1,0,1,0,1,0,0,1,0,1);
			grid[5] = new Array(1,0,1,0,2,1,1,2,0,1);
			grid[6] = new Array(1,0,1,0,0,0,0,0,0,1);
			grid[7] = new Array(1,0,2,1,1,1,1,1,1,2);
			grid[8] = new Array(1,0,0,0,0,0,0,0,0,0);
			grid[9] = new Array(2,1,1,1,1,1,1,1,1,1);
		}

		function lvl6() {
			posOrigin = new String("#A10");
			dirOrigin = 4;
			pieceOrigin[0] = new String("J10");
			pieceOrigin[1] = new String("00");
			numPiece = 1;
		
			gridTest[0] = new Array(0,0,0,0,0,0,0,0,1,1);
			gridTest[1] = new Array(0,0,0,0,0,0,0,1,1,0);
			gridTest[2] = new Array(0,0,0,0,0,0,1,1,0,0);
			gridTest[3] = new Array(0,0,0,0,0,1,1,0,0,0);
			gridTest[4] = new Array(0,0,0,0,2,1,0,0,0,0);
			gridTest[5] = new Array(0,0,0,0,2,1,0,0,0,0);
			gridTest[6] = new Array(0,0,0,0,0,1,1,0,0,0);
			gridTest[7] = new Array(0,0,0,0,0,0,1,1,0,0);
			gridTest[8] = new Array(0,0,0,0,0,0,0,1,1,0);
			gridTest[9] = new Array(0,0,0,0,0,0,0,0,1,1);

			grid[0] = new Array(0,0,0,0,0,0,0,0,1,1);
			grid[1] = new Array(0,0,0,0,0,0,0,1,1,0);
			grid[2] = new Array(0,0,0,0,0,0,1,1,0,0);
			grid[3] = new Array(0,0,0,0,0,1,1,0,0,0);
			grid[4] = new Array(0,0,0,0,2,1,0,0,0,0);
			grid[5] = new Array(0,0,0,0,2,1,0,0,0,0);
			grid[6] = new Array(0,0,0,0,0,1,1,0,0,0);
			grid[7] = new Array(0,0,0,0,0,0,1,1,0,0);
			grid[8] = new Array(0,0,0,0,0,0,0,1,1,0);
			grid[9] = new Array(0,0,0,0,0,0,0,0,1,1);
		}

	function lvl7() {
			posOrigin = new String("#E3");
			dirOrigin = 2;
			pieceOrigin[0] = new String("B7");
			pieceOrigin[1] = new String("I7");
			pieceOrigin[2] = new String("00");
			numPiece = 2;

			gridTest[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[1] = new Array(0,0,0,0,0,0,2,0,0,0);
			gridTest[2] = new Array(0,0,0,0,0,0,1,0,0,0);
			gridTest[3] = new Array(0,0,0,0,0,0,1,0,0,0);
			gridTest[4] = new Array(0,0,1,1,1,1,2,0,0,0);
			gridTest[5] = new Array(0,0,0,0,0,0,1,0,0,0);
			gridTest[6] = new Array(0,0,0,0,0,0,1,0,0,0);
			gridTest[7] = new Array(0,0,0,0,0,0,1,0,0,0);
			gridTest[8] = new Array(0,0,0,0,0,0,2,0,0,0);
			gridTest[9] = new Array(0,0,0,0,0,0,0,0,0,0);

			grid[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[1] = new Array(0,0,0,0,0,0,2,0,0,0);
			grid[2] = new Array(0,0,0,0,0,0,1,0,0,0);
			grid[3] = new Array(0,0,0,0,0,0,1,0,0,0);
			grid[4] = new Array(0,0,1,1,1,1,2,0,0,0);
			grid[5] = new Array(0,0,0,0,0,0,1,0,0,0);
			grid[6] = new Array(0,0,0,0,0,0,1,0,0,0);
			grid[7] = new Array(0,0,0,0,0,0,1,0,0,0);
			grid[8] = new Array(0,0,0,0,0,0,2,0,0,0);
			grid[9] = new Array(0,0,0,0,0,0,0,0,0,0);
		}

	function lvl8() {
			posOrigin = new String("#F3");
			dirOrigin = 1;
			pieceOrigin[0] = new String("A2");
			pieceOrigin[1] = new String("A9");
			pieceOrigin[2] = new String("B1");
			pieceOrigin[3] = new String("B10");
			pieceOrigin[4] = new String("I1");
			pieceOrigin[5] = new String("I10");
			pieceOrigin[6] = new String("J2");
			pieceOrigin[7] = new String("J9");
			pieceOrigin[8] = new String("00");
			numPiece = 8;

			gridTest[0] = new Array(2,1,2,0,0,0,0,2,1,2);
			gridTest[1] = new Array(1,0,1,0,0,0,0,1,0,1);
			gridTest[2] = new Array(2,1,2,1,1,1,1,2,1,2);
			gridTest[3] = new Array(0,0,1,0,0,0,0,1,0,0);
			gridTest[4] = new Array(0,0,1,0,0,0,0,1,0,0);
			gridTest[5] = new Array(0,0,1,0,0,0,0,1,0,0);
			gridTest[6] = new Array(0,0,1,0,0,0,0,1,0,0);
			gridTest[7] = new Array(2,1,2,1,1,1,1,2,1,2);
			gridTest[8] = new Array(1,0,1,0,0,0,0,1,0,1);
			gridTest[9] = new Array(2,1,2,0,0,0,0,2,1,2);

			grid[0] = new Array(2,1,2,0,0,0,0,2,1,2);
			grid[1] = new Array(1,0,1,0,0,0,0,1,0,1);
			grid[2] = new Array(2,1,2,1,1,1,1,2,1,2);
			grid[3] = new Array(0,0,1,0,0,0,0,1,0,0);
			grid[4] = new Array(0,0,1,0,0,0,0,1,0,0);
			grid[5] = new Array(0,0,1,0,0,0,0,1,0,0);
			grid[6] = new Array(0,0,1,0,0,0,0,1,0,0);
			grid[7] = new Array(2,1,2,1,1,1,1,2,1,2);
			grid[8] = new Array(1,0,1,0,0,0,0,1,0,1);
			grid[9] = new Array(2,1,2,0,0,0,0,2,1,2);
		}

		function lvl9() {
			posOrigin = new String("#F1");
			dirOrigin = 2;
			pieceOrigin[0] = new String("D6");
			pieceOrigin[1] = new String("E7");
			pieceOrigin[2] = new String("F6");
			pieceOrigin[3] = new String("H7");
			pieceOrigin[4] = new String("D9");
			pieceOrigin[5] = new String("B6");
			pieceOrigin[6] = new String("D3");
			pieceOrigin[7] = new String("I3");
			pieceOrigin[8] = new String("00");
			numPiece = 8;

			gridTest[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			gridTest[1] = new Array(0,0,2,1,1,1,1,1,2,0);
			gridTest[2] = new Array(0,0,1,0,0,0,0,0,1,0);
			gridTest[3] = new Array(0,0,1,0,1,1,1,0,1,0);
			gridTest[4] = new Array(0,0,1,0,1,0,1,0,1,0);
			gridTest[5] = new Array(1,1,2,1,2,1,1,0,1,0);
			gridTest[6] = new Array(0,0,1,0,1,0,0,0,1,0);
			gridTest[7] = new Array(0,0,1,0,1,0,1,1,2,0);
			gridTest[8] = new Array(0,0,1,0,1,0,0,0,1,0);
			gridTest[9] = new Array(0,0,0,0,1,1,1,1,1,0);

			grid[0] = new Array(0,0,0,0,0,0,0,0,0,0);
			grid[1] = new Array(0,0,2,1,1,1,1,1,2,0);
			grid[2] = new Array(0,0,1,0,0,0,0,0,1,0);
			grid[3] = new Array(0,0,1,0,1,1,1,0,1,0);
			grid[4] = new Array(0,0,1,0,1,0,1,0,1,0);
			grid[5] = new Array(1,1,2,1,2,1,1,0,1,0);
			grid[6] = new Array(0,0,1,0,1,0,0,0,1,0);
			grid[7] = new Array(0,0,1,0,1,0,1,1,2,0);
			grid[8] = new Array(0,0,1,0,1,0,0,0,1,0);
			grid[9] = new Array(0,0,0,0,1,1,1,1,1,0);
		}

	function initFonction () {
		var y = 0;
		var x = 0;
		nbrFonction = 1;
		for(var coucou = 2; coucou <= 10; coucou++) {
			$("#f" + coucou).hide();
		}
		for(var coucou = 10; coucou <= 18; coucou++) {
			$("#option" + coucou).hide();
		}
		while(y < 10)
		{
			fonction[y] = new Array();
			while(x < 15)
			{
				fonction[y][x] = 0;
				$("#f" + (y + 1) + "-" + (x + 1)).empty();
				$("#f" + (y + 1) + "-" + (x + 1)).removeClass("orange");
				$("#f" + (y + 1) + "-" + (x + 1)).removeClass("vert");
				x++;
			}
			x = 0;
			y++;
		}
	}

	function update_html() {
		var y = 0;
		var x = 0;
		while(y < 10)
		{
			while(x < 10)
			{
				if(grid[y][x] == 0)
				{
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("vert");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("orange");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("bleu");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).addClass("blanc");
				}
				else if(grid[y][x] == 1)
				{
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("orange");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("bleu");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).addClass("vert");
				}
				else if(grid[y][x] == 2)
				{
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("vert");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("bleu");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).addClass("orange");
				}
				else if(grid[y][x] == 3)
				{
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("vert");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("orange");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).addClass("bleu");
				}
				x++;
			}
			x = 0;
			y++;
		}
	} 

	function reset_html() {
		var y = 0;
		var x = 0;
		var i = 0;
		$("div.piece").removeClass("piece");
		$("div.perso").empty();
		$("div.perso").removeClass("perso");
		$(posOrigin + " div").addClass("perso");
		$(posOrigin + " div").append("<img src=\"img/curseur"+ dirOrigin +".png\" alt=\"curseur\">");
		while(pieceOrigin[i] != "00")
		{
			$("#" + pieceOrigin[i] + " div").addClass("piece");
			i++;
		}  
		while(y < 10)
		{
			while(x < 10)
			{
				if(grid[y][x] == 0)
				{
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("vert");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("orange");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("bleu");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).addClass("blanc");
				}
				else if(grid[y][x] == 1)
				{
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("orange");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("bleu");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).addClass("vert");
				}
				else if(grid[y][x] == 2)
				{
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("vert");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("bleu");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).addClass("orange");
				}
				else if(grid[y][x] == 3)
				{
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("vert");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).removeClass("orange");
					$("#" + putCoord(y, 'y') + putCoord(x, 'x')).addClass("bleu");
				}
				x++;
			}
			x = 0;
			y++;
		}
	}
	initGrid();
	initFonction();
	lvl1();
	reset_html();

	function getFonction(id, idbis) {
		if(id == '1' && idbis == 'a')
			return 0;
		if(id == '2' && idbis == 'a')
			return 1;
		if(id == '3' && idbis == 'a')
			return 2;
		if(id == '4' && idbis == 'a')
			return 3;
		if(id == '5' && idbis == 'a')
			return 4;
		if(id == '6' && idbis == 'a')
			return 5;
		if(id == '7' && idbis == 'a')
			return 6;
		if(id == '8' && idbis == 'a')
			return 7;
		if(id == '9' && idbis == 'a')
			return 8;
		if(id == '1' && idbis == '0')
			return 9;
		if(id == '1' && idbis == '1')
			return 10;
		if(id == '1' && idbis == '2')
			return 11;
		if(id == '1' && idbis == '3')
			return 12;
		if(id == '1' && idbis == '4')
			return 13;
		if(id == '1' && idbis == '5')
			return 14;
	}

	function putFonction(value) {
		if(axe == 'y')
		{
			if(value == 0)
				return '1';
			if(value == 1)
				return '2';
			if(value == 2)
				return '3';
			if(value == 3)
				return '4';
			if(value == 4)
				return '5';
			if(value == 5)
				return '6';
			if(value == 6)
				return '7';
			if(value == 7)
				return '8';
			if(value == 8)
				return '9';
			if(value == 9)
				return '10';
		}
	}

	function getCoord(id, axe) {
		if((axe == 'y' && id[0] == 'A') || (axe == 'x' && id[1] == '1' && id.length == 2))
			return 0;
		if((axe == 'y' && id[0] == 'B') || (axe == 'x' && id[1] == '2'))
			return 1;
		if((axe == 'y' && id[0] == 'C') || (axe == 'x' && id[1] == '3'))
			return 2;
		if((axe == 'y' && id[0] == 'D') || (axe == 'x' && id[1] == '4'))
			return 3;
		if((axe == 'y' && id[0] == 'E') || (axe == 'x' && id[1] == '5'))
			return 4;
		if((axe == 'y' && id[0] == 'F') || (axe == 'x' && id[1] == '6'))
			return 5;
		if((axe == 'y' && id[0] == 'G') || (axe == 'x' && id[1] == '7'))
			return 6;
		if((axe == 'y' && id[0] == 'H') || (axe == 'x' && id[1] == '8'))
			return 7;
		if((axe == 'y' && id[0] == 'I') || (axe == 'x' && id[1] == '9'))
			return 8;
		if((axe == 'y' && id[0] == 'J') || (axe == 'x' && id[1] == '1' && id[2] == '0'))
			return 9;
	}

	function putCoord(value, axe) {
		if(axe == 'y')
		{
			if(value == 0)
				return 'A';
			if(value == 1)
				return 'B';
			if(value == 2)
				return 'C';
			if(value == 3)
				return 'D';
			if(value == 4)
				return 'E';
			if(value == 5)
				return 'F';
			if(value == 6)
				return 'G';
			if(value == 7)
				return 'H';
			if(value == 8)
				return 'I';
			if(value == 9)
				return 'J';
		}
		if(axe == 'x')
		{
			if(value == 0)
				return '1';
			if(value == 1)
				return '2';
			if(value == 2)
				return '3';
			if(value == 3)
				return '4';
			if(value == 4)
				return '5';
			if(value == 5)
				return '6';
			if(value == 6)
				return '7';
			if(value == 7)
				return '8';
			if(value == 8)
				return '9';
			if(value == 9)
				return '10';
		}
	}

	function showFonction() {
		var y = 0;
		var x = 0;
		while(y < 10)
		{
			console.log(fonction[y]);
			y++;
		}
	}

	function find_perso(axe) {
		var y = 0;
		var x = 0;
		var done = 1;
		var ok = false;
		var id = new String();
		while(y < 10)
		{
			while(x < 10)
			{
				id = new String();
				id += "#";
				id += putCoord(y, 'y');
				id += putCoord(x, 'x');
				if($(id + " div").hasClass("perso"))
					ok = true;
				if(ok)
				{
					if(axe == 'y')
						return y;
					if(axe == 'x')
						return x;
				}
				x++;
			}
			x = 0;
			y++;
		}
	}

	function find_dir() {
		var src;
		src = $("div.perso img").attr("src");
		if(src[11] == '1')
			return 1;
		else if(src[11] == '2')
			return 2;
		else if(src[11] == '3')
			return 3;
		else if(src[11] == '4')
			return 4;
	}

	function update_toDo(numAction) {
		var i = 0;
		var copy = new String();
		while(toDo[i] != '0')
		{
			copy += toDo[i];
			i++;
		}
		copy += numAction;
		copy += '0';
		i = 0;
		toDo = new String();
		while(copy[i] != '0')
		{
			toDo += copy[i];
			i++;
		}
		toDo += '0';
		//console.log("toDo à jour = " + toDo);
	}

	function over(posPersoX, posPersoY) {
		var y = 0;
		var x = 0;
		var done = 2;
		//var id = new String();
		/*console.log("////////////");
		console.log("posPersoY = " + posPersoY);
		console.log("posPersoX = " + posPersoX);
		//console.log("grid["+ posPersoY +"]["+ posPersoX +"] = " + grid[posPersoY][posPersoX]);
		console.log("////////////");*/
		if(numPiece <= 0)
			return 2;
		if(posPersoY < 0 || posPersoX < 0 || posPersoY > 9 || posPersoX > 9)
			return 1;
		if(grid[posPersoY][posPersoX] == 0)
			return 1;
		/*while(y < 10)
		{
			while(x < 10)
			{
				// id = new String();
				// id += "#";
				// id += putCoord(y, 'y');
				// id += putCoord(x, 'x');
				// if($(id + " div").hasClass("piece"))
				// 	done = 0;
				if((y == posPersoY && x == posPersoX) && )
				{
					//console.log("///// SORTIE ///////");
					return 1;
				}
				x++;
			}
			x = 0;
			y++;
		}*/
		return 0;
	}
	$("#addFonction").click(function() {
		if(nbrFonction <= 9)
		{
			nbrFonction++;
			$("#f" + nbrFonction).show();
			$("#option" + (nbrFonction + 8)).show();
		}
	});

	$("#removeFonction").click(function() {
		if(nbrFonction > 1)
		{
			$("#f" + nbrFonction).hide();
			$("#option" + (nbrFonction + 8)).hide();
			nbrFonction--;
		}
	});

	$("#reset").click(function () {
		initFonction();
		reset();
	});

	function initLevel(nouv) {
		initGrid();
		if(level == 2 || level == '2')
		{
			level = 2;
			lvl2();
		}
		else if(level == 3 || level == '3')
		{
			level = 3;
			lvl3();
		}
		else if(level == 4 || level == '4')
		{
			level = 4;
			lvl4();
		}
		else if(level == 5 || level == '5')
		{
			level = 5;
			lvl5();
		}
		else if(level == 6 || level == '6')
		{
			level = 6;
			lvl6();
		}
		else if(level == 7 || level == '7')
		{
			level = 7;
			lvl7();
		}
		else if(level == 8 || level == '8')
		{
			level = 8;
			lvl8();
		}
		else if(level == 9 || level == '9')
		{
			level = 9;
			lvl9();
		}
		else
		{
			lvl1();
			level = 1;
		}
		if(nouv == 1)
			initFonction();
		reset_html();
	}

	function reset(nouv) {
		toDo = new String();
		toDo += '0';
		count = 0;
		initLevel(nouv);
		reset_html();
		console.log("on reset");
	}
	reset(0);

	function executeFonction(numFonction) {
		var i = 0;
		//var id = new String();
		var tamp = 0;
		//var dir;
		var sous = 0;
		var addSecure = 0;
		console.log("numFonction - 1 = " + (numFonction - 1));
		console.log("fonction[numFonction - 1] = " + fonction[numFonction - 1]);
		while(i < 15 && fonction[numFonction - 1][i] != 0 && over(posXtest, posYtest) == 0)
		{
			//dir = $("div.perso img").attr("src");
			if((fonction[numFonction - 1][i] > 100 && fonction[numFonction - 1][i] < 200) && gridTest[posYtest][posXtest] == 1)
			{
				sous = 100;
				fonction[numFonction - 1][i] -= 100;
				console.log("condition: vert");
			}
			else if(fonction[numFonction - 1][i] > 200 && gridTest[posYtest][posXtest] == 2)
			{
				sous = 200;
				fonction[numFonction - 1][i] -= 200;
				console.log("condition: orange");
			}
			if(fonction[numFonction - 1][i] == 1)
			{
				if(sous != 0)
				{
					fonction[numFonction - 1][i] += sous;
					sous = 0;
				}
				console.log("in //// dir = " + dirTest);
				if(dirTest == 1)
				{
					posYtest -= 1;
				}
				else if(dirTest == 2)
				{
					posXtest += 1;
				}
				else if(dirTest == 3)
				{
					posYtest += 1;
				}
				else if(dirTest == 4)
				{
					posXtest -= 1;
				}
				if($("#" + putCoord(posYtest, 'y') + putCoord(posXtest, 'x') + " div").hasClass("piece") && gridPiece[posYtest][posXtest] == 0)
				{
					gridPiece[posYtest][posXtest] = 1;
					console.log("PIECE !!!!");
					numPiece--;
				}/*
				console.log("y = " + posYtest);
				console.log("x = " + posXtest);*/
				console.log("avance");
				update_toDo('1');
			}
			else if(fonction[numFonction - 1][i] == 2)
			{
				if(sous != 0)
				{
					fonction[numFonction - 1][i] += sous;
					sous = 0;
				}
				if(dirTest < 4)
					dirTest++;
				else
					dirTest = 1;
				console.log("tourner à droite");
				update_toDo('2');
			}
			else if(fonction[numFonction - 1][i] == 3)
			{
				if(sous != 0)
				{
					fonction[numFonction - 1][i] += sous;
					sous = 0;
				}
				if(dirTest > 1)
					dirTest--;
				else
					dirTest = 4;
				console.log("tourne à gauche");
				update_toDo('3');
			}
			else if(fonction[numFonction - 1][i] == 4)
			{
				if(sous != 0)
				{
					fonction[numFonction - 1][i] += sous;
					sous = 0;
				}
				gridTest[posYtest][posXtest] = 1;
				console.log("peint en vert");
				update_toDo('4');
			}
			else if(fonction[numFonction - 1][i] == 5)
			{
				if(sous != 0)
				{
					fonction[numFonction - 1][i] += sous;
					sous = 0;
				}
				gridTest[posYtest][posXtest] = 2;
				console.log("peint en orange");
				update_toDo('5');
			}
			else if(fonction[numFonction - 1][i] == 8)
			{
				//ne rien faire
				update_toDo('8');
			}
			else if(fonction[numFonction - 1][i] >= 9 && fonction[numFonction - 1][i] <= 18)
			{
				console.log("change de fonction");
				secure++;
				addSecure = 1;
				if(secure > 1000)
				{
					return(0);
				}
				if(sous != 0)
				{
					fonction[numFonction - 1][i] += sous;
					tamp = sous;
					sous = 0;
					executeFonction(fonction[numFonction - 1][i] - (tamp + 8));
				}
				else
					executeFonction(fonction[numFonction - 1][i] - 8);
			}
			//wait(2000);
			if(addSecure == 0)
				secure++;
			else
				addSecure = 0;
			if(secure > 1000)
			{
				return(0);
			}
			i++;
		}
	}

	function go() {
		var i = 0;
		var posPersoY = find_perso('y');
		var posPersoX = find_perso('x');
		var id = new String();
		var dir;
		var sous = 0;
		dir = $("div.perso img").attr("src");
		if(toDo[count] == '1')
		{
			posPersoY = find_perso('y');
			posPersoX = find_perso('x');
			if(dir[11] == '1')
			{
				id = new String();
				id += "#";
				id += putCoord((posPersoY - 1), 'y');
				id += putCoord(posPersoX, 'x');
				$("div.perso").empty();
				$("div.perso").removeClass("perso");
				$(id + " div").empty();
				$(id + " div").removeClass("piece");
				$(id + " div").addClass("perso");
				$(id + " div").append("<img src=\"img/curseur1.png\" alt=\"curseur\">");
			}
			else if(dir[11] == '2')
			{
				id = new String();
				id += "#";
				id += putCoord(posPersoY, 'y');
				id += putCoord((posPersoX + 1), 'x');
				$("div.perso").empty();
				$("div.perso").removeClass("perso");
				$(id + " div").empty();
				$(id + " div").removeClass("piece");
				$(id + " div").addClass("perso");
				$(id + " div").append("<img src=\"img/curseur2.png\" alt=\"curseur\">");
			}
			else if(dir[11] == '3')
			{
				id = new String();
				id += "#";
				id += putCoord((posPersoY + 1), 'y');
				id += putCoord(posPersoX, 'x');
				$("div.perso").empty();
				$("div.perso").removeClass("perso");
				$(id + " div").empty();
				$(id + " div").removeClass("piece");
				$(id + " div").addClass("perso");
				$(id + " div").append("<img src=\"img/curseur3.png\" alt=\"curseur\">");
			}
			else if(dir[11] == '4')
			{
				id = new String();
				id += "#";
				id += putCoord(posPersoY, 'y');
				id += putCoord((posPersoX - 1), 'x');
				$("div.perso").empty();
				$("div.perso").removeClass("perso");
				$(id + " div").empty();
				$(id + " div").removeClass("piece");
				$(id + " div").addClass("perso");
				$(id + " div").append("<img src=\"img/curseur4.png\" alt=\"curseur\">");
			}
		}
		else if(toDo[count] == '2')
		{
			if(dir[11] == '1')
			{
				$("div.perso").empty();
				$("div.perso").append("<img src=\"img/curseur2.png\" alt=\"curseur\">");
			}
			else if(dir[11] == '2')
			{
				$("div.perso").empty();
				$("div.perso").append("<img src=\"img/curseur3.png\" alt=\"curseur\">");
			}
			else if(dir[11] == '3')
			{
				$("div.perso").empty();
				$("div.perso").append("<img src=\"img/curseur4.png\" alt=\"curseur\">");
			}
			else if(dir[11] == '4')
			{
				$("div.perso").empty();
				$("div.perso").append("<img src=\"img/curseur1.png\" alt=\"curseur\">");
			}
		}
		else if(toDo[count] == '3')
		{
			if(dir[11] == '1')
			{
				$("div.perso").empty();
				$("div.perso").append("<img src=\"img/curseur4.png\" alt=\"curseur\">");
			}
			else if(dir[11] == '2')
			{
				$("div.perso").empty();
				$("div.perso").append("<img src=\"img/curseur1.png\" alt=\"curseur\">");
			}
			else if(dir[11] == '3')
			{
				$("div.perso").empty();
				$("div.perso").append("<img src=\"img/curseur2.png\" alt=\"curseur\">");
			}
			else if(dir[11] == '4')
			{
				$("div.perso").empty();
				$("div.perso").append("<img src=\"img/curseur3.png\" alt=\"curseur\">");
			}
		}
		else if(toDo[count] == '4')
		{
			$("div.perso").parent().removeClass("orange");
			$("div.perso").parent().addClass("vert");
		}
		else if(toDo[count] == '5')
		{
			$("div.perso").parent().removeClass("vert");
			$("div.perso").parent().addClass("orange");
		}
		else if(toDo[count] == '8')
		{
			//ne rien faire
		}
		else if(toDo[count] == '0' || stop == 1)
		{
			clearInterval(interval);
			stop = 0;
			$("#startBis").hide();
			$("#start").show();
			if(over(posPersoX, posPersoY) == 2)
				$("#gagne").show();
			else
				$("#perdu").show();
		}
		count++;
	}

	$("#select").click(function () {
		level = prompt("Entrez le numéro du niveau voulu :");
		initLevel(1);
	});

	$("#stop").click(function () {
		stop = 1;
		reset(0);
	});

	$("#start").click(function () {
		posYtest = find_perso('y');
		posXtest = find_perso('x');
		dirTest = find_dir();

		showFonction();

		executeFonction(1);
		secure = 0;
		interval = setInterval(go, 500);

		$("#startBis").show();
		$("#start").hide();
	});

	$(".close").click(function () {
		reset(0);
		$("#perdu").hide();
		$("#gagne").hide();
		if($(this).parent().attr("id") == "gagneBis")
		{
			level++;
			console.log("level++ = " + level);
			initLevel(1);
		}
	});
});
