$(document).ready(function(){

// zmienne
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');

// funkcje
    // czyszczenie listy wyników po poprzednim wyszukiwaniu
    // oraz wygenerowanie nowej listy wyników
    function showCountriesList(resp) {
        countriesList.empty();
        var i = 1;
        resp.forEach(function(item){
            $('<li>').text(i++ + ' ' + item.name).appendTo(countriesList);
        });
    }
    
    // pobranie od użytkownika szukanej wartości
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