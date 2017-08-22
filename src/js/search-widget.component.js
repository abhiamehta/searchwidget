class controller {
    constructor () {}
  }
  
  export default {
    templateUrl: '../html/search-widget.template.template.html',
    bindings: { dataset: '=', success:'&' },
    controller: function () {
     // use this.parent to access required Objects
     var vm = this;      
     if (vm.dataset && typeof vm.dataset.then === 'function') {
          vm.dataset.then(function(data){vm.dataset = data.data});
     }  
     vm.alertmessage = function(item){
      alert(item);
     }
    }
  };