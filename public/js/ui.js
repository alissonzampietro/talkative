export const updatePersonalCode = (personalCode) => {
    const personalCodeParagraph = document.getElementById('personal_code_paragraph');
    personalCodeParagraph.innerHTML = personalCode;
}

export const registerEvents = () => {
    document.getElementById("personal_code_copy_button").addEventListener("click", function() {
        console.log('FUNCIONANDO'); 
     });
}