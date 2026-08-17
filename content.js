(function() {
    'use strict';
    const params = new URLSearchParams(window.location.search);
    const promptText = params.get('prompt') || params.get('q'); 

    if (!promptText) return;


    function fillGeminiInput() {

        const inputBox = document.querySelector('div[contenteditable="true"][role="textbox"]');
        console.log(inputBox);
        if (inputBox) {

            inputBox.focus();
   
            inputBox.textContent = promptText;

            inputBox.dispatchEvent(new InputEvent('input', { bubbles: true }));



            setTimeout(() => {
                inputBox.dispatchEvent(new KeyboardEvent('keydown', {
                    key: 'Enter',
                    code: 'Enter',
                    keyCode: 13,
                    which: 13,
                    bubbles: true,
                    cancelable: true
                }));
                inputBox.dispatchEvent(new KeyboardEvent('keyup', {
                    key: 'Enter',
                    code: 'Enter',
                    keyCode: 13,
                    which: 13,
                    bubbles: true,
                    cancelable: true
                }));
            }, 150);

            return true; 
        }
        return false; 
    }



    let attempts = 0;
    const maxAttempts = 20; 

    const intervalId = setInterval(() => {
        attempts++;
        const success = fillGeminiInput();

        if (success || attempts >= maxAttempts) {
            clearInterval(intervalId);
        }
    }, 500);
})();
