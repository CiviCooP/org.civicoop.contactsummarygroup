org.civicoop.contactsummarygroup
================================

This CiviCRM extension adds a 'Groups' block to the contact summary page, above 'Tags',
that shows all groups the current contact is a member of.  

It's quite similar to the [group2summary](https://github.com/TechToThePeople/group2summary) extension, but differs in that:
* the group list also includes smart groups (by using a custom API method)
* the group list is always loaded immediately (we could make this configurable in the future)
* it doesn't require underscore.js (ie this extension is >= 4.6 compatible by default)
* it's properly translated and its UI is just so much better ;-)

*Update March 2017*: Added custom API method because the 'groups' field returned with Contact.Get now only contains group IDs instead of group names, which it did for some versions of 4.7. This version has only been tested with CiviCRM >= 4.7.16.

This extension is generally available but was created for specific customer installations.  
(Originally created for woonreferendum.nl and decooperatie.org.) 