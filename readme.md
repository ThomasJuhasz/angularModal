# Wrapper around angular bootstrap modal
The reason behind this component and service is to be able to create unified modal windows throughout the whole page in a simple way.

Prerequisites:
1. npm install angular-ui-bootstrap
2. reference it in your module definition

```javascript
angular.module('thjTestApp', ['ui.bootstrap']);
```

## Usage:

### Opening a modal window
```javascript
//use the cnModalService open or openSmall functions, pass in a piece of html, 
//or a component that you'd like to show inside and pass in an optional object that the modal should use
var cancelModal = cnModalService.open('<thj-cancel-order-modal />', myObject);

cancelModal.then(function (cancelOrderResult) {
    //do anything with your result here
});
```

To create this 'thj-cancel-order-modal' that we've used in the previous example you can use some prepared handy components that will help you build your modal window.
These will only help you create similar modal windows, e.g.: they will all have the same classes applied.
The template of this new modal component you're implementing should be as following:

```html
<thj-modal class="your-modals-class">
    <thj-modal-header>your modal title</thj-modal-header>
    <thj-modal-body>
        your html here
    </thj-modal-body>
</thj-modal>
```

The controller of the component can be a simple controller with nothing modal specific if you'd only like to show a simple message.
To use the parameters or methods that the modal wrapper can give the controller, you have to get the current wrapper from the cnModalService.
That modal object can be used to get the object added as parameter from in the modalService.open

```javascript
var modal = cnModalService.getModal();

//if this modal was created by the first example, the model.data will contain myObject
vm.incomingData = modal.data; 

vm.onButtonPushedOnUI = function () {
        //You can use the closeWithResult function to close the modal and return a value in the promise.
        //In the top example this {orderCancelled: true} object will be the cancelOrderResult in the promise's then function
        modal.closeWithResult({ orderCancelled: true });
    });
};
```

See the files in the modal implementation and modal usage folders to see these examples with the surrounding code.
Note that these examples were taken out of context from a working app and will not work on their own, their purpose is to show how to implement the modals in your own application