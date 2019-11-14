## Weekday Calculator

|Spec|Input|Output|
|-|-|-|
|The number entered is a real date.|2018-07-22|true|
|The date entered is parsed into separate key values(YYYY, MM, DD)|2018-07-22|Y: 2018, M: 07, D: 22|



* [![Wiki](https://wikimedia.org/api/rest_v1/media/math/render/svg/4eaab594fb0c6eb1750c61b90de736a73fe821c0)](https://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week)

* Y is the year minus 1 for January or February, and the year for any other month
* y is the last 2 digits of Y
* c is the first 2 digits of Y
* d is the day of the month (1 to 31)
* m is the shifted month (March=1,...,February=12)
* w is the day of week (0=Sunday,...,6=Saturday). If w is negative you have to add 7 to it.
