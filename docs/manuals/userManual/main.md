---
id: user
title: Introduction to MMS 
sidebar_label: Introduction
---

:::important
**COPYRIGHT INFORMATION**

© 2019 Alpha Ori. All rights reserved.

Information in this document is subject to change without notice. The
software described in this document is furnished under a license
agreement or nondisclosure agreement. The software may be used or copied
only following the terms of those agreements. No part of this
publication may be reproduced, stored in a retrieval system, or
transmitted in any form or any means electronic or mechanical, including
photocopying and recording for any purpose other than the purchaser's
personal use without the written permission of AOT.
:::

## Manual Update History:

<table>
<tbody>
<tr class="odd">
<td><span class="underline">Version</span></td>
<td><span class="underline">Author</span></td>
<td><span class="underline">Comments</span></td>
<td><span class="underline">Date</span></td>
</tr>
<tr class="even">
<td><span class="underline">1.0</span></td>
<td><span class="underline">Priya</span></td>
<td><span class="underline">1st Draft</span></td>
<td><span class="underline">July 1, 2019</span></td>
</tr>
<tr class="odd">
<td><span class="underline">1.1</span></td>
<td><span class="underline">Priya</span></td>
<td><span class="underline">♣ Scenario for deferment request added<br />
♣ Scenario for follow up work order added<br />
♣ Work Order History Expanded and included search and view completed work order logs (2.3.12)<br />
♣ Included creating a work order from posted work order (2.3.4.1)<br />
♣ Included Inventory (2.5)<br />
♣ Included relationship between Work Plan, Time Schedule and Work Order<br />
♣ Included graphical representation of maintenance work flows.<br />
♣ Updated the entire manual with the latest screenshots.<br />
♣ Scenario for reporting a WO out of turn included for both calendar and counter based jobs. </span></td>
<td><span class="underline">July 19, 2019</span></td>
</tr>
<tr class="even">
<td><span class="underline">1.2</span></td>
<td><span class="underline">Sagarika</span></td>
<td><p><span class="underline">♣ Included navigation notes for component address (1.1), Mounting Position (1.2), Technical Component (1.3), EIC (1.4), Time Schedule (1.5)<br />
♣ Scenario for filtering of Critical and CSM components in EIC have been included (1.4)<br />
♣ Updated screen shots in few sections</span></p>
<p><span class="underline">♣ Structural diagram for the relation between work plan, safety notice, time schedule and Work order has been modified in Time schedule section 1.5</span></p>
<p><span class="underline">♣ Modifications in flow chart diagrams (Planned WO Flow / Non-Periodic WO Flow)<br />
♣ Item consumption methodology in report Work order wizard has been included.</span></p>
<p><span class="underline">♣ Included Viewing of Item ledger entries in Inventory (2.5.4)</span></p></td>
<td><span class="underline">21/Oct/2019</span></td>
</tr>
<tr class="odd">
<td><span class="underline">1.3</span></td>
<td><span class="underline">Priya</span></td>
<td><span class="underline">♣ Removed Cue Setup and Role centre:  default tiles by role and moved it to Config manual</span></td>
<td></td>
</tr>
<tr class="even">
<td><span class="underline">1.4</span></td>
<td><span class="underline">Sagarika</span></td>
<td><p><span class="underline">♣Updated deferment request section, included formula for deviation %</span></p>
<p><span class="underline">♣Included description for number of overdue days in closed work order listing</span></p>
<p><span class="underline">♣Daily average formula updated in update counters for component section</span></p>
<p><span class="underline">♣Included a section for General search and filtering</span></p>
<p><span class="underline">♣Included filtering of Work order by Interval (Calendar) and by Interval (Time)</span></p>
<p><span class="underline">♣Changed screenshots in Work Order reporting wizard</span></p></td>
<td><span class="underline">28/Nov/2019</span></td>
</tr>
<tr class="odd">
<td><span class="underline">1.5</span></td>
<td><span class="underline">Vishnu</span></td>
<td><p><span class="underline">♣Added Associated Counter and Update Counter</span></p>
<p><span class="underline">♣Document Design and Formatting Modified</span></p></td>
<td><span class="underline">04/04/2020</span></td>
</tr>
<tr class="even">
<td><span class="underline">1.6</span></td>
<td><span class="underline">Vishnu</span></td>
<td><span class="underline">♣Cluster WO functionality added</span> <span class="underline"> </span></td>
<td><span class="underline">19/05/2020</span></td>
</tr>
</tbody>
</table>

---

:::note
The MMS module allows you to keep track of all the maintenance tasks
scheduled for the vessel. The main purpose of this system is to ensure
that all the maintenance activities for the ship is carried out at
adequate intervals and on time so that the vessel always remains in good
condition. MMS aligns the ship’s machinery structures in a
systematically arranged layout in the Equipment Information Centre via
Component Addresses and Mounting Positions. There are Time Schedules and
Object Monitoring Lines available to schedule recurring maintenance
tasks for these machineries. Furthermore, repair works carried out on
these machineries can be generated as work orders. There are several
other features available in the MMS, an overview of which has been
discussed in this manual.
:::

## Core Structural Elements of MMS Module:
    
### Component Address

The component address represents the vessel and its various systems.
This enables the user to view the technical components in different
logical groups. It is the hierarchical arrangement of all the technical
components and is created by arranging the components in a parental
order i.e. each component address will be mapped to the next highest
component address. The branches of this tree also include the mounting
positions which act as links between the component addresses and the
technical components.

:::tip
Click on the ‘bulb’ and enter ‘Component Address’ to view list of
component addresses
:::

### Mounting Position

Mounting Positions are the technical locations at which the technical
components are placed or mounted. These mounting positions act as a link
between the Technical component and the Component Address.

:::tip
Click on the ‘bulb’ and enter the ‘Mounting Position’ to view listing of
mounting positions
:::

### Technical Component

Technical components are the list of machineries that are available
on-board. Under Technical components these machineries are created. Each
technical component has a Technical Component Card where Manufacturer
details, date of installation, guarantee period, monitoring lines, etc.
are updated.

Whenever a new technical component is created, the assignment status of
the component is “Installation”. All the details for a component are
updated and after updating the details, the technical component is
mounted.

:::tip
Click on the ‘bulb’ and enter the ‘Technical Component’ to view listing
of technical components
:::

### Time Schedule [TS]

Time schedule is a template for creating periodic work orders and the
interval for evaluating the work order that will depend on the technical
object connected to it. The time schedules can be used as templates for
Object Monitoring Lines, component addresses, mounting positions and
technical components.

The time schedule utilizes **Object Monitoring Lines<sup>1</sup>** for
generating work order. Also, the work plans (instructions, notices,
checklists) can be attached to the time schedule that will be available
in the work order.

:::tip
Click on the ‘bulb’ and enter ‘Time Schedules’ to view the list of time
schedules
:::

### Object Monitoring Lines [OML]
OMLs are part of all structural elements such as component addresses, mounting positions and technical components. They link TS to Components. OMLs monitors and captures the paramenters and values respectively set on the line. They are used to trigger a WO based on any parameter of monitoring like Date, Counters, threshold values and condition. Once the condition set is satisfied a WO is created with the Time Schedule linked to the OML.

:::tip
OMLs for each component can be seen inside the Component Card Page.
:::

**RELATION BETWEEN OML, TIME SCHEDULE & WORK PLAN**

![Relationship between OML - TS and WorkPlan](/user/image7.png) 



## User Interface Elements of MMS module:

### Role Center

When logged into the application, the user is guided to the role center
which displays all the records of the selected ship.

The top of the screen displays the ship’s name. All the master data is
stored in the adjacent tabs and is readily available for display as and
when required. The role center is further split into Actions, Activities
and Insights.

**Actions** is the section from where several tasks such as updating
counters, creating non-periodic work orders, creating a work order
request and Create Item Journal Entry can be accomplished. Click on the
task to navigate to the screen

**Activities** on the other hand is a tile-view or stack arrangement
which consolidates overdue, current and future activities in maintenance
along with the approvals and process requests. The stack also serves as
links to the corresponding lists. Actions include tasks such as Due work
orders and services next week, Work order requests waiting for approval,
reported work orders waiting to be closed, follow up work order created,
work order with pending deferment approvals, etc.

![](/user/image9.png)

**Insights** is the statistical display of data in the form of charts
and graphs. These reports are generated by consolidating the data
updated in the application and can be configured as and when required
with alterations in the Power BI Reports. ![](/user/image10.png)

### List View Pages

List View Pages are screens which have record information displayed in each line. A good example of the list page is a WO List page. As shown below:
![](/user/list-page.png)
List pages have most of the quick actions available readily from the menu bar. In addition to this specific detail or links related to each record can be viewd in the factbox available towards the right.
![](/user/factbox.png)

:::tip
**Factbox** is an extension for any list/card page to show information relavant to a record. It can be shown/hidden by toggling the factbox icon <img src="/user/factbox-icon.png" width="20" height="20"/> in the menu bar. Factbox is availabe in both List as well as in card pages.
:::

### Card View Pages

Card View Page is the screen which is shown when any record is opened. Card pages have extended information available on the selected record. For example if a Card view of any Work Order is opened a user can see the Work Instructions, Safey Notices and much more. This enables the user to have all requred information in the same screen displayed elegently. If there are information that is not relevent the tab title is to be clicked to collapse the information.
![](/user/cardpage.png)

### Equipment Information Structure

Equipment Information Centre is the tree structure of a ship’s technical
objects that arranges the parent and child components in a hierarchical
order. Upon opening any structure from the component address screen, the
link navigates the user to the equipment information structure page.
![](/user/image3.jpg)

Below Image depicts how the component structure looks like when all
Technical Objects - Component Address, Mounting Position and Technical
Components are linked together.
![](/user/image4.png)


**To View:**
Click on Components > Equipment Structure in the menu bar >> Click on the ‘Code’ (eg: LPG / LNG)in Equipment structure screen to view Equipment tree structure.


:::tip
**To Search:**
A Search bar is readily available below the menubar.
:::

![](/user/eic.png)

To view critical & CSM components -

Search for any component in the search box to view components and click on ‘Critical’ or ‘Class’ checkbox

![](/user/image6.png)

:::note
Multiple tree structures are possible when different Component
Address Groups are setup.
:::