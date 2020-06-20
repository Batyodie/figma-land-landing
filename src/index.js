import './styles.css'
import './project/common-devises.blocks/mobile.blocks/burger-btn/burger-overlay'
import './project/common.blocks/bar/bar'
import './project/common-devises.blocks/mobile.blocks/section-file-task/section-file-task'
import './project/common.blocks/modal/base'
import './project/common.blocks/modal/modal'

const modal = $.modal({
    title: 'Modal window',
    closable: true,
    content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
  `,
    width: '400px',
    footerButtons: [
        {text: 'Ок', type: 'primary', handler() {
                modal.close()
            }},
        {text: 'Cancel', type: 'danger', handler() {
                modal.close()
            }}
    ]
})
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
const button = document.querySelectorAll('.btn')
    button.forEach(function (e) {
    e.addEventListener('click', function () {
    modal.open()
    })
})
