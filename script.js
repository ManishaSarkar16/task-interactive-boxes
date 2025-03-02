document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".accordion-header").forEach((accordion=>{
        accordion.addEventListener("click",() => {
            const parent = accordion.closest(".accordion-outer");
            if(parent.classList.contains("show")) return

            document.querySelector(".show")?.classList.remove("show")
            parent.classList.add("show");
            
            const checkbox = parent.querySelector("[type='radio']");
            checkbox && (checkbox.checked = true)
        })
    }))
});
