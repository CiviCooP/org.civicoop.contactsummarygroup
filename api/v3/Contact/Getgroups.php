<?php
/**
 * Contact.GetGroups API method.
 * Get an array of groups, including smart groups, for a contact.
 * Supports a single search parameter: $params['contact_id'] = contact ID.
 * $params['return'] determines which group fields are returned.
 *
 * @author Kevin Levie <kevin.levie@civicoop.org>
 * @package org.decooperatie.general
 * @license AGPL-3.0
 */

/**
 * @param array $params Parameters
 * @return array API result descriptor
 * @see civicrm_api3_create_success
 * @see civicrm_api3_create_error
 * @throws CiviCRM_API3_Exception
 */
function civicrm_api3_contact_getgroups($params) {

  // Check for contact id
  if(isset($params['id']) && !isset($params['contact_id'])) {
    $params['contact_id'] = $params['id'];
  }
  if (!isset($params['contact_id'])) {
    throw new CiviCRM_API3_Exception('Contact ID not set. Supply \'id\' parameter.', 'contact_getgroups_no_cid');
  }

  // Get contact['groups']
  $contact = civicrm_api3('Contact', 'getsingle', [
    'id'     => (int) $params['contact_id'],
    'return' => 'groups',
  ]);
  if (!$contact || $contact['is_error'] || $contact['groups'] == '') {
    return [];
  }

  // Get groups
  $groupIds = explode(',', $contact['groups']);
  $groupParams = [
    'id' => ['IN' => $groupIds],
    'sequential' => 1,
  ];
  if (isset($params['return'])) {
    $groupParams['return'] = $params['return'];
  }
  return civicrm_api3('Group', 'get', $groupParams);
}

/**
 * @param array $params Info about parameters this API call supports
 */
function _civicrm_api3_contact_getgroups_spec(&$params) {
  $params = [
    'contact_id'     => [
      'name'         => 'contact_id',
      'title'        => ts('Contact ID'),
      'api.required' => TRUE,
    ],
    'return' => [
      'name'  => 'return',
      'title' => ts('Fields to return'),
    ],
  ];
}