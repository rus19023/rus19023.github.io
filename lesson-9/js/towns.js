const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const towns = jsonObject['towns'];

    towns.forEach(town => {
      if (town.name=="Preston"||town.name=="Soda Springs"||town.name=="Fish Haven") {
        
        let card = document.createElement('section'); 
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let h2 = document.createElement('h2');
        let town_a = document.createElement('a')
        let h6 = document.createElement('h6');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');
        let town_name = `${town.name}`;
        let town_link = `https://rus19023.github.io/lesson-11/${town.name}.html`;
        let imgURL = `images/${town.photo}`;
        let motto = `${town.motto}` ;
        let year = `Year founded: ${town.yearFounded}`;
        let population = `Population: ${town.currentPopulation}`;
        let rainfall = `Annual Rainfall: ${town.averageRainfall}`;

        h2.textContent = town_name;
        image.setAttribute('class', 'rounded town-image realign');
        image.setAttribute('src', imgURL); 
        //image.setAttribute('src', 'images/placeholder.jpg'); 
        image.setAttribute('alt', town_name);
        h6.textContent = motto;
        p1.textContent = year;
        p2.textContent =population;
        p3.textContent =rainfall;
        
        //  build the html code for the cards
        //h2.appendChild(town_a);  //  add the town name heading to the text div
        div1.appendChild(h2);
        div1.appendChild(h6);  //  add the motto heading to the text div
        div1.appendChild(p1);  //  add the founding year to the text div
        div1.appendChild(p2);  //  add the population to the text div
        div1.appendChild(p3);  //  add the rainfall to the text div
        div2.appendChild(image);  //  add the photo to the image div
        card.appendChild(div1);  // add the text div to the card div
        card.appendChild(div2);  //  add the image div to the card div

        // set up cards for each town in order of menu

        if (town.name == "Preston") {
          document.querySelector('#preston').appendChild(card);  //  set the Preston div into the html page

        } else if (town_name == "Soda Springs") {
        document.querySelector('#sodasprings').appendChild(card);  //  set the card div into the html page

        } else if (town_name == "Fish Haven") {
        document.querySelector('#fishhaven').appendChild(card);  //  set the card div into the html page
        }
      }
    });
  });