---
id: counters
title: Counters
sidebar_label: Counters
---

Counters are the running hour-based Object Monitoring Lines i.e. all
technical components with running hours will be marked with a counter
base object monitoring line. The main components or machineries with
running hour counter will be displayed in the Update counter screen. The
components whose counter depends on this main component is not
displayed. These when updated, generate work orders of those components
based on the counter selected.

## Updating Counters for Component

For updating the counters, follow as below: -

1.  Click on *Update Counters* button.

![](/mms/user/image109.png)

If the user opts to navigate into counters list screen from the cue in
the Role Centre landing Page, ![](/mms/user/image110.png)then user
must enable the “Edit List” to update the counter readings.

![](/mms/user/image111.png)

2.  Update *Reading Date* and *Actual Value*

![](/mms/user/image112.png)

3.  Go to *Process* and click on *Report Counter Readings*

![](/mms/user/image113.png)

4.  Click on *Yes.* Counters updated.

![](/mms/user/image114.png)

**Note:**

The following validations for entry of counter value applies:

  - The Actual value entered cannot be greater than 25hrs per day

  - Reading date cannot be less than previous Reading Date

  - Counter value cannot be less than the previous Counter Value

Daily average is calculated with the following formula:

> Daily Avg Hrs = <span class="underline">Total Value \[Reported\] -
> Value at the time of component bound</span>  
> No. of days
> 
> Where No. of days = Component Bound Date to Reading Date

## Viewing Counter Update History

The user can always check the history logs of each counter as and when
they were updated in the application.

For viewing the history, follow as below: -

1.  From the Role Centre, Click on *Update Counters* button.

![](/mms/user/image109.png)

2.  Select the Counter for which history is to be checked.

3.  Go to *Process\>\>Counter Update History*

![](/mms/user/image115.png)

4.  All last updated logs will be listed.

![](/mms/user/image116.png)

## Associated Counters 

### Mapping of Associated Counters

The admin has the provision to set up counters for sub-components which
can be linked to the main component counter to inherit the increments.

  - As shown below, assign the Parent Component while mounting a
    Sub-Component.

![](/mms/user/image117.png)

  - Now initiate an OML with the Template Code of Hours (SL), and Assign
    the main component and link it to the Line Number of the main
    component from which the values for sub component should be
    incremented.

![](/mms/user/image118.png)

![](/mms/user/image119.png)

  - After the above OML has been initiated, proceed with creating OML
    linking with TS for the sub-component. By doing this we have OMLs
    completely independent of main counter values. subcomponents can
    have their own Service counters(which we set up above).

![](/mms/user/image120.png)

  - Make sure to link to the sub-component Line No. Initiate the counter
    as required. Set the Interval for the generation of
    WO.![](/mms/user/image121.png)

![](/mms/user/image121.png)

  - On setting up the OML and activating the OML in the OML lines you
    find 2 entries for the Sub-Component which we had created.

![](/mms/user/image122.png)

  - We can see the changes have been reflected in the Update Counter
    Screen. From now on whenever there is an increment in counter value
    recorded for the main component we can see those increments being
    passed down to the Sub-Components as well.

![](/mms/user/image123.png)

![](/mms/user/image124.png)

*Note:*

  - The main component must have an Object Monitoring Line of type
    Counter, where the ‘Service Life’ is indicated as Yes.

  - Sub-component will have its own Object Monitoring Line of type
    Counter, and ‘Service Life’ indicated as Yes. The user will not be
    able to update the counter of a sub-component that is mapped to a
    main component as the counter will be dependent on the main
    components counter. 

  - Total Value of the Associated Counter = Counter Value at the time of
    Bound + Number of hours the Main counter has run after bound

### 5.3.2 Viewing of associated Counters

1.  Click on update counter screen from the role centre

> ![](/mms/user/image125.png)

2.  In the update counter screen, all the main components with
    subcomponents linked to it will be in bold text.

![](/mms/user/image126.png)

3.  By clicking on the main component with the sub-component, then click
    on “Process”

4.  Then click on “View Associate Counters”

![](/mms/user/image127.png)

Note: The counter of the sub-component is in view mode only.

### 5.3.3 Reset Counters 

![](/mms/user/image128.png)

  - In the update counter screen the user (CE Only) has an option to
    reset the Actual Counter Value. User can see the list of all main
    components, the counter values are displayed in two column;
    “Actual value” and “Total value”. When the user will select the
    component that needs to be reset, the actual value of the component
    will change to zero however the total value will remain unchanged
    and have no impact

![](/mms/user/image129.png)

User can either reset the value to 0 or to any counter reading that was
observed at the counter. Click on OK to reflect the changes.

  - Note: The reset of the actual value of the main component will have
    no effect on its sub-component and its associated counters. Once the
    counter is restarted, the date & value when the reset is done will
    be manually provided by the user to complete the process.All closed work orders are listed under *Work Orders\>\>History tab.*



