//* 1.Selecting with attribute selectors
document.querySelectorAll("input[name='vehicleClasses[]']");

//* 2.Selecting Previous Element
document.querySelector(".heart-button").previousElementSibling;

// 3.Kind of depricated. We shouldn't use this.
//* insertBefore()
parentNode.insertBefore(newNode, referenceNode);
// parentNode = In which element we want to insert the new node before the reference node.
/**
 * <parentNode>
 *  node1
 *  node2 
 *  ....
 *  newNode
 *  referenceNode
 *  ....
 *  </parentNode>
 */

//* insertAfter()
parentNode.insertAfter(newNode, referenceNode);

// 4.Instead we should use before() and after()
//* before()
//* after()
Node.after(...nodes);
/**
 * let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span, "Text");

console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"
 *
*/

// 5.insertAdjacentElement()
