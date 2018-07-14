var app = angular.module('app', []);


angular
    .module('app')
    .factory('tanBox', tanBox);

tanBox.$inject = ['$timeout','$compile'];

function tanBox($timeout,$compile) {
    var tanBox = {
        idx:[],
        options: {
            zIndex: 1040,

        },
        createTanBox: createTanBox,
        close: closeTanBox
    };

    return tanBox;

    ////////////////
    function createTanBox(options) {
        var that = this;
        var opts = angular.extend(options || {}, this.options);
        createElement(that,opts);
        console.log(tanBox)

    }

    function createElement(_this,options){
        var time = new Date().getTime();
        _this.idx.push(time);
        var div = document.createElement('div');
        div.id = time;
        div.style.zIndex = _this.options.zIndex + (_this.idx.length * 20);
        div.style.backgroundColor = "#FFF";
        div.style.position = 'fixed';
        div.style.top = 0;
        div.style.bottom = 0;
        div.style.left = 0;
        div.style.right = 0;
        div.style.opacity = 0;
        div.style.display = 'none';
        var close = document.createElement('span');
        close.className = "close";
        close.style.fontSize = '20px';
        close.innerHTML = '&times';
        close.style.position = 'absolute';
        close.style.width = '20px';
        close.style.height = '20px';
        close.style.right = '20px';
        close.style.top = '20px';
        close.style.textAlign = 'center';
        close.style.lineHeight = '20px';
        close.style.color = '#222';
        close.addEventListener('click',function(e){
            closeTanBox(_this,time);
        })
        document.body.appendChild(div);
        angular.element(div).append(options.template).append(close);
        if(!options.compileFn) {
            throw new ReferenceError("compileFn is not defined. tanBox need a param compileFn which is a function");
            return;
        }
        options.compileFn(angular.element(div));
        div.style.opacity = .5;
        div.style.display = 'block';
        // div.innerHTML = options.template;
        // div.appendChild(close);
        // document.body.appendChild(div);
        // angular.element('body').append(angular.element(div));
        
        
    }

    function closeTanBox(_this,id){
        var elem = document.getElementById(id);
        document.body.removeChild(elem);
        for(var i = 0;i<_this.idx.length;i++){
            if(_this.idx[i] == id){
                _this.idx.splice(i,1);
                break;
            }
        }
        console.log(_this)
    }
}