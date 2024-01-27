function hook(){

   Java.perform(function () {

      var myapplication = Java.use("com.example.myapplication.MainActivity$1");
      var utils = Java.use("android.text.TextUtils");
      console.log("myapplication",myapplication.$list());

      console.log(">>> load successfully");
      console.log('onclick:',myapplication.onClick);

      utils.equals.implementation = function (a,b){
            console.log("结果是:",this.equals(a,b));
            console.log("a, b是:", a,b);
            return true;
      }

      myapplication.onClick.implementation = function (a) {
   
         console.log("你点击了按钮", a );
         return this.onClick(a);
      }
   })

}

setImmediate(hook);