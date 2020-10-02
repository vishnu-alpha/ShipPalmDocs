---
id: search
title: Search And Filter
sidebar_label: Search and Filter
---


# Sorting, Searching, and Filtering
There are a few things that you can do that will help you scan, find, and limit records on a list or in any list. These include sorting, searching, and filtering. You can apply some or all of these simultaneously to quickly find or analyze your data.

:::tip
When viewing your data as tiles, you can search and use basic filtering. To use the full set of powerful features for sorting, searching, and filtering, choose the ![Show as list](/media/ui_show_as_list_icon.png "Show as list arrow left") icon to view the records as a list.
:::

## Sorting

Sorting makes it easy for you to get a quick overview of your data. If
you have many entries, for example, you can choose to sort them by
**Work Order No.**, **Funnction Number**, **Class Code**,
**ROB**, or **Date** to get the overview you need.

To sort a list, you can either choose a column heading text to toggle
between ascending and descending order, or choose the drop-down arrow in
the column heading, and then choose the **Ascending** or **Descending**
action.

:::note
Sorting is not supported on images, BLOB fields, FlowFilters, and fields
that do not belong to a table.
:::

<!-- 
## Searching


At the top of each list page, there is a ![Search
list](/media/ui-search/search-list.png "Search list icon") **Search**
action that provides a quick and easy way to reduce the records in a
list and display only those records that contain the data that you are
interested in seeing.

To search, simply choose the **Search** action, and then in the box,
type the text that you are looking for. You can enter letters, numbers,
and other symbols.

### Fine-tuning the Search

In general, search will attempt to match text across all fields. It does
not distinguish between uppercase and lowercase characters (case
insensitive) and will match text placed anywhere in the field, at the
beginning, end, or in the middle.

However, you can make a more exact search by using special characters.

-   To find only field values that match the entire text and case
    exactly, place the search text between single quotes `''` (for
    example, `'man'`).

-   To find field values that start with a certain text and match the
    case, place `*` after the search text (for example `man*`).

-   To find field values that end with a certain text and match the
    case, place `*` before the search text (for example `*man`).

-   When using `''` or `*`, the search is case sensitive. If you want to
    make the search case insensitive, place `@` before the search text
    (for example `@man*`).

The following table provides some examples to explain how you can use
the search.

-----------------------------------------------------------------------
Search Criteria                     Finds\...
----------------------------------- -----------------------------------
`man`\                              All records with fields that
or\                                 contain the text **man**,
`Man`                               regardless of the case. For
                                    example, **Manchester**,
                                    **manual**, or **Sportsman**.

`'Man'`                             All records with fields that
                                    contain only **Man**, matching the
                                    case.

`Man*`                              All records with fields that start
                                    with the text **Man**, matching the
                                    case. For example, **Manchester**
                                    but not **manual** or
                                    **Sportsman**.

`@Man*`                             All records with fields that start
                                    with **man**, regardless of the
                                    case. For example, **Manchester**
                                    and **manual**, but not
                                    **Sportsman**.

`@*man`                             All records that end with **man**,
                                    regardless of the case. For example
                                    **Sportsman**, but not
                                    **Manchester** or **manual**.
-----------------------------------------------------------------------

:::tip

You can press **F3** to activate and deactivate the search box.
:::

## Filtering


Filtering provides a more advanced and versatile way of controlling
which records display on a list or include in a report or XMLport. There
are two major differences between searching and filtering, as described
in the table below.

                        **Searching**                                                                                                **Filtering**
----------------------- ------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------
**Applicable Fields**   Searches across all fields that are visible on the page.                                                     Filters one or more fields individually, selecting from any field on the table, including fields that are not visible on the page.
**Matching**            Displays records with fields that match the search text, irrespective of casing or placement of that text.   Displays records where the field matches the filter exactly and is case sensitive, unless special filter symbols are entered.

Filtering enables you to display records for specific accounts or
customers, dates, amounts, and other information by specifying filter
criteria. Only records that match the criteria are displayed on the list
or included in the report, batch job, or XMLport. If you specify
criteria for multiple fields, then only records that match all criteria
will be displayed.

For lists, the filters are displayed on a filter pane that appears to
the left of the list when you activate it. For reports, batch jobs, and
XMLports, the filters are visible directly on the request page.

### Filtering with Option Fields

For \"ordinary\" fields that hold data, setup date or business data, you
can set filters both by selecting data and by typing filter values, and
you can use symbols to define advanced filter criteria.

For fields of type **Option**, however, you can only set a filter by
selecting one or more options from a drop-down list of the available
options. An example of an option field is the **Status** field on the
**Sales Orders** page.

:::note
When you select multiple options as a filter value, the relationship
between the options is defined as *OR*. For example, if you select both
the **Open** and the **Released** check box in the **Status** filter
field on the **Sales Orders** page, it means that sales orders that are
either open or released are displayed.
:::

### Setting Filters on Lists

On lists, you set filters by using the filter pane. To display the
filter pane for a list, choose the drop-down arrow next to the name of
the page, and then choose the **Show filter pane** action.
Alternatively, press **Shift+F3**.

To display the filter pane for a column on a list, choose the drop-down
arrow, and then choose the **Filter** action. Alternatively, press
**Shift+F3**. The filter pane opens with the selected column shown as a
filter field in the **Filter list by** section.

The filter pane displays the current filters for a list, and enables you
to set your own custom filters on one or more fields by choosing the **+
Filter** action.

A filter pane is divided in three sections: **Views**, **Filter list
by**, and **Filter totals by**:

-   **Views**

    Some lists include the **Views** section. Views are variations of
    the list that have been preconfigured with filters. You can define
    and save as many views as you want per list, and the views will be
    available to you on any device you sign into.

-   **Filter list by**

    This is where you add filters on specific fields to reduce the
    number of displayed records. To add a filter, choose the **+
    Filter** action, type the name of the field that you want to filter
    the list by, or pick a field from the drop-down list.

-   **Filter totals by**

    Some lists that display calculated fields, such as amounts and
    quantities, will include the **Filter totals by** section where you
    can adjust various dimensions that influence calculations. To add a
    filter, choose the **+ Filter** action, type the name of the field
    that you want to filter the list by, or pick a field from the
    drop-down list.

    :::note
    Filters in the **Filter totals by** section are controlled by
    FlowFilters on the page design. 
    :::

You can set a simple filter directly on a list within using the filter
pane, namely a filter that displays only records with the same value as
in the selected cell. Select a cell on the list, choose the drop-down
arrow, and then choose the **Filter to This Value** action.
Alternatively, press **Alt+F3**.

### Setting Filters in Reports, Batch Jobs, and XMLports

For reports and XMLports, the filters are visible directly on the
request page. The request page displays the last used filters according
to your selection in the **Use default values from** field. 

The main **Filter** section shows the default filter fields that you use
to delimit which records to include in the report or XMLport. To add a
filter, choose the **+ Filter** action, type the name of the field that
you want to filter by, or pick a field from the drop-down list.

In the **Filter totals by** section, you can adjust various dimensions
that influence calculations in the report or XMLport. To add a filter,
choose the **+ Filter** action, type the name of the field that you want
to filter by, or pick a field from the drop-down list.

## Entering Filter Criteria


Both in the filter pane and on a request page, you enter your filter
criteria in the box under the filter field.

The type of the filter field determines which criteria you can enter.
For example, filtering a field that has fixed values will only let you
choose from those values.

Columns that already have filters are indicated by the ![Filter
icon](/media/ui-search/filter-icon.png "Filter icon") icon in the column
heading. To remove a filter, choose the drop-down arrow, and then choose
the **Clear Filter** action.

:::tip

Accelerate finding and analyzing your data by using combinations of
keyboard shortcuts. For example, select a field, use **Shift+Alt+F3** to
add that field to the filter pane, type the filter criteria, use
**Ctrl+Enter** to return to the rows, select another field, and use
**Alt+F3** to filter to that value. 
:::

### []{#FilterCriteria} Filter Criteria and Symbols {#-filter-criteria-and-symbols}

When you enter criteria, you can use all the numbers and letters that
you can normally use in the field. In addition, you can use special
symbols (or operators) to further filter the results. The following
tables show the symbols that can be used in filters. 

:::important
There may be instances where field values contain these symbols and you
want to filter on them. To do this, you must include the filter
expression that contains the symbol in quotation marks (\'\'). For
example, if you want to filter on records that start with the text
*S&R*, the filter expression is `'S&R*'`.
:::

The following sections describe how to use the different operators.

:::note
If there are more than 200 operators in a single filter, the system will
automatically group some expressions in parentheses `()` for the purpose
of processing. This has no effect on the filter or the results.
:::

#### (..) Interval {#-interval}

Sample Expression   Records Displayed
------------------- -----------------------------------------------------------------------------------------
`1100..2100`        Numbers 1100 through 2100
`..2500`            Up to and including 2500
`..12 31 00`        Dates up to and including 12 31 00
`P8..`              Information for accounting period 8 and thereafter
`..23`              From the beginning date until 23-current month-current year 23:59:59
`23..`              From 23-current month-current year 0:00:00 until the end of time
`22..23`            From 22-current month-current year 0:00:00 until 23-current month-current year 23:59:59

#### (\|) Either/or {#-eitheror}

Sample Expression   Records Displayed
------------------- ---------------------------
`1200|1300`         Numbers with 1200 or 1300

#### (\<\>) Not equal to {#-not-equal-to}

-----------------------------------------------------------------------
Sample Expression                   Records Displayed
----------------------------------- -----------------------------------
`<>0`                               All numbers except 0\
                                    \
                                    The SQL Server Option allows you to
                                    combine this symbol with a wild
                                    card expression. For example,
                                    \<\>A\* meaning not equal to any
                                    text that starts with A.

-----------------------------------------------------------------------

#### (\>) Greater than {#-greater-than}

Sample Expression   Records Displayed
------------------- ---------------------------
`>1200`             Numbers greater than 1200

#### (\>=) Greater than or equal to {#-greater-than-or-equal-to}

Sample Expression   Records Displayed
------------------- ---------------------------------------
`>=1200`            Numbers greater than or equal to 1200

#### (\<) Less than {#-less-than}

Sample Expression   Records Displayed
------------------- ------------------------
`<1200`             Numbers less than 1200

#### (\<=) Less than or equal to {#-less-than-or-equal-to}

Sample Expression   Records Displayed
------------------- ------------------------------------
`<=1200`            Numbers less than or equal to 1200

#### (&) And {#-and}

Sample Expression   Records Displayed
------------------- ---------------------------------------------
`>200&<1200`        Numbers greater than 200 and less than 1200

#### (\'\') An exact character match {#-an-exact-character-match}

Sample Expression   Records Displayed
------------------- ------------------------------------------------------
`'man'`             Text that matches man exactly and is case sensitive.

#### (@) Case insensitive {#-case-insensitive}

Sample Expression   Records Displayed
------------------- ----------------------------------------------------
`@man*`             Text that starts with man and is case insensitive.

#### (\*) An indefinite number of unknown characters {#-an-indefinite-number-of-unknown-characters}

Sample Expression   Records Displayed
------------------- -----------------------------------------------------
`*Co*`              Text that contains \"Co\" and is case sensitive.
`*Co`               Text that ends with \"Co\" and is case sensitive.
`Co*`               Text that begins with \"Co\" and is case sensitive.

#### (?) One unknown character {#-one-unknown-character}

Sample Expression   Records Displayed
------------------- -------------------------------
`Hans?n`            Text such as Hansen or Hanson

#### Combined Format Expressions

Sample Expression   Records Displayed
------------------- ---------------------------------------------------------------------------------------------------------------------------------------
`5999|8100..8490`   Include any records with the number 5999 or a number from the interval 8100 through 8490.
`..1299|1400..`     Include records with a number less than or equal to 1299 or a number equal to 1400 or greater (all numbers except 1300 through 1399).
`>50&<100`          Include records with numbers that are greater than 50 and less than 100 (numbers 51 through 99).

### []{#FilterTokens} Filter Tokens {#-filter-tokens}

When entering filter criteria, you can also type words that have special
meaning, called filter tokens. After entering the token word, the word
is replaced by the value or values that it represents. This makes
filtering easier by reducing the need to navigate to other pages to look
up values you want to add to your filter. The tables below describe some
of the tokens you can type as filter criteria.

:::tip

Your organization may use custom tokens. To learn about the complete set
of tokens available to you or to add more custom tokens, talk to your
administrator. 
:::

#### (%me or %userid) Records Assigned to You

Use `%me` or `%userid` when filtering fields that contain the user ID,
such as **Assigned to User ID** field, to display all records that are
assigned to you.

-----------------------------------------------------------------------
Sample Expression                   Records Displayed
----------------------------------- -----------------------------------
`%me`\                              Records that are assigned to your
or\                                 user account.
`%userid`                           

-----------------------------------------------------------------------

#### (%mycustomers) Customers in My Customers

Use `%mycustomers` in the customer **No** field to display all records
for customers that are included in the **My Customers** list on your
Role Center.

Sample Expression   Records Displayed
------------------- --------------------------------------------------------
`%mycustomers`      Customers in the **My Customers** on your Role Center.

#### (%myitems) Items in My Items

Use `%myitems` in the item **No** field to display all records for items
that are included in the **My Items** list on your Role Center.

Sample Expression   Records Displayed
------------------- ------------------------------------------------
`%myitems`          Items in the **My Items** on your Role Center.

#### (%myvendors) Vendors in My Vendors

Use `%myvendors` in the vendor **No** field to display all records for
vendors that are included in the **My Vendors** list on your Role
Center.

Sample Expression   Records Displayed
------------------- ----------------------------------------------------
`%myvendors`        Vendors in the **My Vendors** on your Role Center. -->

---   

### How to search by Date field greater/lesser than or between the dates


1.  Select the module from the menu

2.  Click on the Filter (![con](/help/user/image145.png)) button to open
    the filter pane

![](/help/user/image146.png)

3.  Click on the filter button under filter list by and type in the date
    in the date search field

4.  Type in the keyword using \< as prefix to filter work orders with
    due date less than 11/30/19

![](/help/user/image147.png)

5.  Type in the keyword using \> as prefix to filter work orders with
    due date greater than 11/30/19

![](/help/user/image148.png)

6.  If we want to filter work orders with due date between 11/30/19 and
    11/17/20; type in the keyword using .. in between the dates
    (11/30/19..11/17/20)

![](/help/user/image149.png)

### How to search – Value Field

1.  Select the module from the menu

2.  Click on the Filter (![con](/help/user/image145.png)) button to open
    the filter pane

![](/help/user/image146.png)

3.  Click on the filter button under filter list by and type in the
    value in the filter box

4.  Type in the value, to filter values based on the search

![](/help/user/image150.png)

5.  Type in the value using \< as prefix, to filter values less than the
    value provided in the filter

> For e.g., Click on Interval (Counter) in filter list by section and
> type in the value as \<6000 to filter counter values less than 6000

![](/help/user/image151.png)

6.  Type in the value using \> as prefix, to filter values less than the
    value provided in the filter

> For e.g., Click on Interval (Counter) in filter list by section and
> type in the value as \>6000 to filter counter values greater than 6000

![](/help/user/image152.png)

7.  For filtering the Intervals between 500 to 8000; type in the keyword
    using .. in between the intervals (500..8000)

![](/help/user/image153.png)

### How to search – Text field

1.  Select the module from the menu

2.  Click on the Filter (![con](/help/user/image145.png)) button to open
    the filter pane

![](/help/user/image146.png)

3.  Click on filter button under filter list by and type in the text in
    the text search field

4.  Type in the keyword using \* as prefix, to filter the values ending
    with the keywords

> ![](/help/user/image154.png)

5.  Type in the keyword using \* as suffix, to filter the values
    starting with the keywords

> ![](/help/user/image155.png)

6.  Type in the keyword using \* as prefix and suffix and press enter
    (Ex - \*Purifier\*).

> ![](/help/user/image156.png)

All components with the keyword will be filtered. (as seen below)

> ![](/help/user/image157.png)

### How to search – Dropdown value field

1.  Select the module from the menu

2.  Click on the Filter (![con](/help/user/image145.png)) button to open
    the filter pane

![](/help/user/image146.png)

3.  Click on the filter button under filter list by and type in the
    value in the search field and select the applicable value from the
    drop down; all the values applicable to the drop-down selection will
    be filtered in the list.

> For e.g., Click on ‘Responsible rank’ in Filter list by section and
> select the rank from the drop-down, all the values equal to the rank
> will be filtered in the list.

![](/help/user/image158.png)

![](/help/user/image159.png)

**NOTE**: Filter search is case sensitive, need to type in exact value
in the filter box; for e.g., If we want to search HFO Purifiers; type in
exact value (HFO Purifiers) in Filter box.

### Free Text Search:
    
    1.  Click on the Search box in the menu bar and type in the value in
        the search field
    
    2.  Results will be displayed based on the searched entry

![](/help/user/image160.png)

**NOTE**: Free Text Search is not case sensitive

## Work Order Search & Filtering

The application provides a variety of search options for locating the
work orders from the list. Some of the scenarios are listed below: -

### Opening the Filter Search

For opening the search tab, follow the following steps: -

1.  Go to *Work Orders*

2.  Click on “All Work Orders” to open the work orders list.

![](/help/user/image161.png)

3.  Click on the Filter (![con](/help/user/image145.png)) button to open
    the filter pane

![](/help/user/image162.png)

## User Cases:
### CASE 01: Searching By Work Order Title

Type in the keyword in the search pane and press enter. The work orders
with the specified keywords will filter.

![](/help/user/image163.png)

### CASE 02: Filtering by Due Status

1.  Click on “Filter” button under “Filter List By” and select “Due
    Status”

> ![](/help/user/image164.png)

2.  Select the *Status (In Window/ In Due Range/ Overdue)*

> ![](/help/user/image165.png)

3.  Based on the due status selected, all the WO’s shall filter.

![](/help/user/image166.png)

### CASE 03: Filtering By WO Status

1.  Click on *Filter* button under *Filter List By* and select *Work
    Order Status value*

![](/help/user/image167.png)

2.  Choose Work Order Status value from the drop-down
    (Planning/Execution/In Progress/Finished)

![](/help/user/image168.png)

4.  All work orders with the Work Order Status selected will be
    filtered.

![](/help/user/image169.png)

### CASE 04: Filtering WO’s for A Technical Object

1.  Click on *Filter* button under *Filter List By* and select
    *Technical Object Description*

![](/help/user/image170.png)

2.  Type in the keyword using \* as prefix and suffix and press enter
    (Ex - \*vibration damper\*)

> ![](/help/user/image171.png)

3.  All work orders for the Technical Components will be filtered.

![](/help/user/image172.png)

### CASE 05: Filtering Approved Deferred WO

1.  Click on Filter button under Filter List By and select Technical
    Object Description

![](/help/user/image173.png)

2.  Update \>0 in the text field and press enter.

> ![](/help/user/image174.png)

3.  All approved deferred jobs will be filtered.

![](/help/user/image175.png)

### CASE 06: Filtering WO Assigned To A Specific rank

1.  Click on Filter button under Filter List By and select *Responsible
    Rank*

![](/help/user/image176.png)

2.  Select the Rank from the list.

> ![](/help/user/image177.png)

1.  All WO assigned to the selected rank will be filtered.

![](/help/user/image178.png)

### Case 08: Filtering WO By Activity Type (Ex – Inspection, Overhaul, Etc) 

1.  Click on Filter button under Filter List By and select *Type Of
    Activity Code*

![](/help/user/image179.png)

2.  Select the activity (Inspection, Calibration, Cleaning, Overhaul,
    etc) from the predefined list.

> ![](/help/user/image180.png)

3.  All Work Orders with the selected activity will be filtered.

![](/help/user/image181.png)

FILTERING WO BY INTERVAL:

As Interval is a calculated field, the filtering by Interval is by
selecting the appropriate Filter field - Interval (Counter) or Interval
(Time).

### Case 09: Filtering WO By interval (counter) 

1.  Click on the Filter button under Filter List By and select *Interval
    (Counter)*

2.  *Type in the value in the text field and click enter*

3.  *All Work orders with the selected Interval (Counter) will be
    filtered*![](/help/user/image182.png)

<!-- end list -->

4.  *To filter Work orders less than Interval (Counter), type in the
    value with prefix as ‘\<’ in the text field (e.g., \<35000) and to
    filter Work orders greater than Interval (Counter), type in the
    value with prefix as ‘\>’ (e.g., \>5000)*

> ![](/help/user/image183.png)
> 
> ![](/help/user/image184.png)

5.  *To filter Work orders between Interval (Counter) values, type in ..
    between two values*

> ![](/help/user/image185.png)

6.  To get all counter based WO doing a search for value \>1, this will
    display all the jobs based on counters

> ![](/help/user/image186.png) 

### Case 10: Filtering WO By interval (DATE) 

1.  Click on the Filter button under Filter List By and select *Interval
    (Date)*

2.  *Type in the value (For e.g., 30M) in the text field and click
    enter*

3.  *All Work orders with the selected Interval (Date) will be filtered*

![](/help/user/image187.png)

4.  *To filter Work orders less than Interval (Date), type in the value
    with prefix as \< in the text field and to filter Work orders
    greater than Interval (Date), type in the value with prefix as \>*

![](/help/user/image188.png)

![](/help/user/image189.png)

5.  *To filter Work orders between Interval (Date) values, type in .. in
    between two values*

![](/help/user/image190.png)

6\. To see all WO based on date filter Interval (date) with a value
\>1D.

![](/help/user/image191.png)

## Clearing the Filter Search
    
    1.  Click on *Reset Filter* button to reset the filter after search.
    
    2.  Click on *Cross* (![con](/help/user/image192.png)) button to
        close the filter pane.

> ![](/help/user/image193.png)

*Note:* The user can filter by multiple parameters together and use them
as a single search. For e.g. In Work order Listing screen, Due Status =
'Overdue' and 'Responsible Rank' = '3rd Engineer'

## Searching Closed Work Orders

The application provides a variety of search options for locating the
work orders from the list. Some of the search scenarios have been
discussed below:-

For opening the search tab,

1.  Go to *Work Orders\>\>History* to open the closed work orders list.

![](/help/user/image194.png)

2.  Click on the *Filter (*![](/help/user/image145.png)*)* button to
    open the filter pane

![](/help/user/image195.png)

## User Cases:
### Case 01: Searching By Work Order Title

1.  Type in a keyword in the search pane and press enter. The work
    orders with the specified keywords shall filter.

![](/help/user/image196.png)

### Case 02: Filtering WO Assigned To A Specific rank

1.  Click on Filter button under Filter List By and select *Responsible
    Rank*

![](/help/user/image197.png)

2.  Select the Rank from the list.

![](/help/user/image177.png)

3.  All WO completed by the selected rank will be filtered.

![](/help/user/image198.png)

### Case 03: Filtering WO’s Reported In A Time Period

> 1\. Click on the Filter button under Filter List By and select
> *Reported Completed Date-Time* ![](/help/user/image199.png)

1.  Select a *Date* range as ‘Lower Date’..’Higher Date’ (Example –
    01/01/2019..03/01/2019)

![](/help/user/image200.png)

3.  All Work Orders reported between 1 Jan 2019 and 1 March 2019 will be
    filtered

![](/help/user/image201.png)

### Case 04: Filtering WO By Activity Type (Ex – Inspection, Overhaul, Etc) 

1.  Click on Filter button under Filter List By and select *Type Of
    Activity Code*

![](/help/user/image202.png)

2.  Select the activity (Inspection, Calibration, Cleaning, Overhaul,
    etc) from the predefined list.

![](/help/user/image180.png)

3.  All Work Orders with the selected activity will be filtered.

![](/help/user/image203.png)

## Component Search & Filtering

The application provides a variety of search options for locating the
components from the list.

### Opening the Filter Search - 

1.  Go to *Components*

2.  Click on “All Components”

> ![](/help/user/image11.png)

3.  Click on the Filter (![con](/help/user/image145.png)) button to open
    the filter pane

> ![](/help/user/image146.png)

## User Cases:
### CASE 01: Filtering by component name

1.  Click on the Filter button under *Filter List By* and select
    *Description*

![](/help/user/image204.png)

1.  Type in the keyword using \* as prefix and suffix and press enter
    (Ex - \*Purifier\*).

> ![](/help/user/image156.png)

All components with the keyword will be filtered. (as seen below)

![](/help/user/image157.png)

### CASE 02: Filtering Critical Components

1.  Click on the Filter button under “Filter List By” and select
    Critical

> ![](/help/user/image205.png)

2.  Click on *Yes*

![](/help/user/image206.png)

All Critical components will be filtered.

![](/help/user/image207.png)

Note: The user can follow steps as per CASE 01 for searching a specific
component from the Critical Components List.

### CASE 03: Filtering Class Components

1.  Click on the Filter button under “Filter List By” and select Class

![](/help/user/image208.png)

2.  Click on *Yes*

> ![](/help/user/image209.png)

All Class components will be filtered.

![](/help/user/image210.png)

### CASE 04: Filtering Component Of a Specific Maker/Model

1.  Click on “Filter” button under “Filter List By” and select
    “Manufacturer Name”

![](/help/user/image211.png)

2.  Type in the keyword using \* as prefix and suffix and press enter
    (Example - \*Kobe\*)

![](/help/user/image212.png)

2.  Again, click on the “Filter” button under “Filter List By” and
    select “Model Name”

> ![](/help/user/image213.png)

3.  Type in the keyword using \* as prefix and suffix and press enter
    (Example - \*63121\*)

> ![](/help/user/image214.png)

4.  All components with the specified maker/model will be filtered.

![](/help/user/image215.png)

### Clearing the Filter Search

1.  Click on “*Reset Filter”* button to reset the filter after search.

2.  Click on *Cross* (![con](/help/user/image192.png)) button to close
    the filter pane.

![](/help/user/image193.png)

*Note:* The user can filter by multiple parameters together and use them
as a single search. For e.g. In Work order Listing screen, Due Status =
'Overdue' and 'Responsible Rank' = '3rd Engineer'

## Searching Spares

Items can be searched in the Inventory list on below mentioned criteria.

*Note: In the cases, All Items section has been explained. Same search
filters can be applied in Critical and Spares sections also.*

## User Cases:
### Case 01: Filtering Spares for A Technical Component

For filtering spares for a component, follow as below: -

1.  Go to *Inventory\>\>All Items*

![](/help/user/image216.png)

2.  Click on *Additional Filter\>\>Filter By Components*

![](/help/user/image217.png)

3.  Click on the *Dropdown* button and *Select from Full List* to open
    the technical component list.

![](/help/user/image218.png)

4.  In the *Search* box type in the *component name* for filtering*.*

5.  Now select the component from the list and click on *OK*.

![](/help/user/image219.png)

6.  Component has been selected. Click on *Ok*

*Note: Follow similar steps as above for adding more components in the
list.*

![](/help/user/image220.png)

7.  All spares for the selected component will be filtered.

![](/help/user/image221.png)

### CASE 02: Filtering By Drawing No./Part No./Position No.

1.  Go to *Inventory\>\>All Items*

![](/help/user/image216.png)

2.  Click on the *Filter List By*.

3.  Now click on the attribute (Drawing No., Part No.,Position No.) you
    want the filter

![](/help/user/image222.png)

4.  Update the attribute description

![](/help/user/image223.png)

5.  All items for the selected attribute will be filtered.

![](/help/user/image224.png)

### CASE 03: Filtering by Spare Name

1.  Go to *Inventory\>\>All Items*

![](/help/user/image216.png)

2.  Click on the Search box in the Spares Listing screen and type in the
    spares name.

3.  The spare will be filtered.

![](/help/user/image225.png)

### CASE 04: Filtering in the closed work orders list (Ledger Entries) to see the Spares Consumption:

From any closed WO user can use the ‘Work Order Details’ factbox to see
the number of spares consumed.

![](/help/user/image226.png)

When the consumption number is clicked user is taken to a WO ledger
entry screen.

Here the user can see which other work orders have consumed the same
spare part.

![](/help/user/image227.png)

This can be further filtered with a date range to see the consumption
done in the range.
