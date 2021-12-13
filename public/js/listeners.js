export default function(store) {
    document.getElementById("personal_code_copy_button").addEventListener("click", function() {
        const personalCode = store.getState().socketId;
        navigator.clipboard && navigator.clipboard.writeText(personalCode); 
    });
}