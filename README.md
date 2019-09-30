# webpush-javascript
Contains Javascript code for integrating cronberry webpush functionality in your site.


This script will use your firebase authentication to prompt user for Allowing Notification whenever the sitre is open.

After the user 'Allow Notification', this script will read the unique firebase token (browserId) and post request to cronberry Api for registering the Audience with its webpush token.
