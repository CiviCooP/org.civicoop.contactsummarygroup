<?php

/**
 * Class CRM_ContactSummaryGroup_Init.
 */
class CRM_ContactSummaryGroup_Init {

  /**
   * Initialise group block for contact summary page.
   * (Called by hook_civicrm_summary, see contactsummarygroup.php.)
   */
  public static function init() {

    \CRM_Core_Resources::singleton()
                       ->addScriptFile('org.civicoop.contactsummarygroup', 'assets/contactsummarygroup.js', 1012);

    \CRM_Core_Region::instance('page-body')
                    ->add(['template'  => 'CRM/ContactSummaryGroup/ContactSummary.tpl']);

    // This setting says if smart groups should be shown by default (but that's different from what we want: we'll always show smart groups, the question if we always want to call the ajax request on load):
    // CRM_Core_BAO_Setting::getItem(CRM_Core_BAO_Setting::SYSTEM_PREFERENCES_NAME, 'contact_smart_group_display');
  }

}