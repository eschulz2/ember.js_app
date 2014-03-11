InfoTracker.GetInfoItems = function() {
    $.ajax({
        url: '/info/',
        dataType: 'json',
        success : function(data) {
            for (var i = 0, len = data.length; i < len; i++) {
                InfoTracker.infoController.addItem(InfoTracker.Info.create({
                    title: data[i]['title'],
                    link: data[i]['link'],
                }));
            }
        } });
};
