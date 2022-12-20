
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Table, Loader, Dimmer } from "semantic-ui-react";

import "./DashboardTable.css";

const DashboardTable = () => {
    
    return (
        <Fragment>
          <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Date</th>
        <th>Brand Positivity</th>
        <th>Brand Negativity</th>
        <th>Positive Tweet</th>
        <th>Negative Tweet</th>
        <th>Brand Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10-11-2022</td>
        <td>0.5213</td>
        <td>0.0023</td>
        <td>Hello @KCBGroup for once I smiled after using the App weeh 😂😂😂 on a Saturday\\n\\nCongratulations on your improvement 🙂</td>
        <td>@KCBGroup WTF is wrong with ua mobile banking systems??, Can\'t access the app n the code 522 is not functional as well🤦🤦</td>
        <td>KCB</td>
      </tr>
      <tr>
        <td>11-11-2022</td>
        <td>0.413</td>
        <td>0.015</td>
        <td>\'RT @jumaf3: Safaricom has my Ksh 50k in shares, and every time the CEO says "shareholders", I feel proud... ☺️☺️☺️. When they declare divid…\'\n \'Safaricom has my Ksh 50k in shares, and every time the CEO says "shareholders", I feel proud... ☺️☺️☺️. When they d… https://t.co/nElWsAoHui\</td>
        <td>'@scherargei Soon it will turn out that the KIKUYU BUSINESSES are under attack…\\nFront KBC to kill RMS …NBK to kill F… https://t.co/e1nlsjkIps'</td>
        <td>Safaricom</td>
      </tr>
      <tr>
        <td>12-11-2022</td>
        <td>0.713</td>
        <td>0.133</td>
        <td>@tech_burner Nokia 5230 was 3g before 3 ever launched🤣🤣🤣🤣 also i loved Lumia 525 the most windowsphonr was really r… https://t.co/FZIyu44v3U'</td>
        <td>When I worked with #NOKIA we were not allowed to fly on Garuda.... here is why 😱😱😱😱😱😱 https://t.co/8vIu9sUv2f</td>
        <td>Nokia</td>
      </tr>

      <tr>
        <td>13-11-2022</td>
        <td>0.612</td>
        <td>0.046</td>
        <td>'RT @Chemaget_cornel: Safaricom Ksh/50 airtel Ksh/20 airtime ukipata sema,, best of luck 😊 https://t.co/HDPmUzyfZL'\n 'Safaricom Ksh/50 airtel Ksh/20 airtime ukipata sema,, best of luck 😊 https://t.co/HDPmUzyfZL'</td>
        <td>'Safaricom is the worst company in handling M-PESA fraud if we tweet in public ask to send complaint in private in p… https://t.co/085eE2ckNI'</td>
        <td>Safaricom</td>
      </tr>
      <tr>
        <td>14-11-2022</td>
        <td>0.3213</td>
        <td>0.23</td>
        <td>'Morning  glory  kumbe huwa tamu ivi🤔🤣🤣💔 anyway fika pale @KCBGroup  ruiru branch ulizia #BrownieWaKCB  always at your best service'</td>
        <td>'@KCBGroup Am depressed after you refused to reverse my money 😭😭😭'</td>
        <td>KCB</td>
      </tr>
    </tbody>
  </table>

        </Fragment>
    )
};

export default DashboardTable;