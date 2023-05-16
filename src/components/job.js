import React from "react";
import {FormattedDate,FormattedMessage,FormattedNumber} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} <FormattedMessage id={MillionPlural(props.offer.salary)}/> </td>
      <td>{props.offer.city}</td>
      <td>
          <FormattedDate
            value={new Date(props.offer.date)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'/>
      </td>
      <td>
        <FormattedNumber
          value={props.offer.views}
          style="decimal"
        />
      </td>
    </tr>
  );
};
function MillionPlural(salary){
  if(salary>1){
    return "millions";
  }
  else{
    return "million";
  }

}
export default Job;
