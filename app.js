let checkboxes = Array.from(document.querySelectorAll('input[type = "checkbox"'));

let lastChecked;

function handleChecked(e) {
        if(e.shiftKey){
            let inBetween = false;
            checkboxes.forEach(checkbox => {
                if(checkbox === this || checkbox === lastChecked){
                    inBetween = !inBetween;
                    return;
                }
                if(inBetween)
                    checkbox.checked = !checkbox.checked;
            });
        }
        lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleChecked));
