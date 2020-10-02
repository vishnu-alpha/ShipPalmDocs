---
id: config
title: Configuration Manual
sidebar_label: Config Manual
---
<!-- JSX Code -->
export const Highlight = ({children, color}) => ( <span style={{
backgroundColor: color,
borderRadius: '10px',
color: '#141414',
padding: '0.2rem',
}}> {children} </span> );

:::important
 **COPYRIGHT INFORMATION**

© 2019 Alpha Ori. All rights reserved.

Information in this document is subject to change without notice. The
software described in this document is furnished under a license
agreement or nondisclosure agreement. The software may be used or copied
only in accordance with the terms of those agreements. No part of this
publication may be reproduced, stored in a retrieval system, or
transmitted in any form or any means electronic or mechanical, including
photocopying and recording for any purpose other than the purchaser's
personal use without the written permission of Alpha Ori.
:::

:::note
Configuration manual contains information on all the setups required during initiation of a company. This is important for all the functionalities to work as intended. In addition to the configuration setup, administrators also require to create/modify parameters to make the installation vessel specific. All admin related tasks can be found in the [<Highlight color="#018dff">Administrator Manual</Highlight>](../adminManual/admin).
:::

---

## 1. Setting Up No. Series

No. Series is used to setup the prefixed serial numbers of the items in the screens such as Technical Components, Work Plans, Time Schedules. Work Orders, Work Request, etc.

For setting up the no. series, follow as below: -

-   In the BLOB search, type *No. Series* and select the item from the
    list.

![](/mms/conf/image4.png)

-   Click on *New* to create a new entry

![](/mms/conf/image5.png)

-   Update *Code*, *Description* and click on the *Starting No* column

![](/mms/conf/image6.png)

-   Update *Starting Date, Starting No.,* and *Ending No.,* and click on
    *Close*

![](/mms/conf/image7.png)

 *Note: Update Last Date Used and Last No. Used only when the same
 series has been used earlier and is now intended to be used for a
 different series.*

-   Check the *Default Nos* checkbox. The screen gets auto saved. Click
    on the button to close the screen.

![](/mms/conf/image8.png)

## 2. Work Order Management Setup

WO management setup should be done for each ship before the application
goes live. Once the setup is completed, only then the users will be able
to perform tasks such as updating counters values, reporting work
orders, create and report non-periodic work orders.

For setting up the Work Order Management Setup, follow as below: -

-   In the BLOB search, type *Work Order Management Setup* and select
    the item from the list

![](/mms/conf/image9.png)

-   Updated *Exceeding Planned Cost Work Order* as *Posted Work Order:
    Invoices/ Planned*

-   Select *Drop File Type* as *BC-Link*

![](/mms/conf/image10.png)

-   Under *Numbering*, select the *No. Series* to be followed for WO
    Requests, WO, Work Plans and Time Schedules.

![](/mms/conf/image11.png)

-   Under *Electronic Signature*, enable "Dual Control" , when this
    toggle is enabled, user can able to post the registered WO

 ![](/mms/conf/image12.png)

-   Under *Time Recording*, select the No. Series to be followed for
    Time Recordings.

![](/mms/conf/image13.png)

-   Under *Checklist,* select the No. Series to be followed for
    Checklist.

![](/mms/conf/image14.png)

-   Toggle the bar to active for uploading images against Technical
    Objects.

![](/mms/conf/image15.png)

-   Go to *Actions\\Functions\\Change Work Order Status*

![](/mms/conf/image16.png)

-   Update the Work Order Status that the work orders should follow

 *Note: Marking a Status as Down gradable means the work order can be
 reverted to a previous status*

![](/mms/conf/image17.png)

-   The screen gets auto saved. Click on the button to go back.

![](/mms/conf/image18.png)

-   *Work Order Management Setup* completed successfully.

## 3. Work Order Approval Setup

All kinds of approvals are to be setup under work order approval setup.
The setup is required for accomplishing tasks like sending deferment
request and approving them.

For setting up the approval setup follow as below: -

-   In the BLOB search, type '*Work Order Approval Setup List'* and
    select the item from the list

![](/mms/conf/image19.png)

-   Click on *New* to open the Work Order Approval Setup Card

![](/mms/conf/image20.png)

-   Update *Code* and *Description.*

-   Under *Critical Code,* select the type of work order the setup
    should be applicable.

-   Set the *Document Mandatory* to *active* for making the document
    upload mandatory while requesting deferment.

![](/mms/conf/image21.png)

-   Under *Lines,* select the requester and approver.

![](/mms/conf/image22.png)

*Note: A multiple levels of approval can be setup as below.*

![](/mms/conf/image23.png)

-   Go to *Process* and click on *Activate* to set the workflow as
    active.

![](/mms/conf/image24.png)

-   The approval setup is now active.

![](/mms/conf/image25.png)

-   The screen gets auto saved. Click on the button to close the screen.

![](/mms/conf/image26.png)

## 4. MT Maritime Setup

MT Maritime Setup is used to setup the type on which the criticality of
the Technical Components to be set.

For setting up the approval setup follow as below: -

-   In the BLOB search, type *MT Maritime Setup* and select the item
    from the list

![](/mms/conf/image27.png)

-   Select the Criticality Define Method as *Manually/ FMEA and enable
    'Mandatory of Work done feedback' under general*

 ![](/mms/conf/image28.png)

 *Note: Manual indicates that on the Technical Component Card, the
 criticality can be set up using an Active/ Inactive toggle.*

 *Note: FMEA includes the FMEA section separately on the Technical
 Component Card where the criticality can be set up based on the FMEA
 formulae.*

*Note: When 'Mandatory of work done feedback' is checked, user will not
be allowed to report work order without adding feedback*

-   Under the General Tab two additional cluster related options are a)
    Enabling different intervals in a cluster and b) Enabling checklists
    to be used System wide with clusters.

 ![](/mms/conf/image29.png)

-   Under *File Management,* update the maximum allowable size of the
    attachment that can be uploaded.

![](/mms/conf/image30.png)

-   The screen gets auto saved. Click on the button to close the screen.

![](/mms/conf/image31.png)

## 5. Inventory Setup

Inventory setup is required for updating the ROBs of the spares in the
application.

For completing the inventory setup, follow as below: -

-   In the BLOB search, type *Inventory Setup List* and select the item
    from the list

![](/mms/conf/image32.png)

-   Update *Default Costing Method* as *FIFO*

-   Set the *Prevent Negative Inventory* to active to avoid negative
    ROBs.

![](/mms/conf/image33.png)

-   Set the location toggle to active for making the Location update
    mandatory while updating Purchase/ Sale

![](/mms/conf/image34.png)

-   Select the No. Series for the Items.

![](/mms/conf/image35.png)

-   Inventory Setup Completed. The screen gets auto saved. Click on the
    button to close the screen.

![](/mms/conf/image36.png)

## 6. Unit Of Measure setup

The UOM items which require decimal values needs to be enabled in this
screen. By default none of the UOM items have decimal value input
enabled. This has a system wide impact on where ever the UOM fields are
referred to(Item Ledger Entry).

![](/mms/conf/image42.png)

## 7. Work order posting setup

-   In the BLOB search, type *WO Posting Setup* and select the item from
    the list

-   Click on 'New' in Work Order posting column to create new work order
    posting group

![](/mms/conf/image43.png)

NOTE: WO Posting setup is a one time setup, it should be set when a new
vessel is been created in the application.

## 8. Inventory posting setup

-   In the BLOB search, type *Inventory Posting Setup* and select the
    item from the list

-   Click on 'New' menu in Inventory posting setup screen, to create
    location code, Inv Posting group code, Inventory account etc.,

![](/mms/conf/image44.png)

-   Click on 'New' in Location Code column to create new location codes

![](/mms/conf/image45.png)

 NOTE: Inventory Posting setup is a one time setup, it should be set
 when a new vessel is been created in the application.

## 9. Company information

-   In the BLOB search, type *Company Information* and select the item
    from the list

-   To upload a logo of the company, click on '+' near Picture and
    upload the image; this logo will appear in all reports

![](/mms/conf/image46.png)

## 10. Cue setup

Cues defines the criticality of the tiles. A user can set the threshold
range for the tiles in their respective logins. Whenever the count for
the tile breaches the threshold point, the tile color changes as set by
the user.

For setting up the cues, follow as below: -

Click on the Button Next to Dashboard and Select 'Setup Cues'

 ![](/mms/conf/image47.png)

Select Range style under 'Low', 'Middle' and 'High' Range Style from the
Option (Favorable UnFavorable, Ambiguous and Subordinate)

Update Low and High Threshold value under Threshold 1 and Threshold 2

Click on Close

![](/mms/conf/image48.png)

The Color of the Tiles on the Dashboard shall Update accordingly ,
whenever the Count for the respective Tile is Breached

![](/mms/conf/image49.png)

## 11. Technical Facility Management Setup

 ![](/mms/conf/image50.png)

These settings need to be auto generated for each ship company during
the initial setup phase.

## 12. Pre-Configured default tiles for each Role

### *Chief Engineer Role Centre:*
<table>
<tbody>
<tr class="odd">
<td><strong>No.</strong></td>
<td><strong>Grouping</strong></td>
<td><strong>Tiles</strong></td>
<td><strong>Description</strong></td>
<td><strong>Cue Setup?</strong></td>
</tr>
<tr class="even">
<td>1</td>
<td><strong>Overdue Work orders</strong></td>
<td>Critical Work orders Overdue</td>
<td>Number of critical work orders with Due Status ‘Overdue’ will be displayed</td>
<td>Red for &gt;0</td>
</tr>
<tr class="odd">
<td>2</td>
<td></td>
<td>Non-Critical Work Orders Overdue</td>
<td>Number of non-critical work orders with Due status ‘Overdue’ will be displayed</td>
<td></td>
</tr>
<tr class="even">
<td>3</td>
<td></td>
<td>Class Work orders Overdue</td>
<td>Number of class work orders with Due status ‘Overdue’ will be displayed</td>
<td></td>
</tr>
<tr class="odd">
<td>4</td>
<td><strong>To Do</strong></td>
<td>WO's to be verified</td>
<td>Count of WO’s in Finished status, for the user to verify and Close.</td>
<td></td>
</tr>
<tr class="even">
<td>5</td>
<td></td>
<td>WO Requests to be processed</td>
<td>Count of Work order requests registered, for the user to process (Post, Post and Create a WO or Reject)</td>
<td></td>
</tr>
<tr class="odd">
<td>6</td>
<td><strong>Upcoming Work</strong></td>
<td>Work orders due for next 30 days</td>
<td>Count of all the Work orders which are due for the next 30 days will be displayed</td>
<td></td>
</tr>
<tr class="even">
<td>7</td>
<td></td>
<td>Work order awaiting deferment approval</td>
<td>Count of Work orders in which a deferment of the due date has been requested.</td>
<td></td>
</tr>
<tr class="odd">
<td>8</td>
<td></td>
<td>External services upcoming next 60 days</td>
<td>Count of the Work orders with External Services, which are coming due in the next 60 days</td>
<td></td>
</tr>
<tr class="even">
<td>9</td>
<td><strong>Spares</strong></td>
<td>Critical Spares below Reorder Level</td>
<td>Count of critical spares whose ROB is below reorder level will be displayed</td>
<td></td>
</tr>
<tr class="odd">
<td>10</td>
<td></td>
<td>Non-Critical Spares below Reorder Level</td>
<td>Count of non-critical spares whose ROB is below reorder level will be displayed</td>
<td></td>
</tr>
<tr class="even">
<td>11</td>
<td><strong>Counter</strong></td>
<td>Counters Not Updated</td>
<td>Number of Main Component counters which are not updated for more days than the Update frequency specified against the component.</td>
<td></td>
</tr>
</tbody>
</table>

### Third *Engineer* Role Centre:
<table>
<tbody>
<tr class="odd">
<td><strong>S.No</strong></td>
<td><strong>Grouping</strong></td>
<td><strong>Tiles</strong></td>
<td><strong>Description</strong></td>
<td><strong>Cue Setup?</strong></td>
</tr>
<tr class="even">
<td>1</td>
<td><strong>Overdue Work orders</strong></td>
<td>Critical Work orders Overdue</td>
<td>Number of critical work orders with Due Status ‘Overdue’ will be displayed</td>
<td></td>
</tr>
<tr class="odd">
<td>2</td>
<td></td>
<td>Non-Critical Work Orders Overdue</td>
<td>Number of non-critical work orders with Due status ‘Overdue’ will be displayed</td>
<td></td>
</tr>
<tr class="even">
<td>3</td>
<td><strong>To Do</strong></td>
<td>Work orders due for next 30 days</td>
<td>Count of work orders which are due for next 30days will be displayed</td>
<td></td>
</tr>
<tr class="odd">
<td>4</td>
<td></td>
<td>Counters Not Updated</td>
<td>Count of counters which are not updated for more days than the Update frequency specified against the counter.</td>
<td></td>
</tr>
<tr class="even">
<td>5</td>
<td><strong>Spares</strong></td>
<td>Critical Spares below Reorder Level</td>
<td>Count of critical spares whose ROB is below reorder level will be displayed</td>
<td>Red for&gt;0</td>
</tr>
<tr class="odd">
<td>6</td>
<td></td>
<td>Non-Critical Spares below Reorder Level</td>
<td>Count of non-critical spares whose ROB is below reorder level will be displayed</td>
<td></td>
</tr>
</tbody>
</table>

### *Technical* Superintendent:
<table>
<tbody>
<tr class="odd">
<td><strong>S.No</strong></td>
<td><strong>Grouping</strong></td>
<td><strong>Tiles</strong></td>
<td><strong>Description</strong></td>
<td><strong>Cue Setup?</strong></td>
</tr>
<tr class="even">
<td>1</td>
<td><strong>Overdue Work orders</strong></td>
<td>Critical Work orders Overdue</td>
<td>Number of critical work orders with Due Status ‘Overdue’ will be displayed</td>
<td>Red for &gt;0</td>
</tr>
<tr class="odd">
<td>2</td>
<td></td>
<td>Non-Critical Work Orders Overdue</td>
<td>Number of non-critical work orders with Due status ‘Overdue’ will be displayed</td>
<td></td>
</tr>
<tr class="even">
<td>3</td>
<td></td>
<td>Class Work orders Overdue</td>
<td>Number of class work orders with Due status ‘Overdue’ will be displayed</td>
<td></td>
</tr>
<tr class="odd">
<td>4</td>
<td><strong>To Do</strong></td>
<td>Pending Deferment Requests</td>
<td>Count of deferment requests which are to be approved will be displayed</td>
<td></td>
</tr>
<tr class="even">
<td>5</td>
<td><strong>Upcoming Work</strong></td>
<td>Work orders due for next 30 days</td>
<td>Count of work order which are due for next 30days will be displayed</td>
<td></td>
</tr>
<tr class="odd">
<td>6</td>
<td><strong>Spares</strong></td>
<td>Critical Spares below Reorder Level</td>
<td>Count of critical spares whose ROB is below reorder level will be displayed</td>
<td></td>
</tr>
<tr class="even">
<td>7</td>
<td></td>
<td>Non-Critical Spares below Reorder Level</td>
<td>Count of non-critical spares whose ROB is below reorder level will be displayed</td>
<td></td>
</tr>
<tr class="odd">
<td>8</td>
<td><strong>Counter</strong></td>
<td>Counters Not Updated</td>
<td>Number of Main Component counters which are not updated for more days than the Update frequency specified against the component.</td>
<td></td>
</tr>
</tbody>
</table>