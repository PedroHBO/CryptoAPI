fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=4c053ebe-8d25-495d-b9e0-df929426c540')
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ', response.status);
        return response.json();
    })

    .then((api) => {
        var texto = "";

        for (let i = 0; i < 10; i++) {
            texto = texto + `
              
              <div class="media">
                  <img  class="img" src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="100">
                  <div class="media-body">
                  <h5 class="mt-2">${api.data[i].name}</h5>
                  <p >${api.data[i].symbol}</p>
                  <p>${api.data[i].first_historical_data}</p>
                  </div>
              </div>
         
              `;

            document.getElementById("coins").innerHTML = texto;

        }
    })
    .catch((error) => {
        console.log(error.message);
    });
