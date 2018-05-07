// JavaScript source code
(function() {
    IkiSetir = function (selector) {
        _self = this;
        var element = document.querySelector(selector);
        this.height = (element.clientHeight);
        this.width = (element.clientWidth);
        this.css = function(setting) {
            for (var prop in setting) {
                for (var gprop in element.style) {
                    if (prop == gprop) {
                        element.style[gprop] = setting[prop];
                    }
                }
            }
            return this;
        };
        this.slideUp = function (time) {
            count = element.clientHeight;
            var interval = setInterval(function() {
                    count--;
              _self.css({
                    height:count+"px"
                })
                    console.log(count)
                    if (count < 1) {
                        clearInterval(interval);
                    }
                },
                 time / this.height);
            return this;
        }

    }
})()