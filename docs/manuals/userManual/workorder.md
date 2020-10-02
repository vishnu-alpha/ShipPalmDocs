---
id: wo
title: Work Order
sidebar_label: Work Order
---
<!-- JSX Code -->
export const Highlight = ({children, color}) => ( <span style={{
backgroundColor: color,
borderRadius: '6px',
color: '#141414',
padding: '0.2rem',
}}> {children} </span> );

The *work orders* are the maintenance tasks available in the system
specific to a particular technical component. Work order includes
information on the Job description, the planned spares, resources and
services required. It is possible to track the progress of the work
based on changes to the work order status.

Several types of work orders can be created in the application.
<Highlight color="#ebedf0">Periodic work orders</Highlight>are created in the
application by the admin team before the application is installed
onboard. These work orders shall continue to re-generate at scheduled
intervals subject to closure based on the interval assigned.

The users will also have the provision to create
<Highlight color="#ebedf0">Non-Periodic work orders</Highlight>such as repair
works or other tasks which are not part of the regular maintenance
routine. These work orders are single time tasks which will be created
and completed once the task is completed. These work orders do not
reschedule like the time-based work order.

Also, **follow up work orders** can be created against the closed work
orders whenever a work order is Closed but a follow up or pending task
or consumption needs to be captured against it. These work orders also
do not reschedule once they are completed and closed.

The Work Order tab in the Role Center is the listing screen of all the
work orders mentioned above. The Work Order tab is sub categorized into
following: -

**Periodic Work Orders** - Lists down and displays all the recurring
work orders which are created for the components available for a ship
based on the interval (date/ counter).

**Class Work Orders** - While creating periodic work orders, the admin
team has the provision of marking several work orders of class machinery
as class work orders. The screen filters and lists down all such work
orders.

**All Work Orders -** Lists down and displays all the Work Orders
available for a ship even the non-periodic and follow up work orders
created by the user.

**History** -Lists down all closed Work Orders

**Work Plan -** Instructions, notices, checklists that are attached to
time schedule will be available in the work order.

### Work Order Card

1.  *Go to Work orders and click on the menu, it navigates to Work order
    listing page*

2.  *Click on ‘No.’ to navigate into work order card page*

![](/mms/user/image21.png)

3.  <Highlight color="#ebedf0">View Work Order Details:</Highlight>

<!-- end list -->

- *Title:* View the Work Order title in ‘Title’ Field under Work Order
    Details section in Work Order card

- *For e.*g., ME Overhaul Work order will be the WO title for Main
    Engine Overhaul

- *Due Date: View the due date of the work order*

- *Due Counter Value*: View the due counter value for the work order,
    which is calculated as below

> Due counter value = Last done counter + Interval value

- *Job Description:*

If instructions are added against the work plan, the same will get
populated in this section

![](/mms/user/image22.png)

![](/mms/user/image23.png)

<Highlight color="#ebedf0">View details in Fact box:</Highlight>

1.  Click on ‘i’ on the right top corner to view the details in the fact
    box

> ![](/mms/user/image15.png)

2.  Attach files (Images/ Documents) in the drop area section in the
    fact box

3.  View list of attached files under Files section

> ![](/mms/user/image24.png)

4.  *Work order Details:*

<!-- end list -->

- Work Order No: Work order No gets populated in this field

- No. of Entries: Number of items consumed will be shown in this field

- No of times reported: Number of times the work order related to the
    component has been reported

- No of approved deferments: Count of approved deferments will be
    shown in this field

- No of posted feedbacks: Number of reports related to the work order

<!-- end list -->

5.  *Linked components:*

List of linked components against the work order will be listed in this
section

![](/mms/user/image25.png)

6.  *Approval/Deferment history:*

History of approved deferments will be listed along with the details of
the User

7.  *Notes: Add notes if any upon clicking the Add button in Notes
    section*

> ![](/mms/user/image26.png)
> 
> ![](/mms/user/image20.png)

### Printing Work Order Card

For taking a printout of work order card follow as below: -

1.  Go to *Work Orders\>\>All Work Orders*

![](/mms/user/image27.png)

2.  Type in the Search box to search and Open the work order

![](/mms/user/image28.png)

3.  Go to *Actions\>\>Print\>\>Work Order Card*

![](/mms/user/image29.png)

4.  Select the suitable option from the Print screen.

<!-- end list -->

- Send To - For extracting the Work Order Card softcopy in PDF or WORD

- Preview – For previewing the Work Order Card before printing

- Print – For getting a hard copy printout.

![](/mms/user/image30.png)

### Sending A Work Order Request

Only senior officers and shore managers have the access to create work
order into the application. Junior ranks on-board have the option to
create work order requests. These requests will then go to the higher
officials (Chief Engineer) as set in the workflow for their review and
approval. The officer shall decide on whether to create a work order
from the work order request or not.

For sending a work order request, follow as below: -

1.  From the Role Center, click on Create Work Order Request.

![](/mms/user/image31.png)

2.  Select No. and Reference Object (Component Address, Mounting
    Position, Technical Component).

3.  Update Description, Entry Date, Rank and other details.

![](/mms/user/image32.png)

4.  Go to Navigate\>\>Work Order Request\>\>Details

![](/mms/user/image33.png)

5.  Select the Technical Object

![](/mms/user/image34.png)

6.  Go to Process and click on Register button to send the work order
    request for approval.

![](/mms/user/image35.png)

Note: All the work order requests get auto saved with Draft status but
only upon clicking on Register, the request be shall sent for approval.

Note: Once a WO Request is registered, the details of the request cannot
be altered.

### Creating A Work Order From A Work Order Request

All registered WO requests will list down in the Tile (*WO Requests to
Be Processed*) in the *Role Center* screen of the ranking officer. The
ranking officer needs to review the request and then accordingly approve
it to generate a valid work order.

For approving a Work Order Request, follow as below: -

1.  Click on the Tile (*WO’s To Be Verified*).

![](/mms/user/image36.png)

2.  Search and open the work order

3.  Go to *Process* and click on *Post* button

![](/mms/user/image37.png)

4.  From the pop up either click on: -

<!-- end list -->

- **Post –** To save the request as a posted work order request in
    order to create the Work order when required.

- **Post & Create Work Order –** To save the request as a posted work
    order request and create the work order immediately.

- **Reject** – To reject the work order request if it is invalid and
    does not require attention.

![](/mms/user/image38.png)

*Note: Upon clicking on Post, the Work Order Request gets saved under
Work Order Request\>\>Posted Work Order Requests Tab. The user needs to
navigate to the screen and create the work order whenever the work order
is ready for execution.*

*Note: Upon clicking on Post & Create Work Order, the work order shall
get generated in the All Work Order tab with Planned status.*

*Note: Upon rejecting a work order request, the rejected request gets
saved under Work Order Request\>\>Rejected Work Order Request.*

*Note: The WO request number is captured in the Work Order under Origin
Line tab.*

### Creating A Work Order From Posted Work Order

For creating a work order from posted work order, follow as below:-

1.  Go to *Work Orders\>\>Posted Work Order Requests*

![](/mms/user/image39.png)

2.  Search and Open the Work Order Request

![](/mms/user/image40.png)

3.  Go to *Action\>\>Functions* and click on *Create Work Order*

![](/mms/user/image41.png)

4.  Click on *Yes*

![](/mms/user/image42.png)

1.  Work Order created successfully.

![](/mms/user/image43.png)

### Creating A Non-Periodic Work Order 

Based on the user rights, on-board or shore users can directly create
work orders into the application, assign it to a rank and set it for
planning.

For creating a work order, follow as below: -

1.  From the *Role Center*, click on *Create Work Order*.

![](/mms/user/image44.png)

2.  Update Title, Work Order Category, Reference Object, Reason Code and
    Due Date.

![](/mms/user/image45.png)

3.  Upon selecting Reference Object, select the *Technical Object* from
    the pop-up window.

![](/mms/user/image46.png)

4.  Under *Work Order* *Lines* section update *required resources,
    items* and *external services* required for completing the work
    order.

![](/mms/user/image47.png)

5.  Under *Safety Notices,* update the safety and health instructions to
    be followed.

![](/mms/user/image48.png)

1.  Under *Description,* update the tasks to be completed.

![](/mms/user/image49.png)

2.  Under *Checklist,* update the checks to be carried out.

![](/mms/user/image50.png)

*Note: All created work orders get auto saved with Planning Status*

*Note: The details of the work order are editable till the time, the
status of the work order is planned.*

3.  ### Reporting Non-Periodic Work Orders 
    
    1.  #### NON-Periodic WO Without Consumption

For reporting a non-periodic work order follow as below: -

1.  Go to *Work Order\>\>Non-Periodic Work Orders*

![](/mms/user/image51.png)

2.  Select the Work Order, go to *Process* and click on *Report Work
    Order*

*Note: Overdue work orders are highlighted as RED*

*Note: A WO can only be reported when the status is Execution.*

![](/mms/user/image52.png)

3.  *Do not activate* the *Add Consumption/Services*.

![](/mms/user/image53.png)

Click on *Show/Hide Safety notices to r*ead the *safety notices* and
*instructions*.

![](/mms/user/image54.png)

4.  Update your comments under *Work done
    Feedback*![](/mms/user/image55.png)

5.  Upload relevant documents such as Permit to Work, Risk Assessments,
    etc.

6.  Click on *Next* to go to the next screen.

![](/mms/user/image56.png)

7.  Update the *Checklist* and click on *Next.*

![](/mms/user/image57.png)

1.  Update *Finished Date-Time*

*Note: Update Finished Counter Value for reporting counter-based work
order.*

Set the *Change Work Order Status* to *Finished* and click on S*ubmit*

Set the *Change Work Order Status* to *Close:* Only CE can directly
Change the work order status from finished to closed and click on
*Submit*

![](/mms/user/image58.png)

#### Reporting a non-periodic work order with consumption

For reporting a non-periodic work order follow as below: -

1.  Go to *Work Order\>\>Non-Periodic Work Orders*

![](/mms/user/image51.png)

2.  Select the Work Order, go to *Process* and click on *Report Work
    Order*

*Note: Overdue work orders are highlighted as RED*

![](/mms/user/image52.png)

*If any consumptions to be reported, toggle* the *Add
Consumption/Services button*.

![](/mms/user/image59.png)

3.  Click on *Show/Hide safety notices to r*ead the *safety notices* and
    *description*.

![](/mms/user/image54.png)

4.  Update your comments under *Work done Feedbacks*

![](/mms/user/image60.png)

5.  Upload relevant documents such as Permit to Work, Risk Assessments,
    etc.

6.  Click on *Next* to go to the next screen.

![](/mms/user/image61.png)  
7\. Update the *Checklist* and click on *Next.*

![](/mms/user/image57.png)

8.  Click on three dots in No. to select the items consumed, by default
    the spares linked to the component will be displayed in the pop up.
    Select the item consumed, and click on Ok in Items pop up screen

![](/mms/user/image62.png)

![](/mms/user/image63.png)

![](/mms/user/image64.png)

Selected item will be populated in Item Consumptions section, and
default location of the item will be populated in Location Code

9.  To change the location of an item, click on the three dots in
    Location code, only the item locations where ROB \> 0 will be
    displayed in a pop up. Select the location and click on ok

![](/mms/user/image65.png)

10. *Items popup will open on clicking three dots in No. under Item
    consumptions section:*

<!-- end list -->

- By Default, items will be displayed based on the ‘Set BOM Filter’
    which is the list of Spares linked to the Component.

- Click on Process -\> ‘Clear BOM’ filter or ‘Advanced View’ to view
    and select from the entire Inventory list

- To filter for only the Spares from the Inventory click on Process
    -\>’Set Spare filter’

- To Select the spares of a different component, click on Advanced
    view and click on Additional filter click on “Filter by component”,
    From the filter by component wizard select any other component to
    view the item specific to the selected component

![](/mms/user/image66.png)

- Update items consumed, resources utilized, and services used. Click
    on *Next*

![](/mms/user/image67.png)

11. Update *Finished Date-Time*

*Note: Update Finished Counter Value for reporting counter-based work
order.*

Set the *Change Work Order Status* to *Finished* and click on S*ubmit*

Set the *Change Work Order Status* to *Close:* Only CE can directly
Change the work order status from finished to closed and click on
*Submit*

*Note:* If the status is not updated as ‘Finished’ and the user Submits
and exits the Reporting wizard, the consumptions will be posted, and the
status of the Work order is automatically updated to ‘In Progress’. 

*NNote:*ny point, if the user exits the Reporting wizard, without
changing the status or clicking on ‘Submit’, the data entered by the
user is auto saved. However, the consumptions are only posted on
clicking on ‘Submit’

![](/mms/user/image68.png)

7.  ### Reporting Periodic Work Orders
    
    1.  #### Calendar Based Periodic WO 

For reporting a calendar based periodic wo with/ without consumptions
follow as below: -

1.  Go to *Work Order\>\>Periodic Work Orders*. All work orders are
    available here.

![](/mms/user/image69.png)

2.  Select the Work Order, go to *Process* and click on *Report Work
    Order*

*Note: Overdue work orders are highlighted as RED*

![](/mms/user/image52.png)

User can also report a work order from within a workorder card. By
clicking on the Process \> Report Work Order.

![](/mms/user/image70.png)

3.  *If consumptions need to be added, toggle ‘Add Consumption/Services’
    button*.

Please note: If the consumption toggle is ON, in that case – the user
will not be able to proceed without entering Item, Resource and Ext
service consumption. The system will show an error message if the
consumption fields are left blank.

![](/mms/user/image59.png)

4.  Click on *Show/Hide Work notices to r*ead the *work notices* and
    *instructions*.

![](/mms/user/image54.png)

5.  Update your comments under *Work done Feedback*

![](/mms/user/image71.png)

6.  Upload relevant documents such as Permit to Work, Risk Assessments,
    etc.

7.  Click on *Next* to go to the next screen.

![](/mms/user/image61.png)

8.  If there is a checklist set up as part of the time schedule; update
    the *Checklist* and click on *Next.*

![](/mms/user/image57.png)

9.  Click on three dots in No. to select the items consumed, by default
    the spares linked to the component will be displayed in the pop up.
    Select the item consumed, and click on Ok *in Items Pop up screen*

![](/mms/user/image62.png)

![](/mms/user/image63.png)

![](/mms/user/image64.png)

Selected item will be populated in Item Consumptions section, and
default location of the item will be populated

10. To change the location of an item, click on the three dots in
    Location code, only the item locations where ROB \> 0 will be
    displayed in a pop up. Select the location and click on ok

![](/mms/user/image65.png)

11. *Items popup will open on clicking three dots in No. under Item
    consumptions section:*

<!-- end list -->

- By Default,, items will be displayed based on the ‘Set BOM Filter’
    which is the list of Spares linked to the Component.

- Click on Process -\> ‘Clear BOM’ filter or ‘Advanced View’ to view
    and select from the entire Inventory list

- To filter for only the Spares from the Inventory click on Process
    -\>’Set Spare filter’

- To Select the spares of a different component, click on Advanced
    view and click on Additional filter  click on “Filter by component”,
    From the filter by component wizard select any other component to
    view the item specific to the selected component

![](/mms/user/image66.png)

- Update items consumed, resources utilized, and services used. Click
    on *Next*

![](/mms/user/image67.png)

12. Update *Finished Date-Time.*

<!-- end list -->

- Set the *Change Work Order Status* to *Finished* and click on
    S*ubmit*

- Set the *Change Work Order Status* to *Close:* Only CE can directly
    Change the work order status from finished to closed and click on
    *Submit*

![](/mms/user/image72.png)

12. On finishing, the next Work order is generated with a new due date -
    calculated as below:

Due date = Finished Date + Interval;

for e.g., if the finished date is 7/12/2019 and interval is 3M; then the
next due date will be 7/3/2020

#### Counter Based Periodic WO 

For reporting a counter based periodic work order with/ without
consumptions follow as below: -

1.  Go to *Work Order\>\>Periodic Work Orders*. All work orders are
    available here.

![](/mms/user/image69.png)

2.  Select the Work Order, go to *Process* and click on *Report Work
    Order*

*Note: Overdue work orders are highlighted as RED*

*Note: The user will be prompted to update the counter as on date before
reporting the work order*

![](/mms/user/image52.png)

3.  *If consumptions need to be added, toggle* ‘*Add
    Consumption/Services’ button*.

![](/mms/user/image59.png)

4.  Click on *Show/Hide Safety notices to r*ead the *safety notices* and
    *instructions*.

![](/mms/user/image54.png)

5.  Update your comments under *Work done Feedback*

![](/mms/user/image71.png)

6.  Upload relevant documents such as Permit to Work, Risk Assessments,
    etc.

7.  Click on *Next* to go to the next screen.

![](/mms/user/image61.png)

8.  If there is a checklist set up as part of the time schedule; update
    the *Checklist* and click on *Next.*

![](/mms/user/image57.png)

9.  Click on three dots in No. to select the items consumed, by default
    the spares linked to the component will be displayed in the pop up.
    Select the item consumed, and *click on Ok in Items popup screen*

![](/mms/user/image64.png)

Selected item will be populated in Item Consumptions section, and
default location of the item will be populated

10. To change the location of an item, click on the three dots in
    Location code, only the item locations where ROB \> 0 will be
    displayed in a pop up. Select the location and click on ok

![](/mms/user/image65.png)

11. *Items popup will open on clicking three dots in No. under Item
    consumptions section:*

<!-- end list -->

- By Default, items will be displayed based on the ‘Set BOM Filter’
    which is the list of Spares linked to the Component.

- Click on Process -\> ‘Clear BOM’ filter or ‘Advanced View’ to view
    and select from the entire Inventory list

- To filter for only the Spares from the Inventory click on Process
    -\>’Set Spare filter’

- To Select the spares of a different component, click on Advanced
    view and click on Additional filter click on “Filter by component”,
    From the filter by component wizard select any other component to
    view the item specific to the selected component

![](/mms/user/image66.png)

- Update items consumed, resources utilized, and services used. Click
    on *Next*

![](/mms/user/image67.png)

1.  Update *Finished Counter Value.*

<!-- end list -->

- Set the *Change Work Order Status* to *Finished* and click on
    S*ubmit*

- Set the *Change Work Order Status* to *Close:* Only CE can directly
    Change the work order status from finished to closed and click on
    *Submit*

![](/mms/user/image72.png)

On updating the status to finished, the next Work Order is generated
where

Due counter = Finished counter + Interval

The Due date for Counter based work orders are calculated as Finished
Date + (Interval/Daily average)

Note: When the counter is updated, and the Daily average changes, the
Due date of the open work orders are automatically recalculated based on
the new daily average value.

#### Reporting Periodic WO Out Of turn

**Scenario 1:** The 15 PPM Monitor calibration is due on 10<sup>th</sup>
September 2019. Current date is 19<sup>th</sup> July 2019. The monitor
is giving faulty readings and calibration needs to be done. In this
case, the user can report the existing periodic work order, by toggling
the button ‘Periodic Out of Turn’ as ‘On’. This will enable the Reason
code for the user to select the appropriate reason.

**Scenario 2:** The Purifier overhaul is due at 6000 hours. Currently
the purifier counter value is 5000 hours. There is a breakdown and the
overhaul has to be carried out. In this case, the user can report an
existing periodic work order by toggling the button ‘Periodic Out of
Turn’ as ‘On’.

**The user can report a work order even when it is not Due/Overdue in
case it has been carried out.**

For reporting a calendar based periodic work order out of turn, follow
as below: -

1.  Go to *Work Order\>\>Periodic Work Orders*. All work orders are
    available here.

![](/mms/user/image69.png)

2.  Click on the Filter icon to open the filter pane.

![](/mms/user/image73.png)

3.  In the filter pane, select Filter by *Due Status* and select the
    Status as *In Window*

![](/mms/user/image74.png)

4.  All in Window work orders are filtered. Type in the search box to
    search the work order.

![](/mms/user/image75.png)

5.  *Activate* the *Add Consumption/Services only if Consumptions or
    Services are to be recorded*.

*Note: Leave the PERIODIC OUT OF TURN button as inactive as this WO is
being updated out of turn and is not planned.*

![](/mms/user/image76.png)

6.  Click on *Show/Hide Safety notices to r*ead the *safety notices* and
    *instructions*.

![](/mms/user/image54.png)

7.  Update your comments under *Work done Feedbacks*

![](/mms/user/image71.png)

8.  Upload relevant documents such as Permit to Work, Risk Assessments,
    etc.

9.  Click on *Next* to go to the next screen.

![](/mms/user/image61.png)

10. Update the *Checklist* and click on *Next.*

![](/mms/user/image57.png)

11. Click on three dots in No. to select the items consumed, by default
    the spares linked to the component is displayed in the pop up.
    Select the item consumed, and click on Ok

![](/mms/user/image64.png)

Selected item will be populated in Item Consumptions section, and
default location of the item will be populated in Location Code

12. To change the location of an item, click on the three dots in
    Location code, only the item locations where ROB \> 0 will be
    displayed in a pop up. Select the location and click on ok, *in
    Items pop up screen*

![](/mms/user/image65.png)

13. *Items popup will open on clicking three dots in No. under Item
    consumptions section:*

<!-- end list -->

- By Default, items will be displayed based on the ‘Set BOM Filter’
    which is the list of Spares linked to the Component.

- Click on Process -\> ‘Clear BOM’ filter or ‘Advanced View’ to view
    and select from the entire Inventory list

- To filter for only the Spares from the Inventory click on Process
    -\>’Set Spare filter’

- To Select the spares of a different component, click on Advanced
    view and click on Additional filter click on “Filter by component”,
    From the filter by component wizard select any other component to
    view the item specific to the selected component

![](/mms/user/image77.png)

- Update items consumed, resources utilized, and services used. Click
    on *Next*

*NOTE: Consumption page will activate only when ADD CONSUMPTION button
is activated in the first screen.*

![](/mms/user/image67.png)

14. Update *Finished Date-Time.*

> Set the *Change Work Order Status* to *Finished* and click on S*ubmit*
> 
> Set the *Change Work Order Status* to *Close:* Only CE can directly
> Change the work order status from finished to closed and click on
> *Submit*

![](/mms/user/image72.png)

### Reporting Cluster Work Order

Work order can be reported from WO listing page as well as from the WO
Card page. Cluster WO is also reported like any other WO.

![](/mms/user/image78.png)

In the reporting wizard: you will find a “Report Cluster” page where the
Cluster Feedback can be captured. The feedback can be a text or integer
as set by the admin during the initial setup.

![](/mms/user/image79.png)

User can individually give feedback to each component or can give a
feedback and apply the same to all the components.

![](/mms/user/image80.png)

During inspection if a defect/one-time WO is required the same can be
triggered by checking the “Create Follow Up WO”. This will open up
one-time wo creation wizard.

![](/mms/user/image81.png)

If there are no follow up required, the next screen in the Cluster WO
reporting wizard has the option to fill in the finished dates of each
work item. This can be bulk updated or individually updated.

![](/mms/user/image82.png)

Proceed to next page to Finish/Close the work order.

8.  ### Deferment Request
    
    1.  #### Sending A Deferment Request

Whenever a job is set to execution but cannot be completed on time, the
user can send a deferment request seeking an extension on the job.

**SCENARIO:** A Fresh Water Tank is due for cleaning on 20<sup>th</sup>
July 2019. For cleaning, the tank needs to be emptied but since the ship
is sailing, the tank cannot be emptied and hence the job cannot be
completed. The next possible option to carry out the job is after
arriving at the next port on 5<sup>th</sup> August 2019. In this case a
deferment request needs to be raised to the office requesting extension
on the job up to 5<sup>th</sup> August 2019.

For sending a deferment request, follow as below: -

1.  Go to *Work Order\>\>All Work Orders*

![](/mms/user/image83.png)

2.  Select the Work Order, go to *Process* and click on *Request
    Deferment*

![](/mms/user/image84.png)

3.  On the pop-up page ‘Deferment’, for a calendar based work order or a
    counter based work order, update the New Due Date when the work
    order can be executed along with a comment i.e. reason for
    requesting an extension.

For Calendar based work order; Due Date = Last done date + Interval

![](/mms/user/image85.png)

Alternatively, for Counter based open work orders, update the ‘Deferment
to counter value’, and enter tab.

Please note: The new value cannot be less than the current counter and
the due counter. The “New Due Date” will update whenever the user
changes the “Deferment to counter value”.

New Due Date = Due Date + (Proposed Counter Value – Due Counter
Value/Daily Average)

Where, Daily average = Total Value
\[Reported\] - Value at the time of first reading
No. of days

No. of days = First Reading Date to Last Reading Date

![](/mms/user/image86.png)

On scrolling down, the Deviation % for the new due date requested is
calculated and displayed according to the following formula:

For Counter based work orders:

% Deferment Deviation = Proposed Counter Value - Due Counter
Value/Interval\*100

For Calendar based work orders:

% Deferment = \[(New Due Date - Due Date) / Interval\] \* 100

![](/mms/user/image87.png)

4.  Drag and drop here to upload supporting documents (example – Risk
    Assessments) required for extension.

![](/mms/user/image88.png)

5.  Click on *Close.* A message “*The deferment request is sent to
    TSI\!”* will be displayed and the request will be sent for
    approval*.* Also, the status of the work order shall change to
    *Deferment Requested.*

![](/mms/user/image89.png)

*Note: A deferment request can be sent only when the work order status
is Execution.*

*Note: If a deferment request is pending for approval and the work order
is closed, the deferment request shall get cancelled.*

*Note: When sending deferment below conditions should be noted*

*1) Next action counter value can be edited only for counter-based work
orders*

*2) Based on the ‘Deferment to Counter Value’ entered by user , the
daily counter average of  new due date is calculated*

*3) A deferment request cannot be raised, if new due date is same as the
due date*

#### Approving A Deferment Request

An active workflow is setup for approving the extension requests raised
from the ship. Whenever a deferment is requested from ship, the approver
gets a task on his Role Center screen. The approver is authorized to
execute 4 functions subject to permissions provided by the
administrator.

1.  **Approve** – The user can approve the extension request. If the
    workflow is setup to a single level approval workflow, the work
    order gets extended but in case of a multilevel approval setup, the
    work order is transferred to the next level of approval. Also, a log
    is maintained which will be capturing each level of transaction for
    future reference.

2.  **Reject** – The approver also has the permission to reject the
    deferment request. In this case, the approval log entry will be
    closed, and approval status is rejected.

3.  **Cancel** – The user can also cancel the deferment request. In this
    case, the approval log entry is closed, and approval status is
    cancelled.

4.  **Delegate** – The approver can also delegate another user for
    approving the deferment request. In this case, the approval log
    entry will be closed, and the approval status is Delegation. A new
    log entry will be created a new approver is assigned.

For Approving a deferment request, follow as below: -

1.  Click on the Tile (*WO’s Deferment Requested*)

![](/mms/user/image90.png)

2.  Under *Approval/ Deferment History*, and Select *Show*

![](/mms/user/image91.png)

3.  Go to *Process* and select *Approve*

![](/mms/user/image92.png)

4.  Re-update E*xecution Date* (if required). Also, update *Approval
    Note* *and c*lick on *OK.*

![](/mms/user/image93.png)

###  Closing Work Orders

All work orders which have been reported onboard must be reviewed,
verified and closed by the higher-ranking official in order to complete
them. All Finished work orders will list down in the Tile (*WO’s to Be
Verified*) in the *Role Center* screen of the ranking officer.

For reviewing a finished Work Order, follow as below: -

1.  Click on the Tile (*WO’s to Be Verified*).

![](/mms/user/image94.jpg)

2.  Search open the work order and review the updated details.

![](/mms/user/image95.png)

![](/mms/user/image96.png)

![](/mms/user/image97.png)

![](/mms/user/image98.png)

![](/mms/user/image60.png)![](/mms/user/image99.png)

*Note: All ‘Work done feedbacks’ and consumptions in the closed work
orders are consolidated while reviewing the work orders.*

*Note: For viewing individual posted feedbacks, the user can go to
Navigate\>\>Work Order\>\>Posted Work Order Feedbacks and review them.*

3.  Go to *Actions\>\>Change Status* and set the status of the work
    order to *Closed* to close the work order.

![](/mms/user/image100.png)

*Note: Prior changing the status of the work order to closed, the user
can also create feedbacks if required.*

*Note: After changing the status of work order to closed, the user
cannot create work order feedbacks, however, follow up Work Orders can
be created if required.*

### Creating A Follow Up Work Order 

During all phases of processing a work order, at any point of time if
additional task comes in order to complete the original work order, the
users can create follow up work orders. On creating a Follow-up
work-order from an existing work order, the reference to the original
work order is maintained. ‘Type of Origin’, of the follow-up work order
is updated as ‘Work order’, and the Origin No. is the Work Order No. of
the original work order.

**SCENARIO –** A major overhaul was planned and completed successfully.
There is a requirement from the class that when ever such a machinery is
overhauled, the class surveyor needs to attend the ship and ensure that
overhauling was completed properly. Also, additional tasks that were
identified after completing the overhaul and has to be done after a
certain period of time (say 2 weeks later). In this case a follow up
work order can be created.

For creating a follow up work order, follow as below: -

1.  Open the Work Order against which the Follow Up Work Order is to be
    created.

2.  Go to *Actions\>\>Create Follow-Up Work Order*

![](/mms/user/image101.png)

3.  Update Title, Work Order Category, Reference Object, Reason Code and
    Due Date.

![](/mms/user/image45.png)

4.  Upon selecting Reference Object, select the *Technical Object* from
    the pop-up window.

![](/mms/user/image46.png)

5.  Under *Lines* section update *required resources, items* and
    *external services* required for completing the work order.

![](/mms/user/image102.png)

6.  Under *Work Notices,* update the safety and health instructions to
    be followed.

![](/mms/user/image103.png)

7.  Under *Description,* update the tasks to be completed.

![](/mms/user/image49.png)

8.  Under *Checklist,* update the checks to be carried out.

![](/mms/user/image50.png)

9.  Under *Activity* tab, work plan no, type of damage, malfunction,
    etc. can be updated if required.

![](/mms/user/image104.png)

*Note: A Follow Up Work Order can be created even for a work order whose
status is already Closed.*

*Note: The closure of Follow Up Work Orders is exactly same as that of
any normal work order.*

*Note: The original WO number is captured in the Follow Up Work Order
under Origin Line field.*

###  Work Order History

.  In order to see as to whom created the work order; the admin can
    refer to “Reported by Name” and “ Reported by Rank” column.

#### Closed Work Orders

Go to *Work Orders\>\>History* to open the closed work orders list.

1.  Click on No. to open the Work Order.

![](/mms/user/image105.png)

2.  Review the updated details in the Work Order Card page.

![](/mms/user/image95.png)

![](/mms/user/image96.png)

![](/mms/user/image106.png)

![](/mms/user/image98.png)

![](/mms/user/image107.png)

![](/mms/user/image99.png)

3.  View Number of overdue days in closed work order listing.

> If Finished date is less than Due date, then ‘No. of overdue days'
> will be 0; and if Finished date is greater than the due date, then the
> number of overdue’ days will be calculated as the number of days
> between the Due date and Work order Finished date.
> 
> ![](/mms/user/image108.png)