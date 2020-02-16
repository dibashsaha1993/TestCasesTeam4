$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Footer.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is used to validate footer navigation in home page",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To validate the Corporate Information menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-corporate-information-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i click \"Corporate Information\" link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "it should navigate the \"https://www.capitalone.com/about/corporate-information/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 4329346594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Corporate Information",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 636099683,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3280128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/about/corporate-information/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 7012908,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 91080087,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "To validate the Newsroom menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-newsroom-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "i click \"Newsroom\" link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "it should navigate the \"https://www.capitalone.com/about/newsroom/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3365038479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Newsroom",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 896968549,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3933763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/about/newsroom/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 7726497,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 97015591,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To validate the Investors menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-investors-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "i click \"Investors\" link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "i switch to new window",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "it should navigate the \"https://ir-capitalone.gcs-web.com/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3192052723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Investors",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 273777537,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.switch_to_new_window()"
});
formatter.result({
  "duration": 55658865,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3298342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://ir-capitalone.gcs-web.com/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 1486447531,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 97297382,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "To validate the Careers \u0026 Jobs menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-careers-\u0026-jobs-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "i click \"Careers \u0026 Jobs\" link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "i switch to new window",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "it should navigate the \"https://www.capitalonecareers.com/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3238099537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Careers \u0026 Jobs",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 286921821,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.switch_to_new_window()"
});
formatter.result({
  "duration": 33212753,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2841710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalonecareers.com/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 3020780093,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 102448276,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "To validate the Diversity \u0026 Inclusion menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-diversity-\u0026-inclusion-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "i click \"Diversity \u0026 Inclusion\" link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "i switch to new window",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "it should navigate the \"https://diversity.capitalone.com/inclusion/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3286333183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Diversity \u0026 Inclusion",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 277341273,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.switch_to_new_window()"
});
formatter.result({
  "duration": 59564070,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3022467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://diversity.capitalone.com/inclusion/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 824318077,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 101221799,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "To validate the Sustainability menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-sustainability-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "i click \"Sustainability\" link",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "i switch to new window",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "it should navigate the \"https://environment.capitalone.com/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3234329795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sustainability",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 228012834,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.switch_to_new_window()"
});
formatter.result({
  "duration": 57028744,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3322282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://environment.capitalone.com/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 866217718,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 94854669,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "To validate the Canada menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-canada-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "i click \"Canada\" link",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "i switch to new window",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "it should navigate the \"https://www.capitalone.ca/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3103891486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canada",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 300524499,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.switch_to_new_window()"
});
formatter.result({
  "duration": 64378115,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2684659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.ca/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 2961534086,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 98146830,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "To validate the UK menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-uk-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "i click \"UK\" link",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "i switch to new window",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "it should navigate the \"https://www.capitalone.co.uk/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3110348296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UK",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 329582198,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.switch_to_new_window()"
});
formatter.result({
  "duration": 35012651,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3827302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.co.uk/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 2493119669,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 100250363,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "To validate the Locations \u0026 ATMs menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-locations-\u0026-atms-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 66,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "i click \"Locations \u0026 ATMs\" link",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "it should navigate the \"https://locations.capitalone.com/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3226573559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Locations \u0026 ATMs",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1151991463,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2775119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://locations.capitalone.com/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 4541741,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 100441833,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "To validate the Mobile App menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-mobile-app-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "i click \"Mobile App\" link",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "it should navigate the \"https://www.capitalone.com/applications/mobile/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3162862034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile App",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1068936089,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3580784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/applications/mobile/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 6549639,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 95019533,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "To validate the Meet Eno menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-meet-eno-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 80,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "i click \"Meet Eno\" link",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "it should navigate the \"https://www.capitalone.com/applications/eno/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3157150242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meet Eno",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 868308857,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3483458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/applications/eno/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 8352100,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 99919824,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "To validate the Ask Alexa menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-ask-alexa-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 87,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "i click \"Ask Alexa\" link",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "it should navigate the \"https://www.capitalone.com/applications/alexa/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3146034199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ask Alexa",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 959602958,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2492918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/applications/alexa/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 4757659,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 98770148,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "To validate the Privacy menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-privacy-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 94,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "i click \"Privacy\" link",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "it should navigate the \"https://www.capitalone.com/privacy\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3010591826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 975304637,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2698106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/privacy",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 46002960,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 96483892,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "To validate the Subpoena Policy menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-subpoena-policy-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 101,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "i click \"Subpoena Policy\" link",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "it should navigate the \"https://www.capitalone.com/legal/subpoena-policy\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3172281774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Subpoena Policy",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1335150686,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3053024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/legal/subpoena-policy",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 42168291,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 90764830,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "To validate the Additional Disclosures menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-additional-disclosures-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 108,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "i click \"Additional Disclosures\" link",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "it should navigate the \"https://www.capitalone.com/legal/disclosures\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3329280409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Disclosures",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1331375060,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3679733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/legal/disclosures",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 11040029,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 93311989,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "To validate the 2019 Cyber Incident menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-2019-cyber-incident-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 115,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "i click \"2019 Cyber Incident\" link",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "it should navigate the \"https://www.capitalone.com/facts2019/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3050435584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019 Cyber Incident",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 836863392,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2924673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/facts2019/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 5238610,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 92479091,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "To validate the Support Center menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-support-center-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 122,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "i click \"Support Center\" link",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "it should navigate the \"https://www.capitalone.com/support-center\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3183070778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Support Center",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1689255105,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2466043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/support-center",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 5706050,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 98055136,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "To validate the Learn \u0026 Grow menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-learn-\u0026-grow-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 129,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "i click \"Learn \u0026 Grow\" link",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "it should navigate the \"https://www.capitalone.com/learn-grow\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3149354310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Learn \u0026 Grow",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1792615877,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2748854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/learn-grow",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 6273578,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c...alone.com/learn-grow[]\u003e but was:\u003c...alone.com/learn-grow[/?external_id\u003dCOF01_HUB_HUB_NAV_SITE_LGH_D99]\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat com.test.capitalone.tests.MenuPageTest.it_should_navigate_the_porper_url(MenuPageTest.java:35)\n\tat ✽.Then it should navigate the \"https://www.capitalone.com/learn-grow\" url(Footer.feature:132)\n",
  "status": "failed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 135,
  "name": "To validate the Resources for Military menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-resources-for-military-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 136,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "i click \"Resources for Military\" link",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "it should navigate the \"https://www.capitalone.com/military\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3322987566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resources for Military",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1732291194,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2876152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/military",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 6589528,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 96285840,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "To validate the Resources for Accessibility Assistance menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-resources-for-accessibility-assistance-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 143,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 144,
  "name": "i click \"Accessibility Assistance\" link",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "it should navigate the \"https://www.capitalone.com/about/accessibility-commitment/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3362191834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accessibility Assistance",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 754703825,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2658986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/about/accessibility-commitment/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 38332148,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 94586587,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "To validate the Resources for Tweet @AskCapitalOne menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-resources-for-tweet-@askcapitalone-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 150,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "i click \"Tweet @AskCapitalOne\" link",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "i switch to new window",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "it should navigate the \"https://twitter.com/askcapitalone\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3231158475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tweet @AskCapitalOne",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 335630018,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.switch_to_new_window()"
});
formatter.result({
  "duration": 32836430,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2903170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://twitter.com/askcapitalone",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 393031123,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 90963388,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "To validate the Resources for Contact Us menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-resources-for-contact-us-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 157,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 159,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "i click \"Contact Us\" link",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "it should navigate the \"https://www.capitalone.com/support-center/contact-us\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 163,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3163974826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Us",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1432539463,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2716875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/support-center/contact-us",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 11626637,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 89701350,
  "status": "passed"
});
formatter.uri("Menu.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is used to validate menu navigation in home page",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To validate the Credit card menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-credit-card-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i click \"Credit Cards\" link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "it should navigate the \"https://www.capitalone.com/credit-cards/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3145456961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Cards",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1426112830,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 4178545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/credit-cards/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 14104344,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 92834150,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "To validate the Checking \u0026 Savings menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-checking-\u0026-savings-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "i click \"Checking \u0026 Savings\" link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "it should navigate the \"https://www.capitalone.com/bank/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3091204617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking \u0026 Savings",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 2134042935,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2575754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/bank/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 7685914,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 99233081,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To validate the Auto Loans menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-auto-loans-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "i click \"Auto Loans\" link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "it should navigate the \"https://www.capitalone.com/auto-financing\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3008661455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Auto Loans",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1756208920,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2415129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/auto-financing",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 4273224,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 93593247,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To validate the Business menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-business-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "i click \"Business\" link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "it should navigate the \"https://www.capitalone.com/small-business-bank/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 2989399750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1185434114,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 4160447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/small-business-bank/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 7943239,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 99028111,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "To validate the Commercial menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-commercial-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "i click \"Commercial\" link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "it should navigate the \"https://www.capitalone.com/commercial/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3263324170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Commercial",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 786487689,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2643968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/commercial/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 8627040,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 97028830,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "To validate the Learn \u0026 Grow menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-learn-\u0026-grow-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "i click \"Learn \u0026 Grow\" link",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "it should navigate the \"https://www.capitalone.com/learn-grow/?external_id\u003dCOF01_HUB_HUB_NAV_SITE_LGH_D99\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3283534728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Learn \u0026 Grow",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1891812793,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2578453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/learn-grow/?external_id\u003dCOF01_HUB_HUB_NAV_SITE_LGH_D99",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 4807900,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 91463549,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "To validate the Life Events menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-life-events-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "i click \"Learn \u0026 Grow\" link",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "i click \"Life Events\" link",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "it should navigate the \"https://www.capitalone.com/learn-grow/life-events\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3288194782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Learn \u0026 Grow",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1849519468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Life Events",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 2002542194,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2127302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/learn-grow/life-events",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 6067216,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 101198926,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "To validate the Money Management menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-money-management-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "i click \"Learn \u0026 Grow\" link",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "i click \"Money Management\" link",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "it should navigate the \"https://www.capitalone.com/learn-grow/money-management\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 2946683250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Learn \u0026 Grow",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1727720967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Money Management",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 2073590760,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2450234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/learn-grow/money-management",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 5565536,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 91006543,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "To validate the More Than Money menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-more-than-money-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "i click \"Learn \u0026 Grow\" link",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "i click \"More Than Money\" link",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "it should navigate the \"https://www.capitalone.com/learn-grow/more-than-money\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3282401192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Learn \u0026 Grow",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1813649879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "More Than Money",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1470097224,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2840566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/learn-grow/more-than-money",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 6384702,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 97939493,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "To validate the Tech \u0026 Innovation menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-tech-\u0026-innovation-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "i click \"Learn \u0026 Grow\" link",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "i click \"Tech \u0026 Innovation\" link",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "it should navigate the \"https://www.capitalone.com/learn-grow/tech-innovation\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3153390970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Learn \u0026 Grow",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1811798212,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2406879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tech \u0026 Innovation",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1447863239,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2127562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/learn-grow/tech-innovation",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 5006595,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 92752280,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "To validate the Privacy \u0026 Security menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-privacy-\u0026-security-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 79,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "i click \"Learn \u0026 Grow\" link",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "i click \"Privacy \u0026 Security\" link",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "it should navigate the \"https://www.capitalone.com/learn-grow/privacy-security\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3023804862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Learn \u0026 Grow",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 4399461202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy \u0026 Security",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1387705297,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2704964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/learn-grow/privacy-security",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 5654469,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 97267231,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "To validate the Sign In menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-sign-in-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 87,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "i click \"Sign In\" link",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "it should navigate the \"https://verified.capitalone.com/auth/signin\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3180844536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1781763565,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3766680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://verified.capitalone.com/auth/signin",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 6151607,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 91137591,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "To validate the Bredcrum menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-menu-navigation-in-home-page;to-validate-the-bredcrum-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 94,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "i click \"Credit Cards\" link",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "i click \"Capital One Home\" link",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "it should navigate the \"https://www.capitalone.com/\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3181377474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Cards",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1309521562,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2969117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Capital One Home",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1134225700,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 2469315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.capitalone.com/",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 206014837,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "duration": 97973556,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is used to validate footer navigation in home page",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signin"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "To validate the Sign In menu",
  "description": "",
  "id": "this-feature-is-used-to-validate-footer-navigation-in-home-page;to-validate-the-sign-in-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "to load the application url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click \"Sign In\" link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "it should navigate the \"https://verified.capitalone.com/auth/signin\" url",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "i enter username \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i enter password \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i click sign button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "validate error message \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuPageTest.to_load_the_application_url()"
});
formatter.result({
  "duration": 3146315734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 9
    }
  ],
  "location": "MenuPageTest.i_click_link(String)"
});
formatter.result({
  "duration": 1722233280,
  "status": "passed"
});
formatter.match({
  "location": "MenuPageTest.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 3149962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://verified.capitalone.com/auth/signin",
      "offset": 24
    }
  ],
  "location": "MenuPageTest.it_should_navigate_the_porper_url(String)"
});
formatter.result({
  "duration": 6580343,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MenuPageTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});