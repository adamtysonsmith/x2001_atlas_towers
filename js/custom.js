/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

$(document).ready(function(){
    
    // Compile Handlebars Template
    var gridTemplate = Handlebars.compile($('#location-item-template').text());
    var modalTemplate = Handlebars.compile($('#location-modal-template').text());
    
    // Populate Templates
    $('#location-grid').html(gridTemplate(templateData));
    $('body').prepend(modalTemplate(templateData));

});