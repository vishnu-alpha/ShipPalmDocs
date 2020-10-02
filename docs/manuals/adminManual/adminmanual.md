---
id: admin
title: Administrator Manual
sidebar_label: Admin Manual
---
<!-- JSX Code -->
export const Highlight = ({children, color}) => ( <span style={{
backgroundColor: color,
borderRadius: '6px',
color: '#141414',
padding: '0.2rem',
}}> {children} </span> );

:::important
**COPYRIGHT INFORMATION**

© 2019-20 Alpha Ori. All rights reserved.

Information in this document is subject to change without notice. The software described in this document is furnished under a license agreement or nondisclosure agreement. The software may be used or copied only in accordance with the terms of those agreements. No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form or any means electronic or mechanical, including photocopying and recording for any purpose other than the purchaser's personal use without the written permission of Alpha Ori.
:::

---


><p align="center"><Highlight color="#ebedf0">MAINTENANCE MANAGEMENT SYSTEM (MMS)</Highlight></p>
>
>The MMS module allows you to keep track of all the maintenance tasks scheduled for the vessel. The main purpose of this system is to ensure that all the maintenance activities for the ship is carried out at adequate intervals and on time so that the vessel always remains in good condition.
>
>MMS aligns the ship's machinery structures in a systematically arranged layout via Component Addresses and Mounting Positions. There are Time Schedules and Object Monitoring Lines available to schedule recurring maintenance tasks for these machineries. Furthermore, repair works carried out on these machineries can be generated as work orders. There are several other features available in the MMS, an overview of which has been discussed in this manual.


---

:::note

_When we say **MASTER DATA**, it involves creating machineries, categorizing them as Normal, Critical or CSM (Class Survey Machinery) components, setting up work plans, spares inventory and so on._

_Master data is created either based on machinery manuals, circulars issued by the manufacturers or relevant information shared by class or class approved authorities. The entries can either be created manually or by migrating the available data from other PMS software before the system goes live. During normal system operation, this data mostly remains unchanged and is changed only upon special requests made by the users upon approval by the shore technical team._
:::


## 1. Creating A New Project


Events such as Dry Docks can be created as separate projects and planned work orders for an event can be deferred up to the project.

For creating a new project follow as below: -

In the BLOB search, type *Projects* and select the item from the list

![](/help/admin/image9.png)

-   Click on *New* to create a new project.

![](/help/admin/image10.png)

-   Update *No., Description, Start Date, End date and Dry Dock
    details.*

## 2. Creating New Manufacturers

Manufacturers are the list of makers that will be linked against the technical components.

For adding a maker to the list follow as below: -

-   In the BLOB search, type *Manufacturers* and select the item from
    the list

![](/help/admin/image11.png)

-   Update the *Code* and *Manufacturer Name*

![](/help/admin/image12.png)

-   Manufacturer\'s Name is added. The screen gets auto-saved. Click on
    the back button to exit.

![](/help/admin/image13.png)

## 3. Creating Manufacturer Model

Model is the list of models that will be linked against the technical components.

For creating a manufacturer model follow as below: -

-   In the BLOB search, type *MT Manufacturer Model* and select the item from the list

![](/help/admin/image14.png)

-   Update *Code* & *Description*

![](/help/admin/image15.png)

-   The manufacturer model is added. The screen gets auto-saved. Click
    on the back button to exit.

![](/help/admin/image16.png)

## 4. Work Order Management Setup

WO management setup should be done for each ship before the application goes live. Once the setup is completed, only then the users will be able to perform tasks such as updating counters\' values, reporting work orders, create and report non-periodic work orders.

For setting up the Work Order Management Setup, follow as below: -

-   In the BLOB search, type *Work Order Management Setup* and select the item from the list

![](/help/admin/image17.png)

-   Updated *Exceeding Planned Cost Work Order* as *Posted Work Order:
    Invoices/ Planned*

-   Select *Drop File Type* as *BC-Link*

![](/help/admin/image18.png)

-   Under *Numbering*, select the *No. Series* to be followed for WO
    Requests, WO, Work Plans and Time Schedules.

![](/help/admin/image19.png)

-   Under *Electronic Signature*, enable "Dual Control", when this
    toggle is enabled, user can able to post the registered WO

![](/help/admin/image20.png)

-   Under *Time Recording*, select the No. Series to be followed for
    Time Recordings.

![](/help/admin/image21.png)

-   Under *Checklist,* select the No. Series to be followed for the
    Checklist.

![](/help/admin/image22.png)

-   Toggle the bar to active for uploading images against Technical
    Objects.

![](/help/admin/image23.png)

-   Go to *Actions\>\>Functions\>\>Change Work Order Status*

![](/help/admin/image24.png)

-   Update the Work Order Status that the work orders should follow
:::tip
*Marking a Status as Down gradable means the work order can be reverted to a previous status*
:::
![](/help/admin/image25.png)

-   The screen gets auto-saved. Click on the button to go back.

![](/help/admin/image26.png)}

-   *Work Order Management Setup* completed successfully.

## 5. Work Order Approval Setup


All kinds of approvals are to be set up under the work order approval
setup. The setup is required for accomplishing tasks like sending
deferment requests and approving them.

For setting up the approval setup follow as below: -

-   In the BLOB search, type *Work Order Approval Setup List* and select
    the item from the list

![](/help/admin/image27.png)

-   Click on *New* to open the Work Order Approval Setup Card

![](/help/admin/image28.png)

-   Update *Code* and *Description.*

-   Under *Critical Code,* select the type of work order the setup
    should be applicable.

-   Set the *Document Mandatory* to *active* for making the document
    upload mandatory while requesting deferment.

![](/help/admin/image29.png)

-   Under *Lines,* select the requester and approver.

![](/help/admin/image30.png)
:::note
*Multiple levels of approval can be set up.*
:::
![](/help/admin/image31.png)

-   Go to *Process* and click on *Activate* to set the workflow as
    active.

![](/help/admin/image32.png)

-   The approval setup is now active.

![](/help/admin/image33.png)

-   The screen gets auto-saved. Click on the button to close the screen.

![](/help/admin/image34.png)


## 6. Creating Number series

-   In the BLOB search, type *No. Series* and select the item from the
    list

> ![](/help/admin/image44.png)

-   Click on "New" and enter code and description

> ![](/help/admin/image45.png)

-   Enter Starting date, Starting No and Ending No for the Series
    specific to the description

e.g., for technical component, starting number series can be set as
TK00000001 and ending number series can be set as TK9999999, likewise,
the same process applies for time schedule, work order no, work order
requests, work plans, mounting position, component address, etc.,

-   Enable Default nos and manual nos checkbox

If Default nos are checked - Number series would be generated
automatically while creating a technical component, time-schedule, etc.,

If Manual nos is checked - It's possible to set number series manually

![](/help/admin/image46.png)

-   To configure the number series for WO Request, WO Nos, WO Feedback,
    Work Plan Nos, TS Nos:

Click on the 'bulb' to search and navigate to Work Order Management
Setup screen, and update the series under Numbering tab

-   To configure the number series for Component address number,
    Mounting position number and Technical Component number:

Click on the 'bulb' to search and navigate to technical facility
management setup screen, and update the series under Numbering tab

![](/help/admin/image47.png)

![](/help/admin/image48.png)

## 7. Work order posting setup
---

-   In the BLOB search, type *WO Posting Setup* and select the item from
    the list

-   Click on 'New' in Work Order posting column to create new work order
    posting group

![](/help/admin/image49.png)

NOTE: WO Posting setup is a one-time setup, it should be set when a new
vessel is been created in the application

## 8. Inventory posting setup
--

-   In the BLOB search, type *Inventory Posting Setup* and select the
    item from the list

-   Click on 'New' menu in Inventory posting setup screen, to create
    location code, Inv Posting group code, Inventory account etc.,

![](/help/admin/image50.png)

-   Click on 'New' in Location Code column to create new location codes

![](/help/admin/image51.png)

NOTE: Inventory Posting setup is a one-time setup, it should be set when
a new vessel is been created in the application

## 9. Component Address

The component address represents the vessel and its various systems.
This enables the user to view the technical components in different
logical groups. It is the hierarchical arrangement of all the technical
components and is created by arranging the components in a parental
order i.e. each component address will be mapped to the next highest
component address.

The branches of this tree also include the mounting positions which act
as links between the component addresses and the technical components.

### 9.1. Creating A Component Address

For creating a component address, follow as below: -

-   Go to *Component Address* and click on *New*

![](/help/admin/image56.png)

-   Updated *No., Description, Component Address From* and *Department
    Code.*

![](/help/admin/image57.png)

-   Drag and drop here any documents to be uploaded.

![](/help/admin/image58.png)

-   The screen gets auto saved. Component Address is created. Click on
    the icon to go back the listing screen.

![](/help/admin/image59.png)

### 9.2. Deleting A Component Address

For deleting a component address, follow as below: -

-   Go to *Component Address* listing screen.

![](/help/admin/image60.png)

-   Click on Search button and type in to search the component address.

![](/help/admin/image61.png)

-   Click on the delete icon to delete the component address.

![](/help/admin/image62.png)

-   Click on Yes.

![](/help/admin/image63.png)
:::warning
*A Component Address cannot be deleted if linked to any Technical Component*
:::
## 10. Mounting Position

Mounting Positions are the locations at which the technical components
are placed or mounted. These mounting positions act as a link between
the Technical component and the Component Address. A mounting position
can be assigned to several component addresses and can be linked to one
technical component.

When the status of a Technical Component is "Installation", a mounting
position is assigned to a Technical Component and Start History is
clicked to start recording the ledger entries and capture the service
life of the component. Upon starting the history of a component, the
component assignment changes to mounted. At a later stage, if required
the technical component can be mounted or unmounted from the Component
Listing screen at any point of time.

### 10.1 Creating A Mounting Position

For creating a mounting position follow as below: -

-   Go to *Mounting Positions* and click on *New*

![](/help/admin/image64.png)

-   Update *NO.,* and *Description.*

![](/help/admin/image65.png)

-   Drag and drop here any documents to be uploaded.

![](/help/admin/image66.png)

-   The screen gets auto saved. Mounting Position is created. Click on
    the icon to go back the listing screen.

![](/help/admin/image67.png)

### 10.2 Deleting A Mounting Position

For deleting a mounting position, follow as below: -

-   Go to *Mounting Position* listing screen.

![](/help/admin/image68.png)

-   Click on Search button and type in to search the mounting position.

![](/help/admin/image69.png)

-   Click on the delete icon to delete the component address.

![](/help/admin/image70.png)

-   Click on Yes.

![](/help/admin/image71.png)
:::warning
*A Mounting Position cannot be deleted if linked to any Component Address or Technical Component*
:::
## 11. Technical Component

Technical components are the list of machineries that are available
on-board a ship. Under Technical components these machineries are
created. Each technical component has a Technical Component Card where
Manufacturer details, date of installation, guarantee period, monitoring
lines, etc. are updated.

Whenever a new technical component is created, the assignment status of
the component is "Installation". All the details for a component are
updated and after updating the details, the technical component is
mounted.

### 11.1. Creating A Technical Component

For creating a technical component, follow as below: -

-   Go to *Technical Component* and click on *New.*

![](/help/admin/image72.png)

-   Select *No.,* and *Mounting Position* from the list

![](/help/admin/image73.png)

:::importnat
*For creating a Sub-Component, do not mark Mounting Position, instead select the Parent Component.*
:::

![](/help/admin/image74.png)

-   Update *Description, Manufacturer Name, Model, Component Group* and
    *Type.*

![](/help/admin/image75.png)

-   Mark the components as *Critical* or *Class Machinery* if required.

![](/help/admin/image76.png)

-   Drag and drop here any documents to be uploaded.

![](/help/admin/image77.png)

-   The screen gets auto saved. Technical Component is created. Click on
    the icon to go back the listing screen.

![](/help/admin/image78.png)

### 11.2 Deleting A Technical Component

For deleting a technical component, follow as below: -

-   Go to *Technical Component* listing screen.

![](/help/admin/image79.png)

-   Click on Search button and type in to search the mounting position.

![](/help/admin/image80.png)

-   Click on the delete icon to delete the component address.

![](/help/admin/image81.png)

-   Click on Yes.

![](/help/admin/image82.png)
:::warning
*A Technical Component cannot be deleted if it is mounted.*
:::
## 12. Equipment Information Structure

Equipment Information Center is the tree structure of a ship's technical objects and arranges the parent and child components in a hierarchical order.

:::tip
You can find the <Highlight color="#E5E5E5">_'Equipment Structure'_ </Highlight>  under the <Highlight color="#E5E5E5">_Components_ </Highlight>  in the Navigation Bar
:::

### 12.1 Linking Component Address To Technical Component

Technical components are linked to a Component Address via Mounting Positions. Since mounting position is already linked to a technical component while creating the technical component, only the mounting position needs to be linked to the component address in order to setup the Technical objects together in a tree structure.

For linking mounting position to component address follow as below:

-   Go to *Component Address* listing screen.

![](/help/admin/image83.png)

-   Click on Search button and type in to search the component address.

![](/help/admin/image61.png)

-   Click on the *Component Address* and select *Mounting Positions*
    Under *Process*

![](/help/admin/image84.png)

-   Select the *Mounting Position* from the list and click on *OK.*

![](/help/admin/image85.png)

-   The screen gets auto saved. Mounting Position linked to Component
    Address. Click on the icon to go back the listing screen.

![](/help/admin/image86.png)

Upon opening any structure from the component address screen, the link
navigates to the equipment information structure page. Below is how the
component structure looks like when all Technical Objects - Component
Address, Mounting Position and Technical Components are linked together.

![](/help/admin/image87.jpg)
![](/help/admin/image88.png)

## 13. Work Plans

Work plans include creating safety instructions and work notices which are used further in creating the Time schedules. The advantage of creating work plans is that whenever a change is to be carried out in Safety instructions or work notices for multiple time schedules, the task can be accomplished by making a change in the work plan instead of making changes in multiple time schedules.

### 13.1 Creating A Work Plan

For creating a work plan follow as below: -

-   Go to *Work Plans* listing screen and click on *New* to create a new
    work plan.

![](/help/admin/image89.png)

-   Update *No., Description, Type of Activity, Classification, Work
    Order Category* and *Work Order Duration.*

![](/help/admin/image90.png)

-   Under *Lines* update *items, external services, resources* to be
    used while executing the work plan.

![](/help/admin/image91.png)

-   Go to *Process\>\>Text*

![](/help/admin/image92.png)

-   Select the *Work Notices* and *Instructions* from the predefined
    list.

![](/help/admin/image93.png)

![](/help/admin/image94.png)
:::note
*Click on the New button in case the required Work Notice or Instruction is not available in the predefined list.*
:::
-   Click on the *delete* button for deleting any Work notice or
    Instruction from the list.

![](/help/admin/image95.png)

-   The screen gets auto saved. Work Plan is created. Click on the icon
    to go back the listing screen.

![](/help/admin/image96.png)

### 13.2 Deleting A Work Plan

For deleting a work plan, follow as below: -

-   Go to *Work Plan* listing screen.

-   Click on Search button and type in to search the work plan.

![](/help/admin/image97.png)

-   Click on the delete icon to delete the work plan.

![](/help/admin/image98.png)

-   Click on Yes.

![](/help/admin/image99.png)
:::warning
*A Work Plan cannot be deleted if it is linked to any time schedule.*
:::
## 14. Time Schedule

Time schedule is a template for creating periodic work orders and the interval for evaluating the work order will depend on the technical object connected to it. Every time a periodic work order is finished, the time schedule generates the new work order again based on the
interval set.

Furthermore, the time schedules can be used as templates for Object Monitoring Lines for component addresses, mounting positions and technical components. The time schedule utilizes **Object Monitoring Lines** for generating work order. Also, the work plans (instructions, notices, checklists) can be attached to the time schedule that will be available in the work order.

**Object monitoring lines** connect technical objects such as component addresses, mounting positions and technical components to Time Schedules (Intervals) which is used as a template to create work orders. In addition to monitoring dates, object monitoring lines can also be used to monitor counters, threshold values and wear and tear.

### 14.1 Creating a Time Schedule

For creating a time schedule, follow as below: -

-   Go to *Time Schedule* listing screen and click on *New*

![](/help/admin/image100.png)

-   Update *No., Work Order Category, Title, Type, Person in Charge,
    Resp. Department.*

![](/help/admin/image101.png)

-   Under *Activity,* select the *Work Plans*

![](/help/admin/image102.png)

-   Switch off the *Include Header* option and click on *Ok*.

![](/help/admin/image103.png)

*NOTE: If Include Header option is kept on, the time schedule no. gets
replaced with Work Plan No. in the Time Schedule.*

-   Under *Lines,* all lines added in the Work Plan get included. If
    more information needs to be added, same can be added for the Time
    Schedule.

![](/help/admin/image104.png)

-   If the *Type* for the *Time Schedule* is set to *Time Schedule*,
    update the interval for the time schedule under *Interval*

![](/help/admin/image105.png)
:::important
*Interval will not be editable if the Type is selected as Object Monitoring Template. In this case, the Interval to be set up while setting up the OML for the Technical Component.*
:::
-   The screen gets auto saved. Technical Component is created. Click on
    the icon to go back the listing screen.

![](/help/admin/image106.png)

### 14.2 Deleting A Time Schedule

For deleting a Time Schedule, follow as below: -

-   Go to *Time Schedule* listing screen.

-   Click on Search button and type in to search the work plan.

![](/help/admin/image107.png)

-   Click on the delete icon to delete the work plan.

![](/help/admin/image98.png)

-   Click on Yes.

![](/help/admin/image99.png)

:::caution
*A Time Schedule cannot be deleted if it is linked to any Technical Object.*
:::

:::note
**RELATION BETWEEN WORK PLAN, SAFETY NOTICE, TIME SCHEDULE & WORK ORDER**

![](/help/admin/image108.png)
:::

## 15. Periodic Work Orders

Periodic work orders are scheduled tasks which should be completed at
regular intervals to maintain the machineries health. In order to create
these work orders, time schedules are set up against the Technical
Objects and Automatic Work Order Creation is set to On. These work
orders shall continue to re-generate at scheduled intervals subject to
closure based on the interval assigned.

### 15.1 Setting Up Calendar Based Periodic Work Orders

For linking time schedule to a technical component, follow as below: -

-   Go to *Technical Component* listing screen and search the component.

![](/help/admin/image109.png)

-   Select the component, go to *Process\>\>Monitoring*

![](/help/admin/image110.png)

-   Select the *Time Schedule No.*

![](/help/admin/image111.png)

-   If required, click on the *delete* button for removing the time
    schedule from the list.

![](/help/admin/image112.png)

-   Go to *Process\>\>Card* to open Object Monitoring Card

![](/help/admin/image113.png)

-   Update *Manufacturer interval, Start Date-time and reminder days*.

![](/help/admin/image114.png)

-   Under General Tab, update *Automatic Generation of Work Order* to
    Yes and select the status as *Activated.*

![](/help/admin/image115.png)

-   Click on Yes

![](/help/admin/image116.png)

-   The screen gets auto saved. Calendar Based Work Orders will not
    generate. Click on the icon to go back the listing screen.

![](/help/admin/image117.png)

### 15.2 Setting Up Counter Based Periodic Work Orders

For linking time schedule to a technical component, follow as below: -

-   Go to *Technical Component* listing screen and search the component.

![](/help/admin/image109.png)

-   Select the component, go to *Process\>\>Monitoring*

![](/help/admin/image110.png)

-   Select the *Template Code* and *Time Schedule No.*

![](/help/admin/image118.png)

-   If required, click on the *delete* button for removing the time
    schedule from the list.

![](/help/admin/image112.png)

-   Go to *Process\>\>Card* to open Object Monitoring Card

![](/help/admin/image119.png)

-   Under *Counter* section, update *Ultimate interval, manufacturer
    interval* and *reminded counter value*.

![](/help/admin/image120.png)
:::note
*Inherit Value should be used only for the sub-components whose intervals should be decided by their parent component.*
:::
-   Under General Tab, update *Automatic Generation of Work Order* to
    Yes and select the status as *Activated.*

![](/help/admin/image115.png)

-   The screen gets auto saved. Calendar Based Work Orders will not
    generate. Click on the icon to go back the listing screen.

![](/help/admin/image117.png)
:::important
*Counter based work orders shall start generating upon starting the history of the technical component.*
:::
### 15.3 Setting Up of Cluster Work Orders

#### 15.3.1. Creating a Cluster Time Schedule

-   In the Time Schedule List page, click on 'New' to create a new time
    schedule.

-   Fill all the required Information like Title, Responsible Rank,
    Department, WO Category Code. The No. is an auto generated field.

-   Now enable the Cluster Flag to get the cluster related options:
    Cluster Starting Date, Cluster Interval, WO Generation Method.

    -   WO Generation can be Full / Partial

    -   Full option is chosen when the user needs to complete all the
        tasks in the WO inorder to 'Finish' a work order. This also
        means that only after finished all tasks a new work order is
        created.

    -   Partial option is chosen when the user needs to complete few of
        the tasks and can keep the WO open in respective state. This
        also measns that a new Work Order is created with finished task.
        In future as and when the remaining tasks are closed the tasks
        gets to the open WO. (provided the new WO is not set to status
        "in progress")

![](/help/admin/image121.png)

-   In addition to the above, Work plan is also required.

![](/help/admin/image122.png)

-   Work Order Posting Group also needs to be selected.

![](/help/admin/image123.png)

#### 15.3.2. Linking / Creating OML to the Cluster Time Schedule

-   Admin can link existing OML or create a new OML in the cluster Time
    Schedule.

![](/help/admin/image124.png)

While linking OML from TS Card. The steps are : Navigate \> Time
Schedule \> Object Monitoring Lines. This is the preferred method, its
easier to define the requirements. Below you can see the all the
required fields marded in red:

![](/help/admin/image125.png)

Admin can also attach a Cluster Time Time Schedule going from a
component card/list page. In order to achieve this the admin needs to
navigate to the object monitoring lines list or card page and create a
new entry the result of adding a new entry would look like below:

![](/help/admin/image126.png)

#### 15.3.3. Enabling Auto Creation of WO

By default the OML created will be in inactive mode. Care should be
taken to enable the two setting to automatically create WO. So as shown
in the picture below Automatic Creation to be on and Status to be
Activated.

![](/help/admin/image127.png)

### 15.4 De-activating any Periodic Work Orders

**METHOD 1:**

For de-activating the periodic work orders, follow as below:

-   Go to *Technical Component* listing screen and search the component.

![](/help/admin/image109.png)

-   Select the component, go to *Process\>\>Monitoring*

![](/help/admin/image110.png)

-   Select the *Template Code* and *Time Schedule No.*

![](/help/admin/image118.png)

-   Go to *Process\>\>Card* to open Object Monitoring Card

![](/help/admin/image119.png)

-   Under General Tab, update *Automatic Generation of Work Order* to No
    and select the status as *De*-*Activated.*

![](/help/admin/image128.png)

-   The screen gets auto saved. Calendar Based Work Orders will not
    generate. Click on the icon to go back the listing screen.

![](/help/admin/image117.png)

**METHOD 2:**

OML and Time Schedules can be set to Blocked Mode
![](/help/admin/image129.png)

![](/help/admin/image130.png)

By doing so the Block function takes over the current active status.
Thereby no WO is generated. If individual OMLs are blocked in a cluster,
only those entries are skiped during the generation of next WO. If the
Entire Cluster Time Schedule is set to blocked, no more new Cluster WO
will be generated.

## 16. Counters Configuration


### 16.1. Setting up counters

For running hour machineries, the counters need to be created and set. Once the setup is complete, the counters shall list down on the Counter Update screen for regular updating. All counter based work order linked
to the Technical component shall then generate basis the value updated against these counters.

Follow as below to set up the counters in the counter update screen.

-   Go to *Technical Component* listing screen and search the component.

![](/help/admin/image109.png)

-   Under *Process,* click on *Start History* button.

![](/help/admin/image131.png)

-   Click on *Yes*

![](/help/admin/image132.png)
:::important
*Upon starting the history of the technical component, all counter based time schedules shall start generating the periodic work orders.*
:::
:::note
*The counter for the technical component shall get listed in the Counter Update screen and will be ready for updating.*
:::
### 16.2. Setting Up of Counters for Main Component

In the technical component card. Under the Monitoring lines create a new OML card with the following configuration to start capturing counter values from the 'Update Counters' Screen.

-   'Set Next Action at' to be put for the calculation to be initiated
    and to forecast the next due date.

-   Template Code to set to SL as this takes the Service Life Counter
    value of he component.

-   Optionally Description can be put as Hours in order for the user to
    identify its meant for capturing hours from Update Counter Screen.

-   In the Counters section fill the frequency at which the counters
    needs to be updated, beyond the set value the counter will be shown
    in red (overdue) at the counter update screen.

![](/help/admin/image133.png)
:::note
Since this is the OML setup to capture counter values for the main
component we do not specify anything in the Inherit section of Counters.
:::
![](/help/admin/image134.png)

#### 16.2.1 Linking any OML of Main Component to the Counter SL OML to inherit counter values and increments

While creating a new Counter based OML apply the following setting for
it to inherit counter updates from the main component:

-   Select the Template code as 10000001. (which means this not an SL
    OML and it is supposedly going to inherit values from another SL
    OML)

![](/help/admin/image135.png)

-   In the Counter section insert the Interval (in hours), Reminder (in
    hours). Select the Technical component from which it should inherit
    the counter updates from.

![](/help/admin/image136.png)

-   In the Inherit Increment Line No. Select the Hours SL OML which we
    created in section
    [21.2](#212-setting-up-of-counters-for-main-component), this will link
    and enable the counter updates to be passed on to the current OML.

![](/help/admin/image137.png)

### 16.3. Setting Up of Associated Counters for Sub-Components

To set up the SL OML for the sub-component we will be following the same way as mentioned in [21.2](#212-setting-up-of-counters-for-main-component) for the General Tab.

However, in the Counter tab, we would be inheriting the Increment
Counter Updates from the main-component. To achieve this select the
technical component from which we are going to inherit counter update.
Secondly select the SL OML of the Technical Component.

![](/help/admin/image138.png)

#### 16.3.1 Linking any OML of Sub Component to the Associated Counter SL OML to inherit counter values and increments

Associated counters can be set up for sub-components which are linked to
the main component with physical counters.

While creating a new Counter based OML apply the following setting for
it to inherit counter updates from the main component:

-   Select the Template code as 10000001. (which means this not an SL
    OML and it is supposedly going to inherit values from another SL
    OML)

![](/help/admin/image135.png)

-   In the Counter section, insert the Interval (in hours), Reminder (in
    hours). Select the Technical component , in our case this will be
    the Sub-Component which we set up in
    [16.3](#163-setting-up-of-associated-counters-for-sub-components) from
    which it should inherit the counter updates.

![](/help/admin/image136.png)

-   In the Inherit Increment Line No. Select the Hours SL OML which we
    created in section
    [16.3](#163-setting-up-of-associated-counters-for-sub-components), this
    will link and enable the counter updates to be passed on to the
    current OML.

![](/help/admin/image137.png)

Once the above steps are completed, we can check the Update Counter
Screen. There you will find the main component in bold font and when
opening the associated counters you will find all the linked
sub-components listed here.

![](/help/admin/image139.png)

## 17. Setting Up Technical Spreadsheet

Technical spreadsheets are the performance monitoring templates to monitor trends and spikes in performance of the machineries. The spreadsheets are linked against the technical components.

Technical Spreadsheets are setup in 3 steps: -

a)  Creating the Technical Spreadsheet

b)  Linking the spreadsheet to a component group

c)  Linking the technical group to the technical components.

### 17.1 Creating a Technical Spreadsheet

-   In the BLOB search, type *Technical Spreadsheets* and select the
    item from the list.

![](/help/admin/image140.png)

-   Click on *New* to create a new entry

![](/help/admin/image141.png)

-   Select the *Serial no.* and click on *Ok*.

![](/help/admin/image142.png)

-   Under the *File Name* upload the template document.

![](/help/admin/image143.png)

-   Go to *Process\>\>Document Cell Mapping*

![](/help/admin/image144.png)

-   Click on the *Edit* button and update *Direction, Table No.,
    Description, Key* and *Cell Name.*

![](/help/admin/image145.png)

### 17.2 Linking A Technical Spreadsheet To A Component Group

For linking a technical spreadsheet to a technical component, follow as
below: -

-   In the BLOB search, type *Component Group* and select the item from
    the list.

![](/help/admin/image146.png)

-   Select the *Template No* against the *Component Group*

![](/help/admin/image147.png)

### 17.3 Linking The Component Group To The technical Component

For linking the component group to the technical component, follow as
below:-

-   Go to *Technical Component* listing screen.

![](/help/admin/image148.png)

-   Search and open the technical component. In the technical component
    card, update the *Component group*.

![](/help/admin/image149.png)

-   Go to *Actions\>\>Create New Sheet*

![](/help/admin/image150.png)

-   Close and re-open the Technical Component. Technical Spreadsheet is
    linked to the technical component.

![](/help/admin/image151.png)
