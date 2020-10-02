---
id: rnote-sp2
title: Release Notes - Sprint 2
sidebar_label: Sprint 2
---

:::note

- *Date of Release notes v2.1: 06/Apr/2020*

- *Date of Release notes v2.0: 06/Mar/2020*

:::

## Environment Details

**Environment Name:** *UAT*

**Environment URL:**
[<span class="underline">https://uatmms.shippalmbw.com/BC130/</span>](https://uatmms.shippalmbw.com/BC130/)

**Companies:** *BW Orinoco UPDATE 03/19/2020*

## Release Features/Enhancements 

### Features Developed:

The following table lists all the items that were developed in Sprint 2

|                                                                                                                             |                |                                                                                                                    |        |
| --------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------ | ------ |
| ID                                                                                                                          | Work Item Type | Title                                                                                                              | State  |
| [<span class="underline">965</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/965)   | User Story     | Work order Reporting Wizard : WO Feedback can be made mandatory ( Setup)                                           | Closed |
| [<span class="underline">2657</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/2657) | User Story     | Work order Card : Hide fact box 'Work order facts'                                                                 | Closed |
| [<span class="underline">2916</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/2916) | User Story     | Work plan no. to be populated in the Report Work order wizard                                                      | Closed |
| [<span class="underline">2933</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/2933) | User Story     | OML - Rename "Reminded date before" to Reminder days and "Reminded counter value before" to Reminder counter value | Closed |
| [<span class="underline">2970</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/2970) | User Story     | Due Status Calculation to be updated based on the attached document                                                | Closed |
| [<span class="underline">2985</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/2985) | User Story     | OML card : Reminder Counter value / Reminder days to be displayed in the work order card                           | Closed |
| [<span class="underline">3735</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/3735) | User Story     | Include Reported by , Reported Name columns in History screen                                                      | Closed |
| [<span class="underline">3737</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/3737) | User Story     | Work order allows blank consumption when consumption toggle is on                                                  | Closed |
| [<span class="underline">3739</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/3739) | User Story     | Prompting user to update counter before reporting counter based work order                                         | Closed |
| [<span class="underline">3742</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/3742) | User Story     | Field name to be modified - 'no.of Entries ' to be modified as 'Consumption')                                      | Closed |

### Bug Fixes: 

The following table lists all the bug fixes made in Sprint 2

|                                                                                                                             |                |                                                                                                                                                  |        |
| --------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| ID                                                                                                                          | Work Item Type | Title                                                                                                                                            | State  |
| [<span class="underline">2923</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/2923) | Bug            | Deferment Approval \> In Deferment approval screen, deviation % is not calculated when we change the deferment to value to new value             | Closed |
| [<span class="underline">2931</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/2931) | Bug            | Non-Periodic WO - Due status is displayed as ' Overdue' by default, even there is no due date                                                    | Closed |
| [<span class="underline">2967</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/2967) | Bug            | Reporting Wizard -\> Not able to report the work order, if user enables and disable the 'Periodic Out of turn' toggle button and click on Submit | Closed |
| [<span class="underline">3767</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/3767) | Bug            | Report Wizard - Back button is not working in the work order reporting wizard                                                                    | Closed |
| [<span class="underline">3769</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/3769) | Bug            | Work order Reporting : Finished Counter value must be less than or equal to Current Counter value                                                | Closed |
| [<span class="underline">4179</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/4179) | Bug            | Report Wizard \> System is allowing to proceed with blank reason for the overdue selection "Others"                                              | Closed |
| [<span class="underline">4181</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/4181) | Bug            | Update counter \> System is not allowing to report the counter readings                                                                          | Closed |
| [<span class="underline">4456</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/4456) | Bug            | Due counter is displayed in the "Deferment to counter value" field.​                                                                             | Closed |
| [<span class="underline">2698</span>](https://dev.azure.com/AlphaOriTechnology/ShipPalm%20v3%20-%20BW/_workitems/edit/2698) | Bug            | Error message: 'Sorry this page has to be closed' for Periodic work orders                                                                       | Closed |

## Description Of Features Developed

### Features developed as part of the Core Sprint:

#### Feature 1: DevOps ID 965: WO Feedback Can Be Made Mandatory:

By enabling the feature “Mandatory of WO Done Feedback” in “MT Maritime
Setup” we can make WO done feedback mandatory system-wide. Under such a
circumstance the user won't be able to proceed to the next screen
without putting feedback.

#### Feature 2: DevOps ID: 2970: Deferment on counter-based work order:

- Due counter is displayed in the "Deferment to counter value" field.

- Below validations added to "Deferment to counter value" field
    
    - New value cannot be less than current counter
    
    - New value cannot be less than due counter

<!-- end list -->

- "New Due Date" is calculating based on the below formula
    
    - Due Date + (Proposed Counter Value - Due Counter Value/Daily
        Avg)

- Deviation percentage for counter-based jobs changed to:
    
    - Proposed Counter Value - Due Counter Value/Interval\*100

- Disabled "New Due Date" for counter-based jobs and will update
    whenever the user changes the "Deferment to counter value".

#### Feature 3: DevOps ID 3737: Reporting of work orders when the consumption toggle is ON

- Case 1: Item, Resource and Ext service consumption not entered.

<!-- end list -->

- The system will show the message - "Consumption values not entered.
    Please update." Without filling the mandatory fields, the user won’t
    be able to report the work order.

<!-- end list -->

- Case 2: If Resource and/or Ext service consumption is entered and
    Item consumption not entered.

<!-- end list -->

- The system will show the message - "Item Consumption values not
    entered. Do you want to proceed?". If selected “Ok” then the user
    can proceed to report the work order.

<!-- end list -->

- Case 3: If Item consumption entered, Resource and/or Ext service
    consumption not entered.

<!-- end list -->

- No message will be shown. The user can proceed and report the work
    order.

#### Feature 4: DevOps ID 3739: Reporting of counter-based work order

- The user will be prompted to update the counter as on date before
    reporting the work order.

#### Feature 5: Work Order screen changes: 

- Two new columns have been added to the work order history screen;
    “Reported by Name” & “Reported by Rank”. Note: For newly closed
    work orders this is populated. For closed work orders migrated from
    AMOS, this information is yet to be migrated.

- Work Order plan no. is introduced in report work order card

- “Reminder Days” & “Reminder Counter Value” added to the work order
    card

- the 'no. of Entries' has been modified as  'Consumption' in All Work
    orders & History fact box sections.
