/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

$(document).ready(function(){
    var templateData = {
        locations: [
            {
                id: 1,
                dataFilter: 'south-africa',
                name: 'Western Cape',
                image: 'images/portfolio-1.jpg',
                title: 'Modal Project Title 1'
            },
            {
                id: 2,
                dataFilter: 'usa',
                name: 'Arkansas',
                image: 'images/portfolio-2.jpg',
                title: 'Modal Project Title 2'
            },
            {
                id: 3,
                dataFilter: 'south-africa',
                name: 'Gauteng',
                image: 'images/portfolio-3.jpg',
                title: 'Modal Project Title 3'
            },
            {
                id: 4,
                dataFilter: 'usa',
                name: 'Idaho',
                image: 'images/portfolio-4.jpg',
                title: 'Modal Project Title 4'
            },
            {
                id: 5,
                dataFilter: 'usa',
                name: 'Washington',
                image: 'images/portfolio-5.jpg',
                title: 'Modal Project Title 5'
            },
            {
                id: 6,
                dataFilter: 'south-africa',
                name: 'Eastern Cape',
                image: 'images/portfolio-6.jpg',
                title: 'Modal Project Title 6'
            },
            {
                id: 7,
                dataFilter: 'site-building',
                name: 'Site Building',
                image: 'images/portfolio-7.jpg',
                title: 'Modal Project Title 7'
            },
            {
                id: 8,
                dataFilter: 'south-africa',
                name: 'Kwal-Sulu Natal',
                image: 'images/portfolio-8.jpg',
                title: 'Modal Project Title 8'
            },
            {
                id: 9,
                dataFilter: 'south-africa',
                name: 'Limpopo',
                image: 'images/portfolio-9.jpg',
                title: 'Modal Project Title 9'
            },
            {
                id: 10,
                dataFilter: 'usa',
                name: 'Site Building',
                image: 'images/portfolio-10.jpg',
                title: 'Modal Project Title 10'
            },
            {
                id: 11,
                dataFilter: 'south-africa',
                name: 'Mphumalang',
                image: 'images/portfolio-11.jpg',
                title: 'Modal Project Title 11'
            },
            {
                id: 12,
                dataFilter: 'usa',
                name: 'Oregon',
                image: 'images/portfolio-12.jpg',
                title: 'Modal Project Title 12'
            },
            {
                id: 13,
                dataFilter: 'usa',
                name: 'Alaska',
                image: 'images/portfolio-12.jpg',
                title: 'Modal Project Title 12'
            },
            {
                id: 14,
                dataFilter: 'usa',
                name: 'Colorado',
                image: 'images/portfolio-12.jpg',
                title: 'Modal Project Title 12'
            },
            {
                id: 15,
                dataFilter: 'usa',
                name: 'Wyoming',
                image: 'images/portfolio-12.jpg',
                title: 'Modal Project Title 12'
            },
            {
                id: 16,
                dataFilter: 'usa',
                name: 'Montana',
                image: 'images/portfolio-12.jpg',
                title: 'Modal Project Title 12'
            },
            {
                id: 17,
                dataFilter: 'usa',
                name: 'Michigan',
                image: 'images/portfolio-12.jpg',
                title: 'Modal Project Title 12'
            },
            {
                id: 18,
                dataFilter: 'usa',
                name: 'Illinois',
                image: 'images/portfolio-12.jpg',
                title: 'Modal Project Title 12'
            }
        ]
    }
    
    // Compile Handlebars Template
    var gridTemplate = Handlebars.compile($('#location-item-template').text());
    
    // Populate Template
    $('#location-grid').html(gridTemplate(templateData));

});