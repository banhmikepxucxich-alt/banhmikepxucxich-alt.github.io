window.onload = function() {
    document.getElementById('start').onclick = function() {
        const countElement = document.getElementById('count');
        const listElement = document.getElementById('list');

        if (listElement.value == '') { return };
        
        const list = (listElement.value).split('\n');
        const gridSize = Math.floor(Math.sqrt(list.length));
        const gridArea = gridSize**2;

        countElement.textContent = `(${list.length} songs)`;
        
        for (let i = 0; i < gridArea; i++) {
            const chosenIdx = Math.floor(Math.random() * list.length);
            const songLink = list[chosenIdx];

            const request = async() => {
                console.log('hi!')
                const response = await(fetch(`https://open.spotify.com/oembed?url=${songLink}`));
                const json = response.json();
                const thumbnailUrl = json['thumbnail_url'];

                console.log(thumbnailUrl);
                console.log(i);
            };

            request()

            list.splice(chosenIdx, 1);
        };
        
    };
};