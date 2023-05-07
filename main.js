function draw() {
    const canvas = document.getElementById('tutorial');
    if(canvas.getContext) {
        const c = canvas.getContext('2d');

        // This is moving a rect with pre-set intervals by 30 px to the right.
        /*
        const size = 30;
        let x = 0;
        const id = setInterval(() => {
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.fillRect(x, 50, size, size);
            x += size;

            if(x >= canvas.width) {
                clearInterval(id);
            }
        }, 200);
        */

        // Rendering tiles

        let x1 = 100;
        let y1 = 100;
        let tile_width = 100;
        let tile_height = 20;

        for(let i = 0; i < 10; ++i) {
            for(let j = 0; j < 5; j++) {
                c.fillStyle = 'rgb(255, 0, 0)';
                c.fillRect(x1 * i + 100, y1, tile_width, tile_height);
            }
        }

        // This is moving a rect by pressing arrows by 30 px in each direction.

        let x = (canvas.width / 2) - 50;
        let y = canvas.height - 30;
        let width = 100;
        let height = 20;
        let dx = 5;
        let dy = 5;

        c.fillStyle = 'rgb(0, 0, 255)';
        c.fillRect(x, y, width, height);

        var Keys = {
            up: false,
            down: false,
            left: false,
            right: false
        };

        window.onkeydown = function(e) {
            var kc = e.keyCode;
            e.preventDefault();

            if(kc === 37) Keys.left = true;
            else if(kc === 38) Keys.up = true;
            else if(kc === 39) Keys.right = true;
            else if(kc === 40) Keys.down = true;
        };

        window.onkeyup = function(e) {
            var kc = e.keyCode;
            e.preventDefault();

            if(kc === 37) Keys.left = false;
            else if(kc === 38) Keys.up = false;
            else if(kc === 39) Keys.right = false;
            else if(kc === 40) Keys.down = false;
        };

        if(Keys.up) {
            y += 3;
        }
        else if(Keys.down) {
            y -= 3;
        }
        if(Keys.left) {
            x += 3;
        }
        else if(Keys.right) {
            x -= 3;
        }
    }
}

draw();