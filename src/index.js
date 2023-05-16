import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const browserLanguage = navigator.language || navigator.userLanguage;
const messages=browserLanguage.startsWith("es")?localeEsMessages:localeEnMessages;
console.log(browserLanguage);
ReactDOM.render(
    
    <IntlProvider locale={browserLanguage} messages={messages}>
            <JobsList/>
            
    </IntlProvider>, document.getElementById("root")
);