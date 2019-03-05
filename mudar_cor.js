$(function() {
    $('.map').maphilight({
        fillColor: '008800'
    });
    $('#testa').click(function(e) {
        e.preventDefault();
        var data = $('#testa').mouseout().data('maphilight') || {};
        data.alwaysOn = !data.alwaysOn;
        $('#testa').data('maphilight', data).trigger('alwaysOn.maphilight');
    });
    $('#olho').click(function(e) {
        e.preventDefault();
        var data = $('#olho').mouseout().data('maphilight') || {};
        data.alwaysOn = !data.alwaysOn;
        $('#olho').data('maphilight', data).trigger('alwaysOn.maphilight');
    });
});