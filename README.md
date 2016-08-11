org.civicoop.contactsummarygroup
================================

This CiviCRM extension adds a 'Groups' block to the contact summary page, above 'Tags',
that shows all groups the current contact is a member of.  

It's quite similar to the [group2summary](https://github.com/TechToThePeople/group2summary) extension, but differs in that:
* the group list also includes smart groups (by using Contact.GetSingle instead of GroupContact.Get)
* the group list is always loaded immediately (we could make this configurable in the future)
* it doesn't require underscore.js (ie this extension is >= 4.6 compatible by default)
* it's properly translated and its UI is just so much better ;-)

This extension is generally available but was created for specific customer installations.  
(Originally created for woonreferendum.nl and decooperatie.org.)
