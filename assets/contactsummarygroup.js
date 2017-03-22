/* Contact Summary: Show Groups */

cj(function ($) {

    // Get groups and add them to the contact summary page
    $.csgGetGroups = function () {

        var contactId = $('#cs_csg').attr('data-contactid');
        var resultDiv = $('#cs_csg_inner .crm-content');

        CRM.api3('Contact', 'getgroups', {
            'sequential': 1,
            'contact_id': contactId,
            'return': ['title']
        }, {
            success: function (result) {
                if (!result.is_error) {
                    if(result.values != undefined && result.values.length > 0) {
                        var groupNames = result.values.map(function (value) {
                            return '<span class="crm-tag-item">' + value.title + '</span>';
                        }).join(' ');
                        resultDiv.html('<div>' + groupNames + '</div>');
                    } else {
                        resultDiv.html('<div></div>'); // Not a member of any groups
                    }
                } else {
                    window.console && console.log('csgGetGroups error!', result);
                    resultDiv.html('<div>ERROR</div>');
                }
            },
            error: function (result) {
                window.console && console.log('csgGetGroups error!', result);
                resultDiv.html('<div>ERROR</div>');
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