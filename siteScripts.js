'use strict'

const COMPANYNAME = 'Excellio';
const LANGUAGE    = window.location.search.includes('/en') ? 'en' : 'sv';
const SITE        = window.location.origin.includes('file:') ? 'local' : 'www';

populateSite(LANGUAGE, SITE);

document.getElementById('businessSiteName').innerHTML = COMPANYNAME;

let skillList = [];
skillList = ['Microsoft Excel', 'Excel VBA', 'Google Spreadsheet', 'Google Apps Script', 'JS', 'Dashboard']
createSkillTags('skillGroupADiv', skillList);

skillList = [];
skillList = ['Excel Power Pivot', 'Tableau', 'SQL', 'Data Modeling', 'Dashboard']
createSkillTags('skillGroupBDiv', skillList);


function populateSite(language, site) {

    // language
    let defaultUrl;
    site == 'www' ? defaultUrl = 'https://www.excellio.se/index.html' : defaultUrl = 'file:///C:/Users/jorgen.gustavsson/Documents/GitHub/excellio.se/index.html'
    let lang = 'sv';
    addLanguageLink(lang, defaultUrl);
    lang      = 'en';
    addLanguageLink(lang, defaultUrl);
    
    //logo & About
    document.getElementById('homeTop').innerHTML               = translator(' Home', language, 'upper');
    document.getElementById('aboutTop').innerHTML              = translator(' About Us', language, 'upper');
    document.getElementById('about').innerHTML                 = translator('About Us', language, 'upper');
    document.getElementById('aboutSmallTop').innerHTML         = translator('About', language, 'upper');
    document.getElementById('skillsTop').innerHTML             = translator(' Skills', language, 'upper');
    document.getElementById('skills').innerHTML                = translator('Our Skills', language, 'upper');
    document.getElementById('skillsSmallTop').innerHTML        = translator('Skills', language, 'upper');
    document.getElementById('contact').innerHTML               = translator('Contact', language, 'upper');
    document.getElementById('contactTop').innerHTML            = translator(' Contact', language, 'upper');
    document.getElementById('contactSmallTop').innerHTML       = translator('Contact', language, 'upper');
    document.getElementById('aboutSectionBreadtext').innerHTML = translator('aboutSectionBreadtext', language, '');
    document.getElementById('weLove').innerHTML                = translator('weLove', language, '');

    //Contact
    document.getElementById('location').innerHTML              = translator('location', language, '');
    document.getElementById('whereWeWork').innerHTML           = translator('whereWeWork', language, 'upper');
    document.getElementById('visit us').innerHTML              = translator('visit us', language, '');
    document.getElementById('coffeechat1').innerHTML           = translator('coffeechat1', language, '');
    document.getElementById('coffeechat2').innerHTML           = translator('coffeechat2', language, '');
    document.getElementById('leaveanote').innerHTML            = translator('leaveanote', language, '');
}




function translator(txt, language, casetivity) {

    let translation;
    let spacePrefix;

    if (txt.charAt(0) == ' ') {
        spacePrefix = true;
        txt = txt.slice(1);
    }

    switch (txt.toLocaleLowerCase()) {
        case 'about':
            language == 'sv' ? translation = ' Om' : translation = ' About';
            break;
        case 'about us':
            language == 'sv' ? translation = 'Om Oss' : translation = 'About Us';
            break;
        case 'contact' :            
            language == 'sv' ? translation = ' Kontakt' : translation = ' Contact';
            break;
        case 'portfolio' :            
            language == 'sv' ? translation = ' portfolio' : translation = ' portfolio';
            break;
        case 'home' :            
            language == 'sv' ? translation = ' Home' : translation = ' Home';
            break;
            case 'our skills' :            
            language == 'sv' ? translation = 'Våra kompetenser på Excellio' : translation = 'Skills At Excellio';
            break;        
        case 'skills' :            
            language == 'sv' ? translation = 'Kompetenser' : translation = 'Skills';
            break;        
        case 'welove' :            
            language == 'sv' ? translation = 'Anta utmaningen med busig och ostrukturerad data!' : translation = 'We love the challenge of mischievous and unstructured data!';
            break;
        case 'aboutsectionbreadtext' :            
            translation = getLargeText(txt, language);
            break;
        case 'wherewework' :            
            language == 'sv' ? translation = 'Här finns vi' : translation = 'Where We Work';
            break;
        case 'location' :            
            language == 'sv' ? translation = 'Skövde, Västergötland' : translation = 'Skövde, Sweden';
            break;
        case 'visit us':
            language == 'sv' ? translation = 'Sväng förbi ' : translation = 'Swing by ';
            break;
            case 'coffeechat1' :            
            language == 'sv' ? translation = ' för en digital ' : translation = ' for a digital ';
            break;
        case 'coffeechat2' :            
            language == 'sv' ? translation = '  kaffechat, lite gött tjöt' : translation = ' coffee chat, or whatever';
            break;
        case 'leaveanote' :            
            language == 'sv' ? translation = ' eller lämna ett meddelande!' : translation = ' or just leave a note!';
            break;
        default: translation = txt;
    }

    if (!translation.length) { translation = txt};
    
    if (casetivity.toLocaleLowerCase() == 'upper')  translation = translation.toLocaleUpperCase();
    if (spacePrefix) translation = ' ' + translation;

    return translation;
}


function addLanguageLink(lang, defaultUrl) {

    let langId      = 'lang' + lang.charAt(0).toUpperCase() + lang.slice(1)
    let htmlElement = document.getElementById(langId)
    let queryParam  = lang;
    htmlElement.setAttribute('onClick', 'window.location.assign("' + defaultUrl + '?/'+ lang + '")');
    htmlElement.innerHTML = queryParam;

    //small devices
    langId          = langId + 'SmallTop'
    htmlElement     = document.getElementById(langId)
    htmlElement.setAttribute('onClick', 'window.location.assign("' + defaultUrl + '?/'+ lang + '")');
    htmlElement.innerHTML = queryParam;

}


function createSkillTags(divId, skillList)  {
    let skillsDiv   = document.getElementById(divId);
    let skillsGroup = createElement('div', 'class', 'skill-group', '');
    let size        = 1/ skillList.length * 100 - 0.5 ;

    skillList.forEach(
        item => {
            let menuSkill  = createMenuSkill(item, size)
            skillsGroup.appendChild(menuSkill);
            skillsDiv.appendChild(skillsGroup);
        }
    )
}

function createMenuSkill(id, size) {

    var skill;
    let classValue =  'menuSkill ';
        classValue += 'w3-container w3-padding-small w3-dark-grey w3-center';

    skill = createElement('skill', 'id', id.toLocaleLowerCase(), id);
    skill.setAttribute('class', classValue);
    skill.setAttribute('style', 'width:' + size + '%');
    //skill.setAttribute('onClick', 'toggleElements("subSite' + id + '")');

    return skill;
}


function createElement(element, attribut, attributvarde, text) {
        
    var elementObjekt = document.createElement(element);
    elementObjekt.setAttribute(attribut,attributvarde);
    elementObjekt.textContent = text;
  
   return elementObjekt;
  }
  


// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }



  function getLargeText(id, lang) {

    let txt;

    switch (id.toLocaleLowerCase()) {
        case 'aboutsectionbreadtext' :
            if (lang == 'sv') {
                txt =  `Under många år har uppdrag bestått av extrahera, transformera och läsa in data från en eller flera datakällor för att slutligen visualiseras. 
                Uppdragen har skett som konsult men även som anställd på produktbolag. De verktyg som har förenklat arbetet och som allt som oftast fallit tillbaks till 
                har varit MS Excel och senare även Google Spreadsheet. Uppdragen har varit alltifrån att minska arbetsbelastning och förenkla för ekonomiavdelningen, 
                sammanställning samt visualisering av säljorganisationens kunddata, bygga projektstyrningsverktyg till att bygga Business Intelligence-lösningar för 
                beslutstöd. Nu är det dags att ta det vidare genom att ta uppdrag under egen regi.`        
            }
            else {
                txt = `For many years, assignments have consisted of extract, transform and load data from one or more data sources to finally be visualized. 
                The assignments have taken place as a consultant but also as employee at product companies. The tools that have simplified the work and that most often 
                fall back on have been MS Excel and later also Google Spreadsheet. The assignments have ranged from reducing workload and simplifying for finance department, 
                compiling and visualizing sales organization's customer data, building project management tools to building Business Intelligence solutions to support 
                business decisions. Now it's time to take this further by taking assignments under own business.`
                                
            }
            break;

        default: txt = ''
    };

    return txt;

  }