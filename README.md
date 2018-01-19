# what this can do

As we bind an async method on a button
```js
document.getElementById('btn').onclick = function() {
    $.ajax({
        success: function(res) {
            // ...
        }
    })
}
```
oh! that's done 
but think about it carefully, we can find this button can be click more than once and every click will sent an ajax request. Sometimes that's we don't expect
we probaly want to disable the button until the request response sent back 

OK, let's see what we can do