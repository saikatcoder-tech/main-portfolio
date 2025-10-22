const filterButton = document.querySelectorAll(".filter-button");
const aboutContent = document.querySelectorAll(".about-content");

filterButton.forEach(btn => {
    btn.addEventListener("click", () => {
        const dataTarget = btn.getAttribute('data-target');
        
        filterButton.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        

        aboutContent.forEach(box => {
            if(box.id === dataTarget){
                box.classList.add("active");
            }else{
                box.classList.remove("active");
            }
        });
    });
});