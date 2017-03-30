$(document).ready(function(){

// zmienne
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');

// funkcje
    // czyszczenie listy wyników po poprzednim wyszukiwaniu
    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function(item){
            $('<li>').text(item.name).appendTo(countriesList);
        });
    }
    
    // pobranie szukanej wartości od użytkownika
    function searchCountries() {
        var countryName = $('#country-name').val();
        
        if(!countryName.length) countryName = 'Poland';
        
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    }
    
// zdarzenia
    $('#search').click(searchCountries);
    
    
});