var sfContainer = $('#supportflows-container');
var body = $('body');
var domSelector = $('.select-dom');

if (sfContainer.is(":visible")) {
    sfContainer.hide();
    body.css('margin-right', '0');
    domSelector.off('click', function() {
        $this.removeClass('is-selected');
    });
} else {
    sfContainer.show();
    body.css('margin-right', '350px');
    domSelector.on('click', function() {
        $this = $(this);
        // Handle .is-selected class
        if ($this.hasClass('is-selected')) {
            $this.removeClass('is-selected');
            deactivateDomSelection();
        } else {
            $this.addClass('is-selected');
            activateDomSelection();
        }
    });
}

function activateDomSelection() {
    $('a').on('mouseenter', function() {
        var thisPath = $(this).fullSelector();
        console.log(thisPath);
        $('.dom-path').val(thisPath);
        $(this).css('outline', '1px solid #E52F28');
    }).on('mouseleave', function() {
        $(this).css('outline', 'none');
    });
}

function deactivateDomSelection() {
    $('a').off('mouseenter').off('mouseleave');
    $('.dom-path').val('');
}

$.fn.fullSelector = function () {
    var path = this.parents().addBack();
    var quickCss = path.get().map(function (item) {
        var self = $(item),
            id = item.id ? '#' + item.id : '',
            clss = item.classList.length ? item.classList.toString().split(' ').map(function (c) {
                return '.' + c;
            }).join('') : '',
            name = item.nodeName.toLowerCase(),
            index = self.siblings(name).length ? ':nth-child(' + (self.index() + 1) + ')' : '';
        
        if (name === 'html' || name === 'body') {
            return name;
        }
        return name + index + id + clss;
        
    }).join(' > ');

    return quickCss;
};