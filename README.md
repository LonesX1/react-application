# Description:
Overview module is a dynamic module that will display different data depending on the module type (taken from url), but using the same table component to view the actual data. The table can be sorted (by clicking on the table header), filtered. The table can be configured from a separate component. In table you can configure:
default limit
after refresh will be this value, but the user can change to temporary see the amount of users he wants
default sorting value
meaning on page refresh it will sort the data by the default field, but after, the user can sort by all available fields by clicking on the headers
order of header fields
amount of elements shown (i.e 10 items or 100 items)

### In depth description 

Required Components
Date range picker
User can choose a date from 01.01.2020 to current day
Search field
Input value in which the use writes a string he wants to look for
Table configurator
Limit
Select with values [5, 10, 25, 50, 100]
Two selects
Sort value (i.e. name, date, some metric)
Sort desc / asc
!IMPORTANT! at least one sort value should be selected
Drag and drop container
Chips will represent headers, meaning 3 headers - 3 chips
You can change the order of headers by moving the chips
!IMPORTANT! At least one chip should always be selected 
Available fields container
A set of checkboxes to toggle which headers will be shown (i.e. one module has 12 metrics, 12 checkboxes will be shown and the default value (taken from url) will be disabled so the user can not disable the default header)
Setting on/off the checkbox will trigger it’s value to be removed, or added at the end of the drag and drop container
Table
Plain html table to visualize data
Table limit 
The user might want to change the temporary display of data to 100 item, instead of the value displayed in the table configurator
Table pagination
Prev. page button
current page input
Next page button
Required services
Helpers
Generate data for modules
Once generate write to localStorage the generated items
Use a lot of random values
Minimum 1000 items for one module
Every item generated should have a HIDDEN field “date”, which will be used when filtering the data by date
Generate preset for each of the modules
At least 3 modules should have their own preset with different metrics (can repeat)
Let’s say config for metrics “name” will be saved in the localStorage as “nameConfiguration” and will look like: 
{
  defaultMetric: “name”,
  defaultLimit: 10,
  defaultSorting: “name:ASC”
  fields: [“name”, “surname”, “email”, “phone”...],
  …
}
fill in with all required fields, at least 8 metrics per module
  
Router (additional if can do in native JS, if not, skip and create 3 html pages with same layout, just have different path)
At least three routes like /overview/name, /overview/date, /overview/company
That additional parameter will be use as a default value used by the table and table configurator
Each route should have it’s own metrics that it will generate data for (i.e. /overview/name will have metrics user, name, date, company, phone …. while /overview/date will have metrics: date, firstSeen, lastSeen, localTime… others). The metrics for each module type will be stored locally in JSON format in static folder
API (class)
Used to simulate requests, like GET, PUT
API.get(“/overview/name”) will return data from previously generated data for that exact “name” module
API.get(“/overview/name/configuration/preset”) will return the JSON for the current table configuration (preset)
API.put(“/overview/name/configuration/custom”) will overwrite the current table configuration, by default the preset config, then after the user changed at least one value, it will be a custom one
Module looks
The resulting page should look something like: (used paint so the intern can improvise on the looks of the view, please have a pleasant to the eye UI)
Module frontend structure

![image](https://user-images.githubusercontent.com/79984990/232313494-005a78d6-3fa6-4a3b-8b91-06a15743a2c2.png)

View components explanation:
Search - text field where the user can insert any values, when clicking enter will FILTER the data: any item, including the value from the search input will be shown in the table (ATTENTION the local data variable will change, the pages will change, the sorted by field will remain the same)
[FORGOT TO INCLUDE IN THE PHOTO] Left to search will be a date range picker
the user will select all data that was “created” from “dateFrom” to “dateTo”
ATTENTION by default will be set Today - 7 days, as an example: 
13.09.2022 - 20.09.2022
Wrench icon - button which triggers the table configuration popup to appear
the configuration should have this structure

![image](https://user-images.githubusercontent.com/79984990/232313516-d4ff7f3f-bd5d-4b55-b8f0-31478340a51d.png)


items per page
1 select with values [5, 10, 25, 50, 100] - amount of rows shown per page
Sorting
2 selects
field name - select from selected metrics / fields / columns
sorting value - select from [ASC, DESC]
Fields order / metrics order / column order
Will contain chips of selected / checked fields and the order can be changed via drag&drop so then the order of columns viewed by the user will be changed
Selected fields
A set of checkboxes - all availables fields for the current mode
Actions
cancel - close modal WITHOUT saving changes
save - close modal WITH saving data in the localStorage, overwriting the currently saved configuration (if current mode is “name”, then will overwrite the “nameConfiguration” in localStorage)
Table
headers - a set of selected fields, which is taken from the currently saved configuration from localStorage
data - will display data for selected fields
Table pagination
limit - items per page shown, select from values [5, 10, 25, 50, 100]
once changed the value will re render the table, page will be set to 1, the search value should still be applied, the sorted by field will remain the same
pagination
“<” button - will go to previous page, disabled if on first page
current page select - a select of all pages available
if there are 1000 items and 100 are shown per page, then there will be 10 pages (formula: [total items] / [limit])
“>” button - will go to next page, disabled if on last page
