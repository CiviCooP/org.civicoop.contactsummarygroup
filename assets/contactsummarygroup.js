/* Contact Summary: Show Groups */

cj(function ($) {

    // Get groups and add them to the contact summary page
    $.csgGetGroups = function () {

        var contactId = $('#cs_csg').attr('data-contactid');
        CRM.api3('Contact', 'getsingle', {
            'sequential': 1,
            'contact_id': contactId,
            'return': ['group']
        }, {
            success: function (result) {
                if (!result.is_error) {
                    // window.console && console.log(result);
                    var groups = result.groups.split(',').join(', ');
                    $('#cs_csg_inner .crm-content').html('<div>' + groups + '</div>');
                }
            },
            error: function (result) {
                window.console && console.log(result);
                $('#cs_csg_inner .crm-content').html('<div>ERROR</div>');
            }
        });
    }

    var $csGroupsRow = $('#cs_csg');
    var $csRightFirstRow = $('.contactCardRight .crm-summary-row').first();

    if ($csGroupsRow.length > 0 && $csRightFirstRow.length > 0) {
        // Put groups block in the right place
        $csGroupsRow.detach().insertBefore($csRightFirstRow.first());

        // Get groups on load (could be made configurable)
        $.csgGetGroups();
    }

    // Switch tabs when clicking groups link
    $('.crm-inline-edit-container').on('click', '#cs_csg_inner a', function () {
        $('#tab_group a').trigger('click');
        return false;
    });

});