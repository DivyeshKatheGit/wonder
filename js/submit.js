        
        
        
        
        const cards = document.querySelectorAll('.card');
        let cardindx=0;

        const client = "_6DI81iVDlmFvszde8P5kOOag05OzWCO1myPV7Gfils";

        function search()
        {
        
        let query1= "abstract";
        const url1 = "https://api.unsplash.com/search/photos/?client_id="+client+"&query="+query1;
        //making request to api
        fetch(url1).then(function(data)
        {
            return data.json();
        })
        .then(function(data)
        {
            console.log(data);
            data.results.forEach(photo =>
            {
                let image = document.createElement('img');
                image.src = photo.urls.small;
                cards[cardindx++].appendChild(image);
            })
        })

        let query2= "paint";
        const url2 = "https://api.unsplash.com/search/photos/?client_id="+client+"&query="+query2;
        //making request to api
        fetch(url2).then(function(data)
        {
            return data.json();
        })
        .then(function(data)
        {
            console.log(data);
            data.results.forEach(photo =>
            {
                let image = document.createElement('img');
                image.src = photo.urls.small;
                cards[cardindx++].appendChild(image);
            })
        })

        }

        search();