function lvl1() {
			var y = 0;
			var x = 0;
			posOrigin = new String();
			posOrigin += '#';
			posOrigin += "E5";
			dirOrigin = 2;
			pieceOrigin[0] = new String();
			pieceOrigin[0] += "E6";
			pieceOrigin[1] = new String();
			pieceOrigin[1] += "00";
			numPiece = 1;
			while(y < 10)
			{
				gridTest[y] = new Array();
				grid[y] = new Array();
				while(x < 10)
				{
					if(y == 4 && (x == 4 || x == 5))
					{
						gridTest[y][x] = 1;
						grid[y][x] = 1;
					}
					else
					{
						gridTest[y][x] = 0;
						grid[y][x] = 0;
					}
					x++;
				}
				x = 0;
				y++;
			}
		}

		function lvl2() {
			var y = 0;
			var x = 0;
			posOrigin = new String();
			posOrigin += '#';
			posOrigin += "E5";
			dirOrigin = 2;
			pieceOrigin[0] = new String();
			pieceOrigin[0] += "E7";
			pieceOrigin[1] = new String();
			pieceOrigin[1] += "00";
			numPiece = 1;
			while(y < 10)
			{
				gridTest[y] = new Array();
				grid[y] = new Array();
				while(x < 10)
				{
					if(y == 4 && (x >= 4 && x <= 6))
					{
						gridTest[y][x] = 1;
						grid[y][x] = 1;
					}
					else
					{
						gridTest[y][x] = 0;
						grid[y][x] = 0;
					}
					x++;
				}
				x = 0;
				y++;
			}
		}

	function lvl3() {
			var y = 0;
			var x = 0;
			posOrigin = new String();
			posOrigin += '#';
			posOrigin += "E3";
			dirOrigin = 2;
			pieceOrigin[0] = new String();
			pieceOrigin[0] += "E8";
			pieceOrigin[1] = new String();
			pieceOrigin[1] += "00";
			numPiece = 1;
			while(y < 10)
			{
				gridTest[y] = new Array();
				grid[y] = new Array();
				while(x < 10)
				{
					if(y == 4 && x > 1 && x < 8)
					{
						gridTest[y][x] = 1;
						grid[y][x] = 1;
					}
					else
					{
						gridTest[y][x] = 0;
						grid[y][x] = 0;
					}
					x++;
				}
				x = 0;
				y++;
			}
		}

		function lvl4() {
			var y = 0;
			var x = 0;
			posOrigin = new String();
			posOrigin += '#';
			posOrigin += "E3";
			dirOrigin = 2;
			pieceOrigin[0] = new String();
			pieceOrigin[0] += "H8";
			pieceOrigin[1] = new String();
			pieceOrigin[1] += "00";
			numPiece = 1;
			while(y < 10)
			{
				gridTest[y] = new Array();
				grid[y] = new Array();
				while(x < 10)
				{
					if(y == 4 && x > 1 && x < 8)
					{
						gridTest[y][x] = 1;
						grid[y][x] = 1;
					}
					else if(x == 7 && y >= 4 && y <= 7)
					{
						gridTest[y][x] = 1;
						grid[y][x] = 1;
					}
					else
					{
						gridTest[y][x] = 0;
						grid[y][x] = 0;
					}
					x++;
				}
				x = 0;
				y++;
			}
			gridTest[4][7] = 2;
			grid[4][7] = 2;
		}

		function lvl5() {
			var y = 0;
			var x = 0;
			posOrigin = new String();
			posOrigin += '#';
			posOrigin += "J10";
			dirOrigin = 4;
			pieceOrigin[0] = new String();
			pieceOrigin[0] += "E5";
			pieceOrigin[1] = new String();
			pieceOrigin[1] += "00";
			numPiece = 1;
			while(y < 10)
			{
				gridTest[y] = new Array();
				grid[y] = new Array();
				while(x < 10)
				{
					gridTest[y][x] = 0;
					grid[y][x] = 0;
					if(y == 0 || y == 9)
					{
						gridTest[y][x] = 1;
						grid[y][x] = 1;
					}
					if((y == 2 && (x >= 2 && x <= 7)) || (y == 7 && x >= 2))
					{
						gridTest[y][x] = 1;
						grid[y][x] = 1;
					}
					if(y == 5 && (x >= 4 && x <= 7))
					{
						gridTest[y][x] = 1;
						grid[y][x] = 1;
					}
					if(x == 0 || (x == 9 && (y >= 0 && y <= 7)) || (x == 2 && (y >= 2 && y <= 7)) || (x == 7 && (y >= 2 && y <= 5)) || (x == 4 && (y == 4 || y == 5)))
					{
						gridTest[y][x] = 1;
						grid[y][x] = 1;
					}
					if((y == 0 && (x == 0 || x == 9)) || (y == 9 && x == 0) || (y == 2 && (x == 2 || x == 7)) || (y == 7 && (x == 2 || x == 9)) || (y == 5 && (x == 4 || x == 7)))
					{
						gridTest[y][x] = 2;
						grid[y][x] = 2;
					}
					x++;
				}
				x = 0;
				y++;
			}
		}

	function lvl6() {
			var y = 0;
			var x = 0;
			posOrigin = new String();
			posOrigin += '#';
			posOrigin += "F3";
			dirOrigin = 1;
			pieceOrigin[0] = new String();
			pieceOrigin[0] += "A2";
			pieceOrigin[1] = new String();
			pieceOrigin[1] += "A9";
			pieceOrigin[2] = new String();
			pieceOrigin[2] += "B1";
			pieceOrigin[3] = new String();
			pieceOrigin[3] += "B10";
			pieceOrigin[4] = new String();
			pieceOrigin[4] += "I1";
			pieceOrigin[5] = new String();
			pieceOrigin[5] += "I10";
			pieceOrigin[6] = new String();
			pieceOrigin[6] += "J2";
			pieceOrigin[7] = new String();
			pieceOrigin[7] += "J9";
			pieceOrigin[8] = new String();
			pieceOrigin[8] += "00";
			numPiece = 8;
			while(y < 10)
			{
				gridTest[y] = new Array();
				grid[y] = new Array();
				while(x < 10)
				{
					grid[y][x] = 0;
					gridTest[y][x] = 0;
					if((y == 0 || y == 9) && ((x >= 0 && x <= 2) || (x >= 7 && x <= 9)))
					{
						grid[y][x] = 1;
						gridTest[y][x] = 1;
					}
					if(y == 2 || y == 7)
					{
						grid[y][x] = 1;
						gridTest[y][x] = 1;	
					}
					if((y == 1 || y == 8) && (x == 0 || x == 2 || x == 7 || x == 9))
					{
						grid[y][x] = 1;
						gridTest[y][x] = 1;
					}
					if(x == 2 || x == 7)
					{
						grid[y][x] = 1;
						gridTest[y][x] = 1;
					}
					if((y == 0 || y == 2 || y == 7 || y == 9) && (x == 0 || x == 2 || x == 7 || x == 9))
					{
						grid[y][x] = 2;
						gridTest[y][x] = 2;
					}

					x++;
				}
				x = 0;
				y++;
			}
		}
